'use client';
import React, { useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  quote:
  "TaskNera filled 3 senior engineering roles in under 2 weeks. The quality of shortlists was exceptional — they understood our tech stack and culture from day one.",
  name: 'Arjun Mehta',
  title: 'CTO, FinStack Technologies',
  location: 'Bengaluru, India',
  photo: "https://img.rocket.new/generatedImages/rocket_gen_img_11f93ee64-1763296582119.png",
  rotate: '-rotate-1'
},
{
  quote:
  "We outsourced our entire HR ops to TaskNera — payroll, compliance, onboarding. Six months in, zero compliance issues and our team loves the experience.",
  name: 'Priya Nair',
  title: 'Founder & CEO, HealthBridge',
  location: 'Mumbai, India',
  photo: "https://img.rocket.new/generatedImages/rocket_gen_img_142d3c9bf-1763301932985.png",
  rotate: 'rotate-1'
},
{
  quote:
  "The dedicated recruiter model was a game-changer. It felt like having an in-house TA team without the overhead. Highly recommend for Series A+ companies.",
  name: 'Rohan Sharma',
  title: 'VP People, ScaleUp Ventures',
  location: 'Delhi NCR, India',
  photo: "https://img.rocket.new/generatedImages/rocket_gen_img_157cc23cb-1773965312640.png",
  rotate: '-rotate-2'
},
{
  quote:
  "TaskNera's global sourcing capabilities helped us hire across India, UK, and remote — all through one point of contact. Seamless and professional.",
  name: 'Kavya Reddy',
  title: 'Head of Talent, GlobalEdge Solutions',
  location: 'Hyderabad, India',
  photo: "https://img.rocket.new/generatedImages/rocket_gen_img_194f61f27-1773720518780.png",
  rotate: 'rotate-2'
},
{
  quote:
  "Their RPO model gave us full visibility into our hiring pipeline for the first time. The weekly reports and dashboards are genuinely useful.",
  name: 'Siddharth Joshi',
  title: 'CHRO, Meridian Logistics',
  location: 'Pune, India',
  photo: "https://img.rocket.new/generatedImages/rocket_gen_img_139aecbeb-1772222577999.png",
  rotate: '-rotate-1'
}];


export default function TestimonialsSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const scroll = (dir: 'prev' | 'next') => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: dir === 'next' ? 540 : -540, behavior: 'smooth' });
  };

  const updateButtons = () => {
    if (!railRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
    setPrevDisabled(scrollLeft <= 10);
    setNextDisabled(scrollLeft >= scrollWidth - clientWidth - 10);
  };

  return (
    <section className="py-20 sm:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Client Stories</span>
            </div>
            <h2 className="text-section-title font-display font-700 text-foreground">
              Trusted by Teams{' '}
              <span className="gradient-text-teal">That Scale</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll('prev')}
              disabled={prevDisabled}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-40 disabled:pointer-events-none">
              
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('next')}
              disabled={nextDisabled}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 disabled:pointer-events-none">
              
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Rail */}
        <div className="relative overflow-hidden rounded-3xl scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted to-transparent z-10" />

          <div
            ref={railRef}
            onScroll={updateButtons}
            className="flex gap-4 overflow-x-auto px-4 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {testimonials.map((t) =>
            <article
              key={t.name}
              className={`min-w-[320px] sm:min-w-[440px] max-w-[500px] bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm flex-shrink-0 ${t.rotate} hover-lift`}>
              
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) =>
                <span key={i} className="text-secondary text-sm">★</span>
                )}
                </div>
                <p className="text-foreground text-base sm:text-lg leading-relaxed font-display font-400 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <AppImage
                  src={t.photo}
                  alt={`${t.name}, ${t.title} — professional headshot`}
                  width={40}
                  height={40}
                  className="rounded-xl object-cover w-10 h-10" />
                
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.title}</div>
                    <div className="text-muted-foreground text-xs">{t.location}</div>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>);

}