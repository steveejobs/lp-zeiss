import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

export function FocusGallery() {
  const location = site.locations[0];

  return (
    <section
      id="contato"
      className="section trust-section location-section"
      aria-labelledby="trust-title"
    >
      <div className="site-shell olhar-location-grid">
        <AnimatedReveal className="section-heading compact location-heading">
          <p className="eyebrow">Localização</p>
          <h2 id="trust-title">ZEISS Vision Center Araguaína no Doha Center.</h2>
          <p>
            Atendimento consultivo, lentes ZEISS e curadoria de armações em um
            endereço premium no Setor Anhanguera.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="olhar-location-card" delay={0.06}>
          <span className="location-seal">Doha Center</span>
          <h3>{location.name}</h3>
          <address>
            <MapPin size={18} aria-hidden="true" />
            <span>{location.address}</span>
          </address>
          <a href={`tel:${location.phoneE164}`} className="olhar-phone">
            <Phone size={17} aria-hidden="true" />
            {location.phoneDisplay}
          </a>
          <div className="location-actions">
            <a
              href={location.mapUrl}
              className="button button-red"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Traçar rota até a ${site.name}`}
            >
              <Navigation size={17} aria-hidden="true" />
              Como chegar
            </a>
            <a
              href={site.whatsappUrl}
              className="button button-ghost"
              aria-label={`Agendar atendimento na ${site.name}`}
            >
              <MessageCircle size={17} aria-hidden="true" />
              Agendar atendimento
            </a>
          </div>
        </AnimatedReveal>
      </div>

      <AnimatedReveal className="site-shell map-band" delay={0.12}>
        <div className="location-map olhar-location-map">
          <iframe
            src={location.mapsEmbedUrl}
            title="Mapa da ZEISS Vision Center Araguaína no Doha Center"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </AnimatedReveal>
    </section>
  );
}
