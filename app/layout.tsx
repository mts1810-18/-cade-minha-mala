import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/space-mono/400.css";
import "./globals.css";
import { SiteShell } from "./components/SiteShell";

export const metadata: Metadata = {
  title: {
    default: "Cadê Minha Mala | Agência de viagens 100% online",
    template: "%s | Cadê Minha Mala",
  },
  description:
    "Passagens, hotéis, cruzeiros e viagens completas com atendimento humano, ágil e 100% online.",
  keywords: [
    "agência de viagens online",
    "pacotes de viagem",
    "passagens aéreas",
    "hotéis",
    "cruzeiros",
  ],
  metadataBase: new URL("https://www.cademinhamala.com.br"),
  openGraph: {
    title: "Cadê Minha Mala",
    description: "Você leva a mala. A gente cuida do resto.",
    type: "website",
    locale: "pt_BR",
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Cadê Minha Mala",
  url: "https://www.cademinhamala.com.br",
  email: "contato@cademinhamala.com.br",
  telephone: "+55 47 98907-2766",
  description: "Agência de viagens 100% online com atendimento personalizado.",
  areaServed: "BR",
  sameAs: [
    "https://www.instagram.com/cademinhamalaoficial",
    "https://www.facebook.com/cademinhamala",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
