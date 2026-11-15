import type { MetadataRoute } from "next";
import { articles } from "./blog/articles";
import { siteConfig } from "./lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/depoimentos",
    "/blog",
    "/contato",
    "/privacidade",
  ];

  const pages = routes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-11-15"),
    changeFrequency: (index === 0 ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: index === 0 ? 1 : route === "/privacidade" ? 0.5 : 0.8,
  }));

  const posts = articles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
