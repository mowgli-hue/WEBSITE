"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

import { AnimatedSection } from "./AnimatedSection";
import { services } from "../lib/content";

function SpotlightCard({
  children,
  className = "",
  index = 0
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        setCoords({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }}
      className={`glass-card glow-border group relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(380px circle at ${coords.x}% ${coords.y}%, rgba(34,197,94,0.18), transparent 65%)`
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [feature, ...rest] = services;
  const FeatureIcon = feature.icon;

  return (
    <AnimatedSection id="services" className="section-shell mt-28">
      <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker">Services</p>
          <h2 className="section-title">
            Systems and platforms designed to <span className="gradient-text">scale</span> your operation
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200 transition hover:border-emerald-300/55"
        >
          See pricing
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Bento layout: 1 large featured + 4 medium + small row */}
      <div className="grid gap-5 md:grid-cols-6 md:grid-rows-[auto_auto]">
        {/* Featured card */}
        <SpotlightCard className="p-8 md:col-span-3 md:row-span-2" index={0}>
          <div className="flex h-full flex-col">
            <div className="mb-5 inline-flex w-fit rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-3 text-emerald-200">
              <FeatureIcon className="h-6 w-6" />
            </div>
            <span className="inline-flex w-fit rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
              Featured
            </span>
            <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">{feature.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-white/75">{feature.short}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{feature.details}</p>

            <div className="mt-auto pt-8">
              <div className="flex flex-wrap gap-2">
                {["Agents", "Pipelines", "Triggers", "Observability"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* decorative grid */}
            <svg className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-30" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.4" fill="rgba(52,211,153,0.5)" />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#dots)" />
            </svg>
          </div>
        </SpotlightCard>

        {/* 4 supporting cards */}
        {rest.slice(0, 4).map((service, idx) => {
          const Icon = service.icon;
          const span = idx < 2 ? "md:col-span-3" : "md:col-span-3";
          return (
            <SpotlightCard key={service.title} className={`p-6 ${span}`} index={idx + 1}>
              <div className="mb-4 inline-flex rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-3 text-emerald-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{service.short}</p>
              <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-emerald-100/0 transition-all duration-500 group-hover:max-h-48 group-hover:text-emerald-100/80">
                {service.details}
              </p>
            </SpotlightCard>
          );
        })}

        {/* Remaining cards in compact row */}
        {rest.slice(4).map((service, idx) => {
          const Icon = service.icon;
          return (
            <SpotlightCard key={service.title} className="p-6 md:col-span-6" index={idx + 5}>
              <div className="flex items-start gap-4">
                <div className="inline-flex rounded-xl border border-green-300/30 bg-green-300/10 p-3 text-green-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{service.short}</p>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
