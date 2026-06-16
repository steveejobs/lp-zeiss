import {
  ArrowRight,
  Instagram,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Star,
} from "lucide-react";
import { Hero3DBackground } from "@/components/hero/Hero3DBackground";
import { PremiumImage } from "@/components/PremiumImage";
import { premiumImages } from "@/data/premiumImages";
import { testimonials } from "@/data/testimonials";
import { site, testimonialsSummary } from "@/lib/site";

const actionCards = [
  {
    title: "Minha rotina visual",
    text: "Telas, direção, leitura e conforto.",
    href: "/#rotina",
    icon: MonitorSmartphone,
  },
  {
    title: "Ver localização",
    text: "Doha Center, Araguaína.",
    href: site.mapsRouteUrl,
    icon: MapPin,
  },
  {
    title: "Avaliações",
    text: "Clientes destacam qualidade e atendimento.",
    href: "/#avaliacoes",
    icon: Star,
  },
  {
    title: "Instagram oficial",
    text: "@zeissvisioncenter_araguaina",
    href: site.instagramUrl,
    icon: Instagram,
  },
];

export function InstagramConcierge() {
  const featured = testimonials.find((item) => item.name === "Helena Andrade Rocha") || testimonials[0];

  return (
    <main className="instagram-concierge">
      <div className="instagram-concierge-bg">
        <Hero3DBackground />
      </div>

      <section className="instagram-concierge-shell instagram-concierge-hero">
        <PremiumImage
          src={premiumImages.logo.src}
          alt="ZEISS"
          mode="contain"
          ratio="1 / 1"
          priority
          className="instagram-concierge-logo"
          sizes="80px"
        />
        <h1>ZEISS Vision Center Araguaína</h1>
        <div className="instagram-concierge-rating">
          <Star size={13} fill="currentColor" />
          <strong>{testimonialsSummary.rating.toFixed(1).replace(".", ",")}</strong>
          <span>{testimonialsSummary.total} avaliações</span>
        </div>
      </section>

      <section className="instagram-concierge-shell instagram-primary-card">
        <span>ZEISS Concierge</span>
        <h2>Agende sua experiência ZEISS</h2>
        <p>Fale com a equipe e receba orientação para lentes, armações e rotina visual.</p>
        <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
          Chamar no WhatsApp
          <MessageCircle size={18} />
        </a>
      </section>

      <section className="instagram-concierge-shell instagram-action-grid" aria-label="Ações rápidas">
        {actionCards.map((action) => {
          const Icon = action.icon;
          const external = action.href.startsWith("http");

          return (
            <a
              href={action.href}
              key={action.title}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <Icon size={20} />
              <span>
                <strong>{action.title}</strong>
                <small>{action.text}</small>
              </span>
              <ArrowRight size={16} />
            </a>
          );
        })}
      </section>

      <section className="instagram-concierge-shell instagram-mini-showcase" aria-label="Mini vitrine ZEISS">
        <PremiumImage
          src={premiumImages.storeWide.src}
          alt={premiumImages.storeWide.alt}
          mode="cover"
          position={premiumImages.storeWide.position}
          ratio="16 / 11"
          priority
          className="instagram-showcase-main"
        />
        <PremiumImage
          src={premiumImages.facadeHero.src}
          alt={premiumImages.facadeHero.alt}
          mode="cover"
          position={premiumImages.facadeHero.position}
          ratio="1 / 1"
        />
        <PremiumImage
          src={premiumImages.glassesProduct.src}
          alt={premiumImages.glassesProduct.alt}
          mode="contain"
          ratio="1 / 1"
        />
      </section>

      <section className="instagram-concierge-shell instagram-featured-quote">
        <p>“{featured.quote}”</p>
        <strong>{featured.name}</strong>
      </section>

      <section className="instagram-concierge-shell instagram-final-card">
        <h2>Falar com a ZEISS Vision Center</h2>
        <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
          Agendar pelo WhatsApp
          <MessageCircle size={18} />
        </a>
      </section>

      <footer className="instagram-concierge-shell instagram-concierge-footer">
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
          <Instagram size={15} />
          {site.instagram}
        </a>
      </footer>
    </main>
  );
}
