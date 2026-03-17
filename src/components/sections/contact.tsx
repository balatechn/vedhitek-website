"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/motion-wrapper";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-muted/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ready to transform your business technology? Reach out to us today.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <SlideInLeft className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                VedhiTek Technology Consulting
              </h3>
            </div>

            <div className="space-y-4">
              {/* Bangalore */}
              <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-card/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Bangalore Office</p>
                  <p className="text-sm text-muted-foreground">
                    Karnataka, India
                  </p>
                </div>
              </div>

              {/* Karaikudi */}
              <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-card/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Karaikudi Office</p>
                  <p className="text-sm text-muted-foreground">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <a
                    href="tel:+918484040237"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    +91 84840 40237
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a
                    href="mailto:support@vedhitek.com"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    support@vedhitek.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Website</p>
                  <a
                    href="https://www.vedhitek.com"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    www.vedhitek.com
                  </a>
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Contact form */}
          <SlideInRight className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="text-lg font-semibold">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-bg text-white hover:opacity-90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
