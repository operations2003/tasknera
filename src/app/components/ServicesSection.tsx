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
  Check,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

const pillars = [
  {
    id: 'hr',
    icon: Building2,
    label: 'HR & People Operations',
    tagline: 'Your extended, high-compliance HR team.',
    href: '/hr-workforce-solutions',
    color: 'text-[#704A4B]',
    bg: 'bg-[#E5BDB4]/25',
    border: 'border-[#DED3C7]',
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
    color: 'text-[#754E4E]',
    bg: 'bg-[#8E7D6E]/25',
    border: 'border-[#DED3C7]',
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
    color: 'text-[#704A4B]',
    bg: 'bg-[#E5BDB4]/25',
    border: 'border-[#DED3C7]',
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
    color: 'text-[#754E4E]',
    bg: 'bg-[#8E7D6E]/25',
    border: 'border-[#DED3C7]',
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
    color: 'text-[#704A4B]',
    bg: 'bg-[#E5BDB4]/25',
    border: 'border-[#DED3C7]',
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
    accent: 'text-[#F8F4ED] bg-[#E5BDB4]/25 border-[#E5BDB4]/40',
  },
  {
    name: 'HRMS Platform',
    desc: 'Centralized core HR management for digital records, leave balances, compliance logs, and documentation.',
    badge: 'Core Platform',
    accent: 'text-[#F8F4ED] bg-[#8E7D6E]/30 border-[#DED3C7]/40',
  },
  {
    name: 'Self-Service Portals',
    desc: 'Employee and management self-service portals for frictionless requests, payroll slips, and approvals.',
    badge: 'Portal',
    accent: 'text-[#F8F4ED] bg-[#E5BDB4]/25 border-[#E5BDB4]/40',
  },
  {
    name: 'AI-Assisted Sourcing',
    desc: 'Augmented candidate sourcing pipelines and competency screening workflows across global talent pools.',
    badge: 'AI Layer',
    accent: 'text-[#F8F4ED] bg-[#8E7D6E]/30 border-[#DED3C7]/40',
  },
  {
    name: 'Recruitment Analytics',
    desc: 'Real-time time-to-fill, source attribution, pipeline conversion rates, and diversity metrics.',
    badge: 'Analytics',
    accent: 'text-[#F8F4ED] bg-[#E5BDB4]/25 border-[#E5BDB4]/40',
  },
  {
    name: 'Workforce Dashboards',
    desc: 'Live headcount visibility, operational shift coverage, SLA adherence, and capacity tracking.',
    badge: 'Visibility',
    accent: 'text-[#F8F4ED] bg-[#8E7D6E]/30 border-[#DED3C7]/40',
  },
  {
    name: 'Paperless Digital HR',
    desc: 'Digital e-signatures, secure document collection, and zero-friction compliance onboarding.',
    badge: 'Digital Ops',
    accent: 'text-[#F8F4ED] bg-[#E5BDB4]/25 border-[#E5BDB4]/40',
  },
  {
    name: 'Process Automation',
    desc: 'Automated notification pipelines, status updates, escalation matrices, and SLA triggers.',
    badge: 'Automation',
    accent: 'text-[#F8F4ED] bg-[#8E7D6E]/30 border-[#DED3C7]/40',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState('hr');
  const activePillar = pillars.find((p) => p.id === active) || pillars[0];
  const ActiveIcon = activePillar.icon;

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F3ECE4] relative overflow-hidden border-b border-[#DED3C7]">
      {/* Ambient background light pools */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[350px] bg-[#E5BDB4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-[#8E7D6E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E5BDB4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-[#E5BDB4]/30 border border-[#DED3C7] rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#704A4B]" />
            <span className="text-xs font-bold text-[#704A4B] tracking-widest uppercase">
              Core Solutions
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-[#423535] mb-4">
            One Partner.{' '}
            <span className="text-[#704A4B]">Your People &amp; Operations.</span>
          </h2>

          <p className="text-[#625F5F] text-base sm:text-lg leading-relaxed">
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
                    ? 'bg-[#FAF7F2] border-[#704A4B] shadow-lg ring-2 ring-[#704A4B]/20 -translate-y-1'
                    : 'bg-[#FAF7F2] border-[#DED3C7] hover:border-[#704A4B]/50 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center ${p.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {p.badge && (
                      <span className="text-[10px] font-bold text-[#704A4B] bg-[#E5BDB4]/30 rounded-full px-2 py-0.5 border border-[#DED3C7]">
                        {p.id === 'va' ? 'Human VAs' : 'VCS'}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#423535] mb-1">
                    {p.label}
                  </h3>
                  <p className="text-xs text-[#625F5F] leading-relaxed">
                    {p.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#DED3C7] flex items-center justify-between w-full">
                  <span className={`text-xs font-bold ${isSelected ? 'text-[#704A4B]' : 'text-[#625F5F]'}`}>
                    {isSelected ? 'Viewing Scope' : 'Explore'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#704A4B] translate-x-1' : 'text-[#625F5F]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className="grid lg:grid-cols-12 gap-6 scroll-reveal mb-20" style={{ transitionDelay: '0.15s' }}>
          
          {/* Active Pillar Showcase (Left - 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#704A4B] to-[#593A3B] rounded-3xl p-7 sm:p-9 text-[#F8F4ED] shadow-xl flex flex-col justify-between relative overflow-hidden border border-[#DED3C7]/30">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#E5BDB4] shadow-inner">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                {activePillar.badge && (
                  <span className="text-xs font-bold bg-[#E5BDB4] text-[#423535] px-3 py-1 rounded-full shadow-sm">
                    {activePillar.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F8F4ED] mb-2">
                {activePillar.label}
              </h3>
              <div className="text-[#E5BDB4] text-sm font-semibold mb-4">
                {activePillar.tagline}
              </div>
              <p className="text-[#F8F4ED]/80 text-sm leading-relaxed mb-6 font-normal">
                {activePillar.highlight}
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-bold text-[#F8F4ED]/60 uppercase tracking-widest">
                  Included Capabilities:
                </div>
                {activePillar.services.map((svc) => (
                  <div key={svc} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#E5BDB4]/25 text-[#E5BDB4] flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[#F8F4ED]/90 text-sm font-medium">{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <Link
                href={activePillar.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E5BDB4] hover:text-[#F8F4ED] transition-all group"
              >
                <span>Full details &amp; use cases</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                className="bg-[#FAF7F2] text-[#704A4B] hover:bg-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors border border-[#DED3C7] text-center w-full sm:w-auto shadow-sm"
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
                      ? 'bg-[#FAF7F2] border-[#704A4B] shadow-lg ring-2 ring-[#704A4B]/20'
                      : 'bg-[#FAF7F2] border-[#DED3C7] hover:border-[#704A4B]/50 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center ${p.color}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] text-muted-foreground font-semibold bg-muted px-2 py-0.5 rounded-md">
                        {p.services.length} services
                      </span>
                    </div>

                    <h4 className="font-bold text-foreground text-base mb-1">
                      {p.label}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                      {p.tagline}
                    </p>

                    <div className="space-y-1.5">
                      {p.services.slice(0, 3).map((item) => (
                        <div key={item} className="text-xs text-[#423535] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#704A4B] flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#DED3C7] flex items-center justify-between">
                    <Link
                      href={p.href}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-[#704A4B] hover:text-[#593A3B] flex items-center gap-1"
                    >
                      <span>Dedicated Page</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[11px] text-[#625F5F] font-medium">Click to preview</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================================================== */}
        {/* TECHNOLOGY LAYER                                  */}
        {/* ================================================== */}
        <div id="technology" className="bg-[#704A4B] rounded-3xl p-8 sm:p-12 text-[#F8F4ED] shadow-xl relative overflow-hidden border border-[#DED3C7]/30 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5BDB4]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8E7D6E]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E5BDB4] animate-pulse" />
              <span className="text-xs font-bold text-[#F8F4ED] tracking-widest uppercase">
                Digital &amp; Technology Layer
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F8F4ED] mb-3 leading-tight">
              HR Technology &amp; Digital Solutions
            </h3>
            <p className="text-[#F8F4ED]/80 text-base leading-relaxed">
              TaskNera embeds a modern, flexible technology layer to power our delivery. We deploy our proprietary HireIQ matching intelligence for precision JD and CV alignment, integrated HRMS portals, and real-time workforce visibility dashboards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techLayerItems.map((tech) => (
              <div
                key={tech.name}
                className="bg-white/5 rounded-2xl p-5 border border-white/15 hover:border-white/30 hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${tech.accent}`}>
                    {tech.badge}
                  </span>
                  <span className="text-[#F8F4ED]/40 text-[10px] uppercase font-semibold">Capability</span>
                </div>
                <div className="font-bold text-[#F8F4ED] text-base mb-1.5 group-hover:text-[#E5BDB4] transition-colors">
                  {tech.name}
                </div>
                <p className="text-[#F8F4ED]/70 text-xs leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F4ED]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E5BDB4] flex-shrink-0" />
              <span>
                <strong className="text-[#F8F4ED]">The Human + Tech Advantage:</strong> Technology powers speed and accuracy — while our vetted human specialists manage every relationship.
              </span>
            </div>
            <Link
              href="/#contact"
              className="text-[#E5BDB4] hover:text-[#F8F4ED] font-bold flex items-center gap-1.5 flex-shrink-0"
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