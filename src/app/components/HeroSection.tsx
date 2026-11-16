'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

            {/* Main headline - Bold Charcoal typography with Coral accent */}
            <h1 className="clip-in stagger-2 text-hero font-display font-bold text-[#242326] leading-[1.12]">
              Build. Manage. Scale.{' '}
              <span className="text-[#F49A7D] block sm:inline">
                Your People &amp; Operations.
              </span>
            </h1>

            {/* Description - Slate */}
            <p className="fade-up stagger-3 text-lg sm:text-xl text-[#55515A] leading-relaxed max-w-2xl font-normal">
              TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Talent, Workforce, Virtual Assistant and Virtual Customer Support solutions.
            </p>

            {/* Supporting capability pills */}
            <div className="fade-up stagger-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium">
              {[
                'HR Operations',
                'Talent Acquisition',
                'Workforce Solutions',
                'Human Virtual Assistants',
                'Omnichannel VCS',
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 bg-white text-[#55515A] px-3.5 py-1.5 rounded-full border border-[#E9E4DF] shadow-sm hover:border-[#DCC6B8] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F49A7D]" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            {/* CTA Buttons - Coral primary CTA with charcoal text */}
            <div className="fade-up stagger-4 flex flex-wrap gap-4 items-center pt-2">
              <Link
                href="/#contact"
                className="bg-[#F49A7D] text-[#242326] font-bold px-8 py-4 rounded-full hover:bg-[#E28567] active:scale-95 transition-all shadow-lg shadow-[#F49A7D]/25 text-base flex items-center gap-2 group"
              >
                <span>Talk to an HR &amp; Workforce Expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white text-[#242326] font-semibold px-7 py-4 rounded-full text-base hover:bg-[#FFF8F0] border border-[#E9E4DF] hover:border-[#DCC6B8] shadow-sm transition-all flex items-center gap-2"
              >
                <span>Explore All Solutions</span>
              </Link>
              <Link
                href="/careers#freelance-recruiter-remote-pan-india"
                className="bg-white text-[#242326] font-semibold px-7 py-4 rounded-full text-base hover:bg-[#FFF8F0] border border-[#E9E4DF] hover:border-[#F49A7D] shadow-sm transition-all flex items-center gap-2 group"
              >
                <Briefcase className="w-4 h-4 text-[#F49A7D] group-hover:scale-110 transition-transform" />
                <span>Join Us as Recruiter</span>
              </Link>
            </div>
          </div>

          {/* Right — Visual card cluster */}
          <div className="lg:col-span-5 fade-up stagger-3 py-4">
            <div className="relative max-w-md mx-auto lg:max-w-none">

              {/* Main card */}
              <div className="rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative z-10 border border-[#E9E4DF] bg-white backdrop-blur-xl">
                {/* Logo mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AppImage
                      src="/assets/images/logo_1-1786267820748.png"
                      alt="TaskNera logo mark"
                      width={46}
                      height={46}
                      className="rounded-xl shadow-sm ring-1 ring-[#E9E4DF]"
                    />
                    <div>
                      <div className="text-[#242326] font-display font-bold text-xl leading-tight">
                        TaskNera
                      </div>
                      <div className="text-[#55515A] text-xs font-semibold">
                        Integrated People &amp; Operations
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#242326] bg-[#F49A7D]/20 px-2.5 py-1 rounded-full border border-[#F49A7D]/30">
                    Enterprise Grade
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '5 Pillars', label: 'End-to-End Scope' },
                    { value: 'Remote-Ready', label: 'Multi-Timezone' },
                    { value: '360°', label: 'People Ops' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#FFF8F0] hover:bg-[#FFF8F0]/70 transition-colors rounded-2xl p-3 text-center border border-[#E9E4DF]"
                    >
                      <div className="text-base sm:text-lg font-display font-bold text-[#F49A7D]">
                        {stat.value}
                      </div>
                      <div className="text-[#55515A] text-[11px] mt-0.5 leading-tight font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service tags */}
                <div className="space-y-2.5 pt-2 border-t border-[#E9E4DF]">
                  <div className="text-[11px] font-bold text-[#55515A] uppercase tracking-widest flex items-center justify-between">
                    <span>Full-Spectrum Scope</span>
                    <span className="text-[#F49A7D] text-[10px] font-bold">One Contract</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'HR & People Operations',
                      'Talent & Recruitment',
                      'Workforce Solutions',
                      'Virtual Assistant (Human)',
                      'Virtual Customer Support (VCS)',
                      'JD Match Evaluator',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-[#55515A] bg-[#FFF8F0] border border-[#E9E4DF] rounded-full px-3 py-1 hover:border-[#DCC6B8] hover:text-[#242326] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-card: One Partner Guarantee */}
                <div className="p-3.5 rounded-2xl bg-[#FFF8F0] border border-[#DCC6B8] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#F49A7D]/20 border border-[#F49A7D]/30 flex items-center justify-center text-[#F49A7D] flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-[#242326]">
                      <div>Compliance-Focused &amp; SLA Backed</div>
                      <div className="text-[11px] text-[#55515A] font-normal">
                        Transparent governance &amp; dedicated account managers
                      </div>
                    </div>
                  </div>
                </div>
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
