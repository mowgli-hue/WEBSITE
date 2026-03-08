import type { Metadata } from "next";
import Link from "next/link";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { solutionPages } from "../lib/seo";

export const metadata: Metadata = {
  title: "SEO Solutions",
  description:
    "High-intent service pages for AI automation, CRM development, analytics dashboards, and restaurant technology systems."
};

export default function SolutionsIndexPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell pt-16">
        <p className="section-kicker">Solution Pages</p>
        <h1 className="section-title">Keyword-Targeted Service Solutions</h1>
        <p className="mt-4 max-w-3xl text-white/75">
          Explore dedicated pages for high-intent services including AI automation, custom CRM, analytics dashboards,
          and restaurant technology platforms.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {solutionPages.map((solution) => (
            <article key={solution.slug} className="glass-card p-6">
              <p className="text-xs uppercase tracking-[0.11em] text-cyan-200/85">{solution.keyword}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{solution.heading}</h2>
              <p className="mt-3 text-white/75">{solution.metaDescription}</p>
              <Link href={`/solutions/${solution.slug}`} className="mt-4 inline-flex text-sm font-semibold text-emerald-200 hover:text-emerald-100">
                Open solution page
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
