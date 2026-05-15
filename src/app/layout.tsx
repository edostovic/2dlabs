import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/*
 * 📊 Analytics
 *
 * To enable analytics, uncomment one of the following and add your tracking code:
 *
 * Vercel Analytics (easiest for Vercel deploys):
 *   1. npm install @vercel/analytics
 *   2. import { Analytics } from "@vercel/analytics/react";
 *   3. Add <Analytics /> inside <body>
 *
 * PostHog (self-hosted or cloud):
 *   1. npm install posthog-js
 *   2. Create a provider component with posthog.init()
 *   3. Add it to <body>
 *
 * Plausible (privacy-friendly):
 *   1. Add <script defer data-domain="2dlabs.vercel.app" src="https://plausible.io/js/script.js"></script>
 *      to the <head> via next/script
 *
 * Google Analytics:
 *   1. npm install @next/third-parties
 *   2. import { GoogleAnalytics } from "@next/third-parties/google";
 *   3. Add <GoogleAnalytics gaId="G-XXXXXXXXXX" /> to layout
 */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://2dlabs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "2DLabs — Pixel-perfect games. Zero excuses.",
  description:
    "Independent game studio crafting pixel art games. Featuring Depths of Eternity — a turn-based roguelike.",
  keywords: ["indie games", "pixel art", "roguelike", "2DLabs", "Depths of Eternity"],
  openGraph: {
    title: "2DLabs — Pixel-perfect games. Zero excuses.",
    description:
      "Independent game studio crafting pixel art games. Featuring Depths of Eternity — a turn-based roguelike.",
    type: "website",
    siteName: "2DLabs",
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/ss_title.png",
        width: 640,
        height: 480,
        alt: "2DLabs — Depths of Eternity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2DLabs — Pixel-perfect games. Zero excuses.",
    description:
      "Independent game studio crafting pixel art games. Featuring Depths of Eternity — a turn-based roguelike.",
    images: ["/ss_title.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
