import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MessageCircle,
} from "lucide-react";
import { articles, getArticle } from "../articles";
import { buildWhatsAppUrl, siteConfig } from "../../lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
    image: `${siteConfig.url}/og-image.png`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <main id="conteudo">
      <article>
        <header className="article-hero">
          <div className="container article-hero-inner">
            <nav className="breadcrumbs" aria-label="Navegação estrutural">
              <Link href="/">Início</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{article.category}</span>
            </nav>
            <div className="article-meta">
              <span>{article.category}</span>
              <span>
                <Clock3 /> {article.readTime}
              </span>
              <span>{article.displayDate}</span>
            </div>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
          </div>
        </header>

        <div className="container article-layout">
          <aside className="article-aside">
            <span className="kicker">NESTE ARTIGO</span>
            <nav aria-label="Índice do artigo">
              {article.sections.map((section, index) => (
                <a href={`#secao-${index + 1}`} key={section.heading}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.heading.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
            <Link href="/blog">
              <ArrowLeft /> Voltar ao blog
            </Link>
          </aside>

          <div className="article-body">
            <p className="article-intro">{article.intro}</p>
            {article.sections.map((section, index) => (
              <section id={`secao-${index + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>
                        <Check /> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="article-help">
              <span>PLANEJAMENTO PERSONALIZADO</span>
              <h2>Quer transformar essas dicas na sua próxima viagem?</h2>
              <p>
                A Cadê Minha Mala pesquisa e organiza as opções com você.
              </p>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Li um artigo do blog e quero ajuda com minha viagem.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Conversar no WhatsApp <MessageCircle />
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="section related-section">
        <div className="container">
          <span className="kicker">CONTINUE LENDO</span>
          <h2>Outros guias que podem ajudar.</h2>
          <div className="related-grid">
            {related.map((item) => (
              <Link href={`/blog/${item.slug}`} key={item.slug}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <strong>
                  Ler agora <ArrowRight />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
