'use client';
import React, { useState, useEffect } from 'react';
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
  FileText,
  RotateCcw,
  Edit3,
  X,
} from 'lucide-react';
import {
  saveFormDraft,
  getFormDraft,
  clearFormDraft,
  saveSubmission,
  getLastSubmission,
  clearLastSubmission,
  StoredSubmission,
} from '@/lib/storage/inquiries';

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
  const [submitting, setSubmitting] = useState(false);
  const [draftRestored, setDraftRestored] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string>('');

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    clearLastSubmission();
    clearFormDraft();
    setForm(initialForm);
    setErrors({});
    setTouched({});
    setDraftRestored(false);

    // Directly take to the top of the website
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard accessibility for modal dismissal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSuccessModal) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSuccessModal]);

  // Restore unsaved draft on load if user was in the middle of typing
  useEffect(() => {
    clearLastSubmission();
    const draft = getFormDraft();
    if (draft && (draft.name || draft.email || draft.company || draft.message)) {
      setForm(draft);
      setDraftRestored(true);
    }
  }, []);

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
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      saveFormDraft(next);
      return next;
    });
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  const handleClearDraft = () => {
    clearFormDraft();
    setForm(initialForm);
    setErrors({});
    setTouched({});
    setDraftRestored(false);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allErrors = validateAll();
    setErrors(allErrors);
    setTouched({ name: true, email: true, company: true });
    if (allErrors.name || allErrors.email || allErrors.company) return;
    setSubmitting(true);

    const submissionId = `sub-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
    const newSubmission: StoredSubmission = {
      id: submissionId,
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      phone: null,
      enquiry_type: form.enquiry,
      message: form.message.trim(),
      project_details: null,
      submitted_at: new Date().toISOString(),
      status: 'new',
      qualification_score: 80,
      synced_with_cloud: false,
    };

    // 1. Immediately save to persistent client storage for Admin & CRM
    saveSubmission(newSubmission);
    setSubmittedReference(submissionId);
    setShowSuccessModal(true);
    clearFormDraft();
    setDraftRestored(false);
    setForm(initialForm);
    setErrors({});
    setTouched({});

    // 2. Attempt cloud sync (Supabase)
    try {
      if (supabase) {
        const { error: insErr } = await supabase.from('inquiry_submissions').insert({
          name: form.name,
          email: form.email,
          company: form.company || null,
          enquiry_type: form.enquiry,
          message: form.message,
        });

        if (!insErr) {
          newSubmission.synced_with_cloud = true;
          saveSubmission(newSubmission);
        }

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
          }).catch((err) => console.log('Notification notice:', err));
        }
      }
    } catch (err) {
      console.warn('Supabase cloud sync deferred, safely stored locally:', err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-surface-subtle border-b border-border relative overflow-hidden">
        {/* Ambient background light pools */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5BDB4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-tn-beige/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Header */}
            <div className="lg:col-span-4 scroll-reveal">
              <div className="inline-flex items-center gap-2 bg-tn-coral/15 border border-tn-mist rounded-full px-4 py-1.5 mb-5 shadow-sm">
                <HelpCircle className="w-3.5 h-3.5 text-tn-coral" />
                <span className="text-xs font-bold text-tn-charcoal tracking-widest uppercase">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-section-title font-display font-bold text-tn-charcoal mb-4">
                Questions?{' '}
                <span className="text-tn-coral">We have answers.</span>
              </h2>
              <p className="text-tn-slate text-base leading-relaxed mb-6">
                Everything you need to know about our service models, speed-to-hire, SLAs, and operational governance.
              </p>
              <div className="p-4 bg-white border border-tn-mist rounded-2xl space-y-2 shadow-sm">
                <span className="text-xs font-bold text-tn-charcoal block">
                  Have a specific question?
                </span>
                <a
                  href="mailto:operations@tasknera.com"
                  className="inline-flex items-center gap-2 text-tn-coral font-bold text-sm hover:underline"
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
                    className="rounded-2xl overflow-hidden transition-all duration-200 bg-white border border-tn-mist shadow-sm"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-6 py-4 sm:py-5 text-left hover:bg-tn-ivory transition-colors"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-tn-charcoal text-base pr-4">
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'bg-tn-coral text-tn-charcoal rotate-180' : 'bg-tn-ivory text-tn-slate border border-tn-mist'
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
      <section id="contact" className="py-20 sm:py-28 bg-[#242326] overflow-hidden relative text-[#FFF8F0] border-t border-[#353338]">
        {/* Atmospheric ambient lighting */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F49A7D]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#DCC6B8]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-reveal">
              {/* Left — Headline & Inquiries */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F49A7D] animate-pulse" />
                  <span className="text-xs font-bold text-[#FFF8F0] tracking-widest uppercase">
                    Let's Build Together
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#FFF8F0] leading-[1.18] tracking-tight">
                  Tell Us What You Need.{' '}
                  <span className="text-[#F49A7D] block mt-1.5">
                    We'll Build the Right Support Model.
                  </span>
                </h2>

                <p className="text-[#E9E4DF]/80 text-base sm:text-lg leading-relaxed font-normal">
                  From talent acquisition and HR operations to workforce management, virtual assistance, and customer support, TaskNera provides flexible, SLA-backed solutions designed to scale your business with confidence.
                </p>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href="mailto:operations@tasknera.com"
                    className="bg-[#2B2A2E] hover:bg-[#343238] border border-[#3E3C42] hover:border-[#F49A7D]/40 rounded-2xl p-3.5 flex items-center gap-3.5 transition-all duration-200 group shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F49A7D]/20 border border-[#F49A7D]/30 flex items-center justify-center text-[#F49A7D] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[#DCC6B8] text-[10px] font-bold uppercase tracking-wider">Business Enquiries</div>
                      <div className="text-[#FFF8F0] text-xs font-semibold truncate group-hover:text-[#F49A7D] transition-colors">
                        operations@tasknera.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:careers@tasknera.com"
                    className="bg-[#2B2A2E] hover:bg-[#343238] border border-[#3E3C42] hover:border-[#F49A7D]/40 rounded-2xl p-3.5 flex items-center gap-3.5 transition-all duration-200 group shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F49A7D]/20 border border-[#F49A7D]/30 flex items-center justify-center text-[#F49A7D] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[#DCC6B8] text-[10px] font-bold uppercase tracking-wider">Careers &amp; Candidates</div>
                      <div className="text-[#FFF8F0] text-xs font-semibold truncate group-hover:text-[#F49A7D] transition-colors">
                        careers@tasknera.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:partners@tasknera.com"
                    className="sm:col-span-2 bg-[#2B2A2E] hover:bg-[#343238] border border-[#3E3C42] hover:border-[#F49A7D]/40 rounded-2xl p-3.5 flex items-center gap-3.5 transition-all duration-200 group shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F49A7D]/20 border border-[#F49A7D]/30 flex items-center justify-center text-[#F49A7D] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[#DCC6B8] text-[10px] font-bold uppercase tracking-wider">Partners &amp; Vendors</div>
                      <div className="text-[#FFF8F0] text-xs font-semibold truncate group-hover:text-[#F49A7D] transition-colors">
                        partners@tasknera.com
                      </div>
                    </div>
                  </a>
                </div>

                {/* Global Coverage & Assurance Strip */}
                <div className="bg-[#2B2A2E] border border-[#3E3C42] rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 text-[#FFF8F0]">
                    <Globe className="w-4 h-4 text-[#F49A7D] flex-shrink-0" />
                    <span className="font-medium text-xs">Global: India • US • UK • Europe • Remote</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[#F49A7D] font-semibold text-[11px] bg-white/10 px-2.5 py-1 rounded-full w-fit">
                    <Clock className="w-3.5 h-3.5" />
                    <span>24h SLA Intake</span>
                  </div>
                </div>
              </div>

              {/* Right — Contact Form Card */}
              <div className="lg:col-span-6 bg-[#1E1D20]/95 border border-[#3E3C42] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl relative overflow-hidden">
                {/* Subtle top card glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F49A7D]/60 to-transparent" />

                <h3 className="text-[#FFF8F0] font-display font-bold text-xl sm:text-2xl mb-1.5">
                  Talk to an HR &amp; Workforce Specialist
                </h3>
                <p className="text-[#DCC6B8] text-xs sm:text-sm mb-6 leading-relaxed">
                  Tell us about your team, workforce, or operations support needs. We respond within 1 business day.
                </p>

                {draftRestored && (
                  <div className="flex items-center justify-between bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 mb-4 text-xs text-[#FFF8F0]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F49A7D] animate-pulse" />
                      <span>Restored your saved inquiry draft from this session.</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleClearDraft}
                      className="text-[#DCC6B8] hover:text-[#FFF8F0] underline text-xs font-semibold ml-3"
                    >
                      Clear draft
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#FFF8F0]/90 text-xs font-semibold mb-1.5">
                        Full Name <span className="text-[#F49A7D]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jane Smith"
                        className={`w-full rounded-xl px-3.5 py-2.5 text-[#FFF8F0] text-sm placeholder-[#DCC6B8]/40 focus:outline-none transition-all ${
                          errors.name && touched.name
                            ? 'border border-red-400 bg-red-500/10'
                            : 'border border-[#3E3C42] bg-[#2B2A2E] hover:bg-[#343238] focus:border-[#F49A7D] focus:ring-2 focus:ring-[#F49A7D]/20 focus:bg-[#2B2A2E]'
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1 text-red-300 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[#FFF8F0]/90 text-xs font-semibold mb-1.5">
                        Work Email <span className="text-[#F49A7D]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@company.com"
                        className={`w-full rounded-xl px-3.5 py-2.5 text-[#FFF8F0] text-sm placeholder-[#DCC6B8]/40 focus:outline-none transition-all ${
                          errors.email && touched.email
                            ? 'border border-red-400 bg-red-500/10'
                            : 'border border-[#3E3C42] bg-[#2B2A2E] hover:bg-[#343238] focus:border-[#F49A7D] focus:ring-2 focus:ring-[#F49A7D]/20 focus:bg-[#2B2A2E]'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1 text-red-300 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#FFF8F0]/90 text-xs font-semibold mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Acme Corporation"
                      className="w-full rounded-xl px-3.5 py-2.5 text-[#FFF8F0] text-sm placeholder-[#DCC6B8]/40 border border-[#3E3C42] bg-[#2B2A2E] hover:bg-[#343238] focus:border-[#F49A7D] focus:ring-2 focus:ring-[#F49A7D]/20 focus:bg-[#2B2A2E] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[#FFF8F0]/90 text-xs font-semibold mb-1.5">
                      Enquiry Focus Area
                    </label>
                    <select
                      name="enquiry"
                      value={form.enquiry}
                      onChange={handleChange}
                      className="w-full rounded-xl px-3.5 py-2.5 text-[#FFF8F0] text-sm border border-[#3E3C42] bg-[#2B2A2E] focus:border-[#F49A7D] focus:ring-2 focus:ring-[#F49A7D]/20 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="hr-ops" className="bg-[#242326] text-[#FFF8F0]">HR &amp; People Operations</option>
                      <option value="recruitment" className="bg-[#242326] text-[#FFF8F0]">Talent Acquisition &amp; Recruitment</option>
                      <option value="workforce" className="bg-[#242326] text-[#FFF8F0]">Contract Staffing &amp; Workforce Solutions</option>
                      <option value="va" className="bg-[#242326] text-[#FFF8F0]">Virtual Assistant Services (Human)</option>
                      <option value="vcs" className="bg-[#242326] text-[#FFF8F0]">Virtual Customer Support (VCS)</option>
                      <option value="tech" className="bg-[#242326] text-[#FFF8F0]">JD Match Evaluator &amp; HR Technology</option>
                      <option value="other" className="bg-[#242326] text-[#FFF8F0]">Comprehensive / Other Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#FFF8F0]/90 text-xs font-semibold mb-1.5">
                      Project or Role Requirements <span className="text-[#F49A7D]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about the roles, team size, timeline, or operational functions you want to support..."
                      className="w-full rounded-xl px-3.5 py-2.5 text-[#FFF8F0] text-sm placeholder-[#DCC6B8]/40 border border-[#3E3C42] bg-[#2B2A2E] hover:bg-[#343238] focus:border-[#F49A7D] focus:ring-2 focus:ring-[#F49A7D]/20 focus:bg-[#2B2A2E] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#F49A7D] text-[#242326] font-bold py-3.5 rounded-xl hover:bg-[#E28567] active:scale-[0.99] transition-all shadow-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 group"
                  >
                    {submitting ? (
                      <span>Saving &amp; Submitting inquiry…</span>
                    ) : (
                      <>
                        <span>Submit Inquiry to Expert Team</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#DCC6B8] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F49A7D]" />
                    <span>Strict NDA &amp; confidentiality guaranteed. Zero spam.</span>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </section>

      {/* ── Success Pop-up / Modal ── */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
          onClick={() => setShowSuccessModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-headline"
        >
          <div
            className="relative w-full max-w-lg bg-[#242326] border border-[#3E3C42] rounded-3xl p-7 sm:p-9 shadow-2xl shadow-black/60 text-center transform transition-all backdrop-blur-xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Right Close 'X' Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Checkmark Icon Circle */}
            <div className="w-16 h-16 rounded-2xl bg-[#F49A7D]/20 border border-[#F49A7D]/40 flex items-center justify-center mx-auto mb-5 text-[#F49A7D] shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            {/* Title */}
            <h3
              id="success-modal-headline"
              className="text-2xl sm:text-3xl font-display font-bold text-[#FFF8F0] mb-3 tracking-tight"
            >
              Thank you for submitting the form!
            </h3>

            {/* Body Message */}
            <p className="text-[#E9E4DF]/80 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
              We’ve received your query successfully. Our team will review your request and get back to you once we have an update.
            </p>

            {/* Reference Badge */}
            {submittedReference && (
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-7 text-xs text-[#E9E4DF]/80">
                <span className="text-[#DCC6B8]">Inquiry Reference:</span>
                <span className="font-mono font-bold text-[#F49A7D]">
                  #TN-{submittedReference.slice(-6).toUpperCase()}
                </span>
              </div>
            )}

            {/* Clear "Close" Button */}
            <div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full bg-[#F49A7D] text-[#242326] font-bold py-3.5 px-6 rounded-xl hover:bg-[#E28567] active:scale-98 transition-all shadow-xl text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}