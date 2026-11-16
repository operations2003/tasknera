'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { saveStoredApplication } from '@/lib/storage/inquiries';
import {
  Briefcase,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Building2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  DollarSign,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  Award,
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  category: 'talent' | 'hr' | 'va' | 'support' | 'operations' | 'engineering' | 'sales' | 'software-sales';
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  secondarySkills?: string[];
  quickScreening?: string;
  email?: string;
  company?: string;
  client?: string;
  jobCode?: string;
  budget?: string;
  shift?: string;
  workMode?: string;
  vendorPayout?: string;
  compensationDetails?: string[];
  whyWorkWithUs?: string[];
  howToApplyDetails?: string[];
  applySubject?: string;
  applyBody?: string;
}

import { getRecruiterEmail } from '@/lib/recruiter';

const openPositions: JobPosition[] = [
  {
    id: 'oracle-grc-fusion-security-consultant-trx-26139',
    jobCode: 'TRX-26139',
    title: 'Oracle GRC + Fusion Security Consultant',
    company: 'Deltacubes',
    department: 'Enterprise Security & Oracle Cloud Solutions',
    category: 'engineering',
    location: 'PAN India',
    type: 'Full-Time (FTE)',
    experience: '7+ Years',
    budget: 'Up to ₹14.5 LPA',
    summary:
      'We are looking for an experienced Oracle GRC + Fusion Security Consultant to lead functional and technical support operations. The role involves governance, risk management, Segregation of Duties (SoD) monitoring, compliance adherence, access governance, and continuous improvement of Oracle GRC processes in Oracle Fusion Cloud environments.',
    responsibilities: [
      'Manage Oracle GRC and Oracle Fusion Security support operations.',
      'Handle risk assessment, SoD monitoring, access certification, and compliance activities.',
      'Support Oracle Risk Management Cloud modules, including Advanced Access Controls (AAC), Transaction Controls Governor (TCG), and Preventive Controls Advisor (PCA).',
      'Manage role-based access control (RBAC), user provisioning, duty roles, and job roles.',
      'Support security across Oracle Fusion Financials, Procurement, SCM, and HCM.',
      'Coordinate audit activities, risk remediation, and compliance monitoring.',
      'Work with internal and external auditors on SOX, ITGC, and access governance requirements.',
      'Manage AMS and managed services support engagements.',
      'Drive stakeholder coordination, client communication, and continuous process improvement.',
    ],
    requirements: [
      'Strong hands-on experience in Oracle Risk Management Cloud / Oracle GRC.',
      'Strong expertise in Oracle Fusion ERP Security.',
      'Experience with Segregation of Duties (SoD), access certification, and enterprise access governance.',
      'Knowledge of RBAC, user provisioning, duty roles, and job roles.',
      'Understanding of GRC processes, internal controls, SOX compliance, ITGC, audit management, and risk remediation.',
      'Experience supporting Oracle Fusion Cloud environments.',
      'Minimum 5 years of Oracle GRC implementation or support experience.',
      'Experience in AMS / managed services support models and managing support engagements.',
      'Experience working with internal and external auditors.',
    ],
    secondarySkills: [
      'Oracle Risk Management Cloud / Oracle GRC',
      'Oracle Fusion Security',
      'Segregation of Duties (SoD)',
      'Access Certification & Governance',
      'SOX Compliance & Audit Support',
      'CISA / CRISC / CISSP certifications',
      'Oracle ERP Financials knowledge',
      'ITIL and Service Management',
      'Security Automation & Controls Monitoring',
      'Project & Stakeholder Management',
      'Preferred Certifications: Oracle Risk Management Cloud, Oracle Fusion Security, CISA/CRISC/CISSP, CPA/CA, ITIL Foundation',
    ],
    quickScreening:
      'Oracle GRC | Oracle Risk Management Cloud | Oracle Fusion Security | Segregation of Duties (SoD) | Access Certification & Governance | RBAC | SOX Compliance | ITGC | AMS Support | 7+ Years Exp',
    compensationDetails: [
      'Annual CTC: Up to ₹14.5 LPA (commensurate with skills and experience)',
      'Employment Type: Full-Time (FTE)',
    ],
    whyWorkWithUs: [
      'Lead critical Oracle Risk Management Cloud & Fusion Security support for enterprise clients.',
      'Collaborate with international audit and compliance teams on high-impact governance initiatives.',
      'Transparent work culture with opportunities for rapid technical leadership advancement.',
    ],
    howToApplyDetails: [
      'Total years of experience & relevant Oracle GRC / Fusion Security experience',
      'Current CTC and Expected CTC',
      'Official Notice Period / Last Working Day (LWD)',
      'Current Location and Contact Number',
    ],
    email: 'rashmikotekar@tasknera.com',
    applySubject: 'Application for Oracle GRC + Fusion Security Consultant [TRX-26139] [TaskNera Careers]',
    applyBody: `Hi Recruitment Team,\r\n\r\nI am applying for the Oracle GRC + Fusion Security Consultant position (Job Code: TRX-26139).\r\n\r\nHere are my professional details:\r\n1. Total Experience: \r\n2. Relevant Oracle GRC / Risk Management Cloud Experience: \r\n3. Relevant Oracle Fusion Security Experience: \r\n4. Current CTC: \r\n5. Expected CTC: \r\n6. Notice Period: \r\n7. Current Location: \r\n8. Contact Number: \r\n\r\nPlease find my updated resume attached.\r\n\r\nBest regards,`,
  },
  {
    id: 'rpa-developer-kofax-trx-26138',
    jobCode: 'TRX-26138',
    title: 'RPA Developer (Kofax)',
    company: 'Deltacubes',
    department: 'Robotic Process Automation & AI',
    category: 'engineering',
    location: 'PAN India',
    type: 'Full-Time (FTE)',
    experience: '3–5 Years (Minimum 3+ Years)',
    budget: 'Up to ₹12 LPA',
    shift: '5:30 PM – 2:30 AM IST (US Shift)',
    summary:
      'We are seeking an experienced RPA Developer with strong hands-on expertise in Kofax, particularly Kofax Kapow, along with mid-level SQL proficiency. The candidate will be responsible for developing, maintaining, and optimizing RPA solutions to automate business processes and improve operational efficiency.',
    responsibilities: [
      'Develop and maintain Kofax RPA solutions to automate business processes.',
      'Design, configure, and optimize automation workflows using Kofax Kapow.',
      'Collaborate with business analysts and stakeholders to understand automation requirements.',
      'Develop and maintain SQL queries and scripts for database interactions.',
      'Troubleshoot and resolve issues related to automation processes.',
      'Monitor RPA bot performance and implement necessary improvements.',
      'Integrate RPA solutions with other applications and systems.',
      'Ensure compliance with security and data protection standards.',
      'Provide technical support and training to end users.',
      'Work with cross-functional teams to enhance RPA capabilities.',
    ],
    requirements: [
      "Bachelor's degree in Computer Science or a related field.",
      'Minimum 3 years of experience in RPA development, with a strong focus on Kofax.',
      'Proficiency in Kofax Kapow and its components.',
      'Mid-level proficiency in SQL for database interactions.',
      'Strong analytical, troubleshooting, and problem-solving skills.',
      'Good communication and teamwork abilities.',
      'Ability to work in a fast-paced environment and meet deadlines.',
      'Willingness to work in US shift timings (5:30 PM – 2:30 AM IST).',
    ],
    secondarySkills: [
      'Kofax RPA / Kofax Kapow',
      'SQL Querying & Database Scripting',
      'Knowledge of UiPath',
      'RPA Bot Monitoring & Performance Optimization',
      'Process Automation & Systems Integration',
      'US Shift Alignment (5:30 PM – 2:30 AM IST)',
    ],
    quickScreening:
      'RPA Developer | Kofax RPA | Kofax Kapow | SQL | Bot Performance | Process Automation | US Shift (5:30 PM - 2:30 AM IST) | 3-5 Years Exp | PAN India',
    compensationDetails: [
      'Annual CTC: Up to ₹12 LPA (commensurate with skills and experience)',
      'Working Hours: 5:30 PM – 2:30 AM IST (US Shift)',
      'Shift Benefits: Cab facility and shift allowance as per organizational policy.',
    ],
    whyWorkWithUs: [
      'Hands-on experience developing and scaling complex RPA solutions across enterprise systems.',
      'Comprehensive shift benefits including cab facilities and shift allowances.',
      'Collaborative, growth-oriented engineering culture with modern automation toolsets.',
    ],
    howToApplyDetails: [
      'Total years of RPA experience and dedicated Kofax / Kofax Kapow experience',
      'Proficiency with SQL and database interactions',
      'Comfort with US Shift timings (5:30 PM – 2:30 AM IST)',
      'Current CTC and Expected CTC',
      'Official Notice Period / Last Working Day (LWD)',
      'Current Location and Contact Number',
    ],
    email: 'rashmikotekar@tasknera.com',
    applySubject: 'Application for RPA Developer (Kofax) [TRX-26138] [TaskNera Careers]',
    applyBody: `Hi Recruitment Team,\r\n\r\nI am applying for the RPA Developer (Kofax) position (Job Code: TRX-26138).\r\n\r\nHere are my professional details:\r\n1. Total RPA Experience: \r\n2. Kofax / Kofax Kapow Experience: \r\n3. SQL Experience / Proficiency: \r\n4. Current CTC: \r\n5. Expected CTC: \r\n6. Notice Period: \r\n7. Current Location: \r\n8. Willingness to work US Shift (5:30 PM – 2:30 AM IST): \r\n9. Contact Number: \r\n\r\nPlease find my updated resume attached.\r\n\r\nBest regards,`,
  },
  {
    id: 'telecaller-customer-support-executive-pune',
    title: 'Telecaller / Customer Support Executive',
    company: 'TaskNera',
    department: 'Customer Support & Operations',
    category: 'support',
    location: 'Pune, Maharashtra',
    type: 'Full-Time · On-site (WFO)',
    workMode: 'On-site (WFO)',
    experience: 'Freshers & Experienced',
    summary:
      'We are looking for enthusiastic and customer-focused candidates to join our team as Telecallers / Customer Support Executives in Pune. This is an exciting opportunity for freshers and experienced candidates to develop communication, customer-handling, and professional skills while gaining valuable workplace experience.',
    responsibilities: [
      'Make and receive customer calls to address queries.',
      'Respond to customer inquiries through calls and emails.',
      'Provide accurate information and assist customers with their concerns.',
      'Maintain customer records and follow-up details.',
      'Update data using MS Excel and other computer applications.',
      'Ensure professional communication and a positive customer experience.',
    ],
    requirements: [
      'Freshers and experienced candidates are welcome to apply.',
      'Good communication skills in Hindi and English.',
      'Basic MS Excel knowledge is mandatory.',
      'Basic computer knowledge and typing skills.',
      'Customer-friendly attitude and willingness to learn.',
      'Flexibility to work in rotational shifts.',
    ],
    secondarySkills: [
      'Customer Support & Telecalling',
      'Hindi & English Communication',
      'MS Excel & Data Entry',
      'Query Resolution & Email Support',
      'Rotational Shift Flexibility',
    ],
    quickScreening:
      'Telecaller | Customer Support Executive | Inbound / Outbound Calls | MS Excel | Hindi & English | Rotational Shifts | Freshers & Experienced | Pune On-site',
    compensationDetails: [
      'Job Type: Full-Time | On-site (Pune)',
      'Training and structured mentorship provided for freshers',
    ],
    whyWorkWithUs: [
      'Great opportunity for freshers to develop communication, customer-handling, and professional skills.',
      'Hands-on workplace experience with modern customer care operations.',
      'Friendly team culture with guidance and long-term career growth paths.',
    ],
    howToApplyDetails: [
      'Highest qualification & current location in Pune',
      'Fluency in Hindi & English',
      'Proficiency in basic MS Excel and computer operations',
      'Flexibility to work in rotational shifts (Yes/No)',
      'Contact number',
    ],
    email: 'kamaljeet@tasknera.com',
    applySubject: 'Application for Telecaller / Customer Support Executive [Pune] [TaskNera Careers]',
    applyBody: `Hi Kamaljeet,\r\n\r\nI am applying for the Telecaller / Customer Support Executive position in Pune.\r\n\r\nHere are my details:\r\n1. Highest Qualification: \r\n2. Total Experience (Freshers welcome): \r\n3. Languages Known (Hindi / English): \r\n4. MS Excel & Computer Knowledge: \r\n5. Current Location in Pune: \r\n6. Flexibility for Rotational Shifts (Yes/No): \r\n7. Contact Number: \r\n\r\nPlease find my updated resume attached.\r\n\r\nBest regards,`,
  },
  {
    id: 'tele-sales-associate-hyderabad-goquickhire',
    title: 'Tele Sales Associate',
    company: 'GoQuickHire',
    department: 'Tele Sales & Inside Business Development',
    category: 'sales',
    location: 'Hyderabad',
    type: 'Full-Time (FTE) · WFH / WFO',
    workMode: 'WFH / WFO',
    experience: 'Freshers & 0–2 Years',
    budget: '₹15,000–₹18,000 / month + Incentives',
    summary:
      'GoQuickHire is hiring freshers and candidates with 0–2 years of experience for the position of Tele Sales Associate in Hyderabad! The role involves making outbound calls, pitching products or services, resolving queries, and closing sales to meet assigned targets.',
    responsibilities: [
      'Make outbound calls and interact with potential customers.',
      'Explain products or services and address customer queries.',
      'Convince customers and achieve assigned sales targets.',
      'Maintain positive customer relationships and follow up on warm leads.',
      'Track call dispositions, customer responses, and lead progress in CRM.',
    ],
    requirements: [
      'Freshers looking to start their careers or candidates with 0–2 years of experience.',
      'Qualification: B.Tech / Any Graduate.',
      'Good communication skills in Telugu + English OR Telugu + Hindi.',
      'Goal-oriented, persuasive mindset with an enthusiasm for tele-sales.',
      'Location: Hyderabad (Work From Home / Work From Office).',
    ],
    secondarySkills: [
      'Tele Sales & Outbound Calling',
      'Telugu + English or Hindi Fluency',
      'Customer Relationship Management',
      'Sales Pitching & Objection Handling',
      'Target Achievement & Lead Pipeline',
    ],
    quickScreening:
      'Tele Sales Associate | Outbound Calling | Telugu + English/Hindi | B.Tech / Any Graduate | Freshers & 0-2 Years | Hyderabad (WFH/WFO) | PF + ESIC + Incentives',
    compensationDetails: [
      'Salary: ₹15,000–₹18,000 per month',
      'Attractive performance-linked sales incentives',
      'Statutory Benefits: PF + ESIC',
    ],
    whyWorkWithUs: [
      'Competitive monthly fixed salary plus attractive sales incentives.',
      'Comprehensive statutory benefits including PF and ESIC coverage.',
      'Excellent launchpad for fresh graduates and early-career sales professionals.',
    ],
    howToApplyDetails: [
      'Highest Qualification (B.Tech / Any Graduate)',
      'Total Sales experience (Freshers welcome to apply)',
      'Language fluency (Telugu + English or Telugu + Hindi)',
      'Preferred work mode in Hyderabad (WFH or WFO)',
      'Contact number',
    ],
    email: 'careers@tasknera.com',
    applySubject: 'Application for Tele Sales Associate – Hyderabad [TaskNera Careers]',
    applyBody: `Hi Recruitment Team,\r\n\r\nI am applying for the Tele Sales Associate position in Hyderabad.\r\n\r\nHere are my professional details:\r\n1. Highest Qualification (B.Tech / Any Graduate): \r\n2. Total Sales Experience (0-2 Years / Fresher): \r\n3. Languages Known (Telugu + English/Hindi): \r\n4. Current Location in Hyderabad: \r\n5. Preferred Work Mode (WFH/WFO): \r\n6. Contact Number: \r\n\r\nPlease find my updated resume attached.\r\n\r\nBest regards,`,
  },
];

const perks = [
  {
    icon: Globe2,
    title: 'Remote-First Flexibility',
    desc: 'Work from where you thrive best with flexible arrangements, digital collaboration tools, and clear async workflows.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation & Rewards',
    desc: 'Market-aligned compensation packages, timely payments, milestone bonuses, and transparent performance incentives.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Upskilling',
    desc: 'Access to modern recruiting tech, HireIQ™ platform insights, customer care certifications, and HR operations training.',
  },
  {
    icon: HeartHandshake,
    title: 'Human-Centric Culture',
    desc: 'We value psychological safety, zero-retaliation transparency, diversity, and mutual respect in everything we do.',
  },
  {
    icon: ShieldCheck,
    title: 'Equal Opportunity & Compliance',
    desc: 'Fair merit-based evaluations governed by robust workplace policies, anti-harassment safeguards, and ethical standards.',
  },
  {
    icon: Sparkles,
    title: 'Fast Track Advancement',
    desc: 'As a rapidly expanding global partner, high performers quickly transition into pod leads, domain specialists, and account directors.',
  },
];

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedJobId, setExpandedJobId] = useState<string | null>('oracle-grc-fusion-security-consultant-trx-26139');

  const [applyingJob, setApplyingJob] = useState<JobPosition | null>(null);
  const [candidateForm, setCandidateForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentLocation: '',
    totalExperience: '',
    relevantExperience: '',
    resumeName: '',
    linkedinUrl: '',
    additionalInfo: '',
  });
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingJob || !candidateForm.fullName || !candidateForm.email) return;

    saveStoredApplication({
      id: `app-${Date.now()}`,
      job_id: applyingJob.id,
      job_title: applyingJob.title,
      full_name: candidateForm.fullName.trim(),
      email: candidateForm.email.trim(),
      phone: candidateForm.phone.trim(),
      current_location: candidateForm.currentLocation.trim(),
      total_experience: candidateForm.totalExperience.trim() || '2+ Years',
      relevant_experience: candidateForm.relevantExperience.trim() || 'Demonstrated Domain Experience',
      resume_name: candidateForm.resumeName.trim() || `${candidateForm.fullName.replace(/\s+/g, '_')}_CV.pdf`,
      linkedin_url: candidateForm.linkedinUrl.trim() || undefined,
      additional_info: candidateForm.additionalInfo.trim() || undefined,
      hireiq_score: Math.floor(88 + Math.random() * 10),
      status: 'Received',
      applied_at: new Date().toISOString(),
    });

    setApplicationSubmitted(true);
  };

  const filteredPositions =
    selectedCategory === 'all'
      ? openPositions
      : openPositions.filter((job) => job.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="bg-[#FAF7F2] min-h-screen text-brand-ink">
        
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-brand-navy text-white py-20 lg:py-24">
          <div
            className="grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
              We&apos;re Hiring · Global Remote &amp; Hybrid Positions
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Build your career with <span className="italic text-brand-teal">TaskNera</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Join a high-growth global workforce partner delivering talent acquisition, HR operations, and virtual business support to top companies worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#open-roles"
                className="bg-white text-brand-navy font-semibold px-6 py-3 rounded-[3px] hover:bg-white/90 active:scale-95 transition-all shadow-sm flex items-center gap-2 text-[13.5px]"
              >
                <span>Explore Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:careers@tasknera.com"
                className="border border-white/20 text-white font-medium px-6 py-3 rounded-[3px] hover:bg-white/10 transition-all flex items-center gap-2 text-[13.5px]"
              >
                <Mail className="w-4 h-4 text-brand-teal" />
                <span>Email careers@tasknera.com</span>
              </a>
            </div>

            {/* Fast Stats Strip */}
            <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-teal">100%</div>
                <div className="text-xs text-white/60 mt-1 font-medium">Vetted Human Teams</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">12+</div>
                <div className="text-xs text-white/60 mt-1 font-medium">Industry Coverage Areas</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-teal">24/7</div>
                <div className="text-xs text-white/60 mt-1 font-medium">Multi-Timezone Operations</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">Zero Fee</div>
                <div className="text-xs text-white/60 mt-1 font-medium">Safe Candidate Hiring Policy</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Culture & Perks Section ── */}
        <section className="py-20 sm:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs uppercase font-bold text-[#101D35] tracking-wider mb-2">
                Why Choose TaskNera
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                An Environment Designed for Your Growth
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe exceptional client outcomes come from empowered professionals. Here is what you can count on when you partner your career with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-[#101D35]/40 hover:shadow-xl hover:shadow-[#101D35]/5 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F3F6FA] text-[#101D35] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#3478F6]/40 group-hover:text-[#1E3A5F] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{perk.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{perk.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Open Positions Section ── */}
        <section id="open-roles" className="py-20 sm:py-24 bg-gradient-to-b from-[#f8fbff] to-white border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="text-xs uppercase font-bold text-[#101D35] tracking-wider mb-2">
                  Current Opportunities
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                  Explore Open Positions
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
                  {openPositions.length > 0
                    ? 'Find the ideal role across our talent pods, HR delivery centers, and virtual support desks.'
                    : 'We are currently accepting candidate profiles and spontaneous applications across all disciplines.'}
                </p>
              </div>

              {/* Filter Tabs */}
              {openPositions.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All Openings' },
                    { id: 'software-sales', label: 'Software Sales' },
                    { id: 'sales', label: 'Sales & Growth' },
                    { id: 'engineering', label: 'Cloud & Engineering' },
                    { id: 'support', label: 'Customer Support' },
                    { id: 'operations', label: 'Operations & Mgt' },
                    { id: 'talent', label: 'Recruitment & Talent' },
                    { id: 'hr', label: 'HR Operations' },
                    { id: 'va', label: 'Virtual Assistant' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedCategory(tab.id)}
                      className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                        selectedCategory === tab.id
                          ? 'bg-[#101D35] text-white shadow-md'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Job Grid / Empty State */}
            {filteredPositions.length > 0 ? (
              <div className="space-y-4">
                {filteredPositions.map((job) => (
                  <div
                    key={job.id}
                    id={job.id}
                    className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-[#101D35]/40 transition-all flex flex-col justify-between scroll-mt-28"
                  >
                    <div className="space-y-3.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#101D35] bg-[#F3F6FA] border border-[#E5EBF3] px-2.5 py-0.5 rounded-md">
                          {job.department}
                        </span>
                        <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {job.location}
                        </span>
                        <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-600" />
                          {job.type}
                        </span>
                        <span className="text-xs font-medium text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md">
                          Exp: {job.experience}
                        </span>
                        {job.budget && (
                          <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                            <DollarSign className="w-3 h-3 text-amber-600" />
                            {job.budget}
                          </span>
                        )}
                        {job.jobCode && (
                          <span className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-300 px-2.5 py-0.5 rounded-md">
                            Code: {job.jobCode}
                          </span>
                        )}
                        {job.shift && (
                          <span className="text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                            <Clock className="w-3 h-3 text-indigo-600" />
                            {job.shift}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900">{job.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {job.summary}
                      </p>

                      {/* Toggle button for Key Responsibilities & Requirements */}
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101D35] hover:text-[#1E3A5F] transition-colors py-1 cursor-pointer"
                        >
                          <span>
                            {expandedJobId === job.id
                              ? 'Hide Key Responsibilities & Requirements'
                              : 'View Key Responsibilities & Requirements'}
                          </span>
                          {expandedJobId === job.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Expanded Section */}
                      {expandedJobId === job.id && (
                        <div className="pt-4 border-t border-slate-100 space-y-5 animate-in fade-in duration-200">
                          {/* Key Responsibilities */}
                          {job.responsibilities && job.responsibilities.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-[#101D35]" />
                                <span>Key Responsibilities</span>
                              </h4>
                              <ul className="space-y-2 text-xs text-slate-600">
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-[#101D35] flex-shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Key Qualifications & Mandatory Skills */}
                          {job.requirements && job.requirements.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Mandatory Skills &amp; Qualifications</span>
                              </h4>
                              <ul className="space-y-2 text-xs text-slate-600">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Secondary Skills */}
                          {job.secondarySkills && job.secondarySkills.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                                <Award className="w-3.5 h-3.5 text-blue-600" />
                                <span>Secondary Skills</span>
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {job.secondarySkills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className="text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Mandatory Skills – Quick Screening */}
                          {job.quickScreening && (
                            <div className="pt-2 border-t border-slate-100">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                                <Cpu className="w-3.5 h-3.5 text-[#101D35]" />
                                <span>Mandatory Skills – Quick Screening</span>
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {job.quickScreening.split(' | ').map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] font-semibold bg-[#F3F6FA] text-[#101D35] border border-[#E5EBF3] rounded-md px-2.5 py-1"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Compensation & Structure */}
                          {job.compensationDetails && job.compensationDetails.length > 0 && (
                            <div className="pt-2 border-t border-slate-100">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Compensation &amp; Payout Terms</span>
                              </h4>
                              <ul className="space-y-2 text-xs text-slate-600">
                                {job.compensationDetails.map((comp, i) => (
                                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                                    <span>{comp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Why Work With Tasknera */}
                          {job.whyWorkWithUs && job.whyWorkWithUs.length > 0 && (
                            <div className="pt-2 border-t border-slate-100">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                                <HeartHandshake className="w-3.5 h-3.5 text-[#101D35]" />
                                <span>Why Work With Tasknera?</span>
                              </h4>
                              <ul className="space-y-2 text-xs text-slate-600">
                                {job.whyWorkWithUs.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-[#101D35] flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* How to Apply Details */}
                          {job.howToApplyDetails && job.howToApplyDetails.length > 0 && (
                            <div className="pt-2 border-t border-slate-100 bg-[#F3F6FA]/40 border border-[#E5EBF3] rounded-xl p-3.5">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5 text-[#101D35]" />
                                <span>How to Apply — Details to Include with Your Resume</span>
                              </h4>
                              <ul className="space-y-1.5 text-xs text-slate-700">
                                {job.howToApplyDetails.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                                    <span className="font-semibold text-[#101D35]">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Structured compensation &amp; bonuses
                        </span>
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Direct mentorship &amp; training
                        </span>
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Fast 1–2 business day application response
                        </span>
                      </div>
                    </div>

                    {/* Instruction line after the JD: Drop your CV at this email ID */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F3F6FA]/60 border border-[#E5EBF3]/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800">
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#101D35] flex-shrink-0" />
                        <span>
                          Drop your CV at this email ID:{' '}
                          {(() => {
                            const recruiterEmail = getRecruiterEmail(job.company, job.email);
                            const subject = job.applySubject || `Application for ${job.title}${job.jobCode ? ` [${job.jobCode}]` : ''} [TaskNera Careers]`;
                            const bodyParam = job.applyBody ? `&body=${encodeURIComponent(job.applyBody)}` : '';
                            return (
                              <a
                                href={`mailto:${recruiterEmail}?subject=${encodeURIComponent(subject)}${bodyParam}`}
                                className="font-bold text-[#101D35] hover:underline"
                              >
                                {recruiterEmail}
                              </a>
                            );
                          })()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <button
                          type="button"
                          onClick={() => {
                            setApplyingJob(job);
                            setApplicationSubmitted(false);
                            setCandidateForm({
                              fullName: '',
                              email: '',
                              phone: '',
                              currentLocation: '',
                              totalExperience: job.experience,
                              relevantExperience: '',
                              resumeName: '',
                              linkedinUrl: '',
                              additionalInfo: '',
                            });
                          }}
                          className="inline-flex items-center justify-center gap-1.5 bg-[#3478F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition-all"
                        >
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>Apply Online</span>
                        </button>
                        {(() => {
                          const recruiterEmail = getRecruiterEmail(job.company, job.email);
                          const subject = job.applySubject || `Application for ${job.title}${job.jobCode ? ` [${job.jobCode}]` : ''} [TaskNera Careers]`;
                          const bodyParam = job.applyBody ? `&body=${encodeURIComponent(job.applyBody)}` : '';
                          return (
                            <a
                              href={`mailto:${recruiterEmail}?subject=${encodeURIComponent(subject)}${bodyParam}`}
                              className="inline-flex items-center justify-center gap-1.5 bg-[#101D35] hover:bg-[#1E3A5F] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition-all"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span>Apply via Email</span>
                            </a>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#E5EBF3] rounded-3xl p-8 sm:p-12 text-center shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#F3F6FA] text-[#101D35] flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-2">
                  No Active Openings at This Moment
                </h3>
                <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-6">
                  We do not currently have published job openings. However, we are constantly expanding our global delivery pods across Talent Acquisition, HR Operations, Virtual Support, and Business Operations.
                </p>
                <div className="inline-flex items-center gap-2.5 bg-[#F3F6FA]/60 border border-[#E5EBF3]/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800">
                  <Mail className="w-4 h-4 text-[#101D35] flex-shrink-0" />
                  <span>
                    Drop your CV at this email ID:{' '}
                    <a href="mailto:careers@tasknera.com?subject=General Application [TaskNera Careers]" className="font-bold text-[#101D35] hover:underline">
                      careers@tasknera.com
                    </a>
                  </span>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Application Modal */}
        {applyingJob && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-[#E5EBF3] my-8 animate-in fade-in duration-200">
              <div className="flex items-start justify-between pb-4 border-b border-[#E5EBF3]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3478F6] bg-[#3478F6]/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Direct Application
                  </span>
                  <h3 className="text-xl font-bold text-[#101D35]">{applyingJob.title}</h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    {applyingJob.department} &bull; {applyingJob.location}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setApplyingJob(null)}
                  className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1"
                >
                  &times;
                </button>
              </div>

              {applicationSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#101D35]">
                    Application Submitted Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#334155] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{candidateForm.fullName}</strong>. Your profile has been received and indexed by our Talent Desk. A confirmation email has been logged to <strong>{candidateForm.email}</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setApplyingJob(null)}
                      className="bg-[#101D35] text-white text-xs font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1E3A5F]"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCandidateSubmit} className="space-y-4 pt-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#101D35] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Aditya Sharma"
                        value={candidateForm.fullName}
                        onChange={(e) =>
                          setCandidateForm({ ...candidateForm, fullName: e.target.value })
                        }
                        className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#101D35] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="aditya@example.com"
                        value={candidateForm.email}
                        onChange={(e) =>
                          setCandidateForm({ ...candidateForm, email: e.target.value })
                        }
                        className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#101D35] mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={candidateForm.phone}
                        onChange={(e) =>
                          setCandidateForm({ ...candidateForm, phone: e.target.value })
                        }
                        className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#101D35] mb-1">Current Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="New Delhi, Bengaluru, London..."
                        value={candidateForm.currentLocation}
                        onChange={(e) =>
                          setCandidateForm({ ...candidateForm, currentLocation: e.target.value })
                        }
                        className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35] focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#101D35] mb-1">Total Experience</label>
                      <input
                        type="text"
                        placeholder="e.g. 4 Years"
                        value={candidateForm.totalExperience}
                        onChange={(e) =>
                          setCandidateForm({ ...candidateForm, totalExperience: e.target.value })
                        }
                        className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#101D35] mb-1">LinkedIn Profile</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        value={candidateForm.linkedinUrl}
                        onChange={(e) =>
                          setCandidateForm({ ...candidateForm, linkedinUrl: e.target.value })
                        }
                        className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#101D35] mb-1">
                      Relevant Domain Experience
                    </label>
                    <input
                      type="text"
                      placeholder="Briefly highlight your key skills matching this role..."
                      value={candidateForm.relevantExperience}
                      onChange={(e) =>
                        setCandidateForm({ ...candidateForm, relevantExperience: e.target.value })
                      }
                      className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#101D35] mb-1">
                      Resume File Name or Cloud Link
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aditya_Resume_2026.pdf or Google Drive link"
                      value={candidateForm.resumeName}
                      onChange={(e) =>
                        setCandidateForm({ ...candidateForm, resumeName: e.target.value })
                      }
                      className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#101D35] mb-1">Additional Notes</label>
                    <textarea
                      rows={2}
                      placeholder="Notice period, expected CTC, or specific strengths..."
                      value={candidateForm.additionalInfo}
                      onChange={(e) =>
                        setCandidateForm({ ...candidateForm, additionalInfo: e.target.value })
                      }
                      className="w-full bg-[#F3F6FA] border border-[#E5EBF3] rounded-xl px-3 py-2 text-[#101D35]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[10px] text-slate-400">
                      TaskNera charges 0 recruitment fees to candidates.
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setApplyingJob(null)}
                        className="px-4 py-2 rounded-xl text-slate-500 hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#3478F6] hover:bg-[#2563EB] text-white font-semibold px-5 py-2 rounded-xl shadow-md"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
