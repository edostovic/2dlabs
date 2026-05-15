"use client";

import { motion } from "framer-motion";

const screenshots = [
  {
    id: 1,
    label: "Dungeon Exploration",
    src: "/ss_gameplay.png",
    desc: "Procedurally generated dungeon floors with turn-based movement",
  },
  {
    id: 2,
    label: "Title Screen",
    src: "/ss_title.png",
    desc: "Dark fantasy atmosphere with pixel art styling",
  },
  {
    id: 3,
    label: "Combat",
    src: "/ss_combat.png",
    desc: "D20 turn-based combat against 19 enemy types",
  },
  {
    id: 4,
    label: "Inventory",
    src: "/ss_inventory.png",
    desc: "Manage 43 item types with equipment and consumables",
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
              className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer bg-neutral-950"
            >
              <img
                src={shot.src}
                alt={shot.label}
                className="absolute inset-0 w-full h-full object-contain pixelated transition-transform duration-500 group-hover:scale-110"
                style={{ imageRendering: "pixelated" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-sm font-semibold text-white">
                  {shot.label}
                </span>
                <p className="text-xs text-neutral-400 mt-1">{shot.desc}</p>
              </div>
              <div className="absolute inset-0 border border-border/30 rounded-xl group-hover:border-primary/40 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
