import type { Metadata } from "next";
import Link from "next/link";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { solutionPages } from "../lib/seo";

export const metadata: Metadata = {
  title: "Solutions — SEO-Targeted Service Pages",
  description:
    "Explore Jungle Labs solution pages covering AI automation, CRM development, restaurant tech, immigration consulting, gym tracking apps, and more.",
  alternates: { canonical: "/solutions" }
};

// Group pages into categories for better UX
const categories = [
  {
    label: "AI & Software",
    slugs: ["ai-automation-agency-surrey", "ai-software-development-agency-bc", "workflow-automation-for-small-business", "custom-crm-development-canada", "business-intelligence-dashboard-services"]
  },
  {
    label: "Hospitality Tech",
    slugs: ["restaurant-tablet-ordering-system", "kitchen-display-system-software"]
  },
  {
    label: "Immigration & IRCC Tools",
    slugs: ["ircc-portal-scanner", "rcic-software-tools", "ircc-application-tracker", "immigration-consultant-surrey-bc", "express-entry-canada-consultant", "crs-score-calculator-canada"]
  },
];

export default function SolutionsIndexPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell pt-16">
        <p className="section-kicker">Solution Pages</p>
        <h1 className="section-title">Find the Right System by Business Need</h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Each page explains exactly how Jungle Labs delivers a specific system type, what outcomes to expect, and answers the most common questions — structured for search.
        </p>

        <div className="mt-12 space-y-12">
          {categories.map((category) => {
            const pages = category.slugs
              .map((slug) => solutionPages.find((p) => p.slug === slug))
              .filter(Boolean);
            if (!pages.length) return null;
            return (
              <div key={category.label}>
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200/85">
                  {category.label}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {pages.map((solution) => solution && (
                    <article key={solution.slug} className="glass-card p-6 transition hover:-translate-y-0.5">
                      <p className="text-xs uppercase tracking-[0.11em] text-cyan-200/75">{solution.keyword}</p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{solution.heading}</h3>
                      <p className="mt-2 text-sm text-white/65">{solution.metaDescription}</p>
                      <Link
                        href={`/solutions/${solution.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
                      >
                        Open page →
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
