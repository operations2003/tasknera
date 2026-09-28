'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Phone,
  Mail,
  MessageSquare,
  Share2,
  Ticket,
  ClipboardCheck,
  Smartphone,
  Shield,
  RefreshCw,
  BarChart3,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  UserCheck,
  AlertTriangle,
} from 'lucide-react';

export const dynamic = 'force-static';

const channels = [
  {
    title: 'Voice Support',
    icon: Phone,
    desc: 'Inbound customer assistance, technical phone desks, appointment confirmation, and complex phone resolutions handled by fluent, well-trained agents.',
    highlights: ['Bilingual & accent-neutral teams', 'IVR & call routing integration', 'Call recording & QA scoring'],
  },
  {
    title: 'Email Support',
    icon: Mail,
    desc: 'Comprehensive ticket management, inquiry triage, and detailed email resolutions adhering to strict SLA tiers and escalation playbooks.',
    highlights: ['SLA-driven first-touch response', 'Zendesk, Freshdesk & HubSpot ready', 'Custom template & bespoke replies'],
  },
  {
    title: 'Live Chat',
    icon: MessageSquare,
    desc: 'Real-time website live chat and in-app support responding in seconds to convert visitors, troubleshoot issues, and prevent churn.',
    highlights: ['Sub-60s initial response time', 'Pre-sales & product guidance', 'Concurrent multi-chat management'],
  },
  {
    title: 'WhatsApp Support',
    icon: Smartphone,
    desc: 'Conversational customer care over WhatsApp Business API for order tracking, updates, instant support, and loyalty engagement.',
    highlights: ['WhatsApp Business API integration', 'Order updates & instant messaging', 'Rich media & document sharing'],
  },
  {
    title: 'Social Media Support',
    icon: Share2,
    desc: 'Active monitoring of brand mentions, direct messages, comments, and sentiment across LinkedIn, X/Twitter, Instagram, and Facebook.',
    highlights: ['Brand sentiment tracking', 'Rapid public-to-private escalation', 'Community moderation & care'],
  },
  {
    title: 'Helpdesk & Ticketing',
    icon: Ticket,
    desc: 'Level 1 and Level 2 helpdesk ticketing for SaaS, e-commerce, and enterprise platforms — managing technical troubleshooting and user onboarding.',
    highlights: ['L1/L2 technical triage', 'Knowledge base maintenance', 'Bug replication & engineering handoff'],
  },
  {
    title: 'Back-Office Support',
    icon: ClipboardCheck,
    desc: 'Post-interaction case processing, billing inquiries, return/refund authorizations, customer record enrichment, and KYC verification.',
    highlights: ['Transaction auditing & refunds', 'KYC & identity document verification', 'CRM database reconciliation'],
  },
];

const functionsList = [
  {
    title: 'Customer Enquiries',
    desc: 'Answering product specifications, pricing questions, eligibility checks, and service information promptly.',
    icon: HelpCircle,
  },
  {
    title: 'Order & Status Support',
    desc: 'Tracking shipments, processing modifications, delivery inquiries, and order lifecycle updates.',
    icon: ClipboardCheck,
  },
  {
    title: 'Appointment Scheduling',
    desc: 'Coordinating calendars, consultations, client bookings, reminders, and calendar re-scheduling.',
    icon: Clock,
  },
  {
    title: 'Follow-ups & Retention',
    desc: 'Proactive outreach following service interactions, renewal prompts, and post-purchase check-ins.',
    icon: RefreshCw,
  },
  {
    title: 'Complaint Handling',
    desc: 'Empathetic de-escalation, thorough root-cause logging, and structured conflict resolution.',
    icon: Shield,
  },
  {
    title: 'Ticket Management',
    desc: 'Prioritizing, tagging, categorizing, and clearing customer tickets against established SLA metrics.',
    icon: Ticket,
  },
  {
    title: 'Customer Feedback & CSAT',
    desc: 'Collecting CSAT, NPS, and service reviews to continually inform operational and product improvements.',
    icon: BarChart3,
  },
  {
    title: 'Escalation Management',
    desc: 'Smooth, tiered routing of complex or sensitive issues to internal department leads without customer drop-off.',
    icon: AlertTriangle,
  },
];

const vcsPillars = [
  {
    title: 'Dedicated Human Specialists',
    desc: 'Educated, rigorously trained support professionals dedicated exclusively to your workflows — never generic bots.',
    icon: UserCheck,
  },
  {
    title: 'Unified Omnichannel Stack',
    desc: 'Seamless continuity across voice, live chat, ticketing systems, and messaging apps with unified customer context.',
    icon: RefreshCw,
  },
  {
    title: 'Supervised Quality Assurance',
    desc: 'Dedicated QA leads monitoring interactions, ticket accuracy, response speed, and customer satisfaction metrics.',
    icon: BarChart3,
  },
  {
    title: 'Agile Team Scaling',
    desc: 'Ramp capacity during peak seasons, campaigns, or product launches, and scale down smoothly without severance friction.',
    icon: TrendingUp,
  },
];

export default function VirtualCustomerSupportPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* ── Hero Section ── */}
        <section className="relative bg-section-dark text-white overflow-hidden py-20 sm:py-28 noise-overlay">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(15,184,138,0.18),rgba(255,255,255,0))] pointer-events-none" />
          <div className="absolute inset-0 blob-teal opacity-20 pointer-events-none" style={{ top: '-20%', right: '10%', width: '550px', height: '550px' }} />
          <div className="absolute inset-0 blob-coral opacity-15 pointer-events-none" style={{ bottom: '-20%', left: '5%', width: '450px', height: '450px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Core Service Vertical
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Virtual Customer{' '}
                <span className="gradient-text-coral">Support</span>
              </h1>

              <p className="text-white/85 text-lg sm:text-xl leading-relaxed font-normal">
                Customer support teams that help your business stay responsive, available and scalable.
              </p>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                TaskNera delivers dedicated, omnichannel customer support teams across voice, chat, email, social media, and WhatsApp. Designed for professional brand continuity, fast first-touch resolution, and measurable retention.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm sm:text-base"
                >
                  Build My Customer Support Team
                </Link>
                <a
                  href="#channels"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base hover:bg-white/15 transition-all"
                >
                  Explore Channels &amp; Functions
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>7 Omnichannel Channels</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>SLA-Backed Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>100% Dedicated Human Agents</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 Strategic Value Pillars ── */}
        <section className="py-16 sm:py-20 bg-surface-subtle border-b border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vcsPillars.map((p) => {
                const IconComp = p.icon;
                return (
                  <div key={p.title} className="p-6 rounded-3xl bg-card border border-border/70 space-y-3 group hover:border-accent/40 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Channels Section (7 Core Channels) ── */}
        <section id="channels" className="py-20 sm:py-28 bg-surface-elevated border-b border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Coverage Channels
                </span>
              </div>
              <h2 className="text-section-title font-display font-bold text-foreground mb-4">
                Support Channels{' '}
                <span className="gradient-text-teal">We Manage</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Meet your customers wherever they are — voice, email, chat, messaging or social — with unified brand excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {channels.map((ch) => {
                const IconComp = ch.icon;
                return (
                  <div
                    key={ch.title}
                    className="card-premium rounded-3xl p-7 flex flex-col justify-between group border bg-card"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 text-accent group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-accent transition-colors">
                        {ch.title}
                      </h3>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                        {ch.desc}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-border/60">
                        {ch.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border">
                      <Link
                        href="/#contact"
                        className="text-xs font-bold text-accent hover:underline flex items-center justify-between"
                      >
                        <span>Deploy {ch.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Functions Section (8 Core Functions) ── */}
        <section className="py-20 sm:py-28 bg-surface-subtle border-b border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">
                  Functional Scope
                </span>
              </div>
              <h2 className="text-section-title font-display font-bold text-foreground mb-4">
                Customer Support{' '}
                <span className="gradient-text-coral">Functions Handled</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Our support specialists are trained on your specific product lines, operational playbooks, and brand voice.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {functionsList.map((fn) => {
                const IconComp = fn.icon;
                return (
                  <div
                    key={fn.title}
                    className="card-premium rounded-3xl p-6 border bg-card flex flex-col justify-between group hover:border-accent/40 transition-colors"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 text-secondary">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-foreground text-base mb-2">
                        {fn.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {fn.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-20 sm:py-24 bg-section-dark text-white relative overflow-hidden border-t border-border/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,184,138,0.15),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Ready to elevate your customer responsiveness?
            </h2>
            <p className="text-white/75 text-base max-w-2xl mx-auto">
              From a dedicated 2-agent pilot pod to a 24/7 omnichannel customer care desk, TaskNera provides predictable, SLA-backed support.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all text-sm shadow-xl shadow-accent/25"
              >
                Build My Customer Support Team
              </Link>
              <Link
                href="/pricing"
                className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
              >
                Review Pricing Frameworks
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
