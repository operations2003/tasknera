'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/lib/base44_content';

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-24 border-t border-white/10">
      {/* Subtle grain texture overlay */}
      <div
        className="grain pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
          Ready to build something better?
        </span>

        <h2 className="mt-5 font-heading text-[clamp(2.1rem,4.5vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.02em]">
          <span className="block">Build your team.</span>
          <span className="block">Strengthen operations.</span>
          <span className="block italic text-brand-teal">Scale without limits.</span>
        </h2>

        <p className="mt-6 max-w-[50ch] mx-auto text-[15.5px] leading-[1.8] text-white/60">
          Book a 20-minute discovery call to walk through your hiring, HR or operations requirement. We will give you a clear assessment of how we can help.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-brand-navy font-semibold px-7 py-3.5 rounded-[3px] hover:bg-white/90 text-[13.5px] transition-colors shadow-sm inline-flex items-center gap-2 group"
          >
            <span>Book a free consultation</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`mailto:${companyInfo.emailOperations}`}
            className="border border-white/20 text-white font-medium px-6 py-3.5 rounded-[3px] hover:bg-white/10 text-[13.5px] transition-colors inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4 text-brand-teal" />
            <span>Email operations@tasknera.com</span>
          </a>
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-white/35">
          Response within 1 business day · Zero obligation scoping
        </p>
      </div>
    </section>
  );
}
