"use client";

import { useEffect, useRef } from "react";

/**
 * Premium custom cursor that smoothly tracks the pointer.
 * Auto-disables on touch devices and on prefers-reduced-motion.
 * Grows when hovering interactive elements (a, button, [role="button"]).
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch / coarse pointers
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    function handleMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }

    function tick() {
      // Ring lags behind the dot for that premium "two-tone" feel
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    }

    function isInteractive(target: EventTarget | null): boolean {
      if (!(target instanceof Element)) return false;
      return Boolean(
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']")
      );
    }

    function handleOver(e: MouseEvent) {
      if (isInteractive(e.target)) {
        dot?.classList.add("is-hovering");
        ring?.classList.add("is-hovering");
      } else {
        dot?.classList.remove("is-hovering");
        ring?.classList.remove("is-hovering");
      }
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-follower-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-follower" aria-hidden="true" />
    </>
  );
}
