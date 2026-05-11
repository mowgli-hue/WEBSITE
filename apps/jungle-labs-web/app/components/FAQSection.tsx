"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { AnimatedSection } from "./AnimatedSection";
import { homepageFAQs } from "../lib/schemas";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="section-shell mt-28">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">Common Questions</p>
        <h2 className="section-title">
          Things <span className="gradient-text">we get asked</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          If your question isn&apos;t here, just{" "}
          <a href="#contact" className="text-emerald-300 underline decoration-emerald-300/40 underline-offset-4 hover:decoration-emerald-300/80">
            send us a note
          </a>{" "}
          — we reply within a day.
        </p>
      </div>

      <div className="space-y-3">
        {homepageFAQs.map((faq, i) => {
          const open = openIdx === i;
          return (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:text-emerald-200"
                aria-expanded={open}
              >
                <span className="text-base font-semibold text-white md:text-lg">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-emerald-300" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-white/70 md:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
