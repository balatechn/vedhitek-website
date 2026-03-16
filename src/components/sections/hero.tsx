"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,58,95,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          IT Consulting &amp; SaaS Solutions
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Explore Technology.{" "}
          <span className="gradient-text">Deliver Smart Solutions.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
          Smart IT Infrastructure Consulting and Workforce Management Solutions
          for modern businesses.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gradient-bg glow h-12 px-8 text-base text-white hover:opacity-90"
            )}
          >
            Get a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 px-8 text-base"
            )}
          >
            <Play className="mr-2 h-4 w-4" />
            Contact Us
          </Link>
        </div>

        {/* Hero visual - Dashboard mockup */}
        <div className="relative mt-16 w-full max-w-5xl sm:mt-20">
          <div className="glow rounded-xl border border-border/50 bg-card p-2 shadow-2xl">
            <div className="rounded-lg bg-gradient-to-br from-[#1e3a5f]/20 via-background to-blue-900/20 p-4 sm:p-8">
              {/* Mock dashboard */}
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Stat cards */}
                {[
                  { label: "Active Projects", value: "24", change: "+12%" },
                  { label: "Infrastructure Uptime", value: "99.9%", change: "+0.2%" },
                  { label: "Clients Served", value: "150+", change: "+18%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border/50 bg-background/50 p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs text-green-500">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Mock chart area */}
              <div className="mt-4 rounded-lg border border-border/50 bg-background/50 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium">Network Performance</p>
                  <p className="text-xs text-muted-foreground">Last 7 days</p>
                </div>
                <div className="flex h-32 items-end gap-2">
                  {[65, 40, 75, 50, 85, 60, 90].map((height, i) => (
                    <div key={i} className="flex-1">
                      <div
                        className="rounded-t-sm gradient-bg opacity-80 transition-all hover:opacity-100"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Floating glow under the card */}
          <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
