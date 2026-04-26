"use client";

import { motion } from "framer-motion";

const items = [
  { label: "RepTrack", sub: "Trusted by RCICs across Canada" },
  { label: "Immigration Platform", sub: "Surrey · Calgary · International" },
  { label: "Franco App", sub: "macOS & Windows" },
  { label: "Jungle Table Ordering OS", sub: "Restaurant technology" },
];

export function SocialProofBanner() {
  return (
    <section className="section-shell mt-10">
      <div className="glass-card overflow-hidden px-6 py-5">
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
          Products built and deployed by Jungle Labs
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-1 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 text-center"
            >
              <span className="text-sm font-semibold text-white">{item.label}</span>
              <span className="text-[11px] text-white/45">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
