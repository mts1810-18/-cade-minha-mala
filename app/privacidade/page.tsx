import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Cadê Minha Mala trata informações enviadas para atendimento e cotação de viagens em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <main id="conteudo">
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow eyebrow-light">
            <i /> TRANSPARÊNCIA E LGPD
          </span>
          <h1>
            Política de <em>Privacidade</em>
          </h1>
          <p>
            Clareza também faz parte de uma boa viagem. Veja como tratamos os
            dados informados durante o atendimento.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container privacy-container">
          <div className="privacy-card">
            <h2>1. Controladora dos dados</h2>
            <p>
              Este site institucional é mantido por{" "}
              <strong>{siteConfig.legal.companyName}</strong>, inscrita no CNPJ
              e Cadastur sob o nº <strong>{siteConfig.legal.cnpj}</strong>,
              com atuação 100% online a partir de {siteConfig.legal.city}.
            </p>

            <h2>2. Formulário de cotação</h2>
            <p>
              Os campos preenchidos no formulário deste site (como nome, cidade
              de origem, destino, previsão de datas e observações) são usados{" "}
              <strong>exclusivamente no seu navegador</strong> para montar a
              mensagem que você decide enviar diretamente pelo WhatsApp (
              {siteConfig.whatsapp.display}). Não armazenamos esses dados em
              banco de dados neste site.
            </p>

            <h2>3. Atendimento e reservas</h2>
            <p>
              Quando você opta por continuar o atendimento via WhatsApp ou
              e-mail ({siteConfig.email}), os dados necessários para cotação e
              emissão de reservas (como nomes de passageiros e documentos
              exigidos por companhias aéreas, hotéis, seguradoras ou
              armadoras) são tratados apenas para prestar o serviço solicitado e
              cumprir obrigações legais e regulatórias.
            </p>

            <h2>4. Direitos do titular (LGPD)</h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
              você pode solicitar confirmação de tratamento, acesso, correção ou
              eliminação de seus dados pessoais a qualquer momento pelo e-mail{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ou
              pelo WhatsApp{" "}
              <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
                {siteConfig.whatsapp.display}
              </a>
              .
            </p>

            <div className="privacy-actions">
              <Link href="/contato" className="text-link">
                <ArrowLeft size={16} /> Voltar para Contato
              </Link>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Tenho uma dúvida sobre privacidade ou atendimento na Cadê Minha Mala.",
                )}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Falar no WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
