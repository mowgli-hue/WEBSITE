"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, Rocket, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { trackEvent } from "../lib/analytics";

const THINK_WORDS = ["Think.", "Scale.", "Learn.", "Adapt.", "Win."];

function useTypewriter(words: string[], speed = 90, hold = 1600) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const word = words[wordIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < word.length) {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), speed);
      } else {
        timer = setTimeout(() => setPhase("holding"), hold);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("deleting"), hold);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), speed / 1.6);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [text, wordIdx, phase, words, speed, hold]);

  return text;
}

function CountUp({
  to,
  suffix = "",
  duration = 1400,
  decimals = 0
}: {
  to: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTs = performance.now();
            function tick(now: number) {
              const elapsed = now - startTs;
              const t = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(to * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setVal(to);
            }
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return <span ref={ref}>{display}{suffix}</span>;
}

const heroStats = [
  { Icon: Rocket, to: 127, label: "Automations", sub: "Running" },
  { Icon: Calendar, to: 3842, label: "Content Published", sub: "This Month" },
  { Icon: MessageSquare, to: 1032, label: "DMs Replied", sub: "Today" },
  { Icon: Users, to: 2451, label: "Leads Generated", sub: "This Month" },
  { Icon: ShieldCheck, to: 99.9, suffix: "%", label: "System Uptime", sub: "Active", decimals: 1 }
];

const partners = ["FIT CLUB", "LUXE", "real", "CANEX", "Peak", "MOTION", "BOLD", "Elevate"];

export function HeroSection() {
  const word = useTypewriter(THINK_WORDS);

  return (
    <section className="relative w-full overflow-hidden">
      {/* ── BACKGROUND PHOTO LAYER ── full bleed ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/jungle-hero.png"
          alt="Jungle Labs AI automation engineer with intelligent dashboards — Systems That Think. Businesses That Scale."
          fill
          priority
          quality={92}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered gradients — softened fade on left so dashboards stay partially visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,_rgba(34,197,94,0.15),_transparent_55%)]" />
      </div>

      <div className="section-wide relative pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-36 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl space-y-7"
        >
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-400"
          >
            AI Systems · Automation · Growth
          </motion.span>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              We Build.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="block text-emerald-400"
            >
              Systems
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              That{" "}
              <span className="inline-flex">
                <span className="text-emerald-400">{word}</span>
                <span className="caret-blink ml-1 inline-block h-[0.85em] w-[5px] translate-y-[0.18em] bg-emerald-400" aria-hidden="true" />
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.85 }}
            className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            We help businesses automate operations, scale content, and grow with intelligent
            systems &amp; <span className="text-emerald-400">AI agents</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.85 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.a
              href="#built-for-scale"
              onClick={() => trackEvent("explore_systems_click", { placement: "hero" })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-md border-2 border-emerald-400 bg-black/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-400 backdrop-blur-sm transition hover:bg-emerald-400 hover:text-black"
            >
              Explore Systems
              <span className="flex h-7 w-7 items-center justify-center rounded border border-emerald-400 transition group-hover:border-black/40">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.a>
            <motion.a
              href="/case-studies"
              onClick={() => trackEvent("view_work_click", { placement: "hero" })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:text-emerald-300"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* "All Systems Operational" badge for vibe */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            All Systems Operational
          </motion.div>
        </motion.div>

        {/* ── HORIZONTAL STATS STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-14 rounded-2xl border border-emerald-400/20 bg-black/65 p-2 backdrop-blur-xl md:mt-20"
        >
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl md:grid-cols-3 lg:grid-cols-5">
            {heroStats.map(({ Icon, to, suffix, label, sub, decimals }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08, duration: 0.55 }}
                className="group flex items-center gap-3 bg-black/55 px-5 py-4 transition hover:bg-emerald-950/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-emerald-400/40 bg-emerald-400/5 text-emerald-400 transition group-hover:scale-110 group-hover:bg-emerald-400/15">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">{label}</span>
                  <span className="text-2xl font-bold leading-none text-white md:text-3xl">
                    <CountUp to={to} suffix={suffix ?? ""} decimals={decimals ?? 0} />
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-emerald-300/75">{sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── PARTNERS ROW ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.95 }}
        className="relative border-t border-white/5 bg-black/65 py-6 backdrop-blur-sm"
      >
        <div className="section-wide flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
            Trusted by innovative brands
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 opacity-70">
            {partners.map((p) => (
              <span
                key={p}
                className="text-base font-semibold tracking-[0.05em] text-white/55 transition hover:text-white"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
