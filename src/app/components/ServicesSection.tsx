'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const pillars = [
  {
    id: 'hr',
    icon: 'BuildingOfficeIcon',
    label: 'HR & People Operations',
    href: '/hr-workforce-solutions',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    accentBar: 'bg-secondary',
    services: [
      'HR Operations & HRMS Portal Management',
      'Employee Onboarding & Offboarding',
      'Employee Engagement',
      'Payroll & Compliance',
      'Employee Lifecycle Management',
      'HR Documentation & Processes',
    ],
    highlight: 'Compliant, streamlined HR ops so you can focus on growth.',
  },
  {
    id: 'talent',
    icon: 'UserGroupIcon',
    label: 'Talent & Recruitment',
    href: '/talent-acquisition',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    accentBar: 'bg-accent',
    services: [
      'Permanent & Contract Hiring',
      'Executive & Specialized Hiring',
      'Volume Hiring',
      'Recruitment Process Outsourcing (RPO)',
      'Dedicated Recruiters',
      'Global Hiring',
    ],
    highlight: 'End-to-end talent pipeline from JD to offer letter.',
  },
  {
    id: 'workforce',
    icon: 'UsersIcon',
    label: 'Workforce Solutions',
    href: '/hr-workforce-solutions',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    accentBar: 'bg-primary',
    services: [
      'Contract & Temporary Workforce',
      'Workforce Deployment',
      'Workforce Planning & Management',
      'Flexible & Scalable Workforce',
    ],
    highlight: 'Agile workforce models built for scale and speed.',
  },
  {
    id: 'biz',
    icon: 'ChartBarIcon',
    label: 'Virtual Assistant & Business Support',
    href: '/business-support',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    accentBar: 'bg-primary',
    services: [
      'Administrative & Executive Assistance',
      'Data Entry & Research',
      'CRM & Database Management',
      'Scheduling & Email Management',
      'Sales & Operations Support',
    ],
    highlight: 'Strategic business support to keep your operations running smoothly.',
  },
  {
    id: 'vcs',
    icon: 'PhoneIcon',
    label: 'Virtual Customer Support',
    href: '/business-support',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    accentBar: 'bg-accent',
    services: [
      'Voice, Chat & Email Support',
      'Social Media & WhatsApp Support',
      'Customer Follow-ups',
      'Helpdesk & Ticket Support',
      'Back-office Customer Support',
    ],
    highlight: 'Dedicated virtual customer support teams for seamless customer experiences.',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState('hr');
  const activePillar = pillars.find((p) => p.id === active)!;

  return (
    <section id="services" className="py-20 sm:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">Our Solutions</span>
          </div>
          <h2 className="text-section-title font-display font-700 text-foreground mb-4">
            Five Core Services.{' '}
            <span className="gradient-text-coral">One Partner.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A strategic partner for HR, recruitment, workforce, business support, and customer operations — not just a vendor.
          </p>
        </div>

        {/* Tab selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {pillars.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              suppressHydrationWarning
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${active === p.id
                  ? `${p.bg} ${p.color} ${p.border} shadow-md`
                  : 'bg-card text-muted-foreground border-border hover:border-accent/30 hover:text-foreground'
                }`}
            >
              <Icon name={p.icon as 'UserGroupIcon'} size={16} variant="outline" />
              {p.label.split(' & ')[0]}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="grid lg:grid-cols-12 gap-6 scroll-reveal" style={{ transitionDelay: '0.2s' }}>

          {/* Services list — spans 5 cols */}
          <div className="lg:col-span-5 bg-primary rounded-3xl p-6 sm:p-8 border border-primary shadow-sm flex flex-col">
            <div className={`w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5`}>
              <Icon name={activePillar.icon as 'UserGroupIcon'} size={22} className="text-white" variant="outline" />
            </div>
            <h3 className="font-display font-700 text-white text-xl mb-2">{activePillar.label}</h3>
            <p className="text-sm text-white/70 font-medium mb-6">{activePillar.highlight}</p>
            <ul className="space-y-3 flex-1">
              {activePillar.services.map((svc) => (
                <li key={svc} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white/50" />
                  <span className="text-white/80 text-sm">{svc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/10">
              <Link
                href={activePillar.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors group"
              >
                Explore {activePillar.label.split(' & ')[0]} in depth
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
              </Link>
            </div>
          </div>

          {/* Visual panels — spans 7 cols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* All pillars overview cards */}
            {pillars.map((p) => (
              <div
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`spotlight-card hover-lift cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${active === p.id
                    ? `${p.bg} ${p.border} shadow-md`
                    : 'bg-card border-border hover:border-accent/20'
                  }`}
              >
                <div className={`w-9 h-9 rounded-xl ${p.bg} ${p.border} border flex items-center justify-center mb-3`}>
                  <Icon name={p.icon as 'UserGroupIcon'} size={16} className={p.color} variant="outline" />
                </div>
                <div className="font-semibold text-foreground text-sm leading-snug mb-1">{p.label}</div>
                <div className="text-muted-foreground text-xs leading-relaxed mb-3">{p.services.slice(0, 2).join(' · ')}</div>
                <Link
                  href={p.href}
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${p.color} hover:opacity-70`}
                >
                  Learn more
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
              </div>
            ))}

            {/* Technology card */}
            <div className="sm:col-span-2 bg-primary rounded-2xl p-5 text-white">
              <div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">Technology & Tools</div>
              <div className="flex flex-wrap gap-2">
                {['ATS', 'HRMS', 'HR Portals', 'AI-Assisted Recruitment', 'Recruitment Analytics', 'Workforce Dashboards', 'Digital HR Solutions'].map((tool) => (
                  <span key={tool} className="text-xs font-medium bg-white/10 border border-white/15 rounded-full px-3 py-1 text-white/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}