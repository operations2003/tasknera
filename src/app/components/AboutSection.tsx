'use client';
import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Globe2,
  Building2,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';

const stats = [
  {
    value: '5 Pillars',
    label: 'Integrated Scope',
    desc: 'HR Operations, Talent Acquisition, Workforce Solutions, Virtual Assistance & Customer Support.',
    icon: Layers,
    color: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    value: 'Remote-Ready',
    label: 'Global Delivery Architecture',
    desc: 'Transparent governance, distributed pods & multi-timezone coverage across India, EMEA and the US.',
    icon: Globe2,
    color: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    value: '12+ Sectors',
    label: 'Industries Supported',
    desc: 'From SaaS, Tech & BFSI to Healthcare, E-commerce, Logistics, and High-Growth Startups.',
    icon: Building2,
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — Text content */}
          <div className="lg:col-span-6 space-y-8 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-bold text-accent tracking-widest uppercase">
                About TaskNera
              </span>
            </div>

            <h2 className="text-section-title font-display font-bold text-foreground leading-tight">
              Your Global HR, Workforce &amp;{' '}
              <span className="gradient-text-teal block">Business Support Partner</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed font-normal">
              TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Workforce, Talent, Virtual Assistant and Customer Support solutions.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Instead of coordinating between fragmented recruitment consultancies, disparate BPO call centres, and disjointed freelance assistants, TaskNera unites people operations, staffing, virtual assistance, and customer experience under one strategic, accountability-driven partner.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about"
                className="bg-primary text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all shadow-md flex items-center gap-2"
              >
                <span>Our Story &amp; Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/workplace-policies"
                className="bg-muted hover:bg-muted/80 text-foreground text-sm font-semibold px-6 py-3.5 rounded-full transition-colors border border-border"
              >
                Workplace Policies &amp; Governance
              </Link>
            </div>
          </div>

          {/* Right — Stat cards + visual */}
          <div className="lg:col-span-6 space-y-4 scroll-reveal" style={{ transitionDelay: '0.15s' }}>
            {stats.map((stat) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="card-premium rounded-3xl p-6 flex items-start gap-5 group"
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${stat.color} group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-xl text-foreground">
                        {stat.value}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">·</span>
                      <span className="font-semibold text-foreground text-sm">{stat.label}</span>
                    </div>
                    <div className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Core Promise Box */}
            <div className="bg-primary rounded-3xl p-7 text-white mt-4 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Core Promise</span>
              </div>
              <p className="font-display font-bold text-xl text-white mb-4 leading-snug">
                One Partner. HR, Talent, Workforce &amp; Business Support — All Under One Roof.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span>Modular Outsourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span>100% Vetted Human Talent</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span>Technology-Enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span>Transparent Governance</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}