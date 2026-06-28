import type { ArticleFaq } from "@/lib/articles/types";

type ArticleFAQProps = {
  faqs: ArticleFaq[];
};

export default function ArticleFAQ({ faqs }: ArticleFAQProps) {
  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="article-faq-heading">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
        FAQ
      </p>
      <h2
        id="article-faq-heading"
        className="mt-3 font-display text-2xl font-bold sm:text-3xl"
      >
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-sm border border-white/10 bg-navy-800/50 transition-colors open:border-gold-500/25 open:bg-navy-800/80"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-sm font-semibold leading-snug text-white/90 transition-colors hover:text-gold-400 sm:px-6 sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span
                className="mt-0.5 shrink-0 text-gold-400/70 transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="border-t border-white/5 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
