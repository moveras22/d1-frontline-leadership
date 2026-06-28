import Link from "next/link";
import type { Article } from "@/lib/articles/types";
import { getCategoryLabel } from "@/lib/articles/types";
import ArticleFeaturedImage from "./ArticleFeaturedImage";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-white/8 bg-navy-800/50 transition-all hover:border-gold-500/30 hover:bg-navy-800/80">
      <ArticleFeaturedImage
        alt={article.featuredImageAlt}
        variant="card"
        src={article.featuredImage}
      />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          {getCategoryLabel(article.category)}
        </p>

        <h2 className="mt-3 font-display text-lg font-semibold leading-snug sm:text-xl">
          <Link
            href={`/resources/${article.slug}`}
            className="transition-colors group-hover:text-gold-400"
          >
            {article.title}
          </Link>
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-xs text-white/40">
            {article.readingTimeMinutes} min read
          </span>

          <Link
            href={`/resources/${article.slug}`}
            className="text-xs font-semibold uppercase tracking-wider text-gold-400 transition-colors group-hover:text-gold-300"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </article>
  );
}
