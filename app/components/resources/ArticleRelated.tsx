import Link from "next/link";
import type { Article } from "@/lib/articles/types";
import { getCategoryLabel } from "@/lib/articles/types";

type ArticleRelatedProps = {
  articles: Article[];
};

export default function ArticleRelated({ articles }: ArticleRelatedProps) {
  if (articles.length === 0) return null;

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
        Related Articles
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
        Continue Reading
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/resources/${article.slug}`}
            className="group rounded-sm border border-white/8 bg-navy-800/50 p-6 transition-all hover:border-gold-500/30 hover:bg-navy-800/80"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {getCategoryLabel(article.category)}
            </p>
            <h3 className="mt-2 font-display text-base font-semibold leading-snug transition-colors group-hover:text-gold-400 sm:text-lg">
              {article.title}
            </h3>
            <p className="mt-2 text-xs text-white/40">
              {article.readingTimeMinutes} min read
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
