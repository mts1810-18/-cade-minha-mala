"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MessageCircle,
  Mail,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const links = [
  ["/", "Início"],
  ["/sobre", "Sobre"],
  ["/servicos", "Serviços"],
  ["/depoimentos", "Depoimentos"],
  ["/blog", "Blog"],
  ["/contato", "Contato"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }

    function onPointerDown(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenPath(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const headerWhatsAppUrl = buildWhatsAppUrl(
    "Olá! Quero planejar minha viagem com a Cadê Minha Mala.",
  );

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="container nav-wrap">
          <Link
            href="/"
            className="official-logo-link"
            aria-label="Cadê Minha Mala — início"
          >
            <Image
              className="official-logo"
              src="/logo-cade-minha-mala.webp"
              alt="Cadê Minha Mala — Agência de Viagens e Turismo"
              width={520}
              height={291}
              priority
              unoptimized
            />
          </Link>

          <nav
            id="navegacao-principal"
            className={open ? "main-nav open" : "main-nav"}
            aria-label="Navegação principal"
          >
            {links.map(([href, label]) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(`${href}/`));
              return (
                <Link
                  key={href}
                  href={href}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
            <a
              className="nav-cta"
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp <ArrowUpRight size={16} />
            </a>
          </nav>

          <button
            type="button"
            className="menu-button"
            onClick={() => setOpenPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="navegacao-principal"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link
              href="/"
              className="footer-logo-box"
              aria-label="Cadê Minha Mala — início"
            >
              <Image
                className="footer-logo"
                src="/logo-cade-minha-mala.webp"
                alt="Cadê Minha Mala — Agência de Viagens e Turismo"
                width={520}
                height={291}
                loading="eager"
                unoptimized
              />
            </Link>
            <p>
              Você leva a mala.
              <br />A gente cuida do resto.
            </p>
            <span className="online-pill">
              <i /> Agência 100% online • {siteConfig.legal.city}
            </span>
            <div className="footer-cadastur">
              <ShieldCheck size={16} aria-hidden="true" />
              <div>
                <strong>{siteConfig.legal.companyName}</strong>
                <span>
                  CNPJ / Cadastur: {siteConfig.legal.cadasturNumber} •{" "}
                  <a
                    href={siteConfig.legal.cadasturVerificationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verificar regularidade
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2>Explore</h2>
            {links.slice(1).map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/privacidade">Privacidade (LGPD)</Link>
          </div>

          <div>
            <h2>Fale com a gente</h2>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> {siteConfig.whatsapp.display}
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={17} /> {siteConfig.email}
            </a>
            <div className="socials">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Cadê Minha Mala"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook da Cadê Minha Mala"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} •{" "}
            {siteConfig.legal.companyName}
          </span>
          <span>
            CNPJ {siteConfig.legal.cnpj} • Atendimento remoto em todo o Brasil
          </span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={headerWhatsAppUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Cadê Minha Mala no WhatsApp"
      >
        <MessageCircle /> <span>Vamos planejar?</span>
      </a>
    </>
  );
}
