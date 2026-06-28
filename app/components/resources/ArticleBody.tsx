import type { ArticleSection } from "@/lib/articles/types";

type ArticleBodyProps = {
  sections: ArticleSection[];
};

export default function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          {section.level === 2 ? (
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {section.heading}
            </h2>
          ) : (
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              {section.heading}
            </h3>
          )}

          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-4 text-lg leading-relaxed text-white/65"
            >
              {paragraph}
            </p>
          ))}

          {section.list && (
            <ul className="mt-6 space-y-3">
              {section.list.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  <span className="text-sm leading-relaxed text-white/75 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {section.quote && (
            <blockquote className="mt-6 rounded-sm border border-gold-500/30 bg-gold-500/5 px-6 py-8 sm:px-8">
              <p className="font-display text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
                {section.quote}
              </p>
            </blockquote>
          )}
        </section>
      ))}
    </div>
  );
}
