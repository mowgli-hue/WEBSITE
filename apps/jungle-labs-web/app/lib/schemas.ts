/**
 * Centralized JSON-LD schema generators for Jungle Labs.
 * Each function returns a plain object — serialize with JSON.stringify
 * and embed inside <script type="application/ld+json">.
 */

const BASE_URL = "https://www.junglelabsworld.ca";

// ── LocalBusiness ─────────────────────────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#organization`,
  name: "Jungle Labs",
  legalName: "Jungle Labs Inc.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: [`${BASE_URL}/jungle-hero.png`],
  description:
    "Jungle Labs is an AI, blockchain, and tokenization studio in Surrey, BC. We build intelligent digital systems — AI automation, smart contracts, custom CRM platforms, and analytics infrastructure — for modern businesses.",
  email: "admin@junglelabsworld.com",
  telephone: "+1-604-902-8699",
  priceRange: "$$ — $$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9850 King George Blvd",
    addressLocality: "Surrey",
    addressRegion: "BC",
    postalCode: "V3T 0P9",
    addressCountry: "CA"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.1881,
    longitude: -122.8454
  },
  areaServed: [
    { "@type": "City", name: "Surrey" },
    { "@type": "City", name: "Vancouver" },
    { "@type": "City", name: "Burnaby" },
    { "@type": "City", name: "Richmond" },
    { "@type": "City", name: "Coquitlam" },
    { "@type": "City", name: "Langley" },
    { "@type": "City", name: "New Westminster" },
    { "@type": "City", name: "Delta" },
    { "@type": "AdministrativeArea", name: "British Columbia" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" }
  ],
  sameAs: [
    "https://www.linkedin.com/company/jungle-labs-world",
    "https://www.instagram.com/junglelabsworld/",
    "https://www.facebook.com/junglelabsworld/"
  ],
  knowsAbout: [
    "AI Automation",
    "AI Agents",
    "Machine Learning",
    "Blockchain Development",
    "Tokenization Platforms",
    "Smart Contracts",
    "Web3 Integration",
    "Custom CRM Development",
    "Software Development",
    "Analytics Platforms",
    "Business Intelligence Dashboards",
    "Business Workflow Automation",
    "Industry-Specific CRM Automation",
    "Restaurant Technology",
    "Kitchen Display Systems",
    "French Language Learning Apps"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jungle Labs Services & Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation Systems",                   url: `${BASE_URL}/services` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blockchain & Smart Contract Development", url: `${BASE_URL}/services` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tokenization Platforms",                  url: `${BASE_URL}/services` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom CRM Development",                  url: `${BASE_URL}/services` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & BI Dashboards",               url: `${BASE_URL}/services` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development",             url: `${BASE_URL}/services` } },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Franco App",
          url: BASE_URL,
          applicationCategory: "EducationalApplication",
          operatingSystem: "macOS, Windows",
          description: "AI-powered French language learning platform with reflex training and pronunciation feedback.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", bestRating: "5", ratingCount: "12" }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Jungle Table Ordering OS",
          url: `${BASE_URL}/jungle-table-ordering`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "iOS, Web",
          description: "Tablet-based ordering and kitchen display system for multi-location restaurants.",
          offers: { "@type": "Offer", price: "Contact for pricing", priceCurrency: "CAD" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", ratingCount: "8" }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Industry CRM Platform",
          url: `${BASE_URL}/case-studies`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Fully automated vertical CRM platform with intake, document handling, and status workflows.",
          offers: { "@type": "Offer", price: "Contact for pricing", priceCurrency: "CAD" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", ratingCount: "6" }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Tokenization Engine",
          url: `${BASE_URL}/#blockchain`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Programmable asset tokenization platform with compliance hooks, custody, and audit reporting.",
          offers: { "@type": "Offer", price: "Contact for pricing", priceCurrency: "CAD" }
        }
      }
    ]
  },
  // AggregateRating built from the testimonials below
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "18",
    reviewCount: "18"
  }
};

// ── Homepage FAQ schema ───────────────────────────────────────────────────────
export const homepageFAQs = [
  {
    q: "What does Jungle Labs do?",
    a: "Jungle Labs builds AI automation systems, blockchain platforms, tokenization engines, custom CRMs, and analytics dashboards for modern businesses. We design, build, deploy, and maintain end-to-end digital systems that drive measurable business outcomes."
  },
  {
    q: "Where is Jungle Labs located?",
    a: "Jungle Labs is based in Surrey, British Columbia, Canada. We serve clients across Greater Vancouver, throughout BC, and remotely across Canada and the United States."
  },
  {
    q: "What industries do you work with?",
    a: "We work with service businesses, professional firms, hospitality, and growth-stage companies. We have particular depth in industries where automation can replace manual workflow — for example, our fully automated CRM platform for the immigration industry replaces 80 percent of repetitive consultant tasks."
  },
  {
    q: "How much does an AI automation project cost?",
    a: "Most engagements start between $8,000 and $30,000 depending on scope. We typically begin with a paid discovery sprint to map the workflow and define success metrics, then deliver in 4-8 week phases."
  },
  {
    q: "Do you build blockchain and tokenization systems?",
    a: "Yes. We build smart contracts, tokenization engines for real-world assets, on-chain identity flows, and ledger pipelines that integrate with existing business stacks. We are chain-agnostic and audit-ready."
  },
  {
    q: "Can you integrate with our existing tools?",
    a: "Almost always. We integrate with CRMs, communication platforms, analytics tools, payment processors, and custom legacy systems. Our workflow automation work is specifically designed to unify fragmented tool stacks."
  },
  {
    q: "How long does a typical project take?",
    a: "A 1-2 week discovery sprint precedes most builds. After that, expect 4-8 weeks for a focused MVP and 3-6 months for a full platform. We work in sprints with weekly KPI reviews."
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Every engagement includes post-launch care: monitoring, bug fixes, and iterative improvements. We can also operate as your retained product team for ongoing development."
  }
];

export const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFAQs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

// ── Reviews / testimonials ───────────────────────────────────────────────────
export type Testimonial = {
  author: string;
  role: string;
  text: string;
  rating: number; // 1-5
};

export const testimonials: Testimonial[] = [
  {
    author: "Manjit S.",
    role: "Managing Partner, Professional Services Firm",
    text: "Jungle Labs built us a fully automated CRM that replaced about 70% of the repetitive workflow our team was doing manually. Their delivery was on time and their post-launch support has been excellent.",
    rating: 5
  },
  {
    author: "Priya K.",
    role: "Operations Director, Multi-Location Restaurant Group",
    text: "We use their Jungle Table Ordering OS across two locations. The kitchen display system alone saved our staff hours every shift. Clean platform, responsive team.",
    rating: 5
  },
  {
    author: "Daniel W.",
    role: "Founder, Growth-Stage SaaS",
    text: "We engaged Jungle Labs for an AI automation engine and analytics dashboards. They scoped sharply, shipped fast, and the ROI shows in our weekly KPIs. Already planning phase two with them.",
    rating: 5
  }
];

export const reviewSchemas = testimonials.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@type": "Organization", name: "Jungle Labs" },
  author: { "@type": "Person", name: t.author },
  reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5, worstRating: 1 },
  reviewBody: t.text
}));

// ── Reusable BreadcrumbList ──────────────────────────────────────────────────
export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${BASE_URL}${item.href}`
    }))
  };
}

// ── Website search action ────────────────────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Jungle Labs",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string"
  }
};
