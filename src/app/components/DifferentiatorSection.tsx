'use client';
import React from 'react';
import Link from 'next/link';

const examples = [
  {
    need: 'Need one hire?',
    help: 'We can help.',
    desc: 'Specialized permanent hiring with domain-focused recruitment experts.',
    icon: '🎯',
    badge: 'Talent & Recruitment',
  },
  {
    need: 'Need 50 employees?',
    help: 'We can help.',
    desc: 'Volume hiring, rapid contract staffing campaigns, and scalable deployment.',
    icon: '👥',
    badge: 'Workforce Scale',
  },
  {
    need: 'Need an HR operations team?',
    help: 'We can help.',
    desc: 'End-to-end HRMS management, payroll, compliance, and lifecycle administration.',
    icon: '⚙️',
    badge: 'HR & People Ops',
  },
  {
    need: 'Need virtual assistants?',
    help: 'We can help.',
    desc: 'Human remote professionals for administrative, executive, CRM, and research tasks.',
    icon: '💼',
    badge: 'Virtual Assistance',
  },
  {
    need: 'Need customer support agents?',
    help: 'We can help.',
    desc: 'Omnichannel virtual customer support across voice, chat, email, and social media.',
    icon: '🎧',
    badge: 'Customer Support (VCS)',
  },
  {
    need: 'Need an end-to-end workforce solution?',
    help: 'We can help.',
    desc: 'Fully managed talent acquisition, employee ops, and operations under one partner.',
    icon: '🌐',
    badge: 'Comprehensive Partner',
  },
];

export default function DifferentiatorSection() {
  return (
    <section className="py-20 sm:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase">
              The TaskNera Difference
            </span>
          </div>

          <h2 className="text-section-title font-display font-700 text-foreground mb-6 leading-tight">
            Not Just a Recruitment Agency.{' '}
            <span className="block text-muted-foreground font-light text-2xl sm:text-3xl mt-1">
              Not Just an Outsourcing Provider.
            </span>
            <span className="gradient-text-teal block mt-1">
              Your Extended Business Partner.
            </span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            TaskNera brings HR, recruitment, workforce management and business support together under one partner — giving organizations the flexibility to outsource one function, multiple functions or their people and support operations.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {examples.map((item, idx) => (
            <div
              key={item.need}
              className="spotlight-card hover-lift bg-card border border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm group hover:border-accent/40 transition-all duration-300"
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[11px] font-semibold text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-0.5">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-display font-700 text-foreground text-lg mb-1">
                  {item.need}
                </h3>
                <div className="text-accent font-semibold text-base mb-2">
                  {item.help}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium">Tailored engagement</span>
                <Link
                  href="/#contact"
                  className="text-xs font-semibold text-foreground group-hover:text-accent flex items-center gap-1 transition-colors"
                >
                  Discuss requirement
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Banner */}
        <div className="bg-primary rounded-3xl p-6 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="space-y-2 text-center sm:text-left">
            <div className="text-xs font-semibold text-accent uppercase tracking-widest">
              Flexible &amp; Modular
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-bold">
              Outsource one function, multiple functions, or your entire operations.
            </h4>
            <p className="text-white/60 text-sm max-w-xl">
              From an on-demand virtual assistant to complete HR outsourcing and high-volume workforce staffing, TaskNera adapts around your needs.
            </p>
          </div>
          <Link
            href="/#contact"
            className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/25 flex-shrink-0 text-sm"
          >
            Talk to an Expert
          </Link>
        </div>

      </div>
    </section>
  );
}
