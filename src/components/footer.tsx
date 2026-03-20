import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Youtube, Twitter } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#attendease", label: "AttendEase" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="VedhiTek Logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <div>
                <span className="text-base font-bold">
                  Vedhi<span className="gradient-text">Tek</span>
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Smart IT Infrastructure Consulting and Workforce Management
              Solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bangalore, Karnataka, India</li>
              <li>Karaikudi, Tamil Nadu, India</li>
              <li className="pt-2">
                <a href="tel:+918484040237" className="hover:text-foreground">
                  +91 84840 40237
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@vedhitek.com"
                  className="hover:text-foreground"
                >
                  support@vedhitek.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 VedhiTek Technology Consulting. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            <a
              href="https://www.vedhitek.com"
              className="hover:text-foreground"
            >
              www.vedhitek.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
