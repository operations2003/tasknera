'use client';
import React from 'react';
import Link from 'next/link';
import {
  Rocket,
  TrendingUp,
  Building,
  Globe2,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const stages = [
  {
    stage: 'Startups',
    subtitle: 'Build & Establish',
    icon: Rocket,
    desc: 'Build your first team and establish a reliable HR foundation.',
    benefits: [
      'Contingent success-fee hiring for critical founding talent',
      'Structured offer letters, compliant agreements & onboarding',
      'Fractional virtual assistant support for founders & leadership',
    ],
    color: 'border-accent/30',
    iconBg: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    stage: 'Growing SMEs',
    subtitle: 'Scale with Agility',
    icon: TrendingUp,
    desc: 'Scale hiring and HR operations without building huge internal overhead.',
    benefits: [
      'Payroll execution & statutory compliance support (PF, ESIC, TDS)',
      'Structured performance frameworks, HR policies & employee records',
      'Omnichannel virtual customer support pods & CRM management',
    ],
    color: 'border-secondary/30',
    iconBg: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    stage: 'Enterprises',
    subtitle: 'Managed Operational Scale',
    icon: Building,
    desc: 'Add specialized recruitment, contract workforce, or managed support capacity.',
    benefits: [
      'High-volume contract staffing and turnkey workforce deployment',
      'Dedicated RPO recruitment pods with structured SLA turnaround times',
      'Multichannel virtual customer care (voice, chat, email ticketing)',
    ],
    color: 'border-primary/20 hover:border-primary/40',
    iconBg: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    stage: 'International Companies',
    subtitle: 'Cross-Border Delivery',
    icon: Globe2,
    desc: 'Access talent and remote operational support across global markets.',
    benefits: [
      'Remote talent sourcing across India, US, UK, Europe and global pools',
      'Multi-timezone virtual assistant pods aligned to your operating hours',
      'Strict data security, NDA governance, and remote delivery controls',
    ],
    color: 'border-accent/20 hover:border-accent/40',
    iconBg: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    stage: 'Businesses Entering India',
    subtitle: 'India Market Entry',
    icon: MapPin,
    desc: 'Get support with talent acquisition, HR operations, and workforce setup in India.',
    benefits: [
      'In-country talent mapping and executive candidate acquisition',
      'Statutory compliance structuring, local employment norms & payroll',
      'Plug-and-play operational desk to launch smoothly in India',
    ],
    color: 'border-secondary/20 hover:border-secondary/40',
    iconBg: 'bg-secondary/10 text-secondary border-secondary/20',
  },
];

export default function WhoWeSupportSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-subtle relative overflow-hidden border-b border-border">
      {/* Ambient background light pools with subtle blue effects */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[350px] bg-sky-400/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              Who We Serve
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-foreground mb-4">
            Built For Businesses At{' '}
            <span className="gradient-text-coral">Every Stage</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Whether building your initial core team, scaling operations without overhead, or expanding across borders, TaskNera delivers the right people, structure, and operational capability.
          </p>
        </div>

        {/* 5 Stages Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {stages.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div
                key={st.stage}
                className={`card-premium rounded-3xl p-7 sm:p-8 flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${st.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground bg-muted border border-border rounded-full px-3 py-1">
                      {st.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-xl mb-2 group-hover:text-accent transition-colors">
                    {st.stage}
                  </h3>

                  <p className="text-foreground/80 font-medium text-sm mb-6 leading-relaxed">
                    {st.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-border/70">
                    {st.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/70">
                  <Link
                    href="/#contact"
                    className="text-xs font-bold text-foreground group-hover:text-accent flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore support for {st.stage}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
