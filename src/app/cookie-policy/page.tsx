import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cookie Policy | Tasknera',
  description:
    'Read the Tasknera Cookie Policy to learn how cookies and tracking technologies are used to secure, optimize, and enhance your digital browsing experience.',
};

const cookieSchema = buildWebPageSchema({
  name: 'Cookie Policy | Tasknera',
  description:
    'Read the Tasknera Cookie Policy to learn how cookies and tracking technologies are used to secure, optimize, and enhance your digital browsing experience.',
  url: 'https://tasknera.com/cookie-policy',
});

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={cookieSchema} />
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
              Policies &amp; Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-normal text-white mb-4">
              Cookie <span className="italic text-brand-teal">Policy</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              How TaskNera utilizes cookies, session tokens, and similar web technologies to ensure optimal performance and security.
            </p>
            <p className="text-white/40 text-xs mt-3 font-mono">Last Updated: November 2026</p>
          </div>
        </section>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white border border-brand-navy/10 rounded-2xl p-7 sm:p-12 shadow-sm space-y-10 text-brand-ink">
            
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
