'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { howWeWorkSteps } from '@/lib/base44_content';

export default function HowWeWorkSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
              How we work
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-navy tracking-tight">
              A delivery method you can predict.
            </h2>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-brand-ink/70">
              Four stages, the same on every engagement — so you always know what happens next and who owns it.
            </p>
          </div>

          <Link
            href="/contact"
            className="mb-1 flex-none text-[13px] font-semibold text-brand-blue hover:underline inline-flex items-center gap-1.5"
          >
            <span>Start a conversation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 Stages Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWorkSteps.map((step) => (
            <div
              key={step.step}
              className="group relative flex flex-col rounded-2xl border border-[#E7E2DA] bg-[#FAF8F5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(20,17,15,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-brand-blue">
                  STAGE {step.step}
                </span>
                <span className="h-2 w-2 rounded-full bg-brand-blue/30 group-hover:bg-brand-blue transition-colors" />
              </div>
              <h3 className="mt-5 font-heading text-[21px] font-medium tracking-tight text-brand-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-brand-ink/70">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
