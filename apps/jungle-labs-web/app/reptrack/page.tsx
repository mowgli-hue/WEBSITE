import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Download, FileText, RefreshCw, Shield, Zap, BarChart2, Users } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { ContactCTA } from "../components/ContactCTA";

export const metadata: Metadata = {
  title: "RepTrack — IRCC Portal Scanner for Immigration Consultants",
  description:
    "RepTrack automatically scans your IRCC representative portal for new messages, downloads PDFs, and tracks approvals. Save 3+ hours every day. Built for RCICs across Canada.",
  keywords: [
    "RepTrack",
    "IRCC portal scanner",
    "IRCC representative portal automation",
    "immigration consultant tool",
    "RCIC software",
    "IRCC PDF download automation",
    "immigration application tracker Canada",
    "IRCC approval tracker"
  ],
  alternates: { canonical: "/reptrack" },
  openGraph: {
    title: "RepTrack — IRCC Portal Scanner for RCICs",
    description:
      "Scan 2,000+ IRCC applications in one click. Auto-download PDFs, track approvals, and save 3+ hours every day.",
    type: "website",
    url: "/reptrack"
  },
  twitter: {
    card: "summary_large_image",
    title: "RepTrack — IRCC Portal Scanner for RCICs",
    description: "Auto-scan your IRCC representative portal, download PDFs, and track approvals — one click, every morning."
  }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RepTrack",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Chrome (Windows, Mac)",
  description:
    "RepTrack is a Chrome extension that automatically scans the IRCC representative portal for new messages, downloads PDFs, and tracks approvals for immigration consultants.",
  url: "https://www.reptrack.ca",
  author: {
    "@type": "Organization",
    name: "Jungle Labs",
    url: "https://www.junglelabsworld.ca"
  },
  offers: [
    {
      "@type": "Offer",
      name: "Monthly",
      price: "499",
      priceCurrency: "CAD",
      billingIncrement: "P1M"
    },
    {
      "@type": "Offer",
      name: "Annual",
      price: "4999",
      priceCurrency: "CAD",
      billingIncrement: "P1Y"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is RepTrack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RepTrack is a Chrome extension for Regulated Canadian Immigration Consultants (RCICs) that automatically scans the IRCC representative portal, downloads new message PDFs, and tracks approvals, refusals, and request letters — all in one click."
      }
    },
    {
      "@type": "Question",
      name: "How many applications can RepTrack scan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RepTrack can scan your entire IRCC representative queue regardless of size. Firms with 2,000+ applications typically complete a full scan in 30–40 minutes."
      }
    },
    {
      "@type": "Question",
      name: "Is RepTrack secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. RepTrack runs entirely inside your browser using your existing IRCC login. Jungle Labs never sees your portal credentials or client data."
      }
    },
    {
      "@type": "Question",
      name: "Can multiple team members use RepTrack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The monthly plan covers up to 5 team members. The annual plan includes unlimited team members plus priority support and an onboarding call."
      }
    }
  ]
};

const features = [
  {
    icon: Zap,
    title: "Scan 2,000+ Applications in Minutes",
    description: "Automatically checks every application in your representative queue for new IRCC messages — no manual clicking through hundreds of files."
  },
  {
    icon: FileText,
    title: "Auto-Download & Name PDFs",
    description: "New message letters are downloaded instantly and named with the applicant name and application number for easy filing — no copy-pasting."
  },
  {
    icon: CheckCircle,
    title: "Track Approvals & Refusals",
    description: "RepTrack detects approvals, refusals, and request letters automatically, giving your team a daily summary the moment each scan finishes."
  },
  {
    icon: RefreshCw,
    title: "Smart Memory — No Duplicates",
    description: "Once a PDF is downloaded it is never downloaded again. Shared memory across your whole team prevents duplicate work and wasted time."
  },
  {
    icon: BarChart2,
    title: "Export to CSV and JSON",
    description: "Every scan produces a detailed report ready to import into your CRM or share with your team — compatible with any immigration software."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Runs entirely in your browser using your own IRCC login. Jungle Labs never sees your portal data, credentials, or client information."
  }
];

const steps = [
  { n: "1", title: "Install from Chrome Web Store", detail: "One-click install — no technical setup required. Works on any Windows or Mac with Chrome." },
  { n: "2", title: "Enter your license key", detail: "After purchase you receive a license key by email. Enter it once and you're ready to go." },
  { n: "3", title: "Open IRCC portal and click Scan", detail: "Log into your IRCC representative portal, go to your application list, and click Start Scan." },
  { n: "4", title: "Results delivered automatically", detail: "PDFs download to your computer and a full report is saved — while you focus on other work." }
];

const stats = [
  { value: "2,000+", label: "Applications scanned per run" },
  { value: "30 min", label: "Average full scan time" },
  { value: "3+ hrs", label: "Saved per day per team" },
  { value: "1 click", label: "To start a full scan" }
];

export default function RepTrackPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="section-shell pt-20 md:pt-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-400/8 via-black to-emerald-400/5 px-8 py-16 md:px-14 md:py-24">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">
              Immigration Tech · In Market
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Save 3+ Hours on<br />Your IRCC Portal. Daily.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              RepTrack automatically scans your entire IRCC representative portal for new messages, downloads PDFs, and
              tracks approvals — all in one click. Built for RCICs who manage hundreds of applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.reptrack.ca#pricing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.reptrack.ca"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                Visit reptrack.ca
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-shell mt-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-5 text-center">
              <p className="text-2xl font-semibold text-emerald-300">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-shell mt-24">
        <p className="section-kicker">Features</p>
        <h2 className="section-title">Everything your team needs</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          RepTrack handles the tedious daily portal checks so your team can focus on clients, not screens.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="glass-card p-6">
                <div className="mb-4 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="section-shell mt-24">
        <p className="section-kicker">How It Works</p>
        <h2 className="section-title">Up and running in minutes</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="glass-card p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-300/15 text-lg font-semibold text-emerald-300">
                {step.n}
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section-shell mt-24">
        <p className="section-kicker">Pricing</p>
        <h2 className="section-title">Simple, transparent pricing</h2>
        <p className="mt-4 text-white/70">No contracts. No setup fees. Cancel anytime.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 max-w-2xl">
          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.11em] text-white/50">Monthly</p>
            <p className="mt-3 text-4xl font-semibold text-white">$499 <span className="text-base font-normal text-white/50">/ month</span></p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {["Unlimited scans", "Up to 5 team members", "PDF auto-download", "CSV & JSON exports", "Outcome tracking", "Email support"].map((f) => (
                <li key={f} className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-300 shrink-0" />{f}</li>
              ))}
            </ul>
            <a href="https://www.reptrack.ca#pricing" target="_blank" rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:text-cyan-200">
              Get Started
            </a>
          </div>
          <div className="glass-card relative p-6 border-emerald-300/30">
            <span className="absolute -top-3 left-6 rounded-full bg-emerald-300 px-3 py-0.5 text-xs font-semibold text-black">Best value — save 17%</span>
            <p className="text-xs uppercase tracking-[0.11em] text-white/50">Annual</p>
            <p className="mt-3 text-4xl font-semibold text-white">$4,999 <span className="text-base font-normal text-white/50">/ year</span></p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {["Everything in Monthly", "Unlimited team members", "Priority support", "Early access to new features", "Onboarding call included", "Custom CRM integration"].map((f) => (
                <li key={f} className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-300 shrink-0" />{f}</li>
              ))}
            </ul>
            <a href="https://www.reptrack.ca#pricing" target="_blank" rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200">
              Get Started →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-shell mt-24">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title">Common questions about RepTrack</h2>
        <div className="mt-8 space-y-4">
          {faqSchema.mainEntity.map((item) => (
            <article key={item.name} className="glass-card p-6">
              <h3 className="text-base font-semibold text-cyan-100">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{item.acceptedAnswer.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Related SEO links */}
      <section className="section-shell mt-16">
        <div className="flex flex-wrap gap-3">
          <a href="/solutions/ircc-portal-scanner" className="glass-card px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
            IRCC Portal Scanner →
          </a>
          <a href="/solutions/immigration-consultant-surrey-bc" className="glass-card px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
            Immigration Consultant Surrey BC →
          </a>
          <a href="/immigration-platform" className="glass-card px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
            Immigration Platform Platform →
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
