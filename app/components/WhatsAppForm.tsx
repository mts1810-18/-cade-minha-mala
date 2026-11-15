"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy, ExternalLink } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/site-config";

const serviceOptions = [
  "Pacote completo (voo + hotel)",
  "Passagens aéreas",
  "Hospedagem / Resort",
  "Cruzeiro",
  "Locação de veículo",
  "Seguro viagem",
  "Outro / Ainda estou decidindo",
];

export function WhatsAppForm({ compact = false }: { compact?: boolean }) {
  const [prepared, setPrepared] = useState<{
    message: string;
    url: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const nome = String(data.get("nome") || "").trim();
    const origem = String(data.get("origem") || "").trim();
    const destino = String(data.get("destino") || "").trim();
    const servico = String(data.get("servico") || "").trim();
    const dataViagem = String(data.get("data") || "").trim();
    const viajantes = String(data.get("viajantes") || "").trim();
    const mensagemLivre = String(data.get("mensagem") || "").trim();

    const lines = [
      "Olá! Quero planejar uma viagem com a Cadê Minha Mala.",
      `Nome: ${nome}`,
      origem ? `Cidade de origem: ${origem}` : null,
      `Destino: ${destino}`,
      servico ? `Serviço: ${servico}` : null,
      `Previsão de viagem: ${dataViagem || "A definir"}`,
      viajantes ? `Viajantes: ${viajantes}` : null,
      `Observações: ${mensagemLivre || "Gostaria de receber uma cotação."}`,
    ].filter(Boolean);

    const message = lines.join("\n");
    const url = buildWhatsAppUrl(message);
    setPrepared({ message, url });
    setCopied(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function copyMessage() {
    if (!prepared) return;
    try {
      await navigator.clipboard.writeText(prepared.message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form
      className={compact ? "contact-form compact" : "contact-form"}
      onSubmit={submit}
    >
      <div className="field-row">
        <label>
          Seu nome
          <input
            name="nome"
            type="text"
            placeholder="Como podemos te chamar?"
            required
            autoComplete="name"
          />
        </label>
        <label>
          Cidade de origem
          <input
            name="origem"
            type="text"
            placeholder="De onde você sai?"
            autoComplete="address-level2"
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          Destino desejado
          <input
            name="destino"
            type="text"
            placeholder="Para onde você quer ir?"
            required
          />
        </label>
        <label>
          O que você procura
          <select name="servico" defaultValue={serviceOptions[0]}>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="field-row">
        <label>
          Previsão de datas
          <input
            name="data"
            type="text"
            placeholder="Ex: Julho/2027 ou datas flexíveis"
          />
        </label>
        <label>
          Viajantes
          <input
            name="viajantes"
            type="text"
            placeholder="Ex: 2 adultos e 1 criança"
          />
        </label>
      </div>

      <label>
        Conte um pouco da viagem
        <textarea
          name="mensagem"
          rows={compact ? 3 : 4}
          placeholder="Quantos dias, estilo de hospedagem, orçamento aproximado ou o que não pode faltar..."
        />
      </label>

      <button className="btn btn-primary" type="submit">
        Enviar pelo WhatsApp <ArrowUpRight size={18} />
      </button>

      {prepared && (
        <div className="form-fallback" role="status">
          <p>
            Mensagem pronta para envio. Se o WhatsApp não abriu automaticamente,
            use os botões abaixo:
          </p>
          <div className="form-fallback-actions">
            <a
              className="btn-fallback-link"
              href={prepared.url}
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp <ExternalLink size={15} />
            </a>
            <button
              type="button"
              className="btn-fallback-copy"
              onClick={copyMessage}
            >
              {copied ? (
                <>
                  Copiada <Check size={15} />
                </>
              ) : (
                <>
                  Copiar mensagem <Copy size={15} />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      <p className="form-note">
        Sem spam. Não armazenamos seus dados neste site — você confere e envia
        direto pelo WhatsApp. Veja nossa{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>
    </form>
  );
}
