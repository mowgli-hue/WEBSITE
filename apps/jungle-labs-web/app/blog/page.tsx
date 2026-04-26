import type { Metadata } from "next";
import Link from "next/link";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { getAllBlogPosts } from "../lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Automation, Software & Immigration Insights",
  description:
    "Jungle Labs blog: technical and strategic writing on AI automation, CRM systems, business analytics, French learning, immigration tech, and fitness tracking.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Jungle Labs",
    description: "Insights on AI automation, software systems, immigration tech, fitness apps, and more.",
    type: "website",
    url: "/blog"
  }
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  // Collect all unique tags
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  return (
    <main>
      <Navbar />
      <section className="section-shell pt-16">
        <p className="section-kicker">Insights</p>
        <h1 className="section-title">Jungle Labs Blog</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Technical and strategic writing on AI automation, business analytics, CRM systems, immigration tech, fitness tracking, and digital operations.
        </p>

        {/* Tag pills */}
        {allTags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs font-medium text-cyan-100/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-5">
          {posts.map((post) => (
            <article key={post.slug} className="glass-card p-6 transition hover:border-cyan-300/25">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/80">{formatDate(post.date)}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-2.5 py-0.5 text-[11px] text-cyan-100/75">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-white/70">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
