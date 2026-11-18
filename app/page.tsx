import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Plane,
} from "lucide-react";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { WhatsAppForm } from "./components/WhatsAppForm";
import { articles } from "./blog/articles";
import { buildWhatsAppUrl, siteConfig } from "./lib/site-config";

export const metadata: Metadata = {
  title: "Viagens sem complicação",
  description:
    "Planeje passagens, hospedagem, cruzeiros, seguro viagem e pacotes com atendimento personalizado e 100% online. Fale com a Cadê Minha Mala.",
  alternates: { canonical: "/" },
};

const services = [
  {
    code: "CMM-001",
    from: "Sua rotina",
    to: "Dias inesquecíveis",
    tag: "PACOTE COMPLETO",
    text: "Voo, hospedagem e experiências no mesmo planejamento.",
  },
  {
    code: "CMM-002",
    from: "Seu porto",
    to: "Mar aberto",
    tag: "CRUZEIROS",
    text: "Cabine, roteiro e documentação explicados sem complicar.",
  },
  {
    code: "CMM-003",
    from: "Onde você está",
    to: "Onde quer chegar",
    tag: "PASSAGENS",
    text: "Rotas e horários pensados para a sua viagem, não só o menor preço.",
  },
];

const steps = [
  ["1", "Você chama", "Conte o destino, as datas e o seu jeito de viajar."],
  ["2", "A gente pesquisa", "Buscamos opções que façam sentido para você."],
  [
    "3",
    "Você confirma",
    "Explicamos tudo e ajustamos antes de reservar.",
  ],
  [
    "4",
    "Mala pronta",
    "Você embarca com suporte antes e durante a viagem.",
  ],
] as const;

export default function Home() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <main id="conteudo">
      <section className="hero">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Sua próxima viagem começa <em>sem complicação.</em>
            </h1>
            <p>
              Você conta o que imagina. A gente pesquisa, organiza e acompanha
              tudo, do primeiro orçamento até a volta para casa.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={buildWhatsAppUrl(
                  "Olá! Quero planejar minha próxima viagem.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Planejar minha viagem <MessageCircle size={18} />
              </a>
              <Link className="text-link" href="/servicos">
                Ver o que fazemos <ArrowRight size={17} />
              </Link>
            </div>
            <div className="trust-line">
              <span>Atendimento humano</span>
              <span>Compra segura</span>
              <a
                href={siteConfig.legal.cadasturVerificationUrl}
                target="_blank"
                rel="noreferrer"
                title="Verificar cadastro no Cadastur"
              >
                Cadastur regular
              </a>
            </div>
          </div>

          <div
            className="boarding-wrap"
            aria-label="Cartão de embarque ilustrativo"
          >
            <div className="boarding-pass">
              <div className="pass-main">
                <div className="pass-top">
                  <span>BOARDING PASS</span>
                  <strong>CMM</strong>
                </div>
                <div className="route">
                  <div>
                    <small>DE</small>
                    <b>ROT</b>
                    <span>ROTINA</span>
                  </div>
                  <Plane />
                  <div>
                    <small>PARA</small>
                    <b>VIA</b>
                    <span>VIAJAR</span>
                  </div>
                </div>
                <div className="pass-info">
                  <div>
                    <small>PASSAGEIRO</small>
                    <strong>VOCÊ</strong>
                  </div>
                  <div>
                    <small>EMBARQUE</small>
                    <strong>AGORA</strong>
                  </div>
                  <div>
                    <small>PORTÃO</small>
                    <strong>CMM</strong>
                  </div>
                </div>
                <div className="barcode" aria-hidden="true" />
              </div>
              <div className="pass-stub">
                <span className="vertical-code">CADE MINHA MALA</span>
                <div className="stamp">
                  SEM
                  <br />
                  STRESS
                </div>
                <small>SEQ 0001</small>
              </div>
            </div>
            <div className="luggage-tag">
              <span>DESTINO</span>
              <strong>O SEU.</strong>
              <small>PLANEJADO POR CMM</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section" id="como-funciona">
        <div className="container">
          <div className="section-heading split">
            <h2>Viajar pode ser leve desde o começo.</h2>
            <p>
              Nada de se perder entre sites, regras e detalhes. Organizamos a
              jornada em quatro passos claros.
            </p>
          </div>
          <div className="steps">
            {steps.map(([n, t, d], i) => (
              <article className="step" key={n}>
                <span>{n}</span>
                {i < 3 && <i aria-hidden="true" />}
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section navy-section">
        <div className="container difference-grid">
          <div className="section-heading">
            <h2>
              Praticidade online com <em>cuidado de verdade.</em>
            </h2>
            <p>
              Automatizamos a burocracia, não o atendimento. Sempre tem uma
              pessoa acompanhando sua viagem.
            </p>
            <Link className="btn btn-outline" href="/sobre">
              Conheça nossa história <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="benefit-grid">
            <article>
              <h3>100% online</h3>
              <p>
                Resolva tudo de onde estiver, com agilidade e sem deslocamentos.
              </p>
            </article>
            <article>
              <h3>Do seu jeito</h3>
              <p>
                Nada de roteiro pronto: escutamos prioridades, orçamento e
                ritmo.
              </p>
            </article>
            <article>
              <h3>Agência regularizada</h3>
              <p>
                Cadastro ativo no Cadastur ({siteConfig.legal.cadasturNumber}) e
                fornecedores selecionados com transparência.
              </p>
            </article>
            <article>
              <h3>Suporte real</h3>
              <p>
                Se surgir um imprevisto, você sabe exatamente com quem falar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-heading split">
            <h2>O que a gente organiza para você.</h2>
            <Link className="text-link" href="/servicos">
              Ver todos os serviços <ArrowRight size={17} />
            </Link>
          </div>
          <div className="ticket-grid">
            {services.map(({ code, from, to, tag, text }) => (
              <article className="service-ticket" key={code}>
                <div className="ticket-head">
                  <span>{tag}</span>
                </div>
                <div className="ticket-route">
                  <div>
                    <small>ORIGEM</small>
                    <strong>{from}</strong>
                  </div>
                  <ArrowRight />
                  <div>
                    <small>DESTINO</small>
                    <strong>{to}</strong>
                  </div>
                </div>
                <p>{text}</p>
                <div className="ticket-foot">
                  <span>{code}</span>
                  <div className="mini-barcode" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container testimonial-grid">
          <div className="section-heading">
            <h2>O tipo de mensagem que faz nosso dia.</h2>
            <p>
              Cada planejamento nasce de uma conversa de verdade, com opções
              claras, sem pressa e suporte do início ao retorno.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="section home-blog-section">
        <div className="container">
          <div className="section-heading split">
            <h2>Informação que deixa a viagem mais leve.</h2>
            <Link className="text-link" href="/blog">
              Ver todos os artigos <ArrowRight size={17} />
            </Link>
          </div>
          <div className="home-blog-grid">
            {featuredArticles.map((article) => (
              <Link
                className="home-blog-card"
                href={`/blog/${article.slug}`}
                key={article.slug}
              >
                <div>
                  <small>{article.category}</small>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <strong>
                  {article.readTime} <ArrowRight />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <h2>Me conta: para onde você quer ir?</h2>
            <p>
              A mensagem chega organizada no nosso WhatsApp e a conversa começa
              por lá.
            </p>
            <div className="contact-note">
              <MessageCircle />
              <div>
                <strong>Prefere ir direto?</strong>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.whatsapp.display}
                </a>
              </div>
            </div>
          </div>
          <WhatsAppForm />
        </div>
      </section>
    </main>
  );
}
