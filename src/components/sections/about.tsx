import {
  Server,
  Shield,
  Cloud,
  Camera,
  Hotel,
  ClipboardCheck,
} from "lucide-react";

const specializations = [
  { icon: Server, label: "IT Infrastructure Consulting" },
  { icon: Shield, label: "Network & Security Solutions" },
  { icon: Cloud, label: "Cloud & Email Systems" },
  { icon: Camera, label: "CCTV & Physical Security" },
  { icon: Hotel, label: "Hospitality IT Setup" },
  { icon: ClipboardCheck, label: "Pre-Opening IT Planning" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left – text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              About <span className="gradient-text">VedhiTek</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              VedhiTek is a technology consulting company providing IT
              infrastructure planning, implementation, and digital
              transformation solutions for businesses.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our goal is to help businesses build secure, scalable, and
              future-ready technology environments.
            </p>
          </div>

          {/* Right – specializations */}
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              We Specialize In
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {specializations.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 transition-all hover:border-blue-500/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 transition-colors group-hover:bg-blue-500/20 dark:text-blue-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
