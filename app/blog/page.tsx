import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Plane } from "lucide-react";
import { articles } from "./articles";
import { BlogListClient } from "../components/BlogListClient";
import { buildWhatsAppUrl } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Blog de viagens",
  description:
    "Guias práticos sobre planejamento, passagens, bagagem, hospedagem e viagens sem complicação, produzidos pela Cadê Minha Mala.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const [featured, ...others] = articles;

  return (
    <main id="conteudo">
      <section className="inner-hero blog-hero">
        <div className="container blog-hero-grid">
          <div>
            <h1>
              Informação útil para você viajar <em>mais leve.</em>
            </h1>
            <p>
              Sem listas impossíveis e sem enrolação. Só o que ajuda a
              transformar uma ideia de viagem em um plano bem organizado.
            </p>
          </div>
          <div className="blog-pass" aria-hidden="true">
            <span>CONTEÚDO DE EMBARQUE</span>
            <strong>BLOG</strong>
            <div className="blog-pass-route">
              <small>ORIGEM</small>
              <b>DÚVIDA</b>
              <Plane />
              <small>DESTINO</small>
              <b>DECISÃO</b>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-post-section">
        <div className="container">
          <Link href={`/blog/${featured.slug}`} className="featured-post">
            <div>
              <div className="post-meta">
                <span>{featured.category}</span>
                <span>{featured.readTime}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <strong>
                Ler artigo <ArrowRight />
              </strong>
            </div>
          </Link>
        </div>
      </section>

      <section className="section blog-list-section">
        <div className="container">
          <div className="section-heading split">
            <h2>Próximas leituras.</h2>
            <p>
              Conteúdos pensados para responder às perguntas que aparecem antes,
              durante e depois do embarque.
            </p>
          </div>

          <BlogListClient articles={others} />
        </div>
      </section>

      <section className="section blog-cta">
        <div className="container">
          <div>
            <h2>Conversa boa também ajuda a planejar.</h2>
            <p>
              Conte seu destino e o que você precisa resolver. A gente organiza
              os próximos passos com você.
            </p>
          </div>
          <a
            className="btn btn-primary"
            href={buildWhatsAppUrl(
              "Olá! Li o blog e quero ajuda para planejar minha viagem.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp <MessageCircle />
          </a>
        </div>
      </section>
    </main>
  );
}
