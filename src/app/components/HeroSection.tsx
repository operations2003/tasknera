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
      className="relative min-h-[92vh] flex items-center bg-hero-gradient overflow-hidden noise-overlay"
      style={{ paddingTop: '80px' }}
    >
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient mesh */}
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(15,184,138,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 60%, rgba(244,123,63,0.14) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(11,19,43,0.6) 0%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
        />

        {/* Blob 1 — teal */}
        <div
          ref={blobRef1}
          className="absolute morph-blob animate-pulse-slow"
          style={{
            width: '620px',
            height: '520px',
            top: '-80px',
            right: '-100px',
            background: 'radial-gradient(ellipse, rgba(15,184,138,0.22) 0%, transparent 70%)',
            filter: 'blur(70px)',
            transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />

        {/* Blob 2 — coral */}
        <div
          ref={blobRef2}
          className="absolute morph-blob animate-float-delayed"
          style={{
            width: '520px',
            height: '420px',
            bottom: '40px',
            left: '-80px',
            background: 'radial-gradient(ellipse, rgba(244,123,63,0.16) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
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
            <div className="clip-in stagger-1 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg shadow-black/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-bold text-white tracking-wider uppercase">
                Your Global HR, Workforce &amp; Business Support Partner
              </span>
            </div>

            {/* Main headline */}
            <h1 className="clip-in stagger-2 text-hero font-display font-bold text-white leading-[1.12]">
              Build. Manage. Scale.{' '}
              <span className="gradient-text-coral block sm:inline">
                Your People &amp; Operations.
              </span>
            </h1>

            {/* Description */}
            <p className="fade-up stagger-3 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl font-normal">
              TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Talent, Workforce, Virtual Assistant and Virtual Customer Support solutions.
            </p>

            {/* Supporting capability pills */}
            <div className="fade-up stagger-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-white/75">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>HR Operations</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                <span>Talent Acquisition</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Workforce Solutions</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Human Virtual Assistants</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Omnichannel VCS</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="fade-up stagger-4 flex flex-wrap gap-4 items-center pt-2">
              <Link
                href="/#contact"
                className="bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-base flex items-center gap-2 group"
              >
                <span>Talk to an HR &amp; Workforce Expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="glass-btn text-white font-semibold px-7 py-4 rounded-full text-base hover:bg-white/15 transition-all flex items-center gap-2"
              >
                <span>Explore All Solutions</span>
              </Link>
            </div>
          </div>

          {/* Right — Visual card cluster */}
          <div className="lg:col-span-5 fade-up stagger-3 py-4">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              
              {/* Main card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative z-10 border border-white/20 bg-slate-900/60 backdrop-blur-xl">
                {/* Logo mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AppImage
                      src="/assets/images/logo_1-1786267820748.png"
                      alt="TaskNera logo mark"
                      width={46}
                      height={46}
                      className="rounded-xl shadow-md ring-1 ring-white/20"
                    />
                    <div>
                      <div className="text-white font-display font-bold text-xl leading-tight">
                        TaskNera
                      </div>
                      <div className="text-accent text-xs font-semibold">
                        Integrated People &amp; Operations
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white/70 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
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
                      className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-3 text-center border border-white/10"
                    >
                      <div className="text-base sm:text-lg font-display font-bold gradient-text-coral">
                        {stat.value}
                      </div>
                      <div className="text-white/65 text-[11px] mt-0.5 leading-tight font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service tags */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest flex items-center justify-between">
                    <span>Full-Spectrum Scope</span>
                    <span className="text-accent text-[10px] font-semibold">One Contract</span>
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
                        className="text-xs font-medium text-white/90 bg-white/10 border border-white/15 rounded-full px-3 py-1 hover:border-accent/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-card: One Partner Guarantee */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-accent/20 to-teal-500/10 border border-accent/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
                    <div className="text-xs font-semibold text-white">
                      <div>Compliance-Focused &amp; SLA Backed</div>
                      <div className="text-[11px] text-white/60 font-normal">
                        Transparent governance &amp; dedicated account managers
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge 1 — Top Right */}
              <div className="hidden sm:flex absolute -top-5 -right-4 glass-card rounded-2xl px-4 py-2.5 z-20 shadow-xl border border-white/25 items-center gap-2.5 hover:scale-105 transition-transform duration-300 bg-slate-950/80">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <div>
                  <div className="text-white text-xs font-bold">Technology-Enabled</div>
                  <div className="text-white/60 text-[10px]">JD Match Evaluator &amp; Portals</div>
                </div>
              </div>

              {/* Floating badge 2 — Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 glass-card rounded-2xl px-4 py-2.5 z-20 shadow-xl border border-white/25 items-center gap-2.5 hover:scale-105 transition-transform duration-300 bg-slate-950/80">
                <Users className="w-4 h-4 text-secondary" />
                <div>
                  <div className="text-white text-xs font-bold">One Partner</div>
                  <div className="text-white/60 text-[10px]">All Capabilities Under One Roof</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}