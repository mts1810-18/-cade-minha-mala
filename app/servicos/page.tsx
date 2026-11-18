import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check, Plane } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Serviços e pacotes",
  description:
    "Passagens aéreas, hotéis, pacotes completos, cruzeiros, seguro viagem e locação de veículos organizados pela Cadê Minha Mala.",
  alternates: { canonical: "/servicos" },
};

const catalog = [
  {
    title: "Passagens aéreas",
    text: "Pesquisa de rotas, horários, bagagem e tarifas para você escolher sabendo exatamente o que está comprando.",
    items: [
      "Voos nacionais e internacionais",
      "Comparação de tarifas",
      "Orientação sobre bagagem",
    ],
  },
  {
    title: "Hotéis e resorts",
    text: "Hospedagens escolhidas pelo seu estilo, localização, estrutura e orçamento, não só por uma foto bonita.",
    items: [
      "Hotéis, pousadas e resorts",
      "Opções para casais e famílias",
      "Regimes de alimentação",
    ],
  },
  {
    title: "Pacotes completos",
    text: "Voo, hospedagem, traslado e experiências combinados em um planejamento simples de acompanhar.",
    items: [
      "Roteiros personalizados",
      "Pacotes nacionais e internacionais",
      "Experiências e ingressos",
    ],
  },
  {
    title: "Cruzeiros",
    text: "Escolha do navio, cabine, roteiro e datas com orientação sobre documentos, taxas e o que já está incluído.",
    items: [
      "Cruzeiros nacionais",
      "Roteiros internacionais",
      "Cabines e pacotes a bordo",
    ],
  },
  {
    title: "Locação de veículos",
    text: "A categoria certa para a rota, o número de passageiros e a bagagem, com regras explicadas antes da retirada.",
    items: [
      "Retirada em aeroportos",
      "Categorias variadas",
      "Proteções e adicionais",
    ],
  },
  {
    title: "Seguro viagem",
    text: "Coberturas médicas, bagagem e assistência internacional explicadas de forma simples para você viajar protegido.",
    items: [
      "Coberturas nacionais e internacionais",
      "Adequado às exigências do destino",
      "Atendimento em português",
    ],
  },
  {
    title: "Viagens especiais",
    text: "Lua de mel, aniversário, férias em família ou a viagem que você esperou por anos, com atenção ao motivo.",
    items: ["Lua de mel", "Grupos e famílias", "Datas comemorativas"],
  },
  {
    title: "Roteiros sob medida",
    text: "Organização de passeios, traslados e conexões para você aproveitar cada dia sem perder tempo com logística.",
    items: [
      "Passeios e ingressos antecipados",
      "Sugestões alinhadas ao seu ritmo",
      "Tudo reunido em um só lugar",
    ],
  },
];

export default function Servicos() {
  return (
    <main id="conteudo">
      <section className="inner-hero services-hero">
        <div className="container">
          <h1>
            Tudo o que sua viagem precisa. <em>Sem você carregar o peso.</em>
          </h1>
          <p>
            Escolha um serviço ou deixe a gente combinar tudo em um planejamento
            completo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container services-catalog">
          <div className="catalog-intro">
            <h2>Como podemos ajudar?</h2>
            <p>
              Não encontrou exatamente o que precisa? Chama a gente. Uma viagem
              raramente cabe em uma caixinha pronta.
            </p>
          </div>

          <div className="catalog-grid">
            {catalog.map(({ title, text, items }) => (
              <article className="catalog-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <Check /> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppUrl(
                    `Olá! Quero saber mais sobre ${title.toLowerCase()} com a Cadê Minha Mala.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir uma cotação <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section package-section">
        <div className="container">
          <div className="section-heading split">
            <h2>Três ideias para começar a imaginar.</h2>
            <p>
              Destinos e formatos ilustrativos. A cotação final depende da
              data, disponibilidade e perfil da viagem.
            </p>
          </div>

          <div className="package-grid">
            <article className="package-ticket">
              <div className="package-label">PRAIA</div>
              <div className="package-route">
                <div>
                  <small>DE</small>
                  <strong>JOINVILLE</strong>
                  <span>JOI</span>
                </div>
                <Plane />
                <div>
                  <small>PARA</small>
                  <strong>MACEIÓ</strong>
                  <span>MCZ</span>
                </div>
              </div>
              <div className="package-details">
                <span>7 NOITES</span>
                <span>2 VIAJANTES</span>
                <span>AÉREO + HOTEL</span>
              </div>
              <p>Mar azul, dias tranquilos e hospedagem perto da praia.</p>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Quero uma cotação para Maceió.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Quero algo assim <ArrowRight />
              </a>
            </article>

            <article className="package-ticket featured">
              <div className="package-label">ROMANCE</div>
              <div className="package-route">
                <div>
                  <small>DE</small>
                  <strong>CURITIBA</strong>
                  <span>CWB</span>
                </div>
                <Plane />
                <div>
                  <small>PARA</small>
                  <strong>GRAMADO (VIA POA)</strong>
                  <span>POA</span>
                </div>
              </div>
              <div className="package-details">
                <span>4 NOITES</span>
                <span>2 VIAJANTES</span>
                <span>HOTEL + PASSEIOS</span>
              </div>
              <p>Clima aconchegante, boa gastronomia e tempo a dois.</p>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Quero uma cotação para Gramado.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Quero algo assim <ArrowRight />
              </a>
            </article>

            <article className="package-ticket">
              <div className="package-label">INTERNACIONAL</div>
              <div className="package-route">
                <div>
                  <small>DE</small>
                  <strong>SÃO PAULO</strong>
                  <span>GRU</span>
                </div>
                <Plane />
                <div>
                  <small>PARA</small>
                  <strong>LISBOA</strong>
                  <span>LIS</span>
                </div>
              </div>
              <div className="package-details">
                <span>8 NOITES</span>
                <span>2 VIAJANTES</span>
                <span>AÉREO + HOTEL</span>
              </div>
              <p>História, boa comida e uma primeira Europa sem complicação.</p>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Quero uma cotação para Lisboa.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Quero algo assim <ArrowRight />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section included-section">
        <div className="container included-grid">
          <div className="section-heading">
            <h2>O que já vem no nosso atendimento.</h2>
          </div>
          <div className="included-list">
            <span>Pesquisa e comparação cuidadosa</span>
            <span>Explicação das regras da compra</span>
            <span>Organização dos comprovantes</span>
            <span>Suporte antes e durante a viagem</span>
          </div>
        </div>
      </section>
    </main>
  );
}
