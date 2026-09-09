'use client';
import React from 'react';
import Link from 'next/link';

const categories = [
  {
    title: 'People',
    icon: '👥',
    desc: 'HR operations, recruitment, onboarding and employee management.',
    tags: ['HR Operations', 'Onboarding', 'Lifecycle Management', 'Employee Engagement'],
    href: '/hr-workforce-solutions',
    color: 'border-secondary/30',
  },
  {
    title: 'Workforce',
    icon: '🏗️',
    desc: 'Contract staffing, temporary workforce, deployment and workforce management.',
    tags: ['Contract Staffing', 'Temporary Deployment', 'Workforce Planning', 'Scale On-Demand'],
    href: '/hr-workforce-solutions#workforce',
    color: 'border-primary/20',
  },
  {
    title: 'Administration',
    icon: '📂',
    desc: 'Data entry, documentation, scheduling, CRM and administrative support.',
    tags: ['Calendar & Scheduling', 'Executive Support', 'Data Hygiene', 'Spreadsheets'],
    href: '/virtual-assistant-services',
    color: 'border-accent/30',
  },
  {
    title: 'Customer Support (VCS)',
    icon: '🎧',
    desc: 'Voice, chat, email, social media and ticket support.',
    tags: ['Omnichannel Support', 'Voice Desk', 'Helpdesk Tickets', 'WhatsApp Handling'],
    href: '/virtual-customer-support',
    color: 'border-accent/30',
  },
  {
    title: 'Sales Support',
    icon: '📊',
    desc: 'Lead research, CRM management, appointment setting and follow-ups.',
    tags: ['Lead Enrichment', 'CRM Pipeline Updates', 'Meeting Scheduling', 'Follow-up Cadences'],
    href: '/virtual-assistant-services',
    color: 'border-secondary/30',
  },
  {
    title: 'Recruitment',
    icon: '🎯',
    desc: 'Sourcing, screening, interview coordination and RPO.',
    tags: ['Sourcing', 'Screening', 'Interview Scheduling', 'RPO Desks'],
    href: '/talent-acquisition',
    color: 'border-primary/20',
  },
  {
    title: 'Back Office',
    icon: '📑',
    desc: 'Documentation, processing, reporting and operational support.',
    tags: ['Document Review', 'Transaction Processing', 'MIS Reporting', 'Workflow Verification'],
    href: '/virtual-assistant-services',
    color: 'border-secondary/30',
  },
  {
    title: 'Technology',
    icon: '💻',
    desc: 'JD Match Evaluator, HRMS, HR portals, dashboards and digital HR processes.',
    tags: ['JD Match Evaluator', 'HRMS Portals', 'Real-Time Dashboards', 'Workflow Automation'],
    href: '/#technology',
    color: 'border-accent/30',
  },
];

export default function TakeOffPlateSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">
              Breadth of Support
            </span>
          </div>

          <h2 className="text-section-title font-display font-700 text-foreground mb-4">
            What Can TaskNera Take{' '}
            <span className="gradient-text-teal">Off Your Plate?</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Stop losing valuable leadership time to administrative drag and operational overhead. Delegate specialized functions to our integrated teams.
          </p>
        </div>

        {/* 8 Functional Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`spotlight-card hover-lift bg-card border rounded-2xl p-6 shadow-sm flex flex-col justify-between ${cat.color} group`}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                    Functional Area
                  </span>
                </div>

                <h3 className="font-display font-700 text-foreground text-lg mb-2 group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium bg-muted text-foreground/75 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
                <Link
                  href={cat.href}
                  className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                >
                  <span>Explore service</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/#contact"
                  className="text-[11px] text-muted-foreground hover:text-foreground font-medium"
                >
                  Delegate this
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-2xl px-6 py-4 shadow-sm">
            <span className="text-sm font-medium text-foreground">
              Have a custom workflow or blended operations requirement?
            </span>
            <Link
              href="/#contact"
              className="bg-accent text-accent-foreground font-semibold px-5 py-2 rounded-full text-xs hover:brightness-110 transition-all shadow-sm"
            >
              Talk to an Operations Specialist
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
