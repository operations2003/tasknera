'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function ServiceDisclaimerPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Hero Header */}
        <section className="bg-primary relative overflow-hidden py-16 sm:py-20 mb-12">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-teal opacity-30 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Policies &amp; Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Service <span className="gradient-text-coral">Disclaimer</span>
            </h1>
            <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto">
              Important legal parameters governing recruitment, HR operations, virtual assistance, and customer support engagements.
            </p>
            <p className="text-white/45 text-xs mt-3">Last Updated: September 2026</p>
          </div>
        </section>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-12 shadow-sm space-y-10 text-foreground">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">1</span>
                Contractual Primacy &amp; SOW Scope
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                The information, metrics, and service descriptions presented on tasknera.com are for general informational purposes. All commercial engagements, deliverables, performance SLAs, replacement terms, and fee structures are strictly governed by formal Master Services Agreements (MSAs) and Statements of Work (SOWs) executed directly between TaskNera and the client organization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                No Guarantee of Specific Operational Outcomes
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                While TaskNera deploys experienced domain professionals and rigorous quality oversight, human resources, hiring decisions, and business workflows inherently depend on multiple independent variables — including market candidate availability, client interview cadences, internal company culture, and macroeconomic conditions. TaskNera does not warrant unqualified absolute business outcomes outside agreed contractual SLA specifications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">3</span>
                Legal &amp; Tax Advisory Notice
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera provides HR operations, payroll processing execution, and workforce support. We are not a law firm or licensed accounting advisory practice. While our operational frameworks align with statutory compliance norms (such as PF, ESIC, and local labor legislation), clients should consult qualified legal and tax counsel regarding complex jurisdictional corporate structuring.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-border">
              <h2 className="text-lg font-display font-bold text-foreground">Questions or Legal Inquiries</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For questions concerning our service disclaimer, contact TaskNera Legal &amp; Operations at{' '}
                <a href="mailto:operations@tasknera.com" className="text-accent underline font-semibold">
                  operations@tasknera.com
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
