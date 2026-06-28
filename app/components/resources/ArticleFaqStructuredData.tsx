import type { ArticleFaq } from "@/lib/articles/types";

export function buildFaqJsonLd(faqs: ArticleFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type ArticleFaqStructuredDataProps = {
  faqs: ArticleFaq[];
};

export default function ArticleFaqStructuredData({
  faqs,
}: ArticleFaqStructuredDataProps) {
  if (faqs.length === 0) return null;

  const jsonLd = buildFaqJsonLd(faqs);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
