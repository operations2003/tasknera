'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Permanent & Contract Hiring',
    desc: 'Full-cycle recruitment for permanent roles and fixed-term contracts across all seniority levels.',
    icon: 'BriefcaseIcon',
    useCases: ['Mid-market companies scaling teams fast', 'Startups building founding teams', 'Enterprises replacing critical roles'],
  },
  {
    title: 'Executive Search & Leadership',
    desc: 'Confidential, research led search for C-suite, VP, and Director level mandates.',
    icon: 'StarIcon',
    useCases: ['CEO/CFO/CTO succession planning', 'Board-level appointments', 'Country or regional head placements'],
  },
  {
    title: 'IT & Non-IT Recruitment',
    desc: 'Deep domain expertise across technology, finance, operations, sales, and support functions.',
    icon: 'ComputerDesktopIcon',
    useCases: ['Software engineers & architects', 'Finance & accounting professionals', 'Sales & business development leaders'],
  },
  {
    title: 'Bulk / Volume Hiring',
    desc: 'Structured campaigns to hire 50–500+ candidates within defined timelines and quality benchmarks.',
    icon: 'UsersIcon',
    useCases: ['BPO & shared services ramp-ups', 'Retail & hospitality seasonal hiring', 'Manufacturing plant staffing'],
  },
  {
    title: 'Remote & Global Hiring',
    desc: 'Cross-border talent acquisition with compliance, timezone, and cultural fit considerations built in.',
    icon: 'GlobeAltIcon',
    useCases: ['Distributed engineering teams', 'Global expansion into new markets', 'Offshore & nearshore delivery centres'],
  },
  {
    title: 'Recruitment Process Outsourcing (RPO)',
    desc: 'End-to-end ownership of your recruitment function from JD creation to offer acceptance.',
    icon: 'ArrowPathIcon',
    useCases: ['Companies without in-house HR', 'High-growth businesses needing scale', 'Organisations restructuring talent ops'],
  },
];

import { FileText, Search, CheckCircle2, UserCheck, Calendar, Award, Sparkles, FileSearch, Sliders, Database, ShieldCheck, Clock, Lock } from 'lucide-react';

const hireIQCapabilities = [
  { name: 'AI-Powered Resume Screening', desc: 'Automatically evaluates candidates against job requirements with contextual precision.', category: 'AI & Parsing' },
  { name: 'Intelligent Resume Parsing', desc: 'Extracts skills, experience, education, and credentials directly into structured candidate profiles.', category: 'AI & Parsing' },
  { name: 'AI Job Description Analysis', desc: 'Deconstructs and structures complex JD requirements into objective evaluation benchmarks.', category: 'AI & Parsing' },
  { name: 'Semantic Candidate Matching', desc: 'Evaluates contextual relevance and semantic alignment between candidate histories and job specs.', category: 'AI & Parsing' },
  { name: 'Precision Match Scoring', desc: 'Generates a calibrated candidate-job match score using defined evaluation criteria.', category: 'Evaluation & Scoring' },
  { name: 'Requirement-Based Evaluation', desc: 'Evaluates candidates against both mandatory gatekeeper criteria and preferred skills.', category: 'Evaluation & Scoring' },
  { name: 'Weighted Evaluation Criteria', desc: 'Supports custom weight distributions for mission-critical role competencies.', category: 'Evaluation & Scoring' },
  { name: 'Detailed AI Evaluation', desc: 'Provides structured breakdown of strengths, growth areas, and category-level scoring.', category: 'Evaluation & Scoring' },
  { name: 'Bias-Aware Screening', desc: 'Focuses evaluations purely on verifiable job-relevant merits, experience, and skills.', category: 'Evaluation & Scoring' },
  { name: 'Candidate Ranking', desc: 'Helps recruiters prioritize top candidates based on transparent evaluation results.', category: 'Pipeline & Pool' },
  { name: 'Bulk Resume Upload', desc: 'Batch ingest tens or hundreds of candidate resumes for simultaneous processing.', category: 'Pipeline & Pool' },
  { name: 'Candidate Pool', desc: 'Centralized searchable view of candidates across current and past recruitment activities.', category: 'Pipeline & Pool' },
  { name: 'Candidate Comparison', desc: 'Side-by-side qualification matrices comparing finalist credentials on identical criteria.', category: 'Pipeline & Pool' },
  { name: 'Structured Evaluation Records', desc: 'Audit-ready, consistent candidate scorecards for hiring manager review and traceability.', category: 'Pipeline & Pool' },
  { name: 'Job & Requisition Management', desc: 'Create, manage, and track multiple job openings across departments.', category: 'Ops & Analytics' },
  { name: 'Client & Position Management', desc: 'Maintain client/company guidelines and position-specific recruitment playbooks.', category: 'Ops & Analytics' },
  { name: 'Recruitment Dashboard', desc: 'Live visibility into open jobs, applicants, candidate pipelines, and evaluation throughput.', category: 'Ops & Analytics' },
  { name: 'Evaluation & Decision Workflow', desc: 'Review candidate evaluations and record formal recruitment decisions seamlessly.', category: 'Ops & Analytics' },
  { name: 'Recruitment Analytics', desc: 'Track recruitment activity velocity, channel outcomes, and shortlist conversion rates.', category: 'Ops & Analytics' },
  { name: 'Role-Based Access', desc: 'Granular permissions and controlled access for recruiters, hiring leads, and administrators.', category: 'Ops & Analytics' },
];

const processSteps = [
  {
    num: '01',
    title: 'Requirement Briefing',
    desc: 'Deep-dive consultation to understand the role, team dynamics, culture, and success criteria. We challenge vague JDs and help define what "great" looks like.',
    icon: FileText,
    detail: '60–90 min intake call · Competency mapping · Salary benchmarking',
  },
  {
    num: '02',
    title: 'Market Mapping & Sourcing',
    desc: 'Multi-channel sourcing using our proprietary database, LinkedIn Recruiter, niche job boards, and AI-assisted candidate mapping.',
    icon: Search,
    detail: 'Active + passive candidate outreach · Competitor talent mapping · Referral network activation',
  },
  {
    num: '03',
    title: 'Screening & Assessment',
    desc: 'Structured phone screens, competency-based interviews, and technical assessments aligned to your role requirements.',
    icon: CheckCircle2,
    detail: 'Behavioural interview frameworks · Skills assessments · Culture-fit evaluation',
  },
  {
    num: '04',
    title: 'Curated Shortlist',
    desc: 'You receive a shortlist of 3–5 pre-vetted candidates with detailed profiles, assessment summaries, and our recommendation rationale.',
    icon: UserCheck,
    detail: 'Candidate scorecards · Video introductions · Comparative analysis',
  },
  {
    num: '05',
    title: 'Interview Coordination',
    desc: 'End-to-end scheduling, candidate preparation, interviewer briefing, and real-time feedback loops to keep momentum.',
    icon: Calendar,
    detail: 'Panel scheduling · Candidate coaching · Debrief facilitation',
  },
  {
    num: '06',
    title: 'Offer & Onboarding Handoff',
    desc: 'Offer negotiation support, counter offer management, documentation, and a structured handoff to your onboarding team.',
    icon: Award,
    detail: 'Offer letter drafting · Notice period management · Day-1 readiness checklist',
  },
];

const metrics = [
  { value: 'Agile', label: 'Shortlist Turnaround' },
  { value: 'Precision', label: 'HireIQ JD Match Scoring' },
  { value: 'Domain-Led', label: 'Specialist Recruiter Desks' },
  { value: 'SLA-Backed', label: 'Replacement Support' },
];

const industries = ['Technology', 'BFSI', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics', 'Professional Services', 'E-commerce'];

export default function TalentAcquisitionPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-background">

        {/* Hero */}
        <section className="bg-section-dark pt-32 sm:pt-40 relative overflow-hidden border-b border-border/80">
          <div className="absolute inset-0 blob-teal opacity-25 pointer-events-none" style={{ top: '20%', left: '60%', width: '600px', height: '600px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 relative z-10">
            <div className="max-w-3xl">
              <div className="flex flex-col items-start gap-4 mb-6">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
                  Back to Services
                </Link>
                <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase">Talent Acquisition</span>
                </div>
              </div>
              <h1 className="text-hero font-display font-700 text-white mb-6">
                Talent Acquisition{' '}
                <span className="gradient-text-coral">&amp; Recruitment</span>
              </h1>
              <p className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                Specialized hiring for every stage of growth. As a core pillar of TaskNera&apos;s People &amp; Operations platform, we manage end-to-end recruitment with HireIQ precision matching and dedicated domain recruiters.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#process" className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-accent/30">
                  See Our Process
                </a>
                <Link href="/#contact" className="glass-btn text-white font-semibold px-6 py-3 rounded-full hover:bg-white/15 transition-all">
                  Talk to a Talent Specialist
                </Link>
              </div>
            </div>
          </div>

          {/* Integrated Metrics bar directly inside Hero */}
          <div className="border-t border-white/10 bg-black/20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center lg:px-8">
                    <div className="font-display font-700 text-2xl sm:text-3xl text-white mb-1">{m.value}</div>
                    <div className="text-white/60 text-xs sm:text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-28 bg-surface-subtle border-b border-border relative overflow-hidden">
          {/* Ambient background light pools */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">What We Do</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Six Recruitment{' '}
                <span className="gradient-text-coral">Specialisations</span>
              </h2>
              <p className="text-muted-foreground text-lg">Click any service to see real-world use cases.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* Service selector */}
              <div className="lg:col-span-5 space-y-2">
                {services.map((svc, i) => (
                  <button
                    key={svc.title}
                    onClick={() => setActiveService(i)}
                    className={`w-full text-left rounded-2xl p-4 border transition-all duration-300 flex items-start gap-4 ${activeService === i
                      ? 'bg-primary border-primary shadow-lg'
                      : 'bg-card border-border hover:border-accent/30'
                      }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${activeService === i ? 'bg-white/10' : 'bg-accent/10'}`}>
                      <Icon name={svc.icon as 'BriefcaseIcon'} size={16} className={activeService === i ? 'text-white' : 'text-accent'} variant="outline" />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm ${activeService === i ? 'text-white' : 'text-foreground'}`}>{svc.title}</div>
                      <div className={`text-xs mt-0.5 leading-relaxed ${activeService === i ? 'text-white/60' : 'text-muted-foreground'}`}>{svc.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Use cases panel */}
              <div className="lg:col-span-7">
                <div className="bg-card border border-border rounded-3xl p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                    <Icon name={services[activeService].icon as 'BriefcaseIcon'} size={22} className="text-accent" variant="outline" />
                  </div>
                  <h3 className="font-display font-700 text-foreground text-xl mb-3">{services[activeService].title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{services[activeService].desc}</p>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Common Use Cases</div>
                    <div className="space-y-3">
                      {services[activeService].useCases.map((uc) => (
                        <div key={uc} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent"><path d="m5 12 5 5 9-9" /></svg>
                          </div>
                          <span className="text-foreground text-sm leading-relaxed">{uc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HireIQ Intelligence Layer */}
        <section className="py-20 sm:py-28 bg-surface-subtle border-y border-border/60 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Proprietary Recruitment Intelligence
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
                Powered by <span className="gradient-text-coral">HireIQ™</span> Matching Intelligence
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                TaskNera deploys our proprietary HireIQ AI recruitment intelligence system to accelerate JD and CV alignment. By evaluating candidate resumes against multi-dimensional job specifications with verifiable citations, HireIQ ensures unprecedented shortlisting precision while preserving human recruiter judgment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Feature 1 */}
              <div className="card-premium rounded-3xl p-7 bg-card border border-border/70 space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <FileSearch className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  100% Verifiable CV Citations
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every match score and competency evaluation is grounded in exact citations extracted directly from the candidate&apos;s CV, eliminating AI hallucinations and subjective guesswork.
                </p>
                <div className="pt-2 text-xs font-semibold text-accent flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Evidence-backed candidate scorecards</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="card-premium rounded-3xl p-7 bg-card border border-border/70 space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Dynamic Requirement Weighting
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Customizable importance weightings (from 1.0x to 3.0x) calibrate evaluations around your non-negotiable tech stacks, domain experience, and leadership criteria.
                </p>
                <div className="pt-2 text-xs font-semibold text-secondary flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Tailored to your exact hiring bar</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="card-premium rounded-3xl p-7 bg-card border border-border/70 space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Universal Candidate Pool
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A centralized talent repository enabling 1-click cross-matching across historical and active applicant cohorts to uncover hidden talent matches instantly.
                </p>
                <div className="pt-2 text-xs font-semibold text-accent flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Cross-pipeline talent reactivation</span>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="card-premium rounded-3xl p-7 bg-card border border-border/70 space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Bias Guard Merit-First Screening
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built-in privacy safeguards mask demographic identifiers, names, and contact details during initial evaluation rounds, ensuring 100% merit-driven assessment.
                </p>
                <div className="pt-2 text-xs font-semibold text-secondary flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Unbiased competency shortlisting</span>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="card-premium rounded-3xl p-7 bg-card border border-border/70 space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  85% Screening Acceleration
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Automating repetitive CV reading frees up 15–20 hours weekly per recruiter, compressing hiring velocity from 40+ days to under 18 days on average.
                </p>
                <div className="pt-2 text-xs font-semibold text-accent flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Substantially reduced time-to-fill</span>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="card-premium rounded-3xl p-7 bg-card border border-border/70 space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Enterprise Data Sovereignty
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Zero public LLM training. All CV and JD data is processed through private enterprise APIs with TLS 1.3 in transit, AES-256 encryption at rest, and strict tenant isolation.
                </p>
                <div className="pt-2 text-xs font-semibold text-secondary flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Strict confidentiality &amp; security</span>
                </div>
              </div>
            </div>

            {/* Informational Callout Bar */}
            <div className="bg-section-dark rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 relative overflow-hidden mb-12">
              <div className="space-y-1.5 text-center sm:text-left relative z-10">
                <div className="text-xs font-bold text-accent uppercase tracking-widest">
                  Human-in-the-Loop Philosophy
                </div>
                <p className="text-sm sm:text-base text-white/80 max-w-2xl">
                  HireIQ serves as an intelligent precision copilot for TaskNera&apos;s senior recruiters. Every candidate presented to your team undergoes in-depth human interviews, culture assessment, and background verification.
                </p>
              </div>
              <div className="flex-shrink-0 text-center sm:text-right relative z-10">
                <div className="text-2xl font-display font-bold text-white">100% Human Vetted</div>
                <div className="text-xs text-white/60">Final shortlists delivered with human insight</div>
              </div>
            </div>

            {/* Complete HireIQ™ Capabilities Matrix */}
            <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-border/60">
                <div>
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3.5 py-1 text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    HireIQ™ Feature Matrix
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                    HireIQ™ Intelligence Capabilities
                  </h3>
                </div>
                <div className="lg:max-w-md bg-surface-subtle border border-border p-4 rounded-2xl">
                  <div className="text-[11px] font-bold text-accent uppercase tracking-widest mb-1">
                    Marketing Positioning
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    &ldquo;AI-powered recruitment platform that transforms resumes into actionable candidate insights — from intelligent resume parsing and JD understanding to precision scoring, candidate ranking, comparison, and detailed evaluation.&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {hireIQCapabilities.map((feat) => (
                  <div
                    key={feat.name}
                    className="p-4 rounded-2xl bg-surface-subtle/50 border border-border/60 hover:border-accent/40 hover:bg-card transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                        {feat.category}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent opacity-60 group-hover:opacity-100" />
                    </div>
                    <div className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors">
                      {feat.name}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 sm:py-32 bg-section-dark overflow-hidden text-white relative border-y border-border/80">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Our Process</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-white mb-4">
                From Brief to{' '}
                <span className="gradient-text-coral">Onboarding</span>
              </h2>
              <p className="text-white/60 text-lg">A structured 6-step process with full transparency at every stage.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step, i) => {
                const IconComp = step.icon;
                return (
                  <div key={step.num} className="glass-card rounded-2xl p-6 hover-lift group" style={{ transitionDelay: `${i * 0.06}s` }}>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl font-display font-bold text-white/70 leading-none">{step.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="w-8 h-0.5 bg-accent mb-4 transition-all duration-300 group-hover:w-16" />
                    <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                    <p className="text-white/85 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <div className="text-xs text-white/75 font-medium border-t border-white/25 pt-3">{step.detail}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-surface-elevated border-b border-border relative overflow-hidden">
          {/* Ambient background light pools */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Industries We{' '}
                <span className="gradient-text-teal">Recruit For</span>
              </h2>
              <p className="text-muted-foreground text-lg">Domain expertise across 8+ sectors.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span key={ind} className="bg-card border border-border rounded-full px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/40 hover:text-accent transition-colors cursor-default">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-24 sm:py-32 bg-section-dark text-white relative overflow-hidden border-t border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-section-title font-display font-700 text-white mb-6">
              Ready to Fill Your{' '}
              <span className="gradient-text-coral">Next Role?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10">Tell us about the position. We'll have a shortlist ready within 72 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm">
                Talk to a Talent Specialist
              </Link>
              <Link href="/#services" className="glass-btn text-white font-semibold px-8 py-3.5 rounded-full">
                Explore Other Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
