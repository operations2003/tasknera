'use client';
import React from 'react';
import Link from 'next/link';
import {
  Trophy,
  ClipboardCheck,
  UserCheck,
  RefreshCw,
  CreditCard,
  Users,
  Briefcase,
  Headphones,
  MessagesSquare,
  FileCheck,
  Rocket,
  BarChart,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const models = [
  {
    icon: Trophy,
    title: 'Permanent Recruitment',
    desc: 'Specialized hiring for critical and leadership roles with transparent, success-fee milestone alignment.',
    tag: 'Direct Placement',
  },
  {
    icon: ClipboardCheck,
    title: 'Contract Staffing',
    desc: 'Flexible technical, functional, and operational talent for project-based surges and seasonal spikes.',
    tag: 'Flexible Tenure',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Resources',
    desc: 'Full-time professionals embedded within your internal team, reporting directly into your daily workflows.',
    tag: 'Embedded Team',
  },
  {
    icon: RefreshCw,
    title: 'RPO (Recruitment Outsourcing)',
    desc: 'End-to-end management of your entire talent acquisition lifecycle, from requisition to offer letter handoff.',
    tag: 'Full Talent Function',
  },
  {
    icon: CreditCard,
    title: 'HR Operations Outsourcing',
    desc: 'Outsource selected HR functions or build a managed HR operations model around your business including payroll and compliance.',
    tag: 'Compliance-Focused',
  },
  {
    icon: Users,
    title: 'Workforce Outsourcing',
    desc: 'Turnkey workforce planning, rapid multi-location deployment, shift scheduling, and on-site governance.',
    tag: 'Operational Scale',
  },
  {
    icon: Briefcase,
    title: 'Virtual Assistant Pods',
    desc: 'Dedicated human remote professionals handling executive assistance, CRM, admin, research, and scheduling.',
    tag: 'Human Remote Pros',
  },
  {
    icon: Headphones,
    title: 'Dedicated VCS Team',
    desc: 'Build a dedicated voice, chat, email or digital customer support team based on your required coverage and service scope.',
    tag: 'Omnichannel VCS',
  },
];

const journey = [
  {
    step: '01',
    title: 'Consultation & Intake',
    desc: 'Deep-dive intake on operational scope, required headcount, skillsets, and timelines.',
    icon: MessagesSquare,
  },
  {
    step: '02',
    title: 'Proposal & SLA Design',
    desc: 'Tailored engagement design with transparent deliverables, KPIs, and milestone pricing.',
    icon: FileCheck,
  },
  {
    step: '03',
    title: 'Deployment & Setup',
    desc: 'Candidate matching, workflow alignment, technology onboarding, and systems integration.',
    icon: Rocket,
  },
  {
    step: '04',
    title: 'Execution & QA',
    desc: 'Daily operations management with supervisory oversight, SLA monitoring, and reporting.',
    icon: BarChart,
  },
  {
    step: '05',
    title: 'Review & Scaling',
    desc: 'Continuous performance reviews with agile capacity adjustments as your demand expands.',
    icon: TrendingUp,
  },
];

export default function EngagementModelsSection() {
  return (
    <section id="engagement" className="py-20 sm:py-28 bg-tn-ivory border-b border-tn-mist relative overflow-hidden">
      {/* Ambient background light pools */}
      <div className="absolute top-10 right-1/3 w-[600px] h-[350px] bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-tn-beige/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-mist rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tn-coral" />
            <span className="text-xs font-bold text-tn-charcoal tracking-widest uppercase">
              Flexible Partnership Models
            </span>
          </div>
          <h2 className="text-section-title font-display font-bold text-tn-charcoal mb-4">
            Flexible Models.{' '}
            <span className="text-tn-coral">Scalable Support.</span>
          </h2>
          <p className="text-tn-slate text-base sm:text-lg leading-relaxed">
            Choose the engagement model that fits your operational stage, internal team size, and growth timelines.
          </p>
        </div>

        {/* 8 Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {models.map((model, i) => {
            const IconComp = model.icon;
            return (
              <div
                key={model.title}
                className="rounded-3xl p-6 flex flex-col justify-between group bg-white border border-tn-mist hover:border-tn-coral transition-all shadow-sm hover:shadow-xl"
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl border border-tn-mist flex items-center justify-center bg-tn-ivory text-tn-charcoal shadow-sm group-hover:bg-tn-coral group-hover:border-tn-coral transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold bg-tn-ivory border border-tn-mist rounded-full px-2.5 py-0.5 text-tn-slate">
                      {model.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-tn-charcoal text-base mb-2 group-hover:text-tn-coral transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-tn-slate text-xs sm:text-sm leading-relaxed">
                    {model.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-tn-mist">
                  <Link
                    href="/#contact"
                    className="text-xs font-bold text-tn-charcoal hover:text-tn-coral flex items-center gap-1 transition-colors"
                  >
                    <span>Request Model Pricing</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Engagement Journey */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white border border-tn-mist rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">

            {/* Inner Section Header */}
            <div className="text-center max-w-xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-coral/30 rounded-full px-3 py-1 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-tn-coral" />
                <span className="text-xs font-bold text-tn-charcoal tracking-widest uppercase">
                  Transparent Delivery
                </span>
              </div>
              <h3 className="font-display font-bold text-tn-charcoal text-2xl sm:text-3xl">
                Client Engagement Journey
              </h3>
              <p className="text-tn-slate text-sm sm:text-base mt-2">
                From initial intake to sustained scaling, a transparent roadmap at every milestone.
              </p>
            </div>

            {/* Step Timeline Container */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {journey.map((j) => {
                const IconComp = j.icon;
                return (
                  <div
                    key={j.step}
                    className="flex flex-col items-start md:items-center text-left md:text-center group"
                  >
                    {/* Circle Node with Icon & Step Badge */}
                    <div className="relative flex-shrink-0 flex items-center justify-center mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-white border-2 border-tn-mist group-hover:border-tn-coral shadow-sm flex items-center justify-center text-tn-charcoal group-hover:text-tn-coral group-hover:scale-105 transition-all duration-300 relative z-10">
                        <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />

                        {/* Step Badge */}
                        <span className="absolute -top-2 -right-2 bg-tn-coral text-tn-charcoal text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                          {j.step}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-tn-ivory/60 group-hover:bg-white border border-tn-mist group-hover:border-tn-coral rounded-2xl p-4 transition-all duration-300 w-full group-hover:shadow-md">
                      <div className="font-bold text-tn-charcoal text-sm sm:text-base group-hover:text-tn-coral transition-colors mb-1">
                        {j.title}
                      </div>
                      <p className="text-tn-slate text-xs leading-relaxed">
                        {j.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}