'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';

const policies = [
  {
    id: 'remote-work',
    title: 'Remote Work Policy',
    category: 'Operational Standards',
    summary: 'Framework guiding distributed collaboration, home workspace ergonomics, and device standards.',
    details: [
      'TaskNera operates with a hybrid and remote-first workforce model across global timezones.',
      'Team members are responsible for maintaining an ergonomically sound, distraction-free, and secure work environment.',
      'High-speed, reliable internet connection with backup arrangements is required for client-facing and operational roles.',
      'Hardware and digital environments must comply with company security baseline standards at all times.',
    ],
  },
  {
    id: 'workplace-conduct',
    title: 'Workplace Conduct & Professional Ethics',
    category: 'Ethics & Integrity',
    summary: 'Expectations of professional behavior, mutual respect, and honest business interactions.',
    details: [
      'Every team member is expected to conduct themselves with integrity, courtesy, and high professional standards.',
      'Harassment, abusive language, bullying, or intimidation of any kind in any medium is strictly prohibited.',
      'We treat clients, candidates, partners, and colleagues with equal dignity and transparency.',
      'Conflicts of interest must be disclosed promptly to designated management personnel.',
    ],
  },
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct',
    category: 'Ethics & Integrity',
    summary: 'Core ethical principles guiding day-to-day decisions, client stewardship, and team relationships.',
    details: [
      'Uphold our fiduciary duty to represent client requirements faithfully and provide objective advice.',
      'Maintain honesty in all representations regarding talent competencies, delivery timelines, and project statuses.',
      'Compliance with all applicable local, regional, and national labor laws governing our operational jurisdictions.',
      'Protection and proper usage of company assets, tools, and proprietary methodologies.',
    ],
  },
  {
    id: 'equal-opportunity',
    title: 'Equal Opportunity & Non-Discrimination',
    category: 'Workplace Culture',
    summary: 'Commitment to merit-based progression, diversity, inclusion, and a prejudice-free workplace.',
    details: [
      'TaskNera provides equal employment opportunities to all team members and applicants.',
      'Decisions on hiring, compensation, promotion, and development are based entirely on merit, performance, and business requirements.',
      'Discrimination based on race, color, religion, gender, age, sexual orientation, disability, or marital status is strictly prohibited.',
      'We actively encourage inclusive practices and psychological safety across distributed communication channels.',
    ],
  },
  {
    id: 'privacy-data-protection',
    title: 'Employee Privacy & Data Protection',
    category: 'Data & Security',
    summary: 'Safeguarding personal data collected during internal operations, recruitment, and HR administration.',
    details: [
      'Personal data belonging to employees, contractors, and job candidates is collected solely for legitimate business and regulatory purposes.',
      'Access to internal HR records, identification credentials, and financial information is strictly restricted on a need-to-know basis.',
      'Data handling adheres to data privacy standards and applicable regional privacy regulations.',
      'Employees have the right to review and request correction of their personal data on file.',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Information & Cybersecurity Policy',
    category: 'Data & Security',
    summary: 'Mandatory technical precautions to prevent data loss, unauthorized access, and digital breaches.',
    details: [
      'Mandatory multi-factor authentication (MFA) across all email, CRM, HRMS, and client management systems.',
      'Strict prohibition against saving confidential customer, candidate, or business data onto unencrypted personal devices.',
      'Regular operating system and software security patching is required on all workstations.',
      'Immediate reporting protocol for suspected phishing attempts, unauthorized account activity, or device losses.',
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality & Intellectual Property',
    category: 'Data & Security',
    summary: 'Protection of proprietary corporate information, training documentation, and client assets.',
    details: [
      'All internal documents, client briefs, candidate databases, pricing matrices, and business strategies are strictly confidential.',
      'Non-disclosure agreements (NDAs) are signed by all staff and contractors prior to engagement commencement.',
      'Confidentiality obligations survive the termination of employment or contractor association.',
      'Work produced during business engagements remains the property of TaskNera or the designated client per contractual terms.',
    ],
  },
  {
    id: 'client-confidentiality',
    title: 'Client Confidentiality',
    category: 'Client Care',
    summary: 'Rigorous measures ensuring client proprietary strategies, customer data, and candidate pipelines remain confidential.',
    details: [
      'Client business information, recruitment roadmaps, and org charts are never shared outside authorized engagement teams.',
      'Dedicated project pods operate with siloed access to client databases, preventing cross-client data contamination.',
      'Client communication adheres to secure channels specified in respective service level agreements.',
      'Secure disposal or return of client data upon engagement conclusion in accordance with contract terms.',
    ],
  },
  {
    id: 'communication',
    title: 'Communication & Collaboration Standards',
    category: 'Operational Standards',
    summary: 'Clear, timely, and transparent asynchronous and synchronous communication protocols.',
    details: [
      'Core overlap hours are established for teams collaborating across differing regional timezones.',
      'Written communication via authorized platforms (Slack, Teams, Email) should be structured, concise, and professional.',
      'Meeting etiquette includes having clear agendas, timely attendance, and documented action items.',
      'Transparency and proactive flagging of potential delays or bottlenecks are encouraged over retroactive explanations.',
    ],
  },
  {
    id: 'working-hours',
    title: 'Working Hours & Availability',
    category: 'Operational Standards',
    summary: 'Balancing client coverage with individual work-life boundaries and predictable schedules.',
    details: [
      'Standard shift hours are agreed upon per engagement (e.g., IST, GMT, or EST operational windows).',
      'Team members maintain clear calendar statuses indicating working hours, focus time, and out-of-office status.',
      'Expectations for response times during active shifts are defined in team charters, respecting off-hour boundaries.',
      'Overtime, when required for operational spikes, requires advance management approval.',
    ],
  },
  {
    id: 'leave-policy',
    title: 'Leave & Time-Off Policy',
    category: 'Workplace Culture',
    summary: 'Guidelines for planned vacations, sick leave, statutory holidays, and emergency time-off.',
    details: [
      'Team members are entitled to annual leave, national holidays, and medical leaves as outlined in their service contracts.',
      'Planned leaves must be submitted through the internal portal with sufficient notice to ensure uninterrupted client coverage.',
      'Adequate handover documentation and coverage coordination is required before commencing scheduled time-off.',
      'Compassionate leave is supported during unforeseen personal or family emergencies.',
    ],
  },
  {
    id: 'performance',
    title: 'Performance & Accountability',
    category: 'Operational Standards',
    summary: 'Transparent benchmarks, regular feedback loops, and objective performance evaluations.',
    details: [
      'Performance is measured by outcomes, deliverable quality, and SLA adherence rather than arbitrary screen-time metrics.',
      'Team members receive regular 1-on-1 feedback and quarterly reviews against agreed OKRs and role competencies.',
      'Underperformance is addressed supportively through structured coaching and clear improvement milestones.',
      'Excellence and continuous professional growth are recognized and rewarded.',
    ],
  },
  {
    id: 'grievance',
    title: 'Grievance & Reporting Process',
    category: 'Ethics & Integrity',
    summary: 'Safe, confidential mechanism for reporting concerns, policy violations, or workplace friction.',
    details: [
      'Employees and contractors have the right to voice concerns without fear of retaliation or adverse career impact.',
      'Grievances may be reported directly to team leads, HR leadership, or via the confidential email: operations@tasknera.com.',
      'All reports are investigated promptly, impartially, and with the highest level of discretion.',
      'Appropriate corrective actions are documented and communicated to involved parties upon inquiry completion.',
    ],
  },
];

const commitments = [
  {
    title: 'To Our Remote Team',
    items: [
      'A culture rooted in trust, autonomy, and respectful communication.',
      'Clear goals, necessary toolstack access, and transparent performance expectations.',
      'Respect for personal boundaries, local holidays, and healthy work-life balance.',
      'Opportunities for continuous domain learning and career advancement.',
    ],
  },
  {
    title: 'To Our Clients & Partners',
    items: [
      'Uncompromising confidentiality and data protection at every touchpoint.',
      'Full transparency regarding candidate qualifications, sourcing, and operational progress.',
      'Vetted, highly qualified human professionals aligned directly with your business goals.',
      'Continuous quality monitoring, active account management, and responsive communication.',
    ],
  },
  {
    title: 'To Job Candidates',
    items: [
      'Objective, respectful, and transparent evaluation processes without hidden bias.',
      'Timely feedback and status updates throughout the interview lifecycle.',
      'Honest role descriptions, realistic expectations, and fair market compensation alignment.',
      'Strict confidentiality regarding your active candidacy and personal documents.',
    ],
  },
];

export default function WorkplacePoliciesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openPolicy, setOpenPolicy] = useState<string | null>('remote-work');

  const categories = ['All', 'Operational Standards', 'Ethics & Integrity', 'Data & Security', 'Workplace Culture', 'Client Care'];

  const filteredPolicies =
    activeCategory === 'All'
      ? policies
      : policies.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-16 sm:pt-20">
        
        {/* ── Page Hero ── */}
        <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-white/90 tracking-widest uppercase">
                  Transparency &amp; Governance
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-display font-700 text-white leading-tight">
                Workplace Policies &amp;{' '}
                <span className="gradient-text-coral">Commitments</span>
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                How TaskNera operates as a global, remote-first organization. We believe that transparent principles, clear expectations, and ethical standards create high-performing teams and trusted client partnerships.
              </p>

              <div className="pt-2 text-xs text-white/50 italic">
                * Note: These policies establish our operational governance standards and workplace expectations. Internal legal revisions are reviewed periodically by company management.
              </div>
            </div>
          </div>
        </section>

        {/* ── Workplace Commitments Area (Requirement 11) ── */}
        <section className="py-16 sm:py-20 bg-muted/40 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                Our Foundation
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-700 text-foreground">
                Workplace Commitments
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                Core promises that anchor our relationships with employees, clients, and candidates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {commitments.map((c) => (
                <div
                  key={c.title}
                  className="bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display font-700 text-foreground text-lg mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {c.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {c.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-accent font-bold mt-0.5">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Detailed Policy Directory ── */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Policy Accordion Cards */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredPolicies.map((policy) => {
                const isOpen = openPolicy === policy.id;
                return (
                  <div
                    key={policy.id}
                    className="border border-border rounded-2xl bg-card overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenPolicy(isOpen ? null : policy.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1 pr-4">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                            {policy.category}
                          </span>
                        </div>
                        <h3 className="font-display font-700 text-foreground text-base sm:text-lg">
                          {policy.title}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-1">
                          {policy.summary}
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-foreground text-sm font-bold">
                        {isOpen ? '−' : '+'}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-border/60 bg-muted/10 space-y-3">
                        <div className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                          Policy Provisions &amp; Standards:
                        </div>
                        <ul className="space-y-2">
                          {policy.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                              <span className="text-accent mt-1 text-xs">✓</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── Contact / Inquiry Banner ── */}
        <section className="py-14 bg-muted border-t border-border">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <h3 className="font-display font-700 text-xl text-foreground">
              Questions Regarding Governance &amp; Compliance?
            </h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Our operations and management team is available to provide detailed onboarding policies, data processing agreements, and mutual NDAs for prospective clients and partners.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Contact Operations Team
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
