import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tasknera',
  description:
    'Read the Tasknera Privacy Policy to understand how we collect, safeguard, and process personal data across our HR platforms, recruitment tools, and website.',
};

const privacySchema = buildWebPageSchema({
  name: 'Privacy Policy | Tasknera',
  description:
    'Read the Tasknera Privacy Policy to understand how we collect, safeguard, and process personal data across our HR platforms, recruitment tools, and website.',
  url: 'https://tasknera.com/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={privacySchema} />
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
              Legal &amp; Transparency
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-normal text-white mb-4">
              Privacy <span className="italic text-brand-teal">Policy</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              How TaskNera collects, protects, and handles personal data across our recruitment, HR operations, and software platforms.
            </p>
            <p className="text-white/40 text-xs mt-3 font-mono">Last Updated: November 2026</p>
          </div>
        </section>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white border border-brand-navy/10 rounded-2xl p-7 sm:p-12 shadow-sm space-y-10 text-brand-ink">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">1</span>
                Introduction &amp; Scope
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera ("we", "our", "us") operates as a global HR, recruitment, payroll, and workforce operations partner. We are committed to protecting the privacy and personal data of job candidates, client representatives, business partners, and website visitors across India, South Asia, North America, the UK, Europe, and international markets.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                This Privacy Policy outlines our data handling practices when you access our website (<Link href="/" className="text-accent underline">tasknera.com</Link>), submit an enquiry, apply for positions through our Talent Desk, or engage our HR and payroll operations services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                Information We Collect
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Candidate &amp; Job Applicant Data</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Name, contact details, resumes/CVs, work history, skill assessments, educational background, compensation expectations, reference details, and work authorization status.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Client &amp; Partner Data</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Corporate contact names, business email addresses, phone numbers, company registration details, hiring requirements, organizational structure, and billing information.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Technical &amp; Site Usage Data</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    IP address, browser type, device information, operating system, page views, session logs, and referral source via cookies and website analytics.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Communication Records</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Inquiries submitted via contact forms, emails sent to operations@tasknera.com, call notes, and support tickets.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">3</span>
                How We Use Your Information
              </h2>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Talent Sourcing &amp; Recruitment:</strong> Matching candidate profiles with suitable client career opportunities across 12+ industries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>HR &amp; Payroll Execution:</strong> Processing employer operations, statutory compliance, onboarding, and payroll administrative tasks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Business Communication:</strong> Responding to client enquiries, scheduling consultations, providing SLAs, and sharing status reports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Legal &amp; Regulatory Compliance:</strong> Fulfilling labor law obligations, tax filing support, audit requirements, and anti-fraud verification.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">4</span>
                Data Protection &amp; Cross-Border Transfers
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera operates globally. Candidate and client data may be processed securely across our regional teams in India, the US, UK, and Europe. We implement strict organizational safeguards, data transfer agreements, and encryption controls to maintain compliance with applicable privacy frameworks (including GDPR, DPDP Act India, and relevant US state regulations).
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We never sell, rent, or trade personal data to third-party data brokers. Data is shared exclusively with verified clients, partner payroll providers, and authorized technology infrastructure vendors bound by strict confidentiality contracts.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-700 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">5</span>
                Your Rights &amp; Data Choices
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                You have the right to request access to your personal information, request corrections, ask for deletion of your candidate profile, or object to processing. To exercise any of these rights, please email us at <a href="mailto:operations@tasknera.com" className="text-accent font-semibold underline">operations@tasknera.com</a>.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t border-border">
              <h2 className="text-lg font-display font-700 text-foreground">Contact Our Privacy Team</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For questions, data access requests, or privacy concerns:
              </p>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-sm space-y-1">
                <div className="font-semibold text-foreground">TaskNera Operations &amp; Privacy Officer</div>
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
