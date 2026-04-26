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
  },
  {
    slug: "ircc-portal-scanner",
    keyword: "IRCC portal scanner for immigration consultants",
    title: "IRCC Portal Scanner for Immigration Consultants — RepTrack",
    metaDescription:
      "RepTrack automatically scans the IRCC representative portal for new messages, downloads PDFs, and tracks approvals. Save 3+ hours daily. Built for RCICs across Canada.",
    heading: "IRCC Portal Scanner That Saves RCICs 3+ Hours Every Day",
    intro:
      "RepTrack is a Chrome extension that replaces manual IRCC portal checking with automatic scanning — detecting new messages, downloading PDFs, and tracking approval outcomes across your entire application queue.",
    bullets: [
      "Scan 2,000+ applications in one click — no manual portal navigation",
      "Auto-download and name PDFs by applicant and application number",
      "Daily approval, refusal, and request letter tracking with full export"
    ],
    faq: [
      {
        q: "What does an IRCC portal scanner do?",
        a: "An IRCC portal scanner like RepTrack automatically logs into your IRCC representative portal and checks every application for new messages — replacing hours of manual clicking with a single automated scan."
      },
      {
        q: "Is RepTrack approved for use with the IRCC portal?",
        a: "RepTrack runs entirely within your own browser session using your own IRCC credentials. It automates the same navigation a consultant would do manually — no third-party access to IRCC systems is involved."
      }
    ]
  },
  {
    slug: "rcic-software-tools",
    keyword: "RCIC software tools Canada",
    title: "RCIC Software Tools — RepTrack IRCC Portal Automation",
    metaDescription:
      "RepTrack is an RCIC software tool that automates daily IRCC portal checks, PDF downloads, and approval tracking for immigration consultants across Canada.",
    heading: "RCIC Software Tools for Faster Immigration Practice Management",
    intro:
      "RepTrack gives Regulated Canadian Immigration Consultants the automation they need to manage large application queues without spending hours every morning manually checking the IRCC portal.",
    bullets: [
      "Automated IRCC portal scanning — replace 3+ hours of daily manual work",
      "Smart PDF filing — downloaded and named automatically, no duplicates",
      "Outcome tracking — approvals, refusals, and request letters surfaced instantly"
    ],
    faq: [
      {
        q: "What tools do RCICs use to manage IRCC applications?",
        a: "Many RCICs use case management software alongside manual IRCC portal checks. RepTrack eliminates the manual portal checking step by automating it — freeing consultant time for higher-value client work."
      },
      {
        q: "Does RepTrack integrate with CRM or case management software?",
        a: "Yes. RepTrack exports scan results to CSV and JSON formats that can be imported into any CRM or immigration case management system. The annual plan includes custom CRM integration support."
      }
    ]
  },
  {
    slug: "ircc-application-tracker",
    keyword: "IRCC application status tracker",
    title: "IRCC Application Status Tracker for Immigration Firms — RepTrack",
    metaDescription:
      "RepTrack tracks IRCC application statuses automatically — detecting approvals, refusals, and new messages across your entire representative queue in one daily scan.",
    heading: "IRCC Application Status Tracker Built for High-Volume Immigration Firms",
    intro:
      "RepTrack eliminates manual status checking by scanning your entire IRCC representative portal daily, surfacing approvals, refusals, and request letters the moment they appear — with no missed updates.",
    bullets: [
      "Automatic status detection across all active applications",
      "Approval, refusal, and AOR tracking with timestamped reports",
      "CSV and JSON exports ready for your team or CRM"
    ],
    faq: [
      {
        q: "How does RepTrack track IRCC application statuses?",
        a: "RepTrack scans your IRCC representative portal application list and checks each file for new messages or status changes. Results are compiled into a daily report showing what changed and what needs attention."
      },
      {
        q: "Can RepTrack handle firms with hundreds or thousands of applications?",
        a: "Yes. RepTrack is built for high-volume practices. Firms with 2,000+ active applications typically complete a full scan in 30–40 minutes — compared to hours of manual checking."
      }
    ]
  },
  {
    slug: "immigration-consultant-surrey-bc",
    keyword: "immigration consultant Surrey BC",
    title: "Immigration Consultant in Surrey BC — Immigration Platform",
    metaDescription:
      "Immigration Platform provides expert visa and PR consulting in Surrey BC. Express Entry, PNP, work permits, study permits, and visitor visas.",
    heading: "Immigration Consultant in Surrey BC for Visa and PR",
    intro:
      "Immigration Platform serves clients in Surrey and across BC with expert guidance on Express Entry, provincial nominations, work and study permits, and permanent residence pathways.",
    bullets: [
      "Express Entry and CRS optimization",
      "Provincial Nominee Program (PNP) matching",
      "Work permits, study permits, and visitor visas"
    ],
    faq: [
      {
        q: "What immigration services does Immigration Platform offer?",
        a: "Immigration Platform handles Express Entry, PNP, work permits, study permits, visitor visas, citizenship applications, and PR strategy planning for Canada."
      },
      {
        q: "Can Immigration Platform help if I've had a visa refusal?",
        a: "Yes. The team reviews refusal reasons, addresses documentation gaps, and prepares a stronger reapplication strategy."
      }
    ]
  },
  {
    slug: "express-entry-canada-consultant",
    keyword: "Express Entry Canada consultant",
    title: "Express Entry Canada Consultant — Immigration Platform",
    metaDescription:
      "Immigration Platform guides skilled workers through the Express Entry process — CRS scoring, profile optimization, and PR application filing.",
    heading: "Express Entry Canada Consultant for Skilled Worker PR",
    intro:
      "Immigration Platform's Express Entry consulting covers CRS score assessment, profile creation, draw round strategy, and full PR application support for federal skilled worker and trades programs.",
    bullets: [
      "CRS score calculation and improvement strategy",
      "Federal Skilled Worker and Trades program guidance",
      "ITA to PR application management"
    ],
    faq: [
      {
        q: "What is a good CRS score for Express Entry?",
        a: "Competitive scores vary by draw type. Recent Federal Skilled Worker draws have invited candidates in the 480–540 range, while category-based draws can be lower. Immigration Platform helps optimize your profile to maximize your score."
      },
      {
        q: "How long does Express Entry to PR take?",
        a: "IRCC targets 6 months from application submission. Pre-ITA preparation typically adds 1–3 months depending on documentation readiness."
      }
    ]
  },
  {
    slug: "crs-score-calculator-canada",
    keyword: "CRS score calculator Canada",
    title: "CRS Score Calculator for Canada Express Entry",
    metaDescription:
      "Use Immigration Platform's free CRS score calculator to estimate your Express Entry ranking and get strategies to improve your score.",
    heading: "CRS Score Calculator — Estimate Your Express Entry Ranking",
    intro:
      "Immigration Platform's CRS calculator gives you an accurate estimate of your Comprehensive Ranking System score and shows what factors to improve for a higher rank in Express Entry draws.",
    bullets: [
      "Instant CRS score estimate based on your profile",
      "Factor-by-factor breakdown: age, education, language, experience",
      "Recommendations to improve your score before applying"
    ],
    faq: [
      {
        q: "What factors affect CRS score the most?",
        a: "Language scores (IELTS/CELPIP/TEF), Canadian work experience, education level, and age are the largest contributors. A provincial nomination adds 600 points automatically."
      },
      {
        q: "Is the CRS calculator free to use?",
        a: "Yes. Immigration Platform's online CRS calculator is free. For a full profile review and improvement strategy, book a consultation with the team."
      }
    ]
  }
];

export function getSolutionBySlug(slug: string) {
  return solutionPages.find((page) => page.slug === slug) ?? null;
}
