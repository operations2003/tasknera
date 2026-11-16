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
} from 'lucide-react';
import rawServices from '@/lib/base44_services.json';

const iconMap: Record<string, any> = {
  'hr-operations': Users,
  'talent-acquisition': Search,
  'workforce-solutions': Layers,
  'virtual-assistants': Bot,
  'customer-support': Headphones,
  'technology': CodeXml,
  'hireiq': ScanSearch,
  'hrms': LayoutDashboard,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF7F2]">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-navy text-white py-20 lg:py-24">
          <div
            className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Modular solutions
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight">
              Eight disciplines. One accountable partner.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Engage a single specialist, deploy a dedicated pod or hand over an entire operational function. Every solution is delivered with documented processes and clear ownership.
            </p>
          </div>
        </section>

        {/* 8 Disciplines Grid */}
        <section className="py-20 lg:py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {rawServices.map((svc: any, idx: number) => {
                const Icon = iconMap[svc.slug] || Users;
                const isLarge = idx < 2 || svc.tag === 'Platform';

                return (
                  <div
                    key={svc.slug}
                    className={isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}
                  >
                    <Link
                      href={`/services/${svc.slug}`}
                      className={`group flex h-full flex-col rounded-2xl border border-brand-navy/10 bg-white p-6 transition-all duration-300 hover:border-brand-navy hover:bg-brand-navy hover:shadow-[0_24px_50px_-30px_rgba(16,28,53,0.5)] ${
                        idx < 2 ? 'lg:p-8' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-navy/[0.05] text-brand-blue transition-colors duration-300 group-hover:bg-white/10 group-hover:text-brand-teal">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-brand-navy/35 transition-colors group-hover:text-white/35">
                          {svc.tag}
                        </span>
                      </div>

                      <h2 className="mt-5 text-[17px] font-bold leading-snug text-brand-navy transition-colors group-hover:text-white">
                        {svc.name}
                      </h2>

                      <p className="mt-2.5 text-[13px] leading-relaxed text-brand-ink/65 transition-colors group-hover:text-white/60">
                        {svc.summary}
                      </p>

                      <ul className="mt-5 flex flex-col gap-2">
                        {svc.capabilities.slice(0, 3).map((cap: string) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2 text-[12px] leading-snug text-brand-ink/60 transition-colors group-hover:text-white/60"
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

        {/* Consultation Callout */}
        <section className="py-20 bg-brand-navy text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-normal">
              Not sure which service fits your stage?
            </h2>
            <p className="mt-4 text-[15px] text-white/60 max-w-xl mx-auto leading-relaxed">
              Tell us what you are trying to solve. We will recommend the right delivery model — or tell you if TaskNera isn&apos;t the right fit.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="bg-white text-brand-navy font-semibold px-7 py-3 rounded-[3px] hover:bg-white/90 text-[13.5px] shadow-sm inline-flex items-center gap-2"
              >
                <span>Book a discovery call</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
