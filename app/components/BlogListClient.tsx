"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Article } from "../blog/articles";

export function BlogListClient({ articles }: { articles: Article[] }) {
  const categories = [
    "Todos",
    ...Array.from(new Set(articles.map((article) => article.category))),
  ];
  const [selected, setSelected] = useState("Todos");

  const filtered =
    selected === "Todos"
      ? articles
      : articles.filter((article) => article.category === selected);

  return (
    <>
      <div
        className="blog-filters"
        role="tablist"
        aria-label="Filtrar artigos por categoria"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selected === category}
            className={
              selected === category ? "blog-filter active" : "blog-filter"
            }
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-card-grid">
        {filtered.map((article) => (
          <Link
            href={`/blog/${article.slug}`}
            className="blog-card"
            key={article.slug}
          >
            <div className="blog-card-top">
              <small>{article.category}</small>
            </div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <div className="blog-card-foot">
              <span>{article.readTime}</span>
              <ArrowRight />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
