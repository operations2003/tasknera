'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const dynamic = 'force-static';

const channels = [
  {
    title: 'Voice Support',
    icon: 'PhoneIcon',
    desc: 'Inbound customer service, technical phone desks, appointment confirmation, and resolution calls handled by empathetic, well-trained agents.',
    highlights: ['Bilingual & accent-neutral teams', 'IVR & call routing integration', 'Call recording & QA scoring'],
  },
  {
    title: 'Chat Support',
    icon: 'ChatBubbleLeftRightIcon',
    desc: 'Real-time website live chat and in-app support responding within seconds to convert visitors, troubleshoot issues, and retain customers.',
    highlights: ['Sub-60s initial response time', 'Pre-sales & product guidance', 'Concurrent multi-chat management'],
  },
  {
    title: 'Email Support',
    icon: 'EnvelopeIcon',
    desc: 'Comprehensive ticket management, inquiry triage, and detailed email resolutions adhering to strict SLA tiers and escalation rules.',
    highlights: ['SLA-driven first-touch resolution', 'Template + bespoke responses', 'Zendesk, Freshdesk & HubSpot ready'],
  },
  {
    title: 'Social Media Support',
    icon: 'ShareIcon',
    desc: 'Active monitoring of brand mentions, DMs, comments, and sentiment across LinkedIn, X/Twitter, Instagram, and Facebook.',
    highlights: ['24/7 brand sentiment tracking', 'Rapid public-to-private escalation', 'Community engagement & moderation'],
  },
  {
    title: 'WhatsApp Support',
    icon: 'DevicePhoneMobileIcon',
    desc: 'Conversational customer care over WhatsApp Business API for order tracking, updates, instant support, and loyalty engagement.',
    highlights: ['WhatsApp Business API integration', 'Automated workflows + human agents', 'Rich media & document sharing'],
  },
  {
    title: 'Helpdesk & Ticket Support',
    icon: 'TicketIcon',
    desc: 'Level 1 and Level 2 helpdesk ticketing for SaaS, e-commerce, and enterprise platforms — managing bug reports and user onboarding.',
    highlights: ['L1/L2 technical triage', 'Knowledge base maintenance', 'Bug replication & engineering handoff'],
  },
  {
    title: 'Back-Office Customer Support',
    icon: 'ClipboardDocumentCheckIcon',
    desc: 'Post-interaction case processing, billing inquiries, return/refund authorizations, customer record enrichment, and KYC verification.',
    highlights: ['Transaction auditing & refunds', 'KYC & identity document verification', 'CRM database reconciliation'],
  },
  {
    title: 'Customer Follow-ups',
    icon: 'ArrowPathIcon',
    desc: 'Proactive outreach following service interactions, CSAT/NPS survey collection, renewal reminders, and win-back calls.',
    highlights: ['CSAT & NPS sentiment surveys', 'Churn prevention outreach', 'Subscription renewal follow-ups'],
  },
];

const vcsPillars = [
  {
    title: 'Professional Business Support',
    desc: 'Not a noisy, generic call-centre. We deploy brand-aligned, educated support specialists dedicated to your customer experience.',
    icon: '🛡️',
  },
  {
    title: 'Omnichannel Integration',
    desc: 'Seamless continuity across voice, live chat, ticketing systems, and messaging apps with unified customer history.',
    icon: '🔄',
  },
  {
    title: 'Rigorous Quality Assurance',
    desc: 'Dedicated QA leads monitoring call recordings, ticket accuracy, response times, and customer satisfaction scores.',
    icon: '📊',
  },
  {
    title: 'Scalable Team Pods',
    desc: 'Scale up during seasonal peaks or product launches, and scale down smoothly without overhead or severance friction.',
    icon: '📈',
  },
];

export default function VirtualCustomerSupportPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* ── Hero Section ── */}
        <section className="relative bg-hero-gradient text-white overflow-hidden py-20 sm:py-28 noise-overlay">
          <div className="absolute inset-0 blob-teal opacity-20 pointer-events-none" style={{ top: '-20%', right: '10%', width: '550px', height: '550px' }} />
          <div className="absolute inset-0 blob-coral opacity-15 pointer-events-none" style={{ bottom: '-20%', left: '5%', width: '450px', height: '450px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                  Virtual Customer Support (VCS)
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-700 text-white leading-tight">
                Customer Support That{' '}
                <span className="gradient-text-coral">Scales With Your Business.</span>
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                TaskNera delivers dedicated, omnichannel customer support teams across voice, chat, email, social media, and WhatsApp. Designed for professional brand continuity, fast resolution, and measurable retention.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-semibold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-base"
                >
                  Build Your Customer Support Team
                </Link>
                <a
                  href="#channels"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-base hover:bg-white/15 transition-all"
                >
                  Explore Support Channels
                </a>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  <span className="text-accent font-bold">✓</span>
                  <span>Omnichannel Coverage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent font-bold">✓</span>
                  <span>SLA-Backed Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent font-bold">✓</span>
                  <span>Zero Infrastructure Burden</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VCS Strategic Value ── */}
        <section className="py-16 sm:py-20 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vcsPillars.map((p) => (
                <div key={p.title} className="p-6 rounded-2xl bg-muted/60 border border-border/80 space-y-3">
                  <div className="text-3xl">{p.icon}</div>
                  <h3 className="font-display font-700 text-foreground text-base">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8 Support Channels (Requirement 13) ── */}
        <section id="channels" className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                  Comprehensive Coverage
                </span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Complete Omnichannel{' '}
                <span className="gradient-text-teal">Support Architecture</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Meet your customers wherever they are — voice, chat, email, social or messaging apps — with unified quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((ch) => (
                <div
                  key={ch.title}
                  className="spotlight-card hover-lift bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                      <Icon name={ch.icon as 'PhoneIcon'} size={20} className="text-accent" variant="outline" />
                    </div>

                    <h3 className="font-display font-700 text-foreground text-lg mb-2">
                      {ch.title}
                    </h3>

                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                      {ch.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-border/60">
                      {ch.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-foreground/80">
                          <span className="text-accent font-bold">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border">
                    <Link
                      href="/#contact"
                      className="text-xs font-semibold text-accent hover:underline flex items-center justify-between"
                    >
                      <span>Deploy {ch.title}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement Flow ── */}
        <section className="py-20 sm:py-24 bg-primary text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-white/90 tracking-widest uppercase">
                    Rapid Setup
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-700 text-white">
                  How We Deploy Your Customer Support Pod
                </h2>
                <div className="space-y-4 text-white/75 text-sm sm:text-base">
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-white block">Workflow &amp; Tool Mapping:</strong>
                      We integrate with your existing helpdesk (Zendesk, Intercom, Freshdesk, Gorgias, or custom CRM).
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-white block">Knowledge Base &amp; Script Ingestion:</strong>
                      We build tailored SOPs, escalation matrices, and response playbooks matching your brand tone.
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-white block">Go-Live &amp; SLA Tracking:</strong>
                      Your dedicated support pod goes live with active supervisor QA, daily syncs, and SLA monitoring.
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="text-lg font-display font-bold text-white">
                  Ready to upgrade your customer experience?
                </div>
                <p className="text-white/60 text-sm">
                  Whether you need a 2-person pilot pod or a 24/7 omnichannel customer service desk, TaskNera provides flexible, predictable scaling.
                </p>
                <div className="space-y-3 pt-2">
                  <Link
                    href="/#contact"
                    className="block w-full text-center bg-accent text-accent-foreground font-semibold py-3.5 rounded-full hover:brightness-110 transition-all text-sm shadow-lg shadow-accent/25"
                  >
                    Build Your Customer Support Team
                  </Link>
                  <Link
                    href="/pricing"
                    className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-full transition-colors text-xs"
                  >
                    Review Engagement Models
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
