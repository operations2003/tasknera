'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustriesSection from '@/app/components/IndustriesSection';
import {
  Laptop,
  Activity,
  Landmark,
  ShoppingBag,
  Factory,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Clock,
  Briefcase,
} from 'lucide-react';

const deepDives = [
  {
    title: 'Technology & SaaS',
    icon: Laptop,
    summary: 'From Series-A engineering ramp-ups to enterprise DevOps and specialized product leadership.',
    roles: ['Full-stack & Backend Engineers (Node, Python, Go, Java)', 'Frontend & Mobile Developers (React, Next.js, Flutter)', 'DevOps, SRE & Cloud Architects (AWS, Azure, GCP)', 'Product Managers, UX/UI Designers & QA Leads'],
    speed: '48–72h first shortlist',
    placementRate: '96% offer acceptance',
    accent: 'border-accent/30',
  },
  {
    title: 'Healthcare & Life Sciences',
    icon: Activity,
    summary: 'High-compliance medical admin, telehealth customer care, and specialized health tech staffing.',
    roles: ['Medical Billing & Coding Specialists', 'Telehealth & Patient Care Coordinators', 'Clinical Data Analysts & Regulatory Admins', 'HealthTech Software & Compliance Engineers'],
    speed: 'Strict HIPAA / Data vetting',
    placementRate: '100% credential verified',
    accent: 'border-emerald-500/30',
  },
  {
    title: 'BFSI & Fintech',
    icon: Landmark,
    summary: 'Risk-averse, highly audited talent pipelines across accounting, compliance, and wealth tech.',
    roles: ['Certified Accountants, Bookkeepers & Tax Admins', 'KYC, AML & Financial Compliance Officers', 'Risk Analysts & Financial Controllers', 'Fintech Platform Support Specialists'],
    speed: 'NDA & Background Verified',
    placementRate: 'Multi-jurisdiction compliant',
    accent: 'border-blue-500/30',
  },
  {
    title: 'Retail & E-commerce',
    icon: ShoppingBag,
    summary: 'Agile seasonal workforce staffing and customer retention support for global marketplaces.',
    roles: ['Omnichannel Customer Support Reps (Voice, Chat, WhatsApp)', 'Catalog Managers & Inventory Sync Specialists', 'Returns, Refunds & Order Dispute Agents', 'Storefront Administrators (Shopify, Amazon, WooCommerce)'],
    speed: 'Rapid seasonal ramp-ups',
    placementRate: 'Sub-60s chat response SLAs',
    accent: 'border-amber-500/30',
  },
  {
    title: 'Manufacturing & Logistics',
    icon: Factory,
    summary: 'High-volume contract staffing and turnkey operations teams for supply chain continuity.',
    roles: ['Supply Chain & Procurement Coordinators', 'Fleet & Dispatch Logistics Support Pods', 'Vendor & PO Reconciliation Clerks', 'Multi-shift Plant Operations Staffing'],
    speed: 'High-volume deployment ready',
    placementRate: 'Zero-disruption SLA',
    accent: 'border-orange-500/30',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* Page Hero */}
        <section className="bg-hero-gradient text-white py-20 sm:py-28 relative overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
                <Globe2 className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Industry &amp; Sector Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Deep Domain Expertise Across{' '}
                <span className="gradient-text-coral">12+ Global Sectors.</span>
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                TaskNera pairs seasoned industry recruiters and specialized support pods with your exact domain terminology, regulatory compliance requirements, and toolstacks.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-sm flex items-center gap-2"
                >
                  <span>Discuss an Industry Mandate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#deep-dives"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
                >
                  Explore Sector Deep Dives
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Interactive Industries Section */}
        <IndustriesSection />

        {/* Sector Deep Dives */}
        <section id="deep-dives" className="py-20 sm:py-28 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                Specialized Sourcing Matrices
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Domain-Specific Talent &amp; Pod Capabilities
              </h2>
              <p className="text-muted-foreground text-base mt-2">
                Every sector operates with unique hiring hurdles, certifications, and compliance standards. Here is how we deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {deepDives.map((sector) => {
                const IconComp = sector.icon;
                return (
                  <div
                    key={sector.title}
                    className={`card-premium rounded-3xl p-7 flex flex-col justify-between ${sector.accent}`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-foreground">
                            {sector.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                        {sector.summary}
                      </p>

                      <div className="space-y-2 mb-6">
                        <div className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                          Key Sourced Roles:
                        </div>
                        {sector.roles.map((r) => (
                          <div key={r} className="flex items-start gap-2 text-xs text-foreground/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-semibold">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>{sector.speed}</span>
                      </span>
                      <Link
                        href="/#contact"
                        className="text-accent hover:underline flex items-center gap-1"
                      >
                        <span>Request talent</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Card */}
            <div className="bg-primary rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/15">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-display font-bold text-2xl">
                  Don't see your specific niche or domain listed?
                </h3>
                <p className="text-white/70 text-sm max-w-xl">
                  TaskNera's research desk creates customized talent maps and dedicated recruitment sprints for niche, emerging, or highly proprietary disciplines.
                </p>
              </div>
              <Link
                href="/#contact"
                className="bg-accent text-accent-foreground font-bold px-7 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all text-sm flex-shrink-0 shadow-md"
              >
                Request Custom Domain Briefing
              </Link>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
