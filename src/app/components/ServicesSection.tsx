'use client';
import React from 'react';
import Link from 'next/link';
import {
  Users,
  Search,
  Layers,
  Bot,
  Headphones,
  CodeXml,
  ScanSearch,
  LayoutDashboard,
  Check,
  ArrowRight,
} from 'lucide-react';

const solutionsList = [
  {
    slug: 'hr-operations',
    name: 'HR & People Operations',
    tag: 'Core service',
    summary:
      'HR outsourcing, employee lifecycle administration, HR documentation, HRMS implementation and payroll coordination from one accountable team.',
    icon: Users,
    capabilities: [
      'HR outsourcing & lifecycle management',
      'HR documentation, handbooks & policies',
      'Payroll coordination & compliance support',
    ],
  },
  {
    slug: 'talent-acquisition',
    name: 'Talent Acquisition & Recruitment',
    tag: 'Core service',
    summary:
      'Permanent recruitment, contract hiring, executive search, recruitment process outsourcing, technical hiring and bulk recruitment.',
    icon: Search,
    capabilities: [
      'Permanent & executive hiring',
      'Contract & technical recruitment pods',
      'Zero candidate fees ethical guarantee',
    ],
  },
  {
    slug: 'workforce-solutions',
    name: 'Workforce Solutions',
    tag: 'Flexible capacity',
    summary:
      'Contract staffing, dedicated pods and managed teams deployed against defined business demand and timezones.',
    icon: Layers,
    capabilities: [
      'Contract staffing for project demand',
      'Dedicated remote operational pods',
      'Managed teams with supervised SLAs',
    ],
  },
  {
    slug: 'virtual-assistants',
    name: 'Virtual Assistant & Business Support',
    tag: 'Operational leverage',
    summary:
      'Executive assistance, administrative support, calendar, inbox, research and back-office management for busy leadership.',
    icon: Bot,
    capabilities: [
      'Executive & administrative assistance',
      'Calendar, inbox & scheduling triage',
      'Desk research & presentation support',
    ],
  },
  {
    slug: 'customer-support',
    name: 'Virtual Customer Support',
    tag: '24/7 care',
    summary:
      'Omnichannel inbound, outbound, live chat, email and helpdesk ticketing coverage delivered with agreed SLAs.',
    icon: Headphones,
    capabilities: [
      'Omnichannel live chat & email support',
      'Ticketing & CRM queue management',
      '24/7 multi-timezone SLA coverage',
    ],
  },
  {
    slug: 'technology',
    name: 'Technology & Software Development',
    tag: 'Engineering',
    summary:
      'Full-stack web application development, workflow automation, API integration and technical team deployment.',
    icon: CodeXml,
    capabilities: [
      'Full-stack Next.js & React web apps',
      'Operational workflows & API pipelines',
      'Dedicated engineering pods',
    ],
  },
  {
    slug: 'hireiq',
    name: 'HireIQ',
    tag: 'Platform',
    summary:
      'AI recruitment intelligence platform with deterministic 100-point candidate scoring and evidence-backed evaluation.',
    icon: ScanSearch,
    capabilities: [
      'AI-assisted resume & JD parsing',
      'Deterministic 100-point rubric',
      'Evidence-backed candidate ranking',
    ],
  },
  {
    slug: 'hrms',
    name: 'TaskNera HRMS',
    tag: 'Platform',
    summary:
      'Unified workforce platform for employee master records, attendance, leave approvals, tasks and organizational visibility.',
    icon: LayoutDashboard,
    capabilities: [
      'Digital employee master vault',
      'Real-time attendance & shift workflows',
      'Leave balances & org dashboards',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="solutions" className="relative bg-brand-mist py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Our core solutions
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-navy tracking-tight">
              Eight disciplines. One accountable partner.
            </h2>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-brand-ink/70">
              From hiring your first core team to managing a distributed workforce and supporting daily operations, TaskNera delivers modular solutions that scale with you.
            </p>
          </div>

          <Link
            href="/services"
            className="mb-1 flex-none text-[13px] font-semibold text-brand-blue hover:underline inline-flex items-center gap-1.5"
          >
            <span>View all solutions</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 8 Solutions Grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {solutionsList.map((sol, idx) => {
            const Icon = sol.icon;
            const isLarge = idx < 2 || sol.tag === 'Platform';

            return (
              <div
                key={sol.slug}
                className={isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}
              >
                <Link
                  href={`/services/${sol.slug}`}
                  className={`group flex h-full flex-col rounded-2xl border border-brand-navy/10 bg-white p-6 transition-all duration-300 hover:border-brand-navy hover:bg-brand-navy hover:shadow-[0_24px_50px_-30px_rgba(16,28,53,0.5)] ${
                    idx < 2 ? 'lg:p-7' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-navy/[0.05] text-brand-blue transition-colors duration-300 group-hover:bg-white/10 group-hover:text-brand-teal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-brand-navy/35 transition-colors group-hover:text-white/35">
                      {sol.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[16.5px] font-bold leading-snug text-brand-navy transition-colors group-hover:text-white">
                    {sol.name}
                  </h3>

                  <p className="mt-2.5 text-[13px] leading-relaxed text-brand-ink/60 transition-colors group-hover:text-white/60">
                    {sol.summary}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2">
                    {sol.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-[12px] leading-snug text-brand-ink/65 transition-colors group-hover:text-white/60"
                      >
                        <Check className="mt-[3px] h-3 w-3 flex-none text-brand-blue group-hover:text-brand-teal" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto flex items-center gap-2 pt-6 text-[12.5px] font-semibold text-brand-blue transition-colors group-hover:text-brand-teal">
                    <span>Explore solution</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
