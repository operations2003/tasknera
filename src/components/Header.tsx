'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import {
  Building2,
  Target,
  Users,
  Briefcase,
  Headphones,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Mail,
  ShieldCheck,
} from 'lucide-react';

const solutionLinks = [
  {
    label: 'HR & People Operations',
    href: '/hr-workforce-solutions',
    desc: 'HR operations, onboarding, payroll & lifecycle management',
    icon: Building2,
    accent: 'from-orange-500/20 to-orange-500/5 text-orange-400 border-orange-500/30',
  },
  {
    label: 'Talent & Recruitment',
    href: '/talent-acquisition',
    desc: 'Permanent, contract, executive & volume hiring',
    icon: Target,
    accent: 'from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30',
  },
  {
    label: 'Workforce Solutions',
    href: '/hr-workforce-solutions#workforce',
    desc: 'Contract, temporary & scalable workforce deployment',
    icon: Users,
    accent: 'from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/30',
  },
  {
    label: 'Virtual Assistant & Business Support',
    href: '/virtual-assistant-services',
    desc: '100% human remote professionals for executive & operational tasks',
    icon: Briefcase,
    accent: 'from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/30',
  },
  {
    label: 'Virtual Customer Support (VCS)',
    href: '/virtual-customer-support',
    desc: 'Omnichannel voice, chat, email, social & ticketing helpdesk',
    icon: Headphones,
    accent: 'from-teal-500/20 to-teal-500/5 text-teal-400 border-teal-500/30',
  },
  {
    label: 'HR Technology & Digital Solutions',
    href: '/#technology',
    desc: 'JD Match Evaluator, HRMS portals & workforce dashboards',
    icon: Sparkles,
    accent: 'from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/30',
  },
];

const mainNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How We Work', href: '/process' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Workplace Policies', href: '/workplace-policies' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const isSolutionsActive =
    pathname.startsWith('/hr-workforce-solutions') ||
    pathname.startsWith('/talent-acquisition') ||
    pathname.startsWith('/virtual-assistant-services') ||
    pathname.startsWith('/virtual-customer-support') ||
    pathname.startsWith('/services') ||
    pathname.startsWith('/business-support');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/15 shadow-2xl shadow-black/40 py-0'
          : 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Logo + Desktop Nav directly next to it */}
          <div className="flex items-center gap-3 xl:gap-6">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleNavClick}
              className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02] flex-shrink-0"
            >
              <div className="relative">
                <AppLogo
                  src="/assets/images/logo_1-1786267820748.png"
                  size={38}
                  className="rounded-xl shadow-md ring-1 ring-white/20"
                />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full ring-2 ring-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-none">
                  TaskNera
                </span>
                <span className="text-[10px] text-accent tracking-wider uppercase font-semibold mt-1 flex items-center gap-1">
                  <span>People &amp; Operations</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Positioned right next to Home/Logo */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              <Link
                href="/"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg ${
                  pathname === '/'
                    ? 'text-white bg-white/15 font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Home
              </Link>

              {/* About - Placed next to Home */}
              <Link
                href="/about"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg ${
                  pathname === '/about'
                    ? 'text-white bg-white/15 font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                About
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
                  className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg ${
                    isSolutionsActive || solutionsOpen
                      ? 'text-white bg-white/15 font-semibold shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={solutionsOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-accent' : ''}`}
                  />
                </button>

                {/* Mega Dropdown Menu - 100% Solid, High Contrast, 2-Column */}
                {solutionsOpen && (
                  <div
                    className="absolute top-full left-0 w-[580px] pt-2 z-[100] animate-in fade-in-0 slide-in-from-top-1 duration-150"
                    style={{ filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85))' }}
                  >
                    <div
                      className="rounded-2xl border border-slate-700/90 shadow-2xl overflow-hidden ring-1 ring-white/10"
                      style={{ backgroundColor: '#090e1c' }}
                    >
                      {/* Top Bar */}
                      <div
                        className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800"
                        style={{ backgroundColor: '#0e162e' }}
                      >
                        <div className="text-[11px] font-bold text-accent uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                          <span>5 Core Pillars + Tech Layer</span>
                        </div>
                        <Link
                          href="/services"
                          onClick={() => setSolutionsOpen(false)}
                          className="text-xs text-slate-300 hover:text-accent font-medium flex items-center gap-1.5 transition-colors group"
                        >
                          <span>All Solutions Hub</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 text-accent" />
                        </Link>
                      </div>

                      {/* 2-Column Grid */}
                      <div className="grid grid-cols-2 gap-2 p-3" style={{ backgroundColor: '#090e1c' }}>
                        {solutionLinks.map((sol) => {
                          const IconComp = sol.icon;
                          return (
                            <Link
                              key={sol.label}
                              href={sol.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl border border-slate-800/60 bg-slate-900/70 hover:border-slate-600 hover:bg-slate-800 transition-all duration-150 group"
                            >
                              <div
                                className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-150 group-hover:scale-105 shadow-sm ${sol.accent}`}
                              >
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-white group-hover:text-accent transition-colors flex items-center justify-between">
                                  <span className="truncate">{sol.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent flex-shrink-0 ml-1" />
                                </div>
                                <div className="text-[11px] text-slate-300 group-hover:text-slate-100 line-clamp-2 mt-0.5 leading-snug">
                                  {sol.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom Footer Strip */}
                      <div
                        className="px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs"
                        style={{ backgroundColor: '#0e162e' }}
                      >
                        <span className="flex items-center gap-2 text-slate-300 font-medium">
                          <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>100% Vetted Human Teams &middot; SLA Backed</span>
                        </span>
                        <Link
                          href="/process"
                          onClick={() => setSolutionsOpen(false)}
                          className="text-accent hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span>How We Work →</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/process"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg ${
                  pathname === '/process'
                    ? 'text-white bg-white/15 font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                How We Work
              </Link>
              <Link
                href="/industries"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg ${
                  pathname === '/industries'
                    ? 'text-white bg-white/15 font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Industries
              </Link>
              <Link
                href="/pricing"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg ${
                  pathname === '/pricing' || pathname === '/engagement'
                    ? 'text-white bg-white/15 font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/workplace-policies"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg ${
                  pathname === '/workplace-policies'
                    ? 'text-white bg-white/15 font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Policies
              </Link>
              <Link
                href="/contact"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg ${
                  pathname === '/contact'
                    ? 'text-white bg-white/15 font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right: Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={pathname === '/' ? '/#contact' : '/contact'}
                className="bg-accent text-accent-foreground text-xs xl:text-sm font-semibold px-4 xl:px-5 py-2 xl:py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all duration-200 shadow-md shadow-accent/25 flex items-center gap-2 flex-shrink-0"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
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
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-slate-950/98 backdrop-blur-2xl z-40 flex flex-col justify-between overflow-y-auto border-t border-white/10 animate-in fade-in duration-200">
          <nav className="flex flex-col px-6 pt-6 gap-1 pb-4">
            <Link
              href="/"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            {/* About - Directly after Home */}
            <Link
              href="/about"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/about'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>About</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            {/* Mobile Solutions Accordion */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={`w-full flex items-center justify-between text-base font-semibold px-4 py-3 rounded-xl transition-colors ${
                  isSolutionsActive
                    ? 'bg-white/15 text-white'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>Solutions</span>
                  <span className="text-[10px] uppercase font-bold text-accent bg-accent/15 px-2 py-0.5 rounded-md">
                    5 Pillars
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileSolutionsOpen ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </button>

              {mobileSolutionsOpen && (
                <div
                  className="p-2 space-y-1 rounded-2xl my-2 border border-slate-800 shadow-inner animate-in fade-in duration-150"
                  style={{ backgroundColor: '#090e1c' }}
                >
                  {solutionLinks.map((sol) => {
                    const IconComp = sol.icon;
                    return (
                      <Link
                        key={sol.label}
                        href={sol.href}
                        onClick={handleNavClick}
                        className="flex items-center gap-3 py-2.5 px-3 text-sm text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors border border-transparent hover:border-slate-700"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${sol.accent}`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white text-xs">{sol.label}</div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">{sol.desc}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    onClick={handleNavClick}
                    className="flex items-center justify-between py-2.5 px-3 text-xs font-semibold text-accent border-t border-slate-800 mt-1 hover:text-emerald-300"
                  >
                    <span>View All Solutions Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/process"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/process'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>How We Work</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/industries"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/industries'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Industries</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/pricing"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/pricing' || pathname === '/engagement'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Engagement &amp; Pricing</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/workplace-policies"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/workplace-policies'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Workplace Policies</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/contact"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/contact'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>
          </nav>

          <div className="px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-white/10 bg-slate-950">
            <Link
              href={pathname === '/' ? '/#contact' : '/contact'}
              onClick={handleNavClick}
              className="bg-accent text-accent-foreground text-base font-semibold px-6 py-3.5 rounded-full text-center hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:operations@tasknera.com"
              onClick={handleNavClick}
              className="text-slate-400 hover:text-white text-xs text-center transition-colors flex items-center justify-center gap-2 py-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>operations@tasknera.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}