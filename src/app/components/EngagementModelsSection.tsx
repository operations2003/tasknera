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
    color: 'border-accent/30',
    iconBg: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    icon: ClipboardCheck,
    title: 'Contract Staffing',
    desc: 'Flexible technical, functional, and operational talent for project-based surges and seasonal spikes.',
    tag: 'Flexible Tenure',
    color: 'border-secondary/30',
    iconBg: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Resources',
    desc: 'Full-time professionals embedded within your internal team, reporting directly into your daily workflows.',
    tag: 'Embedded Team',
    color: 'border-blue-500/30',
    iconBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  {
    icon: RefreshCw,
    title: 'RPO (Recruitment Outsourcing)',
    desc: 'End-to-end management of your entire talent acquisition lifecycle, from requisition to offer letter handoff.',
    tag: 'Full Talent Function',
    color: 'border-purple-500/30',
    iconBg: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  },
  {
    icon: CreditCard,
    title: 'HR Operations Outsourcing',
    desc: 'Outsource selected HR functions or build a managed HR operations model around your business including payroll and compliance.',
    tag: 'Compliance-Focused',
    color: 'border-emerald-500/30',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  },
  {
    icon: Users,
    title: 'Workforce Outsourcing',
    desc: 'Turnkey workforce planning, rapid multi-location deployment, shift scheduling, and on-site governance.',
    tag: 'Operational Scale',
    color: 'border-orange-500/30',
    iconBg: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  },
  {
    icon: Briefcase,
    title: 'Virtual Assistant Pods',
    desc: 'Dedicated human remote professionals handling executive assistance, CRM, admin, research, and scheduling.',
    tag: 'Human Remote Pros',
    color: 'border-amber-500/30',
    iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  },
  {
    icon: Headphones,
    title: 'Dedicated VCS Team',
    desc: 'Build a dedicated voice, chat, email or digital customer support team based on your required coverage and service scope.',
    tag: 'Omnichannel VCS',
    color: 'border-teal-500/30',
    iconBg: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
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
    <section id="engagement" className="py-20 sm:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs font-bold text-secondary tracking-widest uppercase">
              Flexible Partnership Models
            </span>
          </div>
          <h2 className="text-section-title font-display font-bold text-foreground mb-4">
            Flexible Models.{' '}
            <span className="gradient-text-coral">Scalable Support.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
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
                className="card-premium rounded-3xl p-6 flex flex-col justify-between group"
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${model.iconBg} shadow-sm group-hover:scale-105 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold bg-muted border border-border rounded-full px-2.5 py-0.5 text-muted-foreground">
                      {model.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base mb-2 group-hover:text-accent transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {model.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border/70">
                  <Link
                    href="/#contact"
                    className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
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
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">

            {/* Inner Section Header */}
            <div className="text-center max-w-xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Transparent Delivery
                </span>
              </div>
              <h3 className="font-display font-bold text-foreground text-2xl sm:text-3xl">
                Client Engagement Journey
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
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
                      <div className="w-14 h-14 rounded-2xl bg-card border-2 border-border group-hover:border-accent shadow-sm flex items-center justify-center text-primary group-hover:text-accent group-hover:scale-105 transition-all duration-300 relative z-10">
                        <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />

                        {/* Step Badge */}
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                          {j.step}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-muted/40 group-hover:bg-card border border-border/80 rounded-2xl p-4 transition-all duration-300 w-full group-hover:shadow-md">
                      <div className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors mb-1">
                        {j.title}
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">
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