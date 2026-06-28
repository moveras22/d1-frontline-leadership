import fs from "fs";
import path from "path";
import type { Article, ArticleCategorySlug } from "./types";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

function readArticles(): Article[] {
  const files = fs.readdirSync(articlesDirectory).filter((f) => f.endsWith(".json"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(articlesDirectory, file), "utf8");
      return JSON.parse(raw) as Article;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getAllArticles(): Article[] {
  return readArticles();
}

export function getArticleBySlug(slug: string): Article | undefined {
  return readArticles().find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategorySlug): Article[] {
  return readArticles().filter((article) => article.category === category);
}

export function getRelatedArticles(article: Article, limit = 4): Article[] {
  const candidates = readArticles().filter((a) => a.slug !== article.slug);
  const sameCategory = candidates.filter((a) => a.category === article.category);
  const otherCategory = candidates.filter((a) => a.category !== article.category);

  return [...sameCategory, ...otherCategory].slice(0, limit);
}

export function getAdjacentArticles(slug: string): {
  previous: Article | null;
  next: Article | null;
} {
  const articles = readArticles();
  const index = articles.findIndex((a) => a.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index < articles.length - 1 ? articles[index + 1] : null,
    next: index > 0 ? articles[index - 1] : null,
  };
}

export function getAllArticleSlugs(): string[] {
  return readArticles().map((article) => article.slug);
}
