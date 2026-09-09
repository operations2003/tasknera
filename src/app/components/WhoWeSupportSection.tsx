'use client';
import React from 'react';
import Link from 'next/link';

const stages = [
  {
    stage: 'Startups',
    subtitle: 'Early-stage & Seed to Series A',
    icon: '🚀',
    desc: 'Build your team without building a large internal HR function.',
    benefits: [
      'Flexible hiring without heavy fixed overheads',
      'Instant HR processes, compliant offer letters & onboarding',
      'Virtual assistant support for founders & early leadership',
    ],
    color: 'border-accent/30',
    accent: 'text-accent',
  },
  {
    stage: 'SMEs',
    subtitle: 'Growing businesses & mid-market',
    icon: '📈',
    desc: 'Create structured HR and workforce processes as you grow.',
    benefits: [
      'Payroll & statutory compliance audit and execution',
      'Structured performance frameworks & HR portal setup',
      'Reliable customer support and back-office teams',
    ],
    color: 'border-secondary/30',
    accent: 'text-secondary',
  },
  {
    stage: 'Enterprises',
    subtitle: 'Large organizations & corporations',
    icon: '🏢',
    desc: 'Scale recruitment, workforce and support operations efficiently.',
    benefits: [
      'High-volume workforce deployment & contract staffing',
      'RPO and dedicated recruitment desks with strict SLAs',
      'Omnichannel virtual customer support (VCS) scaling',
    ],
    color: 'border-primary/25',
    accent: 'text-primary',
  },
  {
    stage: 'Global Companies',
    subtitle: 'Cross-border & distributed teams',
    icon: '🌍',
    desc: 'Build and manage distributed and remote teams.',
    benefits: [
      'Cross-border talent acquisition across global timezones',
      'Remote workforce compliance, documentation & support',
      'Transparent remote workplace policies and governance',
    ],
    color: 'border-accent/30',
    accent: 'text-accent',
  },
  {
    stage: 'High-Growth Businesses',
    subtitle: 'Scale-ups & rapid expansion phase',
    icon: '⚡',
    desc: 'Scale people and operations quickly during expansion.',
    benefits: [
      'Rapid ramp-up of engineering, sales, and operations headcount',
      'Fast-track candidate screening with JD Match Evaluator',
      'Modular business support to prevent operational bottlenecks',
    ],
    color: 'border-secondary/30',
    accent: 'text-secondary',
  },
];

export default function WhoWeSupportSection() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">
              Target Fit
            </span>
          </div>

          <h2 className="text-section-title font-display font-700 text-foreground mb-4">
            Built for Businesses at{' '}
            <span className="gradient-text-coral">Every Stage</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you are bootstrapping a new venture, managing rapid growth, or scaling enterprise business operations, TaskNera delivers the right people and support architecture.
          </p>
        </div>

        {/* 5 Stages Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {stages.map((st, idx) => (
            <div
              key={st.stage}
              className={`spotlight-card hover-lift bg-card border rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between ${st.color} ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{st.icon}</div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted rounded-full px-3 py-1">
                    {st.subtitle}
                  </span>
                </div>

                <h3 className="font-display font-700 text-foreground text-xl mb-2">
                  {st.stage}
                </h3>

                <p className="text-foreground/90 font-medium text-sm mb-5 leading-snug">
                  {st.desc}
                </p>

                <div className="space-y-2 pt-3 border-t border-border/60">
                  {st.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-accent mt-0.5 font-bold">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  href="/#contact"
                  className="text-xs font-semibold text-foreground hover:text-accent flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore engagement for {st.stage}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
