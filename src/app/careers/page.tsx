'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Briefcase,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  DollarSign,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  category: 'talent' | 'hr' | 'va' | 'support' | 'operations';
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

const openPositions: JobPosition[] = [
  {
    id: 'recruiter-tech',
    title: 'Senior Talent Acquisition Specialist',
    department: 'Talent & Recruitment Desk',
    category: 'talent',
    location: 'Remote (India / Global)',
    type: 'Full-Time',
    experience: '3–6 Years',
    summary:
      'Lead end-to-end sourcing and full-lifecycle recruiting across high-growth Tech, BFSI, and SaaS mandates for US, UK, and APAC clients.',
    responsibilities: [
      'Manage full-cycle search from requirement intake to offer negotiation and onboarding.',
      'Leverage active sourcing channels, talent pools, and HireIQ™ candidate matching tools.',
      'Maintain submittal-to-hire ratios within strict client SLA turnaround times (48–72 hours).',
    ],
    requirements: [
      'Proven track record in agency or in-house specialist recruitment.',
      'Exceptional stakeholder communication and candidate assessment skills.',
      'Experience with cross-border candidate management is a strong plus.',
    ],
  },
  {
    id: 'hr-ops-spec',
    title: 'HR Operations & Compliance Specialist',
    department: 'People Operations',
    category: 'hr',
    location: 'Delhi NCR / Hybrid',
    type: 'Full-Time',
    experience: '2–5 Years',
    summary:
      'Drive employee onboarding, statutory documentation, payroll inputs, and policy administration for our distributed global workforce.',
    responsibilities: [
      'Administer end-to-end employee lifecycle workflows: offer letters, KYC, background verification, and exit clearances.',
      'Ensure 100% adherence to statutory labour laws, POSH policies, and GDPR/data privacy standards.',
      'Support client HR pods with tailored attendance and performance metrics reports.',
    ],
    requirements: [
      'Strong grasp of statutory compliance, payroll cycles, and labour frameworks.',
      'Meticulous attention to detail and confidential candidate/employee record keeping.',
      'Proficiency in HRMS platforms, Excel, and structured workforce documentation.',
    ],
  },
  {
    id: 'exec-va',
    title: 'Executive Virtual Assistant (Dedicated Pod)',
    department: 'Virtual Assistant Services',
    category: 'va',
    location: 'Remote (EST / GMT / IST overlap)',
    type: 'Full-Time Remote',
    experience: '2–4 Years',
    summary:
      'Provide dedicated operational leverage to C-suite executives, founders, and scaling teams across calendar, inbox, research, and project tasks.',
    responsibilities: [
      'Manage complex multi-timezone calendar scheduling, travel itineraries, and email triage.',
      'Execute desktop market research, presentation prep, and CRM data management.',
      'Act as the proactive gatekeeper and operational right hand for executive leadership.',
    ],
    requirements: [
      'Flawless written and verbal English communication.',
      'Demonstrated experience with Google Workspace, Slack, Notion, Asana, and Hubspot.',
      'Exceptional proactive anticipation, time management, and discretion under NDA.',
    ],
  },
  {
    id: 'vcs-lead',
    title: 'Virtual Customer Support Lead (Omnichannel)',
    department: 'Customer Support Desk',
    category: 'support',
    location: 'Remote (Rotational / Multi-Timezone)',
    type: 'Full-Time',
    experience: '3–5 Years',
    summary:
      'Deliver world-class omnichannel customer care (email, live chat, ticketing, and voice) with empathy, resolution speed, and quality benchmarks.',
    responsibilities: [
      'Handle Tier-1 and Tier-2 customer enquiries, issue escalation, and ticket resolution in Zendesk/Freshdesk.',
      'Maintain CSAT > 92% and First Response Time SLAs according to client service agreements.',
      'Draft and refine knowledge base articles, standard operating macros, and FAQ documentation.',
    ],
    requirements: [
      'Prior background in omnichannel customer success or helpdesk operations for SaaS or eCommerce.',
      'High emotional intelligence, problem-solving speed, and polite conflict resolution skills.',
      'Strong typing speed (>55 WPM) and comfortable in fast-paced ticket queues.',
    ],
  },
  {
    id: 'client-ops-mgr',
    title: 'Client Operations & Account Manager',
    department: 'Business Operations',
    category: 'operations',
    location: 'Hybrid / Remote',
    type: 'Full-Time',
    experience: '4–7 Years',
    summary:
      'Partner closely with enterprise and startup clients to ensure SLA compliance, manage dedicated pod renewals, and scale service deliveries.',
    responsibilities: [
      'Conduct regular Weekly Syncs and Monthly Business Reviews (MBR) with client HR & Operations leaders.',
      'Monitor pod productivity, resource allocation, and talent replacement requests.',
      'Identify opportunities to expand service offerings into recruitment, HRMS, and business support.',
    ],
    requirements: [
      'Experience in BPO, RPO, HR consulting, or professional services account management.',
      'Strong analytical capabilities and executive presentation flair.',
      'Client-first empathy paired with structured delivery governance.',
    ],
  },
  {
    id: 'general-talent-pool',
    title: 'General Candidate Network / Open Application',
    department: 'Global Talent Bench',
    category: 'talent',
    location: 'Global Remote',
    type: 'Full-Time / Contract Pods',
    experience: 'All Levels',
    summary:
      'Don’t see your exact role listed? We are always seeking high-caliber professionals for ongoing and upcoming client placements across 12+ industries.',
    responsibilities: [
      'Join TaskNera’s vetted talent bench for rapid deployment into client embedded pods.',
      'Complete proprietary skills verification and interview readiness benchmarks.',
      'Be matched with high-impact remote or hybrid opportunities tailored to your career trajectory.',
    ],
    requirements: [
      'Passion for operational excellence, professional integrity, and continuous learning.',
      'Clear domain competence in HR, Finance, Sourcing, Operations, Tech, or Support.',
      'Strong alignment with TaskNera’s core values of transparency and client impact.',
    ],
  },
];

const perks = [
  {
    icon: Globe2,
    title: 'Remote-First Flexibility',
    desc: 'Work from where you thrive best with flexible arrangements, digital collaboration tools, and clear async workflows.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation & Rewards',
    desc: 'Market-aligned compensation packages, timely payments, milestone bonuses, and transparent performance incentives.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Upskilling',
    desc: 'Access to modern recruiting tech, HireIQ™ platform insights, customer care certifications, and HR operations training.',
  },
  {
    icon: HeartHandshake,
    title: 'Human-Centric Culture',
    desc: 'We value psychological safety, zero-retaliation transparency, diversity, and mutual respect in everything we do.',
  },
  {
    icon: ShieldCheck,
    title: 'Equal Opportunity & Compliance',
    desc: 'Fair merit-based evaluations governed by robust workplace policies, anti-harassment safeguards, and ethical standards.',
  },
  {
    icon: Sparkles,
    title: 'Fast Track Advancement',
    desc: 'As a rapidly expanding global partner, high performers quickly transition into pod leads, domain specialists, and account directors.',
  },
];

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateLinkedIn, setCandidateLinkedIn] = useState('');
  const [candidateExperience, setCandidateExperience] = useState('');
  const [candidateNotes, setCandidateNotes] = useState('');

  const filteredPositions =
    selectedCategory === 'all'
      ? openPositions
      : openPositions.filter((job) => job.category === selectedCategory);

  const handleApplyClick = (job: JobPosition) => {
    setSelectedJob(job);
    setFormSubmitted(false);
    // Smooth scroll to form if needed
    const formEl = document.getElementById('apply-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 bg-background min-h-screen text-slate-900">
        
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#12254e] via-[#1b4388] to-[#143266] text-white py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold text-accent shadow-inner">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>We&apos;re Hiring · Global Remote &amp; Hybrid Positions</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Build Your Career with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-200 to-sky-300">
                TaskNera
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Join a high-growth global workforce partner delivering talent acquisition, HR operations, and virtual business support to top companies worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#open-roles"
                className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/25 flex items-center gap-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:careers@tasknera.com"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>Email careers@tasknera.com</span>
              </a>
            </div>

            {/* Fast Stats Strip */}
            <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-accent">100%</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Vetted Human Teams</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">12+</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Industry Coverage Areas</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-accent">24/7</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Multi-Timezone Operations</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">Zero Fee</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Safe Candidate Hiring Policy</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Culture & Perks Section ── */}
        <section className="py-20 sm:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs uppercase font-bold text-blue-600 tracking-wider mb-2">
                Why Choose TaskNera
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                An Environment Designed for Your Growth
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe exceptional client outcomes come from empowered professionals. Here is what you can count on when you partner your career with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-blue-300/80 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/20 group-hover:text-emerald-700 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{perk.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{perk.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Open Positions Section ── */}
        <section id="open-roles" className="py-20 sm:py-24 bg-gradient-to-b from-[#f8fbff] to-white border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="text-xs uppercase font-bold text-blue-600 tracking-wider mb-2">
                  Current Openings
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                  Explore Open Opportunities
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
                  Find the ideal role across our talent pods, HR delivery centers, and virtual support desks.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Openings' },
                  { id: 'talent', label: 'Recruitment & Talent' },
                  { id: 'hr', label: 'HR Operations' },
                  { id: 'va', label: 'Virtual Assistant' },
                  { id: 'support', label: 'Customer Support' },
                  { id: 'operations', label: 'Operations & Mgt' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                      selectedCategory === tab.id
                        ? 'bg-[#1b4388] text-white shadow-md'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Grid */}
            <div className="space-y-4">
              {filteredPositions.map((job) => (
                <div
                  key={job.id}
                  className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-md">
                        {job.department}
                      </span>
                      <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {job.type}
                      </span>
                      <span className="text-xs font-medium text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md">
                        Exp: {job.experience}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{job.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {job.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        Structured compensation &amp; bonuses
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        Direct mentorship &amp; training
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        Fast 1–2 business day application response
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:self-center flex-shrink-0">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="w-full sm:w-auto bg-[#1b4388] hover:bg-[#15346d] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={`mailto:careers@tasknera.com?subject=Application for ${encodeURIComponent(
                        job.title
                      )} [TaskNera Careers]`}
                      className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                      title="Apply directly via Email"
                      aria-label="Apply via Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Quick Application / Submission Box ── */}
            <div id="apply-form-section" className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-accent/15 text-emerald-800 border border-accent/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Candidate Fast Track</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                    {selectedJob
                      ? `Apply for ${selectedJob.title}`
                      : 'Submit Your Application to TaskNera Talent Desk'}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedJob
                      ? `Department: ${selectedJob.department} · ${selectedJob.location}`
                      : 'Fill in your details or send your CV directly to careers@tasknera.com.'}
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-xl text-emerald-950">Thank You, {candidateName}!</h4>
                    <p className="mt-2 text-sm text-emerald-800 max-w-lg mx-auto">
                      Your application profile for{' '}
                      <strong>{selectedJob ? selectedJob.title : 'TaskNera Talent Desk'}</strong> has been received. Our talent acquisition specialist will review your details and reach out within 1–2 business days.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                      <a
                        href={`mailto:careers@tasknera.com?subject=Resume Attachment: ${encodeURIComponent(
                          candidateName
                        )} - ${encodeURIComponent(selectedJob ? selectedJob.title : 'General Application')}`}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Resume Attachment via Email</span>
                      </a>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setSelectedJob(null);
                        }}
                        className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                      >
                        Submit Another Role
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={candidateName}
                          onChange={(e) => setCandidateName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={candidateEmail}
                          onChange={(e) => setCandidateEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={candidatePhone}
                          onChange={(e) => setCandidatePhone(e.target.value)}
                          placeholder="+91 / +1 / +44 ..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          LinkedIn or Portfolio Profile
                        </label>
                        <input
                          type="url"
                          value={candidateLinkedIn}
                          onChange={(e) => setCandidateLinkedIn(e.target.value)}
                          placeholder="https://linkedin.com/in/..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Years of Relevant Experience
                      </label>
                      <select
                        value={candidateExperience}
                        onChange={(e) => setCandidateExperience(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none transition-all bg-white"
                      >
                        <option value="">Select experience bracket...</option>
                        <option value="0-1">0–1 Year (Entry Level / Fresher)</option>
                        <option value="1-3">1–3 Years (Junior Specialist)</option>
                        <option value="3-5">3–5 Years (Mid-Level Professional)</option>
                        <option value="5-8">5–8 Years (Senior Specialist / Pod Lead)</option>
                        <option value="8+">8+ Years (Lead / Director / Executive)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Key Skills, Current Notice Period &amp; Cover Note
                      </label>
                      <textarea
                        rows={3}
                        value={candidateNotes}
                        onChange={(e) => setCandidateNotes(e.target.value)}
                        placeholder="Briefly describe your core strengths, preferred work arrangement, and current availability..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-slate-500">
                        Protected under our{' '}
                        <Link href="/candidate-privacy" className="text-blue-600 underline font-medium">
                          Candidate Privacy Notice
                        </Link>
                        . No spam.
                      </p>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          type="submit"
                          className="w-full sm:w-auto bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-md shadow-accent/20 flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Profile</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Safe Hiring & Anti-Fraud Advisory */}
            <div className="mt-12 bg-amber-50/80 border border-amber-200/90 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs text-amber-950">
                <div className="font-bold text-sm text-amber-900">
                  TaskNera Safe Hiring &amp; Candidate Transparency Notice
                </div>
                <p className="leading-relaxed">
                  TaskNera strictly adheres to transparent, ethical hiring practices. Official recruitment communications are exclusively sent from verified{' '}
                  <strong className="text-amber-950">@tasknera.com</strong> email addresses. We never charge candidates any application fees, deposit requests, or equipment charges at any stage of hiring. If you suspect fraudulent outreach, report it directly to{' '}
                  <a href="mailto:grievance@tasknera.com" className="underline font-bold text-amber-950">
                    grievance@tasknera.com
                  </a>
                  .
                </p>
                <div className="pt-1 flex gap-4 text-[11px] font-semibold text-amber-800">
                  <Link href="/candidate-privacy" className="underline hover:text-amber-950">
                    Read Candidate Privacy Policy →
                  </Link>
                  <Link href="/workplace-policies" className="underline hover:text-amber-950">
                    Review Workplace Policies →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
