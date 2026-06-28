import type { Metadata } from "next";
import type { Article } from "./types";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://d1frontlineleadership.com";

export function getArticleUrl(slug: string): string {
  return `${SITE_URL}/resources/${slug}`;
}

export function getResourcesUrl(): string {
  return `${SITE_URL}/resources`;
}

export function buildArticleMetadata(article: Article): Metadata {
  const url = getArticleUrl(article.slug);

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      siteName: "D1 Frontline Leadership",
      images: [
        {
          url: `${SITE_URL}/og/resources/${article.slug}.png`,
          width: 1200,
          height: 630,
          alt: article.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.title,
      description: article.seo.description,
      images: [`${SITE_URL}/og/resources/${article.slug}.png`],
    },
  };
}

export function buildResourcesMetadata(): Metadata {
  const url = getResourcesUrl();

  return {
    title: "Leadership Resources | D1 Frontline Leadership",
    description:
      "Actionable insights, hiring strategies, leadership development articles, and practical tools for building stronger frontline leaders.",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Leadership Resources | D1 Frontline Leadership",
      description:
        "Actionable insights, hiring strategies, leadership development articles, and practical tools for building stronger frontline leaders.",
      url,
      type: "website",
      siteName: "D1 Frontline Leadership",
      images: [
        {
          url: `${SITE_URL}/og/resources.png`,
          width: 1200,
          height: 630,
          alt: "D1 Frontline Leadership Resources",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Leadership Resources | D1 Frontline Leadership",
      description:
        "Actionable insights, hiring strategies, leadership development articles, and practical tools for building stronger frontline leaders.",
      images: [`${SITE_URL}/og/resources.png`],
    },
  };
}

export function buildArticleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seo.description,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    datePublished: article.publishedAt,
    image: `${SITE_URL}/og/resources/${article.slug}.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getArticleUrl(article.slug),
    },
    publisher: {
      "@type": "Organization",
      name: "D1 Frontline Leadership",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og/resources.png`,
      },
    },
  };
}
