'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Globe2,
  Building2,
  CheckCircle2,
  ArrowRight,
  Layers,
  Compass,
  Rocket,
  Settings,
  BarChart3,
  TrendingUp,
  Sparkles,
  Laptop,
  Activity,
  Factory,
  ShoppingBag,
  Landmark,
  Truck,
  GraduationCap,
  Share2,
  Briefcase,
  Coins,
  Code2,
  Megaphone,
  Headphones,
  RotateCw,
  Crown,
  Users,
  HeartPulse,
} from 'lucide-react';

/* ── 1. About Stats ── */
const aboutStats = [
  {
    value: '5 Pillars',
    label: 'Integrated Scope',
    desc: 'HR Operations, Talent Acquisition, Workforce Solutions, Virtual Assistance & Customer Support.',
    icon: Layers,
  },
  {
    value: 'Remote-Ready',
    label: 'Global Delivery Architecture',
    desc: 'Transparent governance, distributed pods & multi-timezone coverage across India, EMEA and the US.',
    icon: Globe2,
  },
  {
    value: '12+ Sectors',
    label: 'Industries Supported',
    desc: 'From SaaS, Tech & BFSI to Healthcare, E-commerce, Logistics, and High-Growth Startups.',
    icon: Building2,
  },
];

/* ── 2. How We Work Steps ── */
const processSteps = [
  {
    num: '01',
    title: 'Discover & Understand',
    desc: 'Deep-dive intake to analyze your organizational dynamics, operational scope, skills matrix, and timeline requirements.',
    icon: Compass,
    applicable: 'HR Ops · Talent · Workforce · Virtual Support',
  },
  {
    num: '02',
    title: 'Design & Scope',
    desc: 'We architect the optimal pod structure, role competencies, SLAs, and commercial engagement model tailored to your budget.',
    icon: Layers,
    applicable: 'Custom SOW · Transparent SLAs · No Hidden Fees',
  },
  {
    num: '03',
    title: 'Build & Deploy',
    desc: 'We source, pre-vet, and onboard dedicated human professionals paired with our HireIQ matching engine and digital portal setup.',
    icon: Rocket,
    applicable: 'Vetted Talent Matching · Tech Onboarding',
  },
  {
    num: '04',
    title: 'Deliver & Operate',
    desc: 'Our embedded pods manage your agreed workflows daily with active supervision, documentation, and continuous communication.',
    icon: Settings,
    applicable: 'Day-to-Day Execution · Agile Coordination',
  },
  {
    num: '05',
    title: 'Measure & Benchmark',
    desc: 'Transparent real-time reporting, QA auditing, monthly performance scorecard reviews, and feedback cadences.',
    icon: BarChart3,
    applicable: 'Weekly / Monthly Scorecards · QA Reviews',
  },
  {
    num: '06',
    title: 'Scale & Optimize',
    desc: 'As your business evolves, seamlessly expand pod capacity, add functional capabilities, or adjust shift coverage on-demand.',
    icon: TrendingUp,
    applicable: 'Flexible Scaling · Zero Friction Expansion',
  },
];

const techCapabilities = [
  'HireIQ Matching Engine',
  'HRMS Integration',
  'Employee Portals',
  'CRM Pipeline Sync',
  'AI-Assisted Sourcing',
  'Recruitment Analytics',
  'Workforce Dashboards',
  'Paperless Workflows',
  'SLA Tracking & MIS',
];

/* ── 3. Industries & Roles ── */
const industriesList = [
  { icon: Laptop, label: 'IT, SaaS & Tech', roles: 'Full-stack, QA, DevOps, Product' },
  { icon: Activity, label: 'Healthcare & Biotech', roles: 'Clinical, medical billing, support' },
  { icon: Factory, label: 'Manufacturing', roles: 'Supply chain, plant ops, procurement' },
  { icon: ShoppingBag, label: 'Retail & E-commerce', roles: 'Catalog, customer care, ops' },
  { icon: Landmark, label: 'BFSI & Fintech', roles: 'Risk, compliance, financial ops' },
  { icon: Truck, label: 'Logistics & Supply Chain', roles: 'Dispatch, fleet, freight ops' },
  { icon: GraduationCap, label: 'EdTech & Education', roles: 'Admissions, student support, counselors' },
  { icon: Share2, label: 'Digital Media & Agencies', roles: 'Account managers, content, performance' },
  { icon: Briefcase, label: 'Professional Consulting', roles: 'Business analysts, project coordinators' },
  { icon: Building2, label: 'Hospitality & Real Estate', roles: 'Guest care, bookings, facility management' },
  { icon: Rocket, label: 'Startups & Scale-ups', roles: 'Founding teams, rapid hiring pods' },
  { icon: Coins, label: 'Finance & Accounting', roles: 'Bookkeeping, tax, controller support' },
];

const functionalRolesList = [
  { icon: Code2, label: 'IT & Engineering', desc: 'Software engineers, architects, cloud, QA' },
  { icon: Coins, label: 'Finance & Accounting', desc: 'Accountants, controllers, financial analysts' },
  { icon: Megaphone, label: 'Sales & Marketing', desc: 'SDRs, AEs, demand gen, CRM specialists' },
  { icon: Headphones, label: 'Customer Support (VCS)', desc: 'Omnichannel voice, live chat, ticket pods' },
  { icon: RotateCw, label: 'Operations & Supply Chain', desc: 'Inventory managers, logisticians, coordinators' },
  { icon: Crown, label: 'Executive & Leadership', desc: 'C-suite, VPs, country & regional directors' },
  { icon: Users, label: 'HR & Administration', desc: 'HR generalists, recruiters, executive VAs' },
  { icon: HeartPulse, label: 'Healthcare & Clinical', desc: 'Triage staff, medical admins, patient support' },
];

export default function CompanyOverviewSection() {
  const [activeTab, setActiveTab] = useState<'about' | 'process' | 'industries'>('about');
  const [industrySubTab, setIndustrySubTab] = useState<'industries' | 'roles'>('industries');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#process') {
        setActiveTab('process');
      } else if (hash === '#industries') {
        setActiveTab('industries');
      } else if (hash === '#about') {
        setActiveTab('about');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 bg-tn-ivory border-b border-tn-mist relative overflow-hidden">
      {/* Target anchor bookmarks for direct navigation */}
      <div id="process" className="relative -top-28 pointer-events-none" />
      <div id="industries" className="relative -top-28 pointer-events-none" />

      {/* Ambient background light pools */}
      <div className="absolute top-10 right-1/3 w-[600px] h-[350px] bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-tn-beige/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Unified Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-mist rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tn-coral animate-pulse" />
            <span className="text-xs font-bold text-tn-charcoal tracking-widest uppercase">
              Company · Methodology · Domain Reach
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-tn-charcoal leading-tight mb-4">
            How TaskNera Powers{' '}
            <span className="text-tn-coral">Modern Organizations</span>
          </h2>

          <p className="text-tn-slate text-base sm:text-lg leading-relaxed">
            One integrated partner uniting strategic HR operations, agile delivery methodology, and comprehensive domain expertise across 12+ industries.
          </p>
        </div>

        {/* 3-in-1 Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-tn-mist p-1.5 rounded-full shadow-sm flex flex-wrap gap-1.5 justify-center">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'about'
                  ? 'bg-[#242326] text-[#FFF8F0] shadow-md'
                  : 'text-tn-slate hover:text-tn-charcoal hover:bg-tn-ivory'
              }`}
            >
              <Building2 className="w-4 h-4 text-tn-coral" />
              <span>About TaskNera</span>
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'process'
                  ? 'bg-[#242326] text-[#FFF8F0] shadow-md'
                  : 'text-tn-slate hover:text-tn-charcoal hover:bg-tn-ivory'
              }`}
            >
              <Compass className="w-4 h-4 text-tn-coral" />
              <span>How We Work (6 Phases)</span>
            </button>
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'industries'
                  ? 'bg-[#242326] text-[#FFF8F0] shadow-md'
                  : 'text-tn-slate hover:text-tn-charcoal hover:bg-tn-ivory'
              }`}
            >
              <Globe2 className="w-4 h-4 text-tn-coral" />
              <span>Industries &amp; Coverage (12+)</span>
            </button>
          </div>
        </div>

        {/* ── TAB 1: ABOUT TASKNERA ── */}
        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-300">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Story & Philosophy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-coral/30 rounded-full px-3.5 py-1 text-xs font-bold text-tn-charcoal uppercase tracking-wider">
                  Our Identity
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-tn-charcoal leading-tight">
                  Your Global HR, Workforce &amp;{' '}
                  <span className="text-tn-coral">Business Support Partner</span>
                </h3>

                <p className="text-tn-slate text-base sm:text-lg leading-relaxed">
                  TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Workforce, Talent, Virtual Assistant and Customer Support solutions.
                </p>

                <p className="text-tn-slate text-sm sm:text-base leading-relaxed">
                  Instead of coordinating between fragmented recruitment consultancies, disparate BPO call centres, and disjointed freelance assistants, TaskNera unites people operations, staffing, virtual assistance, and customer experience under one strategic, accountability-driven partner.
                </p>

                <div className="flex flex-wrap gap-3.5 pt-2">
                  <Link
                    href="/about"
                    className="bg-tn-coral text-tn-charcoal text-xs sm:text-sm font-bold px-6 py-3 rounded-full hover:bg-[#F28B6A] transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Our Full Story &amp; Leadership</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/workplace-policies"
                    className="bg-white hover:bg-tn-ivory text-tn-charcoal text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors border border-tn-mist shadow-sm"
                  >
                    Workplace Policies &amp; Governance
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 Core Stat Pillars */}
              <div className="lg:col-span-6 space-y-4">
                {aboutStats.map((stat) => {
                  const IconComp = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-3xl p-6 flex items-start gap-5 group bg-white border border-tn-mist hover:border-tn-coral transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="w-14 h-14 rounded-2xl border border-tn-mist bg-tn-ivory text-tn-charcoal flex items-center justify-center flex-shrink-0 group-hover:bg-tn-coral group-hover:border-tn-coral transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-display font-bold text-xl text-tn-charcoal">
                            {stat.value}
                          </span>
                          <span className="text-tn-slate text-xs font-semibold">·</span>
                          <span className="text-xs font-bold uppercase tracking-wider text-tn-coral">
                            {stat.label}
                          </span>
                        </div>
                        <p className="text-tn-slate text-sm leading-relaxed">
                          {stat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        )}

        {/* ── TAB 2: HOW WE WORK (6 PHASES) ── */}
        {activeTab === 'process' && (
          <div className="animate-in fade-in duration-300 space-y-10">
            <div className="bg-white border border-tn-mist rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-tn-mist">
                <div>
                  <div className="inline-flex items-center gap-2 bg-tn-coral/15 text-tn-charcoal border border-tn-coral/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5 text-tn-coral" />
                    Structured Delivery
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-tn-charcoal">
                    Our 6-Phase Execution Roadmap
                  </h3>
                </div>
                <span className="text-xs font-semibold text-tn-slate bg-tn-ivory px-3 py-1.5 rounded-full border border-tn-mist self-start md:self-auto">
                  End-to-End Governance
                </span>
              </div>

              {/* 6 Step Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {processSteps.map((step) => {
                  const IconComp = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="p-5 rounded-2xl bg-tn-ivory/60 border border-tn-mist hover:border-tn-coral hover:bg-white transition-all space-y-3 group shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-display font-bold text-tn-slate/40 group-hover:text-tn-coral transition-colors">
                          {step.num}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-white border border-tn-mist flex items-center justify-center text-tn-charcoal group-hover:border-tn-coral">
                          <IconComp className="w-4 h-4 text-tn-coral" />
                        </div>
                      </div>
                      <div className="font-display font-bold text-base text-tn-charcoal">
                        {step.title}
                      </div>
                      <p className="text-xs text-tn-slate leading-relaxed">
                        {step.desc}
                      </p>
                      <div className="pt-2 text-[11px] font-semibold text-tn-charcoal flex items-center gap-1.5 border-t border-tn-mist">
                        <CheckCircle2 className="w-3.5 h-3.5 text-tn-coral flex-shrink-0" />
                        <span className="truncate">{step.applicable}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Technology Layer Strip */}
              <div className="bg-tn-ivory border border-tn-mist rounded-2xl p-5">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-tn-coral" />
                    <span className="text-xs font-bold text-tn-charcoal uppercase tracking-wider">
                      Technology &amp; Tooling Integration:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techCapabilities.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium bg-white border border-tn-mist px-2.5 py-1 rounded-full text-tn-charcoal shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── TAB 3: INDUSTRIES & DOMAIN REACH ── */}
        {activeTab === 'industries' && (
          <div className="animate-in fade-in duration-300 space-y-8">
            <div className="bg-white border border-tn-mist rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-tn-mist">
                <div>
                  <div className="inline-flex items-center gap-2 bg-tn-coral/15 text-tn-charcoal border border-tn-coral/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                    <Globe2 className="w-3.5 h-3.5 text-tn-coral" />
                    Domain Breadth
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-tn-charcoal">
                    12+ Industry Sectors &amp; Core Roles
                  </h3>
                </div>

                {/* Sub-tab toggle between sectors and roles */}
                <div className="bg-tn-ivory border border-tn-mist rounded-full p-1 flex gap-1 self-start sm:self-auto">
                  <button
                    onClick={() => setIndustrySubTab('industries')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      industrySubTab === 'industries'
                        ? 'bg-[#242326] text-[#FFF8F0] shadow-sm'
                        : 'text-tn-slate hover:text-tn-charcoal'
                    }`}
                  >
                    12+ Industry Sectors
                  </button>
                  <button
                    onClick={() => setIndustrySubTab('roles')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      industrySubTab === 'roles'
                        ? 'bg-[#242326] text-[#FFF8F0] shadow-sm'
                        : 'text-tn-slate hover:text-tn-charcoal'
                    }`}
                  >
                    8 Functional Roles
                  </button>
                </div>
              </div>

              {/* Sub-tab: 12 Industry Sectors */}
              {industrySubTab === 'industries' && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
                  {industriesList.map((ind) => {
                    const IconComp = ind.icon;
                    return (
                      <div
                        key={ind.label}
                        className="p-4 rounded-2xl bg-tn-ivory/60 border border-tn-mist hover:border-tn-coral hover:bg-white transition-all space-y-2 group shadow-sm"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white border border-tn-mist text-tn-coral flex items-center justify-center group-hover:border-tn-coral">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="font-semibold text-sm text-tn-charcoal group-hover:text-tn-coral transition-colors">
                          {ind.label}
                        </div>
                        <div className="text-xs text-tn-slate leading-relaxed">
                          {ind.roles}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Sub-tab: 8 Functional Roles */}
              {industrySubTab === 'roles' && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
                  {functionalRolesList.map((role) => {
                    const IconComp = role.icon;
                    return (
                      <div
                        key={role.label}
                        className="p-4 rounded-2xl bg-tn-ivory/60 border border-tn-mist hover:border-tn-coral hover:bg-white transition-all space-y-2 group shadow-sm"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white border border-tn-mist text-tn-coral flex items-center justify-center group-hover:border-tn-coral">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="font-semibold text-sm text-tn-charcoal group-hover:text-tn-coral transition-colors">
                          {role.label}
                        </div>
                        <div className="text-xs text-tn-slate leading-relaxed">
                          {role.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Footer link to industries page */}
              <div className="mt-8 pt-6 border-t border-tn-mist flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-tn-slate">
                  Need specialist pods in another niche domain? We deploy custom recruiter desks and candidate matching models for specialized markets.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-tn-coral hover:underline flex-shrink-0"
                >
                  Request Domain Intake →
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
