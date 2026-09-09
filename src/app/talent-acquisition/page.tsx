'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Permanent & Contract Hiring',
    desc: 'Full-cycle recruitment for permanent roles and fixed-term contracts across all seniority levels.',
    icon: 'BriefcaseIcon',
    useCases: ['Mid-market companies scaling teams fast', 'Startups building founding teams', 'Enterprises replacing critical roles'],
  },
  {
    title: 'Executive Search & Leadership',
    desc: 'Confidential, research led search for C-suite, VP, and Director level mandates.',
    icon: 'StarIcon',
    useCases: ['CEO/CFO/CTO succession planning', 'Board-level appointments', 'Country or regional head placements'],
  },
  {
    title: 'IT & Non-IT Recruitment',
    desc: 'Deep domain expertise across technology, finance, operations, sales, and support functions.',
    icon: 'ComputerDesktopIcon',
    useCases: ['Software engineers & architects', 'Finance & accounting professionals', 'Sales & business development leaders'],
  },
  {
    title: 'Bulk / Volume Hiring',
    desc: 'Structured campaigns to hire 50–500+ candidates within defined timelines and quality benchmarks.',
    icon: 'UsersIcon',
    useCases: ['BPO & shared services ramp-ups', 'Retail & hospitality seasonal hiring', 'Manufacturing plant staffing'],
  },
  {
    title: 'Remote & Global Hiring',
    desc: 'Cross-border talent acquisition with compliance, timezone, and cultural fit considerations built in.',
    icon: 'GlobeAltIcon',
    useCases: ['Distributed engineering teams', 'Global expansion into new markets', 'Offshore & nearshore delivery centres'],
  },
  {
    title: 'Recruitment Process Outsourcing (RPO)',
    desc: 'End-to-end ownership of your recruitment function from JD creation to offer acceptance.',
    icon: 'ArrowPathIcon',
    useCases: ['Companies without in-house HR', 'High-growth businesses needing scale', 'Organisations restructuring talent ops'],
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Requirement Briefing',
    desc: 'Deep-dive consultation to understand the role, team dynamics, culture, and success criteria. We challenge vague JDs and help define what "great" looks like.',
    icon: '📋',
    detail: '60–90 min intake call · Competency mapping · Salary benchmarking',
  },
  {
    num: '02',
    title: 'Market Mapping & Sourcing',
    desc: 'Multi-channel sourcing using our proprietary database, LinkedIn Recruiter, niche job boards, and AI-assisted candidate mapping.',
    icon: '🔍',
    detail: 'Active + passive candidate outreach · Competitor talent mapping · Referral network activation',
  },
  {
    num: '03',
    title: 'Screening & Assessment',
    desc: 'Structured phone screens, competency-based interviews, and technical assessments aligned to your role requirements.',
    icon: '✅',
    detail: 'Behavioural interview frameworks · Skills assessments · Culture-fit evaluation',
  },
  {
    num: '04',
    title: 'Curated Shortlist',
    desc: 'You receive a shortlist of 3–5 pre-vetted candidates with detailed profiles, assessment summaries, and our recommendation rationale.',
    icon: '📤',
    detail: 'Candidate scorecards · Video introductions · Comparative analysis',
  },
  {
    num: '05',
    title: 'Interview Coordination',
    desc: 'End-to-end scheduling, candidate preparation, interviewer briefing, and real-time feedback loops to keep momentum.',
    icon: '🗓️',
    detail: 'Panel scheduling · Candidate coaching · Debrief facilitation',
  },
  {
    num: '06',
    title: 'Offer & Onboarding Handoff',
    desc: 'Offer negotiation support, counter offer management, documentation, and a structured handoff to your onboarding team.',
    icon: '🎉',
    detail: 'Offer letter drafting · Notice period management · Day-1 readiness checklist',
  },
];

const metrics = [
  { value: '72hrs', label: 'Average time to first shortlist' },
  { value: '94%', label: 'Offer acceptance rate' },
  { value: '3.2x', label: 'Faster than in-house hiring' },
  { value: '180-day', label: 'Placement guarantee' },
];

const industries = ['Technology', 'BFSI', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics', 'Professional Services', 'E-commerce'];

export default function TalentAcquisitionPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-background">

        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 blob-teal opacity-40 pointer-events-none" style={{ top: '20%', left: '60%', width: '600px', height: '600px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="flex flex-col items-start gap-4 mb-6">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
                  Back to Services
                </Link>
                <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase">Talent Acquisition</span>
                </div>
              </div>
              <h1 className="text-hero font-display font-700 text-white mb-6">
                Talent Acquisition{' '}
                <span className="gradient-text-coral">&amp; Recruitment</span>
              </h1>
              <p className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                From a single critical hire to a 500 person ramp ups we own the full recruitment cycle so your team can focus on building the business.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#process" className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-accent/30">
                  See Our Process
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="bg-primary border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
              {metrics.map((m) => (
                <div key={m.label} className="text-center lg:px-8">
                  <div className="font-display font-700 text-2xl sm:text-3xl text-white mb-1">{m.value}</div>
                  <div className="text-white/50 text-xs sm:text-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-28 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">What We Do</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Six Recruitment{' '}
                <span className="gradient-text-coral">Specialisations</span>
              </h2>
              <p className="text-muted-foreground text-lg">Click any service to see real-world use cases.</p>
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
                      : 'bg-card border-border hover:border-accent/30'
                      }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${activeService === i ? 'bg-white/10' : 'bg-accent/10'}`}>
                      <Icon name={svc.icon as 'BriefcaseIcon'} size={16} className={activeService === i ? 'text-white' : 'text-accent'} variant="outline" />
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
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                    <Icon name={services[activeService].icon as 'BriefcaseIcon'} size={22} className="text-accent" variant="outline" />
                  </div>
                  <h3 className="font-display font-700 text-foreground text-xl mb-3">{services[activeService].title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{services[activeService].desc}</p>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Common Use Cases</div>
                    <div className="space-y-3">
                      {services[activeService].useCases.map((uc) => (
                        <div key={uc} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent"><path d="m5 12 5 5 9-9" /></svg>
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
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Our Process</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-white mb-4">
                From Brief to{' '}
                <span className="gradient-text-coral">Onboarding</span>
              </h2>
              <p className="text-white/60 text-lg">A structured 6-step process with full transparency at every stage.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step, i) => (
                <div key={step.num} className="glass-card rounded-2xl p-6 hover-lift group" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl font-display font-700 text-white/70 leading-none">{step.num}</span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="w-8 h-0.5 bg-accent mb-4 transition-all duration-300 group-hover:w-16" />
                  <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="text-xs text-white/75 font-medium border-t border-white/25 pt-3">{step.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Industries We{' '}
                <span className="gradient-text-teal">Recruit For</span>
              </h2>
              <p className="text-muted-foreground text-lg">Domain expertise across 8+ sectors.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span key={ind} className="bg-card border border-border rounded-full px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/40 hover:text-accent transition-colors cursor-default">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 sm:py-28 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-section-title font-display font-700 text-white mb-6">
              Ready to Fill Your{' '}
              <span className="gradient-text-coral">Next Role?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">Tell us about the position. We'll have a shortlist ready within 72 hours.</p>
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
