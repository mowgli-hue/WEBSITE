import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jungle: {
          black: "#04070d",
          cyan: "#38bdf8",
          neon: "#34d399",
          deep: "#081123"
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "rgba(255,255,255,0.80)",
            a: {
              color: "#38bdf8",
              "&:hover": { color: "#7dd3fc" },
              textDecoration: "none"
            },
            strong: { color: "#ffffff" },
            h1: { color: "#ffffff" },
            h2: { color: "#ffffff" },
            h3: { color: "#ffffff" },
            h4: { color: "#ffffff" },
            code: {
              color: "#34d399",
              backgroundColor: "rgba(52,211,153,0.1)",
              borderRadius: "0.25rem",
              padding: "0.1em 0.35em"
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            blockquote: {
              borderLeftColor: "#34d399",
              color: "rgba(255,255,255,0.7)"
            },
            hr: { borderColor: "rgba(255,255,255,0.1)" },
            li: { color: "rgba(255,255,255,0.80)" },
            "ul > li::marker": { color: "#34d399" },
            "ol > li::marker": { color: "#38bdf8" }
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
