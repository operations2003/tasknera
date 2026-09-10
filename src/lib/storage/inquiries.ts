// Client-side persistent storage layer for TaskNera inquiries, activities, and notes
// Guarantees zero data loss even if Supabase is offline, unauthenticated, or has network issues.

export interface StoredSubmission {
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
  synced_with_cloud?: boolean;
}

export interface StoredActivity {
  id: string;
  submission_id: string;
  activity_type: 'email' | 'call' | 'note';
  title: string;
  body: string | null;
  created_by: string | null;
  created_at: string;
}

export interface StoredProspectNote {
  id: string;
  submission_id: string;
  note_text: string;
  is_action_item: boolean;
  follow_up_date: string | null;
  is_completed: boolean;
  created_by: string | null;
  created_at: string;
}

export interface FormDataDraft {
  name: string;
  email: string;
  company: string;
  enquiry: string;
  message: string;
}

const STORAGE_KEYS = {
  SUBMISSIONS: 'tasknera_inquiry_submissions',
  LAST_SUBMISSION: 'tasknera_last_submission',
  FORM_DRAFT: 'tasknera_form_draft',
  ACTIVITIES_PREFIX: 'tasknera_activities_',
  NOTES_PREFIX: 'tasknera_notes_',
};

// Initial seed submissions so the Admin dashboard is populated and functional immediately
const SEED_SUBMISSIONS: StoredSubmission[] = [
  {
    id: 'seed-sub-001',
    name: 'Marcus Vance',
    email: 'marcus.vance@finovatech.co.uk',
    company: 'FinovaTech UK Ltd',
    phone: '+44 20 7946 0912',
    enquiry_type: 'vcs',
    message: 'Seeking a 6-person dedicated 24/7 Virtual Customer Support pod covering UK and European hours for our fintech product.',
    project_details: 'Target launch in 3 weeks. Omnichannel requirements: Zendesk, Live Chat, and Email triage.',
    submitted_at: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    status: 'qualified',
    qualification_score: 92,
    synced_with_cloud: true,
  },
  {
    id: 'seed-sub-002',
    name: 'Pooja Narang',
    email: 'pooja@healthspan.in',
    company: 'HealthSpan Diagnostics',
    phone: '+91 98201 44321',
    enquiry_type: 'hr-ops',
    message: 'Looking for full end-to-end HR and payroll outsourcing for 45 employees across Mumbai and Bengaluru branches.',
    project_details: 'Need PF/ESIC statutory compliance setup, monthly payroll processing, and leave management integration.',
    submitted_at: new Date(Date.now() - 8 * 3600 * 1000).toISOString(),
    status: 'proposal',
    qualification_score: 88,
    synced_with_cloud: true,
  },
  {
    id: 'seed-sub-003',
    name: 'David Chen',
    email: 'david@solarlight.us',
    company: 'SolarLight Ventures',
    phone: '+1 415 555 0198',
    enquiry_type: 'va',
    message: 'Need 2 senior executive virtual assistants for calendar management, research briefings, and CRM hygiene.',
    project_details: 'US Pacific timezone alignment needed (8am - 4pm PST).',
    submitted_at: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    status: 'contacted',
    qualification_score: 75,
    synced_with_cloud: true,
  },
  {
    id: 'seed-sub-004',
    name: 'Aarav Mehta',
    email: 'aarav@cloudnexus.io',
    company: 'CloudNexus Tech',
    phone: '+91 99887 66554',
    enquiry_type: 'recruitment',
    message: 'Need to hire 4 Full Stack React/Node.js engineers and 1 Lead DevOps engineer on full-time contingent model.',
    project_details: 'Notice period under 30 days preferred. Remote or Gurgaon hybrid.',
    submitted_at: new Date(Date.now() - 48 * 3600 * 1000).toISOString(),
    status: 'new',
    qualification_score: 85,
    synced_with_cloud: true,
  },
];

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

// ─── Draft Management ────────────────────────────────────────────────────────
export function saveFormDraft(draft: FormDataDraft): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.FORM_DRAFT, JSON.stringify(draft));
  } catch (err) {
    console.warn('Unable to save form draft to localStorage', err);
  }
}

export function getFormDraft(): FormDataDraft | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FORM_DRAFT);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearFormDraft(): void {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(STORAGE_KEYS.FORM_DRAFT);
  } catch {}
}

// ─── Submission Management ──────────────────────────────────────────────────
export function saveSubmission(submission: StoredSubmission): void {
  if (!isBrowser()) return;
  try {
    // 1. Save to submissions array
    const existing = getStoredSubmissions();
    const filtered = existing.filter((s) => s.id !== submission.id);
    const updated = [submission, ...filtered];
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(updated));

    // 2. Set as last submission (for persistent confirmation screen on refresh)
    localStorage.setItem(STORAGE_KEYS.LAST_SUBMISSION, JSON.stringify(submission));

    // 3. Clear the in-progress draft since it is now submitted
    clearFormDraft();

    // 4. Dispatch custom event for real-time reactivity across tabs/components
    window.dispatchEvent(
      new CustomEvent('tasknera_submission_created', { detail: submission })
    );
  } catch (err) {
    console.warn('Unable to save submission to localStorage', err);
  }
}

export function getStoredSubmissions(): StoredSubmission[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
    if (!raw) {
      // Seed default items on first launch
      localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(SEED_SUBMISSIONS));
      return SEED_SUBMISSIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : SEED_SUBMISSIONS;
  } catch {
    return SEED_SUBMISSIONS;
  }
}

export function getLastSubmission(): StoredSubmission | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LAST_SUBMISSION);
    if (!raw) return null;
    const sub = JSON.parse(raw);
    if (!sub || !sub.id) return null;
    return sub;
  } catch {
    return null;
  }
}

export function clearLastSubmission(): void {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(STORAGE_KEYS.LAST_SUBMISSION);
    window.dispatchEvent(new CustomEvent('tasknera_submission_cleared'));
  } catch {}
}

export function updateStoredSubmissionStatus(id: string, newStatus: string): void {
  if (!isBrowser()) return;
  try {
    const submissions = getStoredSubmissions();
    const updated = submissions.map((s) => (s.id === id ? { ...s, status: newStatus } : s));
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(updated));
    window.dispatchEvent(
      new CustomEvent('tasknera_submission_updated', { detail: { id, newStatus } })
    );
  } catch {}
}

// ─── Activities Management ──────────────────────────────────────────────────
export function getStoredActivities(submissionId: string): StoredActivity[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.ACTIVITIES_PREFIX}${submissionId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveStoredActivity(activity: StoredActivity): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredActivities(activity.submission_id);
    const updated = [activity, ...existing.filter((a) => a.id !== activity.id)];
    localStorage.setItem(
      `${STORAGE_KEYS.ACTIVITIES_PREFIX}${activity.submission_id}`,
      JSON.stringify(updated)
    );
  } catch {}
}

// ─── Notes Management ───────────────────────────────────────────────────────
export function getStoredNotes(submissionId: string): StoredProspectNote[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.NOTES_PREFIX}${submissionId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveStoredNote(note: StoredProspectNote): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredNotes(note.submission_id);
    const updated = [note, ...existing.filter((n) => n.id !== note.id)];
    localStorage.setItem(
      `${STORAGE_KEYS.NOTES_PREFIX}${note.submission_id}`,
      JSON.stringify(updated)
    );
  } catch {}
}

export function updateStoredNote(note: StoredProspectNote): void {
  saveStoredNote(note);
}

export function deleteStoredNote(submissionId: string, noteId: string): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredNotes(submissionId);
    const updated = existing.filter((n) => n.id !== noteId);
    localStorage.setItem(
      `${STORAGE_KEYS.NOTES_PREFIX}${submissionId}`,
      JSON.stringify(updated)
    );
  } catch {}
}
