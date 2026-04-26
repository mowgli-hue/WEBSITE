"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { AnimatedSection } from "./AnimatedSection";

const points = [
  "We design systems that reduce manual work and improve decision speed.",
  "We ship production-ready software with clear architecture and measurable outcomes.",
  "We combine product design, data, and AI execution in one integrated team."
];

const stats = [
  { value: "4", label: "Products Shipped" },
  { value: "3+", label: "Years Building" },
  { value: "BC", label: "Based in Canada" },
  { value: "24h", label: "Response Time" }
];

export function StorySection() {
  return (
    <AnimatedSection className="section-shell mt-24">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-card p-7 md:p-9">
          <p className="section-kicker">Why Jungle Labs</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            We build digital systems that actually change business performance.
          </h2>
          <p className="mt-4 leading-relaxed text-white/72">
            Most teams have tools but not a true operating system. Jungle Labs creates connected AI and software
            infrastructure that turns fragmented workflows into consistent, scalable execution.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-white/78">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                {point}
              </li>
            ))}
          </ul>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-4 gap-3 border-t border-white/10 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-semibold text-emerald-300">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="glass-card relative overflow-hidden p-7 md:p-9"
        >
          <div className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-cyan-300/15 blur-3xl" />
          <p className="section-kicker">Execution Promise</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">From idea to deployment with zero ambiguity</h3>
          <p className="mt-4 leading-relaxed text-white/72">
            Every engagement includes architecture planning, milestone delivery, and KPI tracking so progress is transparent
            from week one.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <p className="text-xs uppercase tracking-[0.11em] text-cyan-100/70">Delivery Model</p>
              <p className="mt-2 text-white">Sprint-based</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <p className="text-xs uppercase tracking-[0.11em] text-cyan-100/70">Reporting</p>
              <p className="mt-2 text-white">Weekly KPI Reviews</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <p className="text-xs uppercase tracking-[0.11em] text-cyan-100/70">Architecture</p>
              <p className="mt-2 text-white">Discovery First</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <p className="text-xs uppercase tracking-[0.11em] text-cyan-100/70">Support</p>
              <p className="mt-2 text-white">Post-Launch Care</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
