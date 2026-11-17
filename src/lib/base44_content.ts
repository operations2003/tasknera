/**
 * TaskNera content and data definitions from Base44 (https://task-nera-scale.base44.app/)
 */

export interface CompanyInfo {
  company: string;
  legalName: string;
  positioning: string;
  message: string;
  supporting: string;
  emailOperations: string;
  emailCareers: string;
  emailPartners: string;
  emailFounder: string;
  address: string;
  linkedin: string;
  founded: string;
  founder: string;
  founderRole: string;
  founderExperience: string;
  responseSla: string;
}

export const companyInfo: CompanyInfo = {
  company: "TaskNera",
  legalName: "TaskNera",
  positioning: "Global HR, Recruitment, Technology & Business Operations Partner",
  message: "Build. Manage. Scale.",
  supporting: "One Partner. People, Technology & Operations.",
  emailOperations: "operations@tasknera.com",
  emailCareers: "careers@tasknera.com",
  emailPartners: "partners@tasknera.com",
  emailFounder: "sheetalbedi@tasknera.com",
  address: "Dilshad Colony, Dilshad Garden, Delhi – 110095, India",
  linkedin: "https://www.linkedin.com/company/tasknera-global",
  founded: "2026",
  founder: "Sheetal Bedi",
  founderRole: "Founder & Chief Executive Officer",
  founderExperience: "8+ years across talent acquisition, HR operations and workforce management",
  responseSla: "Response within 1 business day",
};

export interface CapabilityItem {
  title: string;
  text: string;
}

export const capabilities: CapabilityItem[] = [
  {
    title: "Global Talent Access",
    text: "Sourcing and pre-vetting across India, the US, the UK, Europe and distributed global talent pools.",
  },
  {
    title: "Integrated HR Operations",
    text: "Employee lifecycle, documentation, payroll coordination and compliance support under one accountable team.",
  },
  {
    title: "Technology-Enabled Delivery",
    text: "HireIQ screening intelligence and HRMS platforms built into how every engagement is delivered.",
  },
  {
    title: "Flexible Workforce Solutions",
    text: "Contract staffing, dedicated pods and managed teams that flex with demand instead of locking you in.",
  },
  {
    title: "Dedicated Business Support",
    text: "Executive assistance, back-office operations and administrative leverage handled by trained, accountable professionals.",
  },
];

export interface AudienceItem {
  key: string;
  kicker: string;
  title: string;
  challenge: string;
  help: string[];
}

export const audiences: AudienceItem[] = [
  {
    key: "startups",
    kicker: "Build & Establish",
    title: "Startups",
    challenge:
      "Early teams are hired fast, out of sequence and without HR infrastructure — every wrong hire or missing document slows the next stage.",
    help: [
      "Contingent hiring for founding and critical roles",
      "Structured offer documentation and onboarding",
      "Fractional HR and virtual assistant support for founders",
    ],
  },
  {
    key: "smes",
    kicker: "Scale with Agility",
    title: "Growing SMEs",
    challenge:
      "Headcount grows faster than process, so payroll inputs, records and performance conversations become ad-hoc.",
    help: [
      "Managed HR operations and payroll coordination",
      "HR policies, records and performance frameworks",
      "Executive administration and virtual assistant pods",
    ],
  },
  {
    key: "enterprises",
    kicker: "Managed Operational Scale",
    title: "Enterprises",
    challenge:
      "Specialist hiring and support capacity move slower than business units need, and vendor sprawl dilutes accountability.",
    help: [
      "Dedicated recruiter pods and RPO engagements",
      "Contract and volume workforce deployment",
      "Specialized operations and administrative teams",
    ],
  },
  {
    key: "international",
    kicker: "Cross-Border Delivery",
    title: "International Companies",
    challenge:
      "Global hiring and support require timezone coverage, local knowledge and governance that is hard to build remotely.",
    help: [
      "Cross-border sourcing and pre-vetting",
      "Timezone-aligned virtual assistant and support pods",
      "NDA-governed remote delivery and reporting",
    ],
  },
  {
    key: "india",
    kicker: "India Market Entry",
    title: "Businesses Expanding into India",
    challenge:
      "Entering India means understanding local employment norms, documentation and talent expectations from day one.",
    help: [
      "In-country talent mapping and hiring",
      "Employment documentation and HR structuring",
      "A ready operating desk to launch with",
    ],
  },
];

export const industriesList = [
  { name: "IT, SaaS & Technology", sub: "Engineering, product, QA, DevOps" },
  { name: "Healthcare & Life Sciences", sub: "Clinical operations, billing, patient support" },
  { name: "Manufacturing", sub: "Supply chain, plant operations, procurement" },
  { name: "Retail & E-commerce", sub: "Catalog, supply chain, store operations" },
  { name: "BFSI & Fintech", sub: "Risk, compliance, financial operations" },
  { name: "Logistics & Supply Chain", sub: "Dispatch, fleet, freight operations" },
  { name: "EdTech & Education", sub: "Admissions, student support, counselling" },
  { name: "Digital Media & Agencies", sub: "Account management, content, performance" },
  { name: "Professional Consulting", sub: "Business analysis, project coordination" },
  { name: "Hospitality & Real Estate", sub: "Guest care, bookings, facility management" },
  { name: "Startups & Scale-ups", sub: "Founding teams, rapid hiring pods" },
  { name: "Finance & Accounting", sub: "Bookkeeping, tax, controller support" },
];

export interface WhyTaskNeraItem {
  title: string;
  text: string;
}

export const whyTaskNeraList: WhyTaskNeraItem[] = [
  {
    title: "Integrated Business Solutions",
    text: "Hiring, HR, workforce, support and technology delivered by one accountable partner instead of four disconnected vendors.",
  },
  {
    title: "Flexible Engagement Models",
    text: "Start with a single role, a dedicated professional or a managed function — and change the model as your needs change.",
  },
  {
    title: "Technology-Enabled Delivery",
    text: "HireIQ screening and HRMS platforms are built into delivery, so decisions are documented and visible.",
  },
  {
    title: "Structured Recruitment Processes",
    text: "Defined intake, calibrated screening, interview coordination and documented offer management on every mandate.",
  },
  {
    title: "Dedicated Account Management",
    text: "A named point of contact who understands your business, your timelines and the people deployed to you.",
  },
  {
    title: "Transparent Communication",
    text: "Regular reporting, agreed service levels and honest status updates — including when something needs to change.",
  },
  {
    title: "Scalable Workforce Models",
    text: "Capacity that expands with demand and contracts without long-term overhead or restructuring exercises.",
  },
  {
    title: "Quality and Accountability",
    text: "Pre-vetted professionals, supervisory review and defined quality checks on every delivery stream.",
  },
];

export interface HowWeWorkStep {
  step: string;
  title: string;
  text: string;
}

export const howWeWorkSteps: HowWeWorkStep[] = [
  {
    step: "01",
    title: "Understand",
    text: "We start with your business, hiring requirements and operational challenges — not a service catalogue.",
  },
  {
    step: "02",
    title: "Strategize",
    text: "We design the service model, workforce plan and delivery structure that fit your stage and budget.",
  },
  {
    step: "03",
    title: "Execute",
    text: "Our teams run recruitment, HR operations, technology or support requirements against agreed service levels.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    text: "We monitor performance, improve delivery and expand capacity as your business grows.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const homepageFaqs: FaqItem[] = [
  {
    q: "What services does TaskNera provide?",
    a: "TaskNera delivers HR and people operations, talent acquisition and recruitment, workforce solutions, virtual assistant and business support, technology and software development, plus our HireIQ recruitment intelligence and TaskNera HRMS platforms. Engagements can be single-service or fully integrated under one partner.",
  },
  {
    q: "Does TaskNera work with international companies?",
    a: "Yes. We support clients across India, the United States, the United Kingdom, Europe and distributed remote markets. Delivery is remote-first with timezone-aligned teams, defined communication rhythms and confidentiality agreements in place before work begins.",
  },
  {
    q: "Can startups work with TaskNera?",
    a: "Startups are a core segment. We frequently begin with a single critical hire or a fractional virtual assistant and expand into HR operations and dedicated support as the team grows.",
  },
  {
    q: "How does recruitment outsourcing work?",
    a: "We take ownership of an agreed hiring scope — intake, sourcing, screening, interview coordination and offer support — and report against defined service levels. It can cover one role, a hiring campaign or your entire recruitment function.",
  },
  {
    q: "Does TaskNera provide remote employees?",
    a: "Yes. We deploy dedicated remote professionals for HR, virtual assistance, operations, recruitment and technology roles. They work full-time or part-time against your processes and are supported by a TaskNera team lead.",
  },
  {
    q: "What is HireIQ?",
    a: "HireIQ is TaskNera's AI recruitment intelligence platform. It parses resumes, reads job descriptions, validates mandatory requirements and produces a deterministic 100-point candidate score with evidence drawn from the candidate's own resume — so shortlists are explainable rather than opaque.",
  },
  {
    q: "What is TaskNera HRMS?",
    a: "TaskNera HRMS is our workforce management platform for employee records, attendance and leave, task tracking, HR operations and organizational dashboards. It gives growing companies a single system for people data.",
  },
  {
    q: "How can businesses request a consultation?",
    a: "Send an enquiry through the consultation form, email operations@tasknera.com, or request a call. We respond within one business day with next steps and, where useful, a short scoping conversation.",
  },
  {
    q: "What engagement models are available?",
    a: "Project-based, monthly retainer, dedicated resource, recruitment success fee, contract staffing, managed service and custom enterprise engagements. Commercials depend on scope, and pricing is quoted per requirement rather than published as a fixed rate card.",
  },
];

export interface EngagementModelItem {
  title: string;
  text: string;
  best: string;
}

export const engagementModelsList: EngagementModelItem[] = [
  {
    title: "Project-Based",
    text: "A defined scope with a clear start, milestones and end date — suited to HRMS implementation, policy builds or a one-off recruitment campaign.",
    best: "Defined scope, fixed timeline",
  },
  {
    title: "Monthly Retainer",
    text: "An ongoing monthly engagement for HR operations, support desks or recruitment capacity, with agreed service levels and reporting.",
    best: "Continuous operational support",
  },
  {
    title: "Dedicated Resource",
    text: "A named professional — or a pod of them — working full-time against your processes, tools and priorities.",
    best: "Embedded long-term capacity",
  },
  {
    title: "Recruitment Success Fee",
    text: "You pay when a placement is confirmed. Calibrated shortlists, documented screening and offer support included.",
    best: "Individual and specialist roles",
  },
  {
    title: "Contract Staffing",
    text: "Pre-vetted professionals deployed for a project, season or surge, with TaskNera managing the employment and documentation.",
    best: "Temporary and volume demand",
  },
  {
    title: "Managed Service",
    text: "TaskNera owns an entire function — a support desk, a recruitment pipeline or HR administration — against defined service levels.",
    best: "Full-function ownership",
  },
  {
    title: "Custom Enterprise Engagement",
    text: "Multi-stream structures combining recruitment, HR, workforce and technology with governance, review cadence and executive reporting.",
    best: "Complex, multi-country operations",
  },
];

