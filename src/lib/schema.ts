import { companyInfo } from './base44_content';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://tasknera.com/#organization',
  name: 'TaskNera',
  legalName: 'TaskNera',
  url: 'https://tasknera.com',
  logo: 'https://tasknera.com/assets/images/tasknera-logo.png',
  description:
    'TaskNera is a global HR, recruitment, technology and business operations partner helping companies build dependable teams and sustainable operations.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dilshad Colony, Dilshad Garden',
    addressLocality: 'Delhi',
    postalCode: '110095',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: companyInfo.emailOperations,
      contactType: 'customer support',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      email: companyInfo.emailCareers,
      contactType: 'recruitment',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  founder: {
    '@type': 'Person',
    name: companyInfo.founder,
    jobTitle: companyInfo.founderRole,
  },
  sameAs: [companyInfo.linkedin],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://tasknera.com/#website',
  url: 'https://tasknera.com',
  name: 'TaskNera',
  description:
    'TaskNera is your global partner for talent acquisition, HR operations, workforce solutions, and virtual assistance.',
  publisher: {
    '@id': 'https://tasknera.com/#organization',
  },
};

export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://tasknera.com/about#webpage',
  url: 'https://tasknera.com/about',
  name: 'About TaskNera | HR Technology & Recruitment Solutions',
  description:
    'Learn about TaskNera, our mission, and our modern HR technology solutions designed to streamline talent acquisition, workforce operations, and team growth.',
  isPartOf: {
    '@id': 'https://tasknera.com/#website',
  },
  about: {
    '@id': 'https://tasknera.com/#organization',
  },
};

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://tasknera.com/contact#webpage',
  url: 'https://tasknera.com/contact',
  name: 'Contact Us & Consultation Scoping | Tasknera',
  description:
    'Contact Tasknera to schedule a strategic consultation, scope operational headcount requirements, or evaluate our recruitment and HR software solutions.',
  isPartOf: {
    '@id': 'https://tasknera.com/#website',
  },
  mainEntity: {
    '@id': 'https://tasknera.com/#organization',
  },
};

export const servicesOverviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://tasknera.com/services#webpage',
  url: 'https://tasknera.com/services',
  name: 'HRMS & Recruitment Services | Tasknera',
  description:
    'Explore Tasknera comprehensive services across HR operations, talent acquisition, contract staffing, virtual assistance, and modern HRMS technology platforms.',
  isPartOf: {
    '@id': 'https://tasknera.com/#website',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'HR & People Operations',
        url: 'https://tasknera.com/services/hr-operations',
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Talent Acquisition & Recruitment',
        url: 'https://tasknera.com/services/talent-acquisition',
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'Workforce Solutions',
        url: 'https://tasknera.com/services/workforce-solutions',
      },
      {
        '@type': 'Service',
        position: 4,
        name: 'Virtual Assistant & Business Support',
        url: 'https://tasknera.com/services/virtual-assistants',
      },
      {
        '@type': 'Service',
        position: 5,
        name: 'Technology & Software Development',
        url: 'https://tasknera.com/services/technology',
      },
      {
        '@type': 'SoftwareApplication',
        position: 6,
        name: 'HireIQ',
        url: 'https://tasknera.com/services/hireiq',
      },
      {
        '@type': 'SoftwareApplication',
        position: 7,
        name: 'TaskNera HRMS',
        url: 'https://tasknera.com/services/hrms',
      },
    ],
  },
};

export function buildFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType: serviceType || name,
    provider: {
      '@type': 'Organization',
      name: 'TaskNera',
      url: 'https://tasknera.com',
    },
    areaServed: ['IN', 'US', 'GB', 'EU'],
  };
}

export function buildSoftwareAppSchema({
  name,
  description,
  url,
  applicationCategory,
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: applicationCategory || 'BusinessApplication',
    operatingSystem: 'Cloud / Web Browser',
    creator: {
      '@type': 'Organization',
      name: 'TaskNera',
      url: 'https://tasknera.com',
    },
  };
}

export function buildWebPageSchema({
  type = 'WebPage',
  name,
  description,
  url,
}: {
  type?: string;
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    isPartOf: {
      '@id': 'https://tasknera.com/#website',
    },
    publisher: {
      '@id': 'https://tasknera.com/#organization',
    },
  };
}
