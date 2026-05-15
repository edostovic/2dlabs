import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";
import { GitFork, Gamepad2, Camera, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — 2DLabs",
  description: "Get in touch with 2DLabs. Business inquiries, feedback, or just to say hi.",
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/2dlabs",
    icon: GitFork,
    description: "Source code and project updates",
  },
  {
    name: "itch.io",
    href: "https://2dlabs.itch.io",
    icon: Gamepad2,
    description: "Play our games",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/2dlabs",
    icon: Camera,
    description: "Dev logs and pixel art",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-primary/5 to-background" />
        <div className="absolute inset-0 pixel-dots opacity-20" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <Badge variant="accent" className="mb-4">
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-retro">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a question, feedback about Depths of Eternity, or a business
            inquiry? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Contact form */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form and we&apos;ll get back to you as soon as
                possible.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-8">
              {/* Direct contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Direct Contact
                </h3>
                <Link
                  href="mailto:hello@2dlabs.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      hello@2dlabs.com
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Business inquiries
                    </div>
                  </div>
                </Link>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <social.icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {social.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {social.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business inquiries */}
              <div className="p-5 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/20">
                <h3 className="text-base font-semibold mb-2">
                  Business Inquiries
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For publishing, press, sponsorship, or partnership
                  opportunities, please email us directly at{" "}
                  <Link
                    href="mailto:hello@2dlabs.com"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    hello@2dlabs.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
