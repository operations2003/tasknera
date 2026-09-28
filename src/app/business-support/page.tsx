'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Administrative & Executive Assistance',
    desc: 'Dedicated human virtual assistants for administrative execution, executive support, scheduling, and email management — freeing your leadership team for core priorities.',
    icon: 'BriefcaseIcon',
    useCases: ['Executive calendar & travel management', 'Email inbox management & triage', 'Document preparation, minutes & formatting'],
    link: '/virtual-assistant-services',
  },
  {
    title: 'Data Entry & Research',
    desc: 'Accurate, timely data entry and research support by vetted remote specialists to keep your databases clean, current, and actionable.',
    icon: 'TableCellsIcon',
    useCases: ['CRM data entry & enrichment', 'Market & competitor research dossiers', 'Lead list building & verification'],
    link: '/virtual-assistant-services',
  },
  {
    title: 'CRM & Database Management',
    desc: 'End-to-end CRM management to ensure your customer data is organized, up-to-date, and driving pipeline conversions.',
    icon: 'ServerStackIcon',
    useCases: ['CRM setup, configuration & hygiene', 'Contact & deal stage updates', 'Pipeline reporting & dashboards'],
    link: '/virtual-assistant-services',
  },
  {
    title: 'Sales & Operations Support',
    desc: 'Virtual support for sales teams and operations — from lead follow-up and appointment setting to process coordination.',
    icon: 'ChartBarIcon',
    useCases: ['Lead outreach & follow-up coordination', 'Sales reporting & pipeline tracking', 'Operations process documentation'],
    link: '/virtual-assistant-services',
  },
  {
    title: 'Virtual Customer Support (VCS)',
    desc: 'Dedicated virtual customer support teams handling voice, chat, email, social media, and WhatsApp — delivering seamless customer retention at scale.',
    icon: 'PhoneIcon',
    useCases: ['Voice, chat & email support operations', 'Social media & WhatsApp customer care', 'Helpdesk, ticket management & back-office support'],
    link: '/virtual-customer-support',
  },
];

const capabilities = [
  'JD Match Evaluator',
  'HRMS',
  'HR Portals',
  'CRM',
  'AI-Assisted Sourcing',
  'Recruitment Analytics',
  'Workforce Dashboards',
  'Digital Workflows',
  'Reporting & MIS',
];

export default function BusinessSupportPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">

        {/* Hero */}
        <section className="bg-section-dark pt-24 pb-20 sm:pt-32 sm:pb-28 relative overflow-hidden text-white noise-overlay">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(15,184,138,0.18),rgba(255,255,255,0))] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-white/90 tracking-widest uppercase">
                  Virtual Assistance &amp; Customer Support
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-700 text-white leading-tight">
                Operational &amp; Customer Support{' '}
                <span className="gradient-text-coral">Built for Scale</span>
              </h1>

              <p className="text-white/80 text-lg leading-relaxed">
                TaskNera provides reliable business support, human virtual assistants, and omnichannel customer care to keep your operations running smoothly every day.
              </p>

              {/* Notice Banner */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4 flex items-start gap-3 backdrop-blur-md">
                <span className="text-xl">👤</span>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  <strong>Human Remote Professionals:</strong> All virtual assistants and customer support pods are managed, trained human professionals dedicated to your workflows — never an automated bot.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/virtual-assistant-services"
                  className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all text-sm shadow-lg shadow-accent/25"
                >
                  Explore Virtual Assistant Services →
                </Link>
                <Link
                  href="/virtual-customer-support"
                  className="glass-btn text-white font-semibold px-6 py-3 rounded-full text-sm"
                >
                  Explore Virtual Customer Support (VCS) →
                </Link>
              </div>
            </div>
          </div>

        </section>

        {/* Dedicated Hub Cards */}
        <section className="py-16 bg-surface-subtle border-b border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-card border border-border/70 rounded-3xl p-8 space-y-4 hover:border-accent/40 transition-colors shadow-sm">
                <div className="text-xs font-semibold text-accent uppercase tracking-widest">
                  Specialized Solution #1
                </div>
                <h2 className="text-2xl font-display font-700 text-foreground">
                  Virtual Assistant Services
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your remote team for executive support, administration, HR coordination, sales prospecting, data entry, and project workflows.
                </p>
                <Link
                  href="/virtual-assistant-services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  View Virtual Assistant Services Page →
                </Link>
              </div>

              <div className="bg-card border border-border/70 rounded-3xl p-8 space-y-4 hover:border-accent/40 transition-colors shadow-sm">
                <div className="text-xs font-semibold text-accent uppercase tracking-widest">
                  Specialized Solution #2
                </div>
                <h2 className="text-2xl font-display font-700 text-foreground">
                  Virtual Customer Support (VCS)
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Omnichannel voice, live chat, email, social media, and WhatsApp customer service desks designed for professional brand continuity.
                </p>
                <Link
                  href="/virtual-customer-support"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  View Virtual Customer Support Page →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Service Breakdown */}
        <section className="py-20 bg-surface-elevated">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-section-title font-display font-700 text-foreground mb-3">
                Business Support Capabilities
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Flexible business assistance services integrated into your daily operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="spotlight-card hover-lift bg-card border border-border/70 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 text-accent">
                      <Icon name={svc.icon as 'BriefcaseIcon'} size={20} variant="outline" />
                    </div>
                    <h3 className="font-display font-700 text-foreground text-lg mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                    <div className="space-y-1.5 pt-3 border-t border-border/50">
                      {svc.useCases.map((u) => (
                        <div key={u} className="flex items-center gap-2 text-xs text-foreground/80">
                          <span className="text-accent font-bold">✓</span>
                          <span>{u}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border">
                    <Link
                      href={svc.link}
                      className="text-xs font-semibold text-accent hover:underline flex items-center justify-between"
                    >
                      <span>Explore {svc.title.split('&')[0]}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Layer Banner */}
        <section className="py-16 bg-surface-subtle border-t border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h3 className="font-display font-700 text-2xl text-foreground">
              Supported by Modern Digital Tools
            </h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Our teams seamlessly adopt and integrate into your existing digital ecosystem without requiring heavy custom retooling.
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="bg-card border border-border/70 rounded-full px-4 py-1.5 text-xs font-semibold text-foreground/85 shadow-sm"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-section-dark text-white text-center relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,184,138,0.15),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Build Your Extended Operations Team
            </h2>
            <p className="text-white/70 text-base">
              Talk to our team to structure the right virtual support pods for your operational needs.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block bg-accent text-accent-foreground font-semibold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all text-sm shadow-xl shadow-accent/25"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
