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
    <header className="sticky top-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(3,6,12,0.92)" : "rgba(3,6,12,0.55)",
          borderBottomColor: scrolled ? "rgba(34,197,94,0.18)" : "rgba(255,255,255,0.05)"
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full border-b backdrop-blur-xl"
      >
        <div className="section-wide flex items-center justify-between py-4">
          {/* Logo + wordmark */}
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <BrandLogo width={42} height={42} className="h-10 w-10" priority />
            <span className="hidden text-lg font-bold uppercase tracking-[0.18em] text-white sm:inline">
              Jungle Labs
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => {
              const isAnchor = item.href.startsWith("#");
              const Tag: React.ElementType = isAnchor ? "a" : Link;
              return (
                <Tag
                  key={item.href}
                  href={item.href}
                  className="group relative text-xs font-bold uppercase tracking-[0.22em] text-white/80 transition hover:text-emerald-400"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                </Tag>
              );
            })}
          </div>

          {/* CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={() => trackEvent("lets_build_click", { placement: "navbar" })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group hidden items-center gap-3 rounded-md border-2 border-emerald-400 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 transition hover:bg-emerald-400 hover:text-black sm:inline-flex"
            >
              Let&apos;s Build
              <span className="flex h-6 w-6 items-center justify-center rounded border border-emerald-400 transition group-hover:border-black/40">
                <ArrowRight className="h-3 w-3" />
              </span>
            </motion.a>

            <button
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 text-white/80 transition hover:border-emerald-300/35 hover:text-emerald-200 lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-b border-white/10 bg-black/90 backdrop-blur-xl lg:hidden"
          >
            <div className="section-wide flex flex-col gap-1 py-4">
              {navLinks.map((item) => {
                const isAnchor = item.href.startsWith("#");
                const Tag: React.ElementType = isAnchor ? "a" : Link;
                return (
                  <Tag
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80 transition hover:bg-white/5 hover:text-emerald-300"
                  >
                    {item.label}
                  </Tag>
                );
              })}
              <a
                href="#contact"
                onClick={() => {
                  setOpen(false);
                  trackEvent("lets_build_click", { placement: "navbar_mobile" });
                }}
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-md border-2 border-emerald-400 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
              >
                Let&apos;s Build
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
