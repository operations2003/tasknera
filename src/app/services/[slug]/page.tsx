import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import {
  buildServiceSchema,
  buildSoftwareAppSchema,
  buildFaqSchema,
} from '@/lib/schema';
import {
  Users,
  Search,
  Layers,
  Bot,
  Headphones,
  CodeXml,
  ScanSearch,
  LayoutDashboard,
  Check,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Building2,
} from 'lucide-react';
import rawServices from '@/lib/base44_services.json';

interface ServiceItem {
  slug: string;
  name: string;
  navLabel?: string;
  tag?: string;
  tagline: string;
  summary: string;
  heroTitle: string;
  heroBody: string;
  metaTitle?: string;
  metaDescription?: string;
  intro?: string[];
  problems?: { title: string; text: string }[];
  capabilities: string[];
  benefits: string[];
  engagement?: { title: string; text: string }[];
  process?: { step: string; title: string; text: string }[];
  faqs?: { q: string; a: string }[];
  poweredBy?: { label: string; to: string; text: string };
}

const servicesList = rawServices as ServiceItem[];

export function generateStaticParams() {
  return servicesList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const normalizedSlug = rawSlug === 'virtual-assistant' ? 'virtual-assistants' : rawSlug;
  const service = servicesList.find((s) => s.slug === normalizedSlug);

  if (!service) {
    return {
      title: 'Service Not Found | Tasknera',
    };
  }

  return {
    title: service.metaTitle || `${service.name} | Tasknera`,
    description: service.metaDescription || service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const normalizedSlug = rawSlug === 'virtual-assistant' ? 'virtual-assistants' : rawSlug;

  const service = servicesList.find((s) => s.slug === normalizedSlug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesList.filter((s) => s.slug !== normalizedSlug).slice(0, 3);

  const schemas: any[] = [];
  const canonicalUrl = `https://tasknera.com/services/${service.slug}`;
  const desc = service.metaDescription || service.summary;

  if (service.slug === 'hireiq' || service.slug === 'hrms') {
    schemas.push(
      buildSoftwareAppSchema({
        name: service.name,
        description: desc,
        url: canonicalUrl,
      })
    );
  }

  schemas.push(
    buildServiceSchema({
      name: service.name,
      description: desc,
      url: canonicalUrl,
    })
  );

  if (service.faqs && service.faqs.length > 0) {
    schemas.push(buildFaqSchema(service.faqs));
  }

  return (
    <>
      <JsonLd data={schemas} />
      <Header />
      <main className="min-h-screen bg-[#FAF7F2]">
        
        {/* Breadcrumb */}
        <div className="border-b border-brand-navy/10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-[12.5px] text-brand-ink/60">
              <Link href="/" className="hover:text-brand-navy">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-brand-ink/30" />
              <Link href="/services" className="hover:text-brand-navy">
                Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-brand-ink/30" />
              <span className="font-medium text-brand-navy">{service.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-navy text-white py-20 lg:py-24">
          <div
            className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                {service.tag || 'Discipline'}
              </span>
              <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight">
                {service.heroTitle}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                {service.heroBody}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.name)}`}
                  className="bg-white text-brand-navy font-semibold px-6 py-3 rounded-[3px] hover:bg-white/90 text-[13.5px] transition-colors shadow-sm"
                >
                  Book a consultation
                </Link>
                <a
                  href="mailto:operations@tasknera.com"
                  className="border border-white/20 text-white font-medium px-6 py-3 rounded-[3px] hover:bg-white/10 text-[13.5px] transition-colors"
                >
                  operations@tasknera.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Narrative */}
        {service.intro && service.intro.length > 0 && (
          <section className="py-16 sm:py-20 bg-white border-b border-brand-navy/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-5 text-[16px] leading-[1.8] text-brand-ink/80">
                {service.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Problems Solved */}
        {service.problems && service.problems.length > 0 && (
          <section className="py-20 bg-brand-mist border-b border-brand-navy/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Operational reality
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy">
                  The problems this solves
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {service.problems.map((pr, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-heading text-[18px] font-bold text-brand-navy">
                      {pr.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-brand-ink/65">
                      {pr.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Capabilities & Scope */}
        <section className="py-20 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Scope &amp; delivery
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy">
                What this covers
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-brand-navy/8 bg-brand-mist/50 p-4"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-blue" />
                  <span className="text-[14px] text-brand-ink/80 leading-relaxed font-medium">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models for this Service */}
        {service.engagement && service.engagement.length > 0 && (
          <section className="py-20 bg-brand-mist border-b border-brand-navy/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Structures
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy">
                  How we can engage
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {service.engagement.map((eng, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-heading text-[18px] font-bold text-brand-navy">
                        {eng.title}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-brand-ink/65">
                        {eng.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Delivery Process (4 Steps) */}
        {service.process && service.process.length > 0 && (
          <section className="py-20 bg-white border-b border-brand-navy/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Methodology
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy">
                  Delivery process
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl border border-brand-navy/10 bg-brand-mist p-6"
                  >
                    <span className="font-mono text-[11px] font-bold text-brand-blue tracking-[0.2em]">
                      {step.step}
                    </span>
                    <h3 className="mt-3 font-heading text-[18px] font-bold text-brand-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-brand-ink/65">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-20 bg-brand-mist border-b border-brand-navy/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-10">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Specific questions
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy">
                  Frequently asked questions
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-brand-navy/10 bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-heading text-[16.5px] font-bold text-brand-navy mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-brand-ink/75">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA Strip */}
        <section className="py-20 bg-brand-navy text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-normal">
              Ready to discuss <span className="italic text-brand-teal">{service.name}</span>?
            </h2>
            <p className="mt-4 text-[15.5px] text-white/60 max-w-xl mx-auto">
              Schedule a 20-minute discovery call to evaluate your requirements and receive a clear recommendation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(service.name)}`}
                className="bg-white text-brand-navy font-semibold px-7 py-3 rounded-[3px] hover:bg-white/90 text-[13.5px] shadow-sm inline-flex items-center gap-2"
              >
                <span>Request a consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={service.slug === 'virtual-assistants' ? '/business-support' : '/services'}
                className="border border-white/20 text-white font-medium px-6 py-3 rounded-[3px] hover:bg-white/10 text-[13.5px] inline-flex items-center gap-2"
              >
                <span>{service.slug === 'virtual-assistants' ? 'Business Support Services' : 'Explore other solutions'}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
