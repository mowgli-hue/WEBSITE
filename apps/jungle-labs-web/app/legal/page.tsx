import type { Metadata } from "next";
import Link from "next/link";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal pages for Jungle Labs including privacy policy, terms of service, and cookie policy."
};

const pages = [
  { href: "/privacy-policy", title: "Privacy Policy", description: "How we collect, use, and protect personal information." },
  { href: "/terms-of-service", title: "Terms of Service", description: "Terms governing use of our website and services." },
  { href: "/cookie-policy", title: "Cookie Policy", description: "How cookies and tracking technologies are used." }
];

export default function LegalIndexPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell pt-16">
        <p className="section-kicker">Legal</p>
        <h1 className="section-title">Policies and Terms</h1>
        <p className="mt-4 max-w-3xl text-white/75">
          These pages describe how Jungle Labs handles privacy, website usage terms, and cookie tracking.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pages.map((page) => (
            <article key={page.href} className="glass-card p-5">
              <h2 className="text-xl font-semibold text-white">{page.title}</h2>
              <p className="mt-2 text-white/75">{page.description}</p>
              <Link href={page.href} className="mt-4 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100">
                Read page
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
