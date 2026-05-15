"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AnimatedHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-secondary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      {/* Pixel dots overlay */}
      <div className="absolute inset-0 pixel-dots opacity-20" />

      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Indie game studio
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-retro"
        >
          Pixel-perfect{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            games
          </span>
          .
          <br />
          <span className="text-foreground">Zero excuses.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We craft tight, replayable pixel-art games that respect your time and
          challenge your wits. No filler. Just good games.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/games/depths-of-eternity">
            <Button variant="default" size="xl" className="w-full sm:w-auto">
              Explore Our Games
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
            >
              Meet the Studio
            </Button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-3 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
