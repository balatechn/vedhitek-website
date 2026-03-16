import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Blog
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Stay updated with the latest in technology, IT infrastructure, and
              workforce management.
            </p>
          </div>

          <div className="mt-16 flex items-center justify-center">
            <div className="rounded-xl border border-border/50 bg-card/80 p-12 text-center">
              <p className="text-lg font-medium">Coming Soon</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Our blog is being prepared. Check back for articles on IT
                consulting, SaaS, and more.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
