"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code2, Rocket, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ParticleField } from "./ParticleField";
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

function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
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
              setVal(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
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

  return (
    <span ref={ref}>
      {val.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { Icon: Rocket, to: 50, suffix: "+", label: "Projects Delivered" },
  { Icon: Users, to: 30, suffix: "+", label: "Happy Clients" },
  { Icon: Code2, to: 100, suffix: "K+", label: "Lines of Code" },
  { Icon: ShieldCheck, to: 99.9, suffix: "%", label: "Uptime Delivered" }
];

export function HeroSection() {
  const word = useTypewriter(THINK_WORDS);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax on the photo from mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const photoX = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), { stiffness: 60, damping: 18 });
  const photoY = useSpring(useTransform(mouseY, [-1, 1], [-8, 8]), { stiffness: 60, damping: 18 });
  const glowX = useSpring(useTransform(mouseX, [-1, 1], [20, -20]), { stiffness: 50, damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), { stiffness: 50, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function handle(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x * 2 - 1);
      mouseY.set(y * 2 - 1);
    }
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="section-wide relative pt-20 md:pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem] border border-emerald-300/10 bg-gradient-to-br from-emerald-900/40 via-black to-emerald-950/60" />
      <ParticleField />

      <div className="relative grid items-center gap-10 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT: Headline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 space-y-7"
        >
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/95"
          >
            <span className="h-3 w-[2px] bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            Building Intelligent Systems
          </motion.span>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              We Build.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.27, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              You Scale.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.39, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Systems That{" "}
              <span className="inline-flex">
                <span className="gradient-text">{word}</span>
                <span className="caret-blink ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.18em] bg-emerald-300" aria-hidden="true" />
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            At Jungle Labs, we engineer next-gen digital systems, AI solutions, blockchain
            platforms, and tokenization engines that drive real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.a
              href="#products"
              onClick={() => trackEvent("explore_work_click", { placement: "hero" })}
              whileHover={{ scale: 1.045 }}
              whileTap={{ scale: 0.97 }}
              className="shimmer-btn group inline-flex items-center gap-2 rounded-md bg-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_24px_-8px_rgba(52,211,153,0.7)] transition hover:bg-emerald-300 hover:shadow-[0_12px_32px_-8px_rgba(52,211,153,0.9)]"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#services"
              onClick={() => trackEvent("our_services_click", { placement: "hero" })}
              whileHover={{ scale: 1.045 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-md border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-200"
            >
              Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Hero photo with parallax + floating glow orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Animated glow orb behind the photo */}
          <motion.div
            className="pointer-events-none absolute -inset-8 -z-10"
            style={{ x: glowX, y: glowY }}
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-emerald-500/30 via-emerald-400/10 to-transparent blur-3xl" />
          </motion.div>

          <motion.div
            className="leaf-shimmer relative overflow-hidden rounded-2xl border border-emerald-300/20"
            style={{ x: photoX, y: photoY }}
          >
            {/* veils to blend the photo edges */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-l from-transparent via-black/10 to-black/55" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/75 to-transparent" />

            <Image
              src="/jungle-hero.png"
              alt="Jungle Labs AI and blockchain development team in Surrey, BC working on intelligent systems"
              width={1536}
              height={1024}
              priority
              className="photo-fade-in relative h-auto w-full"
            />

            {/* floating live-status chip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-black/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Systems Online
            </motion.div>

            {/* corner code-snippet floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="absolute bottom-4 left-4 z-20 hidden items-center gap-2 rounded-lg border border-emerald-300/30 bg-black/65 px-3 py-1.5 font-mono text-[11px] text-emerald-100 backdrop-blur-md md:inline-flex"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              <span>build.deploy.scale()</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-4 -mt-2 mb-10 md:mx-8 lg:mx-12"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-emerald-300/15 bg-black/55 backdrop-blur-xl md:grid-cols-4">
          {stats.map(({ Icon, to, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-3 bg-[#04070d]/85 px-5 py-4 transition hover:bg-emerald-950/30"
            >
              <div className="inline-flex rounded-md border border-emerald-300/30 bg-emerald-300/10 p-2 text-emerald-300 transition group-hover:scale-110 group-hover:bg-emerald-300/20">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white md:text-2xl">
                  <CountUp to={to} suffix={suffix} />
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/70">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
