import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GameFeatures } from "@/components/GameFeatures";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Depths of Eternity — 2DLabs",
  description:
    "A turn-based roguelike with 5 procedural floors, 19 enemy types, 43 items, and 3 character classes. Descend. Fight. Survive.",
  openGraph: {
    title: "Depths of Eternity — 2DLabs",
    description:
      "A turn-based roguelike with 5 procedural floors, 19 enemy types, 43 items, and 3 character classes.",
  },
};

export default function DepthsOfEternityPage() {
  return (
    <div>
      {/* Game Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/10 to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute inset-0 pixel-dots opacity-15" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <Badge variant="secondary" className="mb-4">
            Turn-Based Roguelike
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-retro">
            Depths of Eternity
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A turn-based roguelike. Descend. Fight. Survive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://2dlabs.itch.io/depths-of-eternity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="xl" className="w-full sm:w-auto">
                Play in Browser
              </Button>
            </a>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
              disabled
            >
              Android (Coming Soon)
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            iOS version also planned
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 px-6 border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "5", label: "Procedural Floors" },
              { value: "19", label: "Enemy Types" },
              { value: "43", label: "Items" },
              { value: "3", label: "Character Classes" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-muted/30 rounded-lg p-4 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <GameFeatures />

      {/* About the Game */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Descend into the Abyss</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Deep beneath the surface of Eldoria lies an ancient labyrinth
                known only as the Depths of Eternity. Generations of heroes have
                descended into its darkness, seeking glory, treasure, and the
                truth behind the whispers that echo through its halls. None have
                returned.
              </p>
              <p>
                Take control of one of three unique character classes and carve
                your path through 5 procedurally generated floors. Each descent
                is unique&mdash;new layouts, new enemy placements, new discoveries.
                Master the D20 combat system, assemble your arsenal from 43
                items, and face 19 deadly enemy types that adapt to your
                strategies.
              </p>
              <p>
                Death is permanent. Knowledge is progress. Every run teaches you
                something new about the Depths. The question isn&apos;t whether
                you&apos;ll fall&mdash;it&apos;s how far you&apos;ll get before you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <ScreenshotGallery />

      {/* Download Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get the Game</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Depths of Eternity is available now on web. Mobile versions coming
            soon.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Card className="border-primary/20 bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.168-5.25M12 21A9.004 9.004 0 0 1 3.832 15.75M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Web</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Play in your browser
                </p>
                <a
                  href="https://2dlabs.itch.io/depths-of-eternity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="default" className="w-full">
                    Play Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 opacity-60">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-muted/50 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Android</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Coming soon
                </p>
                <Button size="sm" variant="outline" className="w-full" disabled>
                  Soon
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 opacity-60">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-muted/50 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">iOS</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Coming soon
                </p>
                <Button size="sm" variant="outline" className="w-full" disabled>
                  Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Tech Specs
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Engine", value: "Godot 4" },
              { label: "Genre", value: "Turn-Based Roguelike" },
              { label: "Platforms", value: "Web, Android, iOS" },
              { label: "Status", value: "Early Access" },
              { label: "Input", value: "Keyboard + Mouse" },
              { label: "Resolution", value: "Native 1920x1080" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between items-center p-4 rounded-lg bg-muted/30 border border-border/50"
              >
                <span className="text-sm text-muted-foreground">
                  {spec.label}
                </span>
                <span className="text-sm font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to descend?</h2>
          <p className="text-muted-foreground mb-8">
            The Depths await. How far will you go?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://2dlabs.itch.io/depths-of-eternity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                Play in Browser
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Give Feedback
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
