'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Sheetal Bedi',
    role: 'Founder & CEO',
    bio: 'An HR strategist with over 8 years of experience building global talent pipelines across India, the UK, and the US, she launched TaskNera to empower growing organizations with enterprise-grade workforce operations.',
    email: 'sheetalbedi@tasknera.com',
    initials: 'SB',
    color: 'from-accent/30 to-accent/10',
  },
  {
    name: 'Operations Team',
    role: 'Business Enquiries',
    bio: 'Our dedicated operations team handles all inbound enquiries, client onboarding, and partnership discussions — with a 1-business-day response commitment.',
    email: 'operations@tasknera.com',
    initials: 'OT',
    color: 'from-purple-500/30 to-purple-500/10',
  },
  {
    name: 'Talent Desk',
    role: 'Careers & Candidate Support',
    bio: `Looking to join a client's team or explore opportunities through TaskNera? Our talent desk connects candidates with the right roles across 12+ industries.`,
    email: 'careers@tasknera.com',
    initials: 'TD',
    color: 'from-orange-400/30 to-orange-400/10',
  },
  {
    name: 'Support Team',
    role: 'General Enquiries & Help',
    bio: 'Have questions or need assistance with our services? Our support team is here to assist clients, candidates, and partners with prompt guidance.',
    email: 'hello@tasknera.com',
    initials: 'ST',
    color: 'from-teal-400/30 to-teal-400/10',
  },
];

const offices = [
  {
    city: 'India HQ',
    address: 'East Delhi, India',
    region: 'South Asia Operations',
    timezone: 'IST (UTC+5:30)',
    flag: '🇮🇳',
    coverage: 'Pan-India hiring, HR outsourcing, payroll compliance',
  },
  {
    city: 'United Kingdom',
    address: 'London, England',
    region: 'EMEA Operations',
    timezone: 'GMT / BST (UTC+0/+1)',
    flag: '🇬🇧',
    coverage: 'UK & European talent acquisition, cross-border staffing',
  },
  {
    city: 'United States',
    address: 'Washington D.C. ,US',
    region: 'North America',
    timezone: 'EST / PST (UTC-5/-8)',
    flag: '🇺🇸',
    coverage: 'US market sourcing, remote-global talent pools',
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">

        {/* ── Hero Banner ── */}
        <section className="bg-primary relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-teal animate-pulse-slow pointer-events-none opacity-40" style={{ transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 blob-coral animate-float-delayed pointer-events-none opacity-30" style={{ transform: 'translate(-30%, 40%)' }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Contact Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-700 text-white leading-tight mb-5">
                Let's start a{' '}
                <span className="gradient-text-coral">conversation.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                Whether you're scaling a team, outsourcing HR, or exploring a partnership we respond within 1 business day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg shadow-accent/25"
                >
                  Send an Enquiry
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Office Locations ── */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">Global Presence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-700 text-foreground">
                Where we operate
              </h2>
            </div>

            {/* Asymmetric bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {offices.map((office, i) => (
                <div
                  key={office.city}
                  className={`bg-primary border border-white/10 rounded-3xl p-7 flex flex-col gap-4 hover:border-accent/40 transition-colors ${i === 0 ? 'md:col-span-5' : i === 1 ? 'md:col-span-4' : 'md:col-span-3'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-3xl">{office.flag}</span>
                    </div>
                    <span className="text-xs font-mono text-white/50 bg-white/10 px-2.5 py-1 rounded-full">{office.timezone}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-display font-700 text-xl mb-0.5">{office.city}</h3>
                    <p className="text-white/55 text-sm">{office.address}</p>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-block text-xs font-medium text-primary bg-accent border border-accent/60 rounded-full px-3 py-1">{office.region}</span>
                    <p className="text-white/50 text-xs mt-3 leading-relaxed">{office.coverage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team Details ── */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">Our Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-700 text-foreground">
                Who you'll be talking to
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-primary border border-white/10 rounded-3xl p-7 flex flex-col gap-5 hover:border-accent/40 transition-colors group"
                >
                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                    <span className="text-white font-display font-700 text-lg">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-0.5">{member.name}</h3>
                    <p className="text-accent text-xs font-medium tracking-wide">{member.role}</p>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-accent transition-colors group-hover:text-accent"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
