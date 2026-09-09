'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';

const comparison = [
  {
    attribute: 'Hiring Speed',
    traditional: 'Weeks to months',
    tasknera: '48hr screening, structured delivery',
  },
  {
    attribute: 'Approach',
    traditional: 'Generalist, volume-based',
    tasknera: 'Consultative, domain-specific',
  },
  {
    attribute: 'Visibility',
    traditional: 'Low — black box process',
    tasknera: 'Transparent reporting & dashboards',
  },
  {
    attribute: 'Sourcing',
    traditional: 'Local / single-channel',
    tasknera: 'Global multi-channel + AI-assisted',
  },
  {
    attribute: 'Account Management',
    traditional: 'Rotational / no dedicated contact',
    tasknera: 'Dedicated account manager',
  },
  {
    attribute: 'HR Coverage',
    traditional: 'Recruitment only',
    tasknera: 'Payroll, compliance, onboarding & more',
  },
];

const valueProps = [
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Consultative',
    desc: 'We understand your business context before recommending solutions.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: 'CpuChipIcon',
    title: 'Technology-Driven',
    desc: 'JD Match Evaluator, AI sourcing, and pipeline dashboards power every engagement.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: 'ArrowTrendingUpIcon',
    title: 'Scalable',
    desc: 'From one hire to 500 — our models scale with your ambitions.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: 'BoltIcon',
    title: 'Fast & Reliable',
    desc: 'Structured SLAs, weekly reporting, and zero ghosting.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
];

export default function WhyTaskNeraSection() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase">Why TaskNera</span>
          </div>
          <h2 className="text-section-title font-display font-700 text-foreground mb-4">
            Not Just a Vendor{' '}
            <span className="gradient-text-teal">A Strategic Partner</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See the difference between traditional recruitment and the TaskNera way.
          </p>
        </div>

        {/* Value props */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {valueProps.map((vp) => (
            <div key={vp.title} className="spotlight-card hover-lift bg-card border border-border rounded-2xl p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-xl ${vp.bg} flex items-center justify-center mb-4`}>
                <Icon name={vp.icon as 'BoltIcon'} size={18} className={vp.color} variant="outline" />
              </div>
              <div className="font-semibold text-foreground text-sm mb-1">{vp.title}</div>
              <div className="text-muted-foreground text-sm leading-relaxed">{vp.desc}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-muted border-b border-border">
              <div className="px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">Criteria</div>
              <div className="px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest border-l border-border">
                Traditional Recruitment
              </div>
              <div className="px-5 py-4 border-l border-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest">The TaskNera Way</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.attribute}
                className={`grid grid-cols-3 border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-card' : 'bg-muted/40'
                  }`}
              >
                <div className="px-5 py-4 text-sm font-semibold text-foreground">{row.attribute}</div>
                <div className="px-5 py-4 text-sm text-muted-foreground border-l border-border flex items-start gap-2">
                  <span className="comparison-cross text-xs mt-0.5">✗</span>
                  {row.traditional}
                </div>
                <div className="px-5 py-4 text-sm text-foreground border-l border-border flex items-start gap-2">
                  <span className="comparison-check text-xs mt-0.5">✓</span>
                  {row.tasknera}
                </div>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="mt-8 bg-primary rounded-2xl p-6 sm:p-8 text-white text-center">
            <p className="font-display text-xl sm:text-2xl font-400 italic leading-relaxed">
              "A strategic partner for recruitment, workforce management, and HR not just a vendor."
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-white/40 text-sm">— Sheetal Bedi, CEO & Founder, TaskNera</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}