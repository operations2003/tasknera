'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Eye, CheckCircle2 } from 'lucide-react';

export default function AccessibilityPage() {
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
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Universal Access</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Accessibility <span className="gradient-text-coral">Statement</span>
            </h1>
            <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto">
              Our dedication to ensuring digital accessibility for all job seekers, clients, and partners.
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
                Conformance Standards
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                TaskNera is committed to making our digital website and application portals accessible to individuals with diverse visual, auditory, cognitive, and motor abilities. We continually work to align our web interfaces with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                Accessibility Features Implemented
              </h2>
              <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Semantic HTML5 document hierarchy and clear heading landmarks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>High-contrast text colors and clean typography tailored for readability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Full keyboard navigability and visible focus outlines on interactive controls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Descriptive alternative text for informational images and charts.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-border">
              <h2 className="text-lg font-display font-bold text-foreground">Feedback &amp; Assistance</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you encounter any accessibility barrier on tasknera.com or need an alternative format for job application materials, please reach out to{' '}
                <a href="mailto:accessibility@tasknera.com" className="text-accent underline font-semibold">
                  accessibility@tasknera.com
                </a>. We prioritize feedback and respond within 2 business days.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
