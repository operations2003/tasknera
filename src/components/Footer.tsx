import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Mail, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';

const solutionsLinks = [
  { label: 'HR & People Operations', href: '/hr-workforce-solutions' },
  { label: 'Talent & Recruitment', href: '/talent-acquisition' },
  { label: 'HireIQ™ & HRMS Platform', href: '/#platform' },
  { label: 'Workforce Solutions', href: '/hr-workforce-solutions#workforce' },
  { label: 'Virtual Assistant Services', href: '/virtual-assistant-services' },
  { label: 'Virtual Customer Support (VCS)', href: '/virtual-customer-support' },
  { label: 'All Solutions Hub', href: '/services' },
];

const companyLinks = [
  { label: 'About TaskNera', href: '/about' },
  { label: 'How We Work (Process)', href: '/process' },
  { label: '12+ Industry Areas', href: '/industries' },
  { label: 'Engagement & Pricing', href: '/pricing' },
  { label: 'Careers & Hiring', href: '/careers' },
  { label: 'Workplace Policies & Governance', href: '/workplace-policies' },
  { label: 'Contact Us', href: '/contact' },
];

const policiesAndLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Candidate Privacy Notice', href: '/candidate-privacy' },
  { label: 'Client / Service Disclaimer', href: '/service-disclaimer' },
  { label: 'Data Security & Confidentiality', href: '/data-security' },
  { label: 'Refund & Cancellation Policy', href: '/refund-cancellation' },
  { label: 'Grievance / Complaints', href: '/grievance-policy' },
  { label: 'Accessibility Statement', href: '/accessibility' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#F3ECE4] via-[#FAF7F2] to-[#F3ECE4] border-t border-[#DED3C7] text-[#423535] relative overflow-hidden shadow-sm">
      {/* Background ambient warm pools */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E5BDB4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-[#8E7D6E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-[#F3ECE4]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <AppLogo
                src="/assets/images/logo_1-1786267820748.png"
                size={40}
                className="rounded-xl ring-1 ring-[#DED3C7] shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-[#704A4B] tracking-tight">
                  TaskNera
                </span>
                <span className="text-[10px] text-[#805D5A] tracking-wider uppercase font-bold">
                  Global HR, Workforce &amp; Business Support Partner
                </span>
              </div>
            </div>

            <p className="text-[#625F5F] text-sm leading-relaxed max-w-sm">
              TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Talent, Workforce, Virtual Assistant and Virtual Customer Support solutions.
            </p>

            {/* Operational badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#FAF7F2] border border-[#DED3C7] rounded-full px-3.5 py-1.5 text-xs text-[#423535] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#704A4B] animate-pulse" />
              <span className="font-semibold">Global Delivery Active · 24/7 Multi-Timezone Coverage</span>
            </div>

            <div className="space-y-1 text-xs text-[#625F5F]">
              <p>Corporate Office: D-57 F1 Dilshad Colony, Dilshad Garden, Delhi - 110095, East Delhi, India.</p>
              <p>Global Delivery: India | US | UK | Europe | Remote Global.</p>
            </div>

            {/* Social & Contact */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/company/tasknera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TaskNera on LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#DED3C7] shadow-sm flex items-center justify-center text-[#625F5F] hover:text-[#704A4B] hover:bg-[#F3ECE4] hover:border-[#704A4B]/40 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:operations@tasknera.com"
                aria-label="Email TaskNera Operations"
                className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#DED3C7] shadow-sm flex items-center justify-center text-[#625F5F] hover:text-[#704A4B] hover:bg-[#F3ECE4] hover:border-[#704A4B]/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#704A4B] uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#704A4B]" />
              <span>Core Solutions</span>
            </h4>
            <ul className="space-y-2.5">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#625F5F] hover:text-[#704A4B] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#8E7D6E] group-hover:text-[#704A4B] text-xs transition-colors">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#704A4B] uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5BDB4]" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#625F5F] hover:text-[#704A4B] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#8E7D6E] group-hover:text-[#704A4B] text-xs transition-colors">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Legal Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#704A4B] uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#754E4E]" />
              <span>Policies &amp; Legal</span>
            </h4>
            <ul className="space-y-2">
              {policiesAndLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#625F5F] hover:text-[#704A4B] text-xs sm:text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#8E7D6E] group-hover:text-[#704A4B] text-xs transition-colors">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#DED3C7] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#625F5F] text-xs">
          <span>© 2026 TaskNera Global Operations. All rights reserved.</span>
          <span className="text-center font-medium">One Partner · HR, Talent, Workforce, Virtual Assistant &amp; Customer Support</span>
          <span>Founded in 2026 · Led by Sheetal Bedi · <a href="https://www.tasknera.com" className="text-[#704A4B] hover:text-[#593A3B] font-semibold underline">tasknera.com</a></span>
        </div>
      </div>
    </footer>
  );
}