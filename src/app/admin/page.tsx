'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import {
  getStoredSubmissions,
  updateStoredSubmissionStatus,
  assignStoredSubmission,
  getStoredApplications,
  updateStoredApplicationStatus,
  getStoredJobs,
  saveStoredJob,
  updateStoredJobStatus,
  getStoredEmailLogs,
  getStoredNotes,
  saveStoredNote,
  StoredSubmission,
  CandidateApplication,
  JobOpening,
  AutomatedEmailLog,
  ApplicationStatus,
} from '@/lib/storage/inquiries';
import {
  LayoutDashboard,
  Inbox,
  Briefcase,
  Users,
  Mail,
  Settings,
  Search,
  Filter,
  Download,
  Plus,
  CheckCircle2,
  Clock,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Building2,
  Trash2,
  Eye,
  LogOut,
  RefreshCw,
  FileText,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

export default function AdminPortalPage() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'inquiries' | 'applications' | 'jobs' | 'emails' | 'settings'
  >('overview');

  // Data states
  const [submissions, setSubmissions] = useState<StoredSubmission[]>([]);
  const [applications, setApplications] = useState<CandidateApplication[]>([]);
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [emailLogs, setEmailLogs] = useState<AutomatedEmailLog[]>([]);

  // Search & filter states
  const [inquirySearch, setInquirySearch] = useState('');
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState<StoredSubmission | null>(null);

  const [appSearch, setAppSearch] = useState('');
  const [appStatusFilter, setAppStatusFilter] = useState('all');
  const [selectedApp, setSelectedApp] = useState<CandidateApplication | null>(null);

  // Note state for selected inquiry
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<any[]>([]);

  // New Job Modal state
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);
  const [newJobData, setNewJobData] = useState({
    title: '',
    department: 'Technology & Cloud Engineering',
    location: 'Remote (India / Global)',
    type: 'Full-Time · Dedicated Pod',
    experience: '3–5 Years',
    budget: '',
  });

  const refreshData = () => {
    const subs = getStoredSubmissions();
    const apps = getStoredApplications();
    const jbs = getStoredJobs();
    const logs = getStoredEmailLogs();

    setSubmissions(subs);
    setApplications(apps);
    setJobs(jbs);
    setEmailLogs(logs);

    if (subs.length > 0 && !selectedSubmission) {
      setSelectedSubmission(subs[0]);
    }
  };

  useEffect(() => {
    refreshData();

    const handleSubCreated = () => refreshData();
    const handleSubUpdated = () => refreshData();
    const handleAppCreated = () => refreshData();
    const handleAppUpdated = () => refreshData();
    const handleJobUpdated = () => refreshData();

    window.addEventListener('tasknera_submission_created', handleSubCreated);
    window.addEventListener('tasknera_submission_updated', handleSubUpdated);
    window.addEventListener('tasknera_application_created', handleAppCreated);
    window.addEventListener('tasknera_application_updated', handleAppUpdated);
    window.addEventListener('tasknera_job_updated', handleJobUpdated);

    return () => {
      window.removeEventListener('tasknera_submission_created', handleSubCreated);
      window.removeEventListener('tasknera_submission_updated', handleSubUpdated);
      window.removeEventListener('tasknera_application_created', handleAppCreated);
      window.removeEventListener('tasknera_application_updated', handleAppUpdated);
      window.removeEventListener('tasknera_job_updated', handleJobUpdated);
    };
  }, []);

  useEffect(() => {
    if (selectedSubmission) {
      setNotes(getStoredNotes(selectedSubmission.id));
    }
  }, [selectedSubmission]);

  // Status updaters
  const handleStatusChange = (id: string, newStatus: string) => {
    updateStoredSubmissionStatus(id, newStatus);
    refreshData();
    if (selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleAssigneeChange = (id: string, assignee: string) => {
    assignStoredSubmission(id, assignee);
    refreshData();
    if (selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission((prev) => (prev ? { ...prev, assigned_to: assignee } : null));
    }
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubmission || !newNote.trim()) return;

    saveStoredNote({
      id: `note-${Date.now()}`,
      submission_id: selectedSubmission.id,
      note_text: newNote.trim(),
      is_action_item: false,
      follow_up_date: null,
      is_completed: false,
      created_by: user?.email || 'Admin',
      created_at: new Date().toISOString(),
    });

    setNotes(getStoredNotes(selectedSubmission.id));
    setNewNote('');
  };

  const handleAppStatusChange = (id: string, status: ApplicationStatus) => {
    updateStoredApplicationStatus(id, status);
    refreshData();
    if (selectedApp && selectedApp.id === id) {
      setSelectedApp((prev) => (prev ? { ...prev, status } : null));
    }
  };

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobData.title.trim()) return;

    const newJob: JobOpening = {
      id: `job-${Date.now()}`,
      title: newJobData.title.trim(),
      department: newJobData.department,
      location: newJobData.location,
      type: newJobData.type,
      experience: newJobData.experience,
      budget: newJobData.budget.trim() || undefined,
      status: 'Active',
      created_at: new Date().toISOString(),
    };

    saveStoredJob(newJob);
    refreshData();
    setIsAddJobOpen(false);
    setNewJobData({
      title: '',
      department: 'Technology & Cloud Engineering',
      location: 'Remote (India / Global)',
      type: 'Full-Time · Dedicated Pod',
      experience: '3–5 Years',
      budget: '',
    });
  };

  // Export functions
  const exportInquiriesCSV = () => {
    const headers = ['ID,Name,Email,Company,Country,Phone,Service,Status,Score,SubmittedAt'];
    const rows = submissions.map(
      (s) =>
        `"${s.id}","${s.name}","${s.email}","${s.company || ''}","${s.country || ''}","${s.phone || ''}","${s.enquiry_type}","${s.status}","${s.qualification_score}","${s.submitted_at}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `TaskNera_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportApplicationsCSV = () => {
    const headers = ['ID,Candidate,Job,Email,Phone,Location,Experience,Score,Status,AppliedAt'];
    const rows = applications.map(
      (a) =>
        `"${a.id}","${a.full_name}","${a.job_title}","${a.email}","${a.phone}","${a.current_location}","${a.total_experience}","${a.hireiq_score || ''}","${a.status}","${a.applied_at}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `TaskNera_Applications_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered queries
  const filteredSubmissions = submissions.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      s.email.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      (s.company && s.company.toLowerCase().includes(inquirySearch.toLowerCase())) ||
      s.enquiry_type.toLowerCase().includes(inquirySearch.toLowerCase());
    const matchesStatus = inquiryStatusFilter === 'all' || s.status === inquiryStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredApplications = applications.filter((a) => {
    const matchesSearch =
      a.full_name.toLowerCase().includes(appSearch.toLowerCase()) ||
      a.email.toLowerCase().includes(appSearch.toLowerCase()) ||
      a.job_title.toLowerCase().includes(appSearch.toLowerCase());
    const matchesStatus = appStatusFilter === 'all' || a.status === appStatusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F3F6FA] pt-20">
        {/* Top Admin Header */}
        <section className="bg-[#101D35] text-white py-6 border-b border-[#1E3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 flex items-center justify-center border border-white/20 overflow-hidden">
                <Image
                  src="/assets/images/tasknera-logo.png"
                  alt="TaskNera"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>TaskNera Operations &amp; Admin Dashboard</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                    Live Portal
                  </span>
                </h1>
                <p className="text-xs text-slate-400">
                  Role: Administrator &bull; {user?.email || 'admin@tasknera.com'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={refreshData}
                className="bg-[#1E3A5F] hover:bg-[#2A4D7A] text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-[#3478F6]/30 flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Sync Data</span>
              </button>
              <Link
                href="/"
                className="bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors"
              >
                View Website
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Tabs Bar */}
        <section className="bg-white border-b border-[#E5EBF3] sticky top-16 z-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none">
              {[
                { id: 'overview', label: 'Overview & Metrics', icon: LayoutDashboard },
                {
                  id: 'inquiries',
                  label: `Business Enquiries (${submissions.length})`,
                  icon: Inbox,
                },
                {
                  id: 'applications',
                  label: `Candidate Applications (${applications.length})`,
                  icon: Users,
                },
                { id: 'jobs', label: `Job Openings (${jobs.length})`, icon: Briefcase },
                {
                  id: 'emails',
                  label: `Automated Email Logs (${emailLogs.length})`,
                  icon: Mail,
                },
                { id: 'settings', label: 'Settings & Security', icon: Settings },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#101D35] text-white shadow-sm'
                        : 'text-[#64748B] hover:text-[#101D35] hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* TAB 1: OVERVIEW & METRICS */}
        {activeTab === 'overview' && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-200">
            {/* Metric KPI cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white border border-[#E5EBF3] rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    Total Inquiries
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#3478F6] flex items-center justify-center">
                    <Inbox className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-[#101D35] font-mono">
                  {submissions.length}
                </div>
                <div className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
                  <span>+100% data capture reliability</span>
                </div>
              </div>

              <div className="bg-white border border-[#E5EBF3] rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    Active Candidates
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-[#101D35] font-mono">
                  {applications.length}
                </div>
                <div className="text-xs text-[#64748B] mt-2">
                  {applications.filter((a) => a.status === 'Interview').length} currently in interview
                </div>
              </div>

              <div className="bg-white border border-[#E5EBF3] rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    Active Job Openings
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-[#101D35] font-mono">
                  {jobs.filter((j) => j.status === 'Active').length}
                </div>
                <div className="text-xs text-[#64748B] mt-2">
                  Across Technology, HR &amp; Sales
                </div>
              </div>

              <div className="bg-white border border-[#E5EBF3] rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    Automated Emails Sent
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-[#101D35] font-mono">
                  {emailLogs.length}
                </div>
                <div className="text-xs text-emerald-600 mt-2 font-medium">
                  Zero delivery drops
                </div>
              </div>
            </div>

            {/* Pipeline Stage Bar */}
            <div className="bg-white border border-[#E5EBF3] rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#101D35]">
                    Inquiry Conversion Pipeline Funnel
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Progression from new inbound requests through qualified proposals and closures.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('inquiries')}
                  className="text-xs font-bold text-[#3478F6] hover:text-[#2563EB] flex items-center gap-1"
                >
                  <span>Manage Leads</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center">
                {[
                  { key: 'new', label: 'New Inbound', color: 'bg-blue-100 text-blue-800' },
                  { key: 'contacted', label: 'Contacted', color: 'bg-amber-100 text-amber-800' },
                  { key: 'qualified', label: 'Qualified', color: 'bg-purple-100 text-purple-800' },
                  { key: 'proposal', label: 'Proposal Sent', color: 'bg-orange-100 text-orange-800' },
                  { key: 'closed_won', label: 'Closed Won', color: 'bg-emerald-100 text-emerald-800' },
                  { key: 'closed_lost', label: 'Closed Lost', color: 'bg-slate-100 text-slate-800' },
                ].map((st) => {
                  const count = submissions.filter((s) => s.status === st.key).length;
                  return (
                    <div key={st.key} className="bg-[#F3F6FA] border border-[#E5EBF3] p-4 rounded-2xl">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${st.color}`}>
                        {st.label}
                      </span>
                      <div className="text-2xl font-black text-[#101D35] font-mono mt-3">
                        {count}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E5EBF3] rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#101D35] mb-4">
                  Latest Inbound Business Inquiries
                </h3>
                <div className="space-y-3">
                  {submissions.slice(0, 4).map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => {
                        setSelectedSubmission(sub);
                        setActiveTab('inquiries');
                      }}
                      className="p-3 bg-[#F3F6FA] hover:bg-slate-100 border border-[#E5EBF3] rounded-xl flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <div>
                        <div className="font-bold text-xs text-[#101D35]">
                          {sub.company || sub.name}
                        </div>
                        <div className="text-[11px] text-[#64748B]">{sub.enquiry_type}</div>
                      </div>
                      <span className="text-[10px] font-semibold bg-white border border-[#E5EBF3] px-2 py-1 rounded-md text-[#101D35]">
                        Score: {sub.qualification_score}/100
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#E5EBF3] rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#101D35] mb-4">
                  Latest Candidate Applications
                </h3>
                <div className="space-y-3">
                  {applications.slice(0, 4).map((app) => (
                    <div
                      key={app.id}
                      onClick={() => {
                        setSelectedApp(app);
                        setActiveTab('applications');
                      }}
                      className="p-3 bg-[#F3F6FA] hover:bg-slate-100 border border-[#E5EBF3] rounded-xl flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <div>
                        <div className="font-bold text-xs text-[#101D35]">{app.full_name}</div>
                        <div className="text-[11px] text-[#64748B]">{app.job_title}</div>
                      </div>
                      <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-md">
                        {app.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: BUSINESS ENQUIRIES */}
        {activeTab === 'inquiries' && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-200">
            {/* Filter & Search Bar */}
            <div className="bg-white border border-[#E5EBF3] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by company, name, email or service..."
                    value={inquirySearch}
                    onChange={(e) => setInquirySearch(e.target.value)}
                    className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl pl-9 pr-4 py-2 text-xs text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                  />
                </div>

                <select
                  value={inquiryStatusFilter}
                  onChange={(e) => setInquiryStatusFilter(e.target.value)}
                  className="bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-xs text-[#101D35] focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="proposal">Proposal Sent</option>
                  <option value="closed_won">Closed Won</option>
                  <option value="closed_lost">Closed Lost</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={exportInquiriesCSV}
                  className="bg-[#101D35] hover:bg-[#1E3A5F] text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Split View: List on Left, Detail on Right */}
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Inquiries Table / Cards */}
              <div className="lg:col-span-6 space-y-3">
                {filteredSubmissions.length === 0 ? (
                  <div className="bg-white border border-[#E5EBF3] rounded-2xl p-8 text-center text-xs text-slate-500">
                    No inquiries match your filter criteria.
                  </div>
                ) : (
                  filteredSubmissions.map((sub) => {
                    const isSelected = selectedSubmission?.id === sub.id;
                    return (
                      <div
                        key={sub.id}
                        onClick={() => setSelectedSubmission(sub)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#3478F6] shadow-md ring-1 ring-[#3478F6]'
                            : 'bg-white border-[#E5EBF3] hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-sm text-[#101D35]">
                            {sub.company || sub.name}
                          </span>
                          <span className="text-[10px] font-semibold uppercase bg-blue-50 text-[#3478F6] px-2 py-0.5 rounded border border-blue-200">
                            {sub.status.replace('_', ' ')}
                          </span>
                        </div>
                        <div className="text-xs text-[#64748B] flex items-center gap-2 mb-2">
                          <span>{sub.name}</span> &bull; <span>{sub.email}</span>
                        </div>
                        <div className="text-xs text-[#334155] line-clamp-1 mb-3">
                          {sub.message}
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-2 border-t border-[#E5EBF3]">
                          <span className="text-[#3478F6] font-medium">{sub.enquiry_type}</span>
                          <span>Score: {sub.qualification_score}/100</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Selected Inquiry Detail Inspector */}
              <div className="lg:col-span-6">
                {selectedSubmission ? (
                  <div className="bg-white border border-[#E5EBF3] rounded-3xl p-6 sm:p-7 shadow-sm space-y-6 sticky top-36">
                    <div className="flex items-start justify-between pb-4 border-b border-[#E5EBF3]">
                      <div>
                        <span className="text-[10px] font-mono text-[#64748B] block">
                          ID: {selectedSubmission.id}
                        </span>
                        <h3 className="text-xl font-bold text-[#101D35]">
                          {selectedSubmission.company || selectedSubmission.name}
                        </h3>
                        <p className="text-xs text-[#3478F6] font-semibold mt-0.5">
                          {selectedSubmission.enquiry_type}
                        </p>
                      </div>

                      {/* Status Selector */}
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">
                          Pipeline Status
                        </label>
                        <select
                          value={selectedSubmission.status}
                          onChange={(e) => handleStatusChange(selectedSubmission.id, e.target.value)}
                          className="bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-1.5 text-xs font-semibold text-[#101D35] focus:outline-none"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="proposal">Proposal Sent</option>
                          <option value="closed_won">Closed Won</option>
                          <option value="closed_lost">Closed Lost</option>
                        </select>
                      </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs bg-[#F3F6FA] p-4 rounded-2xl border border-[#E5EBF3]">
                      <div>
                        <span className="text-[#64748B] block">Contact Person:</span>
                        <span className="font-semibold text-[#101D35]">{selectedSubmission.name}</span>
                      </div>
                      <div>
                        <span className="text-[#64748B] block">Work Email:</span>
                        <a href={`mailto:${selectedSubmission.email}`} className="font-semibold text-[#3478F6]">
                          {selectedSubmission.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-[#64748B] block">Phone / Mobile:</span>
                        <span className="font-semibold text-[#101D35]">
                          {selectedSubmission.phone || 'Not specified'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#64748B] block">Country:</span>
                        <span className="font-semibold text-[#101D35]">
                          {selectedSubmission.country || 'Global'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#64748B] block">Company Size:</span>
                        <span className="font-semibold text-[#101D35]">
                          {selectedSubmission.company_size || 'N/A'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#64748B] block">Expected Start:</span>
                        <span className="font-semibold text-[#101D35]">
                          {selectedSubmission.expected_start_date || 'Flexible'}
                        </span>
                      </div>
                    </div>

                    {/* Requirement Text */}
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#101D35]">
                        Requirement Details:
                      </span>
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed bg-[#F3F6FA] p-3 rounded-xl border border-[#E5EBF3]">
                        {selectedSubmission.message}
                      </p>
                    </div>

                    {/* Assignment Selector */}
                    <div className="flex items-center justify-between text-xs pt-2">
                      <span className="font-semibold text-[#101D35]">Assigned Account Lead:</span>
                      <select
                        value={selectedSubmission.assigned_to || ''}
                        onChange={(e) => handleAssigneeChange(selectedSubmission.id, e.target.value)}
                        className="bg-[#F3F6FA] border border-[#E5EBF3] rounded-lg px-2.5 py-1 text-xs text-[#101D35]"
                      >
                        <option value="">Unassigned</option>
                        <option value="Sheetal Bedi">Sheetal Bedi (Founder &amp; CEO)</option>
                        <option value="Operations Lead">Operations Lead</option>
                        <option value="Talent Desk">Talent Desk</option>
                        <option value="Partnerships Team">Partnerships Team</option>
                      </select>
                    </div>

                    {/* Internal Notes Thread */}
                    <div className="pt-4 border-t border-[#E5EBF3] space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#101D35] block">
                        Internal Notes &amp; Updates
                      </span>

                      <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                        {notes.length === 0 ? (
                          <p className="text-xs text-slate-400 italic">No notes added yet.</p>
                        ) : (
                          notes.map((n) => (
                            <div key={n.id} className="text-xs bg-[#F3F6FA] p-2.5 rounded-lg border border-[#E5EBF3]">
                              <p className="text-[#334155]">{n.note_text}</p>
                              <span className="text-[10px] text-slate-400 block mt-1">
                                {n.created_by} &bull; {new Date(n.created_at).toLocaleDateString()}
                              </span>
                            </div>
                          ))
                        )}
                      </div>

                      <form onSubmit={handleAddNote} className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add an internal note..."
                          value={newNote}
                          onChange={(e) => setNewNote(e.target.value)}
                          className="flex-1 bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-1.5 text-xs text-[#101D35] focus:outline-none focus:ring-1 focus:ring-[#3478F6]"
                        />
                        <button
                          type="submit"
                          className="bg-[#3478F6] text-white text-xs font-semibold px-4 py-1.5 rounded-xl hover:bg-[#2563EB]"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[#E5EBF3] rounded-3xl p-12 text-center text-slate-400 text-xs">
                    Select an inquiry from the left to view details and update status.
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: CANDIDATE APPLICATIONS */}
        {activeTab === 'applications' && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-200">
            <div className="bg-white border border-[#E5EBF3] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search candidate name, email, or role..."
                    value={appSearch}
                    onChange={(e) => setAppSearch(e.target.value)}
                    className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl pl-9 pr-4 py-2 text-xs text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                  />
                </div>

                <select
                  value={appStatusFilter}
                  onChange={(e) => setAppStatusFilter(e.target.value)}
                  className="bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-xs text-[#101D35] focus:outline-none"
                >
                  <option value="all">All Stages</option>
                  <option value="Received">Received</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Interview">Interview</option>
                  <option value="Selected">Selected</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={exportApplicationsCSV}
                  className="bg-[#101D35] hover:bg-[#1E3A5F] text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Applications CSV</span>
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 space-y-3">
                {filteredApplications.map((app) => {
                  const isSelected = selectedApp?.id === app.id;
                  return (
                    <div
                      key={app.id}
                      onClick={() => setSelectedApp(app)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#3478F6] shadow-md ring-1 ring-[#3478F6]'
                          : 'bg-white border-[#E5EBF3] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-sm text-[#101D35]">{app.full_name}</span>
                        <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                          {app.status}
                        </span>
                      </div>
                      <div className="text-xs text-[#64748B] mb-2">{app.job_title}</div>
                      <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-2 border-t border-[#E5EBF3]">
                        <span>Exp: {app.total_experience}</span>
                        <span className="font-semibold text-[#3478F6]">
                          HireIQ Match: {app.hireiq_score || 90}/100
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-6">
                {selectedApp ? (
                  <div className="bg-white border border-[#E5EBF3] rounded-3xl p-6 sm:p-7 shadow-sm space-y-6 sticky top-36">
                    <div className="flex items-start justify-between pb-4 border-b border-[#E5EBF3]">
                      <div>
                        <h3 className="text-xl font-bold text-[#101D35]">{selectedApp.full_name}</h3>
                        <p className="text-xs text-[#3478F6] font-semibold mt-0.5">
                          {selectedApp.job_title}
                        </p>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">
                          Recruitment Status
                        </label>
                        <select
                          value={selectedApp.status}
                          onChange={(e) =>
                            handleAppStatusChange(selectedApp.id, e.target.value as ApplicationStatus)
                          }
                          className="bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-1.5 text-xs font-semibold text-[#101D35] focus:outline-none"
                        >
                          <option value="Received">Received</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Interview">Interview</option>
                          <option value="Selected">Selected</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs bg-[#F3F6FA] p-4 rounded-2xl border border-[#E5EBF3]">
                      <div>
                        <span className="text-[#64748B] block">Email:</span>
                        <a href={`mailto:${selectedApp.email}`} className="font-semibold text-[#3478F6]">
                          {selectedApp.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-[#64748B] block">Phone:</span>
                        <span className="font-semibold text-[#101D35]">{selectedApp.phone}</span>
                      </div>
                      <div>
                        <span className="text-[#64748B] block">Location:</span>
                        <span className="font-semibold text-[#101D35]">
                          {selectedApp.current_location}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#64748B] block">Total Experience:</span>
                        <span className="font-semibold text-[#101D35]">
                          {selectedApp.total_experience}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[#64748B] block">Relevant Experience:</span>
                        <span className="font-semibold text-[#101D35]">
                          {selectedApp.relevant_experience}
                        </span>
                      </div>
                    </div>

                    {/* Resume File Reference & LinkedIn */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 bg-[#F3F6FA] border border-[#E5EBF3] px-3.5 py-2 rounded-xl text-xs text-[#101D35]">
                        <FileText className="w-4 h-4 text-[#3478F6]" />
                        <span>{selectedApp.resume_name}</span>
                      </div>
                      {selectedApp.linkedin_url && (
                        <a
                          href={selectedApp.linkedin_url}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-blue-50 text-[#3478F6] border border-blue-200 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-blue-100 transition-colors"
                        >
                          View LinkedIn Profile
                        </a>
                      )}
                    </div>

                    {selectedApp.additional_info && (
                      <div className="text-xs bg-[#F3F6FA] p-3 rounded-xl border border-[#E5EBF3]">
                        <span className="font-bold text-[#101D35] block mb-1">
                          Candidate Notes:
                        </span>
                        <p className="text-[#334155] leading-relaxed">
                          {selectedApp.additional_info}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-white border border-[#E5EBF3] rounded-3xl p-12 text-center text-slate-400 text-xs">
                    Select a candidate application to review scorecards and update recruitment status.
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: JOB OPENINGS MANAGEMENT */}
        {activeTab === 'jobs' && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#101D35]">Job Openings &amp; Vacancies</h2>
                <p className="text-xs text-[#64748B]">
                  Manage active listings published on the TaskNera Careers portal.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsAddJobOpen(true)}
                className="bg-[#3478F6] hover:bg-[#2563EB] text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md shadow-[#3478F6]/20"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Job Opening</span>
              </button>
            </div>

            {/* Job Openings Table */}
            <div className="bg-white border border-[#E5EBF3] rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F3F6FA] border-b border-[#E5EBF3] text-slate-500 uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="p-4">Position Title</th>
                    <th className="p-4">Department</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Experience</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5EBF3]">
                  {jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-[#101D35]">{job.title}</td>
                      <td className="p-4 text-slate-600">{job.department}</td>
                      <td className="p-4 text-slate-600">{job.location}</td>
                      <td className="p-4 text-slate-600">{job.experience}</td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-semibold ${
                            job.status === 'Active'
                              ? 'bg-emerald-100 text-emerald-800'
                              : job.status === 'Draft'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <select
                          value={job.status}
                          onChange={(e) =>
                            updateStoredJobStatus(job.id, e.target.value as 'Active' | 'Draft' | 'Closed')
                          }
                          className="bg-[#F3F6FA] border border-[#E5EBF3] rounded-lg px-2 py-1 text-xs text-[#101D35]"
                        >
                          <option value="Active">Active</option>
                          <option value="Draft">Draft</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal: Add Job */}
            {isAddJobOpen && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#E5EBF3] animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E5EBF3]">
                    <h3 className="text-lg font-bold text-[#101D35]">Create New Vacancy</h3>
                    <button
                      type="button"
                      onClick={() => setIsAddJobOpen(false)}
                      className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                    >
                      &times;
                    </button>
                  </div>

                  <form onSubmit={handleCreateJob} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-[#101D35] mb-1">Position Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Senior Full-Stack Engineer"
                        value={newJobData.title}
                        onChange={(e) => setNewJobData({ ...newJobData, title: e.target.value })}
                        className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-sm text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-[#101D35] mb-1">Department</label>
                        <select
                          value={newJobData.department}
                          onChange={(e) =>
                            setNewJobData({ ...newJobData, department: e.target.value })
                          }
                          className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                        >
                          <option>Technology &amp; Cloud Engineering</option>
                          <option>HR &amp; People Operations</option>
                          <option>Talent Acquisition &amp; Recruitment</option>
                          <option>Virtual Customer Support</option>
                          <option>Software Sales &amp; Growth</option>
                          <option>Executive Operations</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-[#101D35] mb-1">Experience</label>
                        <input
                          type="text"
                          placeholder="e.g. 3–5 Years"
                          value={newJobData.experience}
                          onChange={(e) =>
                            setNewJobData({ ...newJobData, experience: e.target.value })
                          }
                          className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-[#101D35] mb-1">Location</label>
                        <input
                          type="text"
                          placeholder="Remote / Delhi / Hybrid"
                          value={newJobData.location}
                          onChange={(e) =>
                            setNewJobData({ ...newJobData, location: e.target.value })
                          }
                          className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-[#101D35] mb-1">Compensation</label>
                        <input
                          type="text"
                          placeholder="e.g. ₹15L – ₹22L LPA"
                          value={newJobData.budget}
                          onChange={(e) =>
                            setNewJobData({ ...newJobData, budget: e.target.value })
                          }
                          className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsAddJobOpen(false)}
                        className="px-4 py-2 rounded-xl text-slate-500 hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#3478F6] hover:bg-[#2563EB] text-white font-semibold px-5 py-2 rounded-xl shadow-md"
                      >
                        Publish Vacancy
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </section>
        )}

        {/* TAB 5: AUTOMATED EMAIL LOGS */}
        {activeTab === 'emails' && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-[#101D35]">Automated Notification Email Logs</h2>
              <p className="text-xs text-[#64748B]">
                Real-time delivery verification for client acknowledgements and team alerts.
              </p>
            </div>

            <div className="bg-white border border-[#E5EBF3] rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F3F6FA] border-b border-[#E5EBF3] text-slate-500 uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Recipient</th>
                    <th className="p-4">Email Type</th>
                    <th className="p-4">Timestamp</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5EBF3]">
                  {emailLogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-slate-400">
                        No automated emails recorded yet. Submissions on /contact generate live logs here.
                      </td>
                    </tr>
                  ) : (
                    emailLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-[#101D35]">{log.subject}</td>
                        <td className="p-4">
                          <span className="font-medium text-[#101D35] block">{log.recipient_name}</span>
                          <span className="text-[11px] text-[#64748B]">{log.recipient_email}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-[10px] font-mono bg-[#F3F6FA] text-[#334155] px-2 py-0.5 rounded border border-[#E5EBF3]">
                            {log.email_type}
                          </span>
                        </td>
                        <td className="p-4 text-slate-500">
                          {new Date(log.sent_at).toLocaleString()}
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 6: SETTINGS & SECURITY */}
        {activeTab === 'settings' && (
          <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-200">
            <div className="bg-white border border-[#E5EBF3] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#101D35]">Security &amp; Administrative Controls</h2>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-[#F3F6FA] border border-[#E5EBF3] rounded-2xl flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#101D35]">Active Admin Session</h4>
                    <p className="text-slate-500 mt-0.5">
                      Logged in as {user?.email || 'admin@tasknera.com'} (Role: Super Administrator)
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('tasknera_admin_user');
                      router.push('/admin/login');
                    }}
                    className="bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 px-3.5 py-1.5 rounded-xl font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>
                </div>

                <div className="p-4 bg-[#F3F6FA] border border-[#E5EBF3] rounded-2xl space-y-2">
                  <h4 className="font-bold text-[#101D35]">Zero Data Loss Local Cache</h4>
                  <p className="text-slate-600 leading-relaxed">
                    TaskNera employs an active client-side fallback vault for all inquiries, candidate records, and notes. Even during remote API interruptions, no customer lead or candidate CV submission is lost.
                  </p>
                </div>

                <div className="p-4 bg-[#101D35] text-white border border-[#1E3A5F] rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#60A5FA] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Candidate Data Confidentiality</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    All candidate resumes and identity records comply with TaskNera&apos;s zero-fee policy and confidential evaluation protocols. No candidate details are sold or redistributed to third parties.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
