"use client";

import { motion } from "framer-motion";
import { Bot, Boxes, ChartLine, Cloud, Cpu, Database, Globe, Lock, Network, Shield } from "lucide-react";

import { AnimatedSection } from "./AnimatedSection";

const stack = [
  { icon: Bot, label: "AI Agents", color: "text-emerald-300", glow: "rgba(52,211,153,0.7)" },
  { icon: Boxes, label: "Tokenization", color: "text-green-300", glow: "rgba(134,239,172,0.7)" },
  { icon: Network, label: "Blockchain", color: "text-emerald-300", glow: "rgba(34,197,94,0.7)" },
  { icon: Database, label: "Data Pipelines", color: "text-lime-300", glow: "rgba(163,230,53,0.7)" },
  { icon: Shield, label: "Zero-Trust", color: "text-emerald-300", glow: "rgba(52,211,153,0.7)" },
  { icon: ChartLine, label: "Analytics", color: "text-emerald-300", glow: "rgba(34,197,94,0.7)" },
  { icon: Cloud, label: "Cloud Native", color: "text-green-300", glow: "rgba(134,239,172,0.7)" },
  { icon: Lock, label: "Cryptography", color: "text-lime-300", glow: "rgba(163,230,53,0.7)" },
  { icon: Globe, label: "Web3", color: "text-emerald-300", glow: "rgba(52,211,153,0.7)" },
  { icon: Cpu, label: "Edge Compute", color: "text-emerald-300", glow: "rgba(34,197,94,0.7)" }
];

// inner and outer rings split
const inner = stack.slice(0, 5);
const outer = stack.slice(5);

export function TechOrbit() {
  return (
    <AnimatedSection id="tech-stack" className="section-shell mt-28">
      <div className="mb-12 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="section-kicker">The Stack</p>
          <h2 className="section-title">
            One <span className="gradient-text">intelligent</span> stack. Every layer working together.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            AI, blockchain, and analytics aren&apos;t separate boxes for us — they&apos;re a single composable
            stack. Tokens flow into ledgers, ledgers feed analytics, analytics feed AI agents, AI agents
            trigger contracts. Everything talks.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Composable architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Production hardened
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-300" /> Chain-agnostic
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" /> Built for audit
            </li>
          </ul>
        </div>

        {/* orbit visualization */}
        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
          {/* outer dashed ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-emerald-300/15" />
          <div className="absolute inset-[14%] rounded-full border border-dashed border-green-300/15" />
          <div className="absolute inset-[34%] rounded-full border border-dashed border-emerald-300/15" />

          {/* outer ring icons - spinning slowly */}
          <div className="spin-slow absolute inset-0">
            {outer.map((item, i) => {
              const angle = (i / outer.length) * 360;
              const radius = 50;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="absolute spin-reverse"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/60 backdrop-blur-md"
                    style={{ boxShadow: `0 0 22px -6px ${item.glow}` }}
                  >
                    <Icon className={`h-5 w-5 ${item.color}`} />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* inner ring icons - spinning reverse */}
          <div className="spin-reverse absolute inset-[18%]">
            {inner.map((item, i) => {
              const angle = (i / inner.length) * 360 - 90;
              const radius = 50;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="absolute spin-slow"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/70 backdrop-blur-md"
                    style={{ boxShadow: `0 0 18px -4px ${item.glow}` }}
                  >
                    <Icon className={`h-4 w-4 ${item.color}`} />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* center core */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-300/40 bg-gradient-to-br from-emerald-300/30 via-emerald-300/15 to-green-300/30 backdrop-blur-xl">
              <span className="pulse-ring absolute inset-0 rounded-full border border-emerald-300/50" />
              <span className="pulse-ring absolute inset-0 rounded-full border border-green-300/50" style={{ animationDelay: "1.2s" }} />
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200">core</div>
                <div className="mt-0.5 text-sm font-semibold text-white">Jungle OS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
