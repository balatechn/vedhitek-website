"use client";

import { useState } from "react";
import {
  Hotel,
  Building2,
  Factory,
  ShoppingBag,
  Server,
  ChevronRight,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    num: "01",
    icon: Hotel,
    title: "Luxury Hotel Chain – Full IT Setup",
    industry: "Hospitality",
    description:
      "End-to-end IT infrastructure for a 200-room luxury hotel — including structured cabling, managed WiFi, IPTV, CCTV with 120+ cameras, server room build-out, and PMS integration.",
    highlights: ["120+ CCTV cameras", "200+ WiFi access points", "99.99% uptime achieved"],
  },
  {
    num: "02",
    icon: Building2,
    title: "Corporate Office – Network & Security Overhaul",
    industry: "Corporate",
    description:
      "Redesigned the entire network architecture for a 500-employee corporate office — including firewall deployment, VLAN segmentation, VPN setup, and endpoint protection across all workstations.",
    highlights: ["500+ endpoints secured", "Zero-trust network", "60% fewer incidents"],
  },
  {
    num: "03",
    icon: Factory,
    title: "Manufacturing Plant – Industrial IT Infrastructure",
    industry: "Manufacturing",
    description:
      "Deployed rugged networking, industrial-grade CCTV surveillance, and server infrastructure for a large manufacturing facility with 24/7 operational requirements.",
    highlights: ["24/7 monitoring", "Industrial-grade hardware", "3 sites connected"],
  },
  {
    num: "04",
    icon: ShoppingBag,
    title: "Retail Chain – Multi-Location IT Rollout",
    industry: "Retail",
    description:
      "Standardized IT setup across 15 retail outlets — POS integration, guest WiFi, cloud-based inventory connectivity, and centralized monitoring from HQ.",
    highlights: ["15 locations", "Centralized management", "Cloud-connected POS"],
  },
  {
    num: "05",
    icon: Server,
    title: "Startup – Cloud Migration & Managed Services",
    industry: "Technology",
    description:
      "Migrated a growing tech startup from on-premise servers to a fully managed cloud environment with Microsoft 365, Azure AD, and automated backups.",
    highlights: ["100% cloud migration", "40% cost reduction", "Automated backups"],
  },
];

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-20 sm:py-28 bg-muted/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Projects Driving{" "}
              <span className="gradient-text">Modern Infrastructure</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real deployments. Real results. See how we transform IT
              infrastructure across industries.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-8 lg:grid-cols-[340px_1fr]">
          {/* Left - accordion nav */}
          <StaggerContainer className="space-y-2">
            {projects.map((project, i) => (
              <StaggerItem key={project.num}>
                <button
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left rounded-lg border p-4 transition-all ${
                    activeIndex === i
                      ? "border-blue-500/40 bg-blue-500/5 shadow-md"
                      : "border-border/50 bg-card/80 hover:border-blue-500/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-blue-500/40">
                      {project.num}
                    </span>
                    <span className="text-sm font-semibold flex-1">
                      {project.title}
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 text-muted-foreground transition-transform ${
                        activeIndex === i ? "rotate-90 text-blue-500" : ""
                      }`}
                    />
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Right - detail panel */}
          <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm sm:p-8 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white">
                    {(() => {
                      const Icon = projects[activeIndex].icon;
                      return <Icon className="h-6 w-6" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      {projects[activeIndex].title}
                    </h3>
                    <span className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                      {projects[activeIndex].industry}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {projects[activeIndex].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[activeIndex].highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-400"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
