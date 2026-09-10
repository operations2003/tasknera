'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Lock, Server, Key, EyeOff, CheckCircle2 } from 'lucide-react';

export default function DataSecurityPage() {
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
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Information Governance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Data Security &amp; <span className="gradient-text-coral">Confidentiality</span>
            </h1>
            <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto">
              Our enterprise protocols protecting client proprietary information, employee payroll records, and candidate data.
            </p>
            <p className="text-white/45 text-xs mt-3">Last Updated: September 2026</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-12 shadow-sm space-y-10 text-foreground">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">1</span>
                Security Architecture &amp; Baseline Controls
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera treats client confidentiality and employee data integrity as non-negotiable operational priorities. Every deployed pod, virtual assistant, and customer support specialist operates under strict security baselines designed to prevent unauthorized disclosure or breach.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                Core Information Safeguards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4 text-accent" />
                    <span>Comprehensive Non-Disclosure (NDA)</span>
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    All TaskNera employees, contractors, and specialists execute binding Non-Disclosure Agreements (NDAs) prior to onboarding.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <Key className="w-4 h-4 text-accent" />
                    <span>MFA &amp; Role-Based Access Control</span>
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Mandatory multi-factor authentication (MFA) and least-privilege role-based access to client databases and portals.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <Server className="w-4 h-4 text-accent" />
                    <span>Data Segregation &amp; Encryption</span>
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Client information and candidate files are stored in logically isolated cloud environments with AES-256 and TLS 1.3 encryption.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <EyeOff className="w-4 h-4 text-accent" />
                    <span>Zero Data Resale Guarantee</span>
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    We never sell, monetize, or expose client business data, HR records, or candidate contact details to third parties.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">3</span>
                Incident Response Cadence
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera maintains documented incident response workflows. In the unlikely event of any suspected security vulnerability or unauthorized access attempt, affected clients are notified within 24 hours accompanied by root-cause remediation steps.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-border">
              <h2 className="text-lg font-display font-bold text-foreground">Security Team Contact</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To report a security concern or request our Enterprise Security Whitepaper, contact{' '}
                <a href="mailto:security@tasknera.com" className="text-accent underline font-semibold">
                  security@tasknera.com
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
