'use client';
import React, { useRef } from 'react';


const stats = [
  {
    value: '360°',
    label: 'Full-Spectrum Solutions',
    desc: 'Recruitment, HR & Workforce Solutions under one roof',
    color: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    value: '5',
    label: 'Global Regions',
    desc: 'India, US, UK, Europe & Remote Global Teams',
    color: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    value: '12+',
    label: 'Industries Served',
    desc: 'From IT/SaaS to Healthcare, BFSI & beyond',
    color: 'bg-primary/10 text-primary border-primary/20',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — Text content */}
          <div className="lg:col-span-6 space-y-8 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">About TaskNera</span>
            </div>

            <h2 className="text-section-title font-display font-700 text-foreground">
              A Single Strategic Partner for Your{' '}
              <span className="gradient-text-teal">People Operations</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              TaskNera is a global HR, Recruitment, and Workforce Solutions company helping startups, SMEs, and enterprises build, manage, and scale high performing teams combining end-to-end talent acquisition, HR operations, payroll, compliance, and workforce management.
            </p>
          </div>

          {/* Right — Stat cards + visual */}
          <div className="lg:col-span-6 space-y-4 scroll-reveal" style={{ transitionDelay: '0.15s' }}>
            {stats?.map((stat) => (
              <div
                key={stat?.value}
                className={`spotlight-card hover-lift bg-card border rounded-2xl p-6 flex items-start gap-5 shadow-sm`}
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${stat?.color}`}>
                  <span className="font-display font-700 text-xl">{stat?.value}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-base">{stat?.label}</div>
                  <div className="text-muted-foreground text-sm mt-1">{stat?.desc}</div>
                </div>
              </div>
            ))}

            {/* Problem landscape teaser */}
            <div className="bg-primary rounded-2xl p-6 text-white mt-2">
              <div className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">The Challenge</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Slow, costly hiring cycles',
                  'Compliance complexity',
                  'Scaling remote teams',
                  'Rising attrition gaps',
                ]?.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5 text-xs">✦</span>
                    <span className="text-white/70 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-white/50 text-xs">
                TaskNera solves all four under one roof.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}