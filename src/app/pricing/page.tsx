'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EngagementModelsSection from '@/app/components/EngagementModelsSection';
import {
  Trophy,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  Coins,
  Layers,
} from 'lucide-react';

const tiers = [
  {
    name: 'Contingent / Milestone Hiring',
    tag: 'Flexible & Risk-Free',
    desc: 'Ideal for critical individual roles, executive search, and key founding hires without upfront retainers.',
    billing: 'Success-Aligned Milestone Fee',
    idealFor: 'Startups & SMEs needing critical specialist hires',
    sla: 'First shortlist in 48–72 hours',
    replacement: 'Contractual replacement support (terms defined in agreement)',
    features: [
      'Zero upfront commitment until candidate offer acceptance',
      'Proprietary JD Match Evaluator candidate scoring',
      'Full-cycle sourcing, competency screening & reference checks',
      'Dedicated domain recruitment specialist',
    ],
    cta: 'Inquire for Contingent Hiring',
    popular: false,
    accent: 'border-border',
  },
  {
    name: 'Dedicated Embedded Pods',
    tag: 'Most Popular for Scaling',
    desc: 'Dedicated full-time remote professionals embedded directly into your team for HR, Virtual Assistance, or VCS.',
    billing: 'Transparent Monthly Pod Rate',
    idealFor: 'Growing teams needing predictable operational headcount',
    sla: 'Dedicated 40 hrs/week · Overlapping Timezones',
    replacement: 'Fast talent reassignment SLA',
    features: [
      '100% vetted, educated human remote professionals',
      'Direct supervision and integration into your Slack, CRM & tools',
      'Comprehensive onboarding and continuous QA oversight',
      'No payroll, tax, or statutory compliance burden on your entity',
    ],
    cta: 'Build Your Dedicated Pod',
    popular: true,
    accent: 'border-accent shadow-glow-accent ring-2 ring-accent/30',
  },
  {
    name: 'Managed RPO & Operations',
    tag: 'Enterprise Scale',
    desc: 'End-to-end management of your recruitment, HR operations, payroll, and omnichannel customer support.',
    billing: 'Blended SLA Retainer + Volume Milestones',
    idealFor: 'Enterprises and scale-ups managing 50+ headcount',
    sla: 'Strict SLA benchmarks & dedicated Account Director',
    replacement: 'Continuous talent pipeline buffer',
    features: [
      'End-to-end recruitment process outsourcing (RPO)',
      'Complete statutory payroll & HR compliance audit and execution',
      '24/7 omnichannel virtual customer care desk (voice, chat, email)',
      'Custom dashboards, executive reporting & monthly business reviews',
    ],
    cta: 'Structure an Enterprise Agreement',
    popular: false,
    accent: 'border-secondary/40',
  },
];

const comparisonRows = [
  { feature: 'Core Focus', contingent: 'Individual Specialist Roles', embedded: 'Dedicated Team Members', managed: 'Full Operational Function' },
  { feature: 'Minimum Commitment', contingent: 'Single Role Mandate', embedded: '1 Dedicated Professional', managed: 'Custom Multi-Pod SLA' },
  { feature: 'Turnaround Time', contingent: '48–72 Hours to Shortlist', embedded: '3–5 Days Deployment', managed: 'Custom Implementation Roadmap' },
  { feature: 'Candidate Screening', contingent: 'JD Match Evaluator + Human Interview', embedded: 'Multi-stage Assessment + Client Interview', managed: 'Full Competency Framework' },
  { feature: 'Replacement Support', contingent: 'Defined in SOW', embedded: 'Immediate Talent Buffer', managed: 'Ongoing SLA Governance' },
  { feature: 'Compliance & Payroll', contingent: 'Handled on Placement', embedded: '100% Managed by TaskNera', managed: 'Full Statutory & Multi-State' },
  { feature: 'Tool Integration', contingent: 'Client Discretion', embedded: 'Direct in your Slack/CRM', managed: 'Enterprise API & Portal Sync' },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* Page Hero */}
        <section className="bg-section-dark text-white py-20 sm:py-28 relative overflow-hidden border-b border-white/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
                <Coins className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Transparent &amp; Flexible Models
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Flexible Models.{' '}
                <span className="gradient-text-coral">Scalable Support.</span>
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Clear, predictable engagement structures tailored to your headcount requirements, timeline urgency, and budget predictability — with zero hidden surprises.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm flex items-center gap-2"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#comparison"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
                >
                  Compare Frameworks
                </a>
              </div>
            </div>
          </div>

        </section>

        {/* 3 Core Tier Cards */}
        <section className="py-20 sm:py-28 bg-surface-subtle relative border-b border-border overflow-hidden">
          {/* Ambient background light pools */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                Predictable Structuring
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Three Primary Engagement Frameworks
              </h2>
              <p className="text-muted-foreground text-base mt-2">
                Whether you need a single executive, dedicated remote assistants, or full HR operations, TaskNera scales with your operational stage.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16 items-stretch">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`card-premium rounded-3xl p-8 flex flex-col justify-between relative ${tier.accent} ${
                    tier.popular ? 'bg-gradient-to-b from-card to-accent/5' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{tier.tag}</span>
                    </div>
                  )}

                  <div>
                    {!tier.popular && (
                      <span className="inline-block text-[11px] font-bold text-muted-foreground bg-muted rounded-full px-3 py-1 mb-3">
                        {tier.tag}
                      </span>
                    )}

                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {tier.desc}
                    </p>

                    <div className="p-4 rounded-2xl bg-muted/60 border border-border/80 mb-6 space-y-2">
                      <div className="text-xs text-muted-foreground font-medium">Billing Model:</div>
                      <div className="text-base font-bold text-foreground">{tier.billing}</div>
                      <div className="text-xs text-accent font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{tier.sla}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                        Included Highlights:
                      </div>
                      {tier.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Link
                      href="/#contact"
                      className={`block w-full text-center py-3.5 rounded-full font-bold text-sm transition-all shadow-md ${
                        tier.popular
                          ? 'bg-accent text-accent-foreground hover:brightness-110 shadow-accent/25'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div id="comparison" className="scroll-mt-28">
              <div className="text-center max-w-xl mx-auto mb-10">
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Side-by-Side Model Comparison
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                  Evaluate deliverables, SLAs, and management oversight across all models.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/70 text-foreground border-b border-border">
                    <tr>
                      <th className="p-4 sm:p-5 font-bold">Feature / Metric</th>
                      <th className="p-4 sm:p-5 font-bold text-emerald-600">Contingent</th>
                      <th className="p-4 sm:p-5 font-bold text-accent">Dedicated Pods</th>
                      <th className="p-4 sm:p-5 font-bold text-secondary">Managed RPO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonRows.map((row) => (
                      <tr key={row.feature} className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 sm:p-5 font-semibold text-foreground">{row.feature}</td>
                        <td className="p-4 sm:p-5 text-muted-foreground">{row.contingent}</td>
                        <td className="p-4 sm:p-5 text-foreground font-medium">{row.embedded}</td>
                        <td className="p-4 sm:p-5 text-muted-foreground">{row.managed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* Embedded Full Engagement Models Section */}
        <EngagementModelsSection />

      </main>
      <Footer />
    </>
  );
}
