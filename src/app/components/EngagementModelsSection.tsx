'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const models = [
  {
    icon: 'TrophyIcon',
    title: 'Permanent Recruitment',
    desc: 'Specialized hiring for critical and leadership roles with a transparent milestone/success-aligned structure.',
    tag: 'Direct Placement',
    color: 'border-accent/30',
    bg: 'bg-accent/5',
  },
  {
    icon: 'ClipboardDocumentListIcon',
    title: 'Contract Staffing',
    desc: 'Flexible technical and operational talent for project-based, seasonal, or transitional workforce spikes.',
    tag: 'Flexible Tenure',
    color: 'border-secondary/30',
    bg: 'bg-secondary/5',
  },
  {
    icon: 'UserCircleIcon',
    title: 'Dedicated Resources',
    desc: 'Full-time professionals embedded within your internal team, reporting directly into your workflows.',
    tag: 'Embedded Team',
    color: 'border-primary/20',
    bg: 'bg-primary/5',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'RPO (Recruitment Process Outsourcing)',
    desc: 'End-to-end management of your talent acquisition lifecycle, from sourcing to offer letter handoff.',
    tag: 'Full Talent Function',
    color: 'border-accent/30',
    bg: 'bg-accent/5',
  },
  {
    icon: 'BanknotesIcon',
    title: 'HR Outsourcing',
    desc: 'Complete HR operations including payroll processing, statutory compliance, onboarding, and portal administration.',
    tag: '100% Compliant',
    color: 'border-secondary/30',
    bg: 'bg-secondary/5',
  },
  {
    icon: 'UsersIcon',
    title: 'Workforce Outsourcing',
    desc: 'End-to-end workforce planning, rapid deployment, scheduling, and multi-location field management.',
    tag: 'Operational Scale',
    color: 'border-primary/20',
    bg: 'bg-primary/5',
  },
  {
    icon: 'BriefcaseIcon',
    title: 'Virtual Assistant Teams',
    desc: 'Dedicated human remote professionals handling executive assistance, CRM, admin, research, and data operations.',
    tag: 'Human Remote Pros',
    color: 'border-accent/30',
    bg: 'bg-accent/5',
  },
  {
    icon: 'PhoneIcon',
    title: 'Virtual Customer Support Teams',
    desc: 'Professional omnichannel customer support pods covering voice, live chat, email, WhatsApp, and ticketing.',
    tag: 'Omnichannel VCS',
    color: 'border-secondary/30',
    bg: 'bg-secondary/5',
  },
];

const journey = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Understand your operational scope, team requirements, and timelines.',
    icon: 'ChatBubbleLeftRightIcon',
  },
  {
    step: '02',
    title: 'Proposal & SLA',
    desc: 'Tailored engagement design with transparent pricing and deliverable benchmarks.',
    icon: 'DocumentCheckIcon',
  },
  {
    step: '03',
    title: 'Deployment & Setup',
    desc: 'Team matching, workflow alignment, technology onboarding, and training.',
    icon: 'RocketLaunchIcon',
  },
  {
    step: '04',
    title: 'Execution & Quality Assurance',
    desc: 'Daily operations management with performance tracking and regular reporting.',
    icon: 'ChartBarIcon',
  },
  {
    step: '05',
    title: 'Review & Agile Scale',
    desc: 'Continuous SLA reviews with rapid capacity adjustments as demands shift.',
    icon: 'ArrowTrendingUpIcon',
  },
];

export default function EngagementModelsSection() {
  return (
    <section id="engagement" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase">
              Engagement Models
            </span>
          </div>
          <h2 className="text-section-title font-display font-700 text-foreground mb-4">
            Our Engagement{' '}
            <span className="gradient-text-coral">Models</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose the engagement model that fits your operational stage, organizational scale, and flexibility requirements.
          </p>
        </div>

        {/* 8 Models Grid (Requirement 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {models.map((model, i) => (
            <div
              key={model.title}
              className={`spotlight-card hover-lift bg-card border rounded-2xl p-6 shadow-sm flex flex-col justify-between ${model.color} ${model.bg}`}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center">
                    <Icon name={model.icon as 'TrophyIcon'} size={18} className="text-foreground" variant="outline" />
                  </div>
                  <span className="text-[10px] font-semibold bg-muted border border-border rounded-full px-2.5 py-0.5 text-muted-foreground">
                    {model.tag}
                  </span>
                </div>
                <h3 className="font-display font-700 text-foreground text-base mb-2">
                  {model.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {model.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border/60">
                <Link
                  href="/#contact"
                  className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                >
                  Request Model Pricing →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Client Engagement Journey */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">

            {/* Inner Section Header */}
            <div className="text-center max-w-xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  Predictable Execution
                </span>
              </div>
              <h3 className="font-display font-700 text-foreground text-2xl sm:text-3xl">
                Client Engagement Journey
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                From initial intake to sustained scaling, a transparent roadmap at every milestone.
              </p>
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