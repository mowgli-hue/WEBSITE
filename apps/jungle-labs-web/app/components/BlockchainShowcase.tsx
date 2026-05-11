"use client";

import { motion } from "framer-motion";
import { Boxes, Coins, Fingerprint, Layers, Link2, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "./AnimatedSection";

const pillars = [
  {
    icon: Boxes,
    title: "Tokenization Engines",
    body: "Turn real-world assets, loyalty points, and equity into programmable tokens with built-in compliance hooks.",
    accent: "from-violet-300/40 to-cyan-300/40",
    tint: "text-violet-300"
  },
  {
    icon: Link2,
    title: "On-Chain Infrastructure",
    body: "Smart contracts, wallets, and ledger pipelines that talk fluently to the rest of your business stack.",
    accent: "from-cyan-300/40 to-emerald-300/40",
    tint: "text-cyan-300"
  },
  {
    icon: ShieldCheck,
    title: "Trust & Auditability",
    body: "Cryptographic audit trails, role-based signing, and zero-knowledge primitives where they actually pay off.",
    accent: "from-emerald-300/40 to-violet-300/40",
    tint: "text-emerald-300"
  },
  {
    icon: Fingerprint,
    title: "Identity & Access",
    body: "Decentralized identity, on-chain credentials, and KYC-ready flows that don't trash the user experience.",
    accent: "from-amber-300/40 to-cyan-300/40",
    tint: "text-amber-300"
  }
];

function AnimatedChain() {
  const blocks = [0, 1, 2, 3, 4];
  return (
    <div className="relative h-56 w-full overflow-hidden">
      {/* horizontal track line */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 220" aria-hidden="true">
        <defs>
          <linearGradient id="chainTrack" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(167,139,250,0.05)" />
            <stop offset="50%" stopColor="rgba(56,189,248,0.5)" />
            <stop offset="100%" stopColor="rgba(52,211,153,0.05)" />
          </linearGradient>
          <linearGradient id="blockFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(15,23,42,0.9)" />
            <stop offset="100%" stopColor="rgba(2,6,12,0.95)" />
          </linearGradient>
        </defs>
        <line x1="0" y1="110" x2="600" y2="110" stroke="url(#chainTrack)" strokeWidth="1.2" />
        <line x1="0" y1="110" x2="600" y2="110" stroke="url(#chainTrack)" strokeWidth="3" className="dash-flow" opacity="0.6" />
      </svg>

      {/* chain blocks */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {blocks.map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-28 w-24 rounded-xl border border-cyan-300/30 bg-[#06101c]/90 p-3 shadow-[0_18px_38px_-22px_rgba(56,189,248,0.7)]">
              {/* glow corner */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
              <div className="text-[9px] font-mono uppercase tracking-[0.12em] text-cyan-200/80">block #{1024 + i}</div>
              <div className="mt-2 space-y-1.5">
                <div className="h-1 w-full rounded-full bg-violet-300/60" />
                <div className="h-1 w-3/4 rounded-full bg-cyan-300/60" />
                <div className="h-1 w-2/3 rounded-full bg-emerald-300/60" />
                <div className="h-1 w-1/2 rounded-full bg-cyan-300/40" />
              </div>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-[8px] text-emerald-300">0x{(i * 7 + 4).toString(16)}a4f</span>
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-300"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.6 + i * 0.2 }}
                />
              </div>
            </div>
            {/* connector between blocks */}
            {i < blocks.length - 1 && (
              <div className="absolute -right-7 top-1/2 h-px w-7 -translate-y-1/2 bg-gradient-to-r from-cyan-300/60 to-cyan-300/0" />
            )}
          </motion.div>
        ))}
      </div>

      {/* floating coin tokens above */}
      <motion.div
        className="absolute left-[12%] top-2"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Coins className="h-5 w-5 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
      </motion.div>
      <motion.div
        className="absolute right-[18%] top-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.6, delay: 0.6 }}
      >
        <Layers className="h-5 w-5 text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
      </motion.div>
    </div>
  );
}

export function BlockchainShowcase() {
  return (
    <AnimatedSection id="blockchain" className="section-shell mt-28">
      <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker">Blockchain & Tokenization</p>
          <h2 className="section-title">
            On-chain systems built for <span className="gradient-text">real businesses</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            We build the practical side of blockchain: tokenization, smart contracts, identity, and audit
            infrastructure that plugs into your existing CRM, analytics, and AI workflows.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-violet-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-violet-200 transition hover:border-violet-300/55 hover:bg-violet-300/15"
        >
          Talk to our team
        </a>
      </div>

      {/* animated chain visual */}
      <div className="glass-card mb-8 overflow-hidden p-6">
        <AnimatedChain />
      </div>

      {/* pillar grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card glow-border group relative overflow-hidden p-6"
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                  <Icon className={`h-5 w-5 ${p.tint}`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{p.body}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
