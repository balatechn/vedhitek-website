"use client";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Fence,
  CalendarDays,
  DollarSign,
  Users,
  BarChart3,
  LayoutDashboard,
  Lock,
  ArrowRight,
  Smartphone,
  Monitor,
} from "lucide-react";

const features = [
  { icon: MapPin, label: "GPS Attendance Check-in / Check-out" },
  { icon: Fence, label: "Geofence Validation" },
  { icon: CalendarDays, label: "Leave Management" },
  { icon: DollarSign, label: "Payroll & Payslip Generation" },
  { icon: Users, label: "Employee Management" },
  { icon: BarChart3, label: "Reports & Analytics" },
  { icon: LayoutDashboard, label: "Manager Dashboard" },
  { icon: Lock, label: "Secure Access Control" },
];

export function ProductSection() {
  return (
    <section id="attendease" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left – content */}
          <div>
            <Badge
              variant="secondary"
              className="mb-4 bg-blue-500/10 text-blue-700 dark:text-blue-400"
            >
              SaaS Product
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">AttendEase</span> – Smart
              Attendance &amp; Workforce Management
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AttendEase is a modern digital platform designed to manage employee
              attendance, leave, payroll, and workforce operations efficiently.
            </p>

            {/* Features grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-400">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{f.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 gradient-bg glow text-white hover:opacity-90"
              )}
            >
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right – product mockup */}
          <div className="relative">
            {/* Desktop mockup */}
            <div className="glow rounded-xl border border-border/50 bg-card p-2 shadow-2xl">
              <div className="rounded-lg bg-gradient-to-br from-[#1e3a5f]/20 via-background to-blue-900/20">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 rounded-md bg-muted/50 px-3 py-1 text-center text-xs text-muted-foreground">
                    app.attendease.vedhitek.com
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-semibold">Dashboard</p>
                      <p className="text-xs text-muted-foreground">
                        Welcome back, Admin
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-muted-foreground" />
                      <Smartphone className="h-4 w-4 text-blue-500" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { label: "Present", value: "142", color: "text-green-500" },
                      { label: "Absent", value: "8", color: "text-red-400" },
                      { label: "On Leave", value: "12", color: "text-yellow-500" },
                      { label: "Late", value: "5", color: "text-orange-400" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg border border-border/50 bg-background/50 p-3 backdrop-blur-sm"
                      >
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                        <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Attendance log */}
                  <div className="mt-4 rounded-lg border border-border/50 bg-background/50 p-3 backdrop-blur-sm">
                    <p className="mb-2 text-xs font-medium">Recent Check-ins</p>
                    {[
                      { name: "Arun K.", time: "09:02 AM", status: "On Time" },
                      { name: "Priya S.", time: "09:15 AM", status: "Late" },
                      { name: "Raj M.", time: "08:55 AM", status: "On Time" },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className="flex items-center justify-between border-b border-border/30 py-2 last:border-0"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-semibold text-blue-700 dark:text-blue-400">
                            {row.name[0]}
                          </div>
                          <span className="text-xs">{row.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{row.time}</span>
                        <span
                          className={`text-xs font-medium ${
                            row.status === "On Time"
                              ? "text-green-500"
                              : "text-orange-400"
                          }`}
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating mobile mockup */}
            <div className="absolute -bottom-8 -left-4 w-32 rounded-xl border border-border/50 bg-card p-1.5 shadow-xl glow-sm sm:-left-6 sm:w-40">
              <div className="rounded-lg bg-gradient-to-b from-[#1e3a5f]/20 to-background p-3">
                <div className="mb-2 h-1.5 w-8 mx-auto rounded-full bg-muted" />
                <p className="text-[9px] font-semibold text-center">AttendEase</p>
                <div className="mt-2 space-y-1.5">
                  <div className="rounded bg-green-500/10 p-1.5 text-center">
                    <p className="text-[8px] text-green-600 dark:text-green-400 font-medium">
                      ✓ Checked In
                    </p>
                    <p className="text-[7px] text-muted-foreground">09:00 AM</p>
                  </div>
                  <div className="rounded bg-blue-500/10 p-1.5 text-center">
                    <MapPin className="mx-auto h-3 w-3 text-blue-500" />
                    <p className="text-[8px] text-muted-foreground">GPS Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
