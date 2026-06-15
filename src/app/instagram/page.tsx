import type { Metadata } from "next";
import Image from "next/image";
import {
  CarFront,
  ChevronRight,
  Glasses,
  Globe2,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Star,
} from "lucide-react";
import { TestimonialsMobileMarquee } from "@/components/ui/testimonials-columns-1";
import {
  buildWhatsAppUrl,
  site,
  testimonialsSummary,
  whatsappMessages,
} from "@/lib/site";
import { testimonials } from "@/data/testimonials";

const links = [
  {
    label: "Agendar atendimento pelo WhatsApp",
    href: site.whatsappUrl,
    ariaLabel: "Agendar atendimento na ZEISS Vision Center Araguaína pelo WhatsApp",
    icon: MessageCircle,
    variant: "primary",
  },
  {
    label: "Conhecer lentes ZEISS",
    href: "/#rotina",
    ariaLabel: "Conhecer tecnologias de lentes ZEISS",
    icon: Glasses,
    variant: "light",
  },
  {
    label: "Ver avaliações dos clientes",
    href: "/#avaliacoes",
    ariaLabel: "Ver avaliações dos clientes",
    icon: Star,
    variant: "light",
  },
  {
    label: "Como chegar",
    href: site.mapsRouteUrl,
    ariaLabel: "Abrir localização da ZEISS Vision Center Araguaína",
    icon: MapPin,
    variant: "light",
  },
  {
    label: "Falar sobre lentes para dirigir",
    href: buildWhatsAppUrl(whatsappMessages.drive),
    ariaLabel: "Falar sobre lentes ZEISS para dirigir",
    icon: CarFront,
    variant: "ghost",
  },
  {
    label: "Falar sobre lentes para telas",
    href: buildWhatsAppUrl(whatsappMessages.screens),
    ariaLabel: "Falar sobre lentes ZEISS para telas",
    icon: MonitorSmartphone,
    variant: "ghost",
  },
  {
    label: "Conhecer armações premium",
    href: buildWhatsAppUrl(whatsappMessages.frames),
    ariaLabel: "Conhecer armações premium pelo WhatsApp",
    icon: Globe2,
    variant: "ghost",
  },
] as const;

const showcase = [site.heroImage, ...site.storeImages.map((image) => image.src)]
  .slice(0, 6)
  .map((src, index) => ({
    src,
    alt:
      index === 0
        ? "Fachada da ZEISS Vision Center Araguaína"
        : "Ambiente premium da ZEISS Vision Center Araguaína",
  }));

export const metadata: Metadata = {
  title: "ZEISS Vision Center Araguaína | Links",
  description:
    "Precisão alemã, lentes premium e atendimento consultivo na ZEISS Vision Center Araguaína.",
  alternates: {
    canonical: "/instagram",
  },
  openGraph: {
    title: "ZEISS Vision Center Araguaína | Links",
    description:
      "Precisão alemã, lentes premium e atendimento consultivo em Araguaína.",
    type: "website",
    images: [
      {
        url: site.logoIcon,
        width: 1200,
        height: 1200,
        alt: "Logo da ZEISS Vision Center Araguaína",
      },
    ],
  },
};

export default function InstagramBioPage() {
  return (
    <main className="instagram-page olhar-bio-page">
      <section className="instagram-hero" aria-labelledby="instagram-title">
        <div className="instagram-shell">
          <div className="instagram-brand-lockup">
            <Image
              src={site.logoIcon}
              alt="Logo ZEISS"
              width={92}
              height={92}
              priority
              className="instagram-logo"
            />
            <div>
              <h1 id="instagram-title">{site.name}</h1>
              <p>Precisão alemã, lentes premium e atendimento consultivo.</p>
            </div>
          </div>

          <p className="instagram-intro">
            Tecnologia ZEISS, armações selecionadas e uma experiência visual
            premium em Araguaína.
          </p>

          <div className="instagram-rating-card olhar-bio-proof">
            <span className="instagram-rating-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} fill="currentColor" />
              ))}
            </span>
            <strong>
              {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no
              Google • {testimonialsSummary.total} avaliações
            </strong>
            <span>Referência em experiência óptica em Araguaína</span>
          </div>

          <div className="olhar-bio-showcase" aria-label="Mini vitrine">
            {showcase.map((image, index) => (
              <div className="olhar-bio-image" key={`${image.src}-${index}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 720px) 31vw, 160px"
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="instagram-links instagram-shell"
        aria-label="Links principais"
      >
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              className={`instagram-main-link is-${link.variant}`}
              aria-label={link.ariaLabel}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span className="instagram-main-link-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>{link.label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          );
        })}
      </section>

      <section
        id="enderecos"
        className="instagram-contact instagram-shell"
        aria-labelledby="contact-title"
      >
        <div className="instagram-section-heading">
          <h2 id="contact-title">Localização</h2>
        </div>

        <address className="instagram-contact-list">
          {site.locations.map((location) => (
            <a
              href={location.mapUrl}
              key={location.id}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir rota para ${site.name}`}
            >
              <MapPin size={18} aria-hidden="true" />
              <span>
                <strong>{site.name}</strong>
                <br />
                {location.address}
                <br />
                {location.phoneDisplay}
              </span>
            </a>
          ))}
        </address>
      </section>

      <section
        className="instagram-testimonials"
        aria-labelledby="instagram-testimonials-title"
      >
        <div className="instagram-shell instagram-section-heading">
          <h2 id="instagram-testimonials-title">Clientes percebem a diferença</h2>
        </div>
        <TestimonialsMobileMarquee testimonials={testimonials.slice(0, 6)} />
      </section>

      <footer className="instagram-footer instagram-shell">
        <Star size={15} aria-hidden="true" />
        <span>{site.shortName} • Araguaína</span>
      </footer>

      <a
        href={site.whatsappUrl}
        className="instagram-fixed-cta"
        aria-label="Agendar atendimento pelo WhatsApp"
      >
        <MessageCircle size={19} aria-hidden="true" />
        <span>Agendar pelo WhatsApp</span>
      </a>
    </main>
  );
}
