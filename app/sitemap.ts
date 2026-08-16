import type { MetadataRoute } from "next";
import { articles } from "./blog/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sobre", "/servicos", "/depoimentos", "/blog", "/contato"];
  const pages = routes.map((route, index) => ({
    url: `https://www.cademinhamala.com.br${route}`,
    lastModified: new Date("2026-08-07"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
  const posts = articles.map((article) => ({
    url: `https://www.cademinhamala.com.br/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...posts];
}
