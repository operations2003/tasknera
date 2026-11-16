'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { saveSubmission } from '@/lib/storage/inquiries';
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  AlertCircle,
  Building2,
  Send,
  Loader2,
} from 'lucide-react';

interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  country: string;
  phoneNumber: string;
  serviceRequired: string;
  companySize: string;
  expectedStartDate: string;
  businessRequirement: string;
  additionalInfo: string;
}

const serviceOptions = [
  'HR & People Operations',
  'Talent Acquisition & Recruitment',
  'Workforce Solutions',
  'Virtual Assistant & Business Support',
  'Virtual Customer Support',
  'Technology & Software Development',
  'HireIQ ATS Platform',
  'TaskNera HRMS',
  'Other',
];

const companySizeOptions = [
  '1 - 10 employees (Startup / Early Stage)',
  '11 - 50 employees (Growing SME)',
  '51 - 200 employees (Mid-Market)',
  '200+ employees (Enterprise)',
];

const startDateOptions = [
  'Immediately (Within 7 days)',
  'Next 2 - 4 weeks',
  'Next 1 - 3 months',
  'Exploring for future planning',
];

const contactDesks = [
  {
    title: 'Business Inquiries & Scoping',
    email: 'operations@tasknera.com',
    desc: 'For consultations, service scoping, SOW structuring and client onboarding.',
    sla: 'Response within 24 hours',
  },
  {
    title: 'Careers & Talent Support',
    email: 'careers@tasknera.com',
    desc: 'For job applicants, candidate inquiries and zero-fee talent verification.',
    sla: 'Candidate support desk',
  },
  {
    title: 'Executive Office & Founder',
    email: 'sheetalbedi@tasknera.com',
    desc: 'Direct executive oversight from Sheetal Bedi, Founder & CEO.',
    sla: 'Executive leadership',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    country: '',
    phoneNumber: '',
    serviceRequired: 'HR & People Operations',
    companySize: '11 - 50 employees (Growing SME)',
    expectedStartDate: 'Immediately (Within 7 days)',
    businessRequirement: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid work email address';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(formData.phoneNumber)) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.businessRequirement.trim()) {
      errs.businessRequirement = 'Please describe your requirement or hiring goal';
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionId = `inq-${Date.now()}`;
      let score = 75;
      if (formData.companySize.includes('51') || formData.companySize.includes('200')) score += 15;
      if (formData.expectedStartDate.includes('Immediately')) score += 10;
      if (score > 98) score = 98;

      saveSubmission({
        id: submissionId,
        name: formData.fullName.trim(),
        email: formData.workEmail.trim(),
        company: formData.companyName.trim(),
        country: formData.country.trim(),
        phone: formData.phoneNumber.trim(),
        enquiry_type: formData.serviceRequired,
        company_size: formData.companySize,
        expected_start_date: formData.expectedStartDate,
        message: formData.businessRequirement.trim(),
        project_details: formData.additionalInfo.trim() || null,
        submitted_at: new Date().toISOString(),
        status: 'new',
        qualification_score: score,
        assigned_to: null,
        synced_with_cloud: true,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF7F2]">
        {/* Contact Hero */}
        <section className="relative overflow-hidden bg-brand-navy text-white py-20 lg:py-24">
          <div
            className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Get in touch
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight">
              Book a consultation or business enquiry.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Whether you need to hire specialists, outsource HR compliance, deploy virtual support or evaluate our software platforms, our team responds within one business day.
            </p>
          </div>
        </section>

        {/* Main Form & Office Details Grid */}
        <section id="contact-form" className="py-20 lg:py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Column: Form */}
              <div className="lg:col-span-7 bg-white border border-brand-navy/10 rounded-2xl p-7 sm:p-10 shadow-sm">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#101D35]">
                      Thank You! Your Inquiry Has Been Received.
                    </h3>
                    <p className="text-sm text-[#334155] max-w-md mx-auto leading-relaxed">
                      Our business operations team will review your requirements and reach out to <strong>{formData.workEmail}</strong> within 24 hours with next steps and a calendar invite.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            workEmail: '',
                            companyName: '',
                            country: '',
                            phoneNumber: '',
                            serviceRequired: 'HR & People Operations',
                            companySize: '11 - 50 employees (Growing SME)',
                            expectedStartDate: 'Immediately (Within 7 days)',
                            businessRequirement: '',
                            additionalInfo: '',
                          });
                        }}
                        className="bg-[#101D35] hover:bg-[#1E3A5F] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-[#101D35]">
                        Schedule a Strategy Discussion
                      </h3>
                      <p className="text-xs text-[#64748B] mt-1">
                        Fill out the details below so we can prepare a tailored discussion.
                      </p>
                    </div>

                    {/* Row 1: Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 ${
                            errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-[#E5EBF3] focus:ring-[#3478F6]'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          value={formData.workEmail}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 ${
                            errors.workEmail ? 'border-red-400 focus:ring-red-400' : 'border-[#E5EBF3] focus:ring-[#3478F6]'
                          }`}
                        />
                        {errors.workEmail && <p className="text-xs text-red-500 mt-1">{errors.workEmail}</p>}
                      </div>
                    </div>

                    {/* Row 2: Company Name & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Acme Technologies Inc."
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 ${
                            errors.companyName ? 'border-red-400 focus:ring-red-400' : 'border-[#E5EBF3] focus:ring-[#3478F6]'
                          }`}
                        />
                        {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="United States, India, UK..."
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 ${
                            errors.country ? 'border-red-400 focus:ring-red-400' : 'border-[#E5EBF3] focus:ring-[#3478F6]'
                          }`}
                        />
                        {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
                      </div>
                    </div>

                    {/* Row 3: Phone Number & Service Required */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 ${
                            errors.phoneNumber ? 'border-red-400 focus:ring-red-400' : 'border-[#E5EBF3] focus:ring-[#3478F6]'
                          }`}
                        />
                        {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                          Service Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#E5EBF3] rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Company Size & Expected Start Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                          Company Size
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#E5EBF3] rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                        >
                          {companySizeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                          Expected Start Date
                        </label>
                        <select
                          name="expectedStartDate"
                          value={formData.expectedStartDate}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#E5EBF3] rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                        >
                          {startDateOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Business Requirement Description */}
                    <div>
                      <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                        Business Requirement / Hiring Need <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="businessRequirement"
                        rows={3}
                        value={formData.businessRequirement}
                        onChange={handleChange}
                        placeholder="Please tell us about the roles you are hiring for, the operational support you need, or specific challenges..."
                        className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 ${
                          errors.businessRequirement ? 'border-red-400 focus:ring-red-400' : 'border-[#E5EBF3] focus:ring-[#3478F6]'
                        }`}
                      />
                      {errors.businessRequirement && (
                        <p className="text-xs text-red-500 mt-1">{errors.businessRequirement}</p>
                      )}
                    </div>

                    {/* Row 6: Additional Information */}
                    <div>
                      <label className="block text-xs font-bold text-[#101D35] mb-1.5">
                        Additional Details (Optional)
                      </label>
                      <textarea
                        name="additionalInfo"
                        rows={2}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Timezone preferences, budget considerations, or specific questions..."
                        className="w-full bg-white border border-[#E5EBF3] rounded-xl px-4 py-2.5 text-sm text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#3478F6] hover:bg-[#2563EB] text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md shadow-[#3478F6]/25 flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processing Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Business Inquiry</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center">
                      We treat all information confidentially under standard mutual NDA policies. No candidate fees policy guaranteed.
                    </p>
                  </form>
                )}
              </div>

              {/* Right Column: Desks & Corporate Address */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#101D35] mb-2">
                    Direct Contact Desks
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Connect directly with the specialized department for your need.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactDesks.map((desk, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F3F6FA] border border-[#E5EBF3] p-5 rounded-2xl hover:border-[#3478F6]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-[#101D35]">{desk.title}</h4>
                        <span className="text-[10px] text-[#3478F6] font-semibold bg-[#3478F6]/10 px-2 py-0.5 rounded">
                          {desk.sla}
                        </span>
                      </div>
                      <a
                        href={`mailto:${desk.email}`}
                        className="text-xs font-semibold text-[#3478F6] hover:text-[#2563EB] block mb-1"
                      >
                        {desk.email}
                      </a>
                      <p className="text-xs text-[#64748B] leading-relaxed">{desk.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Corporate Address Box */}
                <div className="bg-[#101D35] text-white p-6 rounded-3xl border border-[#1E3A5F] shadow-lg space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#60A5FA] uppercase tracking-wider">
                    <Building2 className="w-4 h-4" />
                    <span>Registered Corporate Address</span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    TaskNera Global Operations
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    D-57 F1 Dilshad Colony, Dilshad Garden, Delhi - 110095, East Delhi, India.
                  </p>
                  <div className="pt-2 border-t border-[#1E3A5F] text-[11px] text-slate-400">
                    Corporate entity registered in India &bull; GST Compliant
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
