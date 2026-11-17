'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '@/lib/base44_content';

export default function LeadershipSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_1fr] lg:items-center lg:gap-16">
          
          {/* Left: Modern Workspace Photo */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-navy/10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="TaskNera team collaborating in a modern workspace"
              className="aspect-[4/3] w-full object-cover filter contrast-105"
            />
          </div>

          {/* Right: Leadership Profile */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Leadership &amp; accountability
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
              Led by practitioner experience, not sales quotas.
            </h2>
            
            <p className="mt-5 text-[15px] leading-relaxed text-brand-ink/75">
              TaskNera was founded by <strong>{companyInfo.founder}</strong> ({companyInfo.founderRole}), bringing {companyInfo.founderExperience} to client engagements.
            </p>

            <blockquote className="mt-6 border-l-2 border-brand-blue pl-4 text-[14px] italic text-brand-ink/80 leading-relaxed bg-brand-mist/50 py-3 pr-3 rounded-r-[3px]">
              &ldquo;We started TaskNera with one conviction: business owners and leaders don&apos;t need another transactional vendor. They need one accountable partner who takes ownership of the operational details — from hiring to everyday compliance.&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col gap-2.5 text-[13px] text-brand-ink/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue flex-none" />
                <span>Zero transactional shortcuts — quality and retention first.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue flex-none" />
                <span>Strict zero-fee candidate ethics across all global recruitment.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue flex-none" />
                <span>Direct leadership oversight on every client statement of work.</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-brand-blue hover:underline"
              >
                <span>Learn more about TaskNera</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
