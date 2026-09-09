import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Mail, ArrowRight, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';

const solutionsLinks = [
  { label: 'HR & People Operations', href: '/hr-workforce-solutions' },
  { label: 'Talent & Recruitment', href: '/talent-acquisition' },
  { label: 'Workforce Solutions', href: '/hr-workforce-solutions#workforce' },
  { label: 'Virtual Assistant Services', href: '/virtual-assistant-services' },
  { label: 'Virtual Customer Support (VCS)', href: '/virtual-customer-support' },
  { label: 'HR Technology & Solutions', href: '/#technology' },
  { label: 'All Solutions Hub', href: '/services' },
];

const companyLinks = [
  { label: 'About TaskNera', href: '/about' },
  { label: 'How We Work (Process)', href: '/process' },
  { label: 'Industries Served', href: '/industries' },
  { label: 'Engagement & Pricing', href: '/pricing' },
  { label: 'Workplace Policies & Governance', href: '/workplace-policies' },
  { label: 'Contact Us', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Remote Workplace Standards', href: '/workplace-policies' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <AppLogo
                src="/assets/images/logo_1-1786267820748.png"
                size={40}
                className="rounded-xl ring-1 ring-white/20"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-white tracking-tight">
                  TaskNera
                </span>
                <span className="text-[10px] text-accent tracking-wider uppercase font-semibold">
                  Global People &amp; Operations Partner
                </span>
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              TaskNera helps startups, SMEs and global enterprises build high-performing teams, manage people, and scale business operations through integrated HR, Talent, Workforce, Virtual Assistant, and Customer Support solutions.
            </p>

            {/* Operational badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-medium">Global Delivery Active · 24/7 Multi-Timezone Coverage</span>
            </div>

            <div className="space-y-1 text-xs text-white/45">
              <p>Corporate Office: D-57 F1 Dilshad Colony, Dilshad Garden, Delhi - 110095, East Delhi, India.</p>
              <p>Coverage: India, United Kingdom, United States, Europe &amp; Remote Global.</p>
            </div>

            {/* Social & Contact */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/company/tasknera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TaskNera on LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 hover:border-accent/40 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:operations@tasknera.com"
                aria-label="Email TaskNera Operations"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 hover:border-accent/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline pl-2"
              >
                <span>Inquiry Portal</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-1.5">
              <span>Core Solutions</span>
            </h4>
            <ul className="space-y-2.5">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-accent/60 group-hover:text-accent text-xs">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Governance Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5">
              <span>Company &amp; Governance</span>
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-secondary/60 group-hover:text-secondary text-xs">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-2">
                Standards &amp; Privacy
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/45 text-xs hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <span>© 2026 TaskNera Global Operations. All rights reserved.</span>
          <span className="text-center">One Partner · HR, Talent, Workforce &amp; Business Support — All Under One Roof</span>
          <span>Founded by Sheetal Bedi · <a href="https://www.tasknera.com" className="text-white/60 hover:text-white">tasknera.com</a></span>
        </div>
      </div>
    </footer>
  );
}