import Link from "next/link";
import type { Article } from "@/lib/articles/types";

type ArticleNavigationProps = {
  previous: Article | null;
  next: Article | null;
};

export default function ArticleNavigation({
  previous,
  next,
}: ArticleNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Article navigation"
      className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/resources/${previous.slug}`}
          className="group rounded-sm border border-white/8 bg-navy-800/50 p-6 transition-all hover:border-gold-500/30 hover:bg-navy-800/80"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
            ← Previous
          </span>
          <p className="mt-2 font-display text-base font-semibold leading-snug transition-colors group-hover:text-gold-400 sm:text-lg">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/resources/${next.slug}`}
          className="group rounded-sm border border-white/8 bg-navy-800/50 p-6 text-right transition-all hover:border-gold-500/30 hover:bg-navy-800/80"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Next →
          </span>
          <p className="mt-2 font-display text-base font-semibold leading-snug transition-colors group-hover:text-gold-400 sm:text-lg">
            {next.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
