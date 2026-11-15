import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/space-mono/400.css";
import "./globals.css";
import { SiteShell } from "./components/SiteShell";
import { siteConfig } from "./lib/site-config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Agência de viagens 100% online`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Passagens, hotéis, pacotes, cruzeiros e seguro viagem com atendimento humano, ágil e 100% online. Cadastur regularizado em todo o Brasil.",
  keywords: [
    "agência de viagens online",
    "pacotes de viagem",
    "passagens aéreas",
    "hotéis",
    "cruzeiros",
    "seguro viagem",
    "Cadê Minha Mala",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | Agência de viagens 100% online`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cadê Minha Mala — Agência de viagens 100% online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Agência de viagens 100% online`,
    description: siteConfig.tagline,
    images: ["/og-image.png"],
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.name,
  legalName: siteConfig.legal.companyName,
  taxID: siteConfig.legal.cnpj,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-cade-minha-mala.png`,
  image: `${siteConfig.url}/og-image.png`,
  email: siteConfig.email,
  telephone: "+55 47 98907-2765",
  description:
    "Agência de viagens 100% online com atendimento personalizado e cadastro regular no Cadastur.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Joinville",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: "BR",
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.legal.cadasturVerificationUrl,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
