'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const dynamic = 'force-static';

const vaRoles = [
  {
    title: 'Executive VA',
    badge: 'C-Suite & Founders',
    desc: 'High-touch confidential support for founders and executives — managing complex travel, board scheduling, inbox prioritization, and gatekeeping.',
    tasks: ['Complex calendar & multi-timezone scheduling', 'Executive inbox triage & ghostwriting', 'Meeting agendas, minutes & stakeholder prep'],
    icon: 'StarIcon',
  },
  {
    title: 'Administrative VA',
    badge: 'Business Operations',
    desc: 'Day-to-day administrative execution keeping your documentation, files, internal calendars, and organizational communications orderly.',
    tasks: ['Digital file organization & doc drafting', 'Invoicing, expense tracking & receipt logging', 'Vendor correspondence & routine queries'],
    icon: 'BriefcaseIcon',
  },
  {
    title: 'HR VA',
    badge: 'People Support',
    desc: 'Dedicated support for internal HR departments and hiring managers — coordinating interviews, updating HR portals, and assembling onboarding packets.',
    tasks: ['Interview scheduling & candidate follow-ups', 'Onboarding document collection & verification', 'HRMS data updates & employee record keeping'],
    icon: 'UserPlusIcon',
  },
  {
    title: 'Sales VA',
    badge: 'Pipeline Growth',
    desc: 'Empower account executives and founders with proactive prospect research, CRM hygiene, appointment confirmation, and quote preparation.',
    tasks: ['Prospect research & list enrichment', 'CRM updates (Salesforce, HubSpot, Pipedrive)', 'Outreach follow-ups & meeting setting'],
    icon: 'ChartBarIcon',
  },
  {
    title: 'E-commerce VA',
    badge: 'Retail & Marketplaces',
    desc: 'Operational management of digital storefronts (Shopify, Amazon, WooCommerce) — handling catalog updates, order tracking, and supplier checks.',
    tasks: ['Product catalog uploads & description editing', 'Inventory sync & supplier stock inquiries', 'Order processing & return coordination'],
    icon: 'ShoppingCartIcon',
  },
  {
    title: 'Research & Data VA',
    badge: 'Intelligence & Data',
    desc: 'Accurate data scraping, market benchmarking, competitive intelligence, spreadsheet modeling, and executive report synthesis.',
    tasks: ['Market & competitor analysis dossiers', 'Database cleansing, deduplication & entry', 'Excel/Sheets formulas, formatting & MIS reports'],
    icon: 'TableCellsIcon',
  },
  {
    title: 'Operations VA',
    badge: 'Workflow Continuity',
    desc: 'Process coordination ensuring projects, deliverables, team syncs, and operational check-lists stay on track across distributed tools.',
    tasks: ['Project management board updates (Asana, ClickUp, Notion)', 'Standard Operating Procedure (SOP) documentation', 'Cross-team status tracking & reminders'],
    icon: 'ArrowPathIcon',
  },
];

export default function VirtualAssistantServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* ── Hero Section ── */}
        <section className="relative bg-hero-gradient text-white overflow-hidden py-20 sm:py-28 noise-overlay">
          <div className="absolute inset-0 blob-teal opacity-20 pointer-events-none" style={{ top: '-15%', right: '15%', width: '500px', height: '500px' }} />
          <div className="absolute inset-0 blob-coral opacity-15 pointer-events-none" style={{ bottom: '-15%', left: '10%', width: '450px', height: '450px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                  Virtual Assistant &amp; Business Support
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-700 text-white leading-tight">
                Your Remote Team for the{' '}
                <span className="gradient-text-coral">Work Behind the Work.</span>
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                TaskNera provides dedicated, highly skilled human remote professionals who handle administrative, executive, sales, and operational tasks — giving your leadership team the freedom to focus on strategic growth.
              </p>

              {/* Crucial Human Clarification Banner */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-5 flex items-start gap-4 backdrop-blur-md">
                <div className="text-2xl mt-0.5">👤</div>
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
                  className="bg-accent text-accent-foreground font-semibold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-base"
                >
                  Build Your Virtual Support Team
                </Link>
                <a
                  href="#roles"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-base hover:bg-white/15 transition-all"
                >
                  Explore Specialized Roles
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 Specialized Roles (Requirement 14) ── */}
        <section id="roles" className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                  Domain Specialization
                </span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Specialized Human Virtual Assistants{' '}
                <span className="gradient-text-teal">For Every Function</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Match with dedicated professionals who have domain familiarity in your exact area of operational need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vaRoles.map((role, idx) => (
                <div
                  key={role.title}
                  className={`spotlight-card hover-lift bg-card border border-border rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between ${
                    idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Icon name={role.icon as 'BriefcaseIcon'} size={20} variant="outline" />
                      </div>
                      <span className="text-[11px] font-semibold text-accent bg-accent/10 rounded-full px-3 py-1">
                        {role.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-700 text-foreground text-xl mb-2">
                      {role.title}
                    </h3>

                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                      {role.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-border/60">
                      <div className="text-[11px] font-semibold text-foreground/70 uppercase tracking-wider">
                        Key Responsibilities:
                      </div>
                      {role.tasks.map((t) => (
                        <div key={t} className="flex items-start gap-2 text-xs text-foreground/80">
                          <span className="text-accent font-bold mt-0.5">✓</span>
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <Link
                      href="/#contact"
                      className="text-xs font-semibold text-accent hover:underline flex items-center justify-between"
                    >
                      <span>Deploy an {role.title}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Human Talent Section ── */}
        <section className="py-20 sm:py-24 bg-card border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-xs font-semibold text-secondary tracking-widest uppercase">
                    Human Judgment &amp; Accountability
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-700 text-foreground leading-tight">
                  Why Software Alone Isn't Enough For Complex Operations
                </h2>

                <p className="text-muted-foreground text-base leading-relaxed">
                  While AI and automation tools have their place, high-trust executive support, nuanced customer inquiries, and contextual operational judgments require reliable human professionals.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Contextual awareness that software algorithms consistently miss',
                    'Direct daily communication via Slack, Teams, email, or WhatsApp',
                    'NDA-backed data security and strict confidentiality protocols',
                    'Pre-vetted through structured interviews and practical assessments',
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center font-bold text-xs flex-shrink-0">
                        ✓
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-primary text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
                <div className="text-xs font-semibold text-accent uppercase tracking-widest">
                  Quick Deployment
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold">
                  Hire Your Dedicated Virtual Assistant in 48-72 Hours
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Tell us your required tasks, schedule, and toolstack. We match you with shortlisted, pre-screened professionals ready to start immediately.
                </p>
                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="inline-block bg-accent text-accent-foreground font-semibold px-7 py-3 rounded-full hover:brightness-110 active:scale-95 transition-all text-sm shadow-lg shadow-accent/25"
                  >
                    Build Your Virtual Support Team
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
