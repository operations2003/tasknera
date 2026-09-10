'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/app/components/ServicesSection';
import {
  Layers,
  Building2,
  Target,
  Users,
  Briefcase,
  Headphones,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const pillarHighlights = [
  {
    title: 'HR & People Operations',
    href: '/hr-workforce-solutions',
    icon: Building2,
    badge: 'Core HR',
    desc: 'Structured HR management, payroll processing, statutory compliance (PF, ESIC, TDS), and digital employee lifecycle administration.',
    deliverables: ['On-time Payroll Execution', 'Statutory Compliance Filings', 'HRMS Portal Administration', 'Onboarding & Exit SOPs'],
    accent: 'border-secondary/30',
  },
  {
    title: 'Talent & Recruitment',
    href: '/talent-acquisition',
    icon: Target,
    badge: 'Hiring',
    desc: 'Specialized hiring across permanent, executive, contract, and high-volume mandates powered by domain recruiters and JD Match Evaluator scoring.',
    deliverables: ['Permanent & Executive Search', 'High-Volume Campaign Sourcing', 'RPO Dedicated Desks', 'JD Match Evaluator Scoring'],
    accent: 'border-accent/30',
  },
  {
    title: 'Workforce Solutions',
    href: '/hr-workforce-solutions#workforce',
    icon: Users,
    badge: 'Scale Staffing',
    desc: 'Agile contract staffing and turnkey multi-location workforce deployment models built dynamically around operational surges.',
    deliverables: ['Contract Staffing Pods', 'Seasonal Surge Deployments', 'Workforce Capacity Planning', 'Turnkey Multi-Location Ops'],
    accent: 'border-blue-500/30',
  },
  {
    title: 'Virtual Assistant Services',
    href: '/virtual-assistant-services',
    icon: Briefcase,
    badge: 'Human Talent',
    desc: '100% vetted human remote professionals managing executive assistance, CRM hygiene, digital administration, scheduling, and research.',
    deliverables: ['Executive C-Suite Support', 'CRM & Pipeline Hygiene', 'Data Scraping & Research', 'Digital File Organization'],
    accent: 'border-amber-500/30',
  },
  {
    title: 'Virtual Customer Support (VCS)',
    href: '/virtual-customer-support',
    icon: Headphones,
    badge: 'Omnichannel Care',
    desc: 'Dedicated customer support pods managing voice, live chat, email ticketing, WhatsApp, and social media with strict SLA resolution.',
    deliverables: ['Inbound & Outbound Voice Desk', 'Sub-60s Live Chat Handling', 'SLA Ticket Management', 'WhatsApp & Social Media Care'],
    accent: 'border-teal-500/30',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* Page Hero */}
        <section className="bg-hero-gradient text-white py-20 sm:py-28 relative overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Comprehensive Solutions Hub
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                One Strategic Partner.{' '}
                <span className="gradient-text-coral">Five Core Pillars.</span>
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                TaskNera integrates HR, Talent Acquisition, Workforce Staffing, Virtual Assistance, and Customer Support under one master framework — supported by modern digital technology.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm flex items-center gap-2"
                >
                  <span>Build Your Tailored Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
                >
                  Review Engagement Models
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Pillars Showcase Cards */}
        <section className="py-20 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                Integrated Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Explore the Five Operational Pillars
              </h2>
              <p className="text-muted-foreground text-base mt-2">
                Select any pillar to review specialized scopes, delivery playbooks, and case studies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillarHighlights.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`card-premium rounded-3xl p-7 flex flex-col justify-between ${pillar.accent}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-muted border border-border flex items-center justify-center text-foreground">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1 border border-accent/20">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl text-foreground mb-2">
                        {pillar.title}
                      </h3>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                        {pillar.desc}
                      </p>

                      <div className="space-y-2 mb-6 pt-3 border-t border-border">
                        {pillar.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-xs text-foreground/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Link
                        href={pillar.href}
                        className="text-xs font-bold text-accent hover:underline flex items-center justify-between"
                      >
                        <span>Dedicated Pillar Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Embedded Full Interactive Services Section */}
        <ServicesSection />

      </main>
      <Footer />
    </>
  );
}
