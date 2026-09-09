'use client';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const faqs = [
  {
    q: 'How quickly can TaskNera start hiring for us?',
    a: 'We can typically begin sourcing within 24-48 hours of an onboarding call. Our structured process ensures first shortlists within 5-7 business days for most roles.',
  },
  {
    q: 'Do you work with startups at early stages?',
    a: 'Absolutely. We have dedicated engagement models for startups — from success-fee hiring for first hires to full RPO as you scale. No minimum team size required.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We serve 12+ industries including IT/SaaS, Healthcare, BFSI, Manufacturing, Logistics, and more. Our recruiters have domain expertise, not just sourcing skills.',
  },
  {
    q: 'Can you handle international hiring?',
    a: 'Yes — we have active sourcing capabilities across India, US, UK, Europe, and remote-global talent pools. One team, global reach.',
  },
  {
    q: 'What is included in your HR & Payroll outsourcing?',
    a: 'Payroll processing, statutory compliance (PF, ESIC, PT, TDS), onboarding/offboarding, attendance management, and HRMS implementation fully managed.',
  },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  enquiry: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
}

const initialForm: FormData = { name: '', email: '', company: '', enquiry: 'hiring', message: '' };
const initialErrors: FormErrors = {};

export default function CTASection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; company?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validateField(name: string, value: string): string | undefined {
    if (name === 'name') {
      if (!value.trim()) return 'Full name is required.';
      if (value.trim().length < 2) return 'Name must be at least 2 characters.';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Work email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.';
    }
    if (name === 'company') {
      if (value.trim().length > 0 && value.trim().length < 2) return 'Company name must be at least 2 characters.';
    }
    return undefined;
  }

  function validateAll(): FormErrors {
    return {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      company: validateField('company', form.company),
    };
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allErrors = validateAll();
    setErrors(allErrors);
    setTouched({ name: true, email: true, company: true });
    if (allErrors.name || allErrors.email || allErrors.company) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from('inquiry_submissions').insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        enquiry_type: form.enquiry,
        message: form.message,
      });
      if (error) throw error;

      // Send email notification (fire-and-forget — don't block success state)
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-inquiry-email`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              company: form.company || null,
              enquiry_type: form.enquiry,
              message: form.message,
            }),
          }
        );
      } catch (emailErr) {
        console.error('Email notification error:', emailErr);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left */}
            <div className="lg:col-span-4 scroll-reveal">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">FAQ</span>
              </div>
              <h2 className="text-section-title font-display font-700 text-foreground mb-4">
                Questions?{' '}
                <span className="gradient-text-teal">We have answers.</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Can't find what you're looking for? Reach out directly
              </p>
              <a
                href="mailto:operations@tasknera.com"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline underline-offset-4"
              >
                operations@tasknera.com
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right — Accordion */}
            <div className="lg:col-span-8 space-y-2 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              {faqs?.map((faq, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    suppressHydrationWarning
                  >
                    <span className="font-semibold text-foreground text-sm pr-4">{faq?.q}</span>
                    <span
                      className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''
                        }`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed border-t border-border pt-3">
                      {faq?.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Section */}
      <section id="contact" className="py-20 sm:py-28 bg-primary overflow-hidden relative">
        {/* Atmospheric blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 blob-teal animate-pulse-slow pointer-events-none"
          style={{ transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 blob-coral animate-float-delayed pointer-events-none"
          style={{ transform: 'translate(-30%, 30%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start scroll-reveal">
              {/* Left — Headline */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Let's Build Together</span>
                </div>
                <h2 className="text-section-title font-display font-700 text-white mb-5">
                  Ready to build a team that{' '}
                  <span className="gradient-text-coral">scales with your ambitions?</span>
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  Whether you need one critical hire or a full HR transformation — TaskNera is your strategic partner from day one.
                </p>

                {/* Contact cards */}
                <div className="space-y-3">
                  {[
                    { icon: '✉️', label: 'Business Enquiries', value: 'operations@tasknera.com', href: 'mailto:operations@tasknera.com' },
                    { icon: '👔', label: 'Careers & Talent', value: 'hello@tasknera.com', href: 'mailto:hello@tasknera.com' },
                    { icon: '🌐', label: 'Website', value: 'www.tasknera.com', href: 'https://www.tasknera.com' },
                  ]?.map((c) => (
                    <a
                      key={c?.label}
                      href={c?.href}
                      className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group"
                    >
                      <div className="text-xl w-8 flex-shrink-0">{c?.icon}</div>
                      <div>
                        <div className="text-white/50 text-xs mb-0.5">{c?.label}</div>
                        <div className="text-white text-sm font-medium group-hover:text-accent transition-colors">{c?.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right — Contact Form */}
              <div className="glass-card rounded-3xl p-7 sm:p-8">
                <h3 className="text-white font-semibold text-lg mb-1">Send us a message</h3>
                <p className="text-white/50 text-sm mb-6">We'll get back to you within 1 business day.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5">Full Name <span className="text-accent">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jane Smith"
                        className={`w-full border rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none transition-colors ${errors.name && touched.name ? 'border-red-400/70 focus:border-red-400' : 'border-white/15 focus:border-accent/60 focus:bg-white/10'}`}
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                        suppressHydrationWarning
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5">Work Email <span className="text-accent">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@company.com"
                        className={`w-full border rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none transition-colors ${errors.email && touched.email ? 'border-red-400/70 focus:border-red-400' : 'border-white/15 focus:border-accent/60 focus:bg-white/10'}`}
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                        suppressHydrationWarning
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Acme Corp"
                      className={`w-full border rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none transition-colors ${errors.company && touched.company ? 'border-red-400/70 focus:border-red-400' : 'border-white/15 focus:border-accent/60 focus:bg-white/10'}`}
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                      suppressHydrationWarning
                    />
                    {errors.company && touched.company && (
                      <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        {errors.company}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5">Enquiry Type</label>
                    <select
                      name="enquiry"
                      value={form.enquiry}
                      onChange={handleChange}
                      className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent/60 transition-colors appearance-none"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                      suppressHydrationWarning
                    >
                      <option value="hiring" className="bg-primary text-white">Hiring / Recruitment</option>
                      <option value="hr-outsourcing" className="bg-primary text-white">HR & Payroll Outsourcing</option>
                      <option value="staffing" className="bg-primary text-white">Contract Staffing</option>
                      <option value="rpo" className="bg-primary text-white">RPO / Talent Partnership</option>
                      <option value="other" className="bg-primary text-white">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5">Message <span className="text-accent">*</span></label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your hiring needs or HR challenges..."
                      className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                      suppressHydrationWarning
                    />
                    {errors.message && touched.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-accent text-accent-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-xl shadow-accent/30 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                    suppressHydrationWarning
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* ── Success State ── */
            <div className="max-w-2xl mx-auto text-center scroll-reveal">
              {/* Animated checkmark */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0fb88a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full blob-teal animate-pulse-slow" />
              </div>

              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">Message Received</span>
              </div>

              <h2 className="text-section-title font-display font-700 text-white mb-4">
                Thank you,{' '}
                <span className="gradient-text-coral">{form.name.split(' ')[0] || 'there'}!</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Your enquiry has been submitted successfully. Our team will review your message and reach out shortly.
              </p>

              {/* Timeline cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
                {[
                  {
                    step: '01',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    ),
                    title: 'Within 4 hours',
                    desc: "You'll receive a confirmation email acknowledging your enquiry.",
                  },
                  {
                    step: '02',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                    title: '1 Business Day',
                    desc: 'A dedicated consultant will review your requirements and prepare a tailored response.',
                  },
                  {
                    step: '03',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    ),
                    title: '2\u20133 Business Days',
                    desc: "We'll schedule a discovery call to align on your goals and propose next steps.",
                  },
                ]?.map((item) => (
                  <div key={item.step} className="glass-card rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-white/30 text-xs font-mono font-semibold">STEP {item.step}</span>
                    </div>
                    <p className="text-accent font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Next steps note */}
              <div className="glass-card rounded-2xl px-6 py-4 mb-8 text-left flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium mb-0.5">While you wait</p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    For urgent requirements, email us directly at{' '}
                    <a href="mailto:operations@tasknera.com" className="text-accent hover:underline underline-offset-2">
                      operations@tasknera.com
                    </a>{' '}
                    or reach out via{' '}
                    <a href="https://www.tasknera.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">
                      www.tasknera.com
                    </a>.
                  </p>
                </div>
              </div>

              <button
                onClick={() => { setSubmitted(false); setForm(initialForm); }}
                className="inline-flex items-center gap-2 glass-btn text-white font-semibold px-7 py-3 rounded-full text-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Submit another enquiry
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}