'use client';
import React from 'react';
import Link from 'next/link';
import { Globe, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/lib/base44_content';

const regions = [
  { name: 'India (Headquarters)', tag: 'Operations & Engineering Center', time: 'IST (UTC+5:30)' },
  { name: 'United States', tag: 'Client Timezone Coverage', time: 'EST & PST' },
  { name: 'United Kingdom', tag: 'European Business Hours', time: 'GMT / BST' },
  { name: 'Europe', tag: 'Continental Timezone Coverage', time: 'CET (UTC+1)' },
];

export default function GlobalDeliveryAndMetricsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-14 text-white sm:py-16 lg:py-20">
      {/* Subtle grain texture overlay */}
      <div
        className="grain pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          
          {/* Left Column: Context */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Global delivery
            </span>
            <h2 className="mt-4 font-heading text-[clamp(1.85rem,3.7vw,3rem)] font-bold leading-[1.08]">
              Remote-first delivery with international reach.
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.8] text-white/60">
              TaskNera serves clients across India, North America, the UK and Europe. Our delivery teams are structured around overlapping business hours, clear documentation and single points of operational accountability.
            </p>

            <div className="mt-8 space-y-4 text-[13.5px] text-white/75 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-teal flex-none mt-0.5" />
                <span>NDA-backed engagements with secure infrastructure and role-based data access.</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-teal flex-none mt-0.5" />
                <span>Synchronous communication hours tailored to client executive schedules.</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-teal flex-none mt-0.5" />
                <span>Headquarters in Delhi, India, with distributed specialists across high-demand domains.</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-3 rounded-[3px] hover:bg-white/90 text-[13px] transition-colors shadow-sm"
              >
                <span>Discuss global support</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Timezones & Operating Hubs */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Globe className="h-5 w-5 text-brand-teal" />
                <span className="font-heading text-lg font-bold text-white">Active Delivery Coverage</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                24/7 SLAs
              </span>
            </div>

            <div className="mt-6 flex flex-col divide-y divide-white/10">
              {regions.map((reg) => (
                <div key={reg.name} className="py-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-[14.5px]">{reg.name}</h4>
                    <p className="text-[12px] text-white/50 mt-0.5">{reg.tag}</p>
                  </div>
                  <span className="font-mono text-[12px] text-brand-teal font-medium">
                    {reg.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white/[0.03] border border-white/10 p-4 text-[12px] text-white/60 leading-relaxed">
              <p>
                <strong>Ethics Note:</strong> We charge zero recruitment fees to job candidates at any stage. Every hire and talent placement is governed strictly by legitimate B2B service contracts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
