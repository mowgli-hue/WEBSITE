"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "./AnimatedSection";

const principles = [
  "Researchers who actually ship",
  "Engineers who care about UX",
  "Builders who measure outcomes",
  "Partners, not contractors"
];

export function OurTeam() {
  return (
    <AnimatedSection id="team" className="section-shell mt-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT: Copy */}
        <div className="space-y-5">
          <p className="section-kicker">The Pack</p>
          <h2 className="section-title">
            One <span className="gradient-text">team</span>. Every skill you need.
          </h2>
          <p className="text-base leading-relaxed text-white/80">
            From research to build to train to deploy — we&apos;re a small, fierce pack of operators who&apos;ve
            shipped real products together. No silos. No handoffs. One project plan, one team, one outcome.
          </p>

          <ul className="space-y-2 pt-2">
            {principles.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                {p}
              </motion.li>
            ))}
          </ul>

          {/* mini stat strip */}
          <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-semibold text-emerald-300">4+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/70">Products Shipped</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-emerald-300">3+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/70">Years Building</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-emerald-300">24h</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/70">Response Time</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Team photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="leaf-shimmer relative overflow-hidden rounded-2xl border border-emerald-300/20">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-bl from-transparent via-transparent to-black/30" />
            <Image
              src="/jungle-team.png"
              alt="Jungle Labs cross-functional product team collaborating on AI and blockchain projects"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />

            {/* floating "now working on" chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-black/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Project In Progress
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
