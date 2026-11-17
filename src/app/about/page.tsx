'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  ShieldCheck,
} from 'lucide-react';
import { companyInfo } from '@/lib/base44_content';

const values = [
  {
    title: 'Service before shortcuts',
    desc: 'We never sacrifice screening quality, candidate validation, or compliance accuracy for short-term transactional speed.',
  },
  {
    title: 'People matter',
    desc: 'Candidates and client team members are professionals, not commodities. We uphold strict zero-fee policies for job seekers.',
  },
  {
    title: 'Transparency by default',
    desc: 'No hidden recruiter markups, no vague progress reports. We operate with open scorecards and documented accountability.',
  },
  {
    title: 'Growth through reliability',
    desc: 'Sustainable company expansion comes from delivering dependable daily execution that partners trust for years.',
  },
];

const pillars = [
  {
    title: 'People',
    desc: 'Permanent recruitment, executive search, contract staffing and turnkey HR operations.',
    icon: Users,
  },
  {
    title: 'Technology',
    desc: 'Proprietary HireIQ screening intelligence and TaskNera HRMS workforce platform.',
    icon: ScanSearch,
  },
  {
    title: 'Operations',
    desc: 'Dedicated executive virtual assistance, calendar management, and operational SOP execution.',
    icon: Bot,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF7F2]">
        
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-navy text-white py-20 lg:py-24">
          <div
            className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
              About TaskNera
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight">
              A partner for the operational side of growth.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              We help ambitious businesses build dependable teams, streamline HR compliance, and scale operations without friction through integrated people, technology, and execution.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Our origins
                </span>
                <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-brand-navy font-bold leading-tight">
                  Why we built TaskNera
                </h2>
                
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-brand-ink/75">
                  <p>
                    Most businesses struggle with an agonizing fragmentation in their operational stack. When founders need to hire, they talk to transactional agencies. When they need payroll or HR policies, they scramble for ad-hoc consultants. When executives drown in calendar chaos, they search freelance portals.
                  </p>
                  <p>
                    TaskNera was created to solve this fragmentation. Founded by HR leadership with deep expertise across talent acquisition, workforce deployment, and people operations, TaskNera operates as one integrated partner that handles talent, HR governance, virtual support, and software systems.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
                  <div>
                    <span className="block font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
                      40%+
                    </span>
                    <span className="text-xs font-medium text-brand-ink/65">
                      Cost efficiency vs traditional agencies
                    </span>
                  </div>
                  <div className="h-9 w-px bg-brand-navy/15 hidden sm:block" />
                  <div>
                    <span className="block font-heading text-2xl sm:text-3xl font-bold text-brand-blue">
                      3–5 Days
                    </span>
                    <span className="text-xs font-medium text-brand-ink/65">
                      Vetted shortlist turnaround SLA
                    </span>
                  </div>
                  <div className="h-9 w-px bg-brand-navy/15 hidden sm:block" />
                  <div>
                    <span className="block font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
                      100-Pt
                    </span>
                    <span className="text-xs font-medium text-brand-ink/65">
                      Deterministic HireIQ rubric
                    </span>
                  </div>
                </div>
              </div>

              {/* Leadership Spotlight Box */}
              <div className="rounded-2xl border border-brand-navy/10 bg-brand-mist p-8 shadow-sm">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-brand-blue font-mono">
                  Executive Leadership
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold text-brand-navy">
                  {companyInfo.founder}
                </h3>
                <p className="text-[13px] text-brand-ink/60 mt-0.5">
                  {companyInfo.founderRole}
                </p>

                <p className="mt-4 text-[14px] leading-relaxed text-brand-ink/75">
                  With {companyInfo.founderExperience}, Sheetal leads TaskNera with a direct focus on quality, ethical talent governance, and predictable operational delivery.
                </p>

                <div className="mt-6 pt-5 border-t border-brand-navy/10 text-[12.5px] text-brand-ink/60 space-y-2">
                  <p>📍 {companyInfo.address}</p>
                  <p>✉️ <a href={`mailto:${companyInfo.emailFounder}`} className="text-brand-blue hover:underline">{companyInfo.emailFounder}</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="py-20 lg:py-28 bg-brand-mist border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Core architecture
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-brand-navy font-bold">
                The three operational pillars
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pil) => {
                const Icon = pil.icon;
                return (
                  <div
                    key={pil.title}
                    className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-navy/[0.05] text-brand-blue mb-5">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-bold text-brand-navy">
                      {pil.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-brand-ink/65">
                      {pil.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4 Values Section */}
        <section className="py-20 lg:py-28 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Operating philosophy
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-brand-navy font-bold">
                Principles we work by
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((val, idx) => (
                <div key={val.title} className="border-t border-brand-navy/15 pt-5">
                  <span className="font-mono text-[11px] font-bold text-brand-blue">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-[17px] font-bold text-brand-navy">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-ink/65">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
