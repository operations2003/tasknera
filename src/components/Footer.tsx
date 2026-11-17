'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';
import { companyInfo } from '@/lib/base44_content';

const footerServices = [
  { name: 'HR & People Operations', href: '/services/hr-operations' },
  { name: 'Talent Acquisition & Recruitment', href: '/services/talent-acquisition' },
  { name: 'Workforce Solutions', href: '/services/workforce-solutions' },
  { name: 'Virtual Assistant & Business Support', href: '/services/virtual-assistants' },
  { name: 'Technology & Software Development', href: '/services/technology' },
  { name: 'HireIQ', href: '/services/hireiq' },
  { name: 'TaskNera HRMS', href: '/services/hrms' },
];

const footerCompany = [
  { name: 'About Us', href: '/about' },
  { name: 'Engagement Models', href: '/engagement-models' },
  { name: 'Careers & Hiring', href: '/careers' },
  { name: 'Contact & Scoping', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white border-t border-white/10">
      {/* Subtle grain texture overlay */}
      <div
        className="grain pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-10 lg:py-20">
          
          {/* Column 1: Brand & Positioning */}
          <div>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative grid h-9 w-9 flex-none place-items-center overflow-hidden rounded-[4px] bg-white/10 p-1 ring-1 ring-white/20">
                <Image
                  src="/assets/images/tasknera-logo.png"
                  alt="TaskNera"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[21px] font-medium tracking-[-0.01em] text-white">
                  TaskNera
                </span>
                <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  People · Process · Performance
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-[34ch] text-[14px] leading-relaxed text-white/60">
              TaskNera is a global HR, recruitment, technology and business operations partner. We help companies build dependable teams and the operational foundation for sustainable growth.
            </p>

            <p className="mt-6 font-heading text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-teal">
              Build. Manage. Scale.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TaskNera on LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Solutions
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {footerServices.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="text-[13px] text-white/65 transition-colors hover:text-white hover:underline"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Company
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {footerCompany.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/65 transition-colors hover:text-white hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Direct Desks */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Direct Contact
            </p>

            <div className="mt-6 flex flex-col gap-4 text-[13px]">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-white/40 mb-1">
                  Business Enquiries
                </span>
                <a
                  href={`mailto:${companyInfo.emailOperations}`}
                  className="font-medium text-brand-teal hover:underline flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{companyInfo.emailOperations}</span>
                </a>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-white/40 mb-1">
                  Careers &amp; Candidate Verification
                </span>
                <a
                  href={`mailto:${companyInfo.emailCareers}`}
                  className="font-medium text-white/80 hover:text-white hover:underline flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{companyInfo.emailCareers}</span>
                </a>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-white/40 mb-1">
                  Headquarters
                </span>
                <p className="text-white/65 leading-relaxed flex items-start gap-1.5">
                  <MapPin className="h-4 w-4 flex-none mt-0.5 text-brand-teal" />
                  <span>{companyInfo.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row text-[12px] text-white/45">
          <p>© {new Date().getFullYear()} TaskNera. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/candidate-privacy" className="hover:text-white transition-colors">
              Candidate Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
