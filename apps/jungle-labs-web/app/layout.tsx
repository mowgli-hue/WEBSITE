import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { AnalyticsProvider } from "./components/AnalyticsProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.junglelabsworld.ca"),
  title: {
    default: "Jungle Labs | AI, Blockchain & Tokenization Studio",
    template: "%s | Jungle Labs"
  },
  description:
    "Jungle Labs builds AI automation systems, blockchain platforms, tokenization engines, custom software, and digital products that drive real-world impact for modern businesses.",
  keywords: [
    "Jungle Labs",
    "AI automation",
    "blockchain development",
    "tokenization platform",
    "smart contracts",
    "Web3 integration",
    "custom CRM",
    "analytics dashboards",
    "software development",
    "business intelligence",
    "restaurant tablet ordering system",
    "kitchen display system",
    "Franco French learning app",
    "AI software agency BC"
  ],
  applicationName: "Jungle Labs",
  authors: [{ name: "Jungle Labs", url: "https://www.junglelabsworld.ca" }],
  creator: "Jungle Labs",
  publisher: "Jungle Labs",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jungle Labs | AI, Blockchain & Tokenization Studio",
    description:
      "Building intelligent digital systems: AI automation, blockchain platforms, tokenization engines, smart contracts, and analytics for modern businesses.",
    siteName: "Jungle Labs",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jungle Labs — AI, Blockchain & Tokenization Studio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jungle Labs | AI, Blockchain & Tokenization Studio",
    description: "AI automation, blockchain platforms, tokenization engines, smart contracts — built by Jungle Labs.",
    images: ["/twitter-image"]
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }]
  },
  verification: {
    // Add your Google Search Console verification code to .env.local:
    // NEXT_PUBLIC_GSC_VERIFICATION=your-code-here
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
      : {})
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
