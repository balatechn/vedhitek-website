import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VedhiTek Technology Consulting | IT Infrastructure & SaaS Solutions",
  description:
    "Smart IT Infrastructure Consulting and Workforce Management Solutions for modern businesses. Explore AttendEase – our SaaS attendance & workforce management platform.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "IT consulting",
    "IT infrastructure",
    "SaaS",
    "attendance management",
    "workforce management",
    "AttendEase",
    "VedhiTek",
    "Bangalore",
    "technology consulting",
  ],
  authors: [{ name: "VedhiTek Technology Consulting" }],
  openGraph: {
    title: "VedhiTek Technology Consulting",
    description:
      "Smart IT Infrastructure Consulting and Workforce Management Solutions for modern businesses.",
    url: "https://www.vedhitek.com",
    siteName: "VedhiTek",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VedhiTek Technology Consulting",
    description:
      "Smart IT Infrastructure Consulting and Workforce Management Solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
