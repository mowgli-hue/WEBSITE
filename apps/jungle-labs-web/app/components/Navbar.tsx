"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navLinks } from "../lib/content";
import { trackEvent } from "../lib/analytics";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handle() {
      setScrolled(window.scrollY > 24);
    }
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header className="sticky top-4 z-50 section-wide">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(4,7,13,0.78)" : "rgba(0,0,0,0.45)",
          borderColor: scrolled ? "rgba(34,197,94,0.28)" : "rgba(34,197,94,0.15)",
          boxShadow: scrolled
            ? "0 18px 40px -28px rgba(34,197,94,0.45), 0 8px 22px -18px rgba(52,211,153,0.35)"
            : "0 0 0 transparent"
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-4 flex items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-white">
          <BrandLogo width={48} height={48} className="h-10 w-10" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-white/75 lg:flex">
          {navLinks.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className="group relative transition hover:text-emerald-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-emerald-300 to-emerald-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="group relative transition hover:text-emerald-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-emerald-300 to-emerald-300 transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            onClick={() => trackEvent("start_project_click", { placement: "navbar" })}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shimmer-btn hidden items-center gap-2 rounded-xl border border-emerald-300/40 bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200 transition hover:bg-emerald-400/10 sm:inline-flex"
          >
            Get in Touch
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:border-emerald-300/35 hover:text-emerald-200 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/85 p-4 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-emerald-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-emerald-200"
                  >
                    {item.label}
                  </a>
                )
              )}
              <div className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="#contact"
                  onClick={() => {
                    setOpen(false);
                    trackEvent("start_project_click", { placement: "navbar_mobile" });
                  }}
                  className="inline-flex w-full items-center justify-center rounded-full border border-emerald-300/35 bg-gradient-to-r from-emerald-400/20 to-emerald-400/20 px-4 py-2.5 text-sm font-semibold text-emerald-100 transition hover:from-emerald-400/30 hover:to-emerald-400/30"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
