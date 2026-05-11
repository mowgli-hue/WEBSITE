import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "./lib/blog";
import { solutionPages } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.junglelabsworld.ca";
  const blogPosts = getAllBlogPosts();
  const now = new Date();

  return [
    { url: `${base}/`,                 lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`,         lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/case-studies`,     lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/solutions`,        lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/jungle-table-ordering`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`,             lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    // French
    { url: `${base}/learn-french`,                  lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/learn-french-for-beginners`,    lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${base}/how-to-practice-french-speaking`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${base}/best-app-to-learn-french`,      lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${base}/french-learning-resources`,     lastModified: now, changeFrequency: "weekly", priority: 0.78 },
    // Legal
    { url: `${base}/legal`,            lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy-policy`,   lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`,    lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    // Solutions
    ...solutionPages.map((page) => ({
      url: `${base}/solutions/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.72
    })),
    // Blog
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.65
    }))
  ];
}
