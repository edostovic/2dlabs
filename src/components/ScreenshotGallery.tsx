"use client";

import { motion } from "framer-motion";

const screenshots = [
  {
    id: 1,
    label: "Dungeon Entrance",
    gradient: "from-primary/20 via-primary/5 to-primary/10",
    icon: "🏰",
  },
  {
    id: 2,
    label: "Combat",
    gradient: "from-accent/20 via-accent/5 to-accent/10",
    icon: "⚔️",
  },
  {
    id: 3,
    label: "Item Discovery",
    gradient: "from-secondary/20 via-secondary/5 to-secondary/10",
    icon: "💎",
  },
  {
    id: 4,
    label: "Boss Battle",
    gradient: "from-accent/20 via-primary/5 to-accent/10",
    icon: "🐉",
  },
];

export function ScreenshotGallery() {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A glimpse into the Depths
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {screenshots.map((shot, index) => (
            <motion.div
              key={shot.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${shot.gradient}`}
              />
              <div className="absolute inset-0 pixel-dots opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <span className="text-5xl mb-3">{shot.icon}</span>
                <span className="text-sm text-muted-foreground">
                  {shot.label}
                </span>
              </div>
              <div className="absolute inset-0 border border-border/30 rounded-xl group-hover:border-primary/40 transition-colors pointer-events-none" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
