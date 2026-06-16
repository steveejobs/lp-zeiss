import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="section final-section"
      aria-labelledby="final-title"
    >
      <div className="site-shell final-panel">
        <div>
          <Image
            src={site.logoIcon}
            width={72}
            height={72}
            alt=""
            aria-hidden="true"
          />
          <p className="eyebrow">Agendamento</p>
          <h2 id="final-title">Experimente a precisão ZEISS em Araguaína.</h2>
          <p>
            Fale com nossa equipe e escolha lentes e armações com orientação
            consultiva, estética e tecnologia.
          </p>
        </div>
        <div className="final-actions">
          <a href={site.whatsappUrl} className="button button-red">
            <MessageCircle size={18} aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={site.mapsRouteUrl}
            className="button button-light"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Traçar rota até a ZEISS Vision Center Araguaína"
          >
            <MapPin size={18} aria-hidden="true" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
