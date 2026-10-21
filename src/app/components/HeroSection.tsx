'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import {
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const mx = (clientX / innerWidth - 0.5) * 2;
      const my = (clientY / innerHeight - 0.5) * 2;

      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${mx * 25}px, ${my * 15}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${mx * -20}px, ${my * -12}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center bg-[#FFF8F0] overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Ambient background lighting pools — soft coral and sand beige */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1 — Tasknera Coral */}
        <div
          ref={blobRef1}
          className="absolute morph-blob animate-pulse-slow"
          style={{
            width: '600px',
            height: '500px',
            top: '-80px',
            right: '-100px',
            background: 'radial-gradient(ellipse, rgba(244,154,125,0.18) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />

        {/* Blob 2 — Sand Beige */}
        <div
          ref={blobRef2}
          className="absolute morph-blob animate-float-delayed"
          style={{
            width: '520px',
            height: '420px',
            bottom: '40px',
            left: '-80px',
            background: 'radial-gradient(ellipse, rgba(220,198,184,0.25) 0%, transparent 70%)',
            filter: 'blur(90px)',
            transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(36,35,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(36,35,38,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — Main content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow badge */}
            <div className="clip-in stagger-1 inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-[#E9E4DF] rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F49A7D] animate-pulse" />
              <span className="text-xs font-bold text-[#242326] tracking-wider uppercase">
                Your Global HR, Workforce &amp; Business Support Partner
              </span>
            </div>

            {/* Main headline - Bold Charcoal typography with Coral accent */}
            <h1 className="clip-in stagger-2 text-hero font-display font-bold text-[#242326] leading-[1.12]">
              Build. Manage. Scale.{' '}
              <span className="text-[#F49A7D] block sm:inline">
                Your People &amp; Operations.
              </span>
            </h1>

            {/* Description - Slate */}
            <p className="fade-up stagger-3 text-lg sm:text-xl text-[#55515A] leading-relaxed max-w-2xl font-normal">
              TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Talent, Workforce, Virtual Assistant and Virtual Customer Support solutions.
            </p>

            {/* Supporting capability pills */}
            <div className="fade-up stagger-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium">
              {[
                'HR Operations',
                'Talent Acquisition',
                'Workforce Solutions',
                'Human Virtual Assistants',
                'Omnichannel VCS',
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 bg-white text-[#55515A] px-3.5 py-1.5 rounded-full border border-[#E9E4DF] shadow-sm hover:border-[#DCC6B8] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F49A7D]" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            {/* CTA Buttons - Coral primary CTA with charcoal text */}
            <div className="fade-up stagger-4 flex flex-wrap gap-4 items-center pt-2">
              <Link
                href="/#contact"
                className="bg-[#F49A7D] text-[#242326] font-bold px-8 py-4 rounded-full hover:bg-[#E28567] active:scale-95 transition-all shadow-lg shadow-[#F49A7D]/25 text-base flex items-center gap-2 group"
              >
                <span>Talk to an HR &amp; Workforce Expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white text-[#242326] font-semibold px-7 py-4 rounded-full text-base hover:bg-[#FFF8F0] border border-[#E9E4DF] hover:border-[#DCC6B8] shadow-sm transition-all flex items-center gap-2"
              >
                <span>Explore All Solutions</span>
              </Link>
              <Link
                href="/careers#freelance-recruiter-remote-pan-india"
                className="bg-white text-[#242326] font-semibold px-7 py-4 rounded-full text-base hover:bg-[#FFF8F0] border border-[#E9E4DF] hover:border-[#F49A7D] shadow-sm transition-all flex items-center gap-2 group"
              >
                <Briefcase className="w-4 h-4 text-[#F49A7D] group-hover:scale-110 transition-transform" />
                <span>Join Us as Recruiter</span>
              </Link>
            </div>
          </div>

          {/* Right — Visual card cluster */}
          <div className="lg:col-span-5 fade-up stagger-3 py-4">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              
              {/* Main card */}
              <div className="rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative z-10 border border-[#E9E4DF] bg-white backdrop-blur-xl">
                {/* Logo mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AppImage
                      src="/assets/images/logo_1-1786267820748.png"
                      alt="TaskNera logo mark"
                      width={46}
                      height={46}
                      className="rounded-xl shadow-sm ring-1 ring-[#E9E4DF]"
                    />
                    <div>
                      <div className="text-[#242326] font-display font-bold text-xl leading-tight">
                        TaskNera
                      </div>
                      <div className="text-[#55515A] text-xs font-semibold">
                        Integrated People &amp; Operations
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#242326] bg-[#F49A7D]/20 px-2.5 py-1 rounded-full border border-[#F49A7D]/30">
                    Enterprise Grade
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '5 Pillars', label: 'End-to-End Scope' },
                    { value: 'Remote-Ready', label: 'Multi-Timezone' },
                    { value: '360°', label: 'People Ops' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#FFF8F0] hover:bg-[#FFF8F0]/70 transition-colors rounded-2xl p-3 text-center border border-[#E9E4DF]"
                    >
                      <div className="text-base sm:text-lg font-display font-bold text-[#F49A7D]">
                        {stat.value}
                      </div>
                      <div className="text-[#55515A] text-[11px] mt-0.5 leading-tight font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service tags */}
                <div className="space-y-2.5 pt-2 border-t border-[#E9E4DF]">
                  <div className="text-[11px] font-bold text-[#55515A] uppercase tracking-widest flex items-center justify-between">
                    <span>Full-Spectrum Scope</span>
                    <span className="text-[#F49A7D] text-[10px] font-bold">One Contract</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'HR & People Operations',
                      'Talent & Recruitment',
                      'Workforce Solutions',
                      'Virtual Assistant (Human)',
                      'Virtual Customer Support (VCS)',
                      'JD Match Evaluator',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-[#55515A] bg-[#FFF8F0] border border-[#E9E4DF] rounded-full px-3 py-1 hover:border-[#DCC6B8] hover:text-[#242326] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-card: One Partner Guarantee */}
                <div className="p-3.5 rounded-2xl bg-[#FFF8F0] border border-[#DCC6B8] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#F49A7D]/20 border border-[#F49A7D]/30 flex items-center justify-center text-[#F49A7D] flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-[#242326]">
                      <div>Compliance-Focused &amp; SLA Backed</div>
                      <div className="text-[11px] text-[#55515A] font-normal">
                        Transparent governance &amp; dedicated account managers
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge 1 — Top Right */}
              <div className="hidden sm:flex absolute -top-5 -right-4 rounded-2xl px-4 py-2.5 z-20 shadow-lg border border-[#E9E4DF] items-center gap-2.5 hover:scale-105 transition-transform duration-300 bg-white/95 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#F49A7D] animate-pulse" />
                <div>
                  <div className="text-[#242326] text-xs font-bold">Technology-Enabled</div>
                  <div className="text-[#55515A] text-[10px]">JD Match Evaluator &amp; Portals</div>
                </div>
              </div>

              {/* Floating badge 2 — Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 rounded-2xl px-4 py-2.5 z-20 shadow-lg border border-[#E9E4DF] items-center gap-2.5 hover:scale-105 transition-transform duration-300 bg-white/95 backdrop-blur-md">
                <Users className="w-4 h-4 text-[#F49A7D]" />
                <div>
                  <div className="text-[#242326] text-xs font-bold">One Partner</div>
                  <div className="text-[#55515A] text-[10px]">All Capabilities Under One Roof</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}