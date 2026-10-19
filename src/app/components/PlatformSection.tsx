'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Users,
  CheckCircle2,
} from 'lucide-react';

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'recruitment' | 'hrms'>('all');

  const recruitmentFeatures = [
    { name: 'AI-Powered Resume Screening', desc: 'Automatically evaluates candidates against job requirements with contextual precision.', category: 'AI & Parsing' },
    { name: 'Intelligent Resume Parsing', desc: 'Extracts skills, experience, education, and credentials directly into structured records.', category: 'AI & Parsing' },
    { name: 'AI Job Description Analysis', desc: 'Deconstructs and structures complex JD requirements for objective evaluation.', category: 'AI & Parsing' },
    { name: 'Semantic Candidate Matching', desc: 'Evaluates contextual relevance and semantic overlap between resumes and job specs.', category: 'AI & Parsing' },
    { name: 'Precision Match Scoring', desc: 'Generates an objective candidate-job match score using calibrated evaluation criteria.', category: 'Evaluation & Scoring' },
    { name: 'Requirement-Based Evaluation', desc: 'Screens candidates against both mandatory gatekeeper and preferred requirements.', category: 'Evaluation & Scoring' },
    { name: 'Weighted Evaluation Criteria', desc: 'Supports custom weight distributions for mission-critical role competencies.', category: 'Evaluation & Scoring' },
    { name: 'Detailed AI Evaluation', desc: 'Provides structured breakdown of strengths, growth areas, and category-level scores.', category: 'Evaluation & Scoring' },
    { name: 'Bias-Aware Screening', desc: 'Focuses evaluations purely on verifiable job-relevant merits, experience, and skills.', category: 'Evaluation & Scoring' },
    { name: 'Candidate Ranking', desc: 'Ranks and prioritizes top applicants dynamically so recruiters focus on high matches first.', category: 'Pipeline & Pool' },
    { name: 'Bulk Resume Upload', desc: 'Batch ingest tens or hundreds of candidate CVs simultaneously for rapid processing.', category: 'Pipeline & Pool' },
    { name: 'Centralized Candidate Pool', desc: 'Unified view of searchable talent across active and historical recruitment pipelines.', category: 'Pipeline & Pool' },
    { name: 'Candidate Comparison', desc: 'Side-by-side qualification matrices comparing finalists on identical benchmarks.', category: 'Pipeline & Pool' },
    { name: 'Structured Evaluation Records', desc: 'Audit-ready, consistent candidate scorecards for hiring manager review and traceability.', category: 'Pipeline & Pool' },
    { name: 'Job & Requisition Management', desc: 'Draft, publish, manage, and track requisitions across department hiring cycles.', category: 'Ops & Analytics' },
    { name: 'Client & Position Management', desc: 'Maintain company-specific hiring playbooks, bill rates, and position guidelines.', category: 'Ops & Analytics' },
    { name: 'Recruitment Dashboard', desc: 'Live visibility into open jobs, applicant velocity, pipeline stages, and conversion rates.', category: 'Ops & Analytics' },
    { name: 'Evaluation & Decision Workflow', desc: 'Capture interviewer notes, scorecards, and hiring decision sign-offs in one stream.', category: 'Ops & Analytics' },
    { name: 'Recruitment Analytics', desc: 'Actionable metrics on time-to-fill, channel yields, and screening pass-through rates.', category: 'Ops & Analytics' },
    { name: 'Role-Based Access (RBAC)', desc: 'Granular permissions for recruiters, hiring managers, interviewers, and system admins.', category: 'Ops & Analytics' },
  ];

  const hrmsFeatures = [
    { name: 'Complete Employee Lifecycle', desc: 'Seamlessly manages employees from day-one onboarding through offboarding and exit.', category: 'Core HR & Org' },
    { name: 'Employee Database & Directory', desc: 'Single source of truth for employee profiles, reporting lines, and personnel files.', category: 'Core HR & Org' },
    { name: 'Role-Based Access Control', desc: 'Strict multi-tier permission matrix across Admins, HR Leaders, Managers, and Staff.', category: 'Core HR & Org' },
    { name: 'Organization Management', desc: 'Configure departments, designations, pods, cost centers, and reporting hierarchies.', category: 'Core HR & Org' },
    { name: 'Policy Management', desc: 'Centrally distribute, update, and track employee acknowledgments of workplace policies.', category: 'Core HR & Org' },
    { name: 'Secure Authentication & Audit', desc: 'Enterprise authentication, session protection, and immutable administrative activity logs.', category: 'Core HR & Org' },
    { name: 'Employee Onboarding', desc: 'Structured digital onboarding paths with document collection and task checklists.', category: 'Onboarding & Docs' },
    { name: 'Recruitment-to-HRMS Integration', desc: 'Instantly converts selected candidates into onboarding records without manual re-entry.', category: 'Onboarding & Docs' },
    { name: 'Employee Document Management', desc: 'Secure cloud repository for offer letters, identity proofs, NDAs, and certifications.', category: 'Onboarding & Docs' },
    { name: 'Attendance Management', desc: 'Real-time check-in/out tracking, shift rosters, attendance history, and regularizations.', category: 'Workforce Ops' },
    { name: 'Leave Management', desc: 'Custom leave types, automatic balance calculations, encashment, and manager approvals.', category: 'Workforce Ops' },
    { name: 'Manager Approval Workflows', desc: 'Multi-level approval routings configured directly along departmental reporting lines.', category: 'Workforce Ops' },
    { name: 'Employee Request Workflows', desc: 'Standardized workflows for letter requests, profile corrections, and internal claims.', category: 'Workforce Ops' },
    { name: 'Task Management', desc: 'Assign, monitor, and deliver departmental tasks, milestones, and project deliverables.', category: 'Workforce Ops' },
    { name: 'Centralized Notifications', desc: 'Proactive reminders and alerts for document expiries, approvals, and company updates.', category: 'Workforce Ops' },
    { name: 'Payroll Information Management', desc: 'Structured compensation structures, statutory deductions, bank info, and payslips.', category: 'Payroll & Claims' },
    { name: 'Expense Management', desc: 'Submit receipts, track reimbursement claims, and route approvals straight to accounts.', category: 'Payroll & Claims' },
    { name: 'Performance Management', desc: 'Objective appraisal cycles, KRAs/KPIs, self-evaluations, and 360 review periods.', category: 'Growth & Care' },
    { name: 'Probation Management', desc: 'Automated milestone check-ins, probation reviews, extensions, and confirmations.', category: 'Growth & Care' },
    { name: 'Training & Learning (LMS)', desc: 'Assign orientation modules, skill upskilling courses, and monitor completion metrics.', category: 'Growth & Care' },
    { name: 'Help Desk / Service Requests', desc: 'Internal ticketing desk for IT, HR, facility, and administrative support inquiries.', category: 'Growth & Care' },
    { name: 'Employee Engagement', desc: 'Company announcements, milestones, peer recognitions, and town hall coordination.', category: 'Growth & Care' },
    { name: 'HR Operations Dashboard', desc: 'Live command center displaying workforce metrics, pending approvals, and operational health.', category: 'Analytics & Exit' },
    { name: 'Workforce Analytics', desc: 'In-depth insights into attendance rates, attrition trends, headcount growth, and KPIs.', category: 'Analytics & Exit' },
    { name: 'Custom Reports & Exports', desc: 'Generate compliance-ready statutory summaries and operational management reports.', category: 'Analytics & Exit' },
    { name: 'Resignation Management', desc: 'Standardized resignation submission, notice period calculations, and retention records.', category: 'Analytics & Exit' },
    { name: 'Offboarding Management', desc: 'Multi-department clearance checklist for assets, documents, and handover sign-offs.', category: 'Analytics & Exit' },
    { name: 'Full & Final (F&F) Settlement', desc: 'Automated settlement computation covering leaves, salary adjustments, and dues.', category: 'Analytics & Exit' },
    { name: 'Access Deprovisioning', desc: 'Coordinated security offboarding ensuring system permissions are revoked upon exit.', category: 'Analytics & Exit' },
  ];

  return (
    <section id="platform" className="py-20 sm:py-28 bg-white border-y border-tn-mist relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-tn-beige/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-mist rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-tn-coral" />
            <span className="text-xs font-bold text-tn-charcoal tracking-widest uppercase">
              Unified People &amp; Operations Platform
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-tn-charcoal leading-tight mb-6">
            Connected <span className="text-tn-coral">HireIQ™ &amp; HRMS</span> Ecosystem
          </h2>

          {/* One-Line Product Pitch */}
          <div className="bg-tn-ivory border border-tn-mist rounded-2xl p-6 sm:p-7 shadow-sm text-left sm:text-center relative overflow-hidden group hover:border-tn-coral transition-colors">
            <div className="absolute top-0 left-0 h-full w-1.5 bg-tn-coral" />
            <p className="text-base sm:text-lg lg:text-xl font-medium text-tn-charcoal leading-relaxed">
              &ldquo;AI-powered recruitment and end-to-end HR management, connecting hiring, onboarding, workforce operations, performance, and the complete employee lifecycle in one unified platform.&rdquo;
            </p>
          </div>
        </div>

        {/* Complete Hiring-to-Employee Lifecycle Visual Bar */}
        <div className="mb-16 bg-white border border-tn-mist rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-tn-mist">
            <div>
              <div className="text-xs font-bold text-tn-coral uppercase tracking-widest mb-1">End-to-End Pipeline</div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-tn-charcoal">
                Complete Hiring-to-Employee Lifecycle
              </h3>
            </div>
            <div className="text-xs text-tn-slate font-mono bg-tn-ivory border border-tn-mist px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-tn-coral animate-pulse" />
              Connected Recruitment &amp; HRMS Engine
            </div>
          </div>

          {/* The 6 Master Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {[
              { step: '01', title: 'Hire', sub: 'AI Screening & Match' },
              { step: '02', title: 'Onboard', sub: 'Digital Setup & Docs' },
              { step: '03', title: 'Manage', sub: 'Attendance & Payroll' },
              { step: '04', title: 'Develop', sub: 'Appraisals & Training' },
              { step: '05', title: 'Retain', sub: 'Help Desk & Growth' },
              { step: '06', title: 'Exit', sub: 'Clearance & F&F' },
            ].map((pillar) => (
              <div key={pillar.title} className="border border-tn-mist rounded-2xl p-4 transition-all hover:scale-[1.02] hover:border-tn-coral bg-tn-ivory/60">
                <div className="text-xs font-bold tracking-wider mb-1 text-tn-coral">STAGE {pillar.step}</div>
                <div className="font-display font-bold text-base sm:text-lg text-tn-charcoal">{pillar.title}</div>
                <div className="text-xs text-tn-slate mt-0.5">{pillar.sub}</div>
              </div>
            ))}
          </div>

          {/* Detailed Dual-Engine Flows */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Recruitment Workflow */}
            <div className="bg-tn-ivory border border-tn-mist rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-tn-coral/20 text-tn-charcoal border border-tn-coral/30 uppercase">
                  Recruitment &amp; Sourcing Workflow (HireIQ™)
                </span>
              </div>
              <p className="text-xs text-tn-slate leading-relaxed font-mono">
                Job Creation → JD Analysis → Resume Upload → AI Screening → Match Score → Candidate Ranking → Selection
              </p>
            </div>

            {/* HRMS Workflow */}
            <div className="bg-tn-ivory border border-tn-mist rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-tn-beige/40 text-tn-charcoal border border-tn-mist uppercase">
                  Workforce Operations (HRMS)
                </span>
              </div>
              <p className="text-xs text-tn-slate leading-relaxed font-mono">
                Selection → Onboarding → Employee Management → Attendance → Leave → Payroll → Performance → Training → Help Desk → Exit
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-[#242326] text-[#FFF8F0] shadow-md'
                : 'bg-white border border-tn-mist text-tn-charcoal hover:border-tn-coral'
            }`}
          >
            All Platform Features
          </button>
          <button
            onClick={() => setActiveTab('recruitment')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'recruitment'
                ? 'bg-[#242326] text-[#FFF8F0] shadow-md'
                : 'bg-white border border-tn-mist text-tn-charcoal hover:border-tn-coral'
            }`}
          >
            <Sparkles className="w-4 h-4 text-tn-coral" />
            <span>1. HireIQ™ — AI Recruitment Platform</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{recruitmentFeatures.length}</span>
          </button>
          <button
            onClick={() => setActiveTab('hrms')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'hrms'
                ? 'bg-[#242326] text-[#FFF8F0] shadow-md'
                : 'bg-white border border-tn-mist text-tn-charcoal hover:border-tn-coral'
            }`}
          >
            <Users className="w-4 h-4 text-tn-coral" />
            <span>2. HRMS — Workforce Management</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{hrmsFeatures.length}</span>
          </button>
        </div>

        {/* Tab 1: HireIQ Section */}
        {(activeTab === 'all' || activeTab === 'recruitment') && (
          <div className="mb-14">
            <div className="bg-white border border-tn-mist rounded-3xl p-6 sm:p-10 shadow-sm mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-tn-mist">
                <div>
                  <div className="inline-flex items-center gap-2 bg-tn-coral/15 text-tn-charcoal border border-tn-coral/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-tn-coral" />
                    HireIQ™ System Architecture
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-tn-charcoal">
                    HireIQ™ — AI Recruitment Platform
                  </h3>
                </div>
                <div className="lg:max-w-md bg-tn-ivory border border-tn-mist p-4 rounded-2xl">
                  <div className="text-[11px] font-bold text-tn-coral uppercase tracking-widest mb-1">
                    Marketing Positioning
                  </div>
                  <p className="text-xs text-tn-slate leading-relaxed">
                    &ldquo;AI-powered recruitment platform that transforms resumes into actionable candidate insights — from intelligent resume parsing and JD understanding to precision scoring, candidate ranking, comparison, and detailed evaluation.&rdquo;
                  </p>
                </div>
              </div>

              {/* Recruitment Features Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recruitmentFeatures.map((feat) => (
                  <div
                    key={feat.name}
                    className="p-4 rounded-2xl bg-tn-ivory/50 border border-tn-mist hover:border-tn-coral hover:bg-white transition-all space-y-2 group shadow-sm hover:shadow"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-tn-charcoal bg-tn-coral/15 px-2 py-0.5 rounded">
                        {feat.category}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-tn-coral opacity-70 group-hover:opacity-100" />
                    </div>
                    <div className="font-semibold text-sm text-tn-charcoal group-hover:text-tn-coral transition-colors">
                      {feat.name}
                    </div>
                    <p className="text-xs text-tn-slate leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: HRMS Section */}
        {(activeTab === 'all' || activeTab === 'hrms') && (
          <div className="mb-14">
            <div className="bg-white border border-tn-mist rounded-3xl p-6 sm:p-10 shadow-sm mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-tn-mist">
                <div>
                  <div className="inline-flex items-center gap-2 bg-tn-beige/40 text-tn-charcoal border border-tn-mist rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                    <Users className="w-3.5 h-3.5 text-tn-charcoal" />
                    HRMS Platform Suite
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-tn-charcoal">
                    HRMS — Human Resource Management System
                  </h3>
                </div>
                <div className="lg:max-w-md bg-tn-ivory border border-tn-mist p-4 rounded-2xl">
                  <div className="text-[11px] font-bold text-tn-coral uppercase tracking-widest mb-1">
                    Marketing Positioning
                  </div>
                  <p className="text-xs text-tn-slate leading-relaxed">
                    &ldquo;An end-to-end HRMS that centralizes employee management, attendance, leave, payroll information, onboarding, performance, training, help desk, analytics, and offboarding in one secure platform.&rdquo;
                  </p>
                </div>
              </div>

              {/* HRMS Features Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {hrmsFeatures.map((feat) => (
                  <div
                    key={feat.name}
                    className="p-4 rounded-2xl bg-tn-ivory/50 border border-tn-mist hover:border-tn-coral hover:bg-white transition-all space-y-2 group shadow-sm hover:shadow"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-tn-charcoal bg-tn-beige/30 px-2 py-0.5 rounded">
                        {feat.category}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-tn-coral opacity-70 group-hover:opacity-100" />
                    </div>
                    <div className="font-semibold text-sm text-tn-charcoal group-hover:text-tn-coral transition-colors">
                      {feat.name}
                    </div>
                    <p className="text-xs text-tn-slate leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Combined Value Proposition Highlights (Charcoal Anchor Background) */}
        <div className="bg-[#242326] text-[#FFF8F0] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-tn-mist/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-tn-coral uppercase tracking-widest mb-2 block">
                The Multiplier Effect
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
                  <div className="w-8 h-8 rounded-lg bg-tn-coral/20 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-tn-coral" />
                  </div>
                  <h4 className="font-semibold text-[#FFF8F0] text-sm mb-1.5">{val.title}</h4>
                  <p className="text-[#FFF8F0]/70 text-xs leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#FFF8F0]/70">
                Explore custom deployment models, private cloud configurations, or fully managed pods.
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/talent-acquisition"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-tn-coral hover:text-[#FFF8F0] transition-colors"
                >
                  Explore Talent Acquisition &amp; HireIQ™ →
                </Link>
                <span className="text-[#FFF8F0]/30">|</span>
                <Link
                  href="/hr-workforce-solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-tn-coral hover:text-[#FFF8F0] transition-colors"
                >
                  Explore HRMS Solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
