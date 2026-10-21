'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Onboarding & Offboarding',
    desc: 'Structured programmes that get new hires productive faster and handle exits with compliance and dignity.',
    icon: 'UserPlusIcon',
    useCases: ['First-90-day onboarding journeys', 'Multi-location simultaneous onboarding', 'Compliant exit interviews & clearance'],
  },
  {
    title: 'Payroll & Statutory Compliance',
    desc: 'Accurate, on-time payroll processing with full statutory compliance PF, ESI, TDS, PT, and more.',
    icon: 'CurrencyRupeeIcon',
    useCases: ['Monthly payroll for 10–5,000 employees', 'Multi-state compliance management', 'Year-end TDS filing & Form 16 issuance'],
  },
  {
    title: 'Attendance & Leave Management',
    desc: 'Digital systems for tracking attendance, managing leave balances, and enforcing policy consistently.',
    icon: 'CalendarDaysIcon',
    useCases: ['Biometric & app-based attendance', 'Shift scheduling for 24/7 operations', 'Leave encashment & carry-forward automation'],
  },
  {
    title: 'Performance Frameworks',
    desc: 'Design and implementation of goal-setting, appraisal, and continuous feedback systems.',
    icon: 'ChartBarIcon',
    useCases: ['OKR & KPI framework design', 'Annual appraisal cycle management', '360-degree feedback implementation'],
  },
  {
    title: 'HR Consulting & Advisory',
    desc: 'Strategic HR guidance for policy design, culture building, and workforce transformation.',
    icon: 'LightBulbIcon',
    useCases: ['HR policy handbook creation', 'Culture & engagement diagnostics', 'HR function setup for new businesses'],
  },
];

import { Search, Compass, Cog, GraduationCap, Rocket, RefreshCw, FileSpreadsheet, Zap, Briefcase, BarChart3, Users, Clock, CheckCircle2, Sparkles } from 'lucide-react';

const hrmsCapabilities = [
  { name: 'Complete Employee Lifecycle Management', desc: 'Manage employees smoothly from day-one onboarding through offboarding and final exit.', category: 'Core People' },
  { name: 'Employee Database & Directory', desc: 'Centralized repository of employee profiles, organizational charts, and team designations.', category: 'Core People' },
  { name: 'Role-Based Access Control (RBAC)', desc: 'Multi-tiered access and permissions calibrated for Admins, HR, Managers, and Employees.', category: 'Core People' },
  { name: 'Organization Management', desc: 'Structure departments, designations, sub-teams, and multi-tier reporting hierarchies.', category: 'Core People' },
  { name: 'Policy Management', desc: 'Publish, distribute, and manage organizational workplace policies with digital acknowledgments.', category: 'Core People' },
  { name: 'Secure Authentication & Audit Logs', desc: 'Enterprise security mechanisms with immutable activity logs tracking administrative workflows.', category: 'Core People' },
  { name: 'Employee Onboarding', desc: 'Structured onboarding checklist with digital document collection, forms, and IT setup tracking.', category: 'Onboarding & Docs' },
  { name: 'Recruitment-to-HRMS Integration', desc: 'Move selected candidate information from recruitment straight into onboarding without manual data re-entry.', category: 'Onboarding & Docs' },
  { name: 'Employee Document Management', desc: 'Centralized document repository with controlled access for contracts, NDAs, and IDs.', category: 'Onboarding & Docs' },
  { name: 'Attendance Management', desc: 'Clock-in/clock-out, shift rosters, attendance regularizations, and multi-location tracking.', category: 'Workforce Ops' },
  { name: 'Leave Management', desc: 'Automated leave balances, application workflows, encashment rules, and manager approvals.', category: 'Workforce Ops' },
  { name: 'Manager Approval Workflows', desc: 'Customizable approval hierarchies for leave, expenses, letter requests, and profile updates.', category: 'Workforce Ops' },
  { name: 'Employee Requests Management', desc: 'Structured ticketing for HR documents, address updates, bank details, and bonafide letters.', category: 'Workforce Ops' },
  { name: 'Task Management', desc: 'Assign, monitor, and deliver departmental tasks, milestones, and project deliverables.', category: 'Workforce Ops' },
  { name: 'Centralized Notifications', desc: 'Proactive alerts for leave requests, document renewals, company events, and milestones.', category: 'Workforce Ops' },
  { name: 'Payroll Information Management', desc: 'Salary structures, tax declarations, statutory contributions, and secure payslip distribution.', category: 'Payroll & Claims' },
  { name: 'Expense Management', desc: 'Digital receipt uploads, multi-currency claims, and automated manager reimbursement approvals.', category: 'Payroll & Claims' },
  { name: 'Performance Management', desc: 'Annual and quarterly appraisal cycles, 360 feedback, OKR/KPI alignment, and rating scales.', category: 'Growth & Care' },
  { name: 'Probation Management', desc: 'Probation milestone tracking, automated manager review alerts, confirmations, and extensions.', category: 'Growth & Care' },
  { name: 'Training & Learning (LMS)', desc: 'Assign onboarding courses, track compliance training, and monitor professional development.', category: 'Growth & Care' },
  { name: 'Help Desk / Service Requests', desc: 'Internal ticketing desk for IT, HR, facility, and administrative support inquiries.', category: 'Growth & Care' },
  { name: 'Employee Engagement', desc: 'Company announcements, milestones, peer recognitions, and town hall coordination.', category: 'Growth & Care' },
  { name: 'HR Operations Dashboard', desc: 'Command center displaying workforce metrics, pending approvals, and operational health.', category: 'Analytics & Exit' },
  { name: 'Workforce Analytics', desc: 'Real-time reporting on attendance, leave patterns, headcount growth, attrition, and KPIs.', category: 'Analytics & Exit' },
  { name: 'Custom Reports & Compliance', desc: 'Generate statutory compliance summaries, workforce audits, and executive MIS reports.', category: 'Analytics & Exit' },
  { name: 'Resignation Management', desc: 'Standardized resignation submission, notice period calculations, and retention records.', category: 'Analytics & Exit' },
  { name: 'Offboarding Management', desc: 'Multi-department clearance checklist for assets, documents, and handover sign-offs.', category: 'Analytics & Exit' },
  { name: 'Full & Final (F&F) Settlement', desc: 'Automated settlement computation covering leaves, salary adjustments, and dues.', category: 'Analytics & Exit' },
  { name: 'Access Deprovisioning', desc: 'Coordinated security offboarding ensuring system permissions are revoked upon exit.', category: 'Analytics & Exit' },
];

const processSteps = [
  {
    num: '01',
    title: 'HR Audit & Discovery',
    desc: 'We assess your current HR processes, compliance posture, and workforce data to identify gaps and priorities.',
    icon: Search,
    detail: 'Process audit · Compliance gap analysis · Workforce data review',
  },
  {
    num: '02',
    title: 'Solution Design',
    desc: 'Custom HR framework design aligned to your headcount, industry, and growth stage not a generic template.',
    icon: Compass,
    detail: 'Policy drafting · Process mapping · Technology selection',
  },
  {
    num: '03',
    title: 'System Setup & Configuration',
    desc: 'HRMS configuration, payroll system setup, and integration with existing tools like ERP or accounting software.',
    icon: Cog,
    detail: 'HRMS onboarding · Payroll engine setup · Integration testing',
  },
  {
    num: '04',
    title: 'Team Training & Handover',
    desc: 'Your HR team and managers are trained on new processes, systems, and compliance requirements.',
    icon: GraduationCap,
    detail: 'Manager workshops · Employee self-service training · SOP documentation',
  },
  {
    num: '05',
    title: 'Go Live & Parallel Run',
    desc: 'Controlled go live with a parallel run period to validate accuracy before full cutover.',
    icon: Rocket,
    detail: 'Parallel payroll validation · Compliance sign-off · Issue resolution',
  },
  {
    num: '06',
    title: 'Ongoing Support & Optimisation',
    desc: 'Monthly compliance reviews, payroll processing, and continuous improvement of HR operations.',
    icon: RefreshCw,
    detail: 'Monthly payroll runs · Quarterly compliance reviews · Annual policy updates',
  },
];

const industries = ['Technology', 'BFSI', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics', 'Professional Services', 'E-commerce'];

const metrics = [
  { value: '99.8%', label: 'Payroll accuracy rate' },
  { value: '100%', label: 'On-time compliance filing' },
  { value: '40%', label: 'Reduction in HR admin time' },
  { value: '15+', label: 'States covered for compliance' },
];

export default function HRWorkforceSolutionsPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-background">

        {/* Hero */}
        <section className="bg-section-dark pt-32 pb-24 sm:pt-40 sm:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 blob-coral opacity-25 pointer-events-none" style={{ top: '10%', left: '55%', width: '700px', height: '700px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex flex-col items-start gap-4 mb-6">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
                  Back to Services
                </Link>
                <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/25 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-xs font-semibold text-secondary tracking-widest uppercase">HR &amp; Workforce</span>
                </div>
              </div>
              <h1 className="text-hero font-display font-700 text-white mb-6">
                HR &amp; Workforce{' '}
                <span className="gradient-text-coral">Solutions</span>
              </h1>
              <p className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                Compliant, streamlined HR operations that free your leadership team to focus on growth — not paperwork.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#process" className="bg-secondary text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-secondary/30">
                  See How It Works
                </a>
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
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-semibold text-secondary tracking-widest uppercase">Our Services</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Five HR{' '}
                <span className="gradient-text-coral">Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg">Select a service to explore real-world applications.</p>
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
                      : 'bg-card border-border hover:border-secondary/30'
                      }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${activeService === i ? 'bg-white/10' : 'bg-secondary/10'}`}>
                      <Icon name={svc.icon as 'UserPlusIcon'} size={16} className={activeService === i ? 'text-white' : 'text-secondary'} variant="outline" />
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
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                    <Icon name={services[activeService].icon as 'UserPlusIcon'} size={22} className="text-secondary" variant="outline" />
                  </div>
                  <h3 className="font-display font-700 text-foreground text-xl mb-3">{services[activeService].title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{services[activeService].desc}</p>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Common Use Cases</div>
                    <div className="space-y-3">
                      {services[activeService].useCases.map((uc) => (
                        <div key={uc} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-secondary"><path d="m5 12 5 5 9-9" /></svg>
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

        {/* Workforce Solutions Section (Pillar 3) */}
        <section id="workforce" className="py-20 sm:py-28 bg-card border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">Workforce Solutions</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Flexible Workforce Models{' '}
                <span className="gradient-text-teal">Built Around Demand</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Scale your operational capacity up or down with compliant contract staffing, workforce planning, and turnkey deployment solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Contract Workforce', desc: 'Pre-screened, specialized professionals deployed on flexible tenures for high-priority initiatives.', icon: FileSpreadsheet },
                { title: 'Temporary Workforce', desc: 'Agile staffing support to handle seasonal peaks, project deadlines, and operational leaves.', icon: Zap },
                { title: 'Workforce Deployment', desc: 'Rapid mobilization and multi-location field staffing with full onboarding and legal compliance.', icon: Rocket },
                { title: 'Workforce Planning', desc: 'Strategic capacity modeling, skills-gap identification, and headcount budgeting alignment.', icon: Compass },
                { title: 'Workforce Management', desc: 'Ongoing performance tracking, shift scheduling, payroll administration, and SLA governance.', icon: BarChart3 },
                { title: 'Flexible & Scalable Workforce', desc: 'Modular models allowing rapid headcount changes without long-term overhead liabilities.', icon: RefreshCw },
              ].map((wf) => {
                const IconComp = wf.icon;
                return (
                  <div key={wf.title} className="spotlight-card hover-lift bg-background border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-foreground text-lg mb-2">{wf.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{wf.desc}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-border/60">
                      <Link href="/#contact" className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1">
                        <span>Request deployment</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-display font-bold text-xl">Need a custom contract staffing or workforce model?</h3>
                <p className="text-white/70 text-sm">Our workforce consultants design customized headcount solutions tailored to your operational SLA.</p>
              </div>
              <Link href="/#contact" className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all text-xs flex-shrink-0 shadow-md">
                Talk to a Workforce Specialist
              </Link>
            </div>
          </div>
        </section>

        {/* HRMS Platform Capabilities Section */}
        <section id="hrms-platform" className="py-20 sm:py-28 bg-surface-subtle border-b border-border/80 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-sm mb-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-border/60">
                <div>
                  <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-3.5 py-1 text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    HRMS Platform Suite
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground">
                    Human Resource Management System (HRMS)
                  </h2>
                </div>
                <div className="lg:max-w-md bg-surface-subtle border border-border p-4 rounded-2xl">
                  <div className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-1">
                    Marketing Positioning
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    &ldquo;An end-to-end HRMS that centralizes employee management, attendance, leave, payroll information, onboarding, performance, training, help desk, analytics, and offboarding in one secure platform.&rdquo;
                  </p>
                </div>
              </div>

              {/* Connected Ecosystem Ribbon */}
              <div className="bg-surface-subtle border border-border/70 rounded-2xl p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest">
                    Connected Hiring-to-Employee Lifecycle
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    Selection → Onboarding → Employee Management → Attendance → Leave → Payroll → Performance → Training → Help Desk → Exit
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-secondary flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Recruitment-to-HRMS Direct Bridge</span>
                </div>
              </div>

              {/* HRMS Features Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {hrmsCapabilities.map((feat) => (
                  <div
                    key={feat.name}
                    className="p-4 rounded-2xl bg-surface-subtle/50 border border-border/60 hover:border-secondary/40 hover:bg-card transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                        {feat.category}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary opacity-60 group-hover:opacity-100" />
                    </div>
                    <div className="font-semibold text-sm text-foreground group-hover:text-secondary transition-colors">
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
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Implementation</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-white mb-4">
                How We Set Up{' '}
                <span className="gradient-text-coral">Your HR Ops</span>
              </h2>
              <p className="text-white/60 text-lg">A 6-phase implementation designed to minimise disruption and maximise adoption.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step, i) => {
                const IconComp = step.icon;
                return (
                  <div key={step.num} className="glass-card rounded-2xl p-6 hover-lift group" style={{ transitionDelay: `${i * 0.06}s` }}>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl font-display font-bold text-white/70 leading-none">{step.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="w-8 h-0.5 bg-secondary mb-4 transition-all duration-300 group-hover:w-16" />
                    <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <div className="text-xs text-white/60 font-medium border-t border-white/20 pt-3">{step.detail}</div>
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
              Let Us Handle{' '}
              <span className="gradient-text-coral">Your HR Ops</span>
            </h2>
            <p className="text-white/70 text-lg mb-10">From payroll to performance — we manage it all so you can focus on growth.</p>
            <div className="flex justify-center">
              <Link href="/#contact" className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm">
                Talk to an HR Expert
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
