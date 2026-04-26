import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "../lib/content";
import { BrandLogo } from "./BrandLogo";

const footerProducts = [
  { label: "Franco App", href: "/" },
  { label: "RepTrack", href: "/reptrack" },
  { label: "Immigration Platform", href: "/immigration-platform" },
  { label: "Jungle Table Ordering OS", href: "/jungle-table-ordering" },
];

const footerServices = [
  { label: "AI Automation Systems", href: "/solutions/ai-automation-agency-surrey" },
  { label: "Custom CRM Development", href: "/solutions/custom-crm-development-canada" },
  { label: "Business Intelligence", href: "/solutions/business-intelligence-dashboard-services" },
  { label: "Workflow Automation", href: "/solutions/workflow-automation-for-small-business" },
  { label: "All Services", href: "/services" },
];

const footerLearn = [
  { label: "Learn French", href: "/learn-french" },
  { label: "French for Beginners", href: "/learn-french-for-beginners" },
  { label: "French Speaking Practice", href: "/how-to-practice-french-speaking" },
  { label: "Best French Apps", href: "/best-app-to-learn-french" },
  { label: "Blog", href: "/blog" },
];

export function SiteFooter() {
  const linkedIn = socialLinks.find((l) => l.name === "LinkedIn")?.href ?? "#";
  const instagram = socialLinks.find((l) => l.name === "Instagram")?.href ?? "#";
  const facebook = socialLinks.find((l) => l.name === "Facebook")?.href ?? "#";

  return (
    <footer className="section-shell mt-24 pb-10">
      <div className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl">
        {/* Main footer grid */}
        <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <BrandLogo width={180} height={46} className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              AI automation, custom software, and digital products for modern businesses — including RepTrack, Immigration Platform, and Jungle Table Ordering OS.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/60">
              <p className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-cyan-300" /> Surrey, BC, Canada</p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-cyan-300" />
                <a href="mailto:admin@junglelabsworld.com" className="transition hover:text-cyan-200">admin@junglelabsworld.com</a>
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-cyan-300" />
                <a href="tel:+16049028699" className="transition hover:text-cyan-200">+1 (604) 902-8699</a>
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-white/40">Products</p>
            <ul className="space-y-2.5">
              {footerProducts.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/65 transition hover:text-cyan-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-white/40">Services</p>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/65 transition hover:text-cyan-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn / Resources */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-white/40">Resources</p>
            <ul className="space-y-2.5">
              {footerLearn.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/65 transition hover:text-cyan-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 px-8 py-5 md:px-10">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Jungle Labs. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/45">
            <Link href="/privacy-policy" className="transition hover:text-cyan-200">Privacy</Link>
            <Link href="/terms-of-service" className="transition hover:text-cyan-200">Terms</Link>
            <Link href="/cookie-policy" className="transition hover:text-cyan-200">Cookies</Link>
            <Link href="/legal" className="transition hover:text-cyan-200">Legal</Link>
          </div>

          <div className="flex items-center gap-2">
            <a aria-label="Jungle Labs LinkedIn" href={linkedIn} target="_blank" rel="noreferrer"
              className="rounded-full border border-white/12 bg-white/5 p-2 text-white/70 transition hover:border-cyan-300/45 hover:text-cyan-200">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a aria-label="Jungle Labs Instagram" href={instagram} target="_blank" rel="noreferrer"
              className="rounded-full border border-white/12 bg-white/5 p-2 text-white/70 transition hover:border-cyan-300/45 hover:text-cyan-200">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a aria-label="Jungle Labs Facebook" href={facebook} target="_blank" rel="noreferrer"
              className="rounded-full border border-white/12 bg-white/5 p-2 text-white/70 transition hover:border-cyan-300/45 hover:text-cyan-200">
              <Facebook className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
