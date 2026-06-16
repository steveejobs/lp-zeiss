import Image from "next/image";
import { ArrowDown, MessageCircle, Star } from "lucide-react";
import { site } from "@/lib/site";

export function LensHero() {
  return (
    <section className="olhar-hero zeiss-premium-hero" aria-labelledby="hero-title">
      <div className="premium-optic-light premium-optic-light-a" />
      <div className="premium-optic-light premium-optic-light-b" />

      <div className="site-shell olhar-hero-grid">
        <div className="olhar-hero-copy">
          <Image
            src={site.logoIcon}
            width={76}
            height={76}
            alt="ZEISS"
            priority
            className="olhar-hero-logo"
          />

          <div className="premium-rating-pill">
            <span aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={13} fill="currentColor" />
              ))}
            </span>
            <strong>5,0 no Google</strong>
            <small>117 avaliações</small>
          </div>

          <h1 id="hero-title">
            Precisão ZEISS para uma visão à altura do seu estilo.
          </h1>
          <p>
            Lentes ZEISS, curadoria de armações e atendimento consultivo em uma
            experiência premium no Doha Center, em Araguaína.
          </p>

          <div className="hero-actions">
            <a
              href={site.whatsappUrl}
              className="button button-red"
              aria-label="Agendar experiência ZEISS pelo WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Agendar experiência ZEISS
            </a>
            <a
              href="#rotina"
              className="button button-ghost"
              aria-label="Ver tecnologias ZEISS"
            >
              <ArrowDown size={18} aria-hidden="true" />
              Ver tecnologias
            </a>
          </div>
        </div>

        <div
          className="olhar-hero-visual"
          aria-label="Experiência premium ZEISS Vision Center Araguaína"
        >
          <div className="olhar-hero-media">
            <Image
              src={site.heroImage}
              alt="Ambiente da ZEISS Vision Center Araguaína"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 92vw, 610px"
            />
          </div>
          <div className="olhar-hero-note">
            <span>Doha Center</span>
            <strong>Precisão óptica, estética e atendimento consultivo.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
