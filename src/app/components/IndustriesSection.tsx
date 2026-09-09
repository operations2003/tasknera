'use client';
import React, { useState } from 'react';

const industries = [
  { icon: '💻', label: 'IT, SaaS & Tech' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🛒', label: 'Retail & E-commerce' },
  { icon: '🏦', label: 'BFSI' },
  { icon: '🚚', label: 'Logistics & Supply Chain' },
  { icon: '🎓', label: 'Education' },
  { icon: '📱', label: 'Digital Marketing' },
  { icon: '🤝', label: 'Consulting' },
  { icon: '🏨', label: 'Hospitality' },
  { icon: '🚀', label: 'Startups & High-Growth' },
  { icon: '💰', label: 'Finance & Accounting' },
];

const functionalRoles = [
  { icon: '⚙️', label: 'IT & Engineering' },
  { icon: '💹', label: 'Finance & Accounting' },
  { icon: '📣', label: 'Sales & Marketing' },
  { icon: '🎧', label: 'Customer Support & BPO' },
  { icon: '🔄', label: 'Operations & Supply Chain' },
  { icon: '👔', label: 'Executive & Leadership' },
  { icon: '👥', label: 'HR & Administration' },
  { icon: '🩺', label: 'Healthcare & Clinical' },
];

export default function IndustriesSection() {
  const [tab, setTab] = useState<'industries' | 'roles'>('industries');
  const items = tab === 'industries' ? industries : functionalRoles;

  return (
    <section id="industries" className="py-20 sm:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">Coverage</span>
          </div>
          <h2 className="text-section-title font-display font-700 text-foreground mb-4">
            Industries & Functional{' '}
            <span className="gradient-text-teal">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Deep domain knowledge across 12+ industries and 8 functional hiring areas.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-8 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="bg-card border border-border rounded-full p-1 flex gap-1">
            {(['industries', 'roles'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                suppressHydrationWarning
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${tab === t
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {t === 'industries' ? 'Industries Served' : 'Functional Roles'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — 4 cols desktop, 2 mobile */}
        {/* BENTO GRID AUDIT for industries (12 cards, 4 cols): 
            Row 1: [IT col-1] [Healthcare col-2] [Manufacturing col-3] [Retail col-4]
            Row 2: [BFSI col-1] [Logistics col-2] [Education col-3] [Digital col-4]
            Row 3: [Consulting col-1] [Hospitality col-2] [Startups col-3] [Finance col-4]
            Placed 12/12 ✓
            For functional roles (8 cards, 4 cols):
            Row 1: [IT col-1] [Finance col-2] [Sales col-3] [Support col-4]
            Row 2: [Ops col-1] [Exec col-2] [HR col-3] [Healthcare col-4]
            Placed 8/8 ✓
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          {items.map((item, i) => (
            <div
              key={item.label}
              className="spotlight-card hover-lift bg-card border border-border rounded-2xl p-4 flex items-center gap-3 shadow-sm cursor-default"
              style={{ transitionDelay: `${i * 0.03}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-xl flex-shrink-0">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Global reach strip */}
        <div className="mt-12 bg-primary rounded-3xl p-6 sm:p-8 scroll-reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">Global Reach</div>
              <h3 className="font-display font-700 text-white text-xl sm:text-2xl">Hiring Across 5 Regions</h3>
              <p className="text-white/60 text-sm mt-2">We source, screen, and deliver globally.</p>
            </div>
            <div className="lg:col-span-3 flex flex-wrap gap-3">
              {['India', 'United States', 'United Kingdom', 'Europe', 'Remote Global'].map((region) => (
                <div
                  key={region}
                  className="glass-card rounded-full px-4 py-2 text-white/80 text-sm font-medium"
                >
                  {region}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}