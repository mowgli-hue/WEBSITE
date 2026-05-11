"use client";

import { motion } from "framer-motion";
import { Boxes, Cloud, Cpu, Database, Network, Shield } from "lucide-react";

const partners = [
  { name: "TechNova", Icon: Shield },
  { name: "CloudSync", Icon: Cloud },
  { name: "DataForge", Icon: Database },
  { name: "Alverse", Icon: Boxes },
  { name: "NextGen", Icon: Network },
  { name: "CodeCraft", Icon: Cpu }
];

export function SocialProofBanner() {
  return (
    <section className="section-shell mt-12">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
        Trusted by Innovators Worldwide
      </p>
      <div className="glass-card flex flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 py-5">
        {partners.map((p, i) => {
          const Icon = p.Icon;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-white/55 transition hover:text-emerald-200"
            >
              <Icon className="h-5 w-5" />
              <span className="text-base font-semibold tracking-tight">{p.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
