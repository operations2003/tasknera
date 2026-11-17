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
              Modular disciplines. One accountable partner.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Engage a single specialist, deploy a dedicated pod or hand over an entire operational function. Every solution is delivered with documented processes and clear ownership.
            </p>
          </div>
        </section>

        {/* Disciplines Grid */}
        <section className="py-20 lg:py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {(() => {
              const activeServices = rawServices;
              const tier1 = activeServices.slice(0, 2);
              const tier2 = activeServices.slice(2, 5);
              const tier3 = activeServices.slice(5, 7);

              const renderCard = (svc: any, featured = false) => {
                const Icon = iconMap[svc.slug] || Users;
                return (
                  <div key={svc.slug}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className={`group relative flex h-full flex-col rounded-2xl border border-[#E7E2DA] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy hover:bg-brand-navy hover:shadow-[0_26px_50px_-24px_rgba(20,17,15,0.45)] ${
                        featured ? 'lg:p-8' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-[#FAF3EC] border border-[#EBD9CC] text-brand-blue transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-brand-teal">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="rounded-full bg-[#FAF3EC] px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-brand-blue font-mono transition-colors group-hover:bg-white/10 group-hover:text-brand-teal">
                          {svc.tag}
                        </span>
                      </div>

                      <h2 className="mt-6 font-heading text-[21px] sm:text-[23px] font-medium leading-snug tracking-[-0.015em] text-brand-navy transition-colors group-hover:text-white">
                        {svc.name}
                      </h2>

                      <p className="mt-3 text-[14px] leading-relaxed text-brand-ink/70 transition-colors group-hover:text-white/70">
                        {svc.summary}
                      </p>

                      <ul className="mt-6 flex flex-col gap-2.5 border-t border-brand-navy/[0.08] pt-6 group-hover:border-white/10">
                        {svc.capabilities.slice(0, 3).map((cap: string) => (
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
                  </div>
                );
              };

              return (
                <div className="space-y-5">
                  {/* Tier 1: Two Primary Disciplines */}
                  <div className="grid gap-5 lg:grid-cols-2">
                    {tier1.map((svc: any) => renderCard(svc, true))}
                  </div>

                  {/* Tier 2: Operational Capacity & Engineering (3 Columns) */}
                  <div className="grid gap-5 md:grid-cols-3">
                    {tier2.map((svc: any) => renderCard(svc, false))}
                  </div>

                  {/* Tier 3: Proprietary Platforms (2 Columns) */}
                  <div className="grid gap-5 lg:grid-cols-2">
                    {tier3.map((svc: any) => renderCard(svc, true))}
                  </div>
                </div>
              );
            })()}
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
