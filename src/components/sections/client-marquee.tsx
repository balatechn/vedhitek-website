"use client";

import { FadeUp } from "@/components/motion-wrapper";

const logos = [
  { name: "Microsoft", abbr: "MS" },
  { name: "Cisco", abbr: "Cisco" },
  { name: "AWS", abbr: "AWS" },
  { name: "Google Cloud", abbr: "GCP" },
  { name: "Dell", abbr: "Dell" },
  { name: "HP Enterprise", abbr: "HPE" },
  { name: "Fortinet", abbr: "FN" },
  { name: "VMware", abbr: "VM" },
  { name: "Ubiquiti", abbr: "UI" },
  { name: "Hikvision", abbr: "HK" },
];

function LogoCard({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="mx-4 flex flex-shrink-0 items-center gap-2.5 rounded-lg border border-border/50 bg-card/60 px-5 py-3 backdrop-blur-sm">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/10 text-xs font-bold text-blue-700 dark:text-blue-400">
        {abbr.slice(0, 2)}
      </div>
      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section className="relative py-14 overflow-hidden">
      <FadeUp>
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Technology Partners We Work With
        </p>
      </FadeUp>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 - left to right */}
        <div className="marquee mb-4">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <LogoCard key={`r1-${i}`} name={logo.name} abbr={logo.abbr} />
            ))}
          </div>
        </div>

        {/* Row 2 - right to left */}
        <div className="marquee marquee-reverse">
          <div className="marquee-track">
            {[...logos.slice().reverse(), ...logos.slice().reverse()].map(
              (logo, i) => (
                <LogoCard key={`r2-${i}`} name={logo.name} abbr={logo.abbr} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
