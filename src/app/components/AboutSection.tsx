'use client';
import React from 'react';
import Link from 'next/link';

const stats = [
  {
    value: '5 Pillars',
    label: 'Integrated Scope',
    desc: 'HR Operations, Talent, Workforce, Virtual Assistance & Customer Support',
    color: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    value: 'Remote-Ready',
    label: 'Global Delivery',
    desc: 'Transparent governance, distributed teams & multi-timezone coverage',
    color: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    value: '12+',
    label: 'Industries Supported',
    desc: 'From SaaS, Tech & BFSI to Healthcare, E-commerce & Operations',
    color: 'bg-primary/10 text-primary border-primary/20',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — Text content */}
          <div className="lg:col-span-6 space-y-8 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                About TaskNera
              </span>
            </div>

            <h2 className="text-section-title font-display font-700 text-foreground">
              Your Global HR, Workforce &amp;{' '}
              <span className="gradient-text-teal">Business Support Partner</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Workforce, Talent, Virtual Assistant and Customer Support solutions.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Instead of coordinating between fragmented recruitment consultancies, disparate BPO call centres, and disjointed freelance assistants, TaskNera unites people operations, staffing, virtual assistance, and customer experience under one strategic partner.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about"
                className="bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-sm"
              >
                Our Story &amp; Leadership
              </Link>
              <Link
                href="/workplace-policies"
                className="bg-muted text-foreground text-sm font-semibold px-6 py-3 rounded-full hover:bg-muted/80 transition-colors border border-border"
              >
                Workplace Policies &amp; Commitments
              </Link>
            </div>
          </div>

          {/* Right — Stat cards + visual */}
          <div className="lg:col-span-6 space-y-4 scroll-reveal" style={{ transitionDelay: '0.15s' }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="spotlight-card hover-lift bg-card border rounded-2xl p-6 flex items-start gap-5 shadow-sm"
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${stat.color}`}>
                  <span className="font-display font-700 text-lg sm:text-xl text-center leading-none">
                    {stat.value.split(' ')[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-base">{stat.label}</div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.desc}</div>
                </div>
              </div>
            ))}

            {/* Core Promise Box */}
            <div className="bg-primary rounded-2xl p-6 text-white mt-2 shadow-md">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                Core Promise
              </div>
              <p className="font-display font-600 text-lg text-white mb-3 leading-snug">
                One Partner. HR, Talent, Workforce &amp; Business Support — All Under One Roof.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <span className="text-secondary">✦</span>
                  <span>Modular Outsourcing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-secondary">✦</span>
                  <span>Human Remote Talent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-secondary">✦</span>
                  <span>Technology-Enabled</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-secondary">✦</span>
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