"use client";

import { animate, useMotionValue, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

export function AnimatedCounter({ value, suffix = "", duration = 1.6, decimals = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const factor = Math.pow(10, decimals);
  const rounded = useTransform(count, (latest) => Math.round(latest * factor) / factor);
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [count, duration, value, isInView]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplay(latest));
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref}>
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}
      {suffix}
    </span>
  );
}
