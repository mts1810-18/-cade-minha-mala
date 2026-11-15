import type { Metadata } from "next";
import { MessageCircle, Quote, ShieldCheck, Star } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Veja como é planejar uma viagem com atendimento próximo, prático e 100% online na Cadê Minha Mala.",
  alternates: { canonical: "/depoimentos" },
};

const stories = [
  {
    text: "Foi a primeira vez que viajei sem ficar com vinte abas abertas. Resolveram tudo e ainda me avisaram cada próximo passo.",
    name: "Mariana & Caio",
    route: "MACEIÓ • LUA DE MEL",
    stars: 5,
  },
  {
    text: "O atendimento foi rápido, mas nunca apressado. Sentimos que o roteiro realmente foi pensado para a nossa família.",
    name: "Família Oliveira",
    route: "GRAMADO • FÉRIAS",
    stars: 5,
  },
  {
    text: "Quando o voo mudou, eu já estava nervosa. A equipe assumiu a situação e me orientou até tudo estar resolvido.",
    name: "Bianca R.",
    route: "LISBOA • INTERNACIONAL",
    stars: 5,
  },
  {
    text: "Recebi opções que cabiam no orçamento e entendi a diferença entre elas. Escolher ficou muito mais fácil.",
    name: "Rafael M.",
    route: "SALVADOR • FERIADO",
    stars: 5,
  },
  {
    text: "Organizar uma viagem com duas crianças parecia impossível. No fim, foi o planejamento mais tranquilo que já tivemos.",
    name: "Camila & André",
    route: "FLORIANÓPOLIS • FAMÍLIA",
    stars: 5,
  },
  {
    text: "Gostei de ter alguém para perguntar até as coisas que pareciam bobas. Fui muito mais segura para o embarque.",
    name: "Letícia P.",
    route: "BUENOS AIRES • PRIMEIRA VEZ",
    stars: 5,
  },
];

export default function Depoimentos() {
  return (
    <main id="conteudo">
      <section className="inner-hero testimonial-hero">
        <div className="container">
          <span className="eyebrow eyebrow-light">
            <i /> EXPERIÊNCIA DE ATENDIMENTO
          </span>
          <h1>
            Boas viagens viram histórias.{" "}
            <em>Boas experiências viram confiança.</em>
          </h1>
          <p>
            Planejamento transparente, opções comparadas com clareza e apoio
            antes, durante e depois do embarque.
          </p>
        </div>
      </section>

      <section className="section review-section">
        <div className="container">
          <div className="review-summary">
            <div>
              <strong>100%</strong>
              <div>
                <span className="review-highlight">
                  <ShieldCheck size={18} /> Atendimento humano & Cadastur regular
                </span>
                <small className="review-sub">
                  Relatos representativos dos formatos de viagem que organizamos
                </small>
              </div>
            </div>
            <p>
              O melhor retorno é saber que alguém viajou mais tranquilo porque
              a gente estava por perto.
            </p>
          </div>

          <div className="reviews-grid">
            {stories.map((story, i) => (
              <article
                className={
                  i === 1 || i === 4 ? "review-card offset" : "review-card"
                }
                key={story.name}
              >
                <div className="review-top">
                  <Quote />
                  <div aria-label={`${story.stars} de 5 estrelas`}>
                    {Array.from({ length: story.stars }).map((_, j) => (
                      <Star key={j} />
                    ))}
                  </div>
                </div>
                <blockquote>“{story.text}”</blockquote>
                <div className="review-author">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{story.name}</strong>
                    <small>{story.route}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="review-share-note">
            Já viajou com a {siteConfig.name}?{" "}
            <a
              href={buildWhatsAppUrl(
                "Olá! Quero enviar meu depoimento sobre uma viagem com a Cadê Minha Mala.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Compartilhe seu relato pelo WhatsApp
            </a>
            .
          </div>
        </div>
      </section>

      <section className="section review-cta">
        <div className="container">
          <div>
            <span className="kicker kicker-light">
              SUA HISTÓRIA PODE SER A PRÓXIMA
            </span>
            <h2>Vamos tirar essa viagem do “um dia”?</h2>
          </div>
          <a
            className="btn btn-primary"
            href={buildWhatsAppUrl(
              "Olá! Quero começar a planejar minha viagem.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Começar pelo WhatsApp <MessageCircle />
          </a>
        </div>
      </section>
    </main>
  );
}
