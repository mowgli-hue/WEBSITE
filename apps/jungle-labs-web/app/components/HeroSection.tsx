"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

import { ParticleField } from "./ParticleField";
import { trackEvent } from "../lib/analytics";

const stats = [
  { Icon: Rocket, value: "50+", label: "Projects Delivered" },
  { Icon: Users, value: "30+", label: "Happy Clients" },
  { Icon: Code2, value: "100K+", label: "Lines of Code" },
  { Icon: ShieldCheck, value: "99.9%", label: "Uptime Delivered" }
];

export function HeroSection() {
  return (
    <section className="section-shell relative pt-20 md:pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem] border border-emerald-300/10 bg-gradient-to-br from-emerald-900/40 via-black to-emerald-950/60" />
      <ParticleField />

      <div className="relative grid items-center gap-10 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT: Headline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 space-y-7"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/95">
            <span className="h-3 w-[2px] bg-emerald-300" />
            Building Intelligent Systems
          </span>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            We Build. <br />
            You Scale. <br />
            Systems That <span className="text-emerald-300">Think.</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            At Jungle Labs, we engineer next-gen digital systems, AI solutions, blockchain
            platforms, and tokenization engines that drive real-world impact.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              href="#products"
              onClick={() => trackEvent("explore_work_click", { placement: "hero" })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="shimmer-btn inline-flex items-center gap-2 rounded-md bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#services"
              onClick={() => trackEvent("our_services_click", { placement: "hero" })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-200"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT: Hero photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-emerald-300/15 shadow-[0_30px_80px_-30px_rgba(16,185,129,0.5)]">
            {/* gradient veil to blend the photo into the page */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-l from-transparent via-black/10 to-black/55" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/75 to-transparent" />

            <Image
              src="/jungle-hero.png"
              alt="Jungle Labs engineering team coding in an immersive jungle workstation"
              width={1536}
              height={1024}
              priority
              className="relative h-auto w-full"
            />

            {/* floating live-status chip in the photo corner */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-black/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Systems Online
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar — sits over the hero with the photo behind */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-6 -mt-2 mb-10 md:mx-12"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-emerald-300/15 bg-black/55 backdrop-blur-xl md:grid-cols-4">
          {stats.map(({ Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
              className="group flex items-center gap-3 bg-[#04070d]/85 px-5 py-4 transition hover:bg-emerald-950/30"
            >
              <div className="inline-flex rounded-md border border-emerald-300/30 bg-emerald-300/10 p-2 text-emerald-300">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white md:text-2xl">{value}</span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/55">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
