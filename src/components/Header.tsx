'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Users,
  Search,
  Layers,
  Bot,
  Headphones,
  CodeXml,
  ScanSearch,
  LayoutDashboard,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { companyInfo } from '@/lib/base44_content';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const serviceMenuItems = [
  {
    slug: 'hr-operations',
    name: 'HR & People Operations',
    tagline: 'Your extended HR department — compliant, documented and accountable.',
    icon: Users,
    href: '/services/hr-operations',
  },
  {
    slug: 'talent-acquisition',
    name: 'Talent Acquisition & Recruitment',
    tagline: 'Structured hiring that stands up to scrutiny.',
    icon: Search,
    href: '/services/talent-acquisition',
  },
  {
    slug: 'workforce-solutions',
    name: 'Workforce Solutions',
    tagline: 'Staffing that flexes with real business demand.',
    icon: Layers,
    href: '/services/workforce-solutions',
  },
  {
    slug: 'virtual-assistants',
    name: 'Virtual Assistant & Business Support',
    tagline: 'Reliable operational support so founders and teams stay focused.',
    icon: Bot,
    href: '/services/virtual-assistants',
  },
  {
    slug: 'technology',
    name: 'Technology & Software Development',
    tagline: 'Full-stack engineering and automation built for production.',
    icon: CodeXml,
    href: '/services/technology',
  },
  {
    slug: 'hireiq',
    name: 'HireIQ',
    tagline: 'Recruit smarter. Evaluate better. Hire with confidence.',
    icon: ScanSearch,
    href: '/services/hireiq',
  },
  {
    slug: 'hrms',
    name: 'TaskNera HRMS',
    tagline: 'Manage your people. Simplify your operations.',
    icon: LayoutDashboard,
    href: '/services/hrms',
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-[#FAF7F2]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[70px] items-center justify-between gap-6">
          
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-none items-center gap-3 py-1 transition-opacity duration-200 hover:opacity-85"
          >
            <Image
              src="/assets/images/tasknera-logo.png"
              alt="TaskNera"
              width={38}
              height={38}
              className="h-9 w-auto object-contain flex-none transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col justify-center">
              <span className="font-heading text-[22px] font-medium tracking-[-0.015em] text-brand-navy transition-colors group-hover:text-black leading-none">
                TaskNera
              </span>
              <span className="mt-1.5 text-[8.5px] font-medium uppercase tracking-[0.22em] text-[#6B655F] transition-colors group-hover:text-[#423C37] leading-none">
                People · Process · Performance
              </span>
            </div>
          </Link>

          {/* Desktop Primary Nav */}
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {navigationLinks.map((item) => {
              const isServices = item.dropdown;
              const isActive = isServices
                ? pathname.startsWith('/services')
                : pathname === item.href;

              if (isServices) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen((prev) => !prev)}
                      aria-expanded={servicesDropdownOpen}
                      className={`flex items-center gap-1.5 py-2 text-[12.5px] font-medium tracking-[0.01em] transition-colors ${
                        isActive
                          ? 'text-brand-blue font-semibold'
                          : 'text-brand-ink/75 hover:text-brand-navy'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Panel */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-2 animate-in fade-in duration-150">
                        <div className="overflow-hidden rounded-[4px] border border-brand-navy/12 bg-[#FFFDFB] p-2 shadow-[0_24px_60px_-34px_rgba(20,17,16,0.45)]">
                          <div className="grid grid-cols-2 gap-0.5">
                            {serviceMenuItems.map((svc) => {
                              const Icon = svc.icon;
                              return (
                                <Link
                                  key={svc.slug}
                                  href={svc.href}
                                  className="group flex gap-3 rounded-[3px] p-3 transition-colors hover:bg-brand-mist"
                                >
                                  <div className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-[3px] bg-brand-navy/[0.05] text-brand-blue transition-colors group-hover:bg-brand-navy group-hover:text-brand-teal">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="flex items-center gap-1 text-[13px] font-semibold text-brand-navy">
                                      <span>{svc.name}</span>
                                      <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                                    </div>
                                    <span className="mt-0.5 block text-[11.5px] leading-snug text-brand-ink/55">
                                      {svc.tagline}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="mt-1 flex items-center justify-between rounded-[3px] bg-brand-navy px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                            <span>One partner · Eight disciplines</span>
                            <Link
                              href="/services"
                              className="text-brand-teal hover:underline flex items-center gap-1"
                            >
                              <span>View all solutions</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`py-2 text-[12.5px] font-medium tracking-[0.01em] transition-colors ${
                    isActive
                      ? 'text-brand-blue font-semibold'
                      : 'text-brand-ink/75 hover:text-brand-navy'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side CTAs */}
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/contact"
              className="bg-brand-navy text-white hover:bg-black font-medium text-[12.5px] px-4 py-2 rounded-[3px] transition-colors shadow-sm"
            >
              Book a free consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="grid h-9 w-9 place-items-center rounded-[3px] border border-brand-navy/20 text-brand-navy lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-70px)] overflow-y-auto border-t border-brand-navy/10 bg-[#FAF7F2] lg:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-5 flex flex-col gap-1">
            {navigationLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-brand-navy/[0.07] py-3 text-[15px] font-medium text-brand-navy flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-brand-blue opacity-50" />
              </Link>
            ))}

            <div className="mt-4 pt-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/40">
                Core Disciplines
              </span>
              <div className="grid grid-cols-1 gap-1.5 mt-2">
                {serviceMenuItems.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={svc.href}
                    className="flex items-center gap-3 py-2 text-[13.5px] text-brand-ink/80 hover:text-brand-navy"
                  >
                    <svc.icon className="h-4 w-4 text-brand-blue" />
                    <span>{svc.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-brand-navy/10 pt-6">
              <Link
                href="/contact"
                className="bg-brand-navy text-white text-center py-3 rounded-[3px] font-medium text-[13.5px]"
              >
                Book a free consultation
              </Link>
              <a
                href={`mailto:${companyInfo.emailOperations}`}
                className="pt-1 text-center text-[12.5px] font-medium text-brand-ink/60"
              >
                {companyInfo.emailOperations}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
