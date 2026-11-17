'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { homepageFaqs, companyInfo } from '@/lib/base44_content';

export default function HomepageFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="border-t border-brand-navy/10 bg-brand-mist py-14 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
            FAQ
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Questions founders and HR leaders ask us.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-ink/70">
            If your question isn&apos;t here, ask it directly — we answer every enquiry within one business day.
          </p>
        </div>

        {/* Accordions */}
        <div className="mt-12 divide-y divide-brand-navy/10 border-y border-brand-navy/10 bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          {homepageFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 text-left transition-colors"
                >
                  <span className="font-heading text-[17px] font-bold text-brand-navy hover:text-brand-blue">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-brand-blue flex-none mt-1 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3 text-[14px] leading-relaxed text-brand-ink/75 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-8 text-center text-[13px] text-brand-ink/60">
          <span>Need more details? </span>
          <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
            Reach out to our operations team &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
