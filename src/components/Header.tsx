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
  Compass,
  Globe2,
} from 'lucide-react';

const solutionLinks = [
  {
    label: 'HR & People Operations',
    href: '/hr-workforce-solutions',
    desc: 'HR operations, onboarding, payroll & lifecycle management',
    icon: Building2,
    accent: 'bg-[#E5BDB4]/25 text-[#704A4B] border-[#DED3C7]',
  },
  {
    label: 'Talent & Recruitment',
    href: '/talent-acquisition',
    desc: 'Permanent, contract, executive & volume hiring',
    icon: Target,
    accent: 'bg-[#E5BDB4]/30 text-[#754E4E] border-[#DED3C7]',
  },
  {
    label: 'Workforce Solutions',
    href: '/hr-workforce-solutions#workforce',
    desc: 'Contract, temporary & scalable workforce deployment',
    icon: Users,
    accent: 'bg-[#8E7D6E]/25 text-[#704A4B] border-[#DED3C7]',
  },
  {
    label: 'Virtual Assistant & Business Support',
    href: '/virtual-assistant-services',
    desc: '100% human remote professionals for executive & operational tasks',
    icon: Briefcase,
    accent: 'bg-[#E5BDB4]/25 text-[#704A4B] border-[#DED3C7]',
  },
  {
    label: 'Virtual Customer Support (VCS)',
    href: '/virtual-customer-support',
    desc: 'Omnichannel voice, chat, email, social & ticketing helpdesk',
    icon: Headphones,
    accent: 'bg-[#8E7D6E]/25 text-[#754E4E] border-[#DED3C7]',
  },
  {
    label: 'HireIQ™ & HRMS Platform',
    href: '/#platform',
    desc: 'AI resume screening, JD matching, and end-to-end lifecycle HRMS',
    icon: Sparkles,
    accent: 'bg-[#E5BDB4]/30 text-[#704A4B] border-[#DED3C7]',
  },
];
const aboutDropdownLinks = [
  {
    label: 'About TaskNera',
    href: '/#about',
    desc: 'Our story, 5 core pillars, global delivery architecture & leadership',
    icon: Building2,
    accent: 'bg-[#E5BDB4]/30 text-[#704A4B] border-[#DED3C7]',
  },
  {
    label: 'How We Work',
    href: '/#process',
    desc: 'Our 6-phase predictable execution roadmap, SLAs & tech stack',
    icon: Compass,
    accent: 'bg-[#8E7D6E]/25 text-[#704A4B] border-[#DED3C7]',
  },
  {
    label: '12+ Industries & Roles',
    href: '/#industries',
    desc: 'Specialized domain coverage across Tech, BFSI, Healthcare & more',
    icon: Globe2,
    accent: 'bg-[#E5BDB4]/25 text-[#754E4E] border-[#DED3C7]',
  },
  {
    label: 'Careers at TaskNera',
    href: '/careers',
    desc: 'Explore open roles & join our high-growth global delivery operations',
    icon: Briefcase,
    accent: 'bg-[#8E7D6E]/25 text-[#704A4B] border-[#DED3C7]',
  },
];

const mainNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How We Work', href: '/process' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Careers', href: '/careers' },
  { label: 'Workplace Policies', href: '/workplace-policies' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

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
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
    setAboutOpen(false);
    setMobileAboutOpen(false);
  };

  const isAboutActive =
    pathname === '/about' ||
    pathname === '/process' ||
    pathname === '/industries';

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
          ? 'bg-[#F3ECE4]/95 backdrop-blur-xl border-b border-[#DED3C7] shadow-sm py-0'
          : 'bg-[#F3ECE4]/95 backdrop-blur-md border-b border-[#DED3C7] py-1'
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
                  className="rounded-xl shadow-sm ring-1 ring-[#DED3C7]"
                />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#704A4B] rounded-full ring-2 ring-[#F3ECE4]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl text-[#704A4B] tracking-tight leading-none">
                  TaskNera
                </span>
                <span className="text-[10px] text-[#805D5A] tracking-wider uppercase font-semibold mt-1 flex items-center gap-1">
                  <span>Global HR &amp; Operations</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Positioned right next to Home/Logo */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              <Link
                href="/"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  pathname === '/'
                    ? 'text-[#704A4B] bg-[#8E7D6E]/25 font-semibold shadow-inner border-b-2 border-[#704A4B]'
                    : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15 font-medium'
                }`}
              >
                Home
              </Link>

              {/* Merged About & Company Dropdown (Unifies About, How We Work, Industries) */}
              <div
                ref={aboutRef}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                    isAboutActive || aboutOpen
                      ? 'text-[#704A4B] bg-[#8E7D6E]/25 font-semibold shadow-inner border-b-2 border-[#704A4B]'
                      : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15 font-medium'
                  }`}
                  aria-expanded={aboutOpen}
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180 text-[#704A4B]' : 'text-[#805D5A]'}`}
                  />
                </button>

                {aboutOpen && (
                  <div
                    className="absolute top-full left-0 w-[420px] pt-2 z-[100] animate-in fade-in-0 slide-in-from-top-1 duration-150"
                    style={{ filter: 'drop-shadow(0 20px 30px rgba(112, 74, 75, 0.12))' }}
                  >
                    <div className="rounded-2xl border border-[#DED3C7] bg-[#FAF7F2] shadow-2xl overflow-hidden ring-1 ring-black/5">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F3ECE4] border-b border-[#DED3C7]">
                        <div className="text-[11px] font-bold text-[#704A4B] uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#704A4B] animate-pulse" />
                          <span>Company Overview · Merged Scope</span>
                        </div>
                        <Link
                          href="/#about"
                          onClick={() => setAboutOpen(false)}
                          className="text-xs text-[#704A4B] hover:text-[#593A3B] font-semibold flex items-center gap-1.5 transition-colors group"
                        >
                          <span>Full Overview</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 text-[#704A4B]" />
                        </Link>
                      </div>

                      {/* Merged Items List */}
                      <div className="p-2 space-y-1.5 bg-[#FAF7F2]">
                        {aboutDropdownLinks.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setAboutOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl border border-[#DED3C7] bg-[#FAF7F2] hover:bg-[#F3ECE4] hover:border-[#704A4B]/40 transition-all duration-150 group shadow-sm"
                            >
                              <div
                                className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-150 group-hover:scale-105 shadow-sm ${item.accent}`}
                              >
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-[#423535] group-hover:text-[#704A4B] transition-colors flex items-center justify-between">
                                  <span>{item.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#704A4B] flex-shrink-0 ml-1" />
                                </div>
                                <div className="text-[11px] text-[#625F5F] group-hover:text-[#423535] line-clamp-1 mt-0.5 leading-snug">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom Footer Strip */}
                      <div className="px-4 py-2 border-t border-[#DED3C7] bg-[#F3ECE4] flex items-center justify-between text-xs">
                        <span className="text-[#625F5F] text-[11px]">
                          3-in-1 Unified Hub: Identity, Execution &amp; Coverage
                        </span>
                        <Link
                          href="/#about"
                          onClick={() => setAboutOpen(false)}
                          className="text-[#704A4B] hover:text-[#593A3B] font-semibold text-xs transition-colors"
                        >
                          Explore →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
                  className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                    isSolutionsActive || solutionsOpen
                      ? 'text-[#704A4B] bg-[#8E7D6E]/25 font-semibold shadow-inner border-b-2 border-[#704A4B]'
                      : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15 font-medium'
                  }`}
                  aria-expanded={solutionsOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#704A4B]' : 'text-[#805D5A]'}`}
                  />
                </button>

                {/* Mega Dropdown Menu - Clean Ivory Elevated Card */}
                {solutionsOpen && (
                  <div
                    className="absolute top-full left-0 w-[580px] pt-2 z-[100] animate-in fade-in-0 slide-in-from-top-1 duration-150"
                    style={{ filter: 'drop-shadow(0 20px 30px rgba(112, 74, 75, 0.12))' }}
                  >
                    <div className="rounded-2xl border border-[#DED3C7] bg-[#FAF7F2] shadow-2xl overflow-hidden ring-1 ring-black/5">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F3ECE4] border-b border-[#DED3C7]">
                        <div className="text-[11px] font-bold text-[#704A4B] uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#704A4B] animate-pulse" />
                          <span>5 Core Pillars + Tech Layer</span>
                        </div>
                        <Link
                          href="/services"
                          onClick={() => setSolutionsOpen(false)}
                          className="text-xs text-[#704A4B] hover:text-[#593A3B] font-semibold flex items-center gap-1.5 transition-colors group"
                        >
                          <span>All Solutions Hub</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 text-[#704A4B]" />
                        </Link>
                      </div>

                      {/* 2-Column Grid */}
                      <div className="grid grid-cols-2 gap-2 p-3 bg-[#FAF7F2]">
                        {solutionLinks.map((sol) => {
                          const IconComp = sol.icon;
                          return (
                            <Link
                              key={sol.label}
                              href={sol.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl border border-[#DED3C7] bg-[#FAF7F2] hover:bg-[#F3ECE4] hover:border-[#704A4B]/40 transition-all duration-150 group shadow-sm"
                            >
                              <div
                                className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-150 group-hover:scale-105 shadow-sm ${sol.accent}`}
                              >
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-[#423535] group-hover:text-[#704A4B] transition-colors flex items-center justify-between">
                                  <span className="truncate">{sol.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#704A4B] flex-shrink-0 ml-1" />
                                </div>
                                <div className="text-[11px] text-[#625F5F] group-hover:text-[#423535] line-clamp-2 mt-0.5 leading-snug">
                                  {sol.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom Footer Strip */}
                      <div className="px-4 py-2.5 bg-[#F3ECE4] border-t border-[#DED3C7] flex items-center justify-between text-xs">
                        <span className="flex items-center gap-2 text-[#625F5F] font-medium">
                          <ShieldCheck className="w-4 h-4 text-[#704A4B] flex-shrink-0" />
                          <span>100% Vetted Human Teams &middot; SLA Backed</span>
                        </span>
                        <Link
                          href="/process"
                          onClick={() => setSolutionsOpen(false)}
                          className="text-[#704A4B] hover:text-[#593A3B] font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span>How We Work →</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  pathname === '/pricing' || pathname === '/engagement'
                    ? 'text-[#704A4B] bg-[#8E7D6E]/25 font-semibold shadow-inner border-b-2 border-[#704A4B]'
                    : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15 font-medium'
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/careers"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg flex items-center gap-1.5 ${
                  pathname === '/careers'
                    ? 'text-[#704A4B] bg-[#8E7D6E]/25 font-semibold shadow-inner border-b-2 border-[#704A4B]'
                    : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15 font-medium'
                }`}
              >
                <span>Careers</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E5BDB4]/50 text-[#704A4B] border border-[#704A4B]/20 leading-none">
                  Hiring
                </span>
              </Link>
              <Link
                href="/workplace-policies"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  pathname === '/workplace-policies'
                    ? 'text-[#704A4B] bg-[#8E7D6E]/25 font-semibold shadow-inner border-b-2 border-[#704A4B]'
                    : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15 font-medium'
                }`}
              >
                Policies
              </Link>
              <Link
                href="/contact"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  pathname === '/contact'
                    ? 'text-[#704A4B] bg-[#8E7D6E]/25 font-semibold shadow-inner border-b-2 border-[#704A4B]'
                    : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15 font-medium'
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
                href="/contact"
                className="bg-[#704A4B] text-[#F8F4ED] text-xs xl:text-sm font-semibold px-4 xl:px-5 py-2 xl:py-2.5 rounded-full hover:bg-[#593A3B] active:scale-95 transition-all duration-200 shadow-md shadow-[#704A4B]/20 flex items-center gap-2 flex-shrink-0"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-[#FAF7F2] hover:bg-[#F3ECE4] border border-[#DED3C7] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-[#704A4B] transition-transform duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#704A4B] transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#704A4B] transition-transform duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#F3ECE4] backdrop-blur-2xl z-40 flex flex-col justify-between overflow-y-auto border-t border-[#DED3C7] animate-in fade-in duration-200">
          <nav className="flex flex-col px-6 pt-6 gap-1 pb-4">
            <Link
              href="/"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/'
                  ? 'bg-[#8E7D6E]/25 text-[#704A4B] border-l-4 border-[#704A4B]'
                  : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15'
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            {/* Mobile Merged About Accordion */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full flex items-center justify-between text-base font-semibold px-4 py-3 rounded-xl transition-colors ${
                  isAboutActive
                    ? 'bg-[#8E7D6E]/25 text-[#704A4B] border-l-4 border-[#704A4B]'
                    : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>About &amp; Overview</span>
                  <span className="text-[10px] uppercase font-bold text-[#704A4B] bg-[#E5BDB4]/40 px-2 py-0.5 rounded-md">
                    Overview
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAboutOpen ? 'rotate-180 text-[#704A4B]' : 'text-[#805D5A]'
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="p-2 space-y-1 rounded-2xl my-2 border border-[#DED3C7] bg-[#FAF7F2] shadow-sm animate-in fade-in duration-150">
                  {aboutDropdownLinks.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={handleNavClick}
                        className="flex items-center gap-3 py-2.5 px-3 text-sm rounded-xl transition-colors bg-[#FAF7F2] hover:bg-[#F3ECE4] border border-[#DED3C7]"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${item.accent}`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[#423535] text-xs">{item.label}</div>
                          <div className="text-[11px] text-[#625F5F] line-clamp-1">{item.desc}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#704A4B]" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={`w-full flex items-center justify-between text-base font-semibold px-4 py-3 rounded-xl transition-colors ${
                  isSolutionsActive
                    ? 'bg-[#8E7D6E]/25 text-[#704A4B] border-l-4 border-[#704A4B]'
                    : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>Solutions</span>
                  <span className="text-[10px] uppercase font-bold text-[#704A4B] bg-[#E5BDB4]/40 px-2 py-0.5 rounded-md">
                    5 Pillars
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileSolutionsOpen ? 'rotate-180 text-[#704A4B]' : 'text-[#805D5A]'
                  }`}
                />
              </button>

              {mobileSolutionsOpen && (
                <div className="p-2 space-y-1 rounded-2xl my-2 border border-[#DED3C7] bg-[#FAF7F2] shadow-sm animate-in fade-in duration-150">
                  {solutionLinks.map((sol) => {
                    const IconComp = sol.icon;
                    return (
                      <Link
                        key={sol.label}
                        href={sol.href}
                        onClick={handleNavClick}
                        className="flex items-center gap-3 py-2.5 px-3 text-sm rounded-xl transition-colors bg-[#FAF7F2] hover:bg-[#F3ECE4] border border-[#DED3C7]"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${sol.accent}`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[#423535] text-xs">{sol.label}</div>
                          <div className="text-[11px] text-[#625F5F] line-clamp-1">{sol.desc}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#704A4B]" />
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    onClick={handleNavClick}
                    className="flex items-center justify-between py-2.5 px-3 text-xs font-semibold text-[#704A4B] border-t border-[#DED3C7] mt-1 hover:text-[#593A3B]"
                  >
                    <span>View All Solutions Hub</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#704A4B]" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/pricing' || pathname === '/engagement'
                  ? 'bg-[#8E7D6E]/25 text-[#704A4B] border-l-4 border-[#704A4B]'
                  : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15'
              }`}
            >
              <span>Engagement &amp; Pricing</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/careers"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/careers'
                  ? 'bg-[#8E7D6E]/25 text-[#704A4B] border-l-4 border-[#704A4B]'
                  : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>Careers</span>
                <span className="text-[10px] uppercase font-bold text-[#704A4B] bg-[#E5BDB4]/50 px-2 py-0.5 rounded-md border border-[#704A4B]/20">
                  Hiring
                </span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/workplace-policies"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/workplace-policies'
                  ? 'bg-[#8E7D6E]/25 text-[#704A4B] border-l-4 border-[#704A4B]'
                  : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15'
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
                  ? 'bg-[#8E7D6E]/25 text-[#704A4B] border-l-4 border-[#704A4B]'
                  : 'text-[#805D5A] hover:text-[#704A4B] hover:bg-[#8E7D6E]/15'
              }`}
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>
          </nav>

          <div className="px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-[#DED3C7] bg-[#F3ECE4]">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="bg-[#704A4B] text-[#F8F4ED] text-base font-semibold px-6 py-3.5 rounded-full text-center hover:bg-[#593A3B] active:scale-95 transition-all shadow-md shadow-[#704A4B]/20 flex items-center justify-center gap-2"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:operations@tasknera.com"
              onClick={handleNavClick}
              className="text-[#805D5A] hover:text-[#704A4B] text-xs text-center transition-colors flex items-center justify-center gap-2 py-1"
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