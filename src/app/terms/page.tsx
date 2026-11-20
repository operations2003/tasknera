import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Tasknera',
  description:
    'Review the official Terms and Conditions governing the use of Tasknera website, recruitment services, workforce operations, and proprietary software platforms.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF7F2] min-h-screen">
        {/* Hero Header */}
        <section className="relative overflow-hidden bg-brand-navy text-white py-20 lg:py-24">
          <div
            className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            aria-hidden="true"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-3 inline-block">
              Legal Framework
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-normal text-white mb-4">
              Terms and <span className="italic text-brand-teal">Conditions</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Terms and conditions governing the use of TaskNera&apos;s website, HR operations, recruitment services, and software platforms.
            </p>
            <p className="text-white/40 text-xs mt-3 font-mono">Last Updated: November 2026</p>
          </div>
        </section>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white border border-brand-navy/10 rounded-2xl p-7 sm:p-12 shadow-sm space-y-10 text-brand-ink">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">1</span>
                Acceptance of Agreement
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                By accessing or using the website (<Link href="/" className="text-accent underline">tasknera.com</Link>), engaging with TaskNera for talent acquisition, HR outsourcing, payroll management, or submitting candidate information, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please refrain from using our services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                Scope of Services
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera provides specialized workforce and people operations services, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Success Fee &amp; Executive Recruitment</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Permanent talent placement, executive search, and domain-specific candidate sourcing on agreed success or retainer terms.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Monthly RPO &amp; Embedded Recruiters</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Dedicated talent sourcing teams embedded directly within client workflows under SLA-backed delivery framework.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">HR Operations &amp; Payroll Outsourcing</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    End-to-end payroll processing, statutory compliance administration, and ongoing workforce governance.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Contract &amp; Cross-Border Staffing</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Flexible tenure staffing solutions across India, North America, UK, Europe, and global remote markets.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">3</span>
                Client &amp; Candidate Obligations
              </h2>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✦</span>
                  <span><strong>Accurate Requisitions &amp; Info:</strong> Clients agree to provide complete job specifications, fair hiring feedback, and accurate company information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✦</span>
                  <span><strong>Candidate Credentials:</strong> Job applicants agree that all credentials, employment histories, and certifications submitted are genuine and accurate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✦</span>
                  <span><strong>Commercial Agreements:</strong> Specific pricing, replacement guarantees, and payment schedules are governed by Master Service Agreements (MSAs) or Statements of Work (SOWs) executed between TaskNera and the client.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">4</span>
                Intellectual Property &amp; Confidentiality
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                All contents of the TaskNera site, including graphics, text, branding, logos, and proprietary recruitment methodologies are the exclusive property of TaskNera. Client data, job requisitions, candidate resumes, and financial details are treated as strictly confidential and will not be disclosed to unauthorized third parties.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">5</span>
                Limitation of Liability &amp; Governing Law
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera makes reasonable efforts to ensure accuracy and high-quality candidate matching. However, final hiring decisions rest with the client. TaskNera is not liable for indirect, incidental, or consequential damages resulting from site usage or third-party performance. These terms are governed by the laws of India and applicable regional jurisdictions specified in individual service contracts.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t border-border">
              <h2 className="text-lg font-display font-700 text-foreground">Questions Regarding Terms?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you have any questions or require clarification about our Terms of Service:
              </p>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-sm space-y-1">
                <div className="font-semibold text-foreground">TaskNera Legal &amp; Operations Team</div>
                <div className="text-muted-foreground">Email: <a href="mailto:operations@tasknera.com" className="text-accent hover:underline">operations@tasknera.com</a></div>
                <div className="text-muted-foreground">Address: D-57 F1 Dilshad Colony, Dilshad Garden, Delhi - 110095, India</div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
