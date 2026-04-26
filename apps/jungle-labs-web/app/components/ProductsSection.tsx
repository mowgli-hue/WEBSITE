"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { AnimatedSection } from "./AnimatedSection";
import { products, type Product } from "../lib/content";

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      key={product.name}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.008 }}
      className="glass-card group relative overflow-hidden p-7"
    >
      <div
        className={`absolute -right-12 -top-14 h-36 w-36 rounded-full blur-3xl ${
          index % 3 === 0 ? "bg-cyan-300/20" : index % 3 === 1 ? "bg-emerald-300/20" : "bg-amber-300/20"
        }`}
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 opacity-60" />
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-cyan-200">
          {product.badge}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.09em] text-white/75">
          <Sparkles className="h-3 w-3 text-emerald-300" />
          {product.status}
        </span>
      </div>
      <h3 className="mt-4 text-3xl font-semibold text-white">{product.name}</h3>
      <p className="mt-2 text-sm uppercase tracking-[0.1em] text-emerald-200/80">{product.subtitle}</p>
      <p className="mt-4 leading-relaxed text-white/70">{product.description}</p>
      <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
        {product.highlights.map((highlight) => (
          <div key={highlight} className="text-sm text-cyan-100/80">
            {`> ${highlight}`}
          </div>
        ))}
      </div>
      {product.downloads?.length ? (
        <div className="mt-6 flex flex-col gap-2">
          {product.downloads.map((download) => (
            <a
              key={download.label}
              href={download.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/45 hover:bg-emerald-300/15"
            >
              {download.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      ) : product.href ? (
        <a
          href={product.href}
          target={product.href.startsWith("http") ? "_blank" : undefined}
          rel={product.href.startsWith("http") ? "noreferrer" : undefined}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
        >
          {product.ctaLabel ?? "Visit Product Page"}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : null}
    </motion.article>
  );
}

export function ProductsSection() {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3);

  return (
    <AnimatedSection id="products" className="section-shell mt-24">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="section-kicker">Products</p>
          <h2 className="section-title">Purpose-built products from Jungle Labs</h2>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {firstRow.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>

      {secondRow.length > 0 && (
        <div className={`mt-6 grid gap-6 ${secondRow.length === 1 ? "lg:grid-cols-1 lg:max-w-sm" : secondRow.length === 2 ? "lg:grid-cols-2 lg:max-w-2xl" : "lg:grid-cols-3"}`}>
          {secondRow.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index + 3} />
          ))}
        </div>
      )}
    </AnimatedSection>
  );
}
