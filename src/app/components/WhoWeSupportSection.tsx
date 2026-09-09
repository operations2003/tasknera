'use client';
import React from 'react';
import Link from 'next/link';
import {
  Rocket,
  TrendingUp,
  Building,
  Globe2,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const stages = [
  {
    stage: 'Startups & Early Stage',
    subtitle: 'Pre-Seed to Series A',
    icon: Rocket,
    desc: 'Build your initial core team and establish HR infrastructure without high fixed overheads.',
    benefits: [
      'Contingent success-fee hiring for critical first hires',
      'Plug-and-play HR compliance, offer letters & onboarding',
      'Dedicated virtual assistants for founders & leadership',
    ],
    color: 'border-accent/30',
    iconBg: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    stage: 'Growing SMEs',
    subtitle: '15 to 250 Headcount',
    icon: TrendingUp,
    desc: 'Create structured people operations and reliable back-office support as you scale.',
    benefits: [
      'Full payroll & statutory compliance execution (PF, ESIC, TDS)',
      'Structured performance frameworks & employee portals',
      'Omnichannel virtual customer support pods & CRM management',
    ],
    color: 'border-secondary/30',
    iconBg: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    stage: 'Enterprises & Corporates',
    subtitle: '250+ Headcount',
    icon: Building,
    desc: 'Scale high-volume talent pipelines and distributed support operations with strict SLAs.',
    benefits: [
      'High-volume contract staffing and turnkey workforce deployment',
      'Dedicated RPO recruitment pods with guaranteed turnaround times',
      '24/7 omnichannel virtual customer support (VCS) scaling',
    ],
    color: 'border-blue-500/30',
    iconBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  {
    stage: 'Global Distributed Teams',
    subtitle: 'Cross-Border & Remote',
    icon: Globe2,
    desc: 'Source, hire, and manage cross-border professionals across global timezones.',
    benefits: [
      'International talent sourcing across India, US, UK, and Europe',
      'Remote workforce compliance, agreements & digital onboarding',
      'Strict remote workplace policies and data security standards',
    ],
    color: 'border-purple-500/30',
    iconBg: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  },
  {
    stage: 'High-Growth Scale-Ups',
    subtitle: 'Rapid Expansion Phase',
    icon: Zap,
    desc: 'Ramp headcount quickly and eliminate operational bottlenecks during expansion.',
    benefits: [
      'Fast-track candidate evaluation with JD Match Evaluator scoring',
      'Rapid ramp-up of engineering, sales, and operations capacity',
      'Agile modular support that scales smoothly as demand spikes',
    ],
    color: 'border-amber-500/30',
    iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  },
];

export default function WhoWeSupportSection() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              Target Organizational Fit
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-foreground mb-4">
            Built for Businesses at{' '}
            <span className="gradient-text-coral">Every Stage of Growth</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Whether you are bootstrapping a new venture, managing rapid team growth, or scaling enterprise business operations, TaskNera delivers the right people, structure, and operational support.
          </p>
        </div>

        {/* 5 Stages Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {stages.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div
                key={st.stage}
                className={`card-premium rounded-3xl p-7 sm:p-8 flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${st.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground bg-muted border border-border rounded-full px-3 py-1">
                      {st.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-xl mb-2 group-hover:text-accent transition-colors">
                    {st.stage}
                  </h3>

                  <p className="text-foreground/80 font-medium text-sm mb-6 leading-relaxed">
                    {st.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-border/70">
                    {st.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/70">
                  <Link
                    href="/#contact"
                    className="text-xs font-bold text-foreground group-hover:text-accent flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore engagement for {st.stage.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
