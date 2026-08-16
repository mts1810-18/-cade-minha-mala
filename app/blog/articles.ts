export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  date: string;
  displayDate: string;
  readTime: string;
  number: string;
  intro: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "como-planejar-uma-viagem-sem-dor-de-cabeca",
    title: "Como planejar uma viagem sem dor de cabeça: checklist completo",
    seoTitle: "Como planejar uma viagem sem dor de cabeça",
    description: "Veja um checklist simples para planejar destino, orçamento, passagens, hospedagem e documentos sem transformar a viagem em preocupação.",
    excerpt: "Um passo a passo prático para sair da ideia e chegar ao embarque com tudo organizado.",
    category: "Planejamento",
    date: "2026-08-07",
    displayDate: "07 AGO 2026",
    readTime: "6 min de leitura",
    number: "01",
    intro: "Planejar uma viagem pode ser tão gostoso quanto viajar — desde que você não tente resolver todos os detalhes ao mesmo tempo. O segredo é seguir uma ordem simples: primeiro entender a viagem, depois comparar as opções e só então confirmar as reservas.",
    sections: [
      {
        heading: "1. Comece pelo que realmente importa",
        paragraphs: ["Antes de abrir sites de passagens, defina o essencial: quem vai viajar, qual é o período possível, quanto tempo vocês têm e qual faixa de orçamento seria confortável. Essas respostas evitam pesquisas que não combinam com a realidade da viagem."],
        list: ["Quantidade e idade dos viajantes", "Datas possíveis e flexibilidade", "Duração desejada", "Orçamento aproximado", "Estilo da viagem: descanso, aventura, cultura ou família"],
      },
      {
        heading: "2. Escolha o destino com contexto",
        paragraphs: ["Um destino bonito nem sempre é o destino certo para aquela data. Considere o clima esperado, a duração do deslocamento, o ritmo da viagem e os interesses de quem vai junto. Para uma viagem curta, por exemplo, conexões longas podem consumir uma parte importante do tempo disponível."],
      },
      {
        heading: "3. Compare o conjunto, não apenas o preço",
        paragraphs: ["Uma passagem mais barata pode incluir horários ruins, muitas conexões ou pouca bagagem. Um hotel econômico pode ficar distante de tudo o que você pretende conhecer. Compare o custo total e a experiência completa antes de decidir."],
        list: ["Horários e duração dos voos", "Regras de alteração e cancelamento", "Bagagem incluída", "Localização e avaliações da hospedagem", "Traslados e deslocamentos no destino"],
      },
      {
        heading: "4. Confira documentos e regras antes de pagar",
        paragraphs: ["Verifique a validade dos documentos, os dados de todos os passageiros e as exigências do destino. Regras de entrada e políticas das empresas podem mudar, por isso a conferência deve ser feita novamente perto da viagem em fontes oficiais."],
      },
      {
        heading: "5. Organize tudo em um único lugar",
        paragraphs: ["Guarde localizadores, vouchers, contatos e horários de forma acessível. Também vale compartilhar uma cópia do roteiro com alguém de confiança e deixar os principais documentos disponíveis mesmo sem internet."],
      },
    ],
  },
  {
    slug: "mala-de-mao-como-organizar",
    title: "Mala de mão: como organizar e o que conferir antes de viajar",
    seoTitle: "Mala de mão: como organizar para viajar",
    description: "Aprenda a organizar a mala de mão com praticidade e veja o que conferir com a companhia aérea antes do embarque.",
    excerpt: "O que precisa estar por perto, como ganhar espaço e quais regras conferir antes de fechar a mala.",
    category: "Dicas práticas",
    date: "2026-08-07",
    displayDate: "07 AGO 2026",
    readTime: "5 min de leitura",
    number: "02",
    intro: "A mala de mão não precisa carregar a viagem inteira. Ela precisa deixar o trajeto mais simples e garantir que os itens essenciais estejam acessíveis. Uma boa organização começa antes de escolher o que levar: começa conferindo as regras do seu voo.",
    sections: [
      {
        heading: "1. Confira as regras da sua tarifa",
        paragraphs: ["Peso, dimensões e quantidade de volumes podem variar conforme a companhia, a rota e a tarifa contratada. Consulte diretamente a empresa aérea e confira novamente antes do embarque. Essa etapa evita custos inesperados e a necessidade de reorganizar a bagagem no aeroporto."],
      },
      {
        heading: "2. Deixe os itens essenciais com você",
        paragraphs: ["Documentos, dinheiro, eletrônicos e medicamentos de uso pessoal devem ficar acessíveis. Se houver bagagem despachada, inclua também uma troca de roupa e itens básicos para passar algumas horas com tranquilidade em caso de imprevisto."],
        list: ["Documentos e comprovantes", "Carteira e meios de pagamento", "Celular e carregador", "Medicamentos de uso habitual", "Uma troca de roupa", "Itens de valor pessoal"],
      },
      {
        heading: "3. Monte combinações, não peças isoladas",
        paragraphs: ["Escolha roupas que conversem entre si e possam formar mais de uma combinação. Cores próximas, peças leves e uma camada extra para mudanças de temperatura costumam ocupar menos espaço e facilitar as escolhas durante a viagem."],
      },
      {
        heading: "4. Use o espaço com intenção",
        paragraphs: ["Organizadores ajudam a separar categorias, mas não precisam encher cada centímetro disponível. Deixe uma pequena margem para não forçar zíperes e para acomodar algo que precise ser guardado durante o retorno."],
      },
      {
        heading: "5. Faça uma revisão final",
        paragraphs: ["Na véspera, retire o que entrou na mala apenas por insegurança. Confira documentos, previsão do tempo e regras atuais para líquidos, objetos restritos e eletrônicos nos canais oficiais da companhia e dos aeroportos envolvidos."],
      },
    ],
  },
  {
    slug: "pacote-de-viagem-ou-compra-separada",
    title: "Pacote de viagem ou compra separada: qual opção faz mais sentido?",
    seoTitle: "Pacote de viagem ou compra separada?",
    description: "Entenda as diferenças entre pacote de viagem e reservas separadas para escolher a opção mais prática para seu perfil e orçamento.",
    excerpt: "Preço, flexibilidade e praticidade: os critérios que realmente ajudam a escolher.",
    category: "Escolhas inteligentes",
    date: "2026-08-07",
    displayDate: "07 AGO 2026",
    readTime: "6 min de leitura",
    number: "03",
    intro: "Não existe uma resposta única para todo viajante. Um pacote pode facilitar muito uma viagem, enquanto reservas separadas podem oferecer mais liberdade em outra. A melhor escolha depende do destino, da data, do perfil do grupo e do quanto você quer personalizar.",
    sections: [
      {
        heading: "O que é um pacote de viagem?",
        paragraphs: ["É a combinação de dois ou mais serviços, como passagem, hospedagem, traslado ou passeios. A principal vantagem costuma ser a praticidade de concentrar etapas da viagem em uma mesma contratação e receber uma visão mais clara do conjunto."],
      },
      {
        heading: "Quando o pacote costuma fazer sentido",
        paragraphs: ["Pacotes podem ser interessantes para quem prefere reduzir o número de decisões, viaja em datas definidas ou quer combinar os serviços principais de uma vez. Também ajudam famílias e casais que valorizam acompanhamento durante o planejamento."],
        list: ["Você quer praticidade e menos reservas para acompanhar", "O roteiro combina com as opções disponíveis", "Os horários e a localização atendem às suas prioridades", "As regras foram explicadas e fazem sentido para você"],
      },
      {
        heading: "Quando reservar separadamente pode ser melhor",
        paragraphs: ["A compra separada pode oferecer mais liberdade para montar roteiros longos, usar pontos, combinar diferentes cidades ou escolher hospedagens muito específicas. Em troca, exige mais comparação e atenção às regras de cada fornecedor."],
      },
      {
        heading: "Compare usando os mesmos critérios",
        paragraphs: ["Para saber qual opção vale mais, coloque lado a lado exatamente os mesmos itens. Verifique bagagem, categoria do quarto, alimentação, localização, traslados, horários e políticas de alteração. Comparar apenas o valor final pode esconder diferenças importantes."],
      },
      {
        heading: "A melhor opção é a que cabe na sua viagem",
        paragraphs: ["Preço importa, mas tranquilidade, tempo e adequação ao seu perfil também têm valor. Uma agência pode organizar a comparação e mostrar os efeitos de cada escolha antes da confirmação."],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
