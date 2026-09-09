'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Principle {
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    title: 'Service Before Shortcuts',
    description:
      'We believe quality support should never feel rushed or transactional. Every business deserves thoughtful workforce solutions built with care, attention, and long-term value in mind.',
  },
  {
    title: 'Passion Creates Better Work',
    description:
      'Tasknera was created with a genuine interest in helping businesses build stronger and more dependable workforce systems. We believe meaningful work is driven by dedication, curiosity, and continuous improvement.',
  },
  {
    title: 'People Matter',
    description:
      'Behind every operation are real people, teams, founders, employees, and customers. We value respectful communication, professional trust, and workforce experiences that support healthier collaboration.',
  },
  {
    title: 'Growth Through Reliability',
    description:
      'Sustainable growth comes from consistency and strong operational foundations. We focus on creating workforce support systems businesses can depend on as they continue to evolve.',
  },
  {
    title: 'Building Long-Term Partnerships',
    description:
      'We believe the best business relationships are built over time through transparency, support, and shared progress. Tasknera aims to become a trusted operational partner, not simply a temporary service provider.',
  },
];

export default function PrinciplesSection() {
  // Set the 5th item open by default to match design format, allowing item toggles
  const [openIndex, setOpenIndex] = useState<number | null>(4);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-muted border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">Our Core Beliefs</span>
          </div>
          <h2 className="text-section-title font-display font-700 text-foreground">
            Principles Behind <span className="gradient-text-teal">TaskNera</span>
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column — Team Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border aspect-[4/3] sm:aspect-[1.15/1] lg:aspect-[0.95/1] w-full group bg-card">
              <AppImage
                src="/assets/images/team_meeting.jpg"
                alt="Tasknera team collaborating in a modern office meeting room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Right Column — Intro Text & Interactive Principles Accordion */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between h-full">
            
            {/* Top Introductory Text */}
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
              <p>
                At Tasknera, we believe strong businesses are built through trust, consistency, and meaningful professional relationships. Our values shape the way we approach workforce support, collaboration, and long-term business partnerships.
              </p>
              <p>
                We focus on creating systems and experiences that prioritize reliability, communication, and genuine operational support because behind every business are people working hard to grow something meaningful.
              </p>
            </div>

            {/* Accordion List */}
            <div className="divide-y divide-border border-t border-b border-border pt-1">
              {principles.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.title} className="py-4 sm:py-5 transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-display font-700 text-lg sm:text-xl transition-colors ${
                          isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent'
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`text-2xl sm:text-3xl ml-4 select-none transition-transform duration-300 font-light ${
                          isOpen ? 'text-accent' : 'text-muted-foreground group-hover:text-accent'
                        }`}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 pr-4 sm:pr-6 text-muted-foreground text-sm sm:text-base leading-relaxed animate-fadeIn">
                        <p>{item.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
