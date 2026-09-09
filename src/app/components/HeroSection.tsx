'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

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
        blobRef1.current.style.transform = `translate(${mx * 30}px, ${my * 20}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${mx * -20}px, ${my * -15}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
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
                'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(15,184,138,0.14) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 60%, rgba(244,123,63,0.1) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(26,36,86,0.4) 0%, transparent 70%)',
              backgroundSize: '200% 200%',
            }}
          />

          {/* Blob 1 — teal */}
          <div
            ref={blobRef1}
            className="absolute morph-blob animate-pulse-slow"
            style={{
              width: '600px',
              height: '500px',
              top: '-100px',
              right: '-100px',
              background: 'radial-gradient(ellipse, rgba(15,184,138,0.18) 0%, transparent 70%)',
              filter: 'blur(60px)',
              transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          />

          {/* Blob 2 — coral */}
          <div
            ref={blobRef2}
            className="absolute morph-blob animate-float-delayed"
            style={{
              width: '500px',
              height: '400px',
              bottom: '50px',
              left: '-80px',
              background: 'radial-gradient(ellipse, rgba(244,123,63,0.12) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left — Main content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow badge / Main Tagline */}
              <div className="clip-in stagger-1 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-white/95 tracking-wide sm:tracking-widest uppercase">
                  Your Global HR, Workforce &amp; Business Support Partner
                </span>
              </div>

              {/* Main headline */}
              <h1 className="clip-in stagger-2 text-hero font-display font-700 text-white leading-[1.12]">
                Build. Manage. Scale.{' '}
                <span className="gradient-text-coral block sm:inline">
                  Your People &amp; Operations.
                </span>
              </h1>

              {/* Description */}
              <p className="fade-up stagger-3 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
                TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Workforce, Talent, Virtual Assistant and Customer Support solutions.
              </p>

              {/* Supporting line */}
              <div className="fade-up stagger-3.5 flex items-center gap-2 text-xs sm:text-sm font-medium text-accent tracking-wide">
                <span className="text-secondary">✦</span>
                <span>HR • Talent • Workforce • Virtual Support • Customer Experience</span>
              </div>

              {/* CTA Buttons */}
              <div className="fade-up stagger-4 flex flex-wrap gap-4 items-center pt-1">
                <Link
                  href="/#contact"
                  className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/30 text-base"
                >
                  Talk to an HR &amp; Workforce Expert
                </Link>
                <Link
                  href="/#services"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-base hover:bg-white/15 transition-all"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </div>

            {/* Right — Visual card cluster */}
            <div className="lg:col-span-5 fade-up stagger-3 py-6 px-2 sm:px-4">
              <div className="relative">
                {/* Main card */}
                <div className="glass-card rounded-3xl p-6 sm:p-8 pb-10 sm:pb-12 space-y-6 shadow-2xl relative z-10 border border-white/20">
                  {/* Logo mark */}
                  <div className="flex items-center gap-3">
                    <AppImage
                      src="/assets/images/logo_1-1786267820748.png"
                      alt="TaskNera logo mark"
                      width={44}
                      height={44}
                      className="rounded-xl"
                    />
                    <div>
                      <div className="text-white font-display font-600 text-lg">TaskNera</div>
                      <div className="text-white/60 text-xs">People &amp; Operations Partner</div>
                    </div>
                  </div>

                  {/* Stats / Coverage metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '5 Pillars', label: 'Integrated Scope' },
                      { value: 'Remote-Ready', label: 'Global Delivery' },
                      { value: '360°', label: 'People Ops' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/10 rounded-2xl p-3 text-center border border-white/5"
                      >
                        <div className="text-base sm:text-lg font-display font-700 gradient-text-coral">
                          {stat.value}
                        </div>
                        <div className="text-white/60 text-[11px] mt-0.5 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Service tags reflecting the 5 Pillars + Tech */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold text-white/50 uppercase tracking-widest">
                      Full-Spectrum Capabilities
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
                          className="text-xs font-medium text-accent bg-accent/10 border border-accent/25 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge — Multi-Function Support */}
                <div className="absolute -bottom-6 -left-3 sm:-left-6 glass-card rounded-2xl px-4 py-3 z-20 shadow-xl border border-white/25 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🤝</span>
                    <div>
                      <div className="text-white text-xs font-semibold">One Partner. All Under One Roof.</div>
                      <div className="text-white/60 text-[11px]">People, Workforce &amp; Operations</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge — Technology-Enabled */}
                <div className="absolute -top-6 -right-2 sm:-right-6 glass-card rounded-2xl px-4 py-3 z-20 shadow-xl border border-white/25 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2.5">
                    <span className="text-accent text-xl">⚡</span>
                    <div>
                      <div className="text-white text-xs font-semibold">Technology-Enabled</div>
                      <div className="text-white/60 text-[11px]">Modern HR &amp; Workforce delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}