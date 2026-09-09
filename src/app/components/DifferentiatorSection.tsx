'use client';
import React from 'react';
import Link from 'next/link';
import {
  Target,
  Users,
  Settings2,
  Briefcase,
  Headphones,
  Globe2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const examples = [
  {
    need: 'Need one hire?',
    help: 'We can help.',
    desc: 'Specialized permanent hiring with domain-focused recruitment experts across tech, finance, and operations.',
    icon: Target,
    badge: 'Talent & Recruitment',
    badgeColor: 'text-emerald-500 bg-emerald-50 border-emerald-200',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/60',
    href: '/talent-acquisition',
  },
  {
    need: 'Need 50 employees?',
    help: 'We can help.',
    desc: 'Rapid volume hiring campaigns, contract staffing deployment, and scalable multi-location workforce pipelines.',
    icon: Users,
    badge: 'Workforce Scale',
    badgeColor: 'text-blue-500 bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-500/10 text-blue-600 border-blue-200/60',
    href: '/hr-workforce-solutions#workforce',
  },
  {
    need: 'Need an HR operations team?',
    help: 'We can help.',
    desc: 'End-to-end HRMS setup, payroll administration, statutory compliance audits, and employee lifecycle management.',
    icon: Settings2,
    badge: 'HR & People Ops',
    badgeColor: 'text-orange-500 bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-500/10 text-orange-600 border-orange-200/60',
    href: '/hr-workforce-solutions',
  },
  {
    need: 'Need virtual assistants?',
    help: 'We can help.',
    desc: '100% vetted human remote professionals for executive assistance, CRM hygiene, scheduling, research, and admin tasks.',
    icon: Briefcase,
    badge: 'Virtual Assistance',
    badgeColor: 'text-amber-600 bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-500/10 text-amber-600 border-amber-200/60',
    href: '/virtual-assistant-services',
  },
  {
    need: 'Need customer support agents?',
    help: 'We can help.',
    desc: 'Omnichannel virtual customer support pods handling voice, chat, email, social media, and ticketing with strict SLAs.',
    icon: Headphones,
    badge: 'Customer Support (VCS)',
    badgeColor: 'text-teal-600 bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-500/10 text-teal-600 border-teal-200/60',
    href: '/virtual-customer-support',
  },
  {
    need: 'Need an end-to-end workforce partner?',
    help: 'We can help.',
    desc: 'Fully managed talent acquisition, employee operations, payroll, and business support seamlessly under one master partner.',
    icon: Globe2,
    badge: 'Full Operations Partner',
    badgeColor: 'text-purple-600 bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-500/10 text-purple-600 border-purple-200/60',
    href: '/pricing',
  },
];

export default function DifferentiatorSection() {
  return (
    <section className="py-20 sm:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs font-bold text-secondary tracking-widest uppercase">
              The TaskNera Difference
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-foreground mb-6 leading-tight">
            Not Just a Recruitment Agency.{' '}
            <span className="block text-muted-foreground font-normal text-2xl sm:text-3xl mt-1">
              Not Just an Outsourcing Provider.
            </span>
            <span className="gradient-text-teal block mt-1">
              Your Extended Business Partner.
            </span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            TaskNera brings HR, recruitment, workforce management, and daily operational support together under one roof — giving organizations the agility to outsource one single role, multiple functional pods, or their entire people and support operations.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {examples.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.need}
                className="card-premium rounded-3xl p-7 flex flex-col justify-between group hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
                style={{ transitionDelay: `${idx * 0.04}s` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold border rounded-full px-3 py-1 ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-xl mb-1.5">
                    {item.need}
                  </h3>
                  <div className="text-accent font-bold text-base mb-3 flex items-center gap-1.5">
                    <span>{item.help}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Modular Model</span>
                  <Link
                    href={item.href}
                    className="text-xs font-bold text-foreground group-hover:text-accent flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Banner */}
        <div className="bg-primary rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="space-y-3 text-center lg:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modular &amp; Scalable Execution</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-display font-bold leading-snug">
              Outsource one function, multiple pods, or your entire operations.
            </h4>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              From an on-demand virtual assistant to full HR outsourcing and high-volume workforce staffing, TaskNera adapts around your evolving business roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 flex-shrink-0">
            <Link
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all border border-white/15 text-center"
            >
              Compare Engagement Models
            </Link>
            <Link
              href="/#contact"
              className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/25 text-sm flex items-center gap-2"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
