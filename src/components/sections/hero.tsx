"use client";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Play, Server, Shield, Network, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

export function HeroSection() {
  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

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
          IT Infrastructure &amp; Managed Services
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-5xl text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build Resilient{" "}
          <span className="gradient-text">IT Infrastructure.</span>
          <br className="hidden sm:block" />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Scale with Confidence.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
          End-to-end IT Infrastructure consulting — from network design and
          server management to cloud migration, cybersecurity, and 24/7
          managed services.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className={cn(
              buttonVariants({ size: "lg" }),
              "gradient-bg glow h-12 px-8 text-base text-white hover:opacity-90"
            )}
          >
            Get a Free Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "#services")}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 px-8 text-base"
            )}
          >
            <Play className="mr-2 h-4 w-4" />
            Explore Services
          </a>
        </div>

        {/* Hero visual - IT Infra Dashboard */}
        <div className="relative mt-16 w-full max-w-5xl sm:mt-20">
          <div className="glow rounded-xl border border-border/50 bg-card p-2 shadow-2xl">
            <div className="rounded-lg bg-gradient-to-br from-[#1e3a5f]/20 via-background to-blue-900/20 p-4 sm:p-8">
              {/* Infra stat cards */}
              <div className="grid gap-4 sm:grid-cols-4">
                {[
                  { label: "Server Uptime", value: "99.99%", icon: Server, change: "+0.01%" },
                  { label: "Network Latency", value: "<5ms", icon: Network, change: "-12%" },
                  { label: "Threat Blocked", value: "12.4K", icon: Shield, change: "+24%" },
                  { label: "Endpoints Managed", value: "850+", icon: Monitor, change: "+32%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border/50 bg-background/50 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon className="h-4 w-4 text-blue-500" />
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                    <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs text-green-500">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Mock infra monitoring */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border/50 bg-background/50 p-4 backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-medium">Network Throughput</p>
                    <p className="text-xs text-muted-foreground">Real-time</p>
                  </div>
                  <div className="flex h-28 items-end gap-1.5">
                    {[65, 40, 75, 50, 85, 60, 90, 55, 80, 70].map((height, i) => (
                      <div key={i} className="flex-1">
                        <div
                          className="rounded-t-sm gradient-bg opacity-80 transition-all hover:opacity-100"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-background/50 p-4 backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-medium">Infrastructure Health</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      All Systems Operational
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { name: "Cloud Servers", status: "Healthy", pct: 98 },
                      { name: "Firewall & Security", status: "Active", pct: 100 },
                      { name: "Backup Systems", status: "Synced", pct: 95 },
                      { name: "Network Core", status: "Healthy", pct: 99 },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center gap-3">
                        <p className="w-28 text-xs text-muted-foreground truncate">{item.name}</p>
                        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full gradient-bg"
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                        <p className="text-xs text-green-500 w-12 text-right">{item.status}</p>
                      </div>
                    ))}
                  </div>
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
