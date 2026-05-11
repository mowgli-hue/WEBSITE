"use client";

import { motion } from "framer-motion";
import { Code, Brain, Wrench, Rocket, Repeat } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "./AnimatedSection";

const steps = [
  {
    Icon: Code,
    label: "Code",
    detail: "We architect production-grade systems from day one — clean, scalable, audit-ready."
  },
  {
    Icon: Brain,
    label: "Train",
    detail: "AI models fine-tuned on your data, your workflows, your customers."
  },
  {
    Icon: Wrench,
    label: "Optimize",
    detail: "Every endpoint, query, and pipeline benchmarked and tuned for speed."
  },
  {
    Icon: Rocket,
    label: "Deploy",
    detail: "Shipped with CI/CD, monitoring, and rollback — no surprises in production."
  },
  {
    Icon: Repeat,
    label: "Repeat",
    detail: "We measure, learn, iterate. Compounding improvements every sprint."
  }
];

export function HowWeWork() {
  return (
    <AnimatedSection id="how-we-work" className="section-shell mt-28">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">How We Work</p>
        <h2 className="section-title">
          Our process is <span className="gradient-text">battle-tested</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          Five steps. Repeated relentlessly. From the jungle to your dashboard — this is how we ship systems
          that scale.
        </p>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="leaf-shimmer relative overflow-hidden rounded-2xl border border-emerald-300/20">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            <Image
              src="/jungle-chimp-waterfall.png"
              alt="Jungle Labs engineer at jungle workstation with code/train/optimize/deploy/repeat signs"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
            {/* floating caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-black/65 px-3 py-1.5 font-mono text-[11px] text-emerald-100 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
              <span>while(true) {`{ ship(); }`}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: Animated step list */}
        <div className="space-y-3">
          {steps.map(({ Icon, label, detail }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6 }}
              className="glass-card glow-border group relative overflow-hidden p-5"
            >
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-300 transition group-hover:scale-110 group-hover:bg-emerald-300/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  {/* step number */}
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-black">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold uppercase tracking-wider text-white">{label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
