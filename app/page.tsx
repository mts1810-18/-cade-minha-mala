import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Headphones, HeartHandshake, Laptop, MessageCircle, Plane, Search, ShieldCheck, Sparkles } from "lucide-react";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { WhatsAppForm } from "./components/WhatsAppForm";
import { articles } from "./blog/articles";

export const metadata: Metadata = {
  title: "Viagens sem complicação",
  description: "Planeje passagens, hospedagem, cruzeiros e pacotes com atendimento personalizado e 100% online. Fale com a Cadê Minha Mala.",
};

const services = [
  { code: "CMM-001", from: "Sua rotina", to: "Dias inesquecíveis", tag: "PACOTE COMPLETO", icon: Plane, text: "Voo, hospedagem e experiências no mesmo planejamento." },
  { code: "CMM-002", from: "Seu porto", to: "Mar aberto", tag: "CRUZEIROS", icon: Sparkles, text: "Cabine, roteiro e documentação explicados sem complicar." },
  { code: "CMM-003", from: "Onde você está", to: "Onde quer chegar", tag: "PASSAGENS", icon: Search, text: "Rotas e horários pensados para a sua viagem — não só o menor preço." },
];

export default function Home() {
  return (
    <main id="conteudo">
      <section className="hero">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><i /> Agência de viagens 100% online</span>
            <h1>Sua próxima viagem começa <em>sem complicação.</em></h1>
            <p>Você conta o que imagina. A gente pesquisa, organiza e acompanha tudo — do primeiro orçamento até a volta para casa.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Quero%20planejar%20minha%20pr%C3%B3xima%20viagem." target="_blank" rel="noreferrer">Planejar minha viagem <MessageCircle size={18} /></a>
              <Link className="text-link" href="/servicos">Ver o que fazemos <ArrowRight size={17} /></Link>
            </div>
            <div className="trust-line"><span><BadgeCheck /> Atendimento humano</span><span><ShieldCheck /> Compra segura</span></div>
          </div>
          <div className="boarding-wrap" aria-label="Cartão de embarque ilustrativo">
            <div className="boarding-pass">
              <div className="pass-main">
                <div className="pass-top"><span>BOARDING PASS</span><strong>CMM ✈</strong></div>
                <div className="route"><div><small>DE</small><b>ROT</b><span>ROTINA</span></div><Plane /><div><small>PARA</small><b>VIA</b><span>VIAJAR</span></div></div>
                <div className="pass-info"><div><small>PASSAGEIRO</small><strong>VOCÊ</strong></div><div><small>EMBARQUE</small><strong>AGORA</strong></div><div><small>PORTÃO</small><strong>CMM</strong></div></div>
                <div className="barcode" aria-hidden="true" />
              </div>
              <div className="pass-stub"><span className="vertical-code">CADE MINHA MALA</span><div className="stamp">SEM<br />STRESS</div><small>SEQ 0001</small></div>
            </div>
            <div className="luggage-tag"><span>DESTINO</span><strong>O SEU.</strong><small>PLANEJADO POR CMM</small></div>
          </div>
        </div>
      </section>

      <section className="section light-section" id="como-funciona">
        <div className="container">
          <div className="section-heading split"><div><span className="kicker">CHECK-IN SIMPLES</span><h2>Viajar pode ser leve desde o começo.</h2></div><p>Nada de se perder entre sites, regras e detalhes. Organizamos a jornada em quatro passos claros.</p></div>
          <div className="steps">
            {[['01','Você chama','Conte o destino, as datas e o seu jeito de viajar.'],['02','A gente pesquisa','Buscamos opções que façam sentido para você.'],['03','Você confirma','Explicamos tudo e ajustamos antes de reservar.'],['04','Mala pronta','Você embarca com suporte antes e durante a viagem.']].map(([n,t,d], i) => <article className="step" key={n}><span>{n}</span>{i < 3 && <i aria-hidden="true" />}<h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section navy-section">
        <div className="container difference-grid">
          <div className="section-heading"><span className="kicker kicker-light">POR QUE COM A GENTE</span><h2>Praticidade online.<br /><em>Cuidado de verdade.</em></h2><p>Automatizamos a burocracia, não o atendimento. Sempre tem uma pessoa acompanhando sua viagem.</p><Link className="btn btn-outline" href="/sobre">Conheça nossa história <ArrowUpRight size={18} /></Link></div>
          <div className="benefit-grid">
            <article><Laptop /><span>01</span><h3>100% online</h3><p>Resolva tudo de onde estiver, com agilidade e sem deslocamentos.</p></article>
            <article><HeartHandshake /><span>02</span><h3>Do seu jeito</h3><p>Nada de roteiro pronto: escutamos prioridades, orçamento e ritmo.</p></article>
            <article><BadgeCheck /><span>03</span><h3>Boas parcerias</h3><p>Fornecedores selecionados e opções comparadas com transparência.</p></article>
            <article><Headphones /><span>04</span><h3>Suporte real</h3><p>Se surgir um imprevisto, você sabe exatamente com quem falar.</p></article>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-heading split"><div><span className="kicker">ESCOLHA O PRÓXIMO DESTINO</span><h2>O que a gente organiza para você.</h2></div><Link className="text-link" href="/servicos">Ver todos os serviços <ArrowRight size={17} /></Link></div>
          <div className="ticket-grid">
            {services.map(({ code, from, to, tag, icon: Icon, text }) => <article className="service-ticket" key={code}><div className="ticket-head"><span>{tag}</span><Icon /></div><div className="ticket-route"><div><small>ORIGEM</small><strong>{from}</strong></div><ArrowRight /><div><small>DESTINO</small><strong>{to}</strong></div></div><p>{text}</p><div className="ticket-foot"><span>{code}</span><div className="mini-barcode" /></div></article>)}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container testimonial-grid"><div className="section-heading"><span className="kicker">HISTÓRIAS QUE JÁ EMBARCARAM</span><h2>O tipo de mensagem que faz nosso dia.</h2><p>Viagens fictícias de exemplo para demonstrar como os depoimentos serão apresentados. Substitua pelos relatos reais da agência.</p></div><TestimonialCarousel /></div>
      </section>

      <section className="section home-blog-section">
        <div className="container">
          <div className="section-heading split"><div><span className="kicker">GUIAS PARA VIAJAR MELHOR</span><h2>Informação que deixa a viagem mais leve.</h2></div><Link className="text-link" href="/blog">Ver todos os artigos <ArrowRight size={17} /></Link></div>
          <div className="home-blog-grid">{articles.map(article => <Link className="home-blog-card" href={`/blog/${article.slug}`} key={article.slug}><div><span>{article.number}</span><small>{article.category}</small></div><h3>{article.title}</h3><p>{article.excerpt}</p><strong>{article.readTime} <ArrowRight /></strong></Link>)}</div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid"><div><span className="kicker kicker-light">PRONTO PARA O CHECK-IN?</span><h2>Me conta: para onde você quer ir?</h2><p>Preencha os detalhes. A mensagem já chega organizada no nosso WhatsApp e a conversa começa por lá.</p><div className="contact-note"><MessageCircle /><div><strong>Prefere ir direto?</strong><a href="https://wa.me/5547989072766" target="_blank" rel="noreferrer">(47) 98907-2766</a></div></div></div><WhatsAppForm /></div>
      </section>
    </main>
  );
}
