'use client';
import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Layers,
  Rocket,
  Settings,
  BarChart3,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Understand & Intake',
    desc: 'Deep-dive intake to analyze your organizational dynamics, operational scope, skills matrix, and timeline requirements.',
    icon: Compass,
    applicable: 'HR Ops · Talent · Workforce · Virtual Support',
    accent: 'text-accent',
  },
  {
    num: '02',
    title: 'Design & Scope',
    desc: 'We architect the optimal pod structure, role competencies, SLAs, and commercial engagement model tailored to your budget.',
    icon: Layers,
    applicable: 'Custom SOW · Transparent SLAs · No Hidden Fees',
    accent: 'text-secondary',
  },
  {
    num: '03',
    title: 'Build & Deploy',
    desc: 'We source, pre-vet, and onboard dedicated human professionals paired with our JD Match Evaluator and digital portal setup.',
    icon: Rocket,
    applicable: 'Vetted Talent Matching · Tech Onboarding',
    accent: 'text-blue-400',
  },
  {
    num: '04',
    title: 'Operate & Execute',
    desc: 'Our embedded pods manage your agreed workflows daily with active supervision, documentation, and continuous communication.',
    icon: Settings,
    applicable: 'Day-to-Day Execution · Agile Coordination',
    accent: 'text-amber-400',
  },
  {
    num: '05',
    title: 'Measure & Benchmark',
    desc: 'Transparent real-time reporting, QA auditing, monthly performance scorecard reviews, and feedback cadences.',
    icon: BarChart3,
    applicable: 'Weekly / Monthly Scorecards · QA Reviews',
    accent: 'text-teal-400',
  },
  {
    num: '06',
    title: 'Scale & Optimize',
    desc: 'As your business evolves, seamlessly expand pod capacity, add functional capabilities, or adjust shift coverage on-demand.',
    icon: TrendingUp,
    applicable: 'Flexible Scaling · Zero Friction Expansion',
    accent: 'text-purple-400',
  },
];

const techCapabilities = [
  'JD Match Evaluator',
  'HRMS Integration',
  'Employee Portals',
  'CRM Pipeline Sync',
  'AI-Assisted Sourcing',
  'Recruitment Analytics',
  'Workforce Dashboards',
  'Paperless Workflows',
  'SLA Tracking & MIS',
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-primary overflow-hidden text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold text-white/90 tracking-widest uppercase">
              Predictable Methodology
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-white mb-4">
            How TaskNera{' '}
            <span className="gradient-text-coral">Works</span>
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed">
            A unified operational lifecycle designed to deliver consistent excellence, accountability, and speed across every engagement.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {steps.map((step, i) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card rounded-3xl p-7 sm:p-8 hover-lift group border border-white/12 hover:border-white/25 transition-all duration-300 flex flex-col justify-between relative overflow-hidden bg-slate-900/50 backdrop-blur-xl"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl font-display font-bold text-white/50 group-hover:text-white/80 transition-colors leading-none">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="w-8 h-0.5 bg-accent mb-4 transition-all duration-300 group-hover:w-16" />

                  <h3 className="font-display font-bold text-white text-xl mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-white/60 font-medium tracking-wide flex items-center justify-between">
                  <span>{step.applicable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology-Enabled Delivery Box */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-3.5 py-1">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-bold text-accent tracking-widest uppercase">
                    Delivery Architecture
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                  Modern Technology Meets Human Expertise
                </h3>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  TaskNera combines experienced professionals with targeted HR and workforce technology to deliver faster, more transparent, and fully scalable operations.
                </p>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  We never replace people with generic bots; we empower vetted human teams with specialized tools like our JD Match Evaluator, real-time analytics dashboards, and automated workflows to guarantee quality at every stage.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-3 rounded-full text-xs hover:brightness-110 transition-all shadow-lg shadow-accent/25"
                  >
                    <span>Discuss Your Operational Model</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/process"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full text-xs transition-colors border border-white/15"
                  >
                    <span>Detailed Process Breakdown</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner">
                  <div className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4 flex items-center justify-between">
                    <span>Enabled Capabilities &amp; Stack</span>
                    <ShieldCheck className="w-4 h-4 text-accent" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {techCapabilities.map((cap) => (
                      <div
                        key={cap}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 text-center transition-all duration-200"
                      >
                        <div className="text-accent text-xs mb-1">✦</div>
                        <div className="text-xs font-semibold text-white/90 leading-tight">
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