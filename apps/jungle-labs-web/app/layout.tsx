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
    default: "Jungle Labs | AI Software, Fitness Tech & Immigration Platforms",
    template: "%s | Jungle Labs"
  },
  description:
    "Jungle Labs builds AI automation systems, custom software platforms, and digital products — including RepTrack (fitness tracker), Immigration Platform (Canada PR platform), and Jungle Table Ordering OS (restaurant tech).",
  keywords: [
    "Jungle Labs",
    "AI automation",
    "custom CRM",
    "analytics dashboards",
    "software development",
    "business intelligence",
    "RepTrack",
    "IRCC portal scanner",
    "RCIC software",
    "immigration consultant tool",
    "Immigration Platform",
    "immigration consultant Surrey BC",
    "Express Entry Canada",
    "CRS calculator",
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
    title: "Jungle Labs | AI Software, Fitness Tech & Immigration Platforms",
    description:
      "Building intelligent digital products: RepTrack fitness tracker, Immigration Platform platform, Jungle Table Ordering OS, and AI automation systems for modern businesses.",
    siteName: "Jungle Labs",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jungle Labs — AI Software & Digital Products" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jungle Labs | AI Software, Fitness Tech & Immigration Platforms",
    description: "RepTrack, Immigration Platform, Jungle Table Ordering OS, and AI automation — digital products built by Jungle Labs.",
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
