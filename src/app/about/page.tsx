import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About — 2DLabs",
  description:
    "Learn about 2DLabs, our story, values, and the solo developer behind Depths of Eternity.",
};

const values = [
  {
    title: "Quality over quantity",
    description:
      "We&apos;d rather ship one great game than ten mediocre ones. Every pixel, line of code, and game mechanic is crafted with care.",
    icon: "✨",
  },
  {
    title: "Pixel art forever",
    description:
      "Pixel art isn&apos;t a budget constraint — it&apos;s an artistic choice. We believe in the beauty and clarity of handcrafted sprites.",
    icon: "🎮",
  },
  {
    title: "Community first",
    description:
      "Our players shape the games we make. Feedback, bug reports, and wild ideas all feed back into development. We build with you, not just for you.",
    icon: "🤝",
  },
  {
    title: "Transparency always",
    description:
      "No marketing fluff, no overpromising. We share the real development story — wins, failures, and lessons learned along the way.",
    icon: "💡",
  },
];

const techStack = [
  { name: "Godot 4", role: "Game Engine" },
  { name: "GDScript", role: "Scripting Language" },
  { name: "Pixelorama", role: "Pixel Art Editor" },
  { name: "CC0 Assets", role: "Sound & Music" },
  { name: "Aseprite", role: "Sprite Animation" },
  { name: "GitHub", role: "Version Control" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/5 to-background" />
        <div className="absolute inset-0 pixel-dots-teal opacity-20" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <Badge variant="secondary" className="mb-4">
            About the Studio
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-retro">
            We make pixel-perfect games.
            <br />
            <span className="text-primary">Small team, big ambition.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            2DLabs was born from a simple belief: great games don&apos;t need
            massive teams or photorealistic graphics. They need heart,
            thoughtful design, and pixel-perfect execution.
          </p>
        </div>
      </section>

      {/* Studio Story */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              2DLabs started as a one-person passion project — a developer who
              grew up on SNES classics, Game Boy RPGs, and tabletop dice rolls.
              After years building software by day, the pull to create games
              became impossible to ignore.
            </p>
            <p>
              What began as weekend experiments in Godot 4 slowly turned into
              something bigger. Prototypes became proper games. Scribbled design
              documents turned into Depths of Eternity. The studio name
              2DLabs — short for &ldquo;2D Laboratories&rdquo; — reflects the
              experimental, iterative approach to game development that drives
              everything we do.
            </p>
            <p>
              Today, 2DLabs is focused on crafting tight, replayable
              experiences in the turn-based roguelike space. Our goal is simple:
              make games you&apos;ll want to play again and again, even after
              you&apos;ve lost a hundred times.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The principles that guide every decision, every sprite, every line
              of code.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors"
              >
                <CardContent className="p-6">
                  <span className="text-3xl mb-3 block">{value.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <p className="text-muted-foreground">
              The tools we use to bring our games to life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-lg bg-card/50 border border-border/50 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-sm font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-muted/20 border-t border-border/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-8">The Team</h2>
          <Card className="max-w-md mx-auto bg-card/50 border-primary/20">
            <CardContent className="p-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2D</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Founder & Developer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Solo developer, pixel artist, and dungeon master
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                One developer with a passion for turn-based strategy, pixel art,
                and procedural generation. Building 2DLabs one sprite at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
