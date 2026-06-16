import { MapPin, MessageCircle, Navigation } from "lucide-react";
import { site } from "@/lib/site";

const mapEmbed =
  "https://www.google.com/maps?q=Doha%20Center%20-%20Av.%20Jos%C3%A9%20de%20Brito%2C%20366%20-%20Loja%202%20-%20Setor%20Anhanguera%2C%20Aragua%C3%ADna%20-%20TO%2C%2077818-530%2C%20Brasil&output=embed";

export function FullMapSection() {
  return (
    <section id="contato" className="full-map-section" aria-labelledby="map-title">
      <iframe
        title="Mapa da ZEISS Vision Center Araguaína no Doha Center"
        src={mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="full-map-overlay">
        <span>
          <MapPin size={16} />
          Localização
        </span>
        <h2 id="map-title">ZEISS Vision Center Araguaína</h2>
        <address>
          Doha Center - Av. José de Brito, 366 - Loja 2
          <br />
          Setor Anhanguera, Araguaína - TO
        </address>
        <strong>{site.phoneDisplay}</strong>
        <div>
          <a href={site.mapsRouteUrl} target="_blank" rel="noopener noreferrer">
            Como chegar
            <Navigation size={17} />
          </a>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
            Agendar atendimento
            <MessageCircle size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
