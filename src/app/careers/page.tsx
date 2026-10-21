'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  category: 'talent' | 'hr' | 'va' | 'support' | 'operations' | 'engineering' | 'sales';
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

const openPositions: JobPosition[] = [
  {
    id: 'gcp-cloud-engineer-iam-infra',
    title: 'GCP Cloud Engineer – IAM & Infrastructure Automation',
    department: 'Cloud & Infrastructure Engineering',
    category: 'engineering',
    location: 'Pan India',
    type: 'Full-time · Hybrid',
    experience: '5+ Years',
    summary:
      'We are seeking an experienced GCP Cloud Engineer (5+ years) specializing in Identity & Access Management (IAM), Security Architecture, and Infrastructure as Code (IaC) automation. You will architect enterprise Google Cloud landing zones, build automated Terraform workflows, enforce least-privilege IAM policies, and ensure secure, reliable cloud infrastructure across multi-project environments.',
    responsibilities: [
      'Architect, implement, and audit centralized GCP IAM policies, Custom Roles, Service Accounts, and Organization Policy constraints under strict least-privilege principles.',
      'Develop, test, and maintain reusable Infrastructure as Code (IaC) modules using Terraform and Terragrunt for multi-region landing zones and automated VPC networks.',
      'Integrate cloud security posture management, automated compliance, and CI/CD pipelines using Security Command Center (SCC), KMS, and automated Policy-as-Code checks.',
    ],
    requirements: [
      '5+ years of dedicated professional experience architecting and operating Google Cloud Platform (GCP) enterprise infrastructure.',
      'Deep expertise in GCP IAM architecture, fine-grained access control, conditional bindings, and identity governance.',
      'Advanced proficiency in Terraform / Terragrunt, infrastructure state management, and GitOps automated delivery workflows.',
    ],
  },
  {
    id: 'senior-salesforce-lwc-developer-ltm',
    title: 'Senior Salesforce LWC Developer – LTM',
    department: 'Enterprise Applications & CRM Solutions',
    category: 'engineering',
    location: 'Hyderabad',
    type: 'Full-time · Hybrid',
    experience: '7+ Years',
    summary:
      'We are looking for a Senior Salesforce LWC Developer (7+ years) specializing in Lightning Web Components (LWC), Apex development, and complex enterprise CRM integrations. You will architect and implement scalable, high-performance UI components, streamline business logic using advanced asynchronous Apex, integrate third-party REST/SOAP APIs, and drive lifecycle transition management (LTM) for large-scale enterprise deployments.',
    responsibilities: [
      'Architect and build sophisticated, high-performance Lightning Web Components (LWC) with custom designs, SLDS styling, and reactive state management.',
      'Develop scalable, bulkified backend Apex services, triggers, batch classes, queueable Apex, and platform events with optimal governor limit utilization.',
      'Drive end-to-end Lifecycle Transition Management (LTM), leading the modernization of legacy Visualforce and Aura components into modern LWC frameworks.',
    ],
    requirements: [
      '7+ years of hands-on technical development experience on the Salesforce platform, with a minimum of 4+ years specializing in Lightning Web Components (LWC) and modern JavaScript (ES6+).',
      'Advanced proficiency in Apex programming, design patterns, asynchronous processing, and unit testing frameworks.',
      'Demonstrated experience leading enterprise-scale component refactoring, Visualforce/Aura-to-LWC migrations, and release governance.',
    ],
  },
  {
    id: 'aws-agentic-ai-architect-bedrock',
    title: 'AWS Agentic AI Architect – AWS Bedrock Specialist',
    department: 'AI & Emerging Technologies',
    category: 'engineering',
    location: 'Hyd (PAN India)',
    type: 'Full-time · Hybrid',
    experience: '6+ Years',
    summary:
      'We are seeking a visionary AWS Agentic AI Architect & AWS Bedrock Specialist (6+ years) to architect, deploy, and scale multi-agent GenAI architectures and autonomous workflows. You will pioneer enterprise LLM orchestration using Amazon Bedrock, Bedrock Agents, Knowledge Bases (RAG), and vector databases, integrating sovereign enterprise data into production-grade autonomous agentic systems with strict safety guardrails.',
    responsibilities: [
      'Architect and implement multi-agent systems and autonomous workflows utilizing Amazon Bedrock Agents, LangGraph, AutoGen, or CrewAI.',
      'Design enterprise-grade Retrieval-Augmented Generation (RAG) pipelines leveraging Amazon Bedrock Knowledge Bases, OpenSearch Serverless, Pinecone, or pgvector.',
      'Implement automated Guardrails for Amazon Bedrock to enforce strict PII redaction, toxic content filtering, prompt injection defense, and hallucinations mitigation.',
    ],
    requirements: [
      '6+ years of cloud architecture and software engineering experience, with 2+ years of dedicated production experience in Generative AI, LLMs, and agentic workflows.',
      'Deep hands-on expertise with Amazon Bedrock, Bedrock Agents, Action Groups, Knowledge Bases, and Guardrails.',
      'Advanced proficiency in Python, modern AI frameworks (LangChain, LlamaIndex, LangGraph), and asynchronous programming.',
    ],
  },
  {
    id: 'databricks-platform-engineer-admin',
    title: 'Databricks Platform Engineer / Administrator',
    department: 'Data Platforms & Cloud Analytics',
    category: 'engineering',
    location: 'Chennai, Bangalore, Hyderabad, Noida, Mumbai, Kolkata, Nagpur, Warangal, Bhubaneswar',
    type: 'Full-time · Hybrid',
    experience: '5+ Years',
    summary:
      'We are looking for an experienced Databricks Platform Engineer / Administrator (5+ years) to manage, govern, and optimize enterprise multi-workspace Databricks environments across cloud platforms. You will lead Unity Catalog governance, automated cluster provisioning, Lakehouse performance tuning, CI/CD with Databricks Asset Bundles (DABs), and platform FinOps.',
    responsibilities: [
      'Administer and govern enterprise Databricks multi-workspace platforms, including Unity Catalog, metastore federation, access controls, and data lineage.',
      'Automate workspace provisioning, cluster policies, and resource lifecycles using Terraform, Databricks REST APIs, and Databricks CLI.',
      'Optimize compute clusters (All-Purpose, Job Clusters, and SQL Warehouses) for high throughput, low latency, auto-scaling efficiency, and cost control (FinOps).',
    ],
    requirements: [
      '5+ years of dedicated experience in cloud data platform administration with 3+ years hands-on specializing in Databricks (Azure Databricks or AWS Databricks).',
      'Deep expertise in Unity Catalog administration, access control lists (ACLs), data sharing (Delta Sharing), and data governance frameworks.',
      'Proficiency in Infrastructure as Code (IaC) using Terraform for Databricks automation and cluster policy configurations.',
    ],
  },
  {
    id: 'snowflake-admin-architect',
    title: 'Snowflake Admin / Architect',
    department: 'Cloud Data Architecture & Warehousing',
    category: 'engineering',
    location: 'PAN India',
    type: 'Full-time · Hybrid',
    experience: '8+ Years',
    summary:
      'We are seeking a seasoned Snowflake Admin / Architect (8+ years) to lead enterprise cloud data warehouse architecture, database administration, security governance, and workload optimization. You will architect multi-region Snowflake deployments, enforce role-based access control (RBAC), configure data sharing and replication, and implement FinOps cost-governance frameworks across multi-terabyte data estates.',
    responsibilities: [
      'Architect, configure, and administer enterprise-grade Snowflake data warehouses, multi-cluster virtual warehouses, and cloud storage integrations.',
      'Design and enforce comprehensive security and governance models: custom RBAC hierarchies, dynamic data masking, row access policies, object tagging, and network policies.',
      'Establish FinOps governance: monitor credit consumption, resource monitors, auto-suspend/resume tuning, and warehouse sizing optimization to maximize ROI.',
    ],
    requirements: [
      '8+ years of total data engineering / database administration experience, with 4+ years of dedicated Snowflake architecture and administration.',
      'Mastery of Snowflake internals: Virtual Warehouses, Storage layer, Micro-partitioning, Metadata caching, and Query Profiler.',
      'Deep understanding of enterprise RBAC, Snowflake Secure Views, Data Masking, SCIM provisioning, and Okta/Azure AD SSO federation.',
    ],
  },
  {
    id: 'idmc-mdm-consultant',
    title: 'IDMC MDM Consultant',
    department: 'Enterprise Data Management & Governance',
    category: 'engineering',
    location: 'Hyderabad / Chennai',
    type: 'Full-time · On-site (WFO)',
    experience: '8+ Years',
    summary:
      'We are hiring an experienced IDMC MDM Consultant (8+ years) specializing in Informatica Intelligent Data Management Cloud (IDMC) and Master Data Management (MDM SaaS). You will architect and implement customer/product master data models, configure match/merge rules, design data quality (CDQ) pipelines, and integrate enterprise ERP/CRM ecosystems to deliver high-integrity golden customer records.',
    responsibilities: [
      'Architect and implement end-to-end Master Data Management solutions using Informatica IDMC MDM SaaS, Cloud Data Integration (CDI), and Cloud Data Quality (CDQ).',
      'Design robust data models (Party/Customer, Product, Vendor, Supplier) and entity relationship schemas in Business 360 / Customer 360 console.',
      'Configure, tune, and test complex Match & Merge rules, survivorship rules, and trust score metrics to produce high-confidence golden records.',
    ],
    requirements: [
      '8+ years of total IT experience with 5+ years dedicated to Informatica MDM (Multidomain MDM, C360, P360) and minimum 2+ years in Informatica IDMC / MDM SaaS.',
      'Deep expertise in IDMC Business 360 architecture, Match & Merge tuning, Survivorship, and Hierarchies.',
      'Strong hands-on background in Cloud Data Integration (CDI) and Cloud Data Quality (CDQ) rule creation.',
    ],
  },
  {
    id: 'strategy-growth-manager',
    title: 'Strategy Growth Manager',
    department: 'Corporate Strategy & Growth',
    category: 'operations',
    location: 'Hyderabad',
    type: 'Full-time · In Person',
    experience: '3–4+ Years',
    summary:
      'TaskNera is seeking an energetic, analytical Strategy Growth Manager (3–4+ years) based in Hyderabad to drive business scaling, client acquisition initiatives, market expansion, and strategic operational partnerships. You will work closely with leadership to identify high-impact market opportunities, optimize go-to-market (GTM) execution, and build scalable revenue engines.',
    responsibilities: [
      'Formulate and execute data-driven growth strategies, GTM frameworks, and client acquisition plans across North America, UK, Europe, and India markets.',
      'Analyze sales funnel metrics, customer lifetime value (LTV), acquisition costs (CAC), and churn to identify expansion levers and pipeline acceleration opportunities.',
      'Collaborate directly with executive leadership, sales heads, and service pod leads to structure high-value enterprise proposals, SLAs, and commercial pricing models.',
    ],
    requirements: [
      '3–4+ years of proven experience in growth strategy, corporate development, management consulting, or strategic sales operations in B2B / workforce / tech services.',
      'Strong analytical and quantitative modeling skills (advanced Excel, financial analysis, BI tools like Tableau/PowerBI).',
      'Exceptional executive communication, storytelling, stakeholder management, and pitch presentation skills.',
    ],
  },
  {
    id: 'sales-executive-hyd',
    title: 'Sales Executive',
    department: 'Business Development & Inside Sales',
    category: 'sales',
    location: 'Hyderabad',
    type: 'Full-time · Hybrid (WFH/WFO)',
    experience: '0–2 Years',
    summary:
      'We are seeking a proactive, target-driven Sales Executive (0–2 years experience) in Hyderabad to generate, qualify, and convert new B2B business opportunities for TaskNera’s HR, talent acquisition, and virtual workforce solutions. You will engage prospective business leaders, run outbound prospecting, and close recurring service engagements in a dynamic hybrid work model.',
    responsibilities: [
      'Generate high-quality sales-qualified leads (SQLs) through outbound cold outreach, LinkedIn Sales Navigator, email sequences, and phone discovery calls.',
      'Qualify prospective SME and enterprise clients to understand their hiring bottlenecks, operational scope, and budget requirements.',
      'Deliver compelling presentations and introductory demos showcasing TaskNera’s integrated workforce and virtual support solutions.',
    ],
    requirements: [
      '0–2 years of experience in B2B sales, inside sales, business development, or lead generation (freshers with strong communication and sales drive welcome).',
      'Exceptional communication, negotiation, active listening, and relationship-building skills in English and regional languages.',
      'Self-motivated, goal-oriented mindset with comfort in meeting outbound call and revenue conversion KPIs.',
    ],
  },
  {
    id: 'customer-support-fresher',
    title: 'Customer Support',
    department: 'Virtual Customer Support & Client Success',
    category: 'support',
    location: 'Kashibugga, Warangal',
    type: 'Full-time · Remote',
    experience: 'Fresher',
    summary:
      'We are hiring enthusiastic Customer Support Representatives (Freshers welcome) based in or near Kashibugga, Warangal for a 100% remote customer support engagement. You will be the front-line voice for our global clients, managing omnichannel inquiries (email, chat, and phone), resolving issues empathetically, and maintaining high customer satisfaction ratings (CSAT).',
    responsibilities: [
      'Handle inbound client and customer inquiries across live chat, ticketing systems (Zendesk / Freshdesk), and email with prompt, professional responses.',
      'Troubleshoot common product, order, service, or account issues using standardized knowledge bases and operational playbooks.',
      'Maintain high First Contact Resolution (FCR) rates, average handle times (AHT), and customer satisfaction (CSAT) scores.',
    ],
    requirements: [
      'Fresher or 0–1 year of experience in customer care, BPO, client services, or front-desk communication.',
      'Excellent verbal and written English communication skills with clear, courteous telephone and chat etiquette.',
      'Basic computer proficiency, fast typing speed (30+ WPM), and comfort using web-based tools and Google Workspace / MS Office.',
    ],
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
  const [expandedJobId, setExpandedJobId] = useState<string | null>('gcp-cloud-engineer-iam-infra');

  const filteredPositions =
    selectedCategory === 'all'
      ? openPositions
      : openPositions.filter((job) => job.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 bg-background min-h-screen text-slate-900">
        
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#242326] via-[#242326] to-[#1A191B] text-[#FFF8F0] py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-tn-coral/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-tn-beige/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold text-tn-coral shadow-inner">
              <span className="w-2 h-2 rounded-full bg-tn-coral animate-pulse" />
              <span>We&apos;re Hiring · Global Remote &amp; Hybrid Positions</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#FFF8F0] tracking-tight max-w-4xl mx-auto leading-tight">
              Build Your Career with{' '}
              <span className="text-tn-coral">
                TaskNera
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-[#FFF8F0]/80 max-w-2xl mx-auto leading-relaxed">
              Join a high-growth global workforce partner delivering talent acquisition, HR operations, and virtual business support to top companies worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#open-roles"
                className="bg-tn-coral text-tn-charcoal font-bold px-6 py-3 rounded-full hover:bg-[#F28B6A] active:scale-95 transition-all shadow-lg flex items-center gap-2 text-sm"
              >
                <span>Explore Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:careers@tasknera.com"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm text-sm"
              >
                <Mail className="w-4 h-4 text-tn-coral" />
                <span>Email careers@tasknera.com</span>
              </a>
            </div>

            {/* Fast Stats Strip */}
            <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#E5BDB4]">100%</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Vetted Human Teams</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">12+</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Industry Coverage Areas</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#E5BDB4]">24/7</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Multi-Timezone Operations</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">Zero Fee</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Safe Candidate Hiring Policy</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Culture & Perks Section ── */}
        <section className="py-20 sm:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs uppercase font-bold text-[#704A4B] tracking-wider mb-2">
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
                    className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-[#704A4B]/40 hover:shadow-xl hover:shadow-[#704A4B]/5 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F3ECE4] text-[#704A4B] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#E5BDB4]/40 group-hover:text-[#593A3B] transition-all">
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
                <div className="text-xs uppercase font-bold text-[#704A4B] tracking-wider mb-2">
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
                    { id: 'engineering', label: 'Cloud & Engineering' },
                    { id: 'sales', label: 'Sales & Growth' },
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
                          ? 'bg-[#704A4B] text-white shadow-md'
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
                    className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-[#704A4B]/40 transition-all flex flex-col lg:flex-row lg:items-start justify-between gap-6"
                  >
                    <div className="space-y-3.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#704A4B] bg-[#F3ECE4] border border-[#DED3C7] px-2.5 py-0.5 rounded-md">
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
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#704A4B] hover:text-[#593A3B] transition-colors py-1 cursor-pointer"
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
                                <Sparkles className="w-3.5 h-3.5 text-[#704A4B]" />
                                <span>Key Responsibilities</span>
                              </h4>
                              <ul className="space-y-2 text-xs text-slate-600">
                                {job.responsibilities.slice(0, 3).map((resp, i) => (
                                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-[#704A4B] flex-shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Key Qualifications & Skills */}
                          {job.requirements && job.requirements.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Key Qualifications &amp; Skills</span>
                              </h4>
                              <ul className="space-y-2 text-xs text-slate-600">
                                {job.requirements.slice(0, 3).map((req, i) => (
                                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                                    <span>{req}</span>
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

                    <div className="flex items-center gap-3 lg:self-center flex-shrink-0">
                      <a
                        href={`mailto:careers@tasknera.com?subject=Application for ${encodeURIComponent(
                          job.title
                        )} [TaskNera Careers]`}
                        className="w-full sm:w-auto bg-[#704A4B] hover:bg-[#593A3B] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Apply via Email</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#DED3C7] rounded-3xl p-8 sm:p-12 text-center shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#F3ECE4] text-[#704A4B] flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-2">
                  No Active Openings at This Moment
                </h3>
                <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-6">
                  We do not currently have published job openings. However, we are constantly expanding our global delivery pods across Talent Acquisition, HR Operations, Virtual Support, and Business Operations. Submit your details below to be considered as soon as matching opportunities open up.
                </p>
                <a
                  href="mailto:careers@tasknera.com?subject=General Application [TaskNera Careers]"
                  className="inline-flex items-center gap-2 bg-[#704A4B] hover:bg-[#593A3B] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Submit General Application via Email</span>
                </a>
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
