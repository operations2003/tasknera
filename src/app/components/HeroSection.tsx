'use client';
import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      aria-label="TaskNera — global HR, talent and operations partner"
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      {/* Subtle grain texture overlay */}
      <div
        className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-12 py-14 sm:py-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:py-24">
          
          {/* Left Column: Proposition */}
          <div className="flex min-w-0 flex-col gap-10">
            <div>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                Global HR · Talent · Operations · Technology
              </span>

              <h1 className="mt-7 font-heading text-[clamp(2.35rem,5vw,4rem)] font-normal leading-[0.99] tracking-[-0.022em]">
                <span className="block">Build your team.</span>
                <span className="block">Strengthen operations.</span>
                <span className="block italic text-brand-teal">Scale without limits.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-8 border-t border-white/10 pt-8">
              <p className="max-w-[48ch] text-[15.5px] leading-[1.8] text-white/60">
                Your strategic partner for global talent acquisition, HR operations, workforce solutions, technology and customer support. We help businesses build dependable teams and create the operational foundation for sustainable growth.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="bg-white text-brand-navy font-semibold px-6 py-3 rounded-[3px] hover:bg-white/90 text-[13.5px] transition-colors shadow-sm"
                >
                  Book a free consultation
                </Link>
                <Link
                  href="/services"
                  className="border border-white/20 text-white font-medium px-6 py-3 rounded-[3px] hover:bg-white/10 text-[13.5px] transition-colors"
                >
                  Explore our solutions
                </Link>
              </div>

              <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                Response within 1 business day — India · US · UK · Europe
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Photography */}
          <figure className="min-w-0">
            <div className="overflow-hidden border border-white/15 rounded-[4px] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Modern corporate architecture representing TaskNera's global operations"
                className="warm-photo aspect-[4/5] w-full object-cover lg:aspect-[5/6] filter contrast-105"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-white/35">
              <span>One partner · Four disciplines</span>
              <span className="text-brand-teal font-medium">Global delivery</span>
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
}
