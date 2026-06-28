import type { ArticleSection } from "@/lib/articles/types";

type ArticleTableOfContentsProps = {
  sections: ArticleSection[];
};

export default function ArticleTableOfContents({
  sections,
}: ArticleTableOfContentsProps) {
  const headings = sections.filter((s) => s.level === 2);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
        In This Article
      </h2>
      <ol className="mt-4 space-y-2">
        {headings.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="flex items-start gap-3 text-sm leading-relaxed text-white/65 transition-colors hover:text-gold-400"
            >
              <span className="mt-0.5 shrink-0 font-mono text-xs text-gold-500/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
