'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProcessSection from '@/app/components/ProcessSection';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  BarChart,
  MessageSquare,
  FileText,
  Workflow,
} from 'lucide-react';

const guarantees = [
  {
    title: '48–72h Initial Shortlist',
    desc: 'Structured competency intake ensures vetted candidate profiles hit your inbox in days, not weeks.',
    icon: Clock,
  },
  {
    title: 'Proprietary JD Match Scoring',
    desc: 'Candidates are screened with our JD Match Evaluator to ensure precise skills alignment before interviews.',
    icon: Sparkles,
  },
  {
    title: 'Enterprise NDA & Security',
    desc: 'Strict non-disclosure agreements, MFA protocols, and secure data segregation protecting client information.',
    icon: ShieldCheck,
  },
  {
    title: 'Dedicated Account Director',
    desc: 'A single point of operational accountability monitoring SLAs, pod performance, and continuous delivery.',
    icon: Workflow,
  },
];

const cadenceRhythms = [
  {
    frequency: 'Daily Cadence',
    channel: 'Slack / Teams / Email',
    desc: 'Asynchronous daily standup updates, task completion logs, and active query resolution.',
  },
  {
    frequency: 'Weekly Scorecard',
    channel: 'Video Sync / Dashboard',
    desc: 'Metrics review on time-to-fill, CSAT scores, ticket volumes, and priority deliverables for the week ahead.',
  },
  {
    frequency: 'Monthly QBR',
    channel: 'Executive Business Review',
    desc: 'Strategic review of pod performance, capacity adjustments, ROI benchmarking, and roadmap planning.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* Page Hero */}
        <section className="bg-section-dark text-white py-20 sm:py-28 relative overflow-hidden border-b border-white/10 noise-overlay">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(15,184,138,0.18),rgba(255,255,255,0))] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
                <Compass className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Proven Delivery Framework
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                How TaskNera{' '}
                <span className="gradient-text-coral">Delivers Operational Excellence.</span>
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                A transparent, methodology-driven partnership lifecycle. We eliminate guesswork with guaranteed SLAs, transparent milestones, and vetted human teams.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm flex items-center gap-2"
                >
                  <span>Start Your Operational Kickoff</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#guarantees"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
                >
                  View Delivery Guarantees
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Guarantees Strip */}
        <section id="guarantees" className="py-14 bg-surface-subtle border-b border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((g) => {
                const IconComp = g.icon;
                return (
                  <div key={g.title} className="p-6 rounded-2xl bg-card border border-border/70 flex items-start gap-4 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">{g.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{g.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Embedded Core Process Section */}
        <ProcessSection />

        {/* Communication & Governance Cadence */}
        <section className="py-20 sm:py-28 bg-surface-subtle border-b border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                Operational Rhythms
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                How We Stay Aligned &amp; Accountable
              </h2>
              <p className="text-muted-foreground text-base mt-2">
                No black boxes. You receive structured communication, real-time dashboards, and scheduled review milestones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {cadenceRhythms.map((cadence) => (
                <div key={cadence.frequency} className="card-premium rounded-3xl p-7 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 inline-block mb-4">
                      {cadence.frequency}
                    </span>
                    <h3 className="font-display font-bold text-xl text-foreground mb-1">
                      {cadence.channel}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                      {cadence.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs text-foreground font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Included across all engagements</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Box */}
            <div className="bg-section-dark rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/15 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,184,138,0.15),transparent_50%)] pointer-events-none" />
              <div className="space-y-2 text-center sm:text-left relative z-10">
                <h3 className="font-display font-bold text-2xl">
                  Ready to deploy a streamlined workforce process?
                </h3>
                <p className="text-white/70 text-sm max-w-xl">
                  Speak directly with our operations leadership to map your workflows and receive a detailed Statement of Work within 24 hours.
                </p>
              </div>
              <Link
                href="/#contact"
                className="bg-accent text-accent-foreground font-bold px-7 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all text-sm flex-shrink-0 shadow-md relative z-10"
              >
                Schedule Kickoff Call
              </Link>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
