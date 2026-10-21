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

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const isSolutionsActive =
    pathname === '/services' ||
    pathname === '/solutions' ||
    pathname.startsWith('/services') ||
    pathname.startsWith('/solutions') ||
    pathname.startsWith('/hr-workforce-solutions') ||
    pathname.startsWith('/talent-acquisition') ||
    pathname.startsWith('/virtual-assistant-services') ||
    pathname.startsWith('/virtual-customer-support') ||
    pathname.startsWith('/business-support');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#242326]/95 backdrop-blur-xl border-b border-[#353338] shadow-md py-0'
          : 'bg-[#242326]/95 backdrop-blur-md border-b border-[#353338] py-1'
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
                  className="rounded-xl shadow-sm ring-1 ring-[#3E3C42]"
                />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#F49A7D] rounded-full ring-2 ring-[#242326]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl text-[#FFF8F0] tracking-tight leading-none">
                  TaskNera
                </span>
                <span className="text-[10px] text-[#DCC6B8] tracking-wider uppercase font-semibold mt-1 flex items-center gap-1">
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
                    ? 'text-[#FFF8F0] bg-white/10 font-semibold shadow-inner border-b-2 border-[#F49A7D]'
                    : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5 font-medium'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  pathname === '/about'
                    ? 'text-[#FFF8F0] bg-white/10 font-semibold shadow-inner border-b-2 border-[#F49A7D]'
                    : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5 font-medium'
                }`}
              >
                About
              </Link>

              <Link
                href="/services"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  isSolutionsActive
                    ? 'text-[#FFF8F0] bg-white/10 font-semibold shadow-inner border-b-2 border-[#F49A7D]'
                    : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5 font-medium'
                }`}
              >
                Solutions
              </Link>

              <Link
                href="/pricing"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  pathname === '/pricing' || pathname === '/engagement'
                    ? 'text-[#FFF8F0] bg-white/10 font-semibold shadow-inner border-b-2 border-[#F49A7D]'
                    : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5 font-medium'
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/careers"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg flex items-center gap-1.5 ${
                  pathname === '/careers'
                    ? 'text-[#FFF8F0] bg-white/10 font-semibold shadow-inner border-b-2 border-[#F49A7D]'
                    : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5 font-medium'
                }`}
              >
                <span>Careers</span>
                <span
                  className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold leading-none transition-colors ${
                    pathname === '/careers'
                      ? 'bg-[#F49A7D] text-[#242326]'
                      : 'bg-[#F49A7D]/20 text-[#F49A7D] border border-[#F49A7D]/30'
                  }`}
                >
                  Hiring
                </span>
              </Link>
              <Link
                href="/workplace-policies"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  pathname === '/workplace-policies'
                    ? 'text-[#FFF8F0] bg-white/10 font-semibold shadow-inner border-b-2 border-[#F49A7D]'
                    : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5 font-medium'
                }`}
              >
                Policies
              </Link>
              <Link
                href="/contact"
                className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg ${
                  pathname === '/contact'
                    ? 'text-[#FFF8F0] bg-white/10 font-semibold shadow-inner border-b-2 border-[#F49A7D]'
                    : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5 font-medium'
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
                className="bg-[#F49A7D] text-[#242326] text-xs xl:text-sm font-bold px-4 xl:px-5 py-2 xl:py-2.5 rounded-full hover:bg-[#E28567] active:scale-95 transition-all duration-200 shadow-md shadow-[#F49A7D]/25 flex items-center gap-2 flex-shrink-0"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-[#2E2D32] hover:bg-[#38363D] border border-[#3E3C42] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-[#FFF8F0] transition-transform duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#FFF8F0] transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#FFF8F0] transition-transform duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#242326] backdrop-blur-2xl z-40 flex flex-col justify-between overflow-y-auto border-t border-[#3E3C42] animate-in fade-in duration-200">
          <nav className="flex flex-col px-6 pt-6 gap-1 pb-4">
            <Link
              href="/"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/'
                  ? 'bg-white/10 text-[#F49A7D] border-l-4 border-[#F49A7D]'
                  : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5'
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/about"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/about'
                  ? 'bg-white/10 text-[#F49A7D] border-l-4 border-[#F49A7D]'
                  : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5'
              }`}
            >
              <span>About</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/services"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                isSolutionsActive
                  ? 'bg-white/10 text-[#F49A7D] border-l-4 border-[#F49A7D]'
                  : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5'
              }`}
            >
              <span>Solutions</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              href="/pricing"
              onClick={handleNavClick}
              className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                pathname === '/pricing' || pathname === '/engagement'
                  ? 'bg-white/10 text-[#F49A7D] border-l-4 border-[#F49A7D]'
                  : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5'
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
                  ? 'bg-white/10 text-[#F49A7D] border-l-4 border-[#F49A7D]'
                  : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>Careers</span>
                <span
                  className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                    pathname === '/careers'
                      ? 'bg-[#F49A7D] text-[#242326]'
                      : 'text-[#F49A7D] bg-[#F49A7D]/20 border border-[#F49A7D]/30'
                  }`}
                >
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
                  ? 'bg-white/10 text-[#F49A7D] border-l-4 border-[#F49A7D]'
                  : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5'
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
                  ? 'bg-white/10 text-[#F49A7D] border-l-4 border-[#F49A7D]'
                  : 'text-[#DCC6B8] hover:text-[#FFF8F0] hover:bg-white/5'
              }`}
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>
          </nav>

          <div className="px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-[#3E3C42] bg-[#1C1B1D]">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="bg-[#F49A7D] text-[#242326] text-base font-bold px-6 py-3.5 rounded-full text-center hover:bg-[#E28567] active:scale-95 transition-all shadow-md shadow-[#F49A7D]/25 flex items-center justify-center gap-2"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:operations@tasknera.com"
              onClick={handleNavClick}
              className="text-[#DCC6B8] hover:text-[#FFF8F0] text-xs text-center transition-colors flex items-center justify-center gap-2 py-1"
            >
              <Mail className="w-3.5 h-3.5 text-[#F49A7D]" />
              <span>operations@tasknera.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}