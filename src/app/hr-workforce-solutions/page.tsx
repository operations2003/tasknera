'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Onboarding & Offboarding',
    desc: 'Structured programmes that get new hires productive faster and handle exits with compliance and dignity.',
    icon: 'UserPlusIcon',
    useCases: ['First-90-day onboarding journeys', 'Multi-location simultaneous onboarding', 'Compliant exit interviews & clearance'],
  },
  {
    title: 'Payroll & Statutory Compliance',
    desc: 'Accurate, on-time payroll processing with full statutory compliance PF, ESI, TDS, PT, and more.',
    icon: 'CurrencyRupeeIcon',
    useCases: ['Monthly payroll for 10–5,000 employees', 'Multi-state compliance management', 'Year-end TDS filing & Form 16 issuance'],
  },
  {
    title: 'Attendance & Leave Management',
    desc: 'Digital systems for tracking attendance, managing leave balances, and enforcing policy consistently.',
    icon: 'CalendarDaysIcon',
    useCases: ['Biometric & app-based attendance', 'Shift scheduling for 24/7 operations', 'Leave encashment & carry-forward automation'],
  },
  {
    title: 'Performance Frameworks',
    desc: 'Design and implementation of goal-setting, appraisal, and continuous feedback systems.',
    icon: 'ChartBarIcon',
    useCases: ['OKR & KPI framework design', 'Annual appraisal cycle management', '360-degree feedback implementation'],
  },
  {
    title: 'HR Consulting & Advisory',
    desc: 'Strategic HR guidance for policy design, culture building, and workforce transformation.',
    icon: 'LightBulbIcon',
    useCases: ['HR policy handbook creation', 'Culture & engagement diagnostics', 'HR function setup for new businesses'],
  },
];

const processSteps = [
  {
    num: '01',
    title: 'HR Audit & Discovery',
    desc: 'We assess your current HR processes, compliance posture, and workforce data to identify gaps and priorities.',
    icon: '🔎',
    detail: 'Process audit · Compliance gap analysis · Workforce data review',
  },
  {
    num: '02',
    title: 'Solution Design',
    desc: 'Custom HR framework design aligned to your headcount, industry, and growth stage not a generic template.',
    icon: '📐',
    detail: 'Policy drafting · Process mapping · Technology selection',
  },
  {
    num: '03',
    title: 'System Setup & Configuration',
    desc: 'HRMS configuration, payroll system setup, and integration with existing tools like ERP or accounting software.',
    icon: '⚙️',
    detail: 'HRMS onboarding · Payroll engine setup · Integration testing',
  },
  {
    num: '04',
    title: 'Team Training & Handover',
    desc: 'Your HR team and managers are trained on new processes, systems, and compliance requirements.',
    icon: '🎓',
    detail: 'Manager workshops · Employee self-service training · SOP documentation',
  },
  {
    num: '05',
    title: 'Go Live & Parallel Run',
    desc: 'Controlled go live with a parallel run period to validate accuracy before full cutover.',
    icon: '🚀',
    detail: 'Parallel payroll validation · Compliance sign-off · Issue resolution',
  },
  {
    num: '06',
    title: 'Ongoing Support & Optimisation',
    desc: 'Monthly compliance reviews, payroll processing, and continuous improvement of HR operations.',
    icon: '🔄',
    detail: 'Monthly payroll runs · Quarterly compliance reviews · Annual policy updates',
  },
];

const industries = ['Technology', 'BFSI', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics', 'Professional Services', 'E-commerce'];

const metrics = [
  { value: '99.8%', label: 'Payroll accuracy rate' },
  { value: '100%', label: 'On-time compliance filing' },
  { value: '40%', label: 'Reduction in HR admin time' },
  { value: '15+', label: 'States covered for compliance' },
];

export default function HRWorkforceSolutionsPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-background">

        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 blob-coral opacity-30 pointer-events-none" style={{ top: '10%', left: '55%', width: '700px', height: '700px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="flex flex-col items-start gap-4 mb-6">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
                  Back to Services
                </Link>
                <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/25 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-xs font-semibold text-secondary tracking-widest uppercase">HR &amp; Workforce</span>
                </div>
              </div>
              <h1 className="text-hero font-display font-700 text-white mb-6">
                HR &amp; Workforce{' '}
                <span className="gradient-text-coral">Solutions</span>
              </h1>
              <p className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                Compliant, streamlined HR operations that free your leadership team to focus on growth — not paperwork.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#process" className="bg-secondary text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-secondary/30">
                  See How It Works
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
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-semibold text-secondary tracking-widest uppercase">Our Services</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Five HR{' '}
                <span className="gradient-text-coral">Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg">Select a service to explore real-world applications.</p>
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
                      : 'bg-card border-border hover:border-secondary/30'
                      }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${activeService === i ? 'bg-white/10' : 'bg-secondary/10'}`}>
                      <Icon name={svc.icon as 'UserPlusIcon'} size={16} className={activeService === i ? 'text-white' : 'text-secondary'} variant="outline" />
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
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                    <Icon name={services[activeService].icon as 'UserPlusIcon'} size={22} className="text-secondary" variant="outline" />
                  </div>
                  <h3 className="font-display font-700 text-foreground text-xl mb-3">{services[activeService].title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{services[activeService].desc}</p>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Common Use Cases</div>
                    <div className="space-y-3">
                      {services[activeService].useCases.map((uc) => (
                        <div key={uc} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-secondary"><path d="m5 12 5 5 9-9" /></svg>
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

        {/* Workforce Solutions Section (Pillar 3) */}
        <section id="workforce" className="py-20 sm:py-28 bg-card border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">Workforce Solutions</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Flexible Workforce Models{' '}
                <span className="gradient-text-teal">Built Around Demand</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Scale your operational capacity up or down with compliant contract staffing, workforce planning, and turnkey deployment solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Contract Workforce', desc: 'Pre-screened, specialized professionals deployed on flexible tenures for high-priority initiatives.', icon: '📋' },
                { title: 'Temporary Workforce', desc: 'Agile staffing support to handle seasonal peaks, project deadlines, and operational leaves.', icon: '⚡' },
                { title: 'Workforce Deployment', desc: 'Rapid mobilization and multi-location field staffing with full onboarding and legal compliance.', icon: '🚀' },
                { title: 'Workforce Planning', desc: 'Strategic capacity modeling, skills-gap identification, and headcount budgeting alignment.', icon: '📐' },
                { title: 'Workforce Management', desc: 'Ongoing performance tracking, shift scheduling, payroll administration, and SLA governance.', icon: '📊' },
                { title: 'Flexible & Scalable Workforce', desc: 'Modular models allowing rapid headcount changes without long-term overhead liabilities.', icon: '🔄' },
              ].map((wf) => (
                <div key={wf.title} className="spotlight-card hover-lift bg-background border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-3xl mb-3">{wf.icon}</div>
                    <h3 className="font-display font-700 text-foreground text-lg mb-2">{wf.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{wf.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/60">
                    <Link href="/#contact" className="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                      <span>Request deployment</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-display font-bold text-xl">Need a custom contract staffing or workforce model?</h3>
                <p className="text-white/70 text-sm">Our workforce consultants design customized headcount solutions tailored to your operational SLA.</p>
              </div>
              <Link href="/#contact" className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all text-xs flex-shrink-0 shadow-md">
                Talk to a Workforce Specialist
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20 sm:py-28 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Implementation</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-white mb-4">
                How We Set Up{' '}
                <span className="gradient-text-coral">Your HR Ops</span>
              </h2>
              <p className="text-white/60 text-lg">A 6-phase implementation designed to minimise disruption and maximise adoption.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step, i) => (
                <div key={step.num} className="glass-card rounded-2xl p-6 hover-lift group" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl font-display font-700 text-white/70 leading-none">{step.num}</span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="w-8 h-0.5 bg-secondary mb-4 transition-all duration-300 group-hover:w-16" />
                  <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="text-xs text-white/60 font-medium border-t border-white/20 pt-3">{step.detail}</div>
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
              Let Us Handle{' '}
              <span className="gradient-text-coral">Your HR Ops</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">From payroll to performance — we manage it all so you can focus on growth.</p>
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
