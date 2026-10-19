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
    icon: Target,
    points: ['Executive & leadership search', 'Technical & non-tech talent', 'Rapid shortlist turnaround'],
  },
  {
    intent: 'I need HR support',
    solution: 'HR & People Operations',
    desc: 'End-to-end employee lifecycle management, compliant onboarding, payroll execution, and structured performance frameworks.',
    href: '/hr-workforce-solutions',
    badge: 'HR Operations',
    icon: Building2,
    points: ['Payroll & statutory compliance', 'HR policies & handbooks', 'Employee onboarding & exits'],
  },
  {
    intent: 'I need flexible manpower',
    solution: 'Workforce Solutions',
    desc: 'Rapid temporary staffing, contract talent deployment, multi-location shift scheduling, and agile headcount scaling.',
    href: '/hr-workforce-solutions#workforce',
    badge: 'Flexible Staffing',
    icon: Users,
    points: ['Contract staffing pods', 'Seasonal & surge headcount', 'Turnkey workforce deployment'],
  },
  {
    intent: 'I need someone to handle business tasks',
    solution: 'Virtual Assistant & Support',
    desc: '100% vetted human remote professionals managing executive scheduling, administrative workflows, CRM hygiene, and research.',
    href: '/virtual-assistant-services',
    badge: 'Virtual Assistant',
    icon: Briefcase,
    points: ['Calendar & inbox triage', 'CRM & data operations', 'Dedicated human assistants'],
  },
  {
    intent: 'I need customer support',
    solution: 'Virtual Customer Support (VCS)',
    desc: 'Omnichannel customer support teams managing voice, live chat, email ticketing, WhatsApp, and social care with strict SLAs.',
    href: '/virtual-customer-support',
    badge: 'Customer Care',
    icon: Headphones,
    points: ['Omnichannel voice, chat & email', 'WhatsApp & social media desks', 'Sub-60s SLA response times'],
  },
  {
    intent: 'I want to outsource HR',
    solution: 'HR Outsourcing / RPO',
    desc: 'Fully managed talent acquisition and HR operations pods that operate as your seamless internal people department.',
    href: '/pricing',
    badge: 'Managed Outsourcing',
    icon: RefreshCw,
    points: ['Full recruitment outsourcing (RPO)', 'Complete statutory HR desk', 'Predictable SLA retainer models'],
  },
];

export default function TakeOffPlateSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-tn-mist">
      {/* Ambient background light pools */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-tn-beige/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-mist rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tn-coral" />
            <span className="text-xs font-bold text-tn-charcoal tracking-widest uppercase">
              For Businesses &amp; Founders
            </span>
          </div>

          <h2 className="text-section-title font-display font-bold text-tn-charcoal mb-4">
            What Can TaskNera{' '}
            <span className="text-tn-coral">Help You With?</span>
          </h2>

          <p className="text-tn-slate text-base sm:text-lg leading-relaxed">
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
                className="rounded-3xl p-7 flex flex-col justify-between border border-tn-mist bg-white hover:border-tn-coral transition-all duration-300 group shadow-sm hover:shadow-xl relative overflow-hidden"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-tn-slate bg-tn-ivory px-3 py-1 rounded-full border border-tn-mist">
                      {item.badge}
                    </span>
                    <div className="w-11 h-11 rounded-2xl border border-tn-mist bg-tn-ivory text-tn-charcoal flex items-center justify-center shadow-sm group-hover:bg-tn-coral group-hover:border-tn-coral transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-tn-coral mb-1 tracking-wide">
                    {item.intent}
                  </div>

                  <h3 className="font-display font-bold text-tn-charcoal text-xl mb-2.5 group-hover:text-tn-coral transition-colors">
                    {item.solution}
                  </h3>

                  <p className="text-tn-slate text-xs sm:text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-tn-mist">
                    {item.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2 text-xs text-tn-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-tn-coral flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-tn-mist flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-xs font-bold text-tn-charcoal hover:text-tn-coral flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-xs font-semibold text-tn-slate hover:text-tn-charcoal"
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-tn-ivory border border-tn-mist rounded-3xl px-8 py-5 shadow-sm">
            <span className="text-sm font-semibold text-tn-charcoal">
              Need a blended operational pod or custom people solution?
            </span>
            <Link
              href="/#contact"
              className="bg-tn-coral text-tn-charcoal font-bold px-6 py-2.5 rounded-full text-xs hover:bg-[#F28B6A] transition-all shadow-md flex items-center gap-1.5 flex-shrink-0"
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
