'use client';
import React from 'react';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  FileSpreadsheet,
  Headphones,
  LineChart,
  Target,
  FolderCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const categories = [
  {
    title: 'People Operations',
    icon: Users,
    desc: 'HR operations, compliant onboarding, payroll execution, and employee lifecycle management.',
    tags: ['HR Operations', 'Compliant Onboarding', 'Lifecycle Management', 'Employee Engagement'],
    href: '/hr-workforce-solutions',
    badge: 'HR Ops',
    color: 'border-secondary/30',
    iconBg: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    title: 'Workforce Deployment',
    icon: Briefcase,
    desc: 'Contract staffing, rapid temporary deployment, multi-location shift scheduling, and workforce planning.',
    tags: ['Contract Staffing', 'Seasonal Deployment', 'Workforce Planning', 'Scale On-Demand'],
    href: '/hr-workforce-solutions#workforce',
    badge: 'Staffing',
    color: 'border-blue-500/30',
    iconBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  {
    title: 'Business Administration',
    icon: FileSpreadsheet,
    desc: 'Data hygiene, digital file management, executive scheduling, CRM administration, and routine queries.',
    tags: ['Calendar & Scheduling', 'Executive Support', 'Data Cleansing', 'Spreadsheets'],
    href: '/virtual-assistant-services',
    badge: 'Virtual Support',
    color: 'border-amber-500/30',
    iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  },
  {
    title: 'Customer Support (VCS)',
    icon: Headphones,
    desc: 'Omnichannel voice desk, live chat, SLA-driven email ticketing, social media care, and WhatsApp support.',
    tags: ['Omnichannel Support', 'Voice Helpdesk', 'Ticketing SLAs', 'WhatsApp Handling'],
    href: '/virtual-customer-support',
    badge: 'Customer Care',
    color: 'border-teal-500/30',
    iconBg: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
  },
  {
    title: 'Sales & Growth Support',
    icon: LineChart,
    desc: 'Lead prospecting, CRM pipeline enrichment, meeting confirmation, and appointment setting.',
    tags: ['Lead Enrichment', 'CRM Hygiene', 'Meeting Scheduling', 'Outreach Cadences'],
    href: '/virtual-assistant-services',
    badge: 'Pipeline',
    color: 'border-orange-500/30',
    iconBg: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  },
  {
    title: 'Talent Acquisition',
    icon: Target,
    desc: 'Candidate sourcing, competency screening, technical assessment, interview coordination, and offer negotiation.',
    tags: ['Active Sourcing', 'Competency Screening', 'Interview Ops', 'RPO Desks'],
    href: '/talent-acquisition',
    badge: 'Recruiting',
    color: 'border-emerald-500/30',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  },
  {
    title: 'Back Office Operations',
    icon: FolderCheck,
    desc: 'Document verification, KYC auditing, order reconciliation, reporting, and operational task checklists.',
    tags: ['Document Review', 'Transaction Processing', 'MIS Reporting', 'Workflow Auditing'],
    href: '/virtual-assistant-services',
    badge: 'Back Office',
    color: 'border-purple-500/30',
    iconBg: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  },
  {
    title: 'Technology & Digitization',
    icon: Sparkles,
    desc: 'JD Match Evaluator candidate scoring, HRMS portals, real-time dashboards, and workflow automation.',
    tags: ['JD Match Evaluator', 'HRMS Portals', 'Real-Time Dashboards', 'Workflow Automation'],
    href: '/#technology',
    badge: 'Tech Layer',
    color: 'border-cyan-500/30',
    iconBg: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
  },
];

export default function TakeOffPlateSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              Breadth of Operational Scope
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-foreground mb-4">
            What Can TaskNera Take{' '}
            <span className="gradient-text-teal">Off Your Plate?</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Stop losing valuable leadership bandwidth to administrative drag and operational bottlenecks. Delegate specialized functions to our dedicated, SLA-backed teams.
          </p>
        </div>

        {/* 8 Functional Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {categories.map((cat, i) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.title}
                className="card-premium rounded-3xl p-6 flex flex-col justify-between group"
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${cat.iconBg} shadow-sm group-hover:scale-105 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full border border-border">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                    {cat.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium bg-muted text-foreground/80 px-2.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border flex items-center justify-between">
                  <Link
                    href={cat.href}
                    className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
                  >
                    <span>Explore scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-[11px] text-muted-foreground hover:text-foreground font-semibold"
                  >
                    Delegate this →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-3xl px-8 py-5 shadow-md">
            <span className="text-sm font-semibold text-foreground">
              Have a custom operational workflow or blended team requirement?
            </span>
            <Link
              href="/#contact"
              className="bg-accent text-accent-foreground font-bold px-6 py-2.5 rounded-full text-xs hover:brightness-110 transition-all shadow-md flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Talk to an Operations Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
