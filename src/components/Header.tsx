'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const solutionLinks = [
  {
    label: 'HR & People Operations',
    href: '/hr-workforce-solutions',
    desc: 'HR operations, onboarding, payroll & lifecycle management',
  },
  {
    label: 'Talent & Recruitment',
    href: '/talent-acquisition',
    desc: 'Permanent, contract, executive & volume hiring',
  },
  {
    label: 'Workforce Solutions',
    href: '/hr-workforce-solutions#workforce',
    desc: 'Contract, temporary & scalable workforce deployment',
  },
  {
    label: 'Virtual Assistant & Business Support',
    href: '/virtual-assistant-services',
    desc: 'Human remote professionals for admin, CRM & operations',
  },
  {
    label: 'Virtual Customer Support (VCS)',
    href: '/virtual-customer-support',
    desc: 'Voice, chat, email, social & omnichannel helpdesk',
  },
  {
    label: 'HR Technology & Digital Solutions',
    href: '/#technology',
    desc: 'JD Match Evaluator, HRMS portals & workforce dashboards',
  },
];

const mainNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Industries', href: '/industries' },
  { label: 'How We Work', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Workplace Policies', href: '/workplace-policies' },
  { label: 'Resources', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02] flex-shrink-0"
          >
            <AppLogo
              src="/assets/images/logo_1-1786267820748.png"
              size={36}
              className="rounded-lg shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-white tracking-tight leading-none">
                TaskNera
              </span>
              <span className="text-[10px] text-white/50 tracking-wider uppercase font-semibold hidden sm:block mt-0.5">
                HR &amp; Workforce Partner
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div
              ref={solutionsRef}
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  solutionsOpen ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega / Dropdown Menu */}
              {solutionsOpen && (
                <div className="absolute top-full left-0 w-[380px] mt-1 bg-slate-900/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-3 z-50 animate-fadeIn">
                  <div className="text-[11px] font-semibold text-white/40 uppercase tracking-widest px-3 py-1.5">
                    Core Solutions &amp; Tech Layer
                  </div>
                  <div className="space-y-1">
                    {solutionLinks.map((sol) => (
                      <Link
                        key={sol.label}
                        href={sol.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="block px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                          {sol.label}
                        </div>
                        <div className="text-xs text-white/50 group-hover:text-white/70 line-clamp-1 mt-0.5">
                          {sol.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/industries"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
            >
              Industries
            </Link>
            <Link
              href="/process"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
            >
              How We Work
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
            >
              About
            </Link>
            <Link
              href="/workplace-policies"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
            >
              Workplace Policies
            </Link>
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#contact"
              className="bg-accent text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all duration-200 shadow-md shadow-accent/25"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col px-6 pt-6 gap-1">
            <Link
              href="/"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg border-b border-white/5 transition-colors"
            >
              Home
            </Link>

            {/* Mobile Solutions Accordion */}
            <div className="border-b border-white/5 py-1">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-slate-200 hover:text-white px-3 py-2.5 rounded-lg"
              >
                <span>Solutions</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180 text-accent' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileSolutionsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 rounded-xl my-1">
                  {solutionLinks.map((sol) => (
                    <Link
                      key={sol.label}
                      href={sol.href}
                      onClick={handleNavClick}
                      className="block py-2 px-2 text-sm text-slate-300 hover:text-accent font-medium border-b border-white/5 last:border-0"
                    >
                      {sol.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/industries"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg border-b border-white/5 transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/process"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg border-b border-white/5 transition-colors"
            >
              How We Work
            </Link>
            <Link
              href="/about"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg border-b border-white/5 transition-colors"
            >
              About
            </Link>
            <Link
              href="/workplace-policies"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg border-b border-white/5 transition-colors"
            >
              Workplace Policies
            </Link>
            <Link
              href="/pricing"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg border-b border-white/5 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg border-b border-white/5 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="px-6 pb-8 pt-6 flex flex-col gap-4 border-t border-white/10 bg-slate-950">
            <Link
              href="/#contact"
              onClick={handleNavClick}
              className="bg-accent text-accent-foreground text-base font-semibold px-6 py-3.5 rounded-full text-center hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/25"
            >
              Talk to an Expert
            </Link>
            <a
              href="mailto:operations@tasknera.com"
              onClick={handleNavClick}
              className="text-slate-400 hover:text-white text-sm text-center transition-colors"
            >
              operations@tasknera.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}