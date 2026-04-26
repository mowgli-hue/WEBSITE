import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
import { getSolutionBySlug, solutionPages } from "../../lib/seo";

export async function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getSolutionBySlug(params.slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: `/solutions/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: "website",
      url: `/solutions/${page.slug}`
    }
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const page = getSolutionBySlug(params.slug);
  if (!page) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.junglelabsworld.ca" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.junglelabsworld.ca/solutions" },
      { "@type": "ListItem", position: 3, name: page.title, item: `https://www.junglelabsworld.ca/solutions/${page.slug}` }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <section className="section-shell pt-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/45">
          <a href="/" className="transition hover:text-cyan-200">Home</a>
          <span>/</span>
          <a href="/solutions" className="transition hover:text-cyan-200">Solutions</a>
          <span>/</span>
          <span className="text-white/65">{page.title}</span>
        </nav>

        <p className="section-kicker">{page.keyword}</p>
        <h1 className="section-title">{page.heading}</h1>
        <p className="mt-4 max-w-3xl text-white/75">{page.intro}</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {page.bullets.map((item) => (
            <article key={item} className="glass-card p-5">
              <p className="text-white/85">{item}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-black/35 p-6">
          <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
          <div className="mt-5 space-y-4">
            {page.faq.map((item) => (
              <article key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-base font-semibold text-cyan-100">{item.q}</h3>
                <p className="mt-2 text-white/75">{item.a}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/#ai-demo"
            className="inline-flex rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200"
          >
            Get AI Project Plan
          </a>
          <Link href="/solutions" className="text-sm font-semibold text-white/55 transition hover:text-cyan-200">
            ← All Solutions
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
