import type { Metadata } from "next";
import { ArrowRight, Bot, BookOpen, Calculator, CheckCircle, FileText, Globe, Users } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { ContactCTA } from "../components/ContactCTA";

export const metadata: Metadata = {
  title: "Immigration Platform — AI-Powered Canada Immigration Platform",
  description:
    "Immigration Platform is an AI-powered immigration platform with CRS calculator, Express Entry guidance, PNP program matching, and consultation booking for Canada and USA pathways.",
  keywords: [
    "Immigration Platform",
    "immigration consultant Surrey BC",
    "Express Entry Canada",
    "CRS calculator",
    "Canada PR consultant",
    "work permit Canada",
    "study permit Canada",
    "provincial nominee program"
  ],
  alternates: { canonical: "/immigration-platform" },
  openGraph: {
    title: "Immigration Platform — AI-Powered Canada Immigration Platform",
    description:
      "CRS calculator, AI immigration advisor, and expert consultation for Express Entry, PNP, work permits, and study permits.",
    type: "website",
    url: "/immigration-platform"
  },
  twitter: {
    card: "summary_large_image",
    title: "Immigration Platform — AI-Powered Canada Immigration Platform",
    description: "Expert immigration guidance for Canada and USA with AI tools and human consultants."
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Immigration Platform",
  description:
    "Immigration Platform is an AI-powered immigration platform offering Express Entry, PNP, work permit, study permit, and citizenship consulting for Canada.",
  provider: {
    "@type": "Organization",
    name: "Jungle Labs",
    url: "https://www.junglelabsworld.ca"
  },
  areaServed: ["Canada", "United States"],
  serviceType: "Immigration Consulting",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surrey",
    addressRegion: "BC",
    addressCountry: "CA"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What immigration programs does Immigration Platform cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Immigration Platform covers Express Entry, Provincial Nominee Programs (PNP), work permits, study permits, visitor visas, citizenship applications, and USA immigration pathways."
      }
    },
    {
      "@type": "Question",
      name: "Does Immigration Platform have a CRS score calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Immigration Platform's platform includes a free CRS score calculator that estimates your Express Entry ranking and shows how to improve your profile for higher draw invitations."
      }
    },
    {
      "@type": "Question",
      name: "Can Immigration Platform help with visa refusals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The team analyzes refusal reasons, strengthens the documentation, and prepares a stronger reapplication strategy to address the specific concerns raised by immigration authorities."
      }
    },
    {
      "@type": "Question",
      name: "Where is Immigration Platform located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Immigration Platform is headquartered in Surrey, BC with branch offices in Calgary, and international locations in Gajsinghpur and Zira."
      }
    }
  ]
};

const programs = [
  {
    icon: Globe,
    title: "Express Entry",
    description: "Federal skilled worker pathway with CRS ranking, profile optimization, and full PR application management.",
    timeline: "6–10 months"
  },
  {
    icon: FileText,
    title: "Provincial Nominee Programs",
    description: "Province-specific streams with +600 CRS point nominations. The platform maps your profile to the best-fit province.",
    timeline: "8–14 months"
  },
  {
    icon: BookOpen,
    title: "Study Permits",
    description: "From school selection to permit filing, with a built-in post-graduation PR transition strategy.",
    timeline: "6–14 weeks"
  },
  {
    icon: Users,
    title: "Work Permits",
    description: "Employer-backed and open work permit support for temporary and long-term Canada pathways.",
    timeline: "2–6 months"
  },
  {
    icon: CheckCircle,
    title: "Visitor Visas",
    description: "TRV and extension support with refusal-risk mitigation and documentation review.",
    timeline: "3–12 weeks"
  },
  {
    icon: Globe,
    title: "Citizenship",
    description: "Eligibility audits, application prep, and test and interview preparation for Canadian citizenship.",
    timeline: "12–24 months"
  }
];

const platformFeatures = [
  {
    icon: Calculator,
    title: "CRS Score Calculator",
    description: "Instant Express Entry ranking estimate with a factor-by-factor breakdown and improvement recommendations."
  },
  {
    icon: Bot,
    title: "AI Immigration Advisor",
    description: "Ask any immigration question and get instant, accurate guidance tailored to your profile and situation."
  },
  {
    icon: FileText,
    title: "PR Strategy Report",
    description: "A personalized roadmap showing the fastest pathway to Canadian permanent residency based on your profile."
  },
  {
    icon: Users,
    title: "Consultation Booking",
    description: "Book directly with a regulated immigration consultant for document review, strategy, and application support."
  }
];

export default function NewtonImmigrationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="section-shell pt-20 md:pt-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-400/8 via-black to-emerald-400/5 px-8 py-16 md:px-14 md:py-24">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">
              Immigration Tech · Deployed
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Canada Immigration,<br />Guided by AI.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Immigration Platform combines expert human consultants with AI-powered tools — CRS calculator, program
              matching, AI advisor, and PR strategy reports — to move your Canada immigration journey forward faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/newton_immigration/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/solutions/express-entry-canada-consultant"
                className="rounded-full border border-cyan-300/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                Express Entry Guide
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
              <span>📍 Surrey, BC · Calgary · International</span>
              <span>🌐 Canada &amp; USA Pathways</span>
              <span>🤖 AI-Powered Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Tools */}
      <section className="section-shell mt-24">
        <p className="section-kicker">Platform</p>
        <h2 className="section-title">AI tools built for immigration clarity</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Immigration Platform is more than a consulting firm — it&apos;s a platform with live tools that help you
          understand your options, calculate your scores, and get a strategy before you book a single meeting.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="glass-card p-6">
                <div className="mb-4 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Immigration Programs */}
      <section className="section-shell mt-24">
        <p className="section-kicker">Programs</p>
        <h2 className="section-title">Every pathway to Canada, covered</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <article key={program.title} className="glass-card p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-cyan-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/60">
                    {program.timeline}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{program.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{program.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-shell mt-24">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title">Common questions about Immigration Platform</h2>
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
          <a href="/solutions/immigration-consultant-surrey-bc" className="glass-card px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
            Immigration Consultant Surrey BC →
          </a>
          <a href="/solutions/express-entry-canada-consultant" className="glass-card px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
            Express Entry Consultant →
          </a>
          <a href="/solutions/crs-score-calculator-canada" className="glass-card px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
            CRS Score Calculator →
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
