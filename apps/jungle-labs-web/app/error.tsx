"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="inline-flex rounded-full border border-rose-300/25 bg-rose-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-rose-200">
        Something went wrong
      </span>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        An error occurred.
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        Something unexpected happened. Try refreshing or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:text-cyan-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
