"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Database, Zap } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "./AnimatedSection";

const aiAgentEvents = [
  { tag: "New lead captured", sub: "Qualified & added to pipeline" },
  { tag: "DM replied", sub: "Automatically" },
  { tag: "Content published", sub: "Instagram Reel" }
];

const pillars = [
  { Icon: Zap, label: "Automation" },
  { Icon: Database, label: "Systems" },
  { Icon: BarChart3, label: "Growth" }
];

export function BuiltForScale() {
  return (
    <AnimatedSection id="built-for-scale" className="section-shell mt-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr]">
        {/* LEFT: AI Agents card with event stream */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-400">AI Agents</p>
          <h3 className="mt-3 text-2xl font-bold uppercase leading-tight text-white md:text-3xl">
            Intelligent systems<br />working <span className="text-emerald-400">24/7</span>.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            From lead nurturing to content creation, our AI agents run the operations
            so you can focus on growth.
          </p>

          {/* Event feed */}
          <div className="mt-6 space-y-2">
            {aiAgentEvents.map((event, i) => (
              <motion.div
                key={event.tag}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-black/40 px-3 py-2.5 backdrop-blur-md"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
                <div>
                  <p className="text-xs font-semibold text-white">{event.tag}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.1em] text-white/55">{event.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-6 inline-flex items-center gap-3 rounded-md border-2 border-emerald-400 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
          >
            View Agents
            <span className="flex h-6 w-6 items-center justify-center rounded border border-emerald-400">
              <ArrowRight className="h-3 w-3" />
            </span>
          </motion.a>
        </motion.div>

        {/* CENTER: Cube hologram showcase image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          {/* Outer glow */}
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-500/30 via-emerald-400/15 to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/30 shadow-[0_30px_80px_-20px_rgba(34,197,94,0.55)]">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/4 bg-gradient-to-t from-black/40 to-transparent" />
            <Image
              src="/jungle-cube.png"
              alt="Jungle Labs intelligent systems: AI agents, automation flow, content pipeline, and performance analytics working together"
              width={1536}
              height={1024}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* RIGHT: Automate / Optimize / Scale */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="order-3"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-400">Built For Scale</p>
          <h3 className="mt-3 text-2xl font-bold uppercase leading-tight text-white md:text-3xl">
            Automate.<br />Optimize.<br /><span className="text-emerald-400">Scale.</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            We build custom systems that eliminate manual work and unlock infinite growth
            for your business.
          </p>

          {/* Three pillar icons */}
          <div className="mt-7 grid grid-cols-3 gap-3">
            {pillars.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-xl border border-emerald-400/20 bg-black/30 px-3 py-4 backdrop-blur-md transition hover:border-emerald-400/45 hover:bg-emerald-950/20">
                <Icon className="h-6 w-6 text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
