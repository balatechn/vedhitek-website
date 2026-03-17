"use client";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          IT Infrastructure &amp; Managed Services
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto max-w-5xl text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build Resilient{" "}
          <span className="gradient-text">IT Infrastructure.</span>
          <br className="hidden sm:block" />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Scale with Confidence.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
          End-to-end IT Infrastructure consulting — from network design and
          server management to cloud migration, cybersecurity, and 24/7
          managed services.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row">
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
        </motion.div>

        {/* Hero visual - Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative mt-16 w-full max-w-5xl sm:mt-20">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:grid-rows-2">
            {/* Large image - Server Room */}
            <div className="group relative overflow-hidden rounded-xl border border-border/50 shadow-2xl glow sm:col-span-3 sm:row-span-2">
              <Image
                src="/images/hero/server-room.jpg"
                alt="Server room with blue lighting - IT Infrastructure"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  IT Infrastructure
                </span>
                <p className="mt-2 text-lg font-semibold text-white sm:text-xl">Data Center &amp; Server Management</p>
              </div>
            </div>

            {/* Small image - CCTV */}
            <div className="group relative overflow-hidden rounded-xl border border-border/50 shadow-xl sm:col-span-2">
              <Image
                src="/images/hero/cctv-camera.jpg"
                alt="CCTV security camera installation"
                width={600}
                height={400}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Security Systems
                </span>
                <p className="mt-1.5 text-sm font-semibold text-white">CCTV &amp; Surveillance</p>
              </div>
            </div>

            {/* Small image - Hotel Lobby */}
            <div className="group relative overflow-hidden rounded-xl border border-border/50 shadow-xl sm:col-span-2">
              <Image
                src="/images/hero/hotel-lobby.jpg"
                alt="Modern hotel lobby - hospitality IT setup"
                width={600}
                height={400}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Hospitality IT
                </span>
                <p className="mt-1.5 text-sm font-semibold text-white">Hotel &amp; Resort Networks</p>
              </div>
            </div>
          </div>

          {/* Floating glow under the grid */}
          <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
