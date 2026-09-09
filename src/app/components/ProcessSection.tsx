'use client';
import React from 'react';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We understand your business, workforce and operational requirements.',
    icon: '🧭',
    applicable: 'HR • Talent • Workforce • VA • VCS',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We create the right solution, team structure and engagement model.',
    icon: '📐',
    applicable: 'Custom scope & transparent SLAs',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We identify and deploy the right people, processes and technology.',
    icon: '🚀',
    applicable: 'Vetted talent & digital setup',
  },
  {
    num: '04',
    title: 'Operate',
    desc: 'Our team manages the agreed functions and workflows.',
    icon: '⚙️',
    applicable: 'Day-to-day flawless execution',
  },
  {
    num: '05',
    title: 'Measure',
    desc: 'You receive reporting, performance tracking and regular reviews.',
    icon: '📊',
    applicable: 'Real-time metrics & QA reviews',
  },
  {
    num: '06',
    title: 'Scale',
    desc: 'As your business grows, we expand the solution with you.',
    icon: '📈',
    applicable: 'Seamless capacity expansion',
  },
];

const techCapabilities = [
  'JD Match Evaluator',
  'HRMS',
  'HR Portals',
  'CRM',
  'AI-Assisted Sourcing',
  'Recruitment Analytics',
  'Workforce Dashboards',
  'Digital Workflows',
  'Reporting & MIS',
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-primary overflow-hidden text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-white/85 tracking-widest uppercase">
              Our Methodology
            </span>
          </div>

          <h2 className="text-section-title font-display font-700 text-white mb-4">
            How TaskNera{' '}
            <span className="gradient-text-coral">Works</span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            A unified operational lifecycle designed to deliver consistent excellence across HR, Talent, Workforce, Virtual Assistant, and Customer Support engagements.
          </p>
        </div>

        {/* 6 Steps Grid (Requirement 9) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="glass-card rounded-3xl p-6 sm:p-7 hover-lift group border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl font-display font-900 text-white/80 leading-none">
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>

                <div className="w-8 h-0.5 bg-accent mb-4 transition-all duration-300 group-hover:w-16" />

                <h3 className="font-display font-700 text-white text-xl mb-2">
                  {step.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-white/45 font-medium tracking-wide">
                {step.applicable}
              </div>
            </div>
          ))}
        </div>

        {/* ================================================== */}
        {/* 10. TECHNOLOGY-ENABLED DELIVERY (Requirement 10)  */}
        {/* ================================================== */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-3.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                    Delivery Architecture
                  </span>
                </div>

                <h3 className="font-display font-700 text-2xl sm:text-3xl text-white">
                  Technology Meets Human Expertise
                </h3>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  TaskNera combines experienced professionals with modern HR and workforce technology to deliver faster, more transparent and scalable solutions.
                </p>

                <p className="text-white/55 text-xs sm:text-sm leading-relaxed">
                  We don't replace people with bots; we empower vetted human teams with specialized tools like our JD Match Evaluator, real-time analytics, and automated workflows to guarantee quality at every stage.
                </p>

                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-2.5 rounded-full text-xs hover:brightness-110 transition-all shadow-md shadow-accent/20"
                  >
                    Discuss Your Operational Model
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">
                    Enabled Capabilities:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {techCapabilities.map((cap) => (
                      <div
                        key={cap}
                        className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-3 text-center transition-colors"
                      >
                        <div className="text-accent text-sm mb-1">✦</div>
                        <div className="text-xs font-medium text-white leading-tight">
                          {cap}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}