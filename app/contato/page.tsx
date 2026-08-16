import type { Metadata } from "next";
import { ChevronDown, Clock3, Mail, MessageCircle, Send } from "lucide-react";
import { WhatsAppForm } from "../components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Contato e dúvidas frequentes",
  description: "Fale com a Cadê Minha Mala pelo WhatsApp, e-mail ou redes sociais. Tire suas dúvidas sobre atendimento e planejamento de viagens.",
};

const faq = [
  ["A Cadê Minha Mala tem loja física?", "Não. Somos uma agência 100% online. Todo o atendimento acontece por WhatsApp, e-mail e redes sociais, com praticidade para atender clientes em todo o Brasil."],
  ["Como peço uma cotação?", "Envie destino, período aproximado, quantidade de viajantes e o que você imagina para a viagem. Quanto mais contexto, mais precisa será a pesquisa."],
  ["A cotação tem custo?", "A primeira conversa e a apresentação das opções são feitas sem compromisso. Caso algum serviço específico tenha taxa, isso será informado com clareza antes de qualquer contratação."],
  ["Vocês atendem durante a viagem?", "Sim. O suporte faz parte do nosso atendimento. Você recebe orientações para saber como falar com a equipe caso surja um imprevisto."],
  ["Posso parcelar minha viagem?", "As condições variam conforme companhia aérea, hotel, operadora e forma de pagamento. Mostramos as possibilidades disponíveis em cada cotação."],
  ["Com quanto tempo de antecedência devo planejar?", "Quanto antes, melhor para comparar opções — especialmente em férias, feriados e alta temporada. Mas também pesquisamos viagens mais próximas quando há disponibilidade."],
];

export default function Contato() {
  return (
    <main id="conteudo">
      <section className="inner-hero contact-hero"><div className="container inner-contact-grid"><div><span className="eyebrow eyebrow-light"><i /> CONTATO</span><h1>Tem um destino na cabeça? <em>Conta para a gente.</em></h1><p>Não precisa chegar com tudo decidido. A conversa existe justamente para transformar uma ideia em um plano.</p></div><div className="contact-pass"><small>CANAL PRIORITÁRIO</small><MessageCircle /><strong>WHATSAPP</strong><span>(47) 98907-2766</span><a href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Quero%20fazer%20uma%20cota%C3%A7%C3%A3o." target="_blank" rel="noreferrer">INICIAR CONVERSA <Send /></a></div></div></section>
      <section className="section contact-page-section"><div className="container contact-page-grid"><div><span className="kicker">SOLICITE SUA COTAÇÃO</span><h2>Por onde começamos?</h2><p>Preencha os campos e seu WhatsApp será aberto com a mensagem pronta. Você confere tudo antes de enviar.</p><WhatsAppForm compact /></div><aside><div className="contact-info-card"><h3>Outros canais</h3><a href="mailto:contato@cademinhamala.com.br"><Mail /><span><small>E-MAIL</small>contato@cademinhamala.com.br</span></a><a href="https://wa.me/5547989072766" target="_blank" rel="noreferrer"><MessageCircle /><span><small>WHATSAPP</small>(47) 98907-2766</span></a><div><Clock3 /><span><small>ATENDIMENTO</small>Online • Consulte a disponibilidade</span></div></div><div className="remote-note"><strong>Sem endereço físico.</strong><p>Somos uma agência 100% online e atendemos viajantes de todo o Brasil.</p></div></aside></div></section>
      <section className="section faq-section"><div className="container faq-grid"><div className="section-heading"><span className="kicker">DÚVIDAS FREQUENTES</span><h2>Antes de chamar, talvez sua resposta esteja aqui.</h2><p>Se não estiver, melhor ainda: manda uma mensagem para a gente.</p></div><div className="faq-list">{faq.map(([question,answer],i)=><details key={question} open={i===0}><summary><span>{String(i+1).padStart(2,"0")}</span>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></div></section>
    </main>
  );
}
