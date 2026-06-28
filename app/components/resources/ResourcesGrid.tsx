"use client";

import { useState } from "react";
import type { Article } from "@/lib/articles/types";
import { ARTICLE_CATEGORIES } from "@/lib/articles/types";
import ArticleCard from "./ArticleCard";

type ResourcesGridProps = {
  articles: Article[];
};

export default function ResourcesGrid({ articles }: ResourcesGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all sm:text-sm ${
            activeCategory === "all"
              ? "border-gold-500/40 bg-gold-500/10 text-gold-400"
              : "border-white/10 bg-white/5 text-white/60 hover:border-gold-500/25 hover:text-gold-400"
          }`}
        >
          All
        </button>

        {ARTICLE_CATEGORIES.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveCategory(category.slug)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all sm:text-sm ${
              activeCategory === category.slug
                ? "border-gold-500/40 bg-gold-500/10 text-gold-400"
                : "border-white/10 bg-white/5 text-white/60 hover:border-gold-500/25 hover:text-gold-400"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {filteredArticles.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-white/50">
          No articles found in this category.
        </p>
      )}
    </>
  );
}
