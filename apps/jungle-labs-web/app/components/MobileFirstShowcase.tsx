"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Smartphone } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "./AnimatedSection";

const benefits = [
  "Native iOS and Android apps that feel like first-party software",
  "Realtime dashboards your team can check from anywhere",
  "Push notifications wired into your automations",
  "Single sign-on with the rest of your stack"
];

export function MobileFirstShowcase() {
  return (
    <AnimatedSection id="mobile-first" className="section-shell mt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT: Phone photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-500/25 via-emerald-400/10 to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 shadow-[0_30px_90px_-25px_rgba(34,197,94,0.55)]">
            <Image
              src="/jungle-phone.png"
              alt="Jungle Labs mobile app — Intelligent Systems. Real Impact."
              width={1536}
              height={1024}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </motion.div>

        {/* RIGHT: Copy */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-200">
            <Smartphone className="h-3 w-3" />
            Mobile First
          </div>

          <h2 className="text-4xl font-black uppercase leading-[1] tracking-tight text-white md:text-5xl">
            Intelligent systems.
            <br />
            <span className="text-emerald-400">Real impact.</span>
          </h2>

          <p className="text-base leading-relaxed text-white/80 md:text-lg">
            Every system we build ships with a mobile-first interface. Run your operations from your
            pocket, get alerts the moment something needs your attention, never wait until you&apos;re
            back at the desk.
          </p>

          <ul className="space-y-3 pt-2">
            {benefits.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 text-sm text-white/80 md:text-base"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
