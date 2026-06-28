export const ARTICLE_CATEGORIES = [
  { slug: "hiring", label: "Hiring" },
  { slug: "leadership-development", label: "Leadership Development" },
  { slug: "manufacturing-leadership", label: "Manufacturing Leadership" },
  { slug: "interview-guides", label: "Interview Guides" },
  { slug: "team-performance", label: "Team Performance" },
  { slug: "d1-framework", label: "D1 Framework" },
] as const;

export type ArticleCategorySlug = (typeof ARTICLE_CATEGORIES)[number]["slug"];

export type ArticleSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  list?: string[];
  quote?: string;
};

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategorySlug;
  excerpt: string;
  readingTimeMinutes: number;
  publishedAt: string;
  author: string;
  featuredImageAlt: string;
  featuredImage: string;
  seo: {
    title: string;
    description: string;
  };
  sections: ArticleSection[];
};

export function getCategoryLabel(slug: ArticleCategorySlug): string {
  return ARTICLE_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
