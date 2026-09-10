'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiePolicyPage() {
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
              Cookie <span className="gradient-text-coral">Policy</span>
            </h1>
            <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto">
              How TaskNera utilizes cookies, session tokens, and similar web technologies to ensure optimal performance and security.
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
                What Are Cookies?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Cookies are small text files placed on your computer, smartphone, or device when you access websites. They enable the website to recognize your browser, remember your user preferences, and provide analytical insights into website traffic and performance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">2</span>
                Categories of Cookies We Use
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Essential &amp; Security Cookies</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Necessary for core website navigation, session security, CSRF protection, and load balancing across server endpoints.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Performance &amp; Analytics Cookies</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Help us understand aggregated visitor volume, page views, and navigation bottlenecks to continually refine our digital platform.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Functional Preferences</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Remember your display preferences, region selections, and form fields to prevent redundant entries.
                  </p>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Zero Invasive Advertising</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    TaskNera does not sell, broker, or trade your browsing history or cookies to third-party ad networks.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold flex items-center justify-center">3</span>
                Managing Your Cookie Preferences
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                You can configure or disable cookies at any time through your browser settings. Most modern browsers allow you to block third-party cookies or wipe existing cache. Note that disabling essential cookies may impact specific portal features.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-border">
              <h2 className="text-lg font-display font-bold text-foreground">Questions About Cookie Usage?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For inquiries regarding our cookie standards, contact us at{' '}
                <a href="mailto:privacy@tasknera.com" className="text-accent underline font-semibold">
                  privacy@tasknera.com
                </a>{' '}
                or review our full{' '}
                <Link href="/privacy" className="text-accent underline font-semibold">
                  Privacy Policy
                </Link>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
