'use client';
import React from 'react';
import { whyTaskNeraList } from '@/lib/base44_content';

export default function WhyTaskNeraSection() {
  return (
    <section className="border-y border-brand-navy/10 bg-brand-mist py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Why TaskNera
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-navy tracking-tight">
            More than a service provider. Your growth partner.
          </h2>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-brand-ink/70">
            Eight commitments that shape how every engagement is structured, staffed and reviewed.
          </p>
        </div>

        {/* 8 Commitments Grid */}
        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {whyTaskNeraList.map((item, idx) => (
            <div key={item.title} className="border-t border-brand-navy/15 pt-5">
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-brand-blue font-mono">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-[15px] font-bold leading-snug text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-brand-ink/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
