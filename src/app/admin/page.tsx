'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import {
  getStoredSubmissions,
  updateStoredSubmissionStatus,
  getStoredActivities,
  saveStoredActivity,
  getStoredNotes,
  saveStoredNote,
  updateStoredNote,
  deleteStoredNote,
} from '@/lib/storage/inquiries';

interface Submission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  enquiry_type: string;
  message: string;
  project_details: string | null;
  submitted_at: string;
  status: string;
  qualification_score: number;
}

interface Activity {
  id: string;
  submission_id: string;
  activity_type: 'email' | 'call' | 'note';
  title: string;
  body: string | null;
  created_by: string | null;
  created_at: string;
}

interface ProspectNote {
  id: string;
  submission_id: string;
  note_text: string;
  is_action_item: boolean;
  follow_up_date: string | null;
  is_completed: boolean;
  created_by: string | null;
  created_at: string;
}

const STATUS_OPTIONS = ['new', 'contacted', 'qualified', 'proposal', 'closed_won', 'closed_lost'];

const STATUS_LABELS: Record<string, string> = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  proposal: 'Proposal Sent',
  closed_won: 'Closed Won',
  closed_lost: 'Closed Lost',
};

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
  contacted: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
  qualified: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  proposal: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  closed_won: 'bg-green-500/20 text-green-300 border border-green-500/30',
  closed_lost: 'bg-red-500/20 text-red-300 border border-red-500/30',
};

const PIPELINE_STAGES = ['new', 'contacted', 'qualified', 'proposal', 'closed_won', 'closed_lost'];

const ACTIVITY_ICONS: Record<string, React.ReactNode> = {
  email: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  call: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
    </svg>
  ),
  note: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
};

const ACTIVITY_COLORS: Record<string, string> = {
  email: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  call: 'bg-green-500/20 text-green-300 border-green-500/30',
  note: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
};

function computeQualificationScore(sub: Submission): number {
  let score = 0;
  // Industry / enquiry type signals
  if (sub.enquiry_type === 'hiring') score += 25;
  else if (sub.enquiry_type === 'partnership') score += 20;
  else if (sub.enquiry_type === 'consulting') score += 15;
  else score += 10;
  // Company presence
  if (sub.company) score += 15;
  // Phone provided (engagement signal)
  if (sub.phone) score += 10;
  // Project details provided
  if (sub.project_details && sub.project_details.length > 50) score += 20;
  else if (sub.project_details) score += 10;
  // Message length (engagement depth)
  if (sub.message && sub.message.length > 200) score += 15;
  else if (sub.message && sub.message.length > 80) score += 8;
  // Pipeline stage bonus
  if (sub.status === 'qualified' || sub.status === 'proposal') score += 15;
  else if (sub.status === 'contacted') score += 8;
  return Math.min(score, 100);
}

function getScoreColor(score: number): string {
  if (score >= 70) return 'text-green-400';
  if (score >= 40) return 'text-yellow-400';
  return 'text-red-400';
}

function getScoreBg(score: number): string {
  if (score >= 70) return 'bg-green-500/15 border-green-500/30';
  if (score >= 40) return 'bg-yellow-500/15 border-yellow-500/30';
  return 'bg-red-500/15 border-red-500/30';
}

function getScoreLabel(score: number): string {
  if (score >= 70) return 'High';
  if (score >= 40) return 'Medium';
  return 'Low';
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatDateTime(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// ─── Activity Timeline Component ────────────────────────────────────────────
function ActivityTimeline({ submissionId, userEmail }: { submissionId: string; userEmail: string }) {
  const supabase = createClient();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newType, setNewType] = useState<'email' | 'call' | 'note'>('note');
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchActivities = useCallback(async () => {
    setLoading(true);
    // 1. Always load instantly from localStorage so saved touchpoints are never lost
    const local = getStoredActivities(submissionId);
    try {
      const { data } = await supabase
        .from('prospect_activities')
        .select('*')
        .eq('submission_id', submissionId)
        .order('created_at', { ascending: false });

      if (data && data.length > 0) {
        const mergedMap = new Map();
        local.forEach((a) => mergedMap.set(a.id, a));
        data.forEach((a: any) => mergedMap.set(a.id, a));
        const merged = Array.from(mergedMap.values()).sort(
          (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setActivities(merged);
      } else {
        setActivities(local);
      }
    } catch {
      setActivities(local);
    } finally {
      setLoading(false);
    }
  }, [submissionId]);

  useEffect(() => { fetchActivities(); }, [fetchActivities]);

  const addActivity = async () => {
    if (!newTitle.trim()) return;
    setSaving(true);
    const newAct: Activity = {
      id: `act-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      submission_id: submissionId,
      activity_type: newType,
      title: newTitle.trim(),
      body: newBody.trim() || null,
      created_by: userEmail || 'Admin',
      created_at: new Date().toISOString(),
    };

    // 1. Save to local storage immediately
    saveStoredActivity(newAct);
    // 2. Immediately reflect in state
    setActivities((prev) => [newAct, ...prev.filter((a) => a.id !== newAct.id)]);

    // 3. Attempt cloud sync (deferred/safe)
    try {
      await supabase.from('prospect_activities').insert({
        submission_id: submissionId,
        activity_type: newType,
        title: newTitle.trim(),
        body: newBody.trim() || null,
        created_by: userEmail,
      });
    } catch (err) {
      console.warn('Supabase activity sync deferred, saved locally:', err);
    }

    setNewTitle('');
    setNewBody('');
    setShowForm(false);
    setSaving(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">Activity Timeline</div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 font-semibold transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Log Activity
        </button>
      </div>

      {showForm && (
        <div className="mb-4 bg-white/5 border border-white/15 rounded-xl p-4 space-y-3">
          <div className="flex gap-2">
            {(['email', 'call', 'note'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setNewType(t)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all capitalize ${
                  newType === t ? 'bg-accent text-primary border-accent' : 'bg-white/5 text-white/60 border-white/15 hover:text-white'
                }`}
              >
                {ACTIVITY_ICONS[t]}
                {t}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder={`${newType === 'email' ? 'Email subject' : newType === 'call' ? 'Call summary' : 'Note title'}...`}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent/50"
          />
          <textarea
            placeholder="Additional details (optional)..."
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
            rows={2}
            className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent/50 resize-none"
          />
          <div className="flex gap-2">
            <button
              onClick={addActivity}
              disabled={saving || !newTitle.trim()}
              className="px-4 py-1.5 bg-accent text-primary text-xs font-bold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-4 py-1.5 bg-white/8 text-white/60 text-xs font-semibold rounded-lg hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="py-4 flex justify-center">
          <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>
      ) : activities.length === 0 ? (
        <div className="text-center py-5 text-white/30 text-xs">No activity logged yet. Log the first touchpoint above.</div>
      ) : (
        <div className="space-y-2">
          {activities.map((act) => (
            <div key={act.id} className="flex gap-3 items-start">
              <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center mt-0.5 ${ACTIVITY_COLORS[act.activity_type]}`}>
                {ACTIVITY_ICONS[act.activity_type]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white text-xs font-semibold">{act.title}</span>
                  <span className="text-white/35 text-xs">{formatDateTime(act.created_at)}</span>
                  {act.created_by && <span className="text-white/30 text-xs">· {act.created_by}</span>}
                </div>
                {act.body && <p className="text-white/55 text-xs mt-0.5 leading-relaxed">{act.body}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Internal Notes Component ────────────────────────────────────────────────
function InternalNotes({ submissionId, userEmail }: { submissionId: string; userEmail: string }) {
  const supabase = createClient();
  const [notes, setNotes] = useState<ProspectNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [isAction, setIsAction] = useState(false);
  const [followUpDate, setFollowUpDate] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchNotes = useCallback(async () => {
    setLoading(true);
    // 1. Always load instantly from localStorage so notes never disappear on refresh
    const local = getStoredNotes(submissionId);
    try {
      const { data } = await supabase
        .from('prospect_notes')
        .select('*')
        .eq('submission_id', submissionId)
        .order('created_at', { ascending: false });

      if (data && data.length > 0) {
        const mergedMap = new Map();
        local.forEach((n) => mergedMap.set(n.id, n));
        data.forEach((n: any) => mergedMap.set(n.id, n));
        const merged = Array.from(mergedMap.values()).sort(
          (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setNotes(merged);
      } else {
        setNotes(local);
      }
    } catch {
      setNotes(local);
    } finally {
      setLoading(false);
    }
  }, [submissionId]);

  useEffect(() => { fetchNotes(); }, [fetchNotes]);

  const addNote = async () => {
    if (!noteText.trim()) return;
    setSaving(true);
    const newNote: ProspectNote = {
      id: `note-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      submission_id: submissionId,
      note_text: noteText.trim(),
      is_action_item: isAction,
      follow_up_date: followUpDate || null,
      is_completed: false,
      created_by: userEmail || 'Admin',
      created_at: new Date().toISOString(),
    };

    // 1. Immediately save to persistent client store
    saveStoredNote(newNote);
    // 2. Immediately reflect in state
    setNotes((prev) => [newNote, ...prev.filter((n) => n.id !== newNote.id)]);

    // 3. Attempt cloud sync (deferred/safe)
    try {
      await supabase.from('prospect_notes').insert({
        submission_id: submissionId,
        note_text: noteText.trim(),
        is_action_item: isAction,
        follow_up_date: followUpDate || null,
        created_by: userEmail,
      });
    } catch (err) {
      console.warn('Supabase note deferred, safely stored locally:', err);
    }

    setNoteText('');
    setIsAction(false);
    setFollowUpDate('');
    setShowForm(false);
    setSaving(false);
  };

  const toggleComplete = async (note: ProspectNote) => {
    const updated = { ...note, is_completed: !note.is_completed };
    updateStoredNote(updated);
    setNotes((prev) => prev.map((n) => (n.id === note.id ? updated : n)));
    try {
      await supabase
        .from('prospect_notes')
        .update({ is_completed: updated.is_completed })
        .eq('id', note.id);
    } catch {}
  };

  const deleteNote = async (id: string) => {
    deleteStoredNote(submissionId, id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
    try {
      await supabase.from('prospect_notes').delete().eq('id', id);
    } catch {}
  };

  const pending = notes.filter((n) => n.is_action_item && !n.is_completed);
  const others = notes.filter((n) => !n.is_action_item || n.is_completed);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">Internal Notes & Actions</div>
          {pending.length > 0 && (
            <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs px-2 py-0.5 rounded-full font-bold">
              {pending.length} pending
            </span>
          )}
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 font-semibold transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Note
        </button>
      </div>

      {showForm && (
        <div className="mb-4 bg-white/5 border border-white/15 rounded-xl p-4 space-y-3">
          <textarea
            placeholder="Write an internal note or action item..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            rows={3}
            className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent/50 resize-none"
          />
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isAction}
                onChange={(e) => setIsAction(e.target.checked)}
                className="w-3.5 h-3.5 accent-yellow-400"
              />
              <span className="text-xs text-white/60">Action item</span>
            </label>
            {isAction && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/40">Follow-up by:</span>
                <input
                  type="date"
                  value={followUpDate}
                  onChange={(e) => setFollowUpDate(e.target.value)}
                  className="bg-white/5 border border-white/15 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-accent/50"
                />
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={addNote}
              disabled={saving || !noteText.trim()}
              className="px-4 py-1.5 bg-accent text-primary text-xs font-bold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-4 py-1.5 bg-white/8 text-white/60 text-xs font-semibold rounded-lg hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="py-4 flex justify-center">
          <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>
      ) : notes.length === 0 ? (
        <div className="text-center py-5 text-white/30 text-xs">No internal notes yet. Add context for your team above.</div>
      ) : (
        <div className="space-y-2">
          {[...pending, ...others].map((note) => (
            <div
              key={note.id}
              className={`flex gap-3 items-start p-3 rounded-xl border transition-all ${
                note.is_action_item && !note.is_completed
                  ? 'bg-orange-500/8 border-orange-500/20' :'bg-white/3 border-white/8'
              }`}
            >
              {note.is_action_item && (
                <button
                  onClick={() => toggleComplete(note)}
                  className={`flex-shrink-0 w-4 h-4 rounded border mt-0.5 flex items-center justify-center transition-all ${
                    note.is_completed ? 'bg-green-500/30 border-green-500/50' : 'border-orange-400/50 hover:border-orange-400'
                  }`}
                >
                  {note.is_completed && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-400">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              )}
              <div className="flex-1 min-w-0">
                <p className={`text-xs leading-relaxed ${note.is_completed ? 'line-through text-white/30' : 'text-white/75'}`}>
                  {note.note_text}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {note.is_action_item && !note.is_completed && (
                    <span className="text-orange-400/70 text-xs font-semibold">Action item</span>
                  )}
                  {note.follow_up_date && !note.is_completed && (
                    <span className="text-white/35 text-xs">
                      Follow-up: {formatDate(note.follow_up_date)}
                    </span>
                  )}
                  <span className="text-white/25 text-xs">{formatDateTime(note.created_at)}</span>
                  {note.created_by && <span className="text-white/25 text-xs">· {note.created_by}</span>}
                </div>
              </div>
              <button
                onClick={() => deleteNote(note.id)}
                className="flex-shrink-0 text-white/20 hover:text-red-400 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Score Badge ─────────────────────────────────────────────────────────────
function ScoreBadge({ score }: { score: number }) {
  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${getScoreBg(score)}`}>
      <span className={getScoreColor(score)}>{score}</span>
      <span className="text-white/40 font-normal">{getScoreLabel(score)}</span>
    </div>
  );
}

// ─── Main Admin Page ──────────────────────────────────────────────────────────
export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandedTab, setExpandedTab] = useState<'details' | 'timeline' | 'notes'>('details');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'table' | 'pipeline'>('table');
  const [signingOut, setSigningOut] = useState(false);

  const { user, loading: authLoading, signOut } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/admin/login');
    }
  }, [user, authLoading, router]);

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await signOut();
      router.replace('/admin/login');
    } catch {
      setSigningOut(false);
    }
  };

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError(null);
    const local = getStoredSubmissions();
    try {
      const { data, error: fetchError } = await supabase
        .from('inquiry_submissions')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (!fetchError && data && data.length > 0) {
        const mergedMap = new Map();
        local.forEach((s) =>
          mergedMap.set(s.id, { ...s, qualification_score: computeQualificationScore(s as Submission) })
        );
        data.forEach((s: any) =>
          mergedMap.set(s.id, { ...s, qualification_score: computeQualificationScore(s as Submission) })
        );
        const enriched = Array.from(mergedMap.values()).sort(
          (a: any, b: any) => new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime()
        );
        setSubmissions(enriched);
      } else {
        const enriched = local.map((s) => ({
          ...s,
          qualification_score: computeQualificationScore(s as Submission),
        }));
        setSubmissions(enriched);
      }
    } catch {
      const enriched = local.map((s) => ({
        ...s,
        qualification_score: computeQualificationScore(s as Submission),
      }));
      setSubmissions(enriched);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();

    const handleSubCreated = () => fetchSubmissions();
    const handleStorageChange = () => fetchSubmissions();
    window.addEventListener('tasknera_submission_created', handleSubCreated);
    window.addEventListener('tasknera_submission_updated', handleSubCreated);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('tasknera_submission_created', handleSubCreated);
      window.removeEventListener('tasknera_submission_updated', handleSubCreated);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [fetchSubmissions]);

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    // 1. Immediately persist to localStorage
    updateStoredSubmissionStatus(id, newStatus);

    // 2. Immediately update state
    setSubmissions((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const updated = { ...s, status: newStatus };
        return { ...updated, qualification_score: computeQualificationScore(updated) };
      })
    );

    // 3. Attempt Supabase sync
    try {
      await supabase
        .from('inquiry_submissions')
        .update({ status: newStatus })
        .eq('id', id);
    } catch (err) {
      console.warn('Supabase status update deferred:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = filterStatus === 'all'
    ? submissions
    : submissions.filter((s) => s.status === filterStatus);

  const pipelineCounts = PIPELINE_STAGES.reduce<Record<string, Submission[]>>((acc, stage) => {
    acc[stage] = submissions.filter((s) => s.status === stage);
    return acc;
  }, {});

  // Sort pipeline cards by score descending
  const sortedPipeline = PIPELINE_STAGES.reduce<Record<string, Submission[]>>((acc, stage) => {
    acc[stage] = [...(pipelineCounts[stage] || [])].sort((a, b) => b.qualification_score - a.qualification_score);
    return acc;
  }, {});

  const handleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setExpandedTab('details');
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/70 text-sm">Admin</span>
          </div>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-700 text-white mb-2">
                Prospect Pipeline
              </h1>
              <p className="text-white/55 text-base">
                {submissions.length} total submission{submissions.length !== 1 ? 's' : ''} · Manage and track your contact form leads
              </p>
            </div>
            <div className="flex items-center gap-3">
              {user && (
                <span className="text-white/40 text-xs hidden sm:block">{user.email}</span>
              )}
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className="flex items-center gap-2 bg-white/8 border border-white/15 hover:bg-white/12 text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-xl transition-all disabled:opacity-50"
              >
                {signingOut ? (
                  <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                )}
                Sign out
              </button>
            </div>
          </div>
        </div>

        {/* Pipeline Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {PIPELINE_STAGES.map((stage) => (
            <button
              key={stage}
              onClick={() => setFilterStatus(filterStatus === stage ? 'all' : stage)}
              className={`rounded-xl p-4 text-left transition-all border ${
                filterStatus === stage
                  ? 'bg-accent/20 border-accent/50' : 'bg-white/5 border-white/10 hover:bg-white/8'
              }`}
            >
              <div className="text-2xl font-bold text-white mb-1">
                {pipelineCounts[stage]?.length ?? 0}
              </div>
              <div className="text-xs text-white/55 leading-tight">{STATUS_LABELS[stage]}</div>
            </button>
          ))}
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-1 mb-6 bg-white/5 rounded-xl p-1 w-fit border border-white/10">
          <button
            onClick={() => setActiveTab('table')}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'table' ? 'bg-accent text-primary shadow' : 'text-white/60 hover:text-white'
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'pipeline' ? 'bg-accent text-primary shadow' : 'text-white/60 hover:text-white'
            }`}
          >
            Pipeline View
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4 text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
          </div>
        )}

        {/* TABLE VIEW */}
        {!loading && activeTab === 'table' && (
          <>
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  filterStatus === 'all' ? 'bg-accent text-primary border-accent' : 'bg-white/5 text-white/60 border-white/15 hover:text-white'
                }`}
              >
                All ({submissions.length})
              </button>
              {STATUS_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(filterStatus === s ? 'all' : s)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                    filterStatus === s
                      ? 'bg-accent text-primary border-accent' : 'bg-white/5 text-white/60 border-white/15 hover:text-white'
                  }`}
                >
                  {STATUS_LABELS[s]} ({pipelineCounts[s]?.length ?? 0})
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-white/40">
                No submissions found{filterStatus !== 'all' ? ` with status "${STATUS_LABELS[filterStatus]}"` : ''}.
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((sub) => (
                  <div
                    key={sub.id}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
                  >
                    {/* Row Header */}
                    <div
                      className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 cursor-pointer"
                      onClick={() => handleExpand(sub.id)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-white text-sm">{sub.name}</span>
                          {sub.company && (
                            <span className="text-white/45 text-xs">· {sub.company}</span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-white/50">
                          <span>{sub.email}</span>
                          {sub.phone && <span>{sub.phone}</span>}
                          <span>{formatDate(sub.submitted_at)}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <ScoreBadge score={sub.qualification_score} />
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[sub.status] || STATUS_COLORS['new']}`}>
                          {STATUS_LABELS[sub.status] || sub.status}
                        </span>
                        <span className="bg-white/8 text-white/60 text-xs px-2.5 py-1 rounded-full capitalize">
                          {sub.enquiry_type}
                        </span>
                        <svg
                          className={`w-4 h-4 text-white/40 transition-transform ${expandedId === sub.id ? 'rotate-180' : ''}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded Detail */}
                    {expandedId === sub.id && (
                      <div className="border-t border-white/10 bg-white/3">
                        {/* Inner Tab Bar */}
                        <div className="flex items-center gap-1 px-5 pt-4 pb-0">
                          {(['details', 'timeline', 'notes'] as const).map((t) => (
                            <button
                              key={t}
                              onClick={() => setExpandedTab(t)}
                              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all capitalize ${
                                expandedTab === t ? 'bg-white/12 text-white' : 'text-white/45 hover:text-white/70'
                              }`}
                            >
                              {t === 'timeline' ? 'Activity Timeline' : t === 'notes' ? 'Notes & Actions' : 'Details'}
                            </button>
                          ))}
                        </div>

                        <div className="px-5 py-5">
                          {/* DETAILS TAB */}
                          {expandedTab === 'details' && (
                            <>
                              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                <div>
                                  <div className="text-xs text-white/40 mb-1 uppercase tracking-wider">Message</div>
                                  <p className="text-white/80 text-sm leading-relaxed">{sub.message}</p>
                                </div>
                                {sub.project_details && (
                                  <div>
                                    <div className="text-xs text-white/40 mb-1 uppercase tracking-wider">Project Details</div>
                                    <p className="text-white/80 text-sm leading-relaxed">{sub.project_details}</p>
                                  </div>
                                )}
                              </div>

                              {/* Qualification Score Breakdown */}
                              <div className="mb-5 bg-white/3 border border-white/8 rounded-xl p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">Qualification Score</div>
                                  <ScoreBadge score={sub.qualification_score} />
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-1.5">
                                  <div
                                    className={`h-1.5 rounded-full transition-all ${
                                      sub.qualification_score >= 70 ? 'bg-green-400' :
                                      sub.qualification_score >= 40 ? 'bg-yellow-400' : 'bg-red-400'
                                    }`}
                                    style={{ width: `${sub.qualification_score}%` }}
                                  />
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/40">
                                  <span>Enquiry type · Company · Phone · Project details · Message depth · Pipeline stage</span>
                                </div>
                              </div>

                              {/* Status Update */}
                              <div>
                                <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Update Pipeline Stage</div>
                                <div className="flex flex-wrap gap-2">
                                  {STATUS_OPTIONS.map((s) => (
                                    <button
                                      key={s}
                                      disabled={updatingId === sub.id}
                                      onClick={() => updateStatus(sub.id, s)}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                                        sub.status === s
                                          ? 'bg-accent text-primary border-accent' : 'bg-white/5 text-white/60 border-white/15 hover:bg-white/10 hover:text-white'
                                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                      {updatingId === sub.id && sub.status !== s ? (
                                        <span className="flex items-center gap-1.5">
                                          <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                                          {STATUS_LABELS[s]}
                                        </span>
                                      ) : STATUS_LABELS[s]}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}

                          {/* TIMELINE TAB */}
                          {expandedTab === 'timeline' && (
                            <ActivityTimeline submissionId={sub.id} userEmail={user?.email || ''} />
                          )}

                          {/* NOTES TAB */}
                          {expandedTab === 'notes' && (
                            <InternalNotes submissionId={sub.id} userEmail={user?.email || ''} />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* PIPELINE VIEW */}
        {!loading && activeTab === 'pipeline' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PIPELINE_STAGES.map((stage) => (
              <div key={stage} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <span className="font-semibold text-white text-sm">{STATUS_LABELS[stage]}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${STATUS_COLORS[stage]}`}>
                    {pipelineCounts[stage]?.length ?? 0}
                  </span>
                </div>
                <div className="p-3 space-y-2 min-h-[80px]">
                  {(sortedPipeline[stage] || []).length === 0 ? (
                    <div className="text-center py-4 text-white/25 text-xs">No prospects</div>
                  ) : (
                    sortedPipeline[stage].map((sub) => (
                      <div
                        key={sub.id}
                        className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 hover:border-white/20 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2 mb-0.5">
                          <div className="font-semibold text-white text-sm leading-tight">{sub.name}</div>
                          <ScoreBadge score={sub.qualification_score} />
                        </div>
                        {sub.company && (
                          <div className="text-white/50 text-xs mb-1">{sub.company}</div>
                        )}
                        <div className="text-white/40 text-xs mb-2">{sub.email}</div>
                        <div className="flex flex-wrap gap-1">
                          {STATUS_OPTIONS.filter((s) => s !== stage).map((s) => (
                            <button
                              key={s}
                              disabled={updatingId === sub.id}
                              onClick={() => updateStatus(sub.id, s)}
                              className="text-xs text-white/50 hover:text-accent transition-colors disabled:opacity-40"
                              title={`Move to ${STATUS_LABELS[s]}`}
                            >
                              → {STATUS_LABELS[s]}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
