'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Administrative & Executive Assistance',
    desc: 'Dedicated virtual assistants for administrative tasks, executive support, scheduling, and email management — freeing your team to focus on high-value work.',
    icon: 'BriefcaseIcon',
    useCases: ['Executive calendar & travel management', 'Email inbox management & filtering', 'Document preparation & formatting'],
  },
  {
    title: 'Data Entry & Research',
    desc: 'Accurate, timely data entry and research support to keep your databases clean, current, and actionable.',
    icon: 'TableCellsIcon',
    useCases: ['CRM data entry & enrichment', 'Market & competitor research', 'Lead list building & verification'],
  },
  {
    title: 'CRM & Database Management',
    desc: 'End-to-end CRM management to ensure your customer data is organised, up-to-date, and driving pipeline growth.',
    icon: 'ServerStackIcon',
    useCases: ['CRM setup, configuration & hygiene', 'Contact & deal stage management', 'Reporting & pipeline dashboards'],
  },
  {
    title: 'Sales & Operations Support',
    desc: 'Virtual support for sales teams and operations — from lead follow-up to process coordination and reporting.',
    icon: 'ChartBarIcon',
    useCases: ['Lead outreach & follow-up coordination', 'Sales reporting & pipeline tracking', 'Operations process documentation'],
  },
  {
    title: 'Virtual Customer Support (VCS)',
    desc: 'Dedicated virtual customer support teams handling voice, chat, email, social media, and WhatsApp — delivering seamless customer experiences at scale.',
    icon: 'PhoneIcon',
    useCases: ['Voice, chat & email support operations', 'Social media & WhatsApp customer handling', 'Helpdesk, ticket management & back-office support'],
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Business Context Deep-Dive',
    desc: 'We start by understanding your business model, growth targets, competitive landscape, and current HR maturity.',
    icon: '🧭',
    detail: 'Leadership interviews · Business plan review · Competitive benchmarking',
  },
  {
    num: '02',
    title: 'Workforce Diagnostic',
    desc: 'Quantitative analysis of your current workforce headcount, skills, attrition, cost, and productivity metrics.',
    icon: '📊',
    detail: 'Headcount analytics · Attrition root-cause analysis · Cost-per-hire benchmarking',
  },
  {
    num: '03',
    title: 'Strategy Design',
    desc: 'Co-creation of a workforce strategy with clear priorities, timelines, ownership, and success metrics.',
    icon: '🗺️',
    detail: 'Workforce roadmap · OKR alignment · Investment case development',
  },
  {
    num: '04',
    title: 'Pilot & Validate',
    desc: 'Test new processes, tools, or programmes with a defined pilot group before full-scale rollout.',
    icon: '🧪',
    detail: 'Pilot design · Feedback loops · Iteration cycles',
  },
  {
    num: '05',
    title: 'Scale & Embed',
    desc: 'Structured rollout with change management, training, and communication to drive adoption across the organisation.',
    icon: '📈',
    detail: 'Change management plan · Manager enablement · Communication strategy',
  },
  {
    num: '06',
    title: 'Measure & Evolve',
    desc: 'Ongoing measurement against defined KPIs with quarterly reviews and strategy refinement as the business evolves.',
    icon: '🔁',
    detail: 'Quarterly business reviews · KPI dashboards · Annual strategy refresh',
  },
];

const outcomes = [
  {
    metric: '35%',
    label: 'Average reduction in cost-per-hire',
    color: 'border-accent',
    textColor: 'text-accent',
  },
  {
    metric: '2.4x',
    label: 'Improvement in quality-of-hire scores',
    color: 'border-secondary',
    textColor: 'text-secondary',
  },
  {
    metric: '60%',
    label: 'Faster time-to-productivity for new hires',
    color: 'border-accent',
    textColor: 'text-accent',
  },
  {
    metric: '28%',
    label: 'Reduction in first-year attrition',
    color: 'border-secondary',
    textColor: 'text-secondary',
  },
];

const tools = ['Workday', 'BambooHR', 'Darwinbox', 'Keka', 'GreytHR', 'Zoho People', 'SAP SuccessFactors', 'HiBob'];

export default function BusinessSupportPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-background">

        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 blob-blue opacity-50 pointer-events-none" style={{ top: '0%', left: '50%', width: '800px', height: '800px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="flex flex-col items-start gap-4 mb-6">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
                  Back to Services
                </Link>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Business Support</span>
                </div>
              </div>
              <h1 className="text-hero font-display font-700 text-white mb-6">
                Strategic{' '}
                <span className="gradient-text-coral">Business Support</span>
              </h1>
              <p className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                HR intelligence, workforce strategy, and digital transformation that turns your people function into a competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes bar */}
        <section className="bg-primary border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
              {outcomes.map((o) => (
                <div key={o.label} className="text-center lg:px-8">
                  <div className={`font-display font-700 text-2xl sm:text-3xl mb-1 ${o.textColor}`}>{o.metric}</div>
                  <div className="text-white/50 text-xs sm:text-sm">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-28 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">Capabilities</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Five Core{' '}
                <span className="gradient-text-coral">Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg">Select a capability to see where we've applied it.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* Service selector */}
              <div className="lg:col-span-5 space-y-2">
                {services.map((svc, i) => (
                  <button
                    key={svc.title}
                    onClick={() => setActiveService(i)}
                    className={`w-full text-left rounded-2xl p-4 border transition-all duration-300 flex items-start gap-4 ${activeService === i
                      ? 'bg-primary border-primary shadow-lg'
                      : 'bg-card border-border hover:border-primary/30'
                      }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${activeService === i ? 'bg-white/10' : 'bg-primary/10'}`}>
                      <Icon name={svc.icon as 'MapIcon'} size={16} className={activeService === i ? 'text-white' : 'text-primary'} variant="outline" />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm ${activeService === i ? 'text-white' : 'text-foreground'}`}>{svc.title}</div>
                      <div className={`text-xs mt-0.5 leading-relaxed ${activeService === i ? 'text-white/60' : 'text-muted-foreground'}`}>{svc.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Use cases panel */}
              <div className="lg:col-span-7">
                <div className="bg-card border border-border rounded-3xl p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Icon name={services[activeService].icon as 'MapIcon'} size={22} className="text-primary" variant="outline" />
                  </div>
                  <h3 className="font-display font-700 text-foreground text-xl mb-3">{services[activeService].title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{services[activeService].desc}</p>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Common Use Cases</div>
                    <div className="space-y-3">
                      {services[activeService].useCases.map((uc) => (
                        <div key={uc} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary"><path d="m5 12 5 5 9-9" /></svg>
                          </div>
                          <span className="text-foreground text-sm leading-relaxed">{uc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20 sm:py-28 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Our Approach</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-white mb-4">
                Strategy to{' '}
                <span className="gradient-text-coral">Execution</span>
              </h2>
              <p className="text-white/60 text-lg">A 6-phase consulting engagement designed for measurable outcomes.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step, i) => (
                <div key={step.num} className="glass-card rounded-2xl p-6 hover-lift group" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl font-display font-700 text-white/70 leading-none">{step.num}</span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="w-8 h-0.5 bg-white/40 mb-4 transition-all duration-300 group-hover:w-16" />
                  <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="text-xs text-white/40 font-medium border-t border-white/10 pt-3">{step.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HRMS Tools */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                HRMS Platforms We{' '}
                <span className="gradient-text-teal">Work With</span>
              </h2>
              <p className="text-muted-foreground text-lg">Vendor-agnostic expertise across leading HR technology platforms.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span key={tool} className="bg-card border border-border rounded-full px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 sm:py-28 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-section-title font-display font-700 text-white mb-6">
              Build a Smarter{' '}
              <span className="gradient-text-coral">People Strategy</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">Let's map your workforce challenges and design a plan to solve them.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#services" className="glass-btn text-white font-semibold px-8 py-3.5 rounded-full">
                Explore Other Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
