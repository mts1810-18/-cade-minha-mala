import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, BedDouble, Car, Check, Hotel, MapPinned, Plane, Ship, TicketCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços e pacotes",
  description: "Passagens aéreas, hotéis, pacotes completos, cruzeiros e locação de veículos organizados pela Cadê Minha Mala.",
};

const catalog = [
  { icon: Plane, number: "01", title: "Passagens aéreas", text: "Pesquisa de rotas, horários, bagagem e tarifas para você escolher sabendo exatamente o que está comprando.", items: ["Voos nacionais e internacionais", "Comparação de tarifas", "Orientação sobre bagagem"] },
  { icon: Hotel, number: "02", title: "Hotéis e resorts", text: "Hospedagens escolhidas pelo seu estilo, localização, estrutura e orçamento — não só por uma foto bonita.", items: ["Hotéis, pousadas e resorts", "Opções para casais e famílias", "Regimes de alimentação"] },
  { icon: MapPinned, number: "03", title: "Pacotes completos", text: "Voo, hospedagem, traslado e experiências combinados em um planejamento simples de acompanhar.", items: ["Roteiros personalizados", "Pacotes nacionais e internacionais", "Experiências e ingressos"] },
  { icon: Ship, number: "04", title: "Cruzeiros", text: "Escolha do navio, cabine, roteiro e datas com orientação sobre documentos, taxas e o que já está incluído.", items: ["Cruzeiros nacionais", "Roteiros internacionais", "Cabines e pacotes a bordo"] },
  { icon: Car, number: "05", title: "Locação de veículos", text: "A categoria certa para a rota, o número de passageiros e a bagagem, com regras explicadas antes da retirada.", items: ["Retirada em aeroportos", "Categorias variadas", "Proteções e adicionais"] },
  { icon: BedDouble, number: "06", title: "Viagens especiais", text: "Lua de mel, aniversário, férias em família ou a viagem que você esperou por anos — com atenção ao motivo.", items: ["Lua de mel", "Grupos e famílias", "Datas comemorativas"] },
];

export default function Servicos() {
  return (
    <main id="conteudo">
      <section className="inner-hero services-hero"><div className="container"><span className="eyebrow eyebrow-light"><i /> SERVIÇOS & PACOTES</span><h1>Tudo o que sua viagem precisa. <em>Sem você carregar o peso.</em></h1><p>Escolha um serviço ou deixe a gente combinar tudo em um planejamento completo.</p></div></section>

      <section className="section"><div className="container services-catalog"><div className="catalog-intro"><span className="kicker">NOSSO BALCÃO DE EMBARQUE</span><h2>Como podemos ajudar?</h2><p>Não encontrou exatamente o que precisa? Chama a gente. Uma viagem raramente cabe em uma caixinha pronta.</p></div><div className="catalog-grid">{catalog.map(({icon:Icon,number,title,text,items}) => <article className="catalog-card" key={number}><div className="catalog-top"><Icon /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><ul>{items.map(item => <li key={item}><Check /> {item}</li>)}</ul><a href={`https://wa.me/5547989072766?text=${encodeURIComponent(`Olá! Quero saber mais sobre ${title.toLowerCase()} com a Cadê Minha Mala.`)}`} target="_blank" rel="noreferrer">Pedir uma cotação <ArrowUpRight /></a></article>)}</div></div></section>

      <section className="section package-section"><div className="container"><div className="section-heading split"><div><span className="kicker">EXEMPLOS DE EMBARQUE</span><h2>Três ideias para começar a imaginar.</h2></div><p>Destinos e condições ilustrativos. A cotação final depende da data, disponibilidade e perfil da viagem.</p></div><div className="package-grid">
        <article className="package-ticket"><div className="package-label">PRAIA</div><div className="package-route"><div><small>DE</small><strong>JOINVILLE</strong><span>JOI</span></div><Plane /><div><small>PARA</small><strong>MACEIÓ</strong><span>MCZ</span></div></div><div className="package-details"><span>7 NOITES</span><span>2 VIAJANTES</span><span>AÉREO + HOTEL</span></div><p>Mar azul, dias tranquilos e hospedagem perto da praia.</p><a href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Quero%20uma%20cota%C3%A7%C3%A3o%20para%20Macei%C3%B3." target="_blank" rel="noreferrer">Quero algo assim <ArrowRight /></a></article>
        <article className="package-ticket featured"><div className="package-label">ROMANCE</div><div className="package-route"><div><small>DE</small><strong>CURITIBA</strong><span>CWB</span></div><Plane /><div><small>PARA</small><strong>GRAMADO</strong><span>GRA</span></div></div><div className="package-details"><span>4 NOITES</span><span>2 VIAJANTES</span><span>HOTEL + PASSEIOS</span></div><p>Clima aconchegante, boa gastronomia e tempo a dois.</p><a href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Quero%20uma%20cota%C3%A7%C3%A3o%20para%20Gramado." target="_blank" rel="noreferrer">Quero algo assim <ArrowRight /></a></article>
        <article className="package-ticket"><div className="package-label">INTERNACIONAL</div><div className="package-route"><div><small>DE</small><strong>SÃO PAULO</strong><span>GRU</span></div><Plane /><div><small>PARA</small><strong>LISBOA</strong><span>LIS</span></div></div><div className="package-details"><span>8 NOITES</span><span>2 VIAJANTES</span><span>AÉREO + HOTEL</span></div><p>História, boa comida e uma primeira Europa sem complicação.</p><a href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Quero%20uma%20cota%C3%A7%C3%A3o%20para%20Lisboa." target="_blank" rel="noreferrer">Quero algo assim <ArrowRight /></a></article>
      </div></div></section>

      <section className="section included-section"><div className="container included-grid"><div className="section-heading"><span className="kicker kicker-light">EM TODA COTAÇÃO</span><h2>O que já vem no nosso atendimento.</h2></div><div className="included-list"><span><TicketCheck /> Pesquisa e comparação cuidadosa</span><span><TicketCheck /> Explicação das regras da compra</span><span><TicketCheck /> Organização dos comprovantes</span><span><TicketCheck /> Suporte antes e durante a viagem</span></div></div></section>
    </main>
  );
}
