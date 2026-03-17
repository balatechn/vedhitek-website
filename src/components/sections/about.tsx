"use client";

import {
  Server,
  Shield,
  Cloud,
  Camera,
  Hotel,
  ClipboardCheck,
  Target,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const specializations = [
  { icon: Server, label: "IT Infrastructure Consulting" },
  { icon: Shield, label: "Network & Security Solutions" },
  { icon: Cloud, label: "Cloud & Email Systems" },
  { icon: Camera, label: "CCTV & Physical Security" },
  { icon: Hotel, label: "Hospitality IT Setup" },
  { icon: ClipboardCheck, label: "Pre-Opening IT Planning" },
];

const milestones = [
  {
    icon: Lightbulb,
    title: "Our Beginning",
    text: "VedhiTek was founded with a clear mission — to simplify IT infrastructure for businesses that need reliable, expert-driven technology solutions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "We help businesses build secure, scalable, and future-ready technology environments through hands-on consulting and implementation.",
  },
  {
    icon: Rocket,
    title: "Where We're Going",
    text: "Expanding into SaaS products and managed services, we continue to innovate while staying true to our core values of integrity, quality, and partnership.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Story section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SlideInLeft>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A Legacy of <span className="gradient-text">Growth</span>
              </h2>
              <div className="mt-6 space-y-6">
                {milestones.map((m) => (
                  <div key={m.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-bg text-white">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideInLeft>

          {/* Right – specializations */}
          <SlideInRight>
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                We Specialize In
              </p>
              <StaggerContainer className="grid gap-3 sm:grid-cols-2">
                {specializations.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 transition-all hover:border-blue-500/30 hover:shadow-md">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 transition-colors group-hover:bg-blue-500/20 dark:text-blue-400">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
