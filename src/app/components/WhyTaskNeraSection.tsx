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
  },
  {
    icon: Eye,
    title: 'Transparent',
    desc: 'Clear SLAs, milestone pricing, scorecard reviews, and complete visibility across all active pods.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable',
    desc: 'From a single critical hire to 50+ deployed support specialists — our modular pods scale on demand.',
  },
  {
    icon: Cpu,
    title: 'Technology-Enabled',
    desc: 'JD Match Evaluator scoring, modern HRMS integration, and workforce dashboards power every delivery.',
  },
  {
    icon: HeartHandshake,
    title: 'Human-Centered',
    desc: '100% vetted human professionals bringing empathy, critical thinking, and dedicated accountability.',
  },
];

export default function WhyTaskNeraSection() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-white border-b border-tn-mist relative overflow-hidden">
      {/* Ambient background light pools */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-[500px] h-[300px] bg-tn-beige/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-mist rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-tn-coral" />
            <span className="text-xs font-bold text-tn-charcoal tracking-widest uppercase">Why TaskNera</span>
          </div>
          <h2 className="text-section-title font-display font-bold text-tn-charcoal mb-4">
            Not Just a Vendor.{' '}
            <span className="text-tn-coral">Your Strategic Partner.</span>
          </h2>
          <p className="text-tn-slate text-base sm:text-lg leading-relaxed">
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
                className="rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:border-tn-coral transition-colors bg-white border border-tn-mist hover:shadow-lg"
                style={{ transitionDelay: `${idx * 0.03}s` }}
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl border border-tn-mist flex items-center justify-center mb-4 bg-tn-ivory text-tn-charcoal shadow-sm group-hover:bg-tn-coral group-hover:border-tn-coral transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-tn-charcoal text-base mb-1.5">{vp.title}</h3>
                  <p className="text-tn-slate text-xs sm:text-sm leading-relaxed">{vp.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="bg-white border border-tn-mist rounded-3xl overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-tn-ivory border-b border-tn-mist">
              <div className="px-6 py-4 text-xs font-bold text-tn-slate uppercase tracking-widest">Criteria</div>
              <div className="px-6 py-4 text-xs font-bold text-tn-slate uppercase tracking-widest border-l border-tn-mist">
                Traditional Staffing &amp; BPO
              </div>
              <div className="px-6 py-4 border-l border-tn-mist bg-tn-coral/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tn-coral animate-pulse" />
                  <span className="text-xs font-bold text-tn-charcoal uppercase tracking-widest">The TaskNera Way</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.attribute}
                className={`grid grid-cols-3 border-b border-tn-mist last:border-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-tn-ivory/40'
                }`}
              >
                <div className="px-6 py-4 text-xs sm:text-sm font-bold text-tn-charcoal flex items-center">
                  {row.attribute}
                </div>
                <div className="px-6 py-4 text-xs sm:text-sm text-tn-slate border-l border-tn-mist flex items-start gap-2.5">
                  <span className="text-red-500 font-bold text-xs mt-0.5">✕</span>
                  <span>{row.traditional}</span>
                </div>
                <div className="px-6 py-4 text-xs sm:text-sm text-tn-charcoal font-semibold border-l border-tn-mist bg-tn-coral/5 flex items-start gap-2.5">
                  <span className="text-tn-coral font-bold text-xs mt-0.5">✓</span>
                  <span>{row.tasknera}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pull quote (Charcoal Anchor Background) */}
          <div className="mt-8 bg-[#242326] rounded-3xl p-6 sm:p-8 text-[#FFF8F0] text-center shadow-2xl border border-tn-mist/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p className="font-display text-lg sm:text-xl font-normal italic leading-relaxed max-w-2xl mx-auto text-[#FFF8F0]">
                &ldquo;TaskNera was built to bridge the divide between high-touch people strategy and everyday operational execution under one accountable partner.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-tn-coral text-xs font-bold tracking-wider uppercase">
                  Founded in 2026 · Led by Sheetal Bedi (8+ Years HR Strategy Experience)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}