import Image from "next/image";
import { ArrowDown, MessageCircle, Navigation, Sparkles } from "lucide-react";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";
import { buildWhatsAppUrl, site } from "@/lib/site";

const experienceMessage =
  "Olá, vim pelo site e quero conhecer a experiência ZEISS Vision Center Araguaína.";

export function LensHero() {
  return (
    <section className="olhar-hero" aria-labelledby="hero-title">
      <div className="site-shell olhar-hero-grid">
        <div className="olhar-hero-copy">
          <Image
            src={site.logoWide}
            width={420}
            height={120}
            alt="ZEISS Vision Center"
            priority
            className="olhar-hero-logo"
          />
          <p className="eyebrow">Precisão alemã em Araguaína</p>
          <h1 id="hero-title">Precisão alemã para enxergar melhor a vida.</h1>
          <p>
            Na ZEISS Vision Center Araguaína, você encontra lentes de alta
            tecnologia, armações selecionadas e um atendimento consultivo para
            escolher a solução visual ideal para sua rotina.
          </p>

          <div className="hero-actions">
            <a
              href={site.whatsappUrl}
              className="button button-red"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Agendar atendimento pelo WhatsApp
            </a>
            <a
              href={buildWhatsAppUrl(experienceMessage)}
              className="button button-ghost"
              aria-label="Conhecer a experiência ZEISS pelo WhatsApp"
            >
              <ArrowDown size={18} aria-hidden="true" />
              Conhecer a experiência ZEISS
            </a>
          </div>

          <GoogleRatingBadge
            variant="inline"
            rating={site.rating.toFixed(1).replace(".", ",")}
            reviews={`${site.reviewCount} avaliações`}
            className="olhar-hero-rating"
          />

          <a
            href={site.mapsRouteUrl}
            className="olhar-hero-address"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir localização da ZEISS Vision Center Araguaína no Google Maps"
          >
            <Navigation size={16} aria-hidden="true" />
            {site.displayAddress}
          </a>
        </div>

        <div
          className="olhar-hero-visual"
          aria-label="Fachada da ZEISS Vision Center Araguaína"
        >
          <div className="olhar-hero-media">
            <Image
              src={site.heroImage}
              alt="Fachada iluminada da ZEISS Vision Center Araguaína"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 92vw, 560px"
            />
          </div>
          <div className="olhar-hero-note">
            <Sparkles size={18} aria-hidden="true" />
            <span>Tecnologia ZEISS, curadoria premium e escolha consultiva.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
