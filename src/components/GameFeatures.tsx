"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "sword",
    title: "D20 Combat",
    description:
      "Classic tabletop-inspired turn-based combat with dice rolls, modifiers, and tactical decision-making.",
  },
  {
    icon: "shield",
    title: "3 Character Classes",
    description:
      "Choose between Warrior, Rogue, and Mage — each with unique abilities, stats, and playstyles.",
  },
  {
    icon: "potion",
    title: "43 Items",
    description:
      "Discover weapons, armor, potions, and artifacts. Mix and match to survive the depths.",
  },
  {
    icon: "skull",
    title: "19 Enemy Types",
    description:
      "Face increasingly dangerous foes — from slimes and skeletons to eldritch horrors.",
  },
  {
    icon: "stairs",
    title: "5 Procedural Floors",
    description:
      "Every descent is unique. New layouts, new challenges, new strategies required.",
  },
  {
    icon: "trophy",
    title: "Permadeath",
    description:
      "Death is final. Every choice matters. Learn from each run and push deeper next time.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  sword: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  ),
  shield: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  ),
  potion: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.32 4.907.17.725.422 1.408.788 2.008.323.516.702.946 1.13 1.263.526.39 1.126.618 1.768.618.643 0 1.243-.228 1.768-.618.428-.317.807-.747 1.13-1.263.366-.6.618-1.283.789-2.008.027-1.657.133-3.294.32-4.907a48.39 48.39 0 0 1-4.163.3.64.64 0 0 1-.657-.643v0Z"
      />
    </svg>
  ),
  skull: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 13.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5H9.75Z"
      />
    </svg>
  ),
  stairs: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3v18M19.5 3v18M6 3l8.25 8.25M6 21l8.25-8.25M18 3l-8.25 8.25M18 21l-8.25-8.25"
      />
    </svg>
  ),
  trophy: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.77.896m0 0a5.987 5.987 0 0 1-2.77-.896"
      />
    </svg>
  ),
};

export function GameFeatures() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Game Features</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know about Depths of Eternity
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    {iconMap[feature.icon]}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
