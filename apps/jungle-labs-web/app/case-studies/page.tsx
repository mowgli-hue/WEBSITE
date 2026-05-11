import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Network, Workflow } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { ScrollProgress } from "../components/ScrollProgress";
import { breadcrumbSchema } from "../lib/schemas";

export const metadata: Metadata = {
  title: "Case Studies — Real AI, Blockchain & Automation Builds",
  description:
    "Explore Jungle Labs case studies: a fully automated industry CRM that replaced 70% of manual workflow, a restaurant ordering platform live across multiple locations, and AI automation systems delivering measurable ROI.",
  keywords: [
    "AI automation case studies",
    "blockchain case studies",
    "CRM automation case study",
    "industry CRM",
    "automation ROI",
    "Jungle Labs work"
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    title: "Case Studies — Jungle Labs",
    description: "Real AI, blockchain, and automation builds shipped to production.",
    images: [{ url: "/jungle-monkeys-coding.png", width: 1536, height: 1024, alt: "Jungle Labs case studies" }]
  }
};

type CaseStudy = {
  slug: string;
  Icon: typeof Bot;
  tag: string;
  title: string;
  summary: string;
  outcome: string;
  bullets: string[];
};

const studies: CaseStudy[] = [
  {
    slug: "automated-industry-crm",
    Icon: Workflow,
    tag: "Industry CRM Automation",
    title: "Fully automated industry CRM replacing 70% of manual workflow",
    summary:
      "We built a service firm a custom CRM platform with automated intake, document handling, status tracking, and client communication. The result: nearly every repetitive task in their daily workflow now runs on autopilot.",
    outcome: "70% reduction in manual operations",
    bullets: [
      "Automated client intake with smart routing",
      "Document parsing and auto-categorization",
      "Status engine with proactive client notifications",
      "Role-based dashboards for the entire team",
      "Integrated communications across email, SMS, and portal"
    ]
  },
  {
    slug: "jungle-table-ordering-os",
    Icon: Bot,
    tag: "Hospitality Tech",
    title: "Tablet-based ordering OS live across multiple restaurant locations",
    summary:
      "An end-to-end ordering and kitchen display system used in production today. Customers order from the table, kitchen sees orders instantly, waiters get smart call routing.",
    outcome: "Hours saved per shift, fewer order errors",
    bullets: [
      "Table-side ordering UI on iPad",
      "Realtime kitchen display system",
      "Smart waiter call routing",
      "Live order status visibility for guests",
      "Live across multiple locations today"
    ]
  },
  {
    slug: "ai-automation-engine",
    Icon: Network,
    tag: "AI Automation",
    title: "AI automation engine and analytics dashboards for a SaaS team",
    summary:
      "We delivered an AI workflow engine for lead routing, support triage, and content operations — paired with a real-time analytics dashboard that surfaces KPIs on demand.",
    outcome: "Measurable ROI within first sprint, planning phase two",
    bullets: [
      "AI agents for lead qualification",
      "Automated support triage with escalation",
      "Content ops pipeline with quality checks",
      "Realtime KPI dashboard for the leadership team",
      "Weekly review cadence with the build team"
    ]
  }
];

export default function CaseStudiesPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" }
  ]);

  const articleSchemas = studies.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.title,
    description: s.summary,
    author: { "@type": "Organization", name: "Jungle Labs" },
    publisher: { "@type": "Organization", name: "Jungle Labs", logo: { "@type": "ImageObject", url: "https://www.junglelabsworld.ca/logo.png" } },
    image: ["https://www.junglelabsworld.ca/jungle-monkeys-coding.png"]
  }));

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {articleSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <ScrollProgress />
      <Navbar />

      <section className="section-shell pt-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="section-kicker">Case Studies</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Real builds. <span className="gradient-text">Real outcomes.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
            A snapshot of work we&apos;ve shipped — automation systems, AI engines, hospitality platforms, and
            industry-specific CRMs. Names changed where clients prefer; outcomes are real.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {studies.map((s) => {
            const Icon = s.Icon;
            return (
              <article
                key={s.slug}
                className="glass-card glow-border group relative overflow-hidden p-7 md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
                      {s.tag}
                    </span>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-white md:text-2xl">{s.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">{s.summary}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/5 p-4 md:max-w-[12rem]">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-emerald-200/70">Outcome</p>
                    <p className="mt-2 text-sm font-semibold text-emerald-200">{s.outcome}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-white/50">What we built</p>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Got something similar in mind?
          </h2>
          <p className="mt-3 text-white/65">We&apos;ll scope it in a week and have your first deliverable in two.</p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
