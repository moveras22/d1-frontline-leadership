import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import ArticleBody from "../../components/resources/ArticleBody";
import ArticleCTA from "../../components/resources/ArticleCTA";
import ArticleNavigation from "../../components/resources/ArticleNavigation";
import ArticleRelated from "../../components/resources/ArticleRelated";
import ArticleShareButtons from "../../components/resources/ArticleShareButtons";
import ArticleStructuredData from "../../components/resources/ArticleStructuredData";
import ArticleTableOfContents from "../../components/resources/ArticleTableOfContents";
import ArticleFeaturedImage from "../../components/resources/ArticleFeaturedImage";
import ArticleFAQ from "../../components/resources/ArticleFAQ";
import ArticleFaqStructuredData from "../../components/resources/ArticleFaqStructuredData";
import {
  getAdjacentArticles,
  getAllArticleSlugs,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import {
  buildArticleMetadata,
  getArticleUrl,
} from "@/lib/articles/seo";
import { getCategoryLabel } from "@/lib/articles/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | D1 Frontline Leadership" };
  }

  return buildArticleMetadata(article);
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { previous, next } = getAdjacentArticles(slug);
  const related = getRelatedArticles(article);
  const articleUrl = getArticleUrl(article.slug);

  return (
    <>
      <ArticleStructuredData article={article} />
      <ArticleFaqStructuredData faqs={article.faqs} />
      <main>
        <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/resources"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back to Resources
            </Link>

            <div className="mx-auto max-w-3xl">
              <ArticleFeaturedImage
                alt={article.featuredImageAlt}
                variant="hero"
                src={article.featuredImage}
              />

              <div className="mt-8 text-center sm:mt-10">
                <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {getCategoryLabel(article.category)}
                </p>
                <h1 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  {article.title}
                </h1>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/50">
                  <span>{article.author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readingTimeMinutes} min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-8 lg:pb-32">
          <div className="mb-16">
            <ArticleTableOfContents sections={article.sections} />
          </div>

          <ArticleBody sections={article.sections} />

          <div className="mt-16 border-t border-white/10 pt-8">
            <ArticleShareButtons title={article.title} url={articleUrl} />
          </div>

          <div className="mt-16">
            <ArticleNavigation previous={previous} next={next} />
          </div>

          <div className="mt-16">
            <ArticleCTA />
          </div>

          <div className="mt-16">
            <ArticleRelated articles={related} />
          </div>

          <div className="mt-16">
            <ArticleFAQ faqs={article.faqs} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
