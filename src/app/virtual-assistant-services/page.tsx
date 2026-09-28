'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Briefcase,
  Crown,
  Users,
  LineChart,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Calendar,
  Mail,
  FileText,
  Database,
  TrendingUp,
  Search,
} from 'lucide-react';

export const dynamic = 'force-static';

const vaPillars = [
  {
    title: 'Administrative Support',
    tagline: 'Streamline operational paperwork, schedules, and daily routines.',
    icon: Briefcase,
    color: 'border-amber-500/30 hover:border-amber-500/60',
    iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    badge: 'Core Admin',
    tasks: [
      'Calendar management',
      'Email management',
      'Documentation',
      'Scheduling',
      'Data entry',
    ],
  },
  {
    title: 'Executive Support',
    tagline: 'High-touch operational leverage for founders and senior leaders.',
    icon: Crown,
    color: 'border-accent/30 hover:border-accent/60',
    iconBg: 'bg-accent/10 text-accent border-accent/20',
    badge: 'Leadership Level',
    tasks: [
      'Executive assistance',
      'Meeting coordination',
      'Travel coordination',
      'Research',
      'Reporting',
    ],
  },
  {
    title: 'HR & Recruitment Support',
    tagline: 'Accelerate candidate pipelines and employee lifecycle logistics.',
    icon: Users,
    color: 'border-emerald-500/30 hover:border-emerald-500/60',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    badge: 'Talent & People',
    tasks: [
      'Candidate sourcing',
      'Resume screening',
      'Interview scheduling',
      'Recruitment pipeline updates',
      'Recruitment coordination',
    ],
  },
  {
    title: 'Sales & Operations Support',
    tagline: 'Enrich sales pipelines and keep operational checklists moving.',
    icon: LineChart,
    color: 'border-blue-500/30 hover:border-blue-500/60',
    iconBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    badge: 'Growth & Ops',
    tasks: [
      'CRM management',
      'Lead research',
      'Follow-ups',
      'Reporting',
      'Back-office operations',
    ],
  },
];

const reasons = [
  {
    title: '100% Vetted Human Remote Professionals',
    desc: 'Real, educated, and thoroughly interviewed specialists dedicated to your business — not automated bots or generic software.',
    icon: UserCheck,
  },
  {
    title: 'Direct Supervision & QA',
    desc: 'Account management and senior supervisors ensure task accuracy, turnaround SLAs, and continuous quality adherence.',
    icon: ShieldCheck,
  },
  {
    title: 'Seamless Tool Adoption',
    desc: 'Our assistants integrate seamlessly into Google Workspace, Microsoft 365, Slack, Notion, Asana, HubSpot, Salesforce, and your internal tools.',
    icon: Sparkles,
  },
  {
    title: 'Zero Employment Burden',
    desc: 'No payroll setup, local tax registrations, health insurance overhead, or severance liabilities on your balance sheet.',
    icon: Clock,
  },
];

export default function VirtualAssistantServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* ── Hero Section ── */}
        <section className="relative bg-section-dark text-white overflow-hidden py-24 sm:py-32 noise-overlay">
          <div className="absolute inset-0 blob-teal opacity-20 pointer-events-none" style={{ top: '-15%', right: '15%', width: '500px', height: '500px' }} />
          <div className="absolute inset-0 blob-coral opacity-15 pointer-events-none" style={{ bottom: '-15%', left: '10%', width: '450px', height: '450px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Virtual Assistant &amp; Business Support
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Virtual Assistant &amp;{' '}
                <span className="gradient-text-coral">Business Support</span>
              </h1>

              <div className="text-xl sm:text-2xl font-display font-medium text-white/90 italic">
                "Extend your team without extending your overhead."
              </div>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                TaskNera provides dedicated, highly skilled human remote professionals who handle administrative, executive, HR, sales, and operational tasks — giving your leadership team the freedom to focus on strategic growth.
              </p>

              {/* Crucial Human Clarification Banner */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-5 flex items-start gap-4 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">
                    100% Vetted Human Remote Professionals
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Our Virtual Assistants are real, educated professionals embedded into your workflow — not an automated AI chatbot or generic AI software. You get dependable human judgment, adaptability, and proactive accountability.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm sm:text-base"
                >
                  Build My Virtual Support Team
                </Link>
                <a
                  href="#pillars"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base hover:bg-white/15 transition-all"
                >
                  Explore Support Pillars
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 Major Service Pillars ── */}
        <section id="pillars" className="py-20 sm:py-28 bg-surface-subtle border-b border-border relative overflow-hidden">
          {/* Ambient background light pools */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Functional Pillars
                </span>
              </div>
              <h2 className="text-section-title font-display font-bold text-foreground mb-4">
                Four Pillars of{' '}
                <span className="gradient-text-teal">Virtual Support</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Structured capabilities tailored to eliminate operational friction and amplify executive focus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vaPillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`card-premium rounded-3xl p-8 border bg-card flex flex-col justify-between transition-all duration-300 ${pillar.color} shadow-sm group`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${pillar.iconBg} shadow-sm group-hover:scale-105 transition-transform`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-foreground text-2xl mb-2 group-hover:text-accent transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {pillar.tagline}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-border/70">
                        {pillar.tasks.map((task) => (
                          <div key={task} className="flex items-center gap-3 text-sm text-foreground/90 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                      <Link
                        href="/#contact"
                        className="text-xs font-bold text-accent hover:underline flex items-center gap-1.5"
                      >
                        <span>Deploy {pillar.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-xs text-muted-foreground">Dedicated Pods</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why TaskNera VAs ── */}
        <section className="py-20 sm:py-24 bg-surface-elevated border-b border-border relative overflow-hidden">
          {/* Ambient background light pools */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Why Outsource With TaskNera?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Eliminate the risks and quality inconsistencies of unmanaged freelance marketplaces.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((r) => {
                const IconComp = r.icon;
                return (
                  <div key={r.title} className="card-premium rounded-3xl p-6 bg-card border border-border space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base">{r.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-24 sm:py-32 bg-section-dark text-white text-center relative overflow-hidden border-t border-border/80">
          <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Ready to Extend Your Operational Capacity?
            </h2>
            <p className="text-white/75 text-base">
              Talk to our team to structure the right Virtual Assistant pod tailored to your executive or operational workload.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all text-sm shadow-xl shadow-accent/25"
              >
                Hire Your Virtual Assistant Pod
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
