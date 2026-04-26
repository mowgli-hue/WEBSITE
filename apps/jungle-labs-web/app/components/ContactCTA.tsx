"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle, Rocket, SendHorizonal } from "lucide-react";
import { useState } from "react";

import { AnimatedSection } from "./AnimatedSection";
import { trackEvent } from "../lib/analytics";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const params = new URLSearchParams(window.location.search);
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: "",
          challenge: message,
          utm_source: params.get("utm_source") || "",
          utm_medium: params.get("utm_medium") || "",
          utm_campaign: params.get("utm_campaign") || "",
          page: window.location.pathname
        })
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      trackEvent("contact_form_submit", { placement: "contact_cta" });
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatedSection id="contact" className="section-shell mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="glass-card relative overflow-hidden p-8 md:p-12"
      >
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-emerald-300/15 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left — copy */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Let&apos;s Build the Future of Your Business
            </h2>
            <p className="mt-4 text-white/70">
              Tell us your vision. We will help you architect, build, and deploy an intelligent digital system designed for outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:admin@junglelabsworld.com"
                onClick={() => trackEvent("start_project_click", { placement: "contact_cta" })}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
              >
                <Rocket className="h-4 w-4" />
                Start Project
              </a>
              <a
                href="tel:+16049028699"
                onClick={() => trackEvent("schedule_consultation_click", { placement: "contact_cta" })}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <CalendarDays className="h-4 w-4" />
                Schedule Consultation
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/45">
              <a href="mailto:admin@junglelabsworld.com" className="transition hover:text-cyan-200">admin@junglelabsworld.com</a>
              <a href="tel:+16049028699" className="transition hover:text-cyan-200">+1 (604) 902-8699</a>
              <span>Surrey, BC, Canada</span>
            </div>
          </div>

          {/* Right — quick contact form */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-emerald-300/25 bg-emerald-400/10 p-8 text-center">
              <CheckCircle className="h-10 w-10 text-emerald-300" />
              <p className="text-lg font-semibold text-white">Message received!</p>
              <p className="text-sm text-white/65">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white/70">Or send a quick message</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/50"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/50"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you're building or need help with..."
                rows={3}
                className="resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/50"
              />
              {status === "error" && (
                <p className="text-xs text-rose-300">Please fill in all fields and try again.</p>
              )}
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <SendHorizonal className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
