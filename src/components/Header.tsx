'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02]">
            <AppLogo
              src="/assets/images/logo_1-1786267820748.png"
              size={36}
              className="rounded-lg shadow-sm"
            />
            <span className="font-display font-bold text-xl text-white tracking-tight hidden sm:block">
              TaskNera
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/#contact"
              className="bg-accent text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all duration-200 shadow-md shadow-accent/25"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
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
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col px-6 pt-6 gap-1">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                onClick={handleNavClick}
                className="text-lg font-semibold text-slate-200 hover:text-white hover:bg-white/5 px-3 py-3 rounded-lg border-b border-white/5 transition-colors"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-8 pt-6 flex flex-col gap-4 border-t border-white/10 bg-slate-950">
            <Link
              href="/admin"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-400 hover:text-white transition-colors text-center"
            >
              Admin
            </Link>
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="text-base font-semibold text-slate-300 hover:text-white transition-colors text-center"
            >
              Contact
            </Link>
            <Link
              href="/#contact"
              onClick={handleNavClick}
              className="bg-accent text-accent-foreground text-base font-semibold px-6 py-3.5 rounded-full text-center hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/25"
            >
              Get in Touch
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