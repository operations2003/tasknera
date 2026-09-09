'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/app/components/AboutSection';
import PrinciplesSection from '@/app/components/PrinciplesSection';

const corePillars = [
  {
    icon: '⚡',
    title: 'Speed & Precision',
    desc: 'Cutting hiring cycles from months to days without compromising quality or culture fit.',
  },
  {
    icon: '🌏',
    title: 'Cross-Border Talent',
    desc: 'Connecting global businesses with top talent across India, US, UK, Europe, and remote markets.',
  },
  {
    icon: '🛡️',
    title: '100% Compliance',
    desc: 'Flawless payroll, statutory compliance, and HR governance built into every process.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    desc: 'Not a passive vendor, but an active partner invested in your long-term business roadmap.',
  },
];

const milestones = [
  { year: '8+ Yrs', label: 'Global HR Leadership Experience' },
  { year: '5', label: 'International Sourcing Regions' },
  { year: '12+', label: 'Industries Transformed' },
  { year: '2026', label: 'TaskNera Founded' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 bg-background min-h-screen">
        {/* ── Main About Section ── */}
        <AboutSection />

        {/* ── Principles Behind Tasknera Section ── */}
        <PrinciplesSection />

        {/* ── Founder & Leadership Section ── */}
        <section className="py-20 sm:py-28 bg-hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 blob-teal opacity-30 pointer-events-none" style={{ top: '10%', right: '20%', width: '600px', height: '600px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left — Intro & Title */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase">Meet Our Founder</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-display font-700 text-white leading-tight">
                  Meet <span className="gradient-text-coral">Sheetal Bedi</span>
                </h2>
                <p className="text-white/80 text-xl font-display italic">
                  Founder &amp; CEO, TaskNera
                </p>

                <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                  HR strategist with 8+ years of experience building, managing, and scaling talent pipelines for fast-growing startups, SMEs, and global enterprises.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="mailto:operations@tasknera.com"
                    className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg shadow-accent/25 flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    Email operations
                  </a>
                  <Link
                    href="/#contact"
                    className="glass-btn text-white font-semibold px-6 py-3 rounded-full text-sm"
                  >
                    Send an Enquiry
                  </Link>
                </div>
              </div>

              {/* Right — Avatar Card */}
              <div className="lg:col-span-5">
                <div className="glass-card rounded-3xl p-8 border border-white/15 text-center space-y-6">
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-accent/40 via-secondary/30 to-primary border-4 border-white/20 flex items-center justify-center text-white font-display font-700 text-3xl shadow-xl">
                    SB
                  </div>
                  <div>
                    <h3 className="text-white font-display font-700 text-2xl">Sheetal Bedi</h3>
                    <p className="text-accent text-sm font-semibold tracking-wide mt-1">Founder &amp; Chief Executive Officer</p>
                    <p className="text-white/50 text-xs mt-0.5">TaskNera Global Operations</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-center gap-4">
                    <a
                      href="mailto:sheetalbedi@tasknera.com"
                      className="text-white/70 hover:text-white text-xs font-medium bg-white/10 px-4 py-2 rounded-full border border-white/15 transition-colors"
                    >
                      sheetalbedi@tasknera.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Key Metrics Bar ── */}
        <section className="bg-primary border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
              {milestones.map((m) => (
                <div key={m.label} className="text-center lg:px-8">
                  <div className="font-display font-700 text-2xl sm:text-3xl text-white mb-1">{m.year}</div>
                  <div className="text-white/50 text-xs sm:text-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founder Journey & Values ── */}
        <section className="py-20 sm:py-28 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase">Founding Story</span>
                </div>

                <h2 className="text-section-title font-display font-700 text-foreground">
                  The Story Behind <span className="gradient-text-teal">TaskNera</span>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  With more than 8 years of experience in HR leadership across South Asia, Europe, and North America, Sheetal saw an opportunity to create a more integrated approach to supporting growing businesses.
                </p>

                <p className="text-muted-foreground text-base leading-relaxed">
                  Founded in 2026, TaskNera brings together HR &amp; people operations, talent acquisition, workforce solutions, virtual assistant support, and customer support under one roof. Built on a foundation of domain expertise, human-centered delivery, and transparent governance, the company provides growing organizations with scalable, flexible operational support.
                </p>

                {/* Founder Quote Card */}
                <div className="border-l-4 border-accent pl-6 py-3 bg-card border rounded-r-2xl shadow-sm">
                  <p className="text-foreground/90 text-base italic font-display leading-relaxed">
                    "Our mission is to empower organizations worldwide with reliable, scalable, and human-centered workforce and operational support that helps founders build exceptional teams."
                  </p>
                  <p className="text-accent font-semibold text-xs mt-3">— Sheetal Bedi, CEO &amp; Founder</p>
                </div>
              </div>

              {/* Right Column — Core Values Bento Grid */}
              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                {corePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="spotlight-card hover-lift bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col gap-3"
                  >
                    <div className="text-3xl mb-1">{pillar.icon}</div>
                    <h3 className="font-display font-700 text-foreground text-base">{pillar.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Remote Transparency & Workplace Policies Banner (Requirement 11) ── */}
        <section className="py-16 bg-card border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                Remote Culture &amp; Transparency
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-700 text-foreground">
              Workplace Policies &amp; Governance
            </h3>

            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Because our team and client engagements operate in a remote-first and distributed environment, we maintain complete transparency regarding our remote work standards, cybersecurity safeguards, employee protections, and ethical commitments.
            </p>

            <div className="pt-2">
              <Link
                href="/workplace-policies"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity text-sm shadow-sm"
              >
                View Workplace Policies &amp; Commitments
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
