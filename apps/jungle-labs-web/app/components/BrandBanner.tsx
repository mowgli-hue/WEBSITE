"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const points = [
  { num: "01", label: "Strategy", detail: "We map your workflow and surface the highest-leverage automations." },
  { num: "02", label: "Build", detail: "Production-grade systems shipped in 4-8 week sprints." },
  { num: "03", label: "Scale", detail: "We monitor, iterate, and compound the wins quarter over quarter." }
];

export function BrandBanner() {
  return (
    <section className="relative my-28 w-full overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/jungle-lobby.png"
          alt="Jungle Labs office lobby with neon-green signage and integrated plant wall — Surrey BC headquarters"
          fill
          quality={88}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark veils so text reads cleanly */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(34,197,94,0.18),_transparent_55%)]" />
      </div>

      <div className="section-wide relative py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-400">
            Why Jungle Labs
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
            Built like a <span className="text-emerald-400">studio</span>.
            <br />
            Run like a <span className="text-emerald-400">product team</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            We&apos;re not an agency. We&apos;re a small, opinionated pack of operators that designs,
            builds, and runs intelligent systems for businesses that want to move fast.
          </p>

          {/* 3-step process */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {points.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="rounded-xl border border-emerald-400/20 bg-black/55 p-5 backdrop-blur-md transition hover:border-emerald-400/40 hover:bg-black/70"
              >
                <p className="font-mono text-xs text-emerald-400">{p.num}</p>
                <h3 className="mt-2 text-base font-bold uppercase tracking-[0.14em] text-white">
                  {p.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{p.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-10 inline-flex items-center gap-3 rounded-md border-2 border-emerald-400 bg-black/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-400 backdrop-blur-sm transition hover:bg-emerald-400 hover:text-black"
          >
            Work With Us
            <span className="flex h-7 w-7 items-center justify-center rounded border border-emerald-400 transition group-hover:border-black/40">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
