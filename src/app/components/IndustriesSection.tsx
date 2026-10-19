'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Laptop,
  Activity,
  Factory,
  ShoppingBag,
  Landmark,
  Truck,
  GraduationCap,
  Share2,
  Briefcase,
  Building2,
  Rocket,
  Coins,
  Code2,
  Megaphone,
  Headphones,
  RotateCw,
  Crown,
  Users,
  HeartPulse,
  Globe2,
  ArrowRight,
} from 'lucide-react';

const industries = [
  { icon: Laptop, label: 'IT, SaaS & Tech', roles: 'Full-stack, QA, DevOps, Product' },
  { icon: Activity, label: 'Healthcare & Biotech', roles: 'Clinical, medical billing, support' },
  { icon: Factory, label: 'Manufacturing', roles: 'Supply chain, plant ops, procurement' },
  { icon: ShoppingBag, label: 'Retail & E-commerce', roles: 'Catalog, customer care, ops' },
  { icon: Landmark, label: 'BFSI & Fintech', roles: 'Risk, compliance, financial ops' },
  { icon: Truck, label: 'Logistics & Supply Chain', roles: 'Dispatch, fleet, freight ops' },
  { icon: GraduationCap, label: 'EdTech & Education', roles: 'Admissions, student support, counselors' },
  { icon: Share2, label: 'Digital Media & Agencies', roles: 'Account managers, content, performance' },
  { icon: Briefcase, label: 'Professional Consulting', roles: 'Business analysts, project coordinators' },
  { icon: Building2, label: 'Hospitality & Real Estate', roles: 'Guest care, bookings, facility management' },
  { icon: Rocket, label: 'Startups & Scale-ups', roles: 'Founding teams, rapid hiring pods' },
  { icon: Coins, label: 'Finance & Accounting', roles: 'Bookkeeping, tax, controller support' },
];

const functionalRoles = [
  { icon: Code2, label: 'IT & Engineering', desc: 'Software engineers, architects, cloud, QA' },
  { icon: Coins, label: 'Finance & Accounting', desc: 'Accountants, controllers, financial analysts' },
  { icon: Megaphone, label: 'Sales & Marketing', desc: 'SDRs, AEs, demand gen, CRM specialists' },
  { icon: Headphones, label: 'Customer Support (VCS)', desc: 'Omnichannel voice, live chat, ticket pods' },
  { icon: RotateCw, label: 'Operations & Supply Chain', desc: 'Inventory managers, logisticians, coordinators' },
  { icon: Crown, label: 'Executive & Leadership', desc: 'C-suite, VPs, country & regional directors' },
  { icon: Users, label: 'HR & Administration', desc: 'HR generalists, recruiters, executive VAs' },
  { icon: HeartPulse, label: 'Healthcare & Clinical', desc: 'Triage staff, medical admins, patient support' },
];

export default function IndustriesSection() {
  const [tab, setTab] = useState<'industries' | 'roles'>('industries');

  return (
    <section id="industries" className="py-20 sm:py-28 bg-surface-elevated relative overflow-hidden border-b border-border">
      {/* Ambient background light pools */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              Domain Coverage
            </span>
          </div>
          <h2 className="text-section-title font-display font-bold text-foreground mb-4">
            12+ Industry Areas{' '}
            <span className="gradient-text-teal">Supported</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Domain support across 12+ industry areas and 8 core functional business roles.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-10 scroll-reveal" style={{ transitionDelay: '0.05s' }}>
          <div className="bg-card border border-border rounded-full p-1.5 flex gap-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setTab('industries')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                tab === 'industries'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Industry Areas Supported (12+)
            </button>
            <button
              type="button"
              onClick={() => setTab('roles')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                tab === 'roles'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Functional Roles (8)
            </button>
          </div>
        </div>

        {/* Grid */}
        {tab === 'industries' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            {industries.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.label}
                  className="card-premium rounded-2xl p-5 flex items-start gap-4 group"
                  style={{ transitionDelay: `${i * 0.02}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-foreground block group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                      {item.roles}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            {functionalRoles.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.label}
                  className="card-premium rounded-2xl p-5 flex items-start gap-4 group"
                  style={{ transitionDelay: `${i * 0.02}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-foreground block group-hover:text-secondary transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Global reach strip */}
        <div className="mt-14 bg-gradient-to-r from-[#242326] via-[#242326] to-[#1A191B] rounded-3xl p-8 sm:p-10 text-[#FFF8F0] shadow-2xl relative overflow-hidden border border-tn-mist/20 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-tn-coral uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Global Sourcing Coverage</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FFF8F0]">
                Sourcing Across 5 Continents &amp; Hubs
              </h3>
              <p className="text-[#FFF8F0]/75 text-sm">
                We source, pre-vet, and place talent across local and international timezones.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-wrap gap-2.5">
              {[
                { name: 'India (Headquarters)', tag: 'Core Delivery Hub' },
                { name: 'United States', tag: 'EST / CST / PST' },
                { name: 'United Kingdom', tag: 'GMT / BST' },
                { name: 'Europe', tag: 'CET Multi-lingual' },
                { name: 'Remote Global', tag: '24/7 Coverage' },
              ].map((region) => (
                <div
                  key={region.name}
                  className="glass-card rounded-2xl px-4 py-2.5 text-[#F8F4ED] flex flex-col justify-center border border-white/15"
                >
                  <span className="text-sm font-bold text-[#F8F4ED]">{region.name}</span>
                  <span className="text-[10px] text-[#E5BDB4] font-semibold">{region.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}