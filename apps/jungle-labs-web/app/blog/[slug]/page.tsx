import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
import { getAllBlogPosts, getBlogHtml, getBlogPostBySlug } from "../../lib/blog";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Jungle Labs"],
      tags: post.tags,
      url: `/blog/${post.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  const html = getBlogHtml(params.slug);
  const allPosts = getAllBlogPosts();

  if (!post || !html) notFound();

  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Organization",
      name: "Jungle Labs",
      url: "https://www.junglelabsworld.ca"
    },
    publisher: {
      "@type": "Organization",
      name: "Jungle Labs",
      url: "https://www.junglelabsworld.ca",
      logo: {
        "@type": "ImageObject",
        url: "https://www.junglelabsworld.ca/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.junglelabsworld.ca/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.junglelabsworld.ca" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.junglelabsworld.ca/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.junglelabsworld.ca/blog/${post.slug}` }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <article className="section-shell pt-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/45">
          <Link href="/" className="transition hover:text-cyan-200">Home</Link>
          <span>/</span>
          <Link href="/blog" className="transition hover:text-cyan-200">Blog</Link>
          <span>/</span>
          <span className="text-white/65">{post.title}</span>
        </nav>

        <p className="text-xs uppercase tracking-[0.12em] text-cyan-200/80">
          {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">{post.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/75">{post.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
              {tag}
            </span>
          ))}
        </div>
        <div
          className="prose prose-invert mt-10 max-w-3xl prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-a:text-cyan-300 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Back link */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <Link href="/blog" className="text-sm font-semibold text-emerald-200 transition hover:text-emerald-100">
            ← Back to Blog
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section-shell mt-16">
          <p className="section-kicker">Related Articles</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <article key={related.slug} className="glass-card p-5">
                <p className="text-xs text-cyan-200/70">
                  {new Date(related.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white">{related.title}</h3>
                <p className="mt-2 text-sm text-white/65 line-clamp-2">{related.description}</p>
                <Link href={`/blog/${related.slug}`} className="mt-3 inline-flex text-sm font-semibold text-emerald-200 hover:text-emerald-100">
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
