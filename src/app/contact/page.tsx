'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/app/components/CTASection';
import { Mail, Globe, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sheetal Bedi',
    role: 'Founder & CEO',
    bio: 'Founded in 2026, TaskNera is led by an HR professional with 8+ years of experience across talent acquisition, HR operations and workforce management.',
    email: 'sheetalbedi@tasknera.com',
    initials: 'SB',
    color: 'from-accent/30 to-accent/10',
  },
  {
    name: 'Operations Team',
    role: 'Business Enquiries',
    bio: 'Our dedicated operations team handles all client onboarding, scoping briefs, and custom SOW structuring — with a 1-business-day response commitment.',
    email: 'operations@tasknera.com',
    initials: 'OT',
    color: 'from-purple-500/30 to-purple-500/10',
  },
  {
    name: 'Talent Desk',
    role: 'Careers & Candidate Support',
    bio: `Looking to join a client's team or explore opportunities through TaskNera? Our talent desk connects qualified candidates with vetted roles.`,
    email: 'careers@tasknera.com',
    initials: 'TD',
    color: 'from-orange-400/30 to-orange-400/10',
  },
  {
    name: 'Support Team',
    role: 'General Enquiries & Help',
    bio: 'Have questions about services, portal access, or general guidance? Our support team is here to assist with prompt operational direction.',
    email: 'hello@tasknera.com',
    initials: 'ST',
    color: 'from-teal-400/30 to-teal-400/10',
  },
  {
    name: 'Partnerships & Vendors',
    role: 'Channel & Partner Relations',
    bio: 'Collaborate with TaskNera as a recruitment vendor, staffing partner, HR consultant, or enterprise solutions provider.',
    email: 'partners@tasknera.com',
    initials: 'PV',
    color: 'from-blue-500/30 to-blue-500/10',
  },
];

const offices = [
  {
    city: 'Registered Corporate Office',
    address: 'Dilshad Colony, Dilshad Garden, Delhi - 110095, India',
    region: 'Central Headquarters',
    timezone: 'IST (UTC+5:30)',
    flag: '🇮🇳',
    coverage: 'Core corporate administration, centralized management, HR outsourcing delivery, and compliance governance.',
  },
  {
    city: 'UK & Europe Coverage',
    address: 'Cross-Border & Remote Delivery',
    region: 'EMEA Timezones',
    timezone: 'GMT / BST / CET',
    flag: '🇬🇧',
    coverage: 'Remote talent sourcing, dedicated virtual assistant pods, and localized operational support for European businesses.',
  },
  {
    city: 'North America Coverage',
    address: 'Cross-Border & Remote Delivery',
    region: 'North America Timezones',
    timezone: 'EST / CST / PST',
    flag: '🇺🇸',
    coverage: 'US & Canadian market talent sourcing, virtual assistant pods, and customer support coverage aligned to US hours.',
  },
  {
    city: 'Remote Global Delivery',
    address: 'Distributed Multi-Timezone Delivery',
    region: 'International Markets',
    timezone: 'Multi-Timezone Aligned',
    flag: '🌐',
    coverage: 'Supporting clients and talent requirements across international markets through remote and cross-border delivery models, subject to applicable requirements.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">

        {/* ── Hero Banner ── */}
        <section className="bg-primary relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 text-white">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-teal animate-pulse-slow pointer-events-none opacity-40" style={{ transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 blob-coral animate-float-delayed pointer-events-none opacity-30" style={{ transform: 'translate(-30%, 40%)' }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-white/90 tracking-widest uppercase">Contact Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-5">
                Let's start a{' '}
                <span className="gradient-text-coral">conversation.</span>
              </h1>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Whether you're scaling a team, outsourcing HR operations, deploying virtual support, or exploring a partnership — we respond within 1 business day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-3.5 rounded-full text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/25"
                >
                  <span>Send an Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Global Delivery Strip ── */}
        <section className="py-20 sm:py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">Global Delivery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                India | US | UK | Europe | Remote Global
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-2xl">
                Supporting clients and talent requirements across international markets through remote and cross-border delivery models, subject to applicable requirements.
              </p>
            </div>

            {/* Asymmetric grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-primary border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-accent/40 transition-colors group shadow-sm text-white"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="text-3xl">{office.flag}</span>
                      <span className="text-[11px] font-mono text-white/60 bg-white/10 px-2.5 py-1 rounded-full">{office.timezone}</span>
                    </div>
                    <h3 className="text-white font-display font-bold text-lg mb-1">{office.city}</h3>
                    <p className="text-white/60 text-xs mb-4">{office.address}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <span className="inline-block text-[11px] font-bold text-accent-foreground bg-accent rounded-full px-3 py-0.5 mb-2">{office.region}</span>
                    <p className="text-white/65 text-xs leading-relaxed">{office.coverage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Desks / Team Details ── */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">Direct Desks</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Who You'll Be Connecting With
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="card-premium rounded-3xl p-7 flex flex-col justify-between border bg-card hover:border-accent/40 transition-colors group shadow-sm"
                >
                  <div>
                    {/* Avatar */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4`}>
                      <span className="text-foreground font-display font-bold text-lg">{member.initials}</span>
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold text-lg mb-0.5">{member.name}</h3>
                      <p className="text-accent text-xs font-semibold tracking-wide uppercase">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-3 mb-6">{member.bio}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Form Section ── */}
        <CTASection />

      </main>
      <Footer />
    </>
  );
}
