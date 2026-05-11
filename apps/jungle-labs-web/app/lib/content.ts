import {
  Bot,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  Compass,
  Database,
  FileCode2,
  Globe,
  Megaphone,
  Network,
  Workflow
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type Product = {
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  status: "In Market" | "Active Build" | "Deployed";
  highlights: string[];
  href?: string;
  ctaLabel?: string;
  downloads?: Array<{ label: string; href: string }>;
};

export type Service = {
  title: string;
  short: string;
  details: string;
  icon: LucideIcon;
};

export type BuildSystem = {
  title: string;
  icon: LucideIcon;
};

export type SocialLink = {
  name: "LinkedIn" | "Instagram" | "Facebook";
  href: string;
};

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#blockchain" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" }
];

export const products: Product[] = [
  {
    name: "Franco App",
    subtitle: "AI French Learning Platform",
    description:
      "Reflex-based training, adaptive coaching, and gamified drills that help learners build speaking confidence faster.",
    badge: "Education AI",
    status: "In Market",
    highlights: ["Adaptive lessons", "Pronunciation feedback", "Gamified progress engine"],
    downloads: [
      {
        label: "Download for macOS (.dmg)",
        href: "https://github.com/mowgli-hue/Franco/releases/download/v0.1.1/Franco-0.1.0.dmg"
      },
      {
        label: "Download for Windows (.exe)",
        href: "https://github.com/mowgli-hue/Franco/releases/download/v0.1.1/Franco-Setup-0.1.0.exe"
      }
    ]
  },
  {
    name: "Industry CRM Platform",
    subtitle: "Fully Automated Vertical CRM",
    description:
      "A fully automated CRM platform designed for service industries — replacing repetitive intake, document handling, status tracking, and client communication with one intelligent system.",
    badge: "CRM Automation",
    status: "In Market",
    highlights: ["Automated client intake and routing", "Document parsing and categorization", "Status engine with proactive notifications"],
    ctaLabel: "See Case Study",
    href: "/case-studies"
  },
  {
    name: "Tokenization Engine",
    subtitle: "Programmable Asset Platform",
    description:
      "Turn real-world assets, loyalty points, or equity into compliant on-chain tokens with custody and audit built in.",
    badge: "Blockchain",
    status: "Active Build",
    highlights: ["Asset-class flexible", "Custody patterns built in", "Audit-ready reporting"],
    ctaLabel: "Request Early Access",
    href: "mailto:admin@junglelabsworld.com?subject=Tokenization%20Engine%20Access"
  },
  {
    name: "Smart Contract Studio",
    subtitle: "On-Chain Development Platform",
    description:
      "Smart contract templates, deployment pipelines, and a wallet-aware test harness so on-chain shipping feels like normal CI/CD.",
    badge: "Blockchain",
    status: "Active Build",
    highlights: ["Contract templates", "Wallet-aware test harness", "Deploy pipelines"],
    ctaLabel: "Request Early Access",
    href: "mailto:admin@junglelabsworld.com?subject=Smart%20Contract%20Studio%20Access"
  },
  {
    name: "Business Budget Intelligence",
    subtitle: "Budget + Growth Intelligence",
    description:
      "A live analytics workspace for business budgeting, marketing spend efficiency, and growth forecasting.",
    badge: "Analytics Platform",
    status: "Active Build",
    highlights: ["Budget tracking", "Campaign ROI intelligence", "Cashflow and growth forecasting"],
    ctaLabel: "Request Early Access",
    href: "mailto:admin@junglelabsworld.com?subject=Business%20Budget%20Intelligence%20Platform%20Access"
  },
  {
    name: "Jungle Table Ordering OS",
    subtitle: "Restaurant Tablet + KDS Platform",
    description:
      "A full in-restaurant ordering system with table screens, live kitchen display workflows, and waiter call routing.",
    badge: "Hospitality Tech",
    status: "Active Build",
    highlights: ["Table-side ordering UI", "Kitchen display system", "Realtime staff call and order status"],
    href: "/jungle-table-ordering"
  }
];

export const services: Service[] = [
  {
    title: "AI Automation Systems",
    short: "Turn repetitive tasks into autonomous workflows.",
    details:
      "From lead routing to support triage, we design AI agents and action pipelines that remove operational drag.",
    icon: Bot
  },
  {
    title: "Blockchain & Smart Contracts",
    short: "Production-grade on-chain infrastructure.",
    details:
      "Smart contracts, wallets, signing flows, and ledger integrations that connect cleanly to your existing stack.",
    icon: Network
  },
  {
    title: "Tokenization Platforms",
    short: "Turn assets, loyalty, and equity into tokens.",
    details:
      "Asset tokenization engines with compliance hooks, custody patterns, and audit-ready reporting built in.",
    icon: Boxes
  },
  {
    title: "Custom CRM Systems",
    short: "Build your CRM around your exact process.",
    details:
      "We create CRM systems for sales, intake, and service delivery with role-based views and deep integrations.",
    icon: Database
  },
  {
    title: "Analytics Platforms",
    short: "Transform data into decisions in real time.",
    details:
      "Executive dashboards, KPI engines, and reporting systems that explain where growth is happening and why.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Custom Software Development",
    short: "Production-grade platforms for web and mobile.",
    details:
      "We build scalable products with clear architecture, reliable deployment, and measurable business impact.",
    icon: FileCode2
  },
  {
    title: "Website Design & Development",
    short: "Conversion-focused websites tailored to your brand.",
    details:
      "We build modern, fast, conversion-focused websites tailored to your brand, offers, and customer journey.",
    icon: Globe
  },
  {
    title: "Business Workflow Automation",
    short: "Connect tools into one intelligent system.",
    details:
      "Unify your stack across CRM, communication, marketing, and operations so work flows without manual friction.",
    icon: Workflow
  }
];

export const ecosystemNodes = [
  "AI Automation",
  "CRM Systems",
  "Analytics Dashboards",
  "Web Platforms",
  "Mobile Apps",
  "Lead Generation Systems"
];

export const systemsWeBuild: BuildSystem[] = [
  { title: "AI Lead Generation Systems", icon: Megaphone },
  { title: "Blockchain & Smart Contracts", icon: Network },
  { title: "Tokenization Platforms", icon: Boxes },
  { title: "Client Intake Systems", icon: Compass },
  { title: "AI Content Systems", icon: BrainCircuit },
  { title: "Business Intelligence Dashboards", icon: ChartNoAxesCombined }
];

export const roadmap = [
  { year: "2025", title: "Franco App", detail: "Launched with AI reflex learning and structured speaking progression for French learners." },
  { year: "2025–2026", title: "AI Automation Studio", detail: "Deployed AI agent systems and workflow automation for service businesses across North America." },
  { year: "2026", title: "Tokenization Engine", detail: "Rolling out programmable asset tokenization with built-in compliance, custody, and audit reporting." },
  { year: "2026", title: "Budget Intelligence Platform", detail: "Rolling out business budget intelligence and decision dashboards for marketing ROI and growth forecasting." },
  { year: "2026", title: "Smart Contract Studio", detail: "Launching contract templates, wallet-aware test harness, and deploy pipelines for on-chain teams." },
  { year: "2026–2027", title: "Jungle Table Ordering OS", detail: "Deploying tablet-based restaurant ordering, kitchen display workflows, and real-time waiter routing." }
];

export const demoSuggestions = [
  "Automate my business",
  "Build a CRM system",
  "Create analytics dashboard",
  "Tokenize my asset",
  "Build a blockchain platform"
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/jungle-labs-world" },
  { name: "Instagram", href: "https://www.instagram.com/junglelabsworld/" },
  { name: "Facebook", href: "https://www.facebook.com/junglelabsworld/" }
];
