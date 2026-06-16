"use client";

import Image from "next/image";
import { Instagram, Menu, MessageCircle, Navigation, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header premium-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-shell header-inner">
        <a
          href="#top"
          className="brand-mark"
          aria-label="ZEISS Vision Center Araguaína, voltar ao início"
        >
          <Image
            src={site.logoIcon}
            width={54}
            height={54}
            alt=""
            priority
            aria-hidden="true"
          />
          <span>
            <strong>{site.shortName}</strong>
            <small>Araguaína, TO</small>
          </span>
        </a>

        <nav className="header-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={site.instagramUrl}
            className="header-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir Instagram oficial: ${site.instagram}`}
          >
            <Instagram size={17} aria-hidden="true" />
          </a>

          <a
            href={site.mapsRouteUrl}
            className="button header-route"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Traçar rota até a ZEISS Vision Center Araguaína"
          >
            <Navigation size={16} aria-hidden="true" />
            Rota
          </a>

          <a href={site.whatsappUrl} className="button button-red header-cta">
            <MessageCircle size={16} aria-hidden="true" />
            Agendar
          </a>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="mobile-menu">
          <nav className="site-shell" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.whatsappUrl}
              className="button button-red"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={17} aria-hidden="true" />
              Agendar atendimento
            </a>
            <a
              href={site.instagramUrl}
              className="button header-route mobile-route"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir Instagram oficial: ${site.instagram}`}
              onClick={() => setIsOpen(false)}
            >
              <Instagram size={17} aria-hidden="true" />
              Instagram oficial
            </a>
            <a
              href={site.mapsRouteUrl}
              className="button header-route mobile-route"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traçar rota até a ZEISS Vision Center Araguaína"
              onClick={() => setIsOpen(false)}
            >
              <Navigation size={17} aria-hidden="true" />
              Como chegar
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
