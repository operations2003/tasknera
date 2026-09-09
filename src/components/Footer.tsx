import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Industries', href: '/industries' },
  { label: 'Engagement Models', href: '/pricing' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Pattern 7 — Arc Browser Split: Logo+tagline left, links right */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">

          {/* Left — Brand */}
          <div className="space-y-3 sm:max-w-xs">
            <div className="flex items-center gap-2.5">
              <AppLogo
                src="/assets/images/logo_1-1786267820748.png"
                size={32}
                className="rounded-lg"
              />
              <span className="font-display font-700 text-lg text-white tracking-tight">
                TaskNera
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Global HR • Recruitment • Workforce Solutions
            </p>
            <p className="text-white/35 text-xs">
              D-57 F1 Dilshad Colony, Dilshad Garden, Delhi - 110095, East Delhi, India.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://linkedin.com/company/tasknera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TaskNera on LinkedIn"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </a>
              <a
                href="mailto:operations@tasknera.com"
                aria-label="Email TaskNera"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end sm:items-start">
            {footerLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-white/50 text-sm font-medium hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
              >
                {link?.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <span>© 2026 TaskNera. All rights reserved.</span>
          <span>Founded by Sheetal Bedi · www.tasknera.com</span>
        </div>
      </div>
    </footer>
  );
}