export type SolutionPage = {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  heading: string;
  intro: string;
  bullets: string[];
  faq: Array<{ q: string; a: string }>;
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "ai-automation-agency-surrey",
    keyword: "AI automation agency Surrey",
    title: "AI Automation Agency in Surrey",
    metaDescription:
      "Jungle Labs is an AI automation agency in Surrey helping businesses automate workflows, reduce manual operations, and improve speed.",
    heading: "AI Automation Agency in Surrey for Fast-Growth Teams",
    intro:
      "We design and deploy AI-driven automation systems for teams that need operational speed and consistency across customer, sales, and delivery workflows.",
    bullets: [
      "Automation mapping for sales, support, and fulfillment",
      "AI-assisted workflow orchestration with approval controls",
      "Live KPI tracking to measure automation impact"
    ],
    faq: [
      {
        q: "What does an AI automation agency do?",
        a: "An AI automation agency designs systems that replace repetitive manual processes with intelligent workflows integrated into your existing tools."
      },
      {
        q: "How long does implementation take?",
        a: "Most projects start with a 1-2 week discovery sprint, then deploy in phases over 4-8 weeks depending on complexity."
      }
    ]
  },
  {
    slug: "custom-crm-development-canada",
    keyword: "custom CRM development Canada",
    title: "Custom CRM Development in Canada",
    metaDescription:
      "Custom CRM development in Canada built around your exact sales and service process. Jungle Labs designs CRM systems for scale.",
    heading: "Custom CRM Development in Canada",
    intro:
      "We build CRM systems aligned to your real process, team structure, and reporting needs so your pipeline works exactly the way your business operates.",
    bullets: [
      "Custom lifecycle stages and automations",
      "Role-based dashboards for sales and operations",
      "Integration with communication and marketing tools"
    ],
    faq: [
      {
        q: "Why choose custom CRM over off-the-shelf?",
        a: "Custom CRM avoids workflow compromises and allows automation, permissions, and reporting tailored to your model."
      },
      {
        q: "Can you migrate from existing CRM tools?",
        a: "Yes. We handle data mapping, migration planning, and phased transition to minimize business disruption."
      }
    ]
  },
  {
    slug: "business-intelligence-dashboard-services",
    keyword: "business intelligence dashboard services",
    title: "Business Intelligence Dashboard Services",
    metaDescription:
      "Business intelligence dashboard services by Jungle Labs. Build live KPI systems for budgeting, operations, and growth decisions.",
    heading: "Business Intelligence Dashboard Services",
    intro:
      "We build executive-ready dashboard systems that connect your data, surface decision-critical metrics, and reduce reporting delays.",
    bullets: [
      "KPI architecture and metric definitions",
      "Realtime budget and performance reporting",
      "Alerting and trend diagnostics"
    ],
    faq: [
      {
        q: "What data sources can be connected?",
        a: "We connect CRM, ad platforms, finance tools, operational databases, and custom business systems."
      },
      {
        q: "Do dashboards include forecasting?",
        a: "Yes. We can include forecasting and variance views for planning and budget control."
      }
    ]
  },
  {
    slug: "restaurant-tablet-ordering-system",
    keyword: "restaurant tablet ordering system",
    title: "Restaurant Tablet Ordering System",
    metaDescription:
      "Restaurant tablet ordering system with live status updates, table-side ordering, and kitchen workflow integration by Jungle Labs.",
    heading: "Restaurant Tablet Ordering System for Faster Service",
    intro:
      "Our restaurant platform combines table-side ordering, waiter call routing, and live kitchen sync so teams serve faster with fewer handoff errors.",
    bullets: [
      "Table ordering interface for dine-in customers",
      "Order sync across table, staff, and kitchen",
      "Operational flow designed for high-volume service"
    ],
    faq: [
      {
        q: "Can this work in existing restaurants?",
        a: "Yes. We integrate with current workflows and can roll out by section or full floor in phases."
      },
      {
        q: "Can menus and availability update in real time?",
        a: "Yes. Menu, out-of-stock, and pricing updates can be pushed live to tablet ordering screens."
      }
    ]
  },
  {
    slug: "kitchen-display-system-software",
    keyword: "kitchen display system software",
    title: "Kitchen Display System Software",
    metaDescription:
      "Kitchen display system software for restaurants that need reliable ticket flow, prep visibility, and order status control.",
    heading: "Kitchen Display System Software Built for Throughput",
    intro:
      "We build KDS software that gives kitchen teams live ticket visibility, clear prep sequencing, and reliable status progression.",
    bullets: [
      "Realtime order queue with status transitions",
      "Station-based visibility for prep teams",
      "Status updates synced to floor and table"
    ],
    faq: [
      {
        q: "Can KDS connect to table or POS ordering?",
        a: "Yes. We connect KDS with table ordering and POS systems to keep all order states synchronized."
      },
      {
        q: "Do you support custom kitchen workflows?",
        a: "Yes. We model workflow states and notifications around your actual prep and pass process."
      }
    ]
  },
  {
    slug: "ai-software-development-agency-bc",
    keyword: "AI software development agency BC",
    title: "AI Software Development Agency in BC",
    metaDescription:
      "AI software development agency in BC building automation platforms, custom applications, and analytics systems for modern businesses.",
    heading: "AI Software Development Agency in BC",
    intro:
      "Jungle Labs designs and ships AI-enabled software products in BC for teams that need reliable execution, not experimentation.",
    bullets: [
      "Product architecture and technical roadmap",
      "Web and mobile application development",
      "AI modules integrated into business workflows"
    ],
    faq: [
      {
        q: "Do you build MVP and scale versions?",
        a: "Yes. We ship an MVP quickly, then expand based on performance data and operational priorities."
      },
      {
        q: "What industries do you support?",
        a: "We support service businesses, hospitality, education, and operations-heavy teams needing automation and reporting."
      }
    ]
  },
  {
    slug: "workflow-automation-for-small-business",
    keyword: "workflow automation for small business",
    title: "Workflow Automation for Small Business",
    metaDescription:
      "Workflow automation for small business to reduce manual tasks, speed delivery, and improve customer response consistency.",
    heading: "Workflow Automation for Small Business Teams",
    intro:
      "We help small businesses automate high-friction workflows so owners and teams can focus on growth instead of repetitive coordination tasks.",
    bullets: [
      "Lead routing and response automation",
      "Client intake and follow-up workflows",
      "Performance tracking for automated processes"
    ],
    faq: [
      {
        q: "Is automation affordable for small business?",
        a: "Yes. We prioritize high-ROI workflows first so automation pays for itself through saved time and faster response."
      },
      {
        q: "Will this replace my team?",
        a: "No. The goal is to remove repetitive workload so your team can focus on high-value customer and growth work."
      }
    ]
  }
];

export function getSolutionBySlug(slug: string) {
  return solutionPages.find((page) => page.slug === slug) ?? null;
}
