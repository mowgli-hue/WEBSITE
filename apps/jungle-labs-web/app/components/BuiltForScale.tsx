"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Bot, Database, Zap } from "lucide-react";

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

/**
 * Central brain-chip SVG visual.
 * Inspired by the reference: glowing brain on a chip surrounded by data pathways.
 */
function BrainChipVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Pulsing rings */}
      <div className="pointer-events-none absolute inset-[18%] rounded-full border border-emerald-400/15">
        <span className="pulse-ring absolute inset-0 rounded-full border border-emerald-400/30" />
      </div>
      <div className="pointer-events-none absolute inset-[6%] rounded-full border border-emerald-400/10">
        <span className="pulse-ring absolute inset-0 rounded-full border border-emerald-400/20" style={{ animationDelay: "1.2s" }} />
      </div>

      <svg viewBox="0 0 400 400" className="relative h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(74,222,128,0.9)" />
            <stop offset="60%" stopColor="rgba(74,222,128,0.4)" />
            <stop offset="100%" stopColor="rgba(34,197,94,0)" />
          </radialGradient>
          <linearGradient id="chipGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0f0c" />
            <stop offset="100%" stopColor="#040806" />
          </linearGradient>
          <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(74,222,128,0.05)" />
            <stop offset="50%" stopColor="rgba(74,222,128,0.7)" />
            <stop offset="100%" stopColor="rgba(74,222,128,0.05)" />
          </linearGradient>
        </defs>

        {/* Circuit board background */}
        <g opacity="0.4">
          {/* Vertical pathways radiating from chip */}
          {[60, 100, 140, 260, 300, 340].map((x) => (
            <line key={`v-${x}`} x1={x} y1="220" x2={x} y2={x > 200 ? 380 : 380} stroke="url(#pathGrad)" strokeWidth="1" className="dash-flow" />
          ))}
          {/* Connection nodes */}
          {[60, 100, 140, 260, 300, 340].map((x) => (
            <circle key={`n-${x}`} cx={x} cy="378" r="3" fill="#4ade80">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${x * 0.005}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* Chip base */}
        <g transform="translate(120, 200)">
          <rect x="0" y="0" width="160" height="80" rx="8" fill="url(#chipGrad)" stroke="#4ade80" strokeWidth="1.5" />
          {/* chip pins */}
          {[10, 25, 40, 55, 70, 85, 100, 115, 130, 145].map((x) => (
            <rect key={`pin-${x}`} x={x} y="-4" width="3" height="4" fill="#4ade80" opacity="0.7" />
          ))}
          {[10, 25, 40, 55, 70, 85, 100, 115, 130, 145].map((x) => (
            <rect key={`pin2-${x}`} x={x} y="80" width="3" height="4" fill="#4ade80" opacity="0.7" />
          ))}
          {/* center glow square */}
          <rect x="60" y="20" width="40" height="40" rx="4" fill="url(#brainGlow)" />
          <rect x="60" y="20" width="40" height="40" rx="4" fill="none" stroke="#4ade80" strokeWidth="1" />
          <text x="80" y="46" textAnchor="middle" fill="#bbf7d0" fontSize="11" fontWeight="700">AI</text>
        </g>

        {/* Brain icon hovering above chip */}
        <g transform="translate(200, 130)">
          {/* Brain glow */}
          <circle cx="0" cy="0" r="60" fill="url(#brainGlow)" opacity="0.7" />

          {/* Stylized brain — two hemispheres made of curves */}
          <g filter="url(#none)">
            <path
              d="M -28 -12 C -38 -8, -38 4, -28 10 C -32 18, -22 24, -14 20 C -10 26, 0 26, 0 22 L 0 -22 C -6 -28, -22 -22, -28 -12 Z"
              fill="rgba(74,222,128,0.18)"
              stroke="#4ade80"
              strokeWidth="2"
            />
            <path
              d="M 28 -12 C 38 -8, 38 4, 28 10 C 32 18, 22 24, 14 20 C 10 26, 0 26, 0 22 L 0 -22 C 6 -28, 22 -22, 28 -12 Z"
              fill="rgba(74,222,128,0.18)"
              stroke="#4ade80"
              strokeWidth="2"
            />
            {/* Brain ridges */}
            <path d="M -22 -6 C -16 -2, -10 -2, -6 -6" fill="none" stroke="#86efac" strokeWidth="1.4" />
            <path d="M -22 6 C -16 10, -10 10, -6 6" fill="none" stroke="#86efac" strokeWidth="1.4" />
            <path d="M 22 -6 C 16 -2, 10 -2, 6 -6" fill="none" stroke="#86efac" strokeWidth="1.4" />
            <path d="M 22 6 C 16 10, 10 10, 6 6" fill="none" stroke="#86efac" strokeWidth="1.4" />
          </g>

          {/* Neural sparkle dots */}
          {[
            { x: -18, y: -16, d: "0s" },
            { x: 16, y: -14, d: "0.7s" },
            { x: -10, y: 18, d: "1.4s" },
            { x: 12, y: 16, d: "2.1s" }
          ].map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r="2" fill="#bbf7d0">
              <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin={s.d} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* Vertical data line from chip to brain */}
        <line x1="200" y1="200" x2="200" y2="180" stroke="#4ade80" strokeWidth="2" className="dash-flow" />
      </svg>
    </div>
  );
}

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

        {/* CENTER: Brain chip visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <BrainChipVisual />
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
