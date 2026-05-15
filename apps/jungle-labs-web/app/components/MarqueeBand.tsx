"use client";

import { Boxes, BrainCircuit, ChartLine, Cpu, Database, Globe, Network, ShieldCheck, Workflow, Zap } from "lucide-react";

const items = [
  { Icon: BrainCircuit, label: "AI Agents" },
  { Icon: Network, label: "Blockchain" },
  { Icon: Boxes, label: "Tokenization" },
  { Icon: Database, label: "CRM Systems" },
  { Icon: ChartLine, label: "Analytics" },
  { Icon: Workflow, label: "Automation" },
  { Icon: ShieldCheck, label: "Smart Contracts" },
  { Icon: Cpu, label: "Edge Compute" },
  { Icon: Globe, label: "Web Platforms" },
  { Icon: Zap, label: "Realtime Systems" }
];

export function MarqueeBand() {
  // Double the list so the marquee loops seamlessly
  const list = [...items, ...items];

  return (
    <section className="relative my-16 overflow-hidden border-y border-emerald-300/10 bg-black/30 py-6 backdrop-blur-sm">
      {/* fade masks left/right so it doesn't clip awkwardly */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04080e] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04080e] to-transparent" />

      <div className="marquee-track gap-12">
        {list.map(({ Icon, label }, i) => (
          <div
            key={`${label}-${i}`}
            className="group flex shrink-0 items-center gap-3 px-4 text-white/70 transition hover:text-emerald-200"
          >
            <Icon className="h-5 w-5 text-emerald-300/70 transition group-hover:scale-110 group-hover:text-emerald-200" />
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em]">
              {label}
            </span>
            <span className="ml-8 inline-block h-1 w-1 rounded-full bg-emerald-300/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
