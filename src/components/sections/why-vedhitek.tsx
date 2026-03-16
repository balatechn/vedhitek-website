import { Server, TrendingUp, ShieldCheck, Code2 } from "lucide-react";

const reasons = [
  {
    icon: Server,
    title: "Experienced IT Infrastructure Consulting",
    description:
      "Deep expertise in designing and implementing robust IT infrastructure for businesses of all sizes.",
  },
  {
    icon: TrendingUp,
    title: "Reliable & Scalable Solutions",
    description:
      "Solutions that grow with your business, ensuring consistent performance and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Technology Implementation",
    description:
      "Security-first approach to every project, protecting your data and business operations.",
  },
  {
    icon: Code2,
    title: "Modern SaaS Software Solutions",
    description:
      "Cutting-edge software products built with modern technology to streamline operations.",
  },
];

export function WhySection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Why Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose <span className="gradient-text">VedhiTek</span>?
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="relative text-center">
              {/* Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-blue-500/5">
                0{i + 1}
              </div>
              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl gradient-bg text-white shadow-lg shadow-blue-500/20">
                  <reason.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
