import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  ScanSearch,
  LayoutDashboard,
  Check,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'Technology & Platforms | HireIQ & TaskNera HRMS',
  description:
    'Explore TaskNera proprietary technology platforms, featuring HireIQ AI candidate screening intelligence and TaskNera HRMS unified workforce management.',
};

const hireIqFeatures = [
  'AI-assisted resume parsing',
  'Job description intelligence',
  'Deterministic 100-point candidate scoring',
  'Mandatory requirement validation',
  'Evidence-backed candidate evaluation',
  'Candidate comparison matrix',
  'Recruitment analytics & pipeline velocity',
];

const hrmsModules = [
  { name: 'Employee records', desc: 'Digital profiles, document vaults and contractual records' },
  { name: 'Attendance & leave', desc: 'Real-time shift logs, balance tracking and approval flows' },
  { name: 'Workforce management', desc: 'Teams, shift rotations, holiday calendars and capacity' },
  { name: 'Task tracking', desc: 'Delegated task assignment, priority tags and daily logs' },
  { name: 'HR operations', desc: 'Structured employee requests, queries and asset issuance' },
  { name: 'Organizational dashboards', desc: 'Departmental headcounts, growth rates and KPI reporting' },
];

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF7F2]">
        
        {/* Technology Hero */}
        <section className="relative overflow-hidden bg-brand-navy text-white py-20 lg:py-24">
          <div
            className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Proprietary software
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight">
              Our own platforms, built inside real delivery.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              HireIQ and TaskNera HRMS were built to solve problems we run into every week with clients. They are available to your team directly — or embedded inside a TaskNera engagement.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#hireiq"
                className="bg-white text-brand-navy font-semibold px-6 py-2.5 rounded-[3px] hover:bg-white/90 text-[13px] transition-colors shadow-sm"
              >
                HireIQ Platform
              </a>
              <a
                href="#hrms"
                className="border border-white/20 text-white font-medium px-6 py-2.5 rounded-[3px] hover:bg-white/10 text-[13px] transition-colors"
              >
                TaskNera HRMS
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: HireIQ Deep Dive */}
        <section id="hireiq" className="py-20 lg:py-28 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-navy/[0.05] text-brand-blue">
                    <ScanSearch className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue font-mono">
                    Recruitment Intelligence
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-3xl sm:text-4xl text-brand-navy font-bold leading-tight">
                  Recruit smarter. Evaluate better. Hire with confidence.
                </h2>

                <p className="mt-4 text-[15px] leading-relaxed text-brand-ink/75">
                  HireIQ evaluates resumes against the job description and returns a deterministic 100-point score with citations from the candidate&apos;s own resume — so every shortlist is explainable rather than opaque.
                </p>

                <div className="mt-8 space-y-3">
                  {hireIqFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-[13.5px] text-brand-ink/80">
                      <Check className="h-4 w-4 text-brand-blue mt-0.5 flex-none" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex items-center gap-4">
                  <Link
                    href="/services/hireiq"
                    className="bg-brand-navy text-white font-medium px-6 py-3 rounded-[3px] hover:bg-black text-[13.5px] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Explore HireIQ details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-brand-navy/20 text-brand-navy font-medium px-6 py-3 rounded-[3px] hover:bg-brand-mist text-[13.5px] transition-colors"
                  >
                    Request demo
                  </Link>
                </div>
              </div>

              {/* HireIQ Simulated Card */}
              <div className="rounded-2xl border border-brand-navy/12 bg-brand-mist p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-brand-navy/10">
                  <span className="font-mono text-[12px] font-bold text-brand-navy">HireIQ // Scorecard Matrix</span>
                  <span className="bg-brand-navy text-white text-[11px] px-2.5 py-0.5 rounded font-mono font-semibold">
                    100-Pt Calibrated
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-[13px] font-medium text-brand-navy mb-1.5">
                      <span>Candidate Evaluation Score</span>
                      <span className="text-brand-blue font-bold">94.5 / 100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-brand-navy/10 overflow-hidden">
                      <div className="h-full bg-brand-blue rounded-full w-[94.5%]" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-brand-navy/10 bg-white p-4 space-y-2 text-[12.5px] text-brand-ink/75 leading-relaxed">
                    <p className="font-semibold text-brand-navy">Citation Evidence:</p>
                    <p>
                      &ldquo;Led infrastructure migration across 14 services to Kubernetes on AWS EKS; managed cross-functional squads across 3 regions.&rdquo;
                    </p>
                    <p className="text-[11px] text-brand-ink/40 font-mono">Matched against: JD Mandatory Requirement #2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: TaskNera HRMS Deep Dive */}
        <section id="hrms" className="py-20 lg:py-28 bg-brand-mist border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="lg:order-2">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-navy/[0.05] text-brand-blue">
                    <LayoutDashboard className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue font-mono">
                    Workforce Management
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-3xl sm:text-4xl text-brand-navy font-bold leading-tight">
                  Manage your people. Simplify your operations.
                </h2>

                <p className="mt-4 text-[15px] leading-relaxed text-brand-ink/75">
                  One place for employee records, attendance, leave, tasks and organizational visibility — so HR stops running on spreadsheets and manual queries.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-2.5 text-[13.5px] text-brand-ink/80">
                    <Check className="h-4 w-4 text-brand-blue mt-0.5 flex-none" />
                    <span>Centralized employee vault with digital contracts and identity records.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13.5px] text-brand-ink/80">
                    <Check className="h-4 w-4 text-brand-blue mt-0.5 flex-none" />
                    <span>Real-time attendance tracking with geolocation and shift scheduling.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13.5px] text-brand-ink/80">
                    <Check className="h-4 w-4 text-brand-blue mt-0.5 flex-none" />
                    <span>Zero-error leave approvals and automated payroll calculation exports.</span>
                  </div>
                </div>

                <div className="mt-9 flex items-center gap-4">
                  <Link
                    href="/services/hrms"
                    className="bg-brand-navy text-white font-medium px-6 py-3 rounded-[3px] hover:bg-black text-[13.5px] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Explore TaskNera HRMS</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-brand-navy/20 text-brand-navy font-medium px-6 py-3 rounded-[3px] hover:bg-white text-[13.5px] transition-colors"
                  >
                    Schedule walkthrough
                  </Link>
                </div>
              </div>

              {/* HRMS Coverage List */}
              <div className="lg:order-1 rounded-2xl border border-brand-navy/10 bg-white p-6 sm:p-8 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ink/40">
                  What the platform covers
                </p>
                <div className="mt-6 flex flex-col divide-y divide-brand-navy/10">
                  {hrmsModules.map((item, idx) => (
                    <div key={item.name} className="py-3.5 flex items-center justify-between">
                      <div>
                        <h4 className="text-[14px] font-semibold text-brand-navy">{item.name}</h4>
                        <p className="text-[12px] text-brand-ink/60">{item.desc}</p>
                      </div>
                      <span className="font-mono text-[11px] text-brand-blue font-semibold">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
