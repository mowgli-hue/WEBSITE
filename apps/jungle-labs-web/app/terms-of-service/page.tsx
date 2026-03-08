import type { Metadata } from "next";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for use of the Jungle Labs website and related services."
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell pt-16">
        <p className="section-kicker">Terms of Service</p>
        <h1 className="section-title">Terms of Service</h1>
        <p className="mt-3 text-sm text-white/60">Last updated: March 8, 2026</p>

        <div className="prose prose-invert mt-8 max-w-3xl prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to these terms. If you do not agree, do not use the website.
          </p>

          <h2>Use of Website</h2>
          <p>
            You agree to use this website lawfully and not attempt unauthorized access, disruption, scraping abuse, or
            misuse of services.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Website content, branding, and materials are owned by Jungle Labs unless stated otherwise. Unauthorized reuse
            is prohibited without written permission.
          </p>

          <h2>Service Information</h2>
          <p>
            Information on this website is provided for general guidance and may change at any time without prior notice.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Jungle Labs is not liable for indirect, incidental, or consequential damages arising from website use,
            subject to applicable law.
          </p>

          <h2>Contact</h2>
          <p>For legal inquiries, contact admin@junglelabsworld.com.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
