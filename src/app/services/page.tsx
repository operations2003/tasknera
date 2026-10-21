'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/app/components/ServicesSection';
import PlatformSection from '@/app/components/PlatformSection';
import {
  Layers,
  Building2,
  Target,
  Users,
  Briefcase,
  Headphones,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  Zap,
  Cpu,
  FileCheck2,
  PhoneCall,
  UserCheck,
  BarChart3,
  CalendarCheck2,
} from 'lucide-react';

const solutionPillars = [
  {
    id: 'hr-ops',
    title: 'HR & People Operations',
    badge: 'Core Operational HR',
    icon: Building2,
    tagline: 'End-to-end compliant HR operations, payroll processing, and employee lifecycle management.',
    accent: 'border-amber-500/30',
    headerBg: 'bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent',
    teamComposition: 'Dedicated HR Business Partner (HRBP) + Certified Payroll & Statutory Compliance Lead',
    sla: '100% on-time payroll run & 24h statutory compliance turnarounds',
    capabilities: [
      {
        title: 'Payroll & Statutory Compliance',
        desc: 'Monthly payroll calculation, tax deductions, PF, ESIC, Professional Tax, and all state & federal statutory filings with strict audit readiness.',
      },
      {
        title: 'Employee Lifecycle Administration',
        desc: 'Structured employee onboarding, credential verification, documentation playbooks, confirmation cycles, performance reviews, and clearance SOPs.',
      },
      {
        title: 'HRMS Implementation & Portals',
        desc: 'Setup and day-to-day administration of modern HRMS platforms, self-service employee portals, attendance tracking, and leave policies.',
      },
      {
        title: 'Workplace Policies & Governance',
        desc: 'Drafting compliant employee handbooks, anti-harassment policies (POSH/EEO), grievance redressal protocols, and code of conduct manuals.',
      },
    ],
    deliverables: [
      'Zero-error monthly payroll execution',
      'Timely statutory challan receipts & filings',
      'Self-service employee helpdesk portal',
      'Standardized offer-to-onboard pipeline',
    ],
  },
  {
    id: 'talent-acquisition',
    title: 'Talent & Recruitment',
    badge: 'Precision Hiring',
    icon: Target,
    tagline: 'Specialized hiring across permanent, executive, contract, and high-volume mandates.',
    accent: 'border-[#F49A7D]/40',
    headerBg: 'bg-gradient-to-r from-[#F49A7D]/15 via-[#F49A7D]/5 to-transparent',
    teamComposition: 'Domain-Specialist Recruiters + Sourcing Analysts + HireIQ™ AI Screening Engine',
    sla: '48–72 hours to first calibrated candidate shortlist',
    capabilities: [
      {
        title: 'Specialized Permanent Hiring',
        desc: 'Full-cycle competency sourcing for technology, finance, operations, product, and leadership roles aligned with long-term retention goals.',
      },
      {
        title: 'Executive Search & Leadership',
        desc: 'Confidential executive recruitment for founders, VP-level leaders, and department heads with rigorous candidate background due diligence.',
      },
      {
        title: 'High-Volume Hiring Campaigns',
        desc: 'Turnkey recruitment campaigns for rapid seasonal or regional scale, hiring 10 to 100+ qualified candidates within strict turnaround deadlines.',
      },
      {
        title: 'Dedicated RPO Desks',
        desc: 'An embedded recruiter pod integrated into your internal ATS, Slack, and interview pipelines acting as your in-house talent acquisition team.',
      },
    ],
    deliverables: [
      'Proprietary JD Match Evaluator scoring for every CV',
      'Comprehensive candidate screening dossier',
      'Contractual replacement guarantee',
      'End-to-end interview scheduling & offer closure',
    ],
  },
  {
    id: 'workforce-solutions',
    title: 'Scalable Workforce Solutions',
    badge: 'Elastic Capacity',
    icon: Users,
    tagline: 'Agile contract staffing and turnkey multi-location workforce deployment models.',
    accent: 'border-blue-500/30',
    headerBg: 'bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent',
    teamComposition: 'Operations Project Manager + On-Site / Remote Shift Supervisors + Deployed Staff',
    sla: 'Rapid workforce mobilization within 5 to 7 business days',
    capabilities: [
      {
        title: 'Contract Staffing Pods',
        desc: 'Pre-screened, contract-ready professionals deployed across technical, administrative, and frontline operational roles without long-term overhead.',
      },
      {
        title: 'Seasonal & Surge Headcount',
        desc: 'Elastic scaling for seasonal peaks, customer support surges, product launches, or project-based operational capacity expansions.',
      },
      {
        title: 'Turnkey Multi-Location Ops',
        desc: 'Coordinated workforce management across distributed branch networks, regional fulfilment hubs, or remote digital environments.',
      },
      {
        title: 'Full Co-Employment Compliance',
        desc: 'TaskNera manages all employment contracts, statutory benefits, insurance, and payroll, keeping your core entity entirely insulated.',
      },
    ],
    deliverables: [
      'Daily attendance logs & shift scheduling',
      'Bi-weekly workforce capacity reports',
      'Zero liability contract staffing agreements',
      'Continuous performance monitoring & QA',
    ],
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Services',
    badge: 'Human Remote Talent',
    icon: Briefcase,
    tagline: '100% vetted human remote professionals managing executive, administrative, and operations workflows.',
    accent: 'border-emerald-500/30',
    headerBg: 'bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent',
    teamComposition: 'Dedicated Human Virtual Assistant + Operations Team Lead for QA oversight',
    sla: 'Dedicated 40 hours/week · Overlapping timezone communication',
    capabilities: [
      {
        title: 'Executive C-Suite Assistance',
        desc: 'High-touch calendar coordination, email triage, executive travel arrangements, board prep materials, and daily agenda management.',
      },
      {
        title: 'CRM Hygiene & Pipeline Admin',
        desc: 'Real-time database cleanup, contact deduplication, deal stage updates, meeting note logging, and sales pipeline dashboard hygiene.',
      },
      {
        title: 'Market Research & Data Operations',
        desc: 'Lead prospecting list generation, competitor tracking dossiers, pricing comparisons, and accurate data entry across spreadsheet workflows.',
      },
      {
        title: 'Administrative SOP Execution',
        desc: 'Vendor coordination, expense report collation, invoicing follow-ups, and recurring operational tasks run strictly to your SOPs.',
      },
    ],
    deliverables: [
      'Pre-vetted university-educated professionals',
      'Daily asynchronous status reporting',
      'Strict NDA & data segregation protocols',
      'Fast talent reassignment if workflow requirements shift',
    ],
  },
  {
    id: 'customer-support',
    title: 'Virtual Customer Support (VCS)',
    badge: 'Omnichannel Care Desk',
    icon: Headphones,
    tagline: 'Dedicated omnichannel customer support desks delivering seamless customer retention at scale.',
    accent: 'border-purple-500/30',
    headerBg: 'bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent',
    teamComposition: 'Trained Customer Experience Agents + Quality Assurance Lead + Pod Supervisor',
    sla: 'Sub-60s live chat response · 98%+ CSAT satisfaction benchmarks',
    capabilities: [
      {
        title: 'Inbound & Outbound Voice Support',
        desc: 'Professional telephone desks handling customer inquiries, order tracking, product troubleshooting, and warm outbound callbacks.',
      },
      {
        title: 'Live Chat & Instant Messaging',
        desc: 'Real-time website chat, Intercom/Zendesk monitoring, and WhatsApp for Business desks providing immediate resolution.',
      },
      {
        title: 'Email Helpdesk & Ticket Escalations',
        desc: 'Categorization, priority tagging, macro drafting, and tier-1/tier-2 ticket resolution with strict SLA-backed turnaround times.',
      },
      {
        title: 'Social Care & Review Monitoring',
        desc: 'Proactive engagement across Google Reviews, Instagram, LinkedIn, and Twitter customer mentions to protect brand sentiment.',
      },
    ],
    deliverables: [
      'Omnichannel ticket dashboard integration',
      'Weekly CSAT & FCR (First Contact Resolution) scorecards',
      '24/7 or custom coverage window availability',
      'Standardized customer communication playbook',
    ],
  },
];

const quickNavItems = [
  { label: '01. HR Operations', href: '#hr-ops' },
  { label: '02. Talent & Recruitment', href: '#talent-acquisition' },
  { label: '03. Workforce Solutions', href: '#workforce-solutions' },
  { label: '04. Virtual Assistant', href: '#virtual-assistant' },
  { label: '05. Customer Support', href: '#customer-support' },
  { label: '06. Platform & HireIQ™', href: '#platform' },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* ── Page Hero ── */}
        <section className="bg-section-dark text-white py-20 sm:py-28 relative overflow-hidden border-b border-white/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Comprehensive Solutions Hub
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                All-in-One Operations &amp;{' '}
                <span className="gradient-text-coral">Workforce Solutions</span>
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                TaskNera unifies HR operations, talent acquisition, flexible workforce pods, virtual assistants, and omnichannel customer support under one accountable partner — integrated with our proprietary HireIQ™ &amp; HRMS platform.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm flex items-center gap-2"
                >
                  <span>Build Your Tailored Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#platform"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
                >
                  Explore Technology Platform ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sticky In-Page Jump Navigation ── */}
        <nav aria-label="Solutions Quick Navigation" className="sticky top-16 sm:top-20 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-3 no-scrollbar text-xs font-semibold">
              <span className="text-muted-foreground uppercase tracking-wider text-[11px] font-bold flex-shrink-0 pr-2 border-r border-border">
                Quick Jump:
              </span>
              {quickNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full bg-muted/60 hover:bg-accent/10 hover:text-accent border border-border/80 transition-colors flex-shrink-0 text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ── Interactive Showcase Section ── */}
        <ServicesSection />

        {/* ── Comprehensive 5 Pillars Deep-Dive ── */}
        <section className="py-20 bg-surface-subtle border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                Structured Operational Deliverables
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Detailed Scope for Every Business Need
              </h2>
              <p className="text-muted-foreground text-base mt-2">
                Review the exact capabilities, team structures, and guaranteed SLAs deployed with each TaskNera operational pillar.
              </p>
            </div>

            <div className="space-y-16">
              {solutionPillars.map((pillar, index) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    id={pillar.id}
                    className="scroll-mt-36 bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-sm transition-all hover:border-accent/40"
                  >
                    {/* Header Strip */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
                      <div className="flex items-start sm:items-center gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                          <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-accent tracking-wider uppercase">
                              PILLAR 0{index + 1}
                            </span>
                            <span className="text-muted-foreground text-xs">&middot;</span>
                            <span className="text-[11px] font-semibold text-foreground/80 bg-muted px-2 py-0.5 rounded-md">
                              {pillar.badge}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <Link
                        href="/#contact"
                        className="self-start lg:self-auto bg-accent text-accent-foreground font-bold px-6 py-2.5 rounded-full text-xs hover:brightness-110 transition-all shadow-md shadow-accent/20 flex items-center gap-2"
                      >
                        <span>Inquire This Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                      {pillar.tagline}
                    </p>

                    {/* Operational Metrics Bar */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8 bg-muted/40 border border-border/60 rounded-2xl p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-accent flex-shrink-0" />
                        <div>
                          <div className="text-[11px] uppercase font-bold text-muted-foreground tracking-wider">
                            Team Composition
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-foreground">
                            {pillar.teamComposition}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                        <div>
                          <div className="text-[11px] uppercase font-bold text-muted-foreground tracking-wider">
                            Guaranteed SLA
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-foreground">
                            {pillar.sla}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4 Specialized Capabilities Grid */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                        Core Capabilities Included
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {pillar.capabilities.map((cap) => (
                          <div
                            key={cap.title}
                            className="bg-card border border-border/70 rounded-2xl p-5 hover:border-accent/30 transition-colors"
                          >
                            <div className="flex items-center gap-2 mb-2 font-display font-bold text-foreground text-sm sm:text-base">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <h5>{cap.title}</h5>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              {cap.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Deliverables Checkpoints */}
                    <div className="pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>Deliverables:</span>
                        </span>
                        {pillar.deliverables.map((deliv) => (
                          <span
                            key={deliv}
                            className="text-xs font-medium text-foreground/80 bg-muted px-3 py-1 rounded-full border border-border"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>

                      <div className="text-xs text-muted-foreground font-semibold">
                        SLA Guaranteed &middot; Direct Oversight
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── Proprietary Technology Platform Ecosystem ── */}
        <PlatformSection />

        {/* ── Bottom Call to Action ── */}
        <section className="py-20 sm:py-28 bg-section-dark text-white text-center relative overflow-hidden border-t border-white/10">
          <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Need a Custom Multi-Pillar Scope?
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed">
              We frequently bundle Recruitment, HR operations, and Virtual Customer Support into a single SLA-governed master services agreement.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all text-sm shadow-xl shadow-accent/25"
              >
                Schedule Solutions Intake Consultation
              </Link>
              <Link
                href="/pricing"
                className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
              >
                Review Engagement Models
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
