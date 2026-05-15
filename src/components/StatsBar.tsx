"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "19", label: "Enemies", icon: "skull" },
  { value: "43", label: "Items", icon: "potion" },
  { value: "5", label: "Floors", icon: "stairs" },
  { value: "3", label: "Classes", icon: "trophy" },
];

export function StatsBar() {
  return (
    <section className="py-16 px-6 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
