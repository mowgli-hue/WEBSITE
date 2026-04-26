import type { Metadata } from "next";
import { ArrowRight, Bell, CheckCircle, ChefHat, CreditCard, Monitor, Tablet } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { ContactCTA } from "../components/ContactCTA";

export const metadata: Metadata = {
  title: "Jungle Table Ordering OS — Restaurant Tablet & KDS Platform",
  description:
    "Jungle Table Ordering OS is a full in-restaurant ordering system with table-side tablets, live kitchen display, waiter call routing, and split bill support.",
  keywords: [
    "restaurant tablet ordering system",
    "kitchen display system",
    "table side ordering",
    "restaurant POS alternative",
    "KDS software",
    "hospitality tech",
    "Jungle Labs"
  ],
  alternates: { canonical: "/jungle-table-ordering" },
  openGraph: {
    title: "Jungle Table Ordering OS — Restaurant Tablet & KDS Platform",
    description: "Table-side ordering, live kitchen display, and waiter routing — built for faster restaurant service.",
    type: "website",
    url: "/jungle-table-ordering"
  }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Jungle Table Ordering OS",
  applicationCategory: "BusinessApplication",
  description:
    "A full in-restaurant ordering system with tablet ordering, kitchen display system, and waiter call routing built by Jungle Labs.",
  author: {
    "@type": "Organization",
    name: "Jungle Labs",
    url: "https://www.junglelabsworld.ca"
  }
};

const features = [
  {
    icon: Tablet,
    title: "Table-Side Ordering",
    description: "Customers browse the menu, customize items, and place orders directly from a tablet at their table — no waiter needed for the order step."
  },
  {
    icon: ChefHat,
    title: "Live Kitchen Display (KDS)",
    description: "Orders appear on kitchen screens instantly with table number, timestamps, and status controls — accepted, preparing, ready."
  },
  {
    icon: Bell,
    title: "Waiter Call Routing",
    description: "Customers can call for assistance with one tap. Staff see the alert on their dashboard with table number and time."
  },
  {
    icon: CreditCard,
    title: "Tablet-Side Payment",
    description: "Guests pay at the table with tip selection and split bill support. No waiting for a staff member to bring a terminal."
  },
  {
    icon: Monitor,
    title: "Admin Menu Management",
    description: "Update items, prices, availability, and modifiers from the admin dashboard. Changes go live to all tablets immediately."
  },
  {
    icon: CheckCircle,
    title: "Live Order Status",
    description: "After ordering, customers see real-time status updates on their tablet — from kitchen accepted to ready for pickup."
  }
];

export default function JungleTableOrderingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="section-shell pt-20 md:pt-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-amber-400/6 via-black to-emerald-400/5 px-8 py-16 md:px-14 md:py-24">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-emerald-400/8 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-200">
              Hospitality Tech · Active Build
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Restaurant Ordering.<br />Reimagined.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Jungle Table Ordering OS puts a full ordering system directly on every table — customers order themselves,
              kitchen gets tickets instantly, and staff focus on delivering experiences instead of taking orders.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:admin@junglelabsworld.com?subject=Jungle%20Table%20Ordering%20Demo"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-emerald-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-amber-200 hover:to-emerald-200"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/solutions/restaurant-tablet-ordering-system"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:text-amber-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-shell mt-24">
        <p className="section-kicker">Features</p>
        <h2 className="section-title">A complete system for the full dining cycle</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="glass-card p-6">
                <div className="mb-4 inline-flex rounded-xl border border-amber-300/30 bg-amber-300/10 p-3 text-amber-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Related SEO */}
      <section className="section-shell mt-16">
        <div className="flex flex-wrap gap-3">
          <a href="/solutions/restaurant-tablet-ordering-system" className="glass-card px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
            Restaurant Tablet Ordering →
          </a>
          <a href="/solutions/kitchen-display-system-software" className="glass-card px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
            Kitchen Display System →
          </a>
        </div>
      </section>

      <div className="mt-16">
        <ContactCTA />
      </div>
      <SiteFooter />
    </main>
  );
}
