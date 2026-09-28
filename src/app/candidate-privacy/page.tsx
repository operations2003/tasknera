'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, FileCheck, Lock, UserCheck, CheckCircle2 } from 'lucide-react';

export default function CandidatePrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-surface-subtle min-h-screen pt-16 sm:pt-20 pb-20 sm:pb-28">
        {/* Hero Header */}
        <section className="bg-section-dark relative overflow-hidden py-16 sm:py-20 mb-12 noise-overlay border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(15,184,138,0.18),rgba(255,255,255,0))] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-teal opacity-20 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Candidate Rights &amp; Data</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Candidate <span className="gradient-text-coral">Privacy Notice</span>
            </h1>
            <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
              How TaskNera securely collects, evaluates, stores, and protects job applicant CVs, professional profiles, and candidate information.
            </p>
            <p className="text-white/45 text-xs mt-3">Effective Date: September 2026</p>
          </div>
        </section>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border/70 rounded-3xl p-6 sm:p-12 shadow-sm space-y-10 text-foreground">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">1</span>
                Our Commitment to Job Applicants
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                When you submit your resume/CV, apply for a job vacancy, or communicate with our Talent Desk, you entrust us with your personal and professional information. TaskNera respects candidate privacy and adheres to fair, lawful, and transparent recruitment standards across India, the UK, the EU, North America, and international hiring jurisdictions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                Information We Gather During Hiring
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-accent" />
                    <span>Identification &amp; Contact Details</span>
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Full name, email address, phone number, residential location, LinkedIn profile link, and relevant portfolio URLs.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-accent" />
                    <span>Employment &amp; Education History</span>
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Curriculum Vitae (CV), employment tenure, role titles, key achievements, certifications, degrees, and academic institutions.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4 text-accent" />
                    <span>Evaluation &amp; Screening Records</span>
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Interview notes, JD Match Evaluator scoring summaries, technical assessment feedback, and notice period constraints.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>Verification &amp; References</span>
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Professional references, employment verification records, and right-to-work eligibility confirmations provided with candidate consent.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">3</span>
                How We Use Candidate Information
              </h2>
              <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Matching candidate competencies, aspirations, and experience against open client mandates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Submitting curated candidate profiles to prospective client employers with prior consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Scheduling interviews, delivering feedback, coordinating offer negotiations, and facilitating onboarding handoffs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>We never sell candidate databases or share CVs with unauthorized third parties for marketing purposes.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">4</span>
                Candidate Data Rights
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Candidates retain full rights over their submitted data, including the right to request access, correction, updates, or deletion of their talent profile from our active recruitment database. To exercise your rights, email{' '}
                <a href="mailto:careers@tasknera.com" className="text-accent underline font-semibold">
                  careers@tasknera.com
                </a>{' '}
                with the subject line "Candidate Data Request".
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-border">
              <h2 className="text-lg font-display font-bold text-foreground">Talent Desk Privacy Contact</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For questions regarding recruitment data protection, contact our Data Governance Desk at{' '}
                <a href="mailto:privacy@tasknera.com" className="text-accent underline font-semibold">
                  privacy@tasknera.com
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
