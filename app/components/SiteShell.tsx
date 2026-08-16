"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["/", "Início"],
  ["/sobre", "Sobre"],
  ["/servicos", "Serviços"],
  ["/depoimentos", "Depoimentos"],
  ["/blog", "Blog"],
  ["/contato", "Contato"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="official-logo-link" aria-label="Cadê Minha Mala — início">
            <Image
              className="official-logo"
              src="/logo-cade-minha-mala.png"
              alt="Cadê Minha Mala — Agência de Viagens e Turismo"
              width={760}
              height={425}
              priority
              unoptimized
            />
          </Link>
          <nav className={open ? "main-nav open" : "main-nav"} aria-label="Navegação principal">
            {links.map(([href, label]) => (
              <Link key={href} href={href} className={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "active" : ""}>{label}</Link>
            ))}
            <a className="nav-cta" href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Quero%20planejar%20minha%20viagem." target="_blank" rel="noreferrer">
              Falar no WhatsApp <ArrowUpRight size={16} />
            </a>
          </nav>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="footer-logo-box" aria-label="Cadê Minha Mala — início">
              <Image
                className="footer-logo"
                src="/logo-cade-minha-mala.png"
                alt="Cadê Minha Mala — Agência de Viagens e Turismo"
                width={760}
                height={425}
                unoptimized
              />
            </Link>
            <p>Você leva a mala.<br />A gente cuida do resto.</p>
            <span className="online-pill"><i /> Agência 100% online</span>
          </div>
          <div>
            <h2>Explore</h2>
            {links.slice(1).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
          </div>
          <div>
            <h2>Fale com a gente</h2>
            <a href="https://wa.me/5547989072766" target="_blank" rel="noreferrer"><MessageCircle size={17} /> (47) 98907-2766</a>
            <a href="mailto:contato@cademinhamala.com.br"><Mail size={17} /> contato@cademinhamala.com.br</a>
            <div className="socials">
              <a href="https://instagram.com/cademinhamalaoficial" target="_blank" rel="noreferrer" aria-label="Instagram"><span>IG</span></a>
              <a href="https://facebook.com/cademinhamala" target="_blank" rel="noreferrer" aria-label="Facebook"><span>FB</span></a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Cadê Minha Mala.</span><span>Atendimento remoto em todo o Brasil.</span>
        </div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/5547989072766?text=Ol%C3%A1%21%20Quero%20planejar%20minha%20viagem." target="_blank" rel="noreferrer" aria-label="Falar com a Cadê Minha Mala no WhatsApp">
        <MessageCircle /> <span>Vamos planejar?</span>
      </a>
    </>
  );
}
