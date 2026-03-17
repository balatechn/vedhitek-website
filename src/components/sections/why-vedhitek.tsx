"use client";

import { Server, TrendingUp, ShieldCheck, Code2 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const reasons = [
  {
    icon: Server,
    title: "Experienced IT Infrastructure Consulting",
    description:
      "Deep expertise in designing and implementing robust IT infrastructure for businesses of all sizes.",
    details:
      "From initial assessment to full deployment, we bring years of hands-on experience across networking, server management, and data center design to ensure rock-solid foundations.",
  },
  {
    icon: TrendingUp,
    title: "Reliable & Scalable Solutions",
    description:
      "Solutions that grow with your business, ensuring consistent performance and reliability.",
    details:
      "Our architecture-first approach means your IT scales seamlessly — whether you're onboarding 10 employees or 10,000 — without costly rework or downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Technology Implementation",
    description:
      "Security-first approach to every project, protecting your data and business operations.",
    details:
      "We integrate firewall management, endpoint protection, access controls, and compliance audits into every implementation, keeping your business safe from evolving threats.",
  },
  {
    icon: Code2,
    title: "Modern SaaS Software Solutions",
    description:
      "Cutting-edge software products built with modern technology to streamline operations.",
    details:
      "AttendEase and future SaaS products are built with modern tech stacks, offering real-time dashboards, mobile-first design, and seamless API integrations.",
  },
];

export function WhySection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              The VedhiTek Advantage
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose <span className="gradient-text">VedhiTek</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don&apos;t just implement technology — we partner with you to build lasting infrastructure that drives your business forward.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <StaggerItem key={reason.title}>
              <div className="group relative h-full rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5">
                {/* Number watermark */}
                <div className="absolute -top-2 right-4 text-5xl font-bold text-blue-500/5">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-bg text-white shadow-lg shadow-blue-500/20">
                    <reason.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground/70">
                    {reason.details}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
