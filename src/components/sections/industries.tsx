import {
  Building2,
  Hotel,
  Factory,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    label: "Corporate Offices",
    description: "Streamlined IT infrastructure for modern workplaces.",
  },
  {
    icon: Hotel,
    label: "Hotels & Hospitality",
    description: "Complete technology setup for hotels and resorts.",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    description: "Industrial IT solutions for production environments.",
  },
  {
    icon: ShoppingBag,
    label: "Retail Businesses",
    description: "Tech-driven solutions for retail operations.",
  },
  {
    icon: Briefcase,
    label: "Startups & SMEs",
    description: "Scalable and budget-friendly IT consulting.",
  },
];

export function IndustriesSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-muted/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Industries
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Delivering tailored technology solutions across diverse industry
            verticals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div
              key={industry.label}
              className="group flex flex-col items-center rounded-xl border border-border/50 bg-card/80 p-6 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 transition-colors group-hover:bg-blue-500/20 dark:text-blue-400">
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{industry.label}</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
