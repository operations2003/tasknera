'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Target,
  Users,
  Briefcase,
  Headphones,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const pillars = [
  {
    id: 'hr',
    icon: Building2,
    label: 'HR & People Operations',
    tagline: 'Your extended, high-compliance HR team.',
    href: '/hr-workforce-solutions',
    services: [
      'HR Operations & Governance',
      'HRMS & HR Portal Implementation',
      'Employee Onboarding & Offboarding',
      'Employee Engagement & Culture',
      'Payroll & Statutory Compliance (PF/ESI/TDS)',
      'Employee Lifecycle Administration',
      'HR Documentation & Policy Playbooks',
    ],
    highlight: 'Compliant, structured HR operations that eliminate administrative drag and allow leadership to focus squarely on business scale.',
  },
  {
    id: 'talent',
    icon: Target,
    label: 'Talent & Recruitment',
    tagline: 'Specialized hiring for every stage of organizational growth.',
    href: '/talent-acquisition',
    services: [
      'Specialized Permanent Hiring',
      'Contract & Temporary Talent Staffing',
      'Executive Search & Leadership Mandates',
      'High-Volume Recruitment Campaigns',
      'RPO (Recruitment Process Outsourcing)',
      'Dedicated In-House Recruitment Desks',
      'Cross-Border & Remote Global Sourcing',
    ],
    highlight: 'Strategic talent acquisition pairing experienced domain recruiters with our proprietary JD Match Evaluator for precision-matched candidate shortlists.',
  },
  {
    id: 'workforce',
    icon: Users,
    label: 'Workforce Solutions',
    tagline: 'Flexible workforce architectures built dynamically around demand.',
    href: '/hr-workforce-solutions#workforce',
    services: [
      'Contract Staffing & Deployed Pods',
      'Seasonal & Temporary Workforce Staffing',
      'Rapid Multi-Location Deployment',
      'Capacity Modeling & Headcount Planning',
      'Workforce Performance Management',
      'Flexible & Scalable Staffing On-Demand',
    ],
    highlight: 'Agile workforce strategies that adapt rapidly to operational surges, project deadlines, and regional expansions without fixed overhead.',
  },
  {
    id: 'va',
    icon: Briefcase,
    label: 'Virtual Assistant & Business Support',
    tagline: 'Reliable operational execution for your everyday workflows.',
    href: '/virtual-assistant-services',
    badge: '100% Vetted Human Remote Pros',
    services: [
      'Executive & C-Suite Calendar Assistance',
      'Day-to-Day Business Administration',
      'Data Cleansing, Scraping & Research',
      'CRM & Database Hygiene Management',
      'Email Triage & Meeting Scheduling',
      'Sales Prospecting & Operations Support',
    ],
    highlight: 'Dedicated, vetted human professionals managing high-touch business tasks — real educated talent, never an automated bot.',
  },
  {
    id: 'vcs',
    icon: Headphones,
    label: 'Virtual Customer Support (VCS)',
    tagline: 'Omnichannel customer support across voice, chat, email & social.',
    href: '/virtual-customer-support',
    badge: 'Core 5th Pillar',
    services: [
      'Inbound & Outbound Voice Support',
      'Sub-60s Live Chat Support Desks',
      'SLA-Driven Email Ticket Management',
      'Social Media & WhatsApp Community Support',
      'Customer Retention & Follow-ups',
      'L1/L2 Technical Helpdesk Support',
      'Back-Office Case & KYC Processing',
    ],
    highlight: 'Professional brand-aligned support specialists operating under strict QA, real-time SLAs, and empathetic customer communication.',
  },
];

const techLayerItems = [
  {
    name: 'HireIQ Matching Engine',
    desc: 'Proprietary JD and CV matching intelligence evaluating candidates with direct resume citations, dynamic weighting, and merit-first scoring.',
    badge: 'HireIQ™ AI',
  },
  {
    name: 'HRMS Platform',
    desc: 'Centralized core HR management for digital records, leave balances, compliance logs, and documentation.',
    badge: 'Core Platform',
  },
  {
    name: 'Self-Service Portals',
    desc: 'Employee and management self-service portals for frictionless requests, payroll slips, and approvals.',
    badge: 'Portal',
  },
  {
    name: 'AI-Assisted Sourcing',
    desc: 'Augmented candidate sourcing pipelines and competency screening workflows across global talent pools.',
    badge: 'AI Layer',
  },
  {
    name: 'Recruitment Analytics',
    desc: 'Real-time time-to-fill, source attribution, pipeline conversion rates, and diversity metrics.',
    badge: 'Analytics',
  },
  {
    name: 'Workforce Dashboards',
    desc: 'Live headcount visibility, operational shift coverage, SLA adherence, and capacity tracking.',
    badge: 'Visibility',
  },
  {
    name: 'Paperless Digital HR',
    desc: 'Digital e-signatures, secure document collection, and zero-friction compliance onboarding.',
    badge: 'Digital Ops',
  },
  {
    name: 'Process Automation',
    desc: 'Automated notification pipelines, status updates, escalation matrices, and SLA triggers.',
    badge: 'Automation',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState('hr');
  const activePillar = pillars.find((p) => p.id === active) || pillars[0];
  const ActiveIcon = activePillar.icon;

  return (
    <section id="services" className="py-20 sm:py-28 bg-tn-ivory relative overflow-hidden border-b border-tn-mist">
      {/* Ambient background light pools */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[350px] bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-tn-beige/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-mist rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tn-coral" />
            <span className="text-xs font-bold text-tn-charcoal tracking-widest uppercase">
              Core Solutions
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-tn-charcoal mb-4">
            One Partner.{' '}
            <span className="text-tn-coral">Your People &amp; Operations.</span>
          </h2>

          <p className="text-tn-slate text-base sm:text-lg leading-relaxed">
            From hiring your initial core team to managing an expanding global workforce and supporting daily operations, TaskNera delivers integrated, modular solutions that scale with you.
          </p>
        </div>

        {/* 5 Pillar Quick Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 scroll-reveal" style={{ transitionDelay: '0.05s' }}>
          {pillars.map((p) => {
            const isSelected = active === p.id;
            const IconComponent = p.icon;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p.id)}
                className={`text-left rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between hover-lift cursor-pointer ${
                  isSelected
                    ? 'bg-white border-tn-coral shadow-lg ring-2 ring-tn-coral/30 -translate-y-1'
                    : 'bg-white/80 border-tn-mist hover:border-tn-coral/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-tn-coral text-tn-charcoal border-tn-coral'
                        : 'bg-tn-ivory text-tn-charcoal border-tn-mist'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {p.badge && (
                      <span className="text-[10px] font-bold text-tn-charcoal bg-tn-coral/20 rounded-full px-2 py-0.5 border border-tn-coral/30">
                        {p.id === 'va' ? 'Human VAs' : 'VCS'}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-tn-charcoal mb-1">
                    {p.label}
                  </h3>
                  <p className="text-xs text-tn-slate leading-relaxed">
                    {p.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-tn-mist flex items-center justify-between w-full">
                  <span className={`text-xs font-bold ${isSelected ? 'text-tn-coral' : 'text-tn-slate'}`}>
                    {isSelected ? 'Viewing Scope' : 'Explore'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-tn-coral translate-x-1' : 'text-tn-slate'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className="grid lg:grid-cols-12 gap-6 scroll-reveal mb-20" style={{ transitionDelay: '0.15s' }}>
          
          {/* Active Pillar Showcase (Left - 5 Cols, Charcoal Anchor) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#242326] via-[#242326] to-[#1A191B] rounded-3xl p-7 sm:p-9 text-[#FFF8F0] shadow-2xl flex flex-col justify-between relative overflow-hidden border border-tn-mist/20">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-tn-coral shadow-inner">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                {activePillar.badge && (
                  <span className="text-xs font-bold bg-tn-coral text-tn-charcoal px-3 py-1 rounded-full shadow-sm">
                    {activePillar.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FFF8F0] mb-2">
                {activePillar.label}
              </h3>
              <div className="text-tn-coral text-sm font-semibold mb-4">
                {activePillar.tagline}
              </div>
              <p className="text-[#FFF8F0]/80 text-sm leading-relaxed mb-6 font-normal">
                {activePillar.highlight}
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-bold text-[#FFF8F0]/60 uppercase tracking-widest">
                  Included Capabilities:
                </div>
                {activePillar.services.map((svc) => (
                  <div key={svc} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-tn-coral/20 text-tn-coral flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[#FFF8F0]/90 text-sm font-medium">{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <Link
                href={activePillar.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-tn-coral hover:text-[#FFF8F0] transition-all group"
              >
                <span>Full details &amp; use cases</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                className="bg-tn-coral text-tn-charcoal hover:bg-[#F28B6A] text-xs font-bold px-5 py-2.5 rounded-full transition-colors text-center w-full sm:w-auto shadow-md"
              >
                Inquire for {activePillar.label.split(' ')[0]}
              </Link>
            </div>
          </div>

          {/* All 5 Solution Breakdown Cards (Right - 7 Cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => {
              const isCurrent = active === p.id;
              const IconComp = p.icon;
              return (
                <div
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`cursor-pointer rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white border-tn-coral shadow-lg ring-2 ring-tn-coral/30'
                      : 'bg-white border-tn-mist hover:border-tn-coral/50 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-tn-ivory border border-tn-mist flex items-center justify-center text-tn-charcoal">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] text-tn-slate font-semibold bg-tn-ivory border border-tn-mist px-2 py-0.5 rounded-md">
                        {p.services.length} services
                      </span>
                    </div>

                    <h4 className="font-bold text-tn-charcoal text-base mb-1">
                      {p.label}
                    </h4>
                    <p className="text-xs text-tn-slate mb-4 leading-relaxed">
                      {p.tagline}
                    </p>

                    <div className="space-y-1.5">
                      {p.services.slice(0, 3).map((item) => (
                        <div key={item} className="text-xs text-tn-charcoal flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-tn-coral flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-tn-mist flex items-center justify-between">
                    <Link
                      href={p.href}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-tn-charcoal hover:text-tn-coral flex items-center gap-1"
                    >
                      <span>Dedicated Page</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[11px] text-tn-slate font-medium">Click to preview</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================================================== */}
        {/* TECHNOLOGY LAYER (Charcoal Anchor Background)       */}
        {/* ================================================== */}
        <div id="technology" className="bg-[#242326] rounded-3xl p-8 sm:p-12 text-[#FFF8F0] shadow-2xl relative overflow-hidden border border-tn-mist/20 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-tn-coral animate-pulse" />
              <span className="text-xs font-bold text-[#FFF8F0] tracking-widest uppercase">
                Digital &amp; Technology Layer
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#FFF8F0] mb-3 leading-tight">
              HR Technology &amp; Digital Solutions
            </h3>
            <p className="text-[#FFF8F0]/80 text-base leading-relaxed">
              TaskNera embeds a modern, flexible technology layer to power our delivery. We deploy our proprietary HireIQ matching intelligence for precision JD and CV alignment, integrated HRMS portals, and real-time workforce visibility dashboards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techLayerItems.map((tech) => (
              <div
                key={tech.name}
                className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-tn-coral/50 hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border text-tn-coral bg-tn-coral/15 border-tn-coral/30">
                    {tech.badge}
                  </span>
                  <span className="text-[#FFF8F0]/40 text-[10px] uppercase font-semibold">Capability</span>
                </div>
                <div className="font-bold text-[#FFF8F0] text-base mb-1.5 group-hover:text-tn-coral transition-colors">
                  {tech.name}
                </div>
                <p className="text-[#FFF8F0]/70 text-xs leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8F0]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-tn-coral flex-shrink-0" />
              <span>
                <strong className="text-[#FFF8F0]">The Human + Tech Advantage:</strong> Technology powers speed and accuracy — while our vetted human specialists manage every relationship.
              </span>
            </div>
            <Link
              href="/#contact"
              className="text-tn-coral hover:text-[#FFF8F0] font-bold flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Discuss Technology Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}