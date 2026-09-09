'use client';
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Requirement Briefing',
    desc: 'Deep-dive consultation to understand role, culture, and success criteria.',
    icon: '📋',
  },
  {
    num: '02',
    title: 'Sourcing & Mapping',
    desc: 'Multi-channel sourcing with AI-assisted candidate mapping.',
    icon: '🔍',
  },
  {
    num: '03',
    title: 'Screening & Shortlisting',
    desc: 'Structured screening against defined competencies and fit criteria.',
    icon: '✅',
  },
  {
    num: '04',
    title: 'Client Submission',
    desc: 'Curated shortlist with detailed candidate profiles and assessments.',
    icon: '📤',
  },
  {
    num: '05',
    title: 'Interview Coordination',
    desc: 'End-to-end scheduling, feedback loops, and candidate management.',
    icon: '🗓️',
  },
  {
    num: '06',
    title: 'Offer & Onboarding',
    desc: 'Offer negotiation support, documentation, and onboarding handoff.',
    icon: '🎉',
  },
];

const howWeWork = [
  {
    title: 'Consultative Partnership',
    desc: 'We learn your business before proposing solutions. Every engagement starts with listening.',
    color: 'border-accent',
  },
  {
    title: 'Technology-Driven Delivery',
    desc: 'ATS, AI sourcing, and digital pipelines accelerate time-to-hire without sacrificing quality.',
    color: 'border-secondary',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Weekly pipeline reports, SLA tracking, and real-time dashboards keep you in control.',
    color: 'border-accent',
  },
  {
    title: 'Dedicated Account Management',
    desc: 'One point of contact who knows your company, your culture, and your hiring needs.',
    color: 'border-secondary',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Our Process</span>
          </div>
          <h2 className="text-section-title font-display font-700 text-white mb-4">
            6-Step Recruitment{' '}
            <span className="gradient-text-coral">Excellence</span>
          </h2>
          <p className="text-white/60 text-lg">
            A structured, transparent process from brief to onboarding every time.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {steps?.map((step, i) => (
            <div
              key={step?.num}
              className="glass-card rounded-2xl p-6 hover-lift group"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Step number + icon */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl font-display font-900 text-white/70 leading-none">{step?.num}</span>
                <span className="text-2xl">{step?.icon}</span>
              </div>
              {/* Accent line */}
              <div className="w-8 h-0.5 bg-accent mb-4 transition-all duration-300 group-hover:w-16" />
              <h3 className="font-semibold text-white text-base mb-2">{step?.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{step?.desc}</p>
            </div>
          ))}
        </div>

        {/* How We Work */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <h3 className="font-display font-700 text-white text-2xl sm:text-3xl">How We Work</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {howWeWork?.map((item) => (
              <div
                key={item?.title}
                className={`glass-card rounded-2xl p-5 border-t-2 ${item?.color} hover-lift`}
              >
                <h4 className="font-semibold text-white text-sm mb-2">{item?.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}