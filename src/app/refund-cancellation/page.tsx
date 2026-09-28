'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundCancellationPage() {
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
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Policies &amp; Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Refund &amp; <span className="gradient-text-coral">Cancellation Policy</span>
            </h1>
            <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto">
              Commercial guidelines governing service terminations, billing adjustments, and replacement terms.
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
                Recruitment Success Fee Placements
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Permanent recruitment mandates operate on milestone success fees payable upon candidate placement. If a placed candidate leaves or is separated within the contractual replacement period specified in the client agreement, TaskNera provides priority replacement support at zero additional placement charge.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                Dedicated Virtual Pods &amp; Monthly Retainers
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                For monthly embedded pods (Virtual Assistants, Virtual Customer Support, and HR operations desks), services can be adjusted or cancelled with written notice as defined in your Master Services Agreement (typically 15 to 30 days notice). Unutilized upfront setup deposits, where applicable, are calculated and reconciled transparently.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">3</span>
                Contract Staffing &amp; Temporary Workforce
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Contract staffing engagements follow agreed deployment tenures and offboarding protocols. Client billing corresponds strictly to approved timesheets and statutory payroll disbursements.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-border">
              <h2 className="text-lg font-display font-bold text-foreground">Billing &amp; Finance Inquiries</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For billing inquiries, credit notes, or contract modifications, contact TaskNera Finance at{' '}
                <a href="mailto:billing@tasknera.com" className="text-accent underline font-semibold">
                  billing@tasknera.com
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
