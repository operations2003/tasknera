'use client';
import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { audiences } from '@/lib/base44_content';

export default function WhoWeSupportSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Who we serve
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Built for businesses at every stage.
          </h2>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-brand-ink/70">
            Each segment brings a different operational problem. We scope the model around where you are now, not a fixed package.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {audiences.map((aud, idx) => {
            const isWide = idx >= 3;
            return (
              <div
                key={aud.key}
                className={isWide ? 'lg:col-span-3' : 'lg:col-span-2'}
              >
                <article className="group flex h-full flex-col rounded-2xl border border-[#E7E2DA] bg-[#FAF8F5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy hover:bg-white hover:shadow-[0_24px_50px_-24px_rgba(20,17,15,0.25)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue font-mono">
                    {aud.kicker}
                  </p>
                  <h3 className="mt-4 font-heading text-[22px] font-medium leading-tight text-brand-navy">
                    {aud.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-brand-ink/70">
                    {aud.challenge}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-brand-navy/[0.08] pt-6">
                    {aud.help.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-brand-ink/75">
                        <Check className="mt-[3px] h-3.5 w-3.5 flex-none text-brand-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}

          {/* Consultation CTA Card */}
          <div className="lg:col-span-6">
            <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-mist p-7 sm:flex-row sm:items-center lg:px-9 border border-[#E7E2DA] shadow-sm">
              <p className="max-w-[62ch] text-[14px] leading-relaxed text-brand-ink/75">
                Not sure which model fits? Tell us the business problem and we will recommend the structure — including where TaskNera should not be the answer.
              </p>
              <Link
                href="/contact"
                className="group inline-flex flex-none items-center gap-2 text-[13px] font-semibold text-brand-blue hover:underline"
              >
                <span>Talk to our team</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
