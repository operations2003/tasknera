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
    title: 'Discover & Understand',
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
    title: 'Deliver & Operate',
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
  'HireIQ Matching Engine',
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
    <section id="process" className="py-24 sm:py-32 bg-section-dark overflow-hidden text-white relative border-y border-border/80">
      {/* Atmospheric ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

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
                className="glass-card rounded-3xl p-7 sm:p-8 hover-lift group border border-[#DED3C7]/20 hover:border-[#E5BDB4]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden bg-[#704A4B]/70 backdrop-blur-xl"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl font-display font-bold text-[#F8F4ED]/50 group-hover:text-[#F8F4ED]/80 transition-colors leading-none">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E5BDB4] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="w-8 h-0.5 bg-[#E5BDB4] mb-4 transition-all duration-300 group-hover:w-16" />

                  <h3 className="font-display font-bold text-[#F8F4ED] text-xl mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-[#F8F4ED]/80 text-sm leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-[#F8F4ED]/70 font-medium tracking-wide flex items-center justify-between">
                  <span>{step.applicable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology-Enabled Delivery Box */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-gradient-to-br from-[#704A4B] via-[#613D3E] to-[#4F3031] backdrop-blur-2xl border border-[#DED3C7]/20 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 bg-[#E5BDB4]/15 border border-[#E5BDB4]/30 rounded-full px-3.5 py-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5BDB4]" />
                  <span className="text-xs font-bold text-[#E5BDB4] tracking-widest uppercase">
                    Delivery Architecture
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F8F4ED] leading-tight">
                  Modern Technology Meets Human Expertise
                </h3>

                <p className="text-[#F8F4ED]/80 text-sm sm:text-base leading-relaxed">
                  TaskNera combines experienced professionals with targeted HR and workforce technology to deliver faster, more transparent, and fully scalable operations.
                </p>

                <p className="text-[#F8F4ED]/70 text-xs sm:text-sm leading-relaxed">
                  We never replace people with generic bots; we empower vetted human teams with specialized tools like our JD Match Evaluator, real-time analytics dashboards, and automated workflows to deliver quality and consistency at every stage.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-[#FAF7F2] text-[#704A4B] font-bold px-7 py-3 rounded-full text-xs hover:bg-[#F3ECE4] transition-all shadow-lg"
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