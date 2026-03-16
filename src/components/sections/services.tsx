import {
  ClipboardList,
  Wrench,
  ShieldCheck,
  Cloud,
  Wifi,
  Camera,
  HardHat,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "IT Infrastructure Assessment & Planning",
    description:
      "Comprehensive evaluation and strategic planning for your IT infrastructure needs.",
  },
  {
    icon: Wrench,
    title: "IT Support & Annual Maintenance (AMC)",
    description:
      "Reliable ongoing support and maintenance to keep your systems running smoothly.",
  },
  {
    icon: ShieldCheck,
    title: "Network & Security",
    description:
      "Enterprise-grade network architecture and security solutions to protect your business.",
  },
  {
    icon: Cloud,
    title: "Cloud & Email Solutions",
    description:
      "Seamless cloud migration and email systems for modern collaboration.",
  },
  {
    icon: Wifi,
    title: "Guest & Staff WiFi Systems",
    description:
      "High-performance wireless networks designed for both guests and staff.",
  },
  {
    icon: Camera,
    title: "CCTV & Physical Security",
    description:
      "Advanced surveillance and physical security systems for complete protection.",
  },
  {
    icon: HardHat,
    title: "Pre-Opening IT Planning",
    description:
      "End-to-end IT planning for new facilities, hotels, and office spaces.",
  },
  {
    icon: Rocket,
    title: "Go-Live IT Deployment Support",
    description:
      "Expert deployment support ensuring smooth go-live for your IT systems.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-muted/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive IT{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From infrastructure planning to deployment, we provide end-to-end
            technology solutions tailored to your business.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 transition-colors group-hover:bg-blue-500/20 dark:text-blue-400">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
