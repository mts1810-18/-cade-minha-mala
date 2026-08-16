import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, MessageCircle, Plane } from "lucide-react";
import { articles } from "./articles";

export const metadata: Metadata = {
  title: "Blog de viagens",
  description: "Guias práticos sobre planejamento, passagens, bagagem, hospedagem e viagens sem complicação, produzidos pela Cadê Minha Mala.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const [featured, ...others] = articles;
  return (
    <main id="conteudo">
      <section className="inner-hero blog-hero">
        <div className="container blog-hero-grid">
          <div><span className="eyebrow eyebrow-light"><i /> GUIAS PARA VIAJAR MELHOR</span><h1>Informação útil para você viajar <em>mais leve.</em></h1><p>Sem listas impossíveis e sem enrolação. Só o que ajuda a transformar uma ideia de viagem em um plano bem organizado.</p></div>
          <div className="blog-pass" aria-hidden="true"><BookOpen /><span>CONTEÚDO DE EMBARQUE</span><strong>BLOG</strong><div className="blog-pass-route"><small>ORIGEM</small><b>DÚVIDA</b><Plane /><small>DESTINO</small><b>DECISÃO</b></div></div>
        </div>
      </section>

      <section className="section featured-post-section"><div className="container"><span className="kicker">LEITURA EM DESTAQUE</span><Link href={`/blog/${featured.slug}`} className="featured-post"><div className="featured-number">{featured.number}</div><div><div className="post-meta"><span>{featured.category}</span><span><Clock3 /> {featured.readTime}</span></div><h2>{featured.title}</h2><p>{featured.excerpt}</p><strong>Ler artigo <ArrowRight /></strong></div></Link></div></section>

      <section className="section blog-list-section"><div className="container"><div className="section-heading split"><div><span className="kicker">ÚLTIMOS ARTIGOS</span><h2>Próximas leituras.</h2></div><p>Conteúdos pensados para responder às perguntas que aparecem antes, durante e depois do embarque.</p></div><div className="blog-card-grid">{others.map(article => <Link href={`/blog/${article.slug}`} className="blog-card" key={article.slug}><div className="blog-card-top"><span>{article.number}</span><small>{article.category}</small></div><h3>{article.title}</h3><p>{article.excerpt}</p><div className="blog-card-foot"><span><Clock3 /> {article.readTime}</span><ArrowRight /></div></Link>)}</div></div></section>

      <section className="section blog-cta"><div className="container"><div><span className="kicker kicker-light">AINDA FICOU COM DÚVIDA?</span><h2>Conversa boa também ajuda a planejar.</h2><p>Conte seu destino e o que você precisa resolver. A gente organiza os próximos passos com você.</p></div><a className="btn btn-primary" href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Li%20o%20blog%20e%20quero%20ajuda%20para%20planejar%20minha%20viagem." target="_blank" rel="noreferrer">Falar no WhatsApp <MessageCircle /></a></div></section>
    </main>
  );
}
