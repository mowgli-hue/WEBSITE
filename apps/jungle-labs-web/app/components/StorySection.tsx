"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "./AnimatedSection";

const points = [
  "We design systems that reduce manual work and improve decision speed.",
  "We ship production-ready software with clear architecture and measurable outcomes.",
  "We combine product design, data, and AI execution in one integrated team."
];

const stats = [
  { value: "4+", label: "Products Shipped" },
  { value: "3+", label: "Years Building" },
  { value: "BC", label: "Based in Canada" },
  { value: "24h", label: "Response Time" }
];

export function StorySection() {
  return (
    <AnimatedSection id="about" className="section-shell mt-24">
      <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1fr]">
        {/* LEFT: Copy + stats */}
        <div className="glass-card p-7 md:p-9">
          <p className="section-kicker">Who We Are</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            We build digital systems that actually change business performance.
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            Most teams have tools but not a true operating system. Jungle Labs creates connected AI and software
            infrastructure that turns fragmented workflows into consistent, scalable execution.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-white/80">
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
                <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Brand wall photo with overlaid promise */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-emerald-400/25 shadow-[0_30px_80px_-30px_rgba(34,197,94,0.5)]"
        >
          <Image
            src="/jungle-brand-wall.png"
            alt="Jungle Labs neon logo wall in modern Surrey office"
            fill
            quality={88}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* dark veil at bottom for text overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.2),_transparent_55%)]" />

          {/* Overlaid execution promise card */}
          <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-9">
            <p className="section-kicker">Execution Promise</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Idea to deployment, zero ambiguity.
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-white/80">
              Every engagement includes architecture planning, milestone delivery, and KPI tracking so progress is transparent from week one.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
              {[
                { label: "Delivery", value: "Sprint-based" },
                { label: "Reporting", value: "Weekly KPI" },
                { label: "Architecture", value: "Discovery first" },
                { label: "Support", value: "Post-launch" }
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-emerald-300/25 bg-black/65 p-3 backdrop-blur-md">
                  <p className="text-[9px] uppercase tracking-[0.14em] text-emerald-300/80">{item.label}</p>
                  <p className="mt-1 text-xs font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
