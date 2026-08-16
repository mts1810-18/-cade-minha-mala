"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function WhatsAppForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Olá! Quero planejar uma viagem com a Cadê Minha Mala.",
      `Nome: ${data.get("nome")}`,
      `Destino: ${data.get("destino")}`,
      `Data aproximada: ${data.get("data") || "a definir"}`,
      `Mensagem: ${data.get("mensagem") || "Gostaria de receber uma cotação."}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/5547989072766?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return (
    <form className={compact ? "contact-form compact" : "contact-form"} onSubmit={submit}>
      <div className="field-row">
        <label>Seu nome<input name="nome" type="text" placeholder="Como podemos te chamar?" required autoComplete="name" /></label>
        <label>Destino desejado<input name="destino" type="text" placeholder="Para onde você quer ir?" required /></label>
      </div>
      <label>Data aproximada<input name="data" type="month" /></label>
      <label>Conte um pouco da viagem<textarea name="mensagem" rows={compact ? 3 : 4} placeholder="Quantas pessoas, quantos dias, o que você imagina..." /></label>
      <button className="btn btn-primary" type="submit">Enviar pelo WhatsApp <ArrowUpRight size={18} /></button>
      <p className="form-note" role="status">{sent ? "Abrimos o WhatsApp com sua mensagem pronta." : "Sem spam. Você só envia a mensagem se quiser."}</p>
    </form>
  );
}
