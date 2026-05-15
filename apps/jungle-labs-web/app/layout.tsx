import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { CursorFollower } from "./components/CursorFollower";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  preload: false
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.junglelabsworld.ca"),
  title: {
    default: "Jungle Labs | AI, Blockchain & CRM Automation Studio in Surrey BC",
    template: "%s | Jungle Labs"
  },
  description:
    "Jungle Labs builds AI automation, blockchain platforms, tokenization engines, and fully automated industry CRMs that drive real-world impact for modern businesses. Surrey BC. Serving Canada and USA.",
  keywords: [
    "Jungle Labs",
    "AI automation agency Surrey",
    "AI automation Vancouver",
    "AI automation Canada",
    "blockchain development Canada",
    "tokenization platform",
    "smart contract development",
    "Web3 integration",
    "custom CRM development",
    "automated CRM platform",
    "industry CRM automation",
    "business workflow automation",
    "analytics dashboards",
    "business intelligence platform",
    "AI software agency BC",
    "restaurant tablet ordering system",
    "kitchen display system",
    "Franco French learning app"
  ],
  applicationName: "Jungle Labs",
  authors: [{ name: "Jungle Labs", url: "https://www.junglelabsworld.ca" }],
  creator: "Jungle Labs",
  publisher: "Jungle Labs",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jungle Labs | AI, Blockchain & CRM Automation Studio",
    description:
      "Building intelligent digital systems: AI automation, blockchain platforms, tokenization engines, and fully automated industry CRMs for modern businesses.",
    siteName: "Jungle Labs",
    locale: "en_CA",
    images: [{ url: "/opengraph-image?v=3", width: 1200, height: 630, alt: "Jungle Labs — We Build. You Scale. Systems That Think." }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jungle Labs | AI, Blockchain & CRM Automation",
    description: "AI automation, blockchain platforms, tokenization engines, and industry CRMs — built by Jungle Labs.",
    images: ["/twitter-image?v=3"]
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  verification: {
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
        <CursorFollower />
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
