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
    id: 'freelance-recruiter-remote-pan-india',
    title: 'Experienced Freelance Recruiter',
    department: 'Talent Acquisition & Sourcing Solutions',
    category: 'talent',
    location: 'Pan India (Work From Home)',
    type: 'Freelance / Commission-Based · Remote',
    experience: 'Prior Recruitment Experience Mandatory',
    workMode: 'Remote / Work From Home',
    budget: 'Commission-Based (Per Successful Placement)',
    summary:
      'Tasknera Global HR Solutions is expanding our freelance recruitment network. We are seeking experienced recruiters who can independently source, screen, and shortlist qualified candidates against client requirements across IT, non-IT, and niche industries.',
    responsibilities: [
      'Source qualified candidates through LinkedIn, Naukri, job portals, professional networks, and other sourcing channels.',
      'Review resumes and match candidate profiles against job descriptions and client requirements.',
      'Conduct initial screening calls and assess candidate suitability.',
      'Submit relevant, pre-screened profiles within agreed timelines.',
      'Coordinate interviews and follow up with candidates throughout the hiring process.',
      'Maintain accurate candidate records and provide regular recruitment updates.',
      'Work on assigned vacancies and manage recruitment pipelines independently.',
    ],
    requirements: [
      'Prior experience in recruitment or talent acquisition is mandatory.',
      'Proven experience in candidate sourcing, screening, and profile shortlisting.',
      'Ability to understand job descriptions and identify suitable candidates.',
      'Strong communication, coordination, and follow-up skills.',
      'Ability to work independently and meet agreed recruitment targets.',
      'Experience recruiting for IT, non-IT, or niche positions is an advantage.',
      'Freshers and candidates without prior recruitment experience are not eligible for this opportunity.',
    ],
    secondarySkills: [
      'LinkedIn Recruiter & Boolean Search',
      'Naukri / Leading Job Portals',
      'Candidate Screening & Profile Matching',
      'Interview Coordination & Follow-up',
      'Recruitment Pipeline Management',
    ],
    quickScreening:
      'Freelance Recruiter | Remote WFH | LinkedIn Recruiter | Naukri | Talent Sourcing | Candidate Screening | Profile Shortlisting | Commission-Based | Pan India',
    compensationDetails: [
      'Performance-based compensation for successful placements.',
      'Commission structure and payment terms will be discussed and mutually agreed upon before assignments begin.',
      'Opportunity to work on multiple recruitment assignments across industries.',
      'This is a freelance, commission-based opportunity. It does not offer a fixed monthly salary.',
    ],
    whyWorkWithUs: [
      'Flexible working hours and remote work freedom.',
      'Access to recruitment assignments across different industries.',
      'Opportunity to build long-term professional collaboration with Tasknera Global HR Solutions.',
      'Work independently while expanding your recruitment network.',
    ],
    howToApplyDetails: [
      'Total recruitment experience',
      'Industries and job roles handled',
      'Sourcing platforms used',
      'Average number of profiles submitted per day',
      'Current availability for freelance assignments',
    ],
    email: 'aakanksha@tasknera.com',
    applySubject: 'Application for Experienced Freelance Recruiter [TaskNera Careers]',
    applyBody: `Hi Aakanksha,\n\nI am interested in collaborating with Tasknera Global HR Solutions as an Experienced Freelance Recruiter.\n\nHere are my professional details:\n1. Total recruitment experience: \n2. Industries and job roles handled: \n3. Sourcing platforms used: \n4. Average number of profiles submitted per day: \n5. Current availability for freelance assignments: \n\nPlease find my updated resume attached.\n\nBest regards,`,
  },
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
    title: 'Senior Salesforce LWC Developer',
    department: 'Enterprise Applications & CRM Solutions',
    category: 'engineering',
    location: 'Hyderabad',
    type: 'Full-Time (FTE) · Hybrid (3 Days WFO)',
    experience: '7+ Years',
    summary:
      'We are seeking a Senior Salesforce LWC Developer to develop and optimize Sales Cloud solutions, build custom Lightning Web Components, and integrate external JavaScript libraries for advanced data visualization.',
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
    type: 'Position: FTE',
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
      '8+ years of relevant experience.',
      'Snowflake Administration and Snowflake Architecture.',
      'Hands-on experience with SnowSQL and Snowpipe.',
      'Data Architecture and Data Warehousing.',
      'OLAP/OLTP and Dimensional Modelling.',
      'Star Schema, Snowflake Schema, and Data Vault.',
      'Data Migration, Integration, Profiling, and Quality Analysis.',
      'Strong understanding of Snowflake use cases in the Retail domain.',
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
  {
    id: 'content-moderation-unitech',
    title: 'Content Moderation',
    company: 'UniTech Solutions',
    department: 'Trust & Safety / Content Moderation',
    category: 'support',
    location: 'PAN India',
    type: 'Full-Time · WFH',
    experience: 'Max 1 Year',
    workMode: 'WFH',
    summary:
      'UniTech Solutions is hiring Content Moderation specialists across PAN India for a 100% remote (WFH) role. You will review and moderate digital user-generated content, enforce community safety guidelines, and ensure platform integrity.',
    responsibilities: [
      'Review, evaluate, and moderate user-generated digital content (text, image, audio, video) according to strict trust and safety policies.',
      'Identify, tag, and escalate abusive, violating, copyrighted, or sensitive content swiftly.',
      'Maintain high quality scores, speed, and accuracy across daily review workflows.',
      'Collaborate with quality auditors and team supervisors to address nuanced edge cases and policy updates.',
    ],
    requirements: [
      '0 to 1 year of experience in content moderation, digital review, customer support, or online community management (Freshers with strong analytical judgment welcome).',
      'Strong eye for detail, emotional resilience, and objective judgment.',
      'Proficiency in English; regional language comprehension is an advantage.',
      'Dedicated work-from-home setup with stable high-speed broadband connection.',
    ],
    quickScreening:
      'Content Moderation | Digital Trust & Safety | Policy Enforcement | Queue Review | Quality Assurance | WFH',
    email: 'nabila@tasknera.com',
  },
  {
    id: 'trx-26052-sr-data-engineer',
    title: 'Senior Data Engineer – Azure & Databricks',
    jobCode: 'TRX-26052',
    company: 'TrinexGlobal',
    client: 'LTM',
    department: 'Data Engineering & Cloud Platforms',
    category: 'engineering',
    location: 'Bangalore',
    workMode: 'Onsite (WFO)',
    shift: '1:30 PM – 11:00 PM IST',
    type: 'Full-Time (FTE) · WFO',
    experience: '7+ Years',
    vendorPayout: '₹50,000 per successful joining',
    summary:
      'We are looking for an experienced Senior Data Engineer to design, develop, and optimize scalable data pipelines and data platforms using Apache Spark, Databricks, SQL, Python, and Azure data services.',
    responsibilities: [
      'Design, develop, and optimize ETL/ELT pipelines for large-scale data processing.',
      'Build data solutions using Apache Spark, Databricks, SQL, and Python.',
      'Develop batch and real-time data ingestion and streaming frameworks.',
      'Design and maintain data warehouses, data marts, lakehouse architectures, and data models.',
      'Work with Azure Data Factory (ADF), Azure Synapse Analytics, and Azure Data Lake Storage (ADLS).',
      'Ensure data quality, governance, security, and compliance.',
      'Monitor, troubleshoot, and optimize data pipeline performance and reliability.',
      'Collaborate with data scientists, analysts, and business stakeholders.',
    ],
    requirements: [
      '7+ years of relevant Data Engineering experience.',
      'Strong expertise in Apache Spark, Databricks, SQL, and Python.',
      'Hands-on experience in ETL/ELT pipeline development and data architecture.',
      'Knowledge of data warehousing, data modelling, and lakehouse concepts.',
      'Experience with batch and streaming data processing.',
      'Hands-on knowledge of Azure Data Factory (ADF), Azure Synapse Analytics, and ADLS.',
      'Experience in data quality, governance, performance tuning, and optimization.',
    ],
    secondarySkills: [
      "Bachelor's or Master's degree in Computer Science, Engineering, Data Science, or a related field",
      'Experience with CI/CD, DevOps, and cloud-based data platforms',
      'Azure Data Engineer Associate certification',
      'Strong analytical, problem-solving, and stakeholder-management skills',
    ],
    quickScreening:
      'Data Engineering | Apache Spark | Databricks | SQL | Python | ETL/ELT | Azure Data Factory | Azure Synapse Analytics | ADLS | Data Modelling | Batch & Streaming',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26051-sr-integration-engineer',
    title: 'Senior Integration Engineer – Azure & API Integration',
    jobCode: 'TRX-26051',
    company: 'TrinexGlobal',
    client: 'LTM',
    department: 'Enterprise Integration & Cloud APIs',
    category: 'engineering',
    location: 'Bangalore',
    workMode: 'Work From Office (WFO)',
    shift: '1:30 PM – 11:00 PM IST',
    budget: 'Up to ₹15 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '8+ Years',
    vendorPayout: '₹50,000 per successful joining',
    summary:
      'We are seeking a Senior Integration Engineer to design and implement enterprise integrations using REST APIs, Azure cloud services, API Management, microservices, and event-driven architectures. The role includes integrating third-party platforms, including robotics, drones, Industrial IoT, and AI/ML solutions.',
    responsibilities: [
      'Design, develop, and maintain RESTful APIs and third-party/vendor integrations.',
      'Configure and manage Azure API Management (APIM), API security, versioning, and access controls.',
      'Implement event-driven integrations using Azure Service Bus, Event Hubs, Event Grid, or equivalent technologies.',
      'Develop integration services, reusable connectors, and microservices.',
      'Handle authentication, data transformation, retries, error handling, and asynchronous messaging.',
      'Troubleshoot production integration issues and coordinate with external vendor teams.',
      'Develop CI/CD pipelines using Azure DevOps or GitHub Actions.',
    ],
    requirements: [
      '8+ years in software integration, API development, cloud integration, or enterprise application development.',
      'Strong hands-on experience with RESTful APIs and third-party API integrations.',
      'Expertise in Azure API Management (APIM).',
      'Experience with event-driven architecture and message queues.',
      'Knowledge of Azure Service Bus, Event Hubs, or equivalent messaging technologies.',
      'Strong programming skills in Python or C#/.NET.',
      'Understanding of API security, OAuth 2.0, JWT, Microsoft Entra ID, and authentication mechanisms.',
      'Experience in cloud-native application development and production troubleshooting.',
    ],
    secondarySkills: [
      'Skydio APIs/SDKs and Boston Dynamics Spot/robot APIs',
      'Robotics, drone, Industrial IoT, computer vision, or edge computing integrations',
      'Docker, Kubernetes/AKS, Infrastructure as Code, and CI/CD',
      'Experience in Oil & Gas, Energy, Manufacturing, or Utilities',
    ],
    quickScreening:
      'REST APIs | Azure API Management (APIM) | Azure Service Bus | Event Hubs | Event-Driven Architecture | Python/C#/.NET | OAuth 2.0 | JWT | Microsoft Entra ID | Microservices | CI/CD',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26050-data-analyst-powerbi',
    title: 'Data Analyst – Power BI & Azure',
    jobCode: 'TRX-26050',
    company: 'TrinexGlobal',
    client: 'LTM',
    department: 'Business Intelligence & Analytics',
    category: 'engineering',
    location: 'Bangalore',
    workMode: 'Work From Office (WFO)',
    shift: '1:30 PM – 11:00 PM IST',
    budget: 'Up to ₹6 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '2+ Years',
    vendorPayout: '₹20,000 per successful joining',
    summary:
      'We are looking for a Data Analyst – Power BI & Azure with hands-on Power BI experience and knowledge of Microsoft Azure services to analyze data, develop dashboards, and support data-driven business decisions.',
    responsibilities: [
      'Analyze data to identify trends, patterns, and actionable insights.',
      'Develop and maintain Power BI dashboards and reports.',
      'Work with Azure Synapse Analytics, Azure Data Lake, and Azure SQL Database.',
      'Perform data cleaning, preparation, transformation, and integration using SQL.',
      'Collaborate with data engineers, business stakeholders, and IT teams.',
      'Use Power Platform tools to automate workflows and improve reporting processes.',
      'Maintain documentation for reports, dashboards, and data processes.',
    ],
    requirements: [
      '2+ years of overall experience, including at least 2 years of hands-on Power BI reporting and dashboard development.',
      'Strong SQL skills, including data manipulation and query optimization.',
      'Knowledge of Azure Synapse Analytics, Azure Data Lake, and Azure SQL Database.',
      'Familiarity with Microsoft Power Platform: Power BI, Power Apps, and Power Automate.',
      'Strong data analysis and data visualization skills.',
    ],
    secondarySkills: [
      'Experience in OT/IoT projects',
      'Exposure to Oil & Gas, Manufacturing, or related industries',
      'Total Experience & Hands-on Power BI Experience details required with CV submission',
    ],
    quickScreening:
      'Power BI | Dashboard Development | SQL | Azure Synapse Analytics | Azure Data Lake | Azure SQL Database | Power Apps | Power Automate | Data Analysis',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26057-salesforce-revenue-cloud',
    title: 'Salesforce Revenue Cloud / CPQ Consultant',
    jobCode: 'TRX-26057',
    company: 'TrinexGlobal',
    client: 'LTIMindtree Locations',
    department: 'CRM & Revenue Cloud Solutions',
    category: 'engineering',
    location: 'PAN India',
    workMode: 'WFO (Monday–Friday | 8 Hours/Day)',
    budget: '₹19 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '5–7 Years',
    summary:
      'We are seeking an experienced Salesforce Revenue Cloud Consultant with strong hands-on expertise in Salesforce CPQ and Billing to design, develop, and implement solutions across the sales and revenue lifecycle.',
    responsibilities: [
      'Develop and configure Salesforce Revenue Cloud, CPQ, and Billing solutions.',
      'Customize functionality using Apex, Lightning Web Components (LWC), and Flows.',
      'Integrate Salesforce with third-party applications using APIs and middleware.',
      'Gather business requirements and translate them into technical solutions.',
      'Handle data migration, validation, and automation.',
      'Troubleshoot CPQ rules, pricing, discounting, and invoicing issues.',
      'Follow Salesforce development, security, and deployment best practices.',
    ],
    requirements: [
      'Strong hands-on expertise in Salesforce CPQ and/or Revenue Cloud.',
      'Experience with CPQ, Billing, pricing structures, and Revenue Cloud data modelling.',
      'Proficiency in Apex, LWC, Flows, and Process Builder.',
      'Experience with Sales Cloud, Service Cloud, and Experience Cloud.',
      'Knowledge of REST/SOAP APIs, web services, and middleware tools.',
      'Familiarity with Approval Processes, Workflows, and Scheduled Jobs.',
    ],
    secondarySkills: ['Salesforce Revenue Cloud certifications'],
    quickScreening:
      'Salesforce CPQ | Revenue Cloud | Billing | Apex | LWC | Flows | REST/SOAP APIs | Pricing Rules | Quote-to-Cash',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26058-ba-ormb-technical',
    title: 'BA ORMB Technical Consultant',
    jobCode: 'TRX-26058',
    company: 'TrinexGlobal',
    client: 'LTIMindtree',
    department: 'Oracle Revenue & Billing (ORMB)',
    category: 'engineering',
    location: 'PAN India',
    workMode: 'WFO',
    shift: 'Second Shift',
    budget: 'Up to ₹24 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '5+ Years',
    summary:
      'We are seeking an ORMB Technical Consultant with 5+ years of hands-on ORMB implementation experience, strong OUAF expertise, and experience in integrations, database performance optimization, application customization, and production support.',
    responsibilities: [
      'Develop and customize ORMB components, including Batch Programs, Algorithms, Business Services, UI Maps, Zones, and Portals.',
      'Build integrations using REST/SOAP Web Services, Inbound Web Services (IWS), and Outbound Messages.',
      'Develop 4GL scripts, Service Scripts, BPA scripts, and Java-based customizations.',
      'Write and optimize complex SQL/PLSQL queries and troubleshoot database performance issues.',
      'Handle production support, billing job-stream issues, UAT defects, smoke testing, and cutovers.',
      'Collaborate with functional and technical teams to deliver ORMB implementation solutions.',
    ],
    requirements: [
      '5+ years of hands-on ORMB technical implementation experience.',
      'Strong understanding of ORMB architecture and the OUAF framework.',
      'Expertise in OUAF components, including Batch Programs, Business Services, Algorithms, UI Maps, and Zones.',
      'Programming skills in Core Java, J2EE, JavaScript, Hibernate, 4GL, and XPath scripting.',
      'Strong knowledge of Oracle RDBMS, advanced SQL, and PL/SQL query optimization.',
      'REST/SOAP integrations and testing using SOAP UI or Postman.',
      'Experience in application customization, debugging, and production support.',
    ],
    secondarySkills: [
      'Functional exposure to Customer Setup, Billing, Payments, Transaction Feed Management (TFM), Pricing, Rates, and General Ledger (GL)',
    ],
    quickScreening:
      'ORMB | OUAF Framework | Core Java | J2EE | SQL/PLSQL | REST/SOAP Web Services | IWS | Batch Programs | Algorithms | UI Maps | Production Support',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26060-oracle-epcm',
    title: 'Oracle EPCM Techno-Functional Consultant',
    jobCode: 'TRX-26060',
    company: 'TrinexGlobal',
    client: 'LTM Locations',
    department: 'Enterprise Performance Management (EPM)',
    category: 'engineering',
    location: 'PAN India',
    workMode: 'Work From Office (WFO) · Monday–Friday',
    shift: 'Rotational',
    budget: 'Up to ₹21.5 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '7–10 Years',
    summary:
      'We are seeking an Oracle EPCM Techno-Functional Consultant with strong expertise in profitability analysis, cost allocation, financial planning, and Oracle EPM Cloud solutions.',
    responsibilities: [
      'Lead Oracle EPCM implementation and enhancement projects.',
      'Gather business requirements for cost allocation, profitability, and management reporting.',
      'Design allocation methodologies, driver-based calculations, and profitability models.',
      'Configure EPCM applications, business rules, forms, dashboards, and reports.',
      'Develop metadata, dimensions, integrations, and calculation logic.',
      'Support data validation, SIT, UAT, deployment, and production troubleshooting.',
      'Collaborate with finance stakeholders to optimize profitability processes.',
    ],
    requirements: [
      '7–10 years of Oracle EPM experience.',
      'Minimum 3 years of Oracle EPCM Cloud implementation experience.',
      'Strong understanding of cost allocation, profitability analysis, and financial planning.',
      'Hands-on experience with Oracle EPCM Cloud, EPBCS/PBCS, Data Management/Data Integration, Calculation Manager, and Smart View.',
      'Groovy scripting and knowledge of Essbase concepts and business rules.',
      'Experience integrating ERP systems with Oracle EPM.',
    ],
    secondarySkills: [
      'CA / MBA Finance',
      'Oracle EPM Cloud certifications',
      'Domain experience in Retail, Utilities, Manufacturing, or Financial Services',
    ],
    quickScreening:
      'Oracle EPCM Cloud | EPBCS/PBCS | Cost Allocation | Profitability Models | Groovy Scripting | Calculation Manager | Essbase | Data Integration',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26059-pdm-migration',
    title: 'PDM Migration Engineer',
    jobCode: 'TRX-26059',
    company: 'TrinexGlobal',
    department: 'Engineering Data & PDM Infrastructure',
    category: 'engineering',
    location: 'PAN India',
    workMode: 'WFO',
    budget: 'Up to ₹9.6 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '3+ Years',
    summary:
      'We are looking for a PDM Migration Engineer with hands-on experience in PDM/Vault migration, Autodesk applications, and PDM infrastructure.',
    responsibilities: [
      'Execute PDM and Autodesk Vault migrations for enterprise engineering environments.',
      'Perform Autodesk application installation and configuration across client workstations and servers.',
      'Administer and configure Autodesk Data Management Server (ADMS).',
      'Maintain and monitor PDM infrastructure, storage, and connectivity.',
      'Perform Vault server upgrades, patch management, and data integrity checks.',
    ],
    requirements: [
      'Clearly documented hands-on experience in PDM and Autodesk Vault.',
      'Hands-on experience in Autodesk Application Installation.',
      'Demonstrated experience with Autodesk Data Management Server (ADMS).',
      'Hands-on experience in PDM Infrastructure administration.',
      'Proven hands-on experience in Vault Server Upgrade.',
      'Critical requirement: This is a PDM Migration role, NOT a PLM Migration role.',
    ],
    quickScreening:
      'PDM | Autodesk Vault | Autodesk Installation | ADMS | PDM Infrastructure | Vault Server Upgrade',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26061-oracle-arcs-fccs',
    title: 'Oracle ARCS / FCCS Consultant',
    jobCode: 'TRX-26061',
    company: 'TrinexGlobal',
    client: 'LTM Locations',
    department: 'Financial Close & Reconciliation (EPM)',
    category: 'engineering',
    location: 'PAN India',
    workMode: 'Work From Office (WFO) · Monday–Friday',
    shift: 'Rotational',
    budget: 'Up to ₹21.5 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '7–10 Years',
    summary:
      'We are seeking an experienced Oracle EPM Consultant with strong expertise in Oracle Account Reconciliation Cloud Service (ARCS), Transaction Matching, and reconciliation transformation for global finance operations.',
    responsibilities: [
      'Implement and configure Oracle ARCS modules.',
      'Design account reconciliation workflows, certification processes, and approval controls.',
      'Configure Transaction Matching rules, matching types, and automated reconciliation processes.',
      'Develop integrations with ERP and source systems.',
      'Manage data migration, testing, training, and deployment.',
      'Support month-end close, reconciliation optimization, and production issue resolution.',
    ],
    requirements: [
      '7–10 years of Oracle EPM experience.',
      'Minimum 3 years of Oracle ARCS implementation/support experience.',
      'Strong hands-on expertise in Reconciliation Compliance and Transaction Matching, Profiles, and Matches.',
      'Hands-on expertise in Data Integration / Data Management, Reports and Dashboards.',
      'Strong accounting and reconciliation knowledge.',
      'Experience integrating Oracle EPM with Oracle ERP, SAP, or other ERP systems.',
    ],
    secondarySkills: [
      'CA / CMA / CPA / MBA Finance',
      'Experience supporting global financial close processes',
      'Oracle ARCS Cloud certification',
    ],
    quickScreening:
      'Oracle ARCS | Transaction Matching | Reconciliation Compliance | Oracle EPM | Data Integration | FCCS | Oracle ERP / SAP Integration',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26062-oracle-epbcs-capital',
    title: 'Oracle EPBCS Capital Planning Consultant',
    jobCode: 'TRX-26062',
    company: 'TrinexGlobal',
    client: 'LTM Locations',
    department: 'Enterprise Planning & Budgeting (EPM)',
    category: 'engineering',
    location: 'PAN India',
    workMode: 'Work From Office (WFO) · Monday–Friday',
    shift: 'Rotational',
    budget: 'Up to ₹21.5 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '7–10 Years',
    summary:
      'We are seeking an Oracle EPM Consultant with strong expertise in EPBCS Capital Planning, Capex budgeting, fixed asset planning, and depreciation modelling.',
    responsibilities: [
      'Design and implement Oracle EPBCS Capital Planning solutions.',
      'Gather requirements for Capex budgeting, capital investments, and asset management.',
      'Configure Capital Planning modules, business rules, forms, dashboards, and reports.',
      'Develop models for depreciation, asset acquisition, transfers, and retirement.',
      'Build integrations with ERP Fixed Asset systems.',
      'Support testing, deployment, training, hypercare, and ongoing process improvements.',
    ],
    requirements: [
      '7–10 years of Oracle EPM experience.',
      'Minimum 3 years of EPBCS/PBCS implementation experience.',
      'Hands-on expertise in Oracle EPBCS Capital Planning, Capex budgeting, and fixed asset planning.',
      'Depreciation modelling and Data Integration / Data Management.',
      'Groovy scripting, Business Rules, Calculation Manager, and Smart View.',
      'Understanding of capital budgeting, fixed assets, and project investments.',
      'Experience with Oracle ERP, SAP, or other ERP platforms.',
    ],
    secondarySkills: [
      'CA / MBA Finance',
      'Oracle EPM Cloud certification',
      'Experience in large enterprise planning transformations',
    ],
    quickScreening:
      'Oracle EPBCS | Capital Planning | Capex Budgeting | Depreciation Modelling | Groovy | Business Rules | Calculation Manager | Smart View',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26101-salesforce-cpq-rca',
    title: 'Senior Salesforce CPQ / RCA Developer',
    jobCode: 'TRX-26101',
    company: 'TrinexGlobal',
    client: 'LTM',
    department: 'CRM & Revenue Cloud Architecture',
    category: 'engineering',
    location: 'PAN India',
    workMode: 'WFO',
    type: 'Full-Time (FTE) · WFO',
    experience: '7+ Years',
    summary:
      'We are looking for a seasoned Senior Salesforce CPQ / RCA Developer (7+ years) to design, customize, and optimize enterprise Quote-to-Cash architectures. You will lead complex product catalog configurations, pricing and discounting engines, advanced approval matrices, and third-party ERP integrations while conducting deep root-cause analysis (RCA) to maximize billing integrity and revenue efficiency.',
    responsibilities: [
      'Design, configure, and customize Salesforce CPQ and Revenue Cloud solutions, including complex Product Bundles, Option Constraints, Configuration Rules, and Custom Actions.',
      'Build and optimize advanced Pricing Rules, Discount Schedules, Block/Tiered Pricing, Cost & Markup rules, and Custom Script (QCP) pricing plugins.',
      'Architect and map end-to-end Quote-to-Cash (Q2C) lifecycle processes covering opportunity management, quoting, contract amendments, renewals, and asset management.',
      'Develop custom components and automation using Apex, Lightning Web Components (LWC), Flow Builder, and advanced approval rules.',
      'Lead integration analysis and connect Salesforce CPQ with enterprise billing, ERP (SAP / NetSuite / Oracle), and financial downstream systems via REST/SOAP APIs.',
      'Perform rigorous Root Cause Analysis (RCA) on pricing discrepancies, quote line calculation failures, and deployment or synchronization defects.',
      'Collaborate with business stakeholders, functional architects, and Agile engineering pods to translate complex commercial pricing models into scalable technical solutions.',
    ],
    requirements: [
      '7+ years of professional Salesforce software development experience, with at least 4+ years of dedicated hands-on Salesforce CPQ / Revenue Cloud engineering.',
      'Deep architectural mastery of Salesforce CPQ: Product Catalog, Product Rules, Pricing Rules, Discount Schedules, Contract Amendments, and Renewal lifecycles.',
      'Strong programming proficiency in Apex (triggers, batch, asynchronous), Lightning Web Components (LWC), and Quote Calculator Plugin (QCP) JavaScript.',
      'Extensive experience in Business Process Analysis, Requirements Gathering, and workflow definition across Quote-to-Cash operations.',
      'Proven hands-on experience in Integration Analysis, enterprise API design, and middleware connectivity.',
      'Demonstrated expertise in systematic Root Cause Analysis (RCA), troubleshooting complex calculation matrices and transaction rollbacks.',
      'Strong understanding of Salesforce security models, permission sets, sharing rules, and deployment best practices.',
    ],
    secondarySkills: [
      'Salesforce Certified CPQ Specialist or Salesforce Revenue Cloud Consultant certification',
      'Integration experience with SAP, Oracle ERP, NetSuite, or Stripe billing engines',
      'Familiarity with DevOps / CI/CD pipelines (Copado, Gearset, GitLab CI, AutoRabbit)',
      'Agile/Scrum delivery experience in global enterprise environments',
    ],
    quickScreening:
      'Salesforce CPQ | Revenue Cloud | Quote-to-Cash (Q2C) | Product Bundles | Pricing Rules | QCP JavaScript | Apex | LWC | Advanced Approvals | Integration Analysis | Root Cause Analysis (RCA)',
    email: 'rashmikotekar@tasknera.com',
  },
  {
    id: 'trx-26056-geotechnical-engineer',
    title: 'Geotechnical Engineer',
    jobCode: 'TRX-26056',
    company: 'TrinexGlobal',
    client: 'LTM',
    department: 'Civil & Geotechnical Engineering',
    category: 'engineering',
    location: 'Pune',
    workMode: 'WFO',
    budget: 'Up to ₹8.4 LPA',
    type: 'Full-Time (FTE) · WFO',
    experience: '1–4 Years',
    summary:
      'We are hiring a Geotechnical Engineer to support international projects across India, the Middle East, London, and New York. The role involves geotechnical investigations, engineering analysis, foundation design, field inspections, and technical report preparation.',
    responsibilities: [
      'Coordinate subsurface investigations, field observations, and geotechnical reporting.',
      'Prepare drilling logs, test pit logs, field reports, and investigation documentation.',
      'Assist with deep foundation design, retaining structures, and excavation support systems.',
      'Perform settlement analysis, liquefaction assessments, and lateral pile analysis.',
      'Support proposals, project coordination, and construction inspections.',
      'Coordinate with international project teams and undertake fieldwork in India.',
      'Travel as required for site investigations and project activities.',
    ],
    requirements: [
      "Bachelor's degree in Civil Engineering or Geotechnical Engineering.",
      '1–4 years of experience in geotechnical investigations, design, or construction inspections.',
      'Experience in fieldwork coordination, geotechnical reporting, and technical documentation.',
      'Strong analytical, communication, and problem-solving skills.',
      'Willingness to undertake fieldwork in India and travel as required.',
    ],
    secondarySkills: [
      "Master's degree in Geotechnical Engineering",
      'Field experience in pile foundations, load testing, earthwork, ground improvement, retaining walls, and excavation support',
      'Familiarity with gINT, SLOPE/W, PLAXIS, LPILE, GRLWEAP, MSEW, or SHAKE',
      'Experience working with international project teams',
    ],
    quickScreening:
      'Geotechnical Engineering | Foundation Design | Subsurface Investigation | Drilling Logs | Settlement Analysis | PLAXIS / gINT | WFO Pune',
    email: 'rashmikotekar@tasknera.com',
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
  const [expandedJobId, setExpandedJobId] = useState<string | null>('freelance-recruiter-remote-pan-india');

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
                    id={job.id}
                    className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-[#704A4B]/40 transition-all flex flex-col justify-between scroll-mt-28"
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
                        {job.budget && (
                          <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                            <DollarSign className="w-3 h-3 text-amber-600" />
                            {job.budget}
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
                                <HeartHandshake className="w-3.5 h-3.5 text-[#704A4B]" />
                                <span>Why Work With Tasknera?</span>
                              </h4>
                              <ul className="space-y-2 text-xs text-slate-600">
                                {job.whyWorkWithUs.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-[#704A4B] flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* How to Apply Details */}
                          {job.howToApplyDetails && job.howToApplyDetails.length > 0 && (
                            <div className="pt-2 border-t border-slate-100 bg-[#F3ECE4]/40 border border-[#DED3C7] rounded-xl p-3.5">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5 text-[#704A4B]" />
                                <span>How to Apply — Details to Include with Your Resume</span>
                              </h4>
                              <ul className="space-y-1.5 text-xs text-slate-700">
                                {job.howToApplyDetails.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                                    <span className="font-semibold text-[#704A4B]">•</span>
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
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F3ECE4]/60 border border-[#DED3C7]/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800">
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#704A4B] flex-shrink-0" />
                        <span>
                          Drop your CV at this email ID:{' '}
                          {(() => {
                            const recruiterEmail = getRecruiterEmail(job.company, job.email);
                            const subject = job.applySubject || `Application for ${job.title}${job.jobCode ? ` [${job.jobCode}]` : ''} [TaskNera Careers]`;
                            const bodyParam = job.applyBody ? `&body=${encodeURIComponent(job.applyBody)}` : '';
                            return (
                              <a
                                href={`mailto:${recruiterEmail}?subject=${encodeURIComponent(subject)}${bodyParam}`}
                                className="font-bold text-[#704A4B] hover:underline"
                              >
                                {recruiterEmail}
                              </a>
                            );
                          })()}
                        </span>
                      </div>
                      {(() => {
                        const recruiterEmail = getRecruiterEmail(job.company, job.email);
                        const subject = job.applySubject || `Application for ${job.title}${job.jobCode ? ` [${job.jobCode}]` : ''} [TaskNera Careers]`;
                        const bodyParam = job.applyBody ? `&body=${encodeURIComponent(job.applyBody)}` : '';
                        return (
                          <a
                            href={`mailto:${recruiterEmail}?subject=${encodeURIComponent(subject)}${bodyParam}`}
                            className="inline-flex items-center justify-center gap-1.5 bg-[#704A4B] hover:bg-[#593A3B] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition-all self-start sm:self-auto"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Apply via Email</span>
                          </a>
                        );
                      })()}
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
                    <a href="mailto:careers@tasknera.com?subject=General Application [TaskNera Careers]" className="font-bold text-[#704A4B] hover:underline">
                      careers@tasknera.com
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
