'use client';
import React from 'react';
import { capabilities } from '@/lib/base44_content';

export default function CoreCapabilitiesSection() {
  return (
    <section className="border-b border-brand-navy/10 bg-white" aria-label="Business capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-y-8 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6 lg:py-12">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="lg:border-l lg:border-brand-navy/10 lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="text-[10.5px] font-semibold tracking-[0.2em] text-brand-blue font-mono">
                {String(idx + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2.5 text-[14.5px] font-semibold text-brand-navy">
                {cap.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-brand-ink/60">
                {cap.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
