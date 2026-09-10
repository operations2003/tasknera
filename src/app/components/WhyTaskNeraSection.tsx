'use client';
import React from 'react';
import {
  MessagesSquare,
  Eye,
  TrendingUp,
  Cpu,
  HeartHandshake,
} from 'lucide-react';

const comparison = [
  {
    attribute: 'Hiring & Delivery Speed',
    traditional: 'Weeks to months of delay',
    tasknera: 'Agile sourcing, rapid shortlisting & structured delivery',
  },
  {
    attribute: 'Approach',
    traditional: 'Generalist, transaction-only resume pushing',
    tasknera: 'Consultative, domain-specific, and aligned to business goals',
  },
  {
    attribute: 'Visibility & Governance',
    traditional: 'Low — black box process without SLA reporting',
    tasknera: 'Transparent reporting, regular scorecards & live dashboards',
  },
  {
    attribute: 'Sourcing Capability',
    traditional: 'Local or single-channel job board posting',
    tasknera: 'Cross-border multi-channel sourcing + JD Match Evaluator',
  },
  {
    attribute: 'Operational Accountability',
    traditional: 'Rotational contact / no dedicated oversight',
    tasknera: 'Dedicated Account Director & continuous supervisory QA',
  },
  {
    attribute: 'Scope of Solutions',
    traditional: 'Fragmented recruitment agency or standalone BPO',
    tasknera: 'Integrated HR, Talent, Workforce, VA & Customer Support',
  },
];

const valueProps = [
  {
    icon: MessagesSquare,
    title: 'Consultative',
    desc: 'We analyze your operational bottlenecks and business context before designing custom workforce solutions.',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
  },
  {
    icon: Eye,
    title: 'Transparent',
    desc: 'Clear SLAs, milestone pricing, scorecard reviews, and complete visibility across all active pods.',
    color: 'text-secondary',
    bg: 'bg-secondary/10 border-secondary/20',
  },
  {
    icon: TrendingUp,
    title: 'Scalable',
    desc: 'From a single critical hire to 50+ deployed support specialists — our modular pods scale on demand.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Cpu,
    title: 'Technology-Enabled',
    desc: 'JD Match Evaluator scoring, modern HRMS integration, and workforce dashboards power every delivery.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: HeartHandshake,
    title: 'Human-Centered',
    desc: '100% vetted human professionals bringing empathy, critical thinking, and dedicated accountability.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
];

export default function WhyTaskNeraSection() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-bold text-secondary tracking-widest uppercase">Why TaskNera</span>
          </div>
          <h2 className="text-section-title font-display font-bold text-foreground mb-4">
            Not Just a Vendor.{' '}
            <span className="gradient-text-teal">Your Strategic Partner.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Five core principles that define our methodology, service delivery, and lasting client relationships.
          </p>
        </div>

        {/* 5 Value props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {valueProps.map((vp, idx) => {
            const IconComp = vp.icon;
            return (
              <div
                key={vp.title}
                className="card-premium rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:border-accent/40 transition-colors"
                style={{ transitionDelay: `${idx * 0.03}s` }}
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-4 ${vp.bg} ${vp.color} shadow-sm group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base mb-1.5">{vp.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{vp.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-muted border-b border-border">
              <div className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Criteria</div>
              <div className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest border-l border-border">
                Traditional Staffing &amp; BPO
              </div>
              <div className="px-6 py-4 border-l border-border bg-accent/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">The TaskNera Way</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.attribute}
                className={`grid grid-cols-3 border-b border-border last:border-0 ${
                  i % 2 === 0 ? 'bg-card' : 'bg-muted/30'
                }`}
              >
                <div className="px-6 py-4 text-xs sm:text-sm font-bold text-foreground flex items-center">
                  {row.attribute}
                </div>
                <div className="px-6 py-4 text-xs sm:text-sm text-muted-foreground border-l border-border flex items-start gap-2.5">
                  <span className="text-red-500 font-bold text-xs mt-0.5">✕</span>
                  <span>{row.traditional}</span>
                </div>
                <div className="px-6 py-4 text-xs sm:text-sm text-foreground font-medium border-l border-border bg-accent/5 flex items-start gap-2.5">
                  <span className="text-accent font-bold text-xs mt-0.5">✓</span>
                  <span>{row.tasknera}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="mt-8 bg-primary rounded-3xl p-6 sm:p-8 text-white text-center shadow-lg border border-white/10">
            <p className="font-display text-lg sm:text-xl font-normal italic leading-relaxed max-w-2xl mx-auto text-white/90">
              "TaskNera was built to bridge the divide between high-touch people strategy and everyday operational execution under one accountable partner."
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-accent text-xs font-bold tracking-wider uppercase">
                Founded in 2026 · Led by Sheetal Bedi (8+ Years HR Strategy Experience)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}