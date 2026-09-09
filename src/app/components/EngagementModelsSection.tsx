'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';

/* BENTO GRID AUDIT (7 cards, 3-col grid):
   Row 1: [Permanent Recruitment cs-1] [Contract Staffing cs-1] [Dedicated Resources cs-1]
   Row 2: [RPO cs-1] [HR Outsourcing cs-1] [Workforce Outsourcing cs-1]
   Row 3: [Virtual Assistant Teams cs-3]
*/

const models = [
  {
    icon: 'TrophyIcon',
    title: 'Permanent Recruitment',
    desc: 'End-to-end permanent hiring with success-fee model. No upfront cost, pay only on placement.',
    tag: 'No upfront cost',
    span: 'col-span-1',
    color: 'border-accent/30',
    bg: 'bg-accent/5',
  },
  {
    icon: 'ClipboardDocumentListIcon',
    title: 'Contract Staffing',
    desc: 'Flexible contract talent for project-based, seasonal, or transitional workforce needs.',
    tag: 'Flexible tenure',
    span: 'col-span-1',
    color: 'border-secondary/30',
    bg: 'bg-secondary/5',
  },
  {
    icon: 'UserCircleIcon',
    title: 'Dedicated Resources',
    desc: 'Full-time dedicated professionals embedded in your team, aligned to your culture and pace.',
    tag: 'Embedded team',
    span: 'col-span-1',
    color: 'border-primary/20',
    bg: 'bg-primary/5',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'RPO',
    desc: 'Outsource your entire recruitment function with SLA-backed delivery and reporting.',
    tag: 'Full outsource',
    span: 'col-span-1',
    color: 'border-accent/30',
    bg: 'bg-accent/5',
  },
  {
    icon: 'BanknotesIcon',
    title: 'HR Outsourcing',
    desc: 'End-to-end HR operations including payroll, compliance, and HRMS management fully managed.',
    tag: 'Compliance guaranteed',
    span: 'col-span-1',
    color: 'border-secondary/30',
    bg: 'bg-secondary/5',
  },
  {
    icon: 'UsersIcon',
    title: 'Workforce Outsourcing',
    desc: 'Complete workforce management — deployment, planning, and scaling for your operations.',
    tag: 'Scalable model',
    span: 'col-span-1',
    color: 'border-primary/20',
    bg: 'bg-primary/5',
  },
  {
    icon: 'ComputerDesktopIcon',
    title: 'Virtual Assistant Teams',
    desc: 'Dedicated virtual assistant teams for administrative, business support, and customer operations — ready to deploy.',
    tag: 'Remote-ready',
    span: 'sm:col-span-3',
    color: 'border-accent/30',
    bg: 'bg-accent/5',
  },
];

const journey = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Understand your needs, timeline, and strategic goals.',
    icon: 'ChatBubbleLeftRightIcon',
  },
  {
    step: '02',
    title: 'Proposal & SLA',
    desc: 'Tailored plan with clear deliverables and transparent terms.',
    icon: 'DocumentCheckIcon',
  },
  {
    step: '03',
    title: 'Onboarding & Kickoff',
    desc: 'Dedicated team setup and rapid process alignment.',
    icon: 'RocketLaunchIcon',
  },
  {
    step: '04',
    title: 'Delivery & Reporting',
    desc: 'Ongoing execution with real-time tracking and metrics.',
    icon: 'ChartBarIcon',
  },
  {
    step: '05',
    title: 'Review & Scale',
    desc: 'Continuous performance review and agile scaling.',
    icon: 'ArrowTrendingUpIcon',
  },
];

export default function EngagementModelsSection() {
  return (
    <section id="engagement" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase">Engagement Models</span>
          </div>
          <h2 className="text-section-title font-sans font-extrabold text-foreground mb-4">
            Flexible Models,{' '}
            <span className="gradient-text-coral">Fixed Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the engagement model that fits your hiring stage, scale, and speed.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {models.map((model, i) => (
            <div
              key={model.title}
              className={`spotlight-card hover-lift bg-card border rounded-2xl p-6 shadow-sm flex flex-col gap-4 ${model.span} ${model.color} ${model.bg}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-card border border-border shadow-sm flex items-center justify-center">
                  <Icon name={model.icon as 'TrophyIcon'} size={18} className="text-primary" variant="outline" />
                </div>
                <span className="text-xs font-semibold bg-white dark:bg-card border border-border rounded-full px-3 py-1 text-muted-foreground">
                  {model.tag}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1.5">{model.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client engagement journey */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">

            {/* Inner Section Header */}
            <div className="text-center max-w-xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">End-to-End Execution</span>
              </div>
              <h3 className="font-sans font-bold text-foreground text-2xl sm:text-3xl">Client Engagement Journey</h3>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">From first call to scaling a clear, predictable path.</p>
            </div>

            {/* Step Timeline Container */}
            <div className="relative">
              {/* Desktop Horizontal Line */}
              <div
                className="hidden lg:block absolute top-7 left-[calc(10%+28px)] right-[calc(10%+28px)] h-0.5 bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 z-0"
              />

              {/* Mobile Vertical Line */}
              <div
                className="lg:hidden absolute top-7 bottom-7 left-[27px] w-0.5 bg-gradient-to-b from-primary/30 via-secondary/40 to-primary/30 z-0"
              />

              {/* 5 Steps Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                {journey.map((j) => (
                  <div
                    key={j.step}
                    className="flex lg:flex-col items-start lg:items-center text-left lg:text-center group"
                  >
                    {/* Circle Node with Icon & Step Badge */}
                    <div className="relative flex-shrink-0 flex items-center justify-center mr-4 lg:mr-0 mb-0 lg:mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-card border-2 border-border group-hover:border-secondary shadow-sm flex items-center justify-center text-primary group-hover:text-secondary group-hover:scale-105 transition-all duration-300 relative z-10">
                        <Icon name={j.icon} size={22} className="transition-transform group-hover:scale-110" variant="outline" />

                        {/* Step Badge */}
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                          {j.step}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-muted/50 hover:bg-muted border border-border/70 rounded-2xl p-4 transition-all duration-300 w-full group-hover:shadow-md group-hover:-translate-y-0.5">
                      <div className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                        {j.title}
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-1">
                        {j.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}