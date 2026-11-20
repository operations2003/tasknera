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

const pillarSolutions = solutionsList.slice(0, 2);
const coreSolutions = solutionsList.slice(2, 5);
const platformSolutions = solutionsList.slice(5, 7);

function ServiceCard({ sol, featured = false }: { sol: (typeof solutionsList)[0]; featured?: boolean }) {
  const Icon = sol.icon;

  return (
    <Link
      href={`/services/${sol.slug}`}
      className={`group relative flex h-full flex-col rounded-2xl border border-[#E7E2DA] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy hover:bg-brand-navy hover:shadow-[0_26px_50px_-24px_rgba(20,17,15,0.45)] ${
        featured ? 'lg:p-8' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-[#FAF3EC] border border-[#EBD9CC] text-brand-blue transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-brand-teal">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full bg-[#FAF3EC] px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-brand-blue font-mono transition-colors group-hover:bg-white/10 group-hover:text-brand-teal">
          {sol.tag}
        </span>
      </div>

      <h3 className="mt-6 font-heading text-[21px] sm:text-[23px] font-medium leading-snug tracking-[-0.015em] text-brand-navy transition-colors group-hover:text-white">
        {sol.name}
      </h3>

      <p className="mt-3 text-[14px] leading-relaxed text-brand-ink/70 transition-colors group-hover:text-white/70">
        {sol.summary}
      </p>

      <ul className="mt-6 flex flex-col gap-2.5 border-t border-brand-navy/[0.08] pt-6 group-hover:border-white/10">
        {sol.capabilities.map((cap) => (
          <li
            key={cap}
            className="flex items-start gap-2.5 text-[12.5px] leading-snug text-brand-ink/75 transition-colors group-hover:text-white/70"
          >
            <Check className="mt-[3px] h-3.5 w-3.5 flex-none text-brand-blue group-hover:text-brand-teal" />
            <span>{cap}</span>
          </li>
        ))}
      </ul>

      <span className="mt-auto flex items-center gap-2 pt-7 text-[13px] font-semibold text-brand-blue transition-colors group-hover:text-brand-teal">
        <span>Explore solution</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section id="solutions" className="relative bg-brand-mist py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Our core solutions
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-navy tracking-tight">
              Modular disciplines. One accountable partner.
            </h2>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-brand-ink/70">
              From hiring your first core team to managing a distributed workforce and supporting daily operations, TaskNera delivers modular solutions that scale with you.
            </p>
          </div>

          <div className="mb-1 flex-none flex flex-wrap items-center gap-3.5 sm:gap-5 text-[13px] font-semibold">
            <Link
              href="/business-support"
              className="text-brand-blue hover:underline inline-flex items-center gap-1.5"
            >
              <span>Business Support Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <span className="text-brand-ink/25 hidden sm:inline">|</span>
            <Link
              href="/services"
              className="text-brand-blue hover:underline inline-flex items-center gap-1.5"
            >
              <span>View all solutions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Tier 1: Two Primary Disciplines */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {pillarSolutions.map((sol) => (
            <ServiceCard key={sol.slug} sol={sol} featured={true} />
          ))}
        </div>

        {/* Tier 2: Operational Capacity & Engineering (3 Balanced Columns) */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {coreSolutions.map((sol) => (
            <ServiceCard key={sol.slug} sol={sol} />
          ))}
        </div>

        {/* Tier 3: Proprietary Platforms (2 Balanced Columns) */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {platformSolutions.map((sol) => (
            <ServiceCard key={sol.slug} sol={sol} featured={true} />
          ))}
        </div>

      </div>
    </section>
  );
}
