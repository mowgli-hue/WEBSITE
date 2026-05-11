"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckSquare } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "./AnimatedSection";
import { trackEvent } from "../lib/analytics";

const todayList = [
  { label: "Build", done: true },
  { label: "Train", done: true },
  { label: "Optimize", done: true },
  { label: "Deploy", done: true },
  { label: "Repeat", done: false }
];

export function TodaysPlan() {
  return (
    <AnimatedSection id="todays-plan" className="section-shell mt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card relative overflow-hidden rounded-[2rem] p-0"
      >
        <div className="grid items-stretch lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT: Photo, fills height */}
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-[#04080e]" />
            <Image
              src="/jungle-monkeys-coding.png"
              alt="Jungle Labs team building AI automation and analytics platforms"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* RIGHT: Today's plan checklist + CTA */}
          <div className="relative flex flex-col justify-center gap-6 p-8 md:p-12">
            <p className="section-kicker">Today&apos;s Plan</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Ready to <span className="neon-green">build with us</span>?
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Tell us what you&apos;re building. We&apos;ll map an architecture, scope a sprint plan, and have your
              first deliverable in your hands within two weeks.
            </p>

            {/* Animated checklist */}
            <ul className="space-y-2 rounded-2xl border border-emerald-300/15 bg-black/40 p-5">
              {todayList.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <CheckSquare className={item.done ? "h-4 w-4 text-emerald-300" : "h-4 w-4 text-white/30"} />
                  <span className={item.done ? "text-white/80 line-through decoration-emerald-300/60" : "text-emerald-200"}>
                    {item.label}
                    {!item.done && <span className="ml-2 text-[10px] uppercase tracking-[0.14em] text-emerald-300/80">← you are here</span>}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                href="#contact"
                onClick={() => trackEvent("todays_plan_cta", { placement: "todays_plan" })}
                whileHover={{ scale: 1.045 }}
                whileTap={{ scale: 0.97 }}
                className="shimmer-btn group inline-flex items-center gap-2 rounded-md bg-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_24px_-8px_rgba(34,197,94,0.7)] transition hover:bg-emerald-300"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <a
                href="mailto:admin@junglelabsworld.com"
                className="text-sm text-white/65 transition hover:text-emerald-200"
              >
                or email us directly →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
