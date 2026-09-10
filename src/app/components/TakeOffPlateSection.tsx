'use client';
import React from 'react';
import Link from 'next/link';
import {
  Target,
  Building2,
  Users,
  Briefcase,
  Headphones,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const businessIntents = [
  {
    intent: 'I need to hire people',
    solution: 'Talent & Recruitment',
    desc: 'Specialized permanent hiring, contract staffing, and executive search backed by domain recruiters and JD Match scoring.',
    href: '/talent-acquisition',
    badge: 'Hiring & Sourcing',
    color: 'border-emerald-500/30 hover:border-emerald-500/60',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    icon: Target,
    points: ['Executive & leadership search', 'Technical & non-tech talent', 'Rapid shortlist turnaround'],
  },
  {
    intent: 'I need HR support',
    solution: 'HR & People Operations',
    desc: 'End-to-end employee lifecycle management, compliant onboarding, payroll execution, and structured performance frameworks.',
    href: '/hr-workforce-solutions',
    badge: 'HR Operations',
    color: 'border-orange-500/30 hover:border-orange-500/60',
    iconBg: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    icon: Building2,
    points: ['Payroll & statutory compliance', 'HR policies & handbooks', 'Employee onboarding & exits'],
  },
  {
    intent: 'I need flexible manpower',
    solution: 'Workforce Solutions',
    desc: 'Rapid temporary staffing, contract talent deployment, multi-location shift scheduling, and agile headcount scaling.',
    href: '/hr-workforce-solutions#workforce',
    badge: 'Flexible Staffing',
    color: 'border-blue-500/30 hover:border-blue-500/60',
    iconBg: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    icon: Users,
    points: ['Contract staffing pods', 'Seasonal & surge headcount', 'Turnkey workforce deployment'],
  },
  {
    intent: 'I need someone to handle business tasks',
    solution: 'Virtual Assistant & Support',
    desc: '100% vetted human remote professionals managing executive scheduling, administrative workflows, CRM hygiene, and research.',
    href: '/virtual-assistant-services',
    badge: 'Virtual Assistant',
    color: 'border-amber-500/30 hover:border-amber-500/60',
    iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    icon: Briefcase,
    points: ['Calendar & inbox triage', 'CRM & data operations', 'Dedicated human assistants'],
  },
  {
    intent: 'I need customer support',
    solution: 'Virtual Customer Support (VCS)',
    desc: 'Omnichannel customer support teams managing voice, live chat, email ticketing, WhatsApp, and social care with strict SLAs.',
    href: '/virtual-customer-support',
    badge: 'Customer Care',
    color: 'border-teal-500/30 hover:border-teal-500/60',
    iconBg: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    icon: Headphones,
    points: ['Omnichannel voice, chat & email', 'WhatsApp & social media desks', 'Sub-60s SLA response times'],
  },
  {
    intent: 'I want to outsource HR',
    solution: 'HR Outsourcing / RPO',
    desc: 'Fully managed talent acquisition and HR operations pods that operate as your seamless internal people department.',
    href: '/pricing',
    badge: 'Managed Outsourcing',
    color: 'border-purple-500/30 hover:border-purple-500/60',
    iconBg: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    icon: RefreshCw,
    points: ['Full recruitment outsourcing (RPO)', 'Complete statutory HR desk', 'Predictable SLA retainer models'],
  },
];

export default function TakeOffPlateSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted relative overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              For Businesses &amp; Founders
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-foreground mb-4">
            What Can TaskNera{' '}
            <span className="gradient-text-teal">Help You With?</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Whatever people, talent, or operational bottleneck your business faces — we have the dedicated solution, vetted team, and SLA-backed model ready to deploy.
          </p>
        </div>

        {/* 6 Core Business Intent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {businessIntents.map((item, i) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.intent}
                className={`card-premium rounded-3xl p-7 flex flex-col justify-between border bg-card transition-all duration-300 ${item.color} group shadow-sm`}
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                      {item.badge}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${item.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-accent mb-1 tracking-wide">
                    {item.intent}
                  </div>

                  <h3 className="font-display font-bold text-foreground text-xl mb-2.5 group-hover:text-accent transition-colors">
                    {item.solution}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-border/60">
                    {item.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-xs font-bold text-accent hover:underline flex items-center gap-1.5"
                  >
                    <span>Explore solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Get started →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-3xl px-8 py-5 shadow-md">
            <span className="text-sm font-semibold text-foreground">
              Need a blended operational pod or custom people solution?
            </span>
            <Link
              href="/#contact"
              className="bg-accent text-accent-foreground font-bold px-6 py-2.5 rounded-full text-xs hover:brightness-110 transition-all shadow-md flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Tell Us What You Need</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
