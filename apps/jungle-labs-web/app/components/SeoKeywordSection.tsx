import Link from "next/link";

import { AnimatedSection } from "./AnimatedSection";
import { solutionPages } from "../lib/seo";

export function SeoKeywordSection() {
  return (
    <AnimatedSection className="section-shell mt-24">
      <div className="mb-8 max-w-3xl">
        <p className="section-kicker">SEO Solutions</p>
        <h2 className="section-title">Find the right system by business need</h2>
        <p className="mt-3 text-white/75">
          These pages explain exactly how Jungle Labs delivers each system type and what outcomes to expect.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {solutionPages.map((page) => (
          <Link key={page.slug} href={`/solutions/${page.slug}`} className="glass-card block p-5 transition hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/80">{page.keyword}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{page.title}</h3>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
}
