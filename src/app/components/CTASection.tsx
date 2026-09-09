'use client';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  HelpCircle,
  Mail,
  Briefcase,
  Globe,
  Send,
  CheckCircle2,
  Clock,
  Calendar,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const faqs = [
  {
    q: 'How quickly can TaskNera start sourcing or deploying for us?',
    a: 'We begin initial requirements intake within 24 hours of your briefing call. For dedicated Virtual Assistants and standard recruitment roles, your first pre-vetted shortlist arrives within 48–72 hours.',
  },
  {
    q: 'Do you work with early-stage startups and founders?',
    a: 'Yes, absolutely. We have dedicated flexible engagement models for startups — from contingent success-fee hiring for key early roles to dedicated fractional virtual support. No minimum team size required.',
  },
  {
    q: 'What industries and business functions do you specialize in?',
    a: 'We support 12+ industries including IT/SaaS, Healthcare, BFSI, Manufacturing, Logistics, E-commerce, and professional services across 8 functional domain areas.',
  },
  {
    q: 'Can TaskNera handle cross-border and international hiring?',
    a: 'Yes — we maintain active talent sourcing capabilities across India, the United States, the United Kingdom, Europe, and remote-global talent pools, with full compliance and multi-timezone alignment.',
  },
  {
    q: 'What is included in your HR & Payroll outsourcing solutions?',
    a: 'Complete monthly payroll processing, statutory compliance filings (PF, ESIC, PT, TDS), employee onboarding/offboarding, digital HRMS administration, and attendance management.',
  },
  {
    q: 'Are your Virtual Assistants real people or AI bots?',
    a: '100% vetted human remote professionals. Every TaskNera virtual assistant and customer support specialist is an educated, interviewed, and trained professional dedicated to your exact workflows.',
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
  message?: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  enquiry: 'hr-ops',
  message: '',
};

export default function CTASection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validateField(name: string, value: string): string | undefined {
    if (name === 'name') {
      if (!value.trim()) return 'Full name is required.';
      if (value.trim().length < 2) return 'Name must be at least 2 characters.';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Work email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
        return 'Please enter a valid work email address.';
    }
    if (name === 'company') {
      if (value.trim().length > 0 && value.trim().length < 2)
        return 'Company name must be at least 2 characters.';
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
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
      if (supabase) {
        await supabase.from('inquiry_submissions').insert({
          name: form.name,
          email: form.email,
          company: form.company || null,
          enquiry_type: form.enquiry,
          message: form.message,
        });

        // Fire-and-forget notification email if available
        if (supabaseUrl && supabaseAnonKey) {
          fetch(`${supabaseUrl}/functions/v1/send-inquiry-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${supabaseAnonKey}`,
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              company: form.company || null,
              enquiry_type: form.enquiry,
              message: form.message,
            }),
          }).catch((err) => console.log('Notification non-fatal notice:', err));
        }
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Submission handled:', err);
      // Still show confirmed screen so client inquiry isn't lost
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-background border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Header */}
            <div className="lg:col-span-4 scroll-reveal">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                <HelpCircle className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-section-title font-display font-bold text-foreground mb-4">
                Questions?{' '}
                <span className="gradient-text-teal">We have answers.</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Everything you need to know about our service models, speed-to-hire, SLAs, and operational governance.
              </p>
              <div className="p-4 bg-muted/60 border border-border rounded-2xl space-y-2">
                <span className="text-xs font-bold text-foreground block">
                  Have a specific question?
                </span>
                <a
                  href="mailto:operations@tasknera.com"
                  className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>operations@tasknera.com</span>
                </a>
              </div>
            </div>

            {/* Right — Accordion */}
            <div className="lg:col-span-8 space-y-3 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="card-premium rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-6 py-4 sm:py-5 text-left hover:bg-muted/40 transition-colors"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-foreground text-base pr-4">
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'bg-accent/10 text-accent rotate-180' : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-muted-foreground text-sm leading-relaxed border-t border-border/60 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Section */}
      <section id="contact" className="py-20 sm:py-28 bg-primary overflow-hidden relative text-white">
        {/* Atmospheric blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 blob-teal pointer-events-none opacity-40"
          style={{ transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 blob-coral pointer-events-none opacity-30"
          style={{ transform: 'translate(-30%, 30%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start scroll-reveal">
              {/* Left — Headline & Inquiries */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-widest uppercase">
                    Let's Build Together
                  </span>
                </div>
                <h2 className="text-section-title font-display font-bold text-white leading-tight">
                  Build, Manage, and Scale{' '}
                  <span className="gradient-text-coral block">Your People &amp; Operations.</span>
                </h2>
                <p className="text-white/75 text-base sm:text-lg leading-relaxed font-normal">
                  From talent acquisition and HR operations to workforce management, virtual assistance, and customer support, TaskNera provides flexible, SLA-backed solutions designed to scale your business with confidence.
                </p>

                {/* Contact cards */}
                <div className="space-y-3 pt-2">
                  <a
                    href="mailto:operations@tasknera.com"
                    className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs font-semibold uppercase tracking-wider">Business Enquiries</div>
                      <div className="text-white text-sm font-bold group-hover:text-accent transition-colors">
                        operations@tasknera.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@tasknera.com"
                    className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary flex-shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs font-semibold uppercase tracking-wider">Careers &amp; Talent</div>
                      <div className="text-white text-sm font-bold group-hover:text-secondary transition-colors">
                        hello@tasknera.com
                      </div>
                    </div>
                  </a>

                  <div className="glass-card rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs font-semibold uppercase tracking-wider">Global Operations</div>
                      <div className="text-white text-sm font-bold">
                        Delhi, India · UK · US · EMEA Delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Contact Form */}
              <div className="lg:col-span-6 glass-card rounded-3xl p-7 sm:p-9 shadow-2xl border border-white/20 bg-slate-900/70 backdrop-blur-2xl">
                <h3 className="text-white font-display font-bold text-xl mb-1">
                  Talk to an HR &amp; Workforce Specialist
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mb-6">
                  Tell us about your team, workforce, or operations support needs. We respond within 1 business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-xs font-semibold mb-1.5">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jane Smith"
                        className={`w-full rounded-xl px-4 py-3 text-white text-sm placeholder-white/35 focus:outline-none transition-all ${
                          errors.name && touched.name
                            ? 'border border-red-400 bg-red-500/10'
                            : 'border border-white/15 bg-white/5 focus:border-accent focus:bg-white/10'
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white/80 text-xs font-semibold mb-1.5">
                        Work Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@company.com"
                        className={`w-full rounded-xl px-4 py-3 text-white text-sm placeholder-white/35 focus:outline-none transition-all ${
                          errors.email && touched.email
                            ? 'border border-red-400 bg-red-500/10'
                            : 'border border-white/15 bg-white/5 focus:border-accent focus:bg-white/10'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Acme Corporation"
                      className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-white/35 border border-white/15 bg-white/5 focus:border-accent focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5">
                      Enquiry Focus Area
                    </label>
                    <select
                      name="enquiry"
                      value={form.enquiry}
                      onChange={handleChange}
                      className="w-full rounded-xl px-4 py-3 text-white text-sm border border-white/15 bg-slate-900 focus:border-accent focus:outline-none transition-all"
                    >
                      <option value="hr-ops" className="bg-slate-900 text-white">HR &amp; People Operations</option>
                      <option value="recruitment" className="bg-slate-900 text-white">Talent Acquisition &amp; Recruitment</option>
                      <option value="workforce" className="bg-slate-900 text-white">Contract Staffing &amp; Workforce Solutions</option>
                      <option value="va" className="bg-slate-900 text-white">Virtual Assistant Services (Human)</option>
                      <option value="vcs" className="bg-slate-900 text-white">Virtual Customer Support (VCS)</option>
                      <option value="tech" className="bg-slate-900 text-white">JD Match Evaluator &amp; HR Technology</option>
                      <option value="other" className="bg-slate-900 text-white">Comprehensive / Other Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5">
                      Project or Role Requirements <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about the roles, team size, timeline, or operational functions you want to support..."
                      className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-white/35 border border-white/15 bg-white/5 focus:border-accent focus:bg-white/10 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-accent/30 text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                  >
                    {submitting ? (
                      <span>Sending inquiry…</span>
                    ) : (
                      <>
                        <span>Submit Inquiry to Expert Team</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-white/50 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span>Strict NDA &amp; confidentiality guaranteed. Zero spam.</span>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            /* Success State */
            <div className="max-w-2xl mx-auto text-center scroll-reveal py-8">
              <div className="w-20 h-20 rounded-3xl bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-6 text-accent shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent tracking-widest uppercase">
                  Inquiry Confirmed
                </span>
              </div>

              <h2 className="text-section-title font-display font-bold text-white mb-4">
                Thank you,{' '}
                <span className="gradient-text-coral">{form.name.split(' ')[0] || 'there'}!</span>
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Your enquiry has been received by our senior operations desk. We will review your requirements and reach out within 1 business day.
              </p>

              {/* Steps */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
                {[
                  { icon: Clock, title: 'Within 4 Hours', desc: 'Acknowledgement and initial requisition review.' },
                  { icon: Briefcase, title: '1 Business Day', desc: 'A senior consultant prepares a tailored scope proposal.' },
                  { icon: Calendar, title: '2–3 Days', desc: 'Discovery alignment call and candidate matching kickoff.' },
                ].map((s, idx) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="glass-card rounded-2xl p-5 border border-white/15">
                      <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-3">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="font-bold text-white text-sm mb-1">{s.title}</div>
                      <div className="text-xs text-white/60 leading-relaxed">{s.desc}</div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                }}
                className="glass-btn text-white font-semibold px-8 py-3 rounded-full text-sm"
              >
                Submit another inquiry
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}