# Cadê Minha Mala — site institucional

Site responsivo e multi-página da agência de viagens Cadê Minha Mala. Construído com Vinext/React, TypeScript e CSS, com cinco rotas, SEO por página e formulário integrado ao WhatsApp.

## Rodar localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Depois, abra o endereço exibido no terminal.

## Estrutura

- `app/page.tsx`: Home
- `app/sobre/page.tsx`: Sobre
- `app/servicos/page.tsx`: Serviços e pacotes
- `app/depoimentos/page.tsx`: Depoimentos
- `app/blog/page.tsx`: índice do blog
- `app/blog/[slug]/page.tsx`: template dos artigos com SEO estruturado
- `app/blog/articles.ts`: conteúdo e metadados dos artigos
- `app/contato/page.tsx`: Contato e FAQ
- `app/components`: navegação, rodapé, formulário e carrossel
- `app/globals.css`: identidade visual e responsividade

## Comandos úteis

```bash
npm run build
npm run lint
```

Os textos de depoimentos e pacotes marcados como demonstrativos devem ser substituídos por conteúdo real antes da publicação oficial.
