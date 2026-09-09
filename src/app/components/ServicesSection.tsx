'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const pillars = [
  {
    id: 'hr',
    icon: 'BuildingOfficeIcon',
    label: 'HR & People Operations',
    tagline: 'Your extended HR team.',
    href: '/hr-workforce-solutions',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    services: [
      'HR Operations',
      'HRMS & HR Portal Management',
      'Employee Onboarding & Offboarding',
      'Employee Engagement',
      'Payroll & Compliance',
      'Employee Lifecycle Management',
      'HR Documentation & Processes',
    ],
    highlight: 'Compliant, structured HR operations that free leadership to focus on business growth.',
  },
  {
    id: 'talent',
    icon: 'UserGroupIcon',
    label: 'Talent & Recruitment',
    tagline: 'Specialized hiring for every stage of growth.',
    href: '/talent-acquisition',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    services: [
      'Permanent Hiring',
      'Contract & Temporary Hiring',
      'Executive & Specialized Hiring',
      'Volume Hiring',
      'RPO (Recruitment Process Outsourcing)',
      'Dedicated Recruiters',
      'Global Hiring',
    ],
    highlight: 'Strategic talent acquisition across specialized domains, leadership mandates, and volume scaling.',
  },
  {
    id: 'workforce',
    icon: 'UsersIcon',
    label: 'Workforce Solutions',
    tagline: 'Flexible workforce models built around demand.',
    href: '/hr-workforce-solutions#workforce',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    services: [
      'Contract Workforce',
      'Temporary Workforce',
      'Workforce Deployment',
      'Workforce Planning',
      'Workforce Management',
      'Flexible & Scalable Workforce',
    ],
    highlight: 'Agile workforce strategies that adapt rapidly to operational surges and project cycles.',
  },
  {
    id: 'va',
    icon: 'BriefcaseIcon',
    label: 'Virtual Assistant & Business Support',
    tagline: 'Reliable support for your everyday operations.',
    href: '/virtual-assistant-services',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    badge: '100% Human Remote Professionals',
    services: [
      'Administrative Support',
      'Executive Assistance',
      'Data Entry & Research',
      'CRM & Database Management',
      'Scheduling & Email Management',
      'Sales & Operations Support',
    ],
    highlight: 'Dedicated, vetted human professionals managing high-touch business tasks — never an automated bot.',
  },
  {
    id: 'vcs',
    icon: 'PhoneIcon',
    label: 'Virtual Customer Support (VCS)',
    tagline: 'Customer service across voice, chat, email and digital channels.',
    href: '/virtual-customer-support',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    badge: 'New 5th Core Pillar',
    services: [
      'Voice Support',
      'Chat Support',
      'Email Support',
      'Social Media Support',
      'WhatsApp Support',
      'Customer Follow-ups',
      'Helpdesk & Ticket Support',
      'Back-office Customer Support',
    ],
    highlight: 'Professional business customer support built for brand loyalty, omnichannel retention, and high SLA standards.',
  },
];

const techLayerItems = [
  {
    name: 'JD Match Evaluator',
    desc: 'Evaluates CVs against Job Descriptions with intelligent match scoring (not a generic ATS)',
    badge: 'Proprietary',
  },
  {
    name: 'HRMS',
    desc: 'Centralized core HR management for records, leave, and documentation',
    badge: 'Platform',
  },
  {
    name: 'HR Portals',
    desc: 'Employee and manager self-service portals for frictionless requests',
    badge: 'Portal',
  },
  {
    name: 'AI-Assisted Recruitment',
    desc: 'Augmented candidate sourcing and competency screening workflows',
    badge: 'AI Layer',
  },
  {
    name: 'Recruitment Analytics',
    desc: 'Time-to-fill, source attribution, and pipeline conversion insights',
    badge: 'Analytics',
  },
  {
    name: 'Workforce Dashboards',
    desc: 'Real-time headcount, capacity, and workforce deployment visibility',
    badge: 'Reporting',
  },
  {
    name: 'Digital HR Solutions',
    desc: 'Paperless onboarding, e-signatures, and digital lifecycle workflows',
    badge: 'Digital',
  },
  {
    name: 'Process Automation',
    desc: 'Automated notification pipelines, status updates, and task routing',
    badge: 'Automation',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState('hr');
  const activePillar = pillars.find((p) => p.id === active)!;

  return (
    <section id="services" className="py-20 sm:py-28 bg-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header (Requirement 4) */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">
              Core Solutions
            </span>
          </div>

          <h2 className="text-section-title font-display font-700 text-foreground mb-4">
            One Partner.{' '}
            <span className="gradient-text-coral">Your People &amp; Operations.</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            From hiring your first employee to managing a growing workforce and supporting your daily business operations, TaskNera provides flexible solutions that grow with your organization.
          </p>
        </div>

        {/* 5 Pillar Quick Summary Cards (Requirement 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 scroll-reveal" style={{ transitionDelay: '0.05s' }}>
          {pillars.map((p) => {
            const isSelected = active === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between hover-lift ${
                  isSelected
                    ? 'bg-card border-accent shadow-md ring-2 ring-accent/20'
                    : 'bg-card/75 border-border hover:border-accent/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center`}>
                      <Icon name={p.icon as 'UserGroupIcon'} size={18} className={p.color} variant="outline" />
                    </div>
                    {p.badge && (
                      <span className="text-[10px] font-semibold text-accent bg-accent/10 rounded-full px-2 py-0.5">
                        {p.id === 'va' ? 'Human VAs' : 'VCS'}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-700 text-sm text-foreground mb-1">
                    {p.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {p.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className={`text-xs font-semibold ${isSelected ? 'text-accent' : 'text-muted-foreground'}`}>
                    {isSelected ? 'Viewing' : 'View Details'}
                  </span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className="grid lg:grid-cols-12 gap-6 scroll-reveal mb-16" style={{ transitionDelay: '0.15s' }}>
          
          {/* Active Pillar Showcase (Left - 5 Cols) */}
          <div className="lg:col-span-5 bg-primary rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon name={activePillar.icon as 'UserGroupIcon'} size={24} className="text-white" variant="outline" />
                </div>
                {activePillar.badge && (
                  <span className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    {activePillar.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display font-700 text-2xl text-white mb-2">
                {activePillar.label}
              </h3>
              <div className="text-accent text-sm font-semibold mb-3">
                {activePillar.tagline}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {activePillar.highlight}
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                  Included Capabilities:
                </div>
                {activePillar.services.map((svc) => (
                  <div key={svc} className="flex items-start gap-2.5">
                    <span className="text-accent text-sm mt-0.5">✓</span>
                    <span className="text-white/90 text-sm font-medium">{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                href={activePillar.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:brightness-125 transition-all group"
              >
                <span>Learn more about {activePillar.label.split(' & ')[0]}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                href="/#contact"
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Inquire Now
              </Link>
            </div>
          </div>

          {/* All 5 Solution Breakdown Cards (Right - 7 Cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => {
              const isCurrent = active === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-card border-accent shadow-md'
                      : 'bg-card border-border hover:border-accent/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg ${p.bg} border ${p.border} flex items-center justify-center`}>
                        <Icon name={p.icon as 'UserGroupIcon'} size={16} className={p.color} variant="outline" />
                      </div>
                      <span className="text-[11px] text-muted-foreground font-medium">
                        {p.services.length} services
                      </span>
                    </div>

                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {p.label}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      {p.tagline}
                    </p>

                    <div className="space-y-1">
                      {p.services.slice(0, 3).map((item) => (
                        <div key={item} className="text-xs text-foreground/80 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                    <Link
                      href={p.href}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                    >
                      Dedicated Page →
                    </Link>
                    <span className="text-[11px] text-muted-foreground">Click to preview</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================================================== */}
        {/* 3. TECHNOLOGY LAYER (Requirement 3 & 10)          */}
        {/* ================================================== */}
        <div id="technology" className="bg-primary rounded-3xl p-6 sm:p-10 text-white shadow-xl scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">
                Technology Layer
              </span>
            </div>
            <h3 className="font-display font-700 text-2xl sm:text-3xl text-white mb-2">
              HR Technology &amp; Digital Solutions
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              TaskNera embeds a flexible technology layer to support our HR, recruitment, and workforce solutions. We do not provide an overwhelming traditional ATS; instead, we deploy targeted digital tools including our JD Match Evaluator to ensure speed and precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techLayerItems.map((tech) => (
              <div
                key={tech.name}
                className="glass-card rounded-2xl p-4 border border-white/10 hover:border-white/25 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-accent bg-accent/15 px-2 py-0.5 rounded-md">
                    {tech.badge}
                  </span>
                  <span className="text-white/40 text-xs">Capability</span>
                </div>
                <div className="font-semibold text-white text-sm mb-1">
                  {tech.name}
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <div>
              <strong className="text-white">Note on Technology:</strong> Technology powers our delivery — combining human expertise with JD Match Evaluator, HR portals, and analytics.
            </div>
            <Link
              href="/#contact"
              className="text-accent hover:underline font-semibold flex-shrink-0"
            >
              Learn about our technology integrations →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}