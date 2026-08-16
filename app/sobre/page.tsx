import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2, Heart, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: "Conheça a Cadê Minha Mala, agência de viagens 100% online criada para organizar cada detalhe com proximidade, clareza e agilidade.",
};

export default function Sobre() {
  return (
    <main id="conteudo">
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div><span className="eyebrow eyebrow-light"><i /> SOBRE A CADÊ MINHA MALA</span><h1>A gente acredita que a viagem começa <em>antes do embarque.</em></h1><p>Começa quando você é ouvido, entende suas escolhas e percebe que não precisa resolver tudo sozinho.</p></div>
          <div className="about-tag"><span className="tag-hole" /><small>ETIQUETA DE BAGAGEM</small><strong>CMM</strong><div><span>PROPRIEDADE DE</span><b>QUEM QUER VIAJAR LEVE</b></div><div className="tag-stripes" /><p>ONLINE • HUMANA • PRÁTICA</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <div className="story-visual"><div className="story-card card-back"><span>SEM BUROCRACIA</span></div><div className="story-card card-front"><Globe2 /><span>NOSSA MISSÃO</span><strong>Tornar o mundo mais simples de alcançar.</strong><div className="story-stamp">100%<br />ONLINE</div></div></div>
          <div className="section-heading"><span className="kicker">NOSSA HISTÓRIA</span><h2>Uma agência online. Um atendimento bem próximo.</h2><p>A Cadê Minha Mala nasceu para quem quer viajar com segurança sem transformar o planejamento em uma segunda jornada. Reunimos pesquisa, organização e acompanhamento em um atendimento direto pelo celular.</p><p>Não temos loja física — e isso é intencional. Assim, estamos perto de você onde quer que esteja, com mais agilidade e menos burocracia.</p><div className="check-list"><span><Check /> Conversa clara, sem letras miúdas</span><span><Check /> Opções pensadas para sua realidade</span><span><Check /> Apoio do planejamento ao retorno</span></div></div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container"><div className="section-heading centered"><span className="kicker">O QUE VAI NA NOSSA MALA</span><h2>Nossos valores não ficam só no discurso.</h2></div><div className="values-grid">
          <article><span>01</span><Heart /><h3>Proximidade</h3><p>Atendimento online não precisa ser distante. Você fala com pessoas que escutam.</p></article>
          <article><span>02</span><ShieldCheck /><h3>Responsabilidade</h3><p>Cada detalhe importa quando há tempo, dinheiro e expectativa envolvidos.</p></article>
          <article><span>03</span><Sparkles /><h3>Simplicidade</h3><p>Explicamos opções e regras em português claro para você decidir com tranquilidade.</p></article>
        </div></div>
      </section>

      <section className="section online-section"><div className="container online-grid"><div><span className="kicker kicker-light">DE ONDE ATENDEMOS?</span><h2>De qualquer lugar.<br />Para todo o Brasil.</h2></div><div><p>WhatsApp, e-mail e redes sociais aproximam o atendimento. Você escolhe o destino; a gente cuida da organização.</p><Link className="btn btn-primary" href="/contato">Começar meu planejamento <ArrowUpRight size={18} /></Link></div></div><div className="moving-plane" aria-hidden="true">✈</div></section>

      <section className="section about-cta"><div className="container"><div className="cta-ticket"><div><span className="kicker">PRÓXIMA PARADA</span><h2>Uma viagem com menos abas abertas e mais tranquilidade.</h2></div><a className="btn btn-primary" href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Conheci%20a%20hist%C3%B3ria%20da%20Cad%C3%AA%20Minha%20Mala%20e%20quero%20planejar%20uma%20viagem." target="_blank" rel="noreferrer">Chamar no WhatsApp <MessageCircle size={18} /></a></div></div></section>
    </main>
  );
}
