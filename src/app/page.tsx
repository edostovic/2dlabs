import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedHero } from "@/components/AnimatedHero";
import { StatsBar } from "@/components/StatsBar";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedHero />

      {/* Studio Intro */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              About the Studio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We make pixel-perfect games.
              <br />
              <span className="text-primary">Small team, big ambition.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              2DLabs is an indie game studio focused on crafting tight,
              replayable experiences. We believe pixel art isn&apos;t a
              limitation&mdash;it&apos;s a craft. Every sprite, every sound, every line
              of code is made with intention.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Game */}
      <section className="py-20 px-6 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">
              Featured Game
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Depths of Eternity
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A turn-based roguelike. Descend. Fight. Survive.
            </p>
          </div>

          <Card className="overflow-hidden border-primary/20 bg-card/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Screenshot placeholder */}
              <div className="relative aspect-video md:aspect-auto md:h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 pixel-dots opacity-30" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.32 4.907.17.725.422 1.408.788 2.008.323.516.702.946 1.13 1.263.526.39 1.126.618 1.768.618.643 0 1.243-.228 1.768-.618.428-.317.807-.747 1.13-1.263.366-.6.618-1.283.789-2.008.027-1.657.133-3.294.32-4.907a48.39 48.39 0 0 1-4.163.3.64.64 0 0 1-.657-.643v0Z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Screenshot placeholder
                  </p>
                </div>
              </div>

              {/* Game info */}
              <div className="p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl mb-2">
                    Depths of Eternity
                  </CardTitle>
                  <CardDescription className="text-base">
                    Descend through 5 procedurally generated floors of an
                    ancient dungeon. Battle 19 unique enemy types, discover 43
                    items, and master turn-based D20 combat.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: "Enemies", value: "19" },
                      { label: "Items", value: "43" },
                      { label: "Floors", value: "5" },
                      { label: "Classes", value: "3" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-muted/50 rounded-lg p-3 text-center"
                      >
                        <div className="text-xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/games/depths-of-eternity" className="flex-1">
                      <Button variant="default" size="lg" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                    <a
                      href="https://2dlabs.itch.io/depths-of-eternity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full"
                      >
                        Play Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Call to Action */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 gradient-shift" />
        <div className="absolute inset-0 pixel-dots opacity-20" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to descend?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Jump into Depths of Eternity right from your browser. No download
            required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://2dlabs.itch.io/depths-of-eternity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="xl" className="w-full sm:w-auto">
                Play Depths of Eternity
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
