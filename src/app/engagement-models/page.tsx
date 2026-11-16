'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { engagementModelsList } from '@/lib/base44_content';

export default function EngagementModelsPage() {
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
              Commercial flexibility
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight">
              Engagement models built around your stage.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Start with a single role, an embedded professional or full-function ownership. Commercials are scoped per requirement rather than locked into rigid rate cards.
            </p>
          </div>
        </section>

        {/* 7 Models Grid */}
        <section className="py-20 lg:py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {engagementModelsList.map((model, idx) => (
                <div
                  key={model.title}
                  className="flex flex-col justify-between rounded-2xl border border-brand-navy/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-brand-navy/30 hover:shadow-md"
                >
                  <div>
                    <span className="font-mono text-[11px] font-bold text-brand-blue tracking-[0.2em]">
                      MODEL 0{idx + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-[20px] font-bold text-brand-navy">
                      {model.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-brand-ink/70">
                      {model.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-brand-navy/8">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-ink/40 block mb-1">
                      Best Suited For
                    </span>
                    <p className="text-[13px] font-medium text-brand-navy">
                      {model.best}
                    </p>
                    <div className="mt-4">
                      <Link
                        href={`/contact?model=${encodeURIComponent(model.title)}`}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-blue hover:underline"
                      >
                        <span>Discuss this model</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Advisory Callout */}
            <div className="mt-14 rounded-2xl border border-brand-navy/10 bg-brand-mist p-8 sm:p-10 text-center max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-brand-navy">
                Need a hybrid or custom enterprise structure?
              </h3>
              <p className="mt-3 text-[14.5px] text-brand-ink/70 leading-relaxed max-w-xl mx-auto">
                We frequently combine recruitment sprints with dedicated HR operations and customer care desks into a single master services agreement.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="bg-brand-navy text-white font-medium px-6 py-3 rounded-[3px] hover:bg-black text-[13.5px] transition-colors inline-flex items-center gap-2"
                >
                  <span>Request custom proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
