import type { Metadata } from "next";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Jungle Labs website and services."
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell pt-16">
        <p className="section-kicker">Privacy Policy</p>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="mt-3 text-sm text-white/60">Last updated: March 8, 2026</p>

        <div className="prose prose-invert mt-8 max-w-3xl prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80">
          <h2>Information We Collect</h2>
          <p>
            We collect information you submit through forms, including name, email, company details, and project-related
            requests. We may also collect analytics data such as page views, campaign source, and device/browser context.
          </p>

          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to project inquiries and service requests</li>
            <li>To improve website performance and user experience</li>
            <li>To evaluate marketing campaign effectiveness</li>
            <li>To provide updates related to requested services</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We do not sell personal information. Data may be processed by trusted third-party providers used for hosting,
            analytics, communication, and workflow automation.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain personal information only as long as required for service delivery, legal compliance, or legitimate
            business operations.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal information by contacting us at
            admin@junglelabsworld.com.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
