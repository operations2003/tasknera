'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Laptop,
  Activity,
  Factory,
  ShoppingBag,
  Landmark,
  Truck,
  GraduationCap,
  Megaphone,
  Briefcase,
  Building,
  Rocket,
  Calculator,
  ArrowRight,
  Check,
  Search,
} from 'lucide-react';
import { industriesList } from '@/lib/base44_content';

const iconList = [
  Laptop,
  Activity,
  Factory,
  ShoppingBag,
  Landmark,
  Truck,
  GraduationCap,
  Megaphone,
  Briefcase,
  Building,
  Rocket,
  Calculator,
];

export default function IndustriesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = industriesList.filter(
    (ind) =>
      ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind.sub.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF7F2]">
        
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-navy text-white py-20 lg:py-24">
          <div
            className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Domain expertise
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight">
              Industry Solutions &amp; Operational Delivery
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Every sector operates with specific compliance standards, talent profiles and volume cycles. We deploy specialists who understand the mechanics of your industry.
            </p>
          </div>
        </section>

        {/* Search & Grid */}
        <section className="py-20 lg:py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Search Input */}
            <div className="max-w-md mx-auto mb-14">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-ink/40" />
                <input
                  type="text"
                  placeholder="Filter by sector or role specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-brand-navy/15 bg-white text-[14px] text-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, idx) => {
                const Icon = iconList[idx % iconList.length];
                return (
                  <div
                    key={item.name}
                    className="flex flex-col justify-between rounded-2xl border border-brand-navy/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-brand-navy/30 hover:shadow-md"
                  >
                    <div>
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-navy/[0.05] text-brand-blue mb-5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-[18px] font-bold text-brand-navy leading-snug">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-brand-ink/65">
                        {item.sub}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-brand-navy/8 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-brand-blue font-semibold">
                        SECTOR {String(idx + 1).padStart(2, '0')}
                      </span>
                      <Link
                        href={`/contact?industry=${encodeURIComponent(item.name)}`}
                        className="text-[12.5px] font-semibold text-brand-navy hover:text-brand-blue flex items-center gap-1"
                      >
                        <span>Discuss scoping</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
