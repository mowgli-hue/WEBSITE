"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { navLinks } from "../lib/content";
import { trackEvent } from "../lib/analytics";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 section-shell">
      <nav className="mt-4 flex items-center justify-between rounded-full border border-cyan-300/15 bg-black/55 px-5 py-3 backdrop-blur-xl">
        <Link href="/" className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-white">
          <BrandLogo width={150} height={36} className="h-8 w-auto" priority />
          <Sparkles className="h-4 w-4 text-cyan-300" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-white/75 lg:flex">
          {navLinks.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={() => trackEvent("start_project_click", { placement: "navbar" })}
            className="hidden rounded-full border border-emerald-300/35 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100 transition hover:from-emerald-400/30 hover:to-cyan-400/30 sm:inline-flex"
          >
            Start a Project
          </a>

          {/* Mobile hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:border-cyan-300/35 hover:text-cyan-200 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-cyan-200"
                >
                  {item.label}
                </a>
              )
            )}
            <div className="mt-2 border-t border-white/10 pt-3">
              <a
                href="#contact"
                onClick={() => { setOpen(false); trackEvent("start_project_click", { placement: "navbar_mobile" }); }}
                className="inline-flex w-full items-center justify-center rounded-full border border-emerald-300/35 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 px-4 py-2.5 text-sm font-semibold text-emerald-100 transition hover:from-emerald-400/30 hover:to-cyan-400/30"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
