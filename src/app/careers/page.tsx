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
  Cpu,
  Award,
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
  secondarySkills?: string[];
  quickScreening?: string;
  email?: string;
}

const openPositions: JobPosition[] = [
  {
    id: 'gcp-cloud-engineer-iam-infra',
    title: 'GCP Cloud Engineer – IAM & Infrastructure Automation',
    department: 'Cloud & Infrastructure Engineering',
    category: 'engineering',
    location: 'PAN India',
    type: 'Full-Time (FTE) · Hybrid',
    experience: '5+ Years',
    summary:
      'We are looking for an experienced GCP Cloud Engineer with strong expertise in Cloud IAM, access governance, and infrastructure automation to implement secure, scalable, and repeatable cloud access management practices.',
    responsibilities: [
      'Manage GCP IAM, resource hierarchy, service accounts, custom roles, conditional access, and organization policies.',
      'Implement least-privilege access, access governance, privileged access management, and identity risk remediation.',
      'Analyze audit logs, access usage, permissions, role recommendations, and policy impacts before implementing changes.',
      'Automate IAM remediation and infrastructure management using scripting and Infrastructure as Code (IaC).',
      'Maintain remediation documentation, change records, exception reports, and status updates.',
      'Support cloud infrastructure deployment, CI/CD, containerization, monitoring, and operational improvements.',
    ],
    requirements: [
      'GCP Cloud IAM: Resource hierarchy, service accounts, custom roles, conditional access, and organization policies.',
      'Least-privilege principles, access governance, privileged access management, and IAM risk remediation.',
      'Audit log analysis, permissions assessment, and policy impact analysis.',
      'Terraform, Docker, Kubernetes, GitLab CI/CD and Repositories, Ansible, and Azure DevOps.',
      'Python, Bash, Shell Scripting, and Helm Charts.',
      'Prometheus and Grafana for monitoring and observability.',
      'Infrastructure automation and repeatable remediation at scale.',
    ],
    secondarySkills: ['AWS Cloud'],
    quickScreening:
      'GCP IAM | Access Governance | Least Privilege | Privileged Access Management | IAM Risk Remediation | Audit Logs | Terraform | Docker | Kubernetes | GitLab CI/CD | Ansible | Azure DevOps | Python | Bash | Helm | Prometheus | Grafana',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'senior-salesforce-lwc-developer-ltm',
    title: 'Senior Salesforce LWC Developer – LTM',
    department: 'Enterprise Applications & CRM Solutions',
    category: 'engineering',
    location: 'Hyderabad',
    type: 'Full-Time (FTE) · Hybrid (3 Days WFO)',
    experience: '7+ Years',
    summary:
      'LTM is seeking a Senior Salesforce LWC Developer to develop and optimize Sales Cloud solutions, build custom Lightning Web Components, and integrate external JavaScript libraries for advanced data visualization.',
    responsibilities: [
      'Build and maintain custom applications using Lightning Web Components (LWC).',
      'Integrate external libraries such as AG Grid, AG Charts, or Chart.js through Salesforce Static Resources.',
      'Develop and enhance Sales Cloud features supporting sales processes and lead management.',
      'Write and optimize Apex classes, triggers, and batch processes.',
      'Implement secure data access using permission sets and sharing rules.',
      'Manage development, testing, debugging, and deployments while following Salesforce best practices.',
      'Collaborate with stakeholders and Agile teams to deliver scalable solutions.',
    ],
    requirements: [
      '7+ years of Salesforce development experience.',
      'Minimum 3 years of hands-on LWC development.',
      'Strong expertise in Sales Cloud, Apex, and JavaScript.',
      'Experience integrating external JavaScript libraries through Static Resources, particularly AG Grid, AG Charts, or Chart.js.',
      'Strong understanding of Salesforce standard objects, platform architecture, and development practices.',
    ],
    secondarySkills: [
      'Salesforce DX, VS Code, Git, and AutoRabbit',
      'Agile/Scrum and Salesforce deployment practices',
    ],
    quickScreening:
      'Salesforce Development | LWC | Sales Cloud | Apex | JavaScript | AG Grid / AG Charts / Chart.js | Static Resources | Salesforce Platform Architecture',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'aws-agentic-ai-architect-bedrock',
    title: 'AWS Agentic AI Architect – AWS Bedrock Specialist',
    department: 'AI & Emerging Technologies',
    category: 'engineering',
    location: 'Hyderabad Preferred (PAN India)',
    type: 'Full-Time (FTE) · Hybrid (3 Days WFO) · 3 Open Positions',
    experience: '6+ Years',
    summary:
      'Seeking an experienced AWS Agentic AI Architect to design and implement enterprise-grade Agentic AI solutions using Amazon Bedrock, AWS AgentCore, Knowledge Bases, and RAG architectures. The role involves solution architecture, intelligent agent development, cloud integration, security, and performance optimization.',
    responsibilities: [
      'Design and implement Agentic AI solutions using Amazon Bedrock Foundation Models, Agents, Guardrails, and Knowledge Bases.',
      'Develop intelligent agents using AgentCore, including orchestration, planning, memory, and tool integration.',
      'Build RAG-based applications using vector databases and integrate AI agents with enterprise APIs, databases, and business systems.',
      'Architect scalable, secure, and cost-optimized AI solutions using AWS services.',
      'Implement AI governance, security, compliance, and responsible AI practices.',
      'Define solution architecture, conduct technical assessments, guide implementation, and collaborate with stakeholders.',
    ],
    requirements: [
      '6+ years of relevant experience in cloud, AI architecture, or solution development.',
      'Hands-on experience designing and implementing Agentic AI solutions on AWS.',
      'Strong expertise in Amazon Bedrock, including Foundation Models, Agents, Guardrails, and Knowledge Bases.',
      'Knowledge of AWS AgentCore, agent orchestration, planning, memory, and tool integration.',
      'Experience building RAG applications using vector databases.',
      'Strong understanding of LLM architectures, prompt engineering, agent workflows, and autonomous AI systems.',
      'Experience integrating AI agents with enterprise systems, APIs, and databases.',
      'Knowledge of AWS Lambda, API Gateway, S3, DynamoDB, OpenSearch, ECS/EKS, IAM, and Step Functions.',
      'Expertise in cloud-native AI architecture, security, governance, and cost optimization.',
      'Strong analytical, problem-solving, communication, and stakeholder-management skills.',
      'Mandatory AWS certification: AWS Certified Solutions Architect, AWS Certified AI Practitioner, AWS Certified Machine Learning – Specialty, or equivalent certification.',
    ],
    secondarySkills: [
      'Multi-agent systems & frameworks: LangChain, LangGraph, CrewAI, Semantic Kernel, or AutoGen',
      'Enterprise RAG solutions using Amazon OpenSearch, Pinecone, Weaviate, or similar vector databases',
      'Model evaluation, AI observability, monitoring, performance optimization, and prompt tuning',
      'LLM fine-tuning, MLOps, CI/CD, and AI application deployment',
      'Data engineering and integration of structured and unstructured data',
      'Responsible AI, AI governance, and compliance frameworks',
      'Exposure to Azure OpenAI, Google Vertex AI, conversational AI, chatbots, or virtual assistants',
      'Experience leading architecture discussions, technical workshops, and mentoring teams',
      'Preferred Certifications: AWS Certified AI Practitioner, AWS Certified Machine Learning – Specialty, AWS Certified Solutions Architect (Associate/Professional), AWS Certified Developer – Associate',
    ],
    quickScreening:
      'AWS Bedrock | AgentCore | Agentic AI | RAG | Foundation Models | Bedrock Agents | Guardrails | Knowledge Bases | Vector Databases | AWS Cloud Architecture | AWS Certification',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'databricks-platform-engineer-admin',
    title: 'Databricks Platform Engineer / Administrator',
    department: 'Data Platform Engineering & Cloud Operations',
    category: 'engineering',
    location:
      'PAN India – Hybrid (Chennai, Bangalore, Hyderabad, Noida, Mumbai, Kolkata, Nagpur, Warangal, Bhubaneswar)',
    type: 'Full-Time (FTE) · Hybrid',
    experience: '5+ Years (3+ Years in Databricks Admin)',
    summary:
      'We are looking for an experienced Databricks Platform Engineer / Administrator to manage and optimize enterprise Databricks environments on AWS, focusing on platform administration, governance, automation, security, cost optimization, and production support.',
    responsibilities: [
      'Administer Databricks workspaces, clusters, compute policies, jobs, and access controls.',
      'Manage Unity Catalog, data governance, workspace security, and permissions.',
      'Support AWS-based platform operations, monitoring, incident management, troubleshooting, and root cause analysis.',
      'Automate provisioning and operations using Terraform, Databricks REST APIs/CLI, Python, and shell scripting.',
      'Optimize platform performance, resource utilization, and cloud costs.',
      'Support deployments, CI/CD, capacity planning, and operational documentation.',
    ],
    requirements: [
      '5+ years overall experience, including 3+ years of hands-on Databricks Administration.',
      'Databricks Account/Workspace Administration and platform operations.',
      'Unity Catalog, cluster management, compute policies, and access governance.',
      'AWS: IAM, S3, VPC, KMS, CloudWatch, security controls, and networking.',
      'Terraform / Infrastructure as Code (IaC).',
      'Databricks REST APIs, CLI, Python automation, and shell scripting.',
      'Production support, monitoring, incident management, and troubleshooting.',
      'Cost optimization, platform governance, and cloud security.',
      'Working knowledge of SQL, ETL pipelines, and workflow scheduling.',
    ],
    secondarySkills: [
      'Databricks Administrator / Data Engineer certification',
      'AWS Associate-level certification or above',
      'CI/CD tools: GitHub Actions, Jenkins, or Azure DevOps',
      'Apache Spark, Kafka/streaming, Lakehouse architecture, and observability tools',
      "Education: Bachelor's degree in Computer Science, IT, Engineering, or a related field",
    ],
    quickScreening:
      'Databricks Administration | Workspace Management | Unity Catalog | AWS | IAM | S3 | VPC | KMS | Terraform | REST APIs / CLI | Python | Shell Scripting | Production Support | Cost Optimization | Cloud Security',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'snowflake-admin-architect',
    title: 'Snowflake Admin / Architect',
    department: 'Cloud Data Architecture & Warehousing',
    category: 'engineering',
    location: 'PAN India',
    type: 'Full-Time (FTE)',
    experience: '8+ Years',
    summary:
      'We are looking for an experienced Data Architect / Snowflake Administrator with strong hands-on expertise in Snowflake Administration, SnowSQL, Snowpipe, Data Architecture, and Data Warehousing. Retail domain experience and a strong understanding of modern data models are required.',
    responsibilities: [
      'Design and implement scalable Snowflake database and data warehouse solutions for retail data.',
      'Perform Snowflake administration, data migration, data integration, and performance optimization.',
      'Build data warehouses and data marts; support data profiling and quality analysis.',
      'Design and work with OLAP/OLTP, Dimensional Modelling, Star Schema, Snowflake Schema, and Data Vault.',
      'Develop data extraction and integration modules and collaborate with Data Engineering and Testing teams.',
      'Support legacy-to-Snowflake migrations and recommend improvements to existing data platforms.',
      'Contribute to long-term data platform architecture and strategy while mentoring team members.',
    ],
    requirements: [
      '8+ years of relevant experience in data architecture and database administration.',
      'Hands-on Snowflake Administration and Snowflake Architecture expertise.',
      'Proven hands-on experience with SnowSQL and Snowpipe.',
      'In-depth knowledge of Data Architecture and enterprise Data Warehousing.',
      'Expertise in OLAP/OLTP and Dimensional Modelling.',
      'Demonstrated mastery of Star Schema, Snowflake Schema, and Data Vault architectures.',
      'Experience leading Data Migration, Integration, Data Profiling, and Quality Analysis.',
      'Strong understanding of Snowflake use cases and data patterns in the Retail domain.',
    ],
    secondarySkills: [
      'Retail domain data models and analytics',
      'Legacy data warehouse migration to Snowflake (Teradata/Netezza/Oracle/SQL Server)',
      'Data quality frameworks, testing automation, and CI/CD for data pipelines',
      'Performance tuning, virtual warehouse optimization, and FinOps governance',
      'Technical mentorship and long-term data strategy',
    ],
    quickScreening:
      'Snowflake Administration | Snowflake Architecture | SnowSQL | Snowpipe | Data Architecture | Data Warehousing | OLAP/OLTP | Dimensional Modelling | Star Schema | Snowflake Schema | Data Vault | Data Migration & Integration | Retail Domain',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'idmc-mdm-consultant',
    title: 'IDMC MDM Consultant',
    department: 'Enterprise Data Management & Governance',
    category: 'engineering',
    location: 'Hyderabad / Chennai',
    type: 'Full-Time (FTE)',
    experience: '8+ Years',
    summary:
      'We are looking for an experienced IDMC MDM Consultant with strong hands-on expertise in Informatica SaaS MDM, IDMC, Customer 360, CDI, CAI, and MDM integrations. The role involves designing, developing, testing, and supporting complex MDM solutions.',
    responsibilities: [
      'Design and implement Informatica MDM Customer 360 solutions using IDMC.',
      'Configure and work extensively with MDM Hub, Hub Store, Hub Server, Cleanse/Match Server, and Cleanse Adaptor.',
      'Develop integrations using SIF, Business Entity Services (BES), CDI, and CAI.',
      'Build CAI workflows and integrations with D&B, ERP, SFDC, and downstream systems.',
      'Perform data profiling across heterogeneous data sources and support data quality initiatives.',
      'Lead application enhancements, testing, releases, production support, and performance optimization.',
      'Collaborate with Business Analysts, customers, IT teams, and stakeholders to deliver MDM solutions.',
    ],
    requirements: [
      '8+ years of relevant experience in enterprise data and MDM architecture.',
      'Informatica IDMC / Informatica SaaS MDM — mandatory hands-on experience.',
      'IDMC MDM and Customer 360 implementation expertise.',
      'Informatica Cloud Data Integration (CDI) and Cloud Application Integration (CAI).',
      'SIF and Business Entity Services (BES).',
      'MDM Hub components and configuration (Hub Store, Hub Server, Cleanse/Match Server, Cleanse Adaptor).',
      'Data Profiling, integration, and Informatica REF360.',
      'Hands-on experience with on-premises Informatica tools: IDQ and MDM.',
      'Strong database experience and advanced SQL.',
      'Strong SDLC, troubleshooting, and production support experience.',
      "Bachelor's degree in Computer Science, IT, Engineering, or a related discipline.",
    ],
    secondarySkills: [
      'Third-party integrations: Dun & Bradstreet (D&B), Salesforce (SFDC), SAP/ERP',
      'Informatica Reference 360 (REF360) and Business 360 console',
      'Data governance, data stewardship workflows, and survivorship modeling',
      'Performance tuning of cleanse/match jobs and batch load processes',
    ],
    quickScreening:
      'IDMC | Informatica SaaS MDM | Customer 360 | CDI | CAI | SIF | BES | MDM Hub | Data Profiling | Informatica REF360 | IDQ | On-Prem MDM | Database | SDLC & Production Support',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'strategy-growth-manager',
    title: 'Growth Strategy Manager',
    department: 'Corporate Strategy & Growth',
    category: 'operations',
    location: 'Hyderabad',
    type: 'Full-time · In Person',
    experience: '4–6 Years',
    summary:
      "Join the founding team and take ownership of building Bozzo's brand, marketing engine, and customer base from the ground up. Work closely with the founders to develop growth ideas, lead digital and performance marketing, execute Hyderabad launch strategies, and turn growth strategies into measurable outcomes.",
    responsibilities: [
      'Digital & Performance Marketing: Plan and manage Google Ads, Meta Ads, paid campaigns, and customer acquisition initiatives.',
      'SEO & Content Marketing: Improve search rankings, organic traffic, website visibility, and online presence.',
      'Brand Marketing: Build brand awareness through social media, content, influencers, Reels, and creative campaigns.',
      'GTM & Customer Acquisition: Develop and execute Hyderabad launch strategies to drive app installs, first rides, repeat bookings, and referrals.',
      'Growth & Pricing Strategy: Identify target customers, growth opportunities, competitive pricing, promotional offers, and innovative customer acquisition ideas.',
      'Analytics & Optimization: Track CAC, conversions, retention, referrals, and campaign ROI to improve marketing performance.',
      'Partnerships: Develop collaborations with colleges, offices, PGs, apartments, local businesses, and communities to acquire customers.',
      'Competitor Analysis: Study Uber, Rapido, Ola, and market trends to identify pricing gaps, customer needs, and growth opportunities.',
      'Growth Experiments: Test new marketing channels, referral programs, viral campaigns, and creative strategies to accelerate customer growth.',
    ],
    requirements: [
      '4–6 years of relevant experience in growth, digital marketing, performance marketing, SEO, or GTM.',
      'Hands-on experience with Google Ads, Meta Ads, SEO, and campaign analytics.',
      'Strong understanding of customer acquisition, branding, CAC, conversions, and ROI.',
      'Creative, analytical, entrepreneurial, and execution-oriented mindset.',
      'Ability to develop growth ideas, analyze results, and turn strategies into measurable outcomes.',
      'Startup, consumer internet, marketplace, or mobility experience is a strong advantage.',
      'Familiarity with the Hyderabad market is preferred.',
    ],
    secondarySkills: [
      'Performance marketing: Google Ads, Meta Ads Manager, GA4, Firebase Analytics',
      'Mobility, ride-hailing & hyper-local marketplace growth frameworks',
      'Influencer & viral social media campaign execution (Reels, creative campaigns)',
      'Offline hyper-local activation: BTL activations, college/corporate tie-ups, PG/community partnerships',
    ],
    quickScreening:
      'Growth Strategy | Performance Marketing | Google Ads | Meta Ads | SEO | GTM | Hyderabad Market | CAC & ROI Optimization | App Installs | Customer Acquisition | Mobility / Ride-Hailing | Hyperlocal Partnerships',
    email: 'swati@tasknera.com',
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
    email: 'nabila@tasknera.com',
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
    email: 'nabila@tasknera.com',
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
                href="mailto:rashmikotekar@tasknera.com"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm text-sm"
              >
                <Mail className="w-4 h-4 text-tn-coral" />
                <span>Email rashmikotekar@tasknera.com</span>
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
                    className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-[#704A4B]/40 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
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
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-[#704A4B] flex-shrink-0 mt-0.5" />
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
                                <Cpu className="w-3.5 h-3.5 text-[#704A4B]" />
                                <span>Mandatory Skills – Quick Screening</span>
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {job.quickScreening.split(' | ').map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] font-semibold bg-[#F3ECE4] text-[#704A4B] border border-[#DED3C7] rounded-md px-2.5 py-1"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
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
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2.5 bg-[#F3ECE4]/60 border border-[#DED3C7]/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800">
                      <Mail className="w-4 h-4 text-[#704A4B] flex-shrink-0" />
                      <span>
                        Drop your CV at this email ID:{' '}
                        <a
                          href={`mailto:${job.email || 'rashmikotekar@tasknera.com'}?subject=Application for ${encodeURIComponent(
                            job.title
                          )} [TaskNera Careers]`}
                          className="font-bold text-[#704A4B] hover:underline"
                        >
                          {job.email || 'rashmikotekar@tasknera.com'}
                        </a>
                      </span>
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
                  We do not currently have published job openings. However, we are constantly expanding our global delivery pods across Talent Acquisition, HR Operations, Virtual Support, and Business Operations.
                </p>
                <div className="inline-flex items-center gap-2.5 bg-[#F3ECE4]/60 border border-[#DED3C7]/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800">
                  <Mail className="w-4 h-4 text-[#704A4B] flex-shrink-0" />
                  <span>
                    Drop your CV at this email ID:{' '}
                    <a href="mailto:rashmikotekar@tasknera.com?subject=General Application [TaskNera Careers]" className="font-bold text-[#704A4B] hover:underline">
                      rashmikotekar@tasknera.com
                    </a>
                  </span>
                </div>
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
