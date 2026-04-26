import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you were looking for doesn't exist. Explore Jungle Labs products and services."
};

const helpLinks = [
  { label: "RepTrack — IRCC Portal Scanner", href: "/reptrack" },
  { label: "Immigration Platform Platform", href: "/immigration-platform" },
  { label: "Jungle Table Ordering OS", href: "/jungle-table-ordering" },
  { label: "Learn French with Franco", href: "/learn-french" },
  { label: "All Services", href: "/services" },
  { label: "Blog", href: "/blog" }
];

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="section-shell flex min-h-[70vh] flex-col items-center justify-center pt-20 text-center">
        <div className="relative">
          <p className="text-[9rem] font-semibold leading-none tracking-tight text-white/5 select-none md:text-[14rem]">
            404
          </p>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">
              Page Not Found
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              This page doesn&apos;t exist.
            </h1>
            <p className="mt-4 max-w-md text-white/60">
              The URL may have changed, been moved, or never existed. Start from the homepage or explore what Jungle Labs builds.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:text-cyan-200"
              >
                <Search className="h-4 w-4" />
                Browse Solutions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-[0.13em] text-white/40">You might be looking for</p>
          <div className="grid gap-2 text-left">
            {helpLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-card flex items-center justify-between px-5 py-3 text-sm text-white/75 transition hover:text-cyan-200"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/30" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
