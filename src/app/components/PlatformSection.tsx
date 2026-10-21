'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Users,
  CheckCircle2,
  Brain,
  Target,
  Layers,
  BarChart3,
  Building2,
  FileText,
  Clock,
  DollarSign,
  GraduationCap,
  Search,
  ArrowRight,
  ShieldCheck,
  Check,
  Zap,
} from 'lucide-react';

interface FeatureItem {
  name: string;
  desc: string;
}

interface PlatformModule {
  id: string;
  stage: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeBg: string;
  features: FeatureItem[];
}

const hireIqModules: PlatformModule[] = [
  {
    id: 'ai-parsing',
    stage: 'Module 01 · Ingestion & NLP',
    title: 'AI Parsing & JD Intelligence',
    tagline: 'Automated ingestion, intelligent parsing, and semantic contextual understanding.',
    icon: Brain,
    badgeBg: 'bg-[#F3ECE4] text-[#704A4B] border-[#DED3C7]',
    features: [
      { name: 'AI-Powered Resume Screening', desc: 'Automatically evaluates candidates against job requirements with contextual precision.' },
      { name: 'Intelligent Resume Parsing', desc: 'Extracts skills, experience, education, and credentials directly into structured records.' },
      { name: 'AI Job Description Analysis', desc: 'Deconstructs and structures complex JD requirements for objective evaluation.' },
      { name: 'Semantic Candidate Matching', desc: 'Evaluates contextual relevance and semantic overlap between resumes and job specs.' },
    ],
  },
  {
    id: 'scoring',
    stage: 'Module 02 · Objective Matching',
    title: 'Calibrated Evaluation & Scoring',
    tagline: 'Objective, gatekeeper-based criteria, weighted skills, and bias-aware scoring.',
    icon: Target,
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    features: [
      { name: 'Precision Match Scoring', desc: 'Generates an objective candidate-job match score using calibrated evaluation criteria.' },
      { name: 'Requirement-Based Evaluation', desc: 'Screens candidates against both mandatory gatekeeper and preferred requirements.' },
      { name: 'Weighted Evaluation Criteria', desc: 'Supports custom weight distributions for mission-critical role competencies.' },
      { name: 'Detailed AI Evaluation', desc: 'Provides structured breakdown of strengths, growth areas, and category-level scores.' },
      { name: 'Bias-Aware Screening', desc: 'Focuses evaluations purely on verifiable job-relevant merits, experience, and skills.' },
    ],
  },
  {
    id: 'pipeline',
    stage: 'Module 03 · Decision Acceleration',
    title: 'Talent Pool & Pipeline Benchmarking',
    tagline: 'Batch ingest CVs, dynamically rank top matches, and compare finalists side-by-side.',
    icon: Layers,
    badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    features: [
      { name: 'Candidate Ranking', desc: 'Ranks and prioritizes top applicants dynamically so recruiters focus on high matches first.' },
      { name: 'Bulk Resume Upload', desc: 'Batch ingest tens or hundreds of candidate CVs simultaneously for rapid processing.' },
      { name: 'Centralized Candidate Pool', desc: 'Unified view of searchable talent across active and historical recruitment pipelines.' },
      { name: 'Candidate Comparison', desc: 'Side-by-side qualification matrices comparing finalists on identical benchmarks.' },
      { name: 'Structured Evaluation Records', desc: 'Audit-ready, consistent candidate scorecards for hiring manager review and traceability.' },
    ],
  },
  {
    id: 'ops-analytics',
    stage: 'Module 04 · Governance & Analytics',
    title: 'Operations & Recruitment Intelligence',
    tagline: 'Requisition lifecycle management, decision workflows, conversion funnels, and RBAC.',
    icon: BarChart3,
    badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
    features: [
      { name: 'Job & Requisition Management', desc: 'Draft, publish, manage, and track requisitions across department hiring cycles.' },
      { name: 'Client & Position Management', desc: 'Maintain company-specific hiring playbooks, bill rates, and position guidelines.' },
      { name: 'Recruitment Dashboard', desc: 'Live visibility into open jobs, applicant velocity, pipeline stages, and conversion rates.' },
      { name: 'Evaluation & Decision Workflow', desc: 'Capture interviewer notes, scorecards, and hiring decision sign-offs in one stream.' },
      { name: 'Recruitment Analytics', desc: 'Actionable metrics on time-to-fill, channel yields, and screening pass-through rates.' },
      { name: 'Role-Based Access (RBAC)', desc: 'Granular permissions for recruiters, hiring managers, interviewers, and system admins.' },
    ],
  },
];

const hrmsSuites: PlatformModule[] = [
  {
    id: 'core-hr',
    stage: 'Suite 01 · Organization Hub',
    title: 'Core HR & Org Architecture',
    tagline: 'Centralized employee directory, multi-tier RBAC, org hierarchies, and policy records.',
    icon: Building2,
    badgeBg: 'bg-[#F3ECE4] text-[#704A4B] border-[#DED3C7]',
    features: [
      { name: 'Complete Employee Lifecycle', desc: 'Seamlessly manages employees from day-one onboarding through offboarding and exit.' },
      { name: 'Employee Database & Directory', desc: 'Single source of truth for employee profiles, reporting lines, and personnel files.' },
      { name: 'Role-Based Access Control', desc: 'Strict multi-tier permission matrix across Admins, HR Leaders, Managers, and Staff.' },
      { name: 'Organization Management', desc: 'Configure departments, designations, pods, cost centers, and reporting hierarchies.' },
      { name: 'Policy Management', desc: 'Centrally distribute, update, and track employee acknowledgments of workplace policies.' },
      { name: 'Secure Authentication & Audit', desc: 'Enterprise authentication, session protection, and immutable administrative activity logs.' },
    ],
  },
  {
    id: 'onboarding',
    stage: 'Suite 02 · Setup & Compliance',
    title: 'Digital Onboarding & Records',
    tagline: '1-click conversion from HireIQ, digital checklists, and secure cloud document storage.',
    icon: FileText,
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
    features: [
      { name: 'Employee Onboarding', desc: 'Structured digital onboarding paths with document collection and task checklists.' },
      { name: 'Recruitment-to-HRMS Integration', desc: 'Instantly converts selected candidates into onboarding records without manual re-entry.' },
      { name: 'Employee Document Management', desc: 'Secure cloud repository for offer letters, identity proofs, NDAs, and certifications.' },
    ],
  },
  {
    id: 'workforce',
    stage: 'Suite 03 · Daily Operations',
    title: 'Time, Attendance & Workforce Ops',
    tagline: 'Real-time check-in, shift rosters, leave calculations, approval workflows & tasks.',
    icon: Clock,
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    features: [
      { name: 'Attendance Management', desc: 'Real-time check-in/out tracking, shift rosters, attendance history, and regularizations.' },
      { name: 'Leave Management', desc: 'Custom leave types, automatic balance calculations, encashment, and manager approvals.' },
      { name: 'Manager Approval Workflows', desc: 'Multi-level approval routings configured directly along departmental reporting lines.' },
      { name: 'Employee Request Workflows', desc: 'Standardized workflows for letter requests, profile corrections, and internal claims.' },
      { name: 'Task Management', desc: 'Assign, monitor, and deliver departmental tasks, milestones, and project deliverables.' },
      { name: 'Centralized Notifications', desc: 'Proactive reminders and alerts for document expiries, approvals, and company updates.' },
    ],
  },
  {
    id: 'payroll',
    stage: 'Suite 04 · Financial Ops',
    title: 'Compensation, Payroll & Expense',
    tagline: 'Structured salary records, statutory deductions, bank routing, and reimbursement claims.',
    icon: DollarSign,
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    features: [
      { name: 'Payroll Information Management', desc: 'Structured compensation structures, statutory deductions, bank info, and payslips.' },
      { name: 'Expense Management', desc: 'Submit receipts, track reimbursement claims, and route approvals straight to accounts.' },
    ],
  },
  {
    id: 'growth',
    stage: 'Suite 05 · Talent Care',
    title: 'Growth, Performance & Care',
    tagline: 'Objective appraisal cycles, probation tracking, LMS modules, and internal ticketing desk.',
    icon: GraduationCap,
    badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    features: [
      { name: 'Performance Management', desc: 'Objective appraisal cycles, KRAs/KPIs, self-evaluations, and 360 review periods.' },
      { name: 'Probation Management', desc: 'Automated milestone check-ins, probation reviews, extensions, and confirmations.' },
      { name: 'Training & Learning (LMS)', desc: 'Assign orientation modules, skill upskilling courses, and monitor completion metrics.' },
      { name: 'Help Desk / Service Requests', desc: 'Internal ticketing desk for IT, HR, facility, and administrative support inquiries.' },
      { name: 'Employee Engagement', desc: 'Company announcements, milestones, peer recognitions, and town hall coordination.' },
    ],
  },
  {
    id: 'analytics-exit',
    stage: 'Suite 06 · Insights & Exit',
    title: 'Workforce Analytics & Offboarding',
    tagline: 'Operational command center, attrition analytics, resignation clearance, and F&F settlement.',
    icon: BarChart3,
    badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
    features: [
      { name: 'HR Operations Dashboard', desc: 'Live command center displaying workforce metrics, pending approvals, and operational health.' },
      { name: 'Workforce Analytics', desc: 'In-depth insights into attendance rates, attrition trends, headcount growth, and KPIs.' },
      { name: 'Custom Reports & Exports', desc: 'Generate compliance-ready statutory summaries and operational management reports.' },
      { name: 'Resignation Management', desc: 'Standardized resignation submission, notice period calculations, and retention records.' },
      { name: 'Offboarding Management', desc: 'Multi-department clearance checklist for assets, documents, and handover sign-offs.' },
      { name: 'Full & Final (F&F) Settlement', desc: 'Automated settlement computation covering leaves, salary adjustments, and dues.' },
      { name: 'Access Deprovisioning', desc: 'Coordinated security offboarding ensuring system permissions are revoked upon exit.' },
    ],
  },
];

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'hireiq' | 'hrms'>('all');
  const [selectedHireIqModule, setSelectedHireIqModule] = useState<string>('all');
  const [selectedHrmsSuite, setSelectedHrmsSuite] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Total feature count
  const totalFeaturesCount = useMemo(() => {
    const hireCount = hireIqModules.reduce((acc, m) => acc + m.features.length, 0);
    const hrmsCount = hrmsSuites.reduce((acc, m) => acc + m.features.length, 0);
    return hireCount + hrmsCount;
  }, []);

  // Filtered HireIQ modules
  const filteredHireIqModules = useMemo(() => {
    return hireIqModules
      .filter((m) => selectedHireIqModule === 'all' || m.id === selectedHireIqModule)
      .map((m) => {
        if (!searchQuery.trim()) return m;
        const q = searchQuery.toLowerCase();
        const matching = m.features.filter(
          (f) => f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q) || m.title.toLowerCase().includes(q)
        );
        return { ...m, features: matching };
      })
      .filter((m) => m.features.length > 0);
  }, [selectedHireIqModule, searchQuery]);

  // Filtered HRMS suites
  const filteredHrmsSuites = useMemo(() => {
    return hrmsSuites
      .filter((m) => selectedHrmsSuite === 'all' || m.id === selectedHrmsSuite)
      .map((m) => {
        if (!searchQuery.trim()) return m;
        const q = searchQuery.toLowerCase();
        const matching = m.features.filter(
          (f) => f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q) || m.title.toLowerCase().includes(q)
        );
        return { ...m, features: matching };
      })
      .filter((m) => m.features.length > 0);
  }, [selectedHrmsSuite, searchQuery]);

  return (
    <section id="platform" className="py-20 sm:py-28 bg-[#faf8f5] border-y border-tn-mist relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-tn-beige/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F3ECE4] border border-[#DED3C7] rounded-full px-4 py-1.5 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#704A4B]" />
            <span className="text-xs font-bold text-slate-800 tracking-wider uppercase">
              Proprietary Technology Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight mb-5">
            Connected <span className="text-[#704A4B]">HireIQ™ &amp; HRMS</span> Ecosystem
          </h2>

          {/* One-Line Product Pitch */}
          <div className="bg-white border border-[#DED3C7] rounded-2xl p-6 sm:p-7 shadow-xs text-left sm:text-center relative overflow-hidden group hover:border-[#704A4B]/40 transition-colors">
            <div className="absolute top-0 left-0 h-full w-1.5 bg-[#704A4B]" />
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              &ldquo;AI-powered recruitment and end-to-end HR management, connecting hiring, onboarding, workforce operations, performance, and the complete employee lifecycle in one unified platform.&rdquo;
            </p>
          </div>
        </div>

        {/* Complete Hiring-to-Employee Lifecycle Visual Bar */}
        <div className="mb-14 bg-white border border-[#DED3C7] rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-[#704A4B] uppercase tracking-widest mb-1">
                Unified End-to-End Pipeline
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                Complete Hiring-to-Employee Lifecycle
              </h3>
            </div>
            <div className="text-xs text-slate-600 font-mono bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Connected Recruitment &amp; Workforce Engine</span>
            </div>
          </div>

          {/* The 6 Master Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: '01', title: 'Hire', sub: 'AI Screening & Match' },
              { step: '02', title: 'Onboard', sub: 'Digital Setup & Docs' },
              { step: '03', title: 'Manage', sub: 'Attendance & Payroll' },
              { step: '04', title: 'Develop', sub: 'Appraisals & Training' },
              { step: '05', title: 'Retain', sub: 'Help Desk & Growth' },
              { step: '06', title: 'Exit', sub: 'Clearance & F&F' },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="border border-[#DED3C7]/90 rounded-2xl p-4 transition-all hover:border-[#704A4B]/40 hover:bg-[#F3ECE4]/40 bg-slate-50/60"
              >
                <div className="text-xs font-bold tracking-wider mb-1 text-[#704A4B]">STAGE {pillar.step}</div>
                <div className="font-display font-bold text-base sm:text-lg text-slate-900">{pillar.title}</div>
                <div className="text-xs text-slate-600 mt-0.5">{pillar.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Toolbar: Platform Switcher & Live Feature Search */}
        <div className="bg-white border border-[#DED3C7] rounded-3xl p-4 sm:p-6 mb-10 shadow-xs space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Primary Platform Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('all');
                  setSelectedHireIqModule('all');
                  setSelectedHrmsSuite('all');
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-[#704A4B] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Platform Solutions ({totalFeaturesCount})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('hireiq')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'hireiq'
                    ? 'bg-[#704A4B] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-tn-coral" />
                <span>1. HireIQ™ AI Recruitment</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-black/10">20</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('hrms')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'hrms'
                    ? 'bg-[#704A4B] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-tn-coral" />
                <span>2. HRMS Workforce Platform</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-black/10">29</span>
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[260px] sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search capabilities (e.g. parsing, leave)..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-[#704A4B] focus:ring-1 focus:ring-[#704A4B] outline-none text-slate-800 placeholder-slate-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Sub-Filters for HireIQ */}
          {(activeTab === 'all' || activeTab === 'hireiq') && (
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-bold text-slate-500 uppercase tracking-wider mr-1 text-[11px]">
                HireIQ Modules:
              </span>
              {[
                { id: 'all', label: 'All Modules' },
                { id: 'ai-parsing', label: 'AI & Parsing' },
                { id: 'scoring', label: 'Scoring & Evaluation' },
                { id: 'pipeline', label: 'Pipeline & Talent Pool' },
                { id: 'ops-analytics', label: 'Ops & Analytics' },
              ].map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedHireIqModule(sub.id)}
                  className={`px-3 py-1 rounded-lg font-medium transition-all ${
                    selectedHireIqModule === sub.id
                      ? 'bg-[#F3ECE4] text-[#704A4B] font-bold border border-[#DED3C7]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          {/* Sub-Filters for HRMS */}
          {(activeTab === 'all' || activeTab === 'hrms') && (
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-bold text-slate-500 uppercase tracking-wider mr-1 text-[11px]">
                HRMS Suites:
              </span>
              {[
                { id: 'all', label: 'All Suites' },
                { id: 'core-hr', label: 'Core HR & Org' },
                { id: 'onboarding', label: 'Onboarding & Docs' },
                { id: 'workforce', label: 'Time & Attendance' },
                { id: 'payroll', label: 'Payroll & Claims' },
                { id: 'growth', label: 'Performance & LMS' },
                { id: 'analytics-exit', label: 'Analytics & Exit' },
              ].map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedHrmsSuite(sub.id)}
                  className={`px-3 py-1 rounded-lg font-medium transition-all ${
                    selectedHrmsSuite === sub.id
                      ? 'bg-[#F3ECE4] text-[#704A4B] font-bold border border-[#DED3C7]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Section 1: HireIQ Platform ── */}
        {(activeTab === 'all' || activeTab === 'hireiq') && (
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#F3ECE4] text-[#704A4B] border border-[#DED3C7] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#704A4B]" />
                  <span>Module Suite 01</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                  HireIQ™ — AI Recruitment Platform
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Transforms resumes into actionable candidate insights: from intelligent resume parsing and JD understanding to precision scoring, candidate ranking, and objective evaluations.
                </p>
              </div>

              <div className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl self-start md:self-auto">
                <span className="font-bold text-[#704A4B]">4 Core Modules</span> · 20 Capabilities
              </div>
            </div>

            {/* Modular Bento Grid: 4 Structured Hub Cards */}
            {filteredHireIqModules.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHireIqModules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <div
                      key={module.id}
                      className="bg-white border border-slate-200/90 hover:border-[#704A4B]/50 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Module Card Header */}
                        <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-[#F3ECE4] text-[#704A4B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${module.badgeBg}`}>
                                {module.stage}
                              </span>
                              <h4 className="font-display font-bold text-lg sm:text-xl text-slate-900 mt-1">
                                {module.title}
                              </h4>
                            </div>
                          </div>
                          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                            {module.features.length} Features
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-5">
                          {module.tagline}
                        </p>

                        {/* Scannable Feature List */}
                        <div className="space-y-3">
                          {module.features.map((feat) => (
                            <div
                              key={feat.name}
                              className="p-3 rounded-xl bg-slate-50/70 hover:bg-[#F3ECE4]/40 border border-slate-100 hover:border-[#DED3C7] transition-all"
                            >
                              <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#704A4B] flex-shrink-0 mt-0.5" />
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-slate-900 leading-snug">
                                    {feat.name}
                                  </div>
                                  <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                                    {feat.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white border border-dashed border-slate-200 rounded-3xl p-8 text-center text-slate-500 text-sm">
                No HireIQ features matching your filter or search query.
              </div>
            )}
          </div>
        )}

        {/* ── Section 2: HRMS Platform ── */}
        {(activeTab === 'all' || activeTab === 'hrms') && (
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#F3ECE4] text-[#704A4B] border border-[#DED3C7] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                  <Users className="w-3.5 h-3.5 text-[#704A4B]" />
                  <span>Module Suite 02</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                  HRMS — Human Resource Management System
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Centralizes employee records, attendance, leave, payroll information, onboarding, performance, training, help desk, analytics, and offboarding in one enterprise platform.
                </p>
              </div>

              <div className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl self-start md:self-auto">
                <span className="font-bold text-[#704A4B]">6 Operational Suites</span> · 29 Capabilities
              </div>
            </div>

            {/* Modular Bento Grid: 6 Structured Hub Cards */}
            {filteredHrmsSuites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHrmsSuites.map((suite) => {
                  const Icon = suite.icon;
                  return (
                    <div
                      key={suite.id}
                      className="bg-white border border-slate-200/90 hover:border-[#704A4B]/50 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Suite Card Header */}
                        <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-[#F3ECE4] text-[#704A4B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${suite.badgeBg}`}>
                                {suite.stage}
                              </span>
                              <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 mt-1">
                                {suite.title}
                              </h4>
                            </div>
                          </div>
                          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {suite.features.length}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-5">
                          {suite.tagline}
                        </p>

                        {/* Scannable Feature List */}
                        <div className="space-y-2.5">
                          {suite.features.map((feat) => (
                            <div
                              key={feat.name}
                              className="p-2.5 rounded-xl bg-slate-50/70 hover:bg-[#F3ECE4]/40 border border-slate-100 hover:border-[#DED3C7] transition-all"
                            >
                              <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#704A4B] flex-shrink-0 mt-0.5" />
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-slate-900 leading-snug">
                                    {feat.name}
                                  </div>
                                  <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                                    {feat.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white border border-dashed border-slate-200 rounded-3xl p-8 text-center text-slate-500 text-sm">
                No HRMS capabilities matching your filter or search query.
              </div>
            )}
          </div>
        )}

        {/* Combined Value Proposition Highlights (Charcoal Anchor Background) */}
        <div className="bg-[#242326] text-[#FFF8F0] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-700/60 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-[#E5BDB4] uppercase tracking-widest mb-2 block">
                The Operational Multiplier
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FFF8F0] mb-3">
                Why a Connected Recruitment + HRMS Ecosystem Matters
              </h3>
              <p className="text-[#FFF8F0]/80 text-sm sm:text-base leading-relaxed">
                By uniting talent acquisition intelligence with ongoing workforce operations, your organization eliminates data silos, cuts administrative latency, and creates a seamless experience from initial candidate outreach to long-term career growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Zero Data Duplication', desc: 'Accepted candidates flow straight into HRMS onboarding with documents, compensation, and background records attached.' },
                { title: 'Automated HR Workflows', desc: 'From attendance check-in to manager leaves and expense approvals, eliminate repetitive paperwork completely.' },
                { title: 'Data-Driven HR Analytics', desc: 'Correlate interview match scoring against subsequent employee performance reviews to refine hiring models.' },
                { title: 'Enterprise Security & RBAC', desc: 'Multi-tenant authorization, strict statutory data protections, and immutable administrative audit trails.' },
              ].map((val) => (
                <div key={val.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-tn-coral/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-tn-coral" />
                  </div>
                  <h4 className="font-semibold text-[#FFF8F0] text-sm mb-1.5">{val.title}</h4>
                  <p className="text-[#FFF8F0]/70 text-xs leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#FFF8F0]/70">
                Custom deployment models, private cloud configurations, and fully managed pods available.
              </div>
              <Link
                href="/#contact"
                className="bg-tn-coral text-tn-charcoal hover:bg-[#F28B6A] text-xs font-bold px-6 py-2.5 rounded-full transition-colors text-center shadow-md"
              >
                Schedule Technical Architecture Demo
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
