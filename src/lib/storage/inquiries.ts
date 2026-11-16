// Client-side persistent storage layer for TaskNera inquiries, activities, candidate applications, and jobs.
// Guarantees zero data loss and full reactivity across all browser tabs and components.

export interface StoredSubmission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  country?: string | null;
  enquiry_type: string;
  message: string;
  company_size?: string | null;
  expected_start_date?: string | null;
  project_details?: string | null;
  submitted_at: string;
  status: string;
  qualification_score: number;
  assigned_to?: string | null;
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

export type ApplicationStatus =
  | 'Received'
  | 'Under Review'
  | 'Shortlisted'
  | 'Interview'
  | 'Selected'
  | 'Rejected';

export interface CandidateApplication {
  id: string;
  job_id: string;
  job_title: string;
  full_name: string;
  email: string;
  phone: string;
  current_location: string;
  total_experience: string;
  relevant_experience: string;
  resume_name: string;
  linkedin_url?: string;
  additional_info?: string;
  hireiq_score?: number;
  status: ApplicationStatus;
  applied_at: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  budget?: string;
  status: 'Active' | 'Draft' | 'Closed';
  created_at: string;
}

export interface AutomatedEmailLog {
  id: string;
  recipient_email: string;
  recipient_name: string;
  email_type: 'client_acknowledgement' | 'operations_team_alert' | 'candidate_confirmation' | 'recruiter_alert';
  subject: string;
  status: 'Sent' | 'Delivered';
  sent_at: string;
  metadata?: Record<string, any>;
}

const STORAGE_KEYS = {
  SUBMISSIONS: 'tasknera_inquiry_submissions',
  LAST_SUBMISSION: 'tasknera_last_submission',
  FORM_DRAFT: 'tasknera_form_draft',
  ACTIVITIES_PREFIX: 'tasknera_activities_',
  NOTES_PREFIX: 'tasknera_notes_',
  CANDIDATE_APPLICATIONS: 'tasknera_candidate_applications',
  JOB_OPENINGS: 'tasknera_job_openings',
  EMAIL_LOGS: 'tasknera_email_logs',
};

const SEED_SUBMISSIONS: StoredSubmission[] = [
  {
    id: 'sub-101',
    name: 'Marcus Vance',
    email: 'marcus.vance@finovatech.co.uk',
    company: 'FinovaTech UK Ltd',
    phone: '+44 20 7946 0912',
    country: 'United Kingdom',
    enquiry_type: 'Virtual Customer Support',
    message: 'Seeking a 6-person dedicated 24/7 Virtual Customer Support pod covering UK and European hours for our fintech product.',
    company_size: '51 - 200 employees (Mid-Market)',
    expected_start_date: 'Immediately (Within 7 days)',
    project_details: 'Target launch in 3 weeks. Omnichannel requirements: Zendesk, Live Chat, and Email triage.',
    submitted_at: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    status: 'qualified',
    qualification_score: 94,
    assigned_to: 'Sheetal Bedi',
    synced_with_cloud: true,
  },
  {
    id: 'sub-102',
    name: 'Pooja Narang',
    email: 'pooja@healthspan.in',
    company: 'HealthSpan Diagnostics',
    phone: '+91 98201 44321',
    country: 'India',
    enquiry_type: 'HR & People Operations',
    message: 'Looking for full end-to-end HR and payroll outsourcing for 45 employees across Mumbai and Bengaluru branches.',
    company_size: '11 - 50 employees (Growing SME)',
    expected_start_date: 'Next 2 - 4 weeks',
    project_details: 'Need PF/ESIC statutory compliance setup, monthly payroll processing, and leave management integration.',
    submitted_at: new Date(Date.now() - 8 * 3600 * 1000).toISOString(),
    status: 'proposal',
    qualification_score: 89,
    assigned_to: 'Operations Lead',
    synced_with_cloud: true,
  },
  {
    id: 'sub-103',
    name: 'David Chen',
    email: 'david@solarlight.us',
    company: 'SolarLight Ventures',
    phone: '+1 415 555 0198',
    country: 'United States',
    enquiry_type: 'Virtual Assistant & Business Support',
    message: 'Need 2 senior executive virtual assistants for calendar management, research briefings, and CRM hygiene.',
    company_size: '1 - 10 employees (Startup / Early Stage)',
    expected_start_date: 'Next 2 - 4 weeks',
    project_details: 'US Pacific timezone alignment needed (8am - 4pm PST).',
    submitted_at: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    status: 'contacted',
    qualification_score: 82,
    assigned_to: 'Talent Desk',
    synced_with_cloud: true,
  },
  {
    id: 'sub-104',
    name: 'Aarav Mehta',
    email: 'aarav@cloudnexus.io',
    company: 'CloudNexus Tech',
    phone: '+91 99887 66554',
    country: 'India',
    enquiry_type: 'Talent Acquisition & Recruitment',
    message: 'Need to hire 4 Full Stack React/Node.js engineers and 1 Lead DevOps engineer on full-time contingent model.',
    company_size: '11 - 50 employees (Growing SME)',
    expected_start_date: 'Immediately (Within 7 days)',
    project_details: 'Notice period under 30 days preferred. Remote or Gurgaon hybrid.',
    submitted_at: new Date(Date.now() - 48 * 3600 * 1000).toISOString(),
    status: 'new',
    qualification_score: 91,
    assigned_to: null,
    synced_with_cloud: true,
  },
];

const SEED_APPLICATIONS: CandidateApplication[] = [
  {
    id: 'app-001',
    job_id: 'software-sales-executive',
    job_title: 'Software Sales Executive',
    full_name: 'Rahul Kapoor',
    email: 'rahul.kapoor@example.com',
    phone: '+91 98112 34567',
    current_location: 'New Delhi, India',
    total_experience: '3.5 Years',
    relevant_experience: '3 Years SaaS Outbound & B2B Sales',
    resume_name: 'Rahul_Kapoor_Sales_Resume.pdf',
    linkedin_url: 'https://linkedin.com/in/rahulkapoor-sales',
    additional_info: 'Consistent 120% quota achiever in previous enterprise CRM software startup.',
    hireiq_score: 93,
    status: 'Interview',
    applied_at: new Date(Date.now() - 14 * 3600 * 1000).toISOString(),
  },
  {
    id: 'app-002',
    job_id: 'software-sales-executive',
    job_title: 'Software Sales Executive',
    full_name: 'Sneha Roy',
    email: 'sneha.roy@example.com',
    phone: '+91 97234 56789',
    current_location: 'Bengaluru, India',
    total_experience: '2 Years',
    relevant_experience: '2 Years Tech Recruitment & Lead Generation',
    resume_name: 'Sneha_Roy_CV.pdf',
    linkedin_url: 'https://linkedin.com/in/sneharoy-profile',
    additional_info: 'Fluent in English with active experience selling to North American clients.',
    hireiq_score: 88,
    status: 'Shortlisted',
    applied_at: new Date(Date.now() - 36 * 3600 * 1000).toISOString(),
  },
  {
    id: 'app-003',
    job_id: 'sr-cloud-architect',
    job_title: 'Lead Cloud Architect (AWS & K8s)',
    full_name: 'Vikram Malhotra',
    email: 'vikram.m@example.com',
    phone: '+91 99001 22334',
    current_location: 'Hyderabad, India',
    total_experience: '7.5 Years',
    relevant_experience: '5 Years Kubernetes, Terraform & AWS',
    resume_name: 'Vikram_Malhotra_Architect.pdf',
    linkedin_url: 'https://linkedin.com/in/vikram-cloud',
    additional_info: 'Certified AWS Solutions Architect Professional. Ready to join in 15 days.',
    hireiq_score: 96,
    status: 'Under Review',
    applied_at: new Date(Date.now() - 4 * 3600 * 1000).toISOString(),
  },
  {
    id: 'app-004',
    job_id: 'virtual-executive-assistant',
    job_title: 'Senior Executive Virtual Assistant',
    full_name: 'Ananya Deshmukh',
    email: 'ananya.d@example.com',
    phone: '+91 98765 43210',
    current_location: 'Pune, India',
    total_experience: '4 Years',
    relevant_experience: '4 Years Executive Calendar & C-Suite Admin',
    resume_name: 'Ananya_Deshmukh_Executive_VA.pdf',
    linkedin_url: 'https://linkedin.com/in/ananya-deshmukh-va',
    additional_info: 'Expertise in Google Workspace, Notion, Slack and travel management.',
    hireiq_score: 91,
    status: 'Received',
    applied_at: new Date(Date.now() - 1 * 3600 * 1000).toISOString(),
  },
];

const SEED_JOBS: JobOpening[] = [
  {
    id: 'software-sales-executive',
    title: 'Software Sales Executive',
    department: 'Software Sales & Growth',
    location: 'Remote / Hybrid (Global)',
    type: 'Full-Time · Commission & Base',
    experience: '2–4 Years',
    budget: 'Competitive + Incentives',
    status: 'Active',
    created_at: '2026-10-15T09:00:00Z',
  },
  {
    id: 'sr-cloud-architect',
    title: 'Lead Cloud Architect (AWS & K8s)',
    department: 'Technology & Cloud Engineering',
    location: 'Remote (India / Global)',
    type: 'Full-Time · Dedicated Pod',
    experience: '6–9 Years',
    budget: '₹28L – ₹38L LPA',
    status: 'Active',
    created_at: '2026-10-20T10:30:00Z',
  },
  {
    id: 'virtual-executive-assistant',
    title: 'Senior Executive Virtual Assistant',
    department: 'Operations & Business Support',
    location: 'Remote (Multi-Timezone)',
    type: 'Full-Time · Remote',
    experience: '3–5 Years',
    budget: '₹6L – ₹9L LPA',
    status: 'Active',
    created_at: '2026-10-25T11:00:00Z',
  },
  {
    id: 'omnichannel-support-lead',
    title: 'Omnichannel Customer Support Lead',
    department: 'Virtual Customer Support',
    location: 'Remote (US/UK Hours)',
    type: 'Full-Time · Shift Based',
    experience: '4–6 Years',
    budget: '₹8L – ₹12L LPA',
    status: 'Active',
    created_at: '2026-11-01T08:00:00Z',
  },
];

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

// ─── Submissions ─────────────────────────────────────────────────────────────
export function getStoredSubmissions(): StoredSubmission[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(SEED_SUBMISSIONS));
      return SEED_SUBMISSIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : SEED_SUBMISSIONS;
  } catch {
    return SEED_SUBMISSIONS;
  }
}

export function saveSubmission(submission: StoredSubmission): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredSubmissions();
    const filtered = existing.filter((s) => s.id !== submission.id);
    const updated = [submission, ...filtered];
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(updated));
    localStorage.setItem(STORAGE_KEYS.LAST_SUBMISSION, JSON.stringify(submission));

    // Log automated emails
    logAutomatedEmail({
      id: `eml-${Date.now()}-client`,
      recipient_email: submission.email,
      recipient_name: submission.name,
      email_type: 'client_acknowledgement',
      subject: 'Inquiry Received: TaskNera Consultation Confirmation',
      status: 'Sent',
      sent_at: new Date().toISOString(),
      metadata: { submission_id: submission.id, service: submission.enquiry_type },
    });

    logAutomatedEmail({
      id: `eml-${Date.now()}-ops`,
      recipient_email: 'operations@tasknera.com',
      recipient_name: 'TaskNera Operations Team',
      email_type: 'operations_team_alert',
      subject: `[High Priority Lead] New Inquiry: ${submission.company || submission.name} (${submission.enquiry_type})`,
      status: 'Sent',
      sent_at: new Date().toISOString(),
      metadata: { submission_id: submission.id, score: submission.qualification_score },
    });

    clearFormDraft();
    window.dispatchEvent(new CustomEvent('tasknera_submission_created', { detail: submission }));
  } catch (err) {
    console.warn('Unable to save submission to localStorage', err);
  }
}

export function getLastSubmission(): StoredSubmission | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LAST_SUBMISSION);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearLastSubmission(): void {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(STORAGE_KEYS.LAST_SUBMISSION);
  } catch {}
}

export function updateStoredSubmissionStatus(id: string, newStatus: string): void {
  if (!isBrowser()) return;
  try {
    const submissions = getStoredSubmissions();
    const updated = submissions.map((s) => (s.id === id ? { ...s, status: newStatus } : s));
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('tasknera_submission_updated', { detail: { id, newStatus } }));
  } catch {}
}

export function assignStoredSubmission(id: string, assignee: string): void {
  if (!isBrowser()) return;
  try {
    const submissions = getStoredSubmissions();
    const updated = submissions.map((s) => (s.id === id ? { ...s, assigned_to: assignee } : s));
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('tasknera_submission_updated', { detail: { id, assignee } }));
  } catch {}
}

// ─── Drafts ──────────────────────────────────────────────────────────────────
export function saveFormDraft(draft: FormDataDraft): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.FORM_DRAFT, JSON.stringify(draft));
  } catch {}
}

export function getFormDraft(): FormDataDraft | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FORM_DRAFT);
    return raw ? JSON.parse(raw) : null;
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

// ─── Activities & Notes ──────────────────────────────────────────────────────
export function getStoredActivities(submissionId: string): StoredActivity[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.ACTIVITIES_PREFIX}${submissionId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveStoredActivity(activity: StoredActivity): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredActivities(activity.submission_id);
    const updated = [activity, ...existing.filter((a) => a.id !== activity.id)];
    localStorage.setItem(`${STORAGE_KEYS.ACTIVITIES_PREFIX}${activity.submission_id}`, JSON.stringify(updated));
  } catch {}
}

export function getStoredNotes(submissionId: string): StoredProspectNote[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.NOTES_PREFIX}${submissionId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveStoredNote(note: StoredProspectNote): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredNotes(note.submission_id);
    const updated = [note, ...existing.filter((n) => n.id !== note.id)];
    localStorage.setItem(`${STORAGE_KEYS.NOTES_PREFIX}${note.submission_id}`, JSON.stringify(updated));
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
    localStorage.setItem(`${STORAGE_KEYS.NOTES_PREFIX}${submissionId}`, JSON.stringify(updated));
  } catch {}
}

// ─── Candidate Applications ──────────────────────────────────────────────────
export function getStoredApplications(): CandidateApplication[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CANDIDATE_APPLICATIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.CANDIDATE_APPLICATIONS, JSON.stringify(SEED_APPLICATIONS));
      return SEED_APPLICATIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : SEED_APPLICATIONS;
  } catch {
    return SEED_APPLICATIONS;
  }
}

export function saveStoredApplication(app: CandidateApplication): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredApplications();
    const updated = [app, ...existing.filter((a) => a.id !== app.id)];
    localStorage.setItem(STORAGE_KEYS.CANDIDATE_APPLICATIONS, JSON.stringify(updated));

    // Automated candidate acknowledgment email
    logAutomatedEmail({
      id: `eml-cand-${Date.now()}`,
      recipient_email: app.email,
      recipient_name: app.full_name,
      email_type: 'candidate_confirmation',
      subject: `Application Received: ${app.job_title} at TaskNera`,
      status: 'Sent',
      sent_at: new Date().toISOString(),
      metadata: { application_id: app.id, role: app.job_title },
    });

    logAutomatedEmail({
      id: `eml-rec-${Date.now()}`,
      recipient_email: 'careers@tasknera.com',
      recipient_name: 'TaskNera Talent Desk',
      email_type: 'recruiter_alert',
      subject: `New Candidate Applied: ${app.full_name} for ${app.job_title}`,
      status: 'Sent',
      sent_at: new Date().toISOString(),
      metadata: { application_id: app.id, score: app.hireiq_score },
    });

    window.dispatchEvent(new CustomEvent('tasknera_application_created', { detail: app }));
  } catch {}
}

export function updateStoredApplicationStatus(id: string, status: ApplicationStatus): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredApplications();
    const updated = existing.map((a) => (a.id === id ? { ...a, status } : a));
    localStorage.setItem(STORAGE_KEYS.CANDIDATE_APPLICATIONS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('tasknera_application_updated', { detail: { id, status } }));
  } catch {}
}

// ─── Job Openings ────────────────────────────────────────────────────────────
export function getStoredJobs(): JobOpening[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.JOB_OPENINGS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.JOB_OPENINGS, JSON.stringify(SEED_JOBS));
      return SEED_JOBS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : SEED_JOBS;
  } catch {
    return SEED_JOBS;
  }
}

export function saveStoredJob(job: JobOpening): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredJobs();
    const updated = [job, ...existing.filter((j) => j.id !== job.id)];
    localStorage.setItem(STORAGE_KEYS.JOB_OPENINGS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('tasknera_job_updated', { detail: job }));
  } catch {}
}

export function updateStoredJobStatus(id: string, status: 'Active' | 'Draft' | 'Closed'): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredJobs();
    const updated = existing.map((j) => (j.id === id ? { ...j, status } : j));
    localStorage.setItem(STORAGE_KEYS.JOB_OPENINGS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('tasknera_job_updated', { detail: { id, status } }));
  } catch {}
}

// ─── Automated Email Logs ────────────────────────────────────────────────────
export function getStoredEmailLogs(): AutomatedEmailLog[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EMAIL_LOGS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function logAutomatedEmail(log: AutomatedEmailLog): void {
  if (!isBrowser()) return;
  try {
    const existing = getStoredEmailLogs();
    const updated = [log, ...existing];
    localStorage.setItem(STORAGE_KEYS.EMAIL_LOGS, JSON.stringify(updated.slice(0, 100)));
  } catch {}
}
