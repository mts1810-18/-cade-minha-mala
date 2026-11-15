import type { Metadata } from "next";
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppForm } from "../components/WhatsAppForm";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Contato e dúvidas frequentes",
  description:
    "Fale com a Cadê Minha Mala pelo WhatsApp (47) 98907-2765, e-mail ou redes sociais. Tire suas dúvidas sobre atendimento e planejamento de viagens.",
  alternates: { canonical: "/contato" },
};

const faq = [
  [
    "A Cadê Minha Mala tem loja física?",
    "Não. Somos uma agência 100% online com sede em Joinville - SC. Todo o atendimento acontece por WhatsApp, e-mail e redes sociais, com praticidade para atender clientes em todo o Brasil.",
  ],
  [
    "Como peço uma cotação?",
    "Envie cidade de origem, destino, período aproximado, quantidade de viajantes e o que você imagina para a viagem. Quanto mais contexto, mais precisa será a pesquisa.",
  ],
  [
    "A cotação tem custo?",
    "A primeira conversa e a apresentação das opções são feitas sem compromisso. Caso algum serviço específico tenha taxa, isso será informado com clareza antes de qualquer contratação.",
  ],
  [
    "Vocês atendem durante a viagem?",
    "Sim. O suporte faz parte do nosso atendimento. Você recebe orientações para saber como falar com a equipe caso surja um imprevisto.",
  ],
  [
    "Posso parcelar minha viagem?",
    "As condições variam conforme companhia aérea, hotel, operadora e forma de pagamento. Mostramos as possibilidades disponíveis em cada cotação.",
  ],
  [
    "A agência possui registro oficial no Cadastur?",
    `Sim. Operamos sob o CNPJ ${siteConfig.legal.cnpj} (${siteConfig.legal.companyName}), com registro ativo no Cadastur do Ministério do Turismo válido até ${siteConfig.legal.cadasturValidUntil}.`,
  ],
  [
    "Com quanto tempo de antecedência devo planejar?",
    "Quanto antes, melhor para comparar opções — especialmente em férias, feriados e alta temporada. Mas também pesquisamos viagens mais próximas quando há disponibilidade.",
  ],
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Contato() {
  return (
    <main id="conteudo">
      <section className="inner-hero contact-hero">
        <div className="container inner-contact-grid">
          <div>
            <span className="eyebrow eyebrow-light">
              <i /> CONTATO
            </span>
            <h1>
              Tem um destino na cabeça? <em>Conta para a gente.</em>
            </h1>
            <p>
              Não precisa chegar com tudo decidido. A conversa existe justamente
              para transformar uma ideia em um plano.
            </p>
          </div>
          <div className="contact-pass">
            <small>CANAL PRIORITÁRIO</small>
            <MessageCircle />
            <strong>WHATSAPP</strong>
            <span>{siteConfig.whatsapp.display}</span>
            <a
              href={buildWhatsAppUrl("Olá! Quero fazer uma cotação.")}
              target="_blank"
              rel="noreferrer"
            >
              INICIAR CONVERSA <Send />
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <div>
            <span className="kicker">SOLICITE SUA COTAÇÃO</span>
            <h2>Por onde começamos?</h2>
            <p>
              Preencha os campos e seu WhatsApp será aberto com a mensagem
              pronta. Você confere tudo antes de enviar.
            </p>
            <WhatsAppForm compact />
          </div>

          <aside>
            <div className="contact-info-card">
              <h3>Outros canais e dados oficiais</h3>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail />
                <span>
                  <small>E-MAIL</small>
                  {siteConfig.email}
                </span>
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
                <span>
                  <small>WHATSAPP</small>
                  {siteConfig.whatsapp.display}
                </span>
              </a>
              <div>
                <Clock3 />
                <span>
                  <small>ATENDIMENTO</small>
                  100% online • {siteConfig.legal.city} para todo o Brasil
                </span>
              </div>
              <a
                href={siteConfig.legal.cadasturVerificationUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ShieldCheck />
                <span>
                  <small>CADASTUR / CNPJ</small>
                  {siteConfig.legal.cadasturNumber} (Verificar{" "}
                  <ArrowUpRight
                    size={13}
                    style={{ display: "inline", verticalAlign: "middle" }}
                  />
                  )
                </span>
              </a>
            </div>
            <div className="remote-note">
              <strong>Sem endereço físico.</strong>
              <p>
                Somos uma agência 100% online ({siteConfig.legal.companyName}) e
                atendemos viajantes de todo o Brasil com suporte humano pelo
                celular.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-heading">
            <span className="kicker">DÚVIDAS FREQUENTES</span>
            <h2>Antes de chamar, talvez sua resposta esteja aqui.</h2>
            <p>Se não estiver, melhor ainda: manda uma mensagem para a gente.</p>
          </div>
          <div className="faq-list">
            {faq.map(([question, answer], i) => (
              <details key={question} open={i === 0}>
                <summary>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {question}
                  <ChevronDown />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
