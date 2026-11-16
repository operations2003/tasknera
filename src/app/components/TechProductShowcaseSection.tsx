'use client';
import React from 'react';
import Link from 'next/link';
import { ScanSearch, LayoutDashboard, Check, ArrowRight } from 'lucide-react';

const hireIqFeatures = [
  'AI-assisted resume parsing',
  'Job description intelligence',
  'Deterministic 100-point scoring',
  'Mandatory requirement validation',
  'Evidence-backed candidate evaluation',
  'Candidate comparison',
  'Recruitment analytics',
];

const hrmsFeatures = [
  'Employee records',
  'Attendance & leave',
  'Workforce management',
  'Task tracking',
  'HR operations workflows',
  'Organizational dashboards',
];

const hrmsModules = [
  { name: 'Employee records', desc: 'Digital profiles and documents' },
  { name: 'Attendance & leave', desc: 'Balances, policies and approvals' },
  { name: 'Workforce management', desc: 'Teams, shifts and capacity' },
  { name: 'Task tracking', desc: 'Assignment and progress' },
  { name: 'HR operations', desc: 'Requests and workflows' },
  { name: 'Organizational dashboards', desc: 'Headcount and structure' },
];

export default function TechProductShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-28">
      {/* Subtle grain texture overlay */}
      <div
        className="grain pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-[54ch]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Technology &amp; products
          </span>
          <h2 className="mt-4 font-heading text-[clamp(1.85rem,3.7vw,3rem)] font-bold leading-[1.06]">
            Our own platforms, built inside real delivery.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-white/60">
            HireIQ and TaskNera HRMS were built to solve problems we run into every week with clients. They are available to your team directly — or embedded inside a TaskNera engagement.
          </p>
        </div>

        {/* Product 1: HireIQ */}
        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-brand-teal">
                <ScanSearch className="h-5 w-5" />
              </span>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/45">
                HireIQ · Recruitment intelligence
              </span>
            </div>

            <h3 className="mt-5 font-heading text-[clamp(1.5rem,2.6vw,2.15rem)] font-bold leading-[1.12]">
              Recruit smarter. Evaluate better. Hire with confidence.
            </h3>

            <p className="mt-4 max-w-[52ch] text-[14.5px] leading-[1.75] text-white/60">
              HireIQ evaluates resumes against the job description and returns a deterministic 100-point score with citations from the candidate&apos;s own resume — so every shortlist is explainable.
            </p>

            <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {hireIqFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-[13px] text-white/75">
                  <Check className="mt-[3px] h-3.5 w-3.5 flex-none text-brand-teal" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/services/hireiq"
                className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-2.5 rounded-[3px] hover:bg-white/90 text-[13px] transition-colors shadow-sm"
              >
                <span>Explore HireIQ</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* HireIQ Visual Mockup */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs text-white/80">HireIQ Scorecard #TN-4091</span>
              </div>
              <span className="font-mono text-xs text-brand-teal font-semibold">94.5 / 100 Calibrated</span>
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex justify-between text-xs text-white/70">
                <span>Role: Senior Full-Stack Engineer</span>
                <span className="text-emerald-300">Mandatory Skills: 100%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-brand-teal rounded-full w-[94.5%]" />
              </div>
              <p className="text-[12px] text-white/50 pt-2 leading-relaxed">
                &ldquo;Candidate exhibits 6+ years React and Node.js with verified AWS microservices architecture. Cited in CV page 2, line 14.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-white/10 lg:mt-20" />

        {/* Product 2: TaskNera HRMS */}
        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div className="lg:order-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-brand-teal">
                <LayoutDashboard className="h-5 w-5" />
              </span>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/45">
                TaskNera HRMS · Workforce management
              </span>
            </div>

            <h3 className="mt-5 font-heading text-[clamp(1.5rem,2.6vw,2.15rem)] font-bold leading-[1.12]">
              Manage your people. Simplify your operations.
            </h3>

            <p className="mt-4 max-w-[52ch] text-[14.5px] leading-[1.75] text-white/60">
              One place for employee records, attendance, leave, tasks and organizational visibility — so HR stops running on spreadsheets and manual queries.
            </p>

            <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {hrmsFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-[13px] text-white/75">
                  <Check className="mt-[3px] h-3.5 w-3.5 flex-none text-brand-teal" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/services/hrms"
                className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-2.5 rounded-[3px] hover:bg-white/90 text-[13px] transition-colors shadow-sm"
              >
                <span>Explore TaskNera HRMS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* HRMS Coverage Card */}
          <div className="lg:order-1 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/40">
              What the platform covers
            </p>
            <div className="mt-5 flex flex-col divide-y divide-white/10">
              {hrmsModules.map((item, idx) => (
                <div key={item.name} className="flex items-center justify-between gap-4 py-3.5">
                  <div>
                    <p className="text-[13.5px] font-semibold text-white/90">{item.name}</p>
                    <p className="text-[11.5px] text-white/40">{item.desc}</p>
                  </div>
                  <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-white/30">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
