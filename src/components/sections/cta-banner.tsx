"use client";

import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/motion-wrapper";
import { useCallback } from "react";

export function CtaBanner() {
  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-90" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Let&apos;s build something resilient together. Get a free
              consultation with our IT infrastructure experts today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                onClick={handleSmoothScroll}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-white px-8 text-base font-semibold text-[#1e3a5f] hover:bg-white/90 shadow-lg"
                )}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="tel:+918484040237"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-white/30 px-8 text-base text-white hover:bg-white/10 hover:text-white"
                )}
              >
                Call +91 84840 40237
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
