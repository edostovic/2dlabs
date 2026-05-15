import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "2DLabs — Pixel-perfect games. Zero excuses.",
  description:
    "2DLabs is an indie game studio crafting pixel-perfect games. Small team, big ambition. Play Depths of Eternity now.",
  keywords: ["indie games", "pixel art", "roguelike", "2DLabs", "Depths of Eternity"],
  openGraph: {
    title: "2DLabs — Pixel-perfect games. Zero excuses.",
    description: "Small indie game studio crafting pixel-perfect games. Play Depths of Eternity.",
    type: "website",
    siteName: "2DLabs",
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
