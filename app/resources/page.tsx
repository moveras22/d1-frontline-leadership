import Footer from "../components/Footer";
import InteriorPageNav from "../components/InteriorPageNav";
import ResourcesGrid from "../components/resources/ResourcesGrid";
import FreeDownloadsSection from "../components/resources/FreeDownloadsSection";
import { getAllArticles } from "@/lib/articles";
import { FREE_DOWNLOADS } from "@/lib/resources/downloads";
import { buildResourcesMetadata } from "@/lib/articles/seo";

export const metadata = buildResourcesMetadata();

type ResourcesPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const articles = getAllArticles();
  const { category } = await searchParams;

  return (
    <>
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <InteriorPageNav
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Resources" },
              ]}
            />
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Knowledge Hub
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Leadership Resources
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                Actionable insights, hiring strategies, leadership development
                articles, and practical tools for building stronger frontline
                leaders.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FreeDownloadsSection downloads={FREE_DOWNLOADS} />
            <ResourcesGrid articles={articles} initialCategory={category} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
