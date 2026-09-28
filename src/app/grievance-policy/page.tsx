'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertCircle, Clock, ShieldCheck, Mail } from 'lucide-react';

export default function GrievancePolicyPage() {
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
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Ethics &amp; Accountability</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Grievance &amp; <span className="gradient-text-coral">Complaints Policy</span>
            </h1>
            <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto">
              Our formal framework for reporting, investigating, and swiftly resolving operational, ethical, or service concerns.
            </p>
            <p className="text-white/45 text-xs mt-3">Last Updated: September 2026</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border/70 rounded-3xl p-6 sm:p-12 shadow-sm space-y-10 text-foreground">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">1</span>
                Purpose &amp; Zero-Tolerance Standard
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera is committed to conducting business with integrity, transparency, and accountability. This policy provides a direct, retaliation-free channel for clients, job candidates, deployed workforce personnel, and partners to voice grievances regarding service quality, discrimination, harassment, privacy, or ethical misconduct.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                Escalation &amp; Resolution Process
              </h2>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-accent text-accent-foreground font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Filing a Report</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      Submit your concern to grievance@tasknera.com including relevant documentation, dates, and party details.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-accent text-accent-foreground font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Acknowledgment Within 24 Hours</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      Our Grievance Officer logs the issue, issues a tracking reference, and initiates confidential fact-finding.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-accent text-accent-foreground font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Investigation &amp; Resolution</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      An impartial inquiry is completed within 5–7 business days, followed by formal corrective action and notification.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">3</span>
                Designated Grievance Officer
              </h2>
              <div className="p-6 rounded-2xl bg-section-dark text-white border border-white/10 space-y-1.5 text-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,184,138,0.15),transparent_60%)] pointer-events-none" />
                <div className="font-bold text-base relative z-10">Office of the Grievance Officer</div>
                <div className="text-white/75 text-xs relative z-10">TaskNera Global Operations</div>
                <div className="text-white/60 text-xs relative z-10">Address: Dilshad Colony, Dilshad Garden, Delhi - 110095, India</div>
                <div className="pt-2 relative z-10">
                  <a href="mailto:grievance@tasknera.com" className="text-accent font-bold text-sm underline flex items-center gap-1.5">
                    <Mail className="w-4 h-4" />
                    <span>grievance@tasknera.com</span>
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
