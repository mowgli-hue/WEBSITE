"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { AnimatedSection } from "./AnimatedSection";
import { testimonials } from "../lib/schemas";

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5"
          fill={i < count ? "#4ade80" : "transparent"}
          stroke={i < count ? "#4ade80" : "rgba(255,255,255,0.25)"}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="section-shell mt-28">
      <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker">What clients say</p>
          <h2 className="section-title">
            Real results, <span className="gradient-text">real teams</span>
          </h2>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-300/25 bg-emerald-300/5 px-4 py-3">
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-emerald-300">5.0</span>
              <span className="text-xs text-white/55">/ 5</span>
            </div>
            <StarRow count={5} />
          </div>
          <div className="border-l border-white/10 pl-3 text-xs leading-tight text-white/65">
            Average client<br />satisfaction rating
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="glass-card glow-border relative overflow-hidden p-6"
          >
            <Quote className="absolute right-6 top-6 h-7 w-7 text-emerald-300/25" />
            <StarRow count={t.rating} />
            <blockquote className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-white/10 pt-4">
              <p className="text-sm font-semibold text-white">{t.author}</p>
              <p className="mt-0.5 text-xs text-white/55">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </AnimatedSection>
  );
}
