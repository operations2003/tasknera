'use client';
import React, { useState, useEffect, useRef } from 'react';
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
        className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden noise-overlay"
        style={{ paddingTop: '80px' }}
      >
        {/* Atmospheric background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated gradient mesh */}
          <div className="absolute inset-0 animate-gradient-shift"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(15,184,138,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 60%, rgba(244,123,63,0.08) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(26,36,86,0.4) 0%, transparent 70%)',
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
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left — Main content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow badge */}
              <div className="clip-in stagger-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-white/90 tracking-widest uppercase">
                  Global HR • Recruitment • Workforce • Virtual Support
                </span>
              </div>

              {/* Main headline */}
              <h1 className="clip-in stagger-2 text-hero font-display font-700 text-white">
                HR Made Easy{' '}
                <span className="gradient-text-coral">For Every Business,</span>{' '}
                Everywhere
              </h1>

              {/* Subheadline */}
              <p className="fade-up stagger-3 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
                Building, managing, and scaling high performing teams for startups, SMEs, and enterprises across India and international markets.
              </p>

              {/* CTA Buttons */}
              <div className="fade-up stagger-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-xl shadow-accent/30 text-base"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="glass-btn text-white font-semibold px-7 py-3.5 rounded-full text-base"
                >
                  Explore Services
                </Link>
              </div>

              {/* Founder credibility */}
            </div>

            {/* Right — Visual card cluster */}
            <div className="lg:col-span-5 fade-up stagger-3 py-6 px-2 sm:px-4">
              <div className="relative">
                {/* Main card */}
                <div className="glass-card rounded-3xl p-6 sm:p-8 pb-10 sm:pb-12 space-y-6 shadow-2xl relative z-10">
                  {/* Logo mark */}
                  <div className="flex items-center gap-3">
                    <AppImage
                      src="/assets/images/logo_1-1786267820748.png"
                      alt="TaskNera logo mark — stylized T with coral gradient arrow"
                      width={44}
                      height={44}
                      className="rounded-xl"
                    />
                    <div>
                      <div className="text-white font-display font-600 text-lg">TaskNera</div>
                      <div className="text-white/50 text-xs">Your People Operations Partner</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '360°', label: 'HR Coverage' },
                      { value: '5', label: 'Global Regions' },
                      { value: '12+', label: 'Industries' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/8 rounded-2xl p-3 text-center"
                      >
                        <div className="text-xl font-display font-700 gradient-text-coral">{stat.value}</div>
                        <div className="text-white/50 text-xs mt-0.5 leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Service tags */}
                  <div className="flex flex-wrap gap-2">
                    {['Talent Acquisition', 'HR Operations', 'Payroll', 'Compliance', 'Virtual Customer Support'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating badge — regions */}
                <div className="absolute -bottom-6 -left-3 sm:-left-8 glass-card rounded-2xl px-4 py-3 z-20 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🌏</span>
                    <div>
                      <div className="text-white text-xs font-semibold">India • US • UK</div>
                      <div className="text-white/50 text-xs">Europe • Remote Global</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge — speed */}
                <div className="absolute -top-6 -right-2 sm:-right-8 glass-card rounded-2xl px-4 py-3 z-20 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <span className="text-accent text-xl">⚡</span>
                    <div>
                      <div className="text-white text-xs font-semibold">Fast Hiring</div>
                      <div className="text-white/50 text-xs">48hr screening</div>
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