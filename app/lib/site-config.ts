export const siteConfig = {
  name: "Cadê Minha Mala",
  tagline: "Você leva a mala. A gente cuida do resto.",
  url: "https://www.cademinhamala.com.br",
  email: "contato@cademinhamala.com.br",
  whatsapp: {
    number: "5547989072765",
    display: "(47) 98907-2765",
    defaultMessage: "Olá! Quero planejar minha próxima viagem com a Cadê Minha Mala.",
  },
  legal: {
    companyName: "67.837.209 JULIA CHINIKOSKI DE SOUZA",
    cnpj: "67.837.209/0001-85",
    cadasturNumber: "67.837.209/0001-85",
    cadasturValidFrom: "06/07/2026",
    cadasturValidUntil: "06/07/2028",
    cadasturStatus: "Regular",
    cadasturVerificationUrl:
      "https://cadastur.viagilize.com.br/67837209-julia-chinikoski-de-souza-67837209000185",
    cadasturOfficialPortalUrl: "https://cadastur.turismo.gov.br",
    city: "Joinville - SC",
  },
  social: {
    instagram: "https://www.instagram.com/cademinhamalaoficial",
    facebook: "https://www.facebook.com/cademinhamala",
  },
} as const;

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
