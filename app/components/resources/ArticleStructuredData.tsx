import type { Article } from "@/lib/articles/types";
import { buildArticleJsonLd } from "@/lib/articles/seo";

type ArticleStructuredDataProps = {
  article: Article;
};

export default function ArticleStructuredData({
  article,
}: ArticleStructuredDataProps) {
  const jsonLd = buildArticleJsonLd(article);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
