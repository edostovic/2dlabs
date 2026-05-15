import Link from "next/link";
import { GitFork, Gamepad2, Camera } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/edostovic/2dlabs",
    label: "GitHub",
    icon: GitFork,
  },
  {
    href: "https://2dlabs.itch.io",
    label: "itch.io",
    icon: Gamepad2,
  },
  {
    href: "https://instagram.com/2dlabs",
    label: "Instagram",
    icon: Camera,
  },
];

const footerLinks = [
  {
    label: "Games",
    links: [
      { href: "/games/depths-of-eternity", label: "Depths of Eternity" },
    ],
  },
  {
    label: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <span className="text-xs font-bold text-white">2D</span>
              </div>
              <span className="text-lg font-bold">
                2DLabs<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Pixel-perfect games. Zero excuses. Small team, big ambition.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact CTA */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Get in Touch
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Have a question or business inquiry?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors font-medium"
            >
              Contact us &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 2DLabs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with pixels &hearts;
          </p>
        </div>
      </div>
    </footer>
  );
}
