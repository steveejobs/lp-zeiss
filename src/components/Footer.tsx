import Image from "next/image";
import { Instagram, MessageCircle, Navigation } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <a
            href="#top"
            className="footer-brand"
            aria-label="ZEISS Vision Center Araguaína, voltar ao início"
          >
            <Image
              src={site.logoIcon}
              width={58}
              height={58}
              alt=""
              aria-hidden="true"
            />
            <span>
              <strong>{site.shortName}</strong>
              <small>Precisão óptica em Araguaína</small>
            </span>
          </a>
          <p>
            Lentes ZEISS, armações selecionadas e atendimento consultivo no Doha
            Center.
          </p>
        </div>

        <address>
          <strong>Doha Center</strong>
          <span>{site.fullAddress}</span>
          <a href={site.whatsappUrl} className="footer-social-link">
            <MessageCircle size={15} aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.instagramUrl}
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir Instagram oficial: ${site.instagram}`}
          >
            <Instagram size={15} aria-hidden="true" />
            {site.instagram}
          </a>
          <a
            href={site.mapsRouteUrl}
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Navigation size={15} aria-hidden="true" />
            Como chegar
          </a>
        </address>

        <nav aria-label="Links rápidos do rodapé">
          <strong>Navegação</strong>
          {navItems.slice(0, 4).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
