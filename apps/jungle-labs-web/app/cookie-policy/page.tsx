import type { Metadata } from "next";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Jungle Labs website analytics and tracking technologies."
};

export default function CookiePolicyPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell pt-16">
        <p className="section-kicker">Cookie Policy</p>
        <h1 className="section-title">Cookie Policy</h1>
        <p className="mt-3 text-sm text-white/60">Last updated: March 8, 2026</p>

        <div className="prose prose-invert mt-8 max-w-3xl prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files stored in your browser to support functionality, analytics, and performance
            insights.
          </p>

          <h2>How We Use Cookies</h2>
          <ul>
            <li>Measure traffic and website behavior</li>
            <li>Understand marketing source performance</li>
            <li>Improve page performance and user experience</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            We may use trusted analytics and infrastructure providers that set cookies or similar tracking technologies.
          </p>

          <h2>Managing Cookies</h2>
          <p>
            You can manage or disable cookies from browser settings. Some website features may be affected if cookies are
            disabled.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
