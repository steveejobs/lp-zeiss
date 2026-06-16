import type { Metadata } from "next";
import Image from "next/image";
import {
  ChevronRight,
  Glasses,
  Instagram,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";
import { site, testimonialsSummary } from "@/lib/site";
import { testimonials } from "@/data/testimonials";

const links = [
  {
    label: "Agendar atendimento pelo WhatsApp",
    href: site.whatsappUrl,
    icon: MessageCircle,
    primary: true,
  },
  {
    label: "Conhecer lentes ZEISS",
    href: "/#rotina",
    icon: Glasses,
  },
  {
    label: "Ver avaliações",
    href: "/#avaliacoes",
    icon: Star,
  },
  {
    label: "Como chegar ao Doha Center",
    href: site.mapsRouteUrl,
    icon: MapPin,
  },
  {
    label: "Instagram oficial",
    href: site.instagramUrl,
    icon: Instagram,
  },
];

const gallery = [site.heroImage, ...site.storeImages.map((image) => image.src)].slice(0, 4);

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
        url: site.heroImage,
        width: 1200,
        height: 630,
        alt: "ZEISS Vision Center Araguaína",
      },
    ],
  },
};

export default function InstagramBioPage() {
  return (
    <main className="instagram-page luxury-link-page">
      <section className="instagram-hero" aria-labelledby="instagram-title">
        <div className="instagram-shell">
          <Image
            src={site.logoIcon}
            alt="ZEISS"
            width={82}
            height={82}
            priority
            className="instagram-logo"
          />

          <h1 id="instagram-title">ZEISS Vision Center Araguaína</h1>
          <p className="instagram-intro">
            Precisão alemã, lentes premium e atendimento consultivo.
          </p>

          <div className="instagram-rating-card">
            <span className="instagram-rating-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={14} fill="currentColor" />
              ))}
            </span>
            <strong>
              {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no
              Google • {testimonialsSummary.total} avaliações
            </strong>
          </div>

          <div className="instagram-feature-photo">
            <Image
              src={site.heroImage}
              alt="ZEISS Vision Center Araguaína"
              fill
              priority
              sizes="(max-width: 720px) 92vw, 520px"
            />
          </div>
        </div>
      </section>

      <section
        className="instagram-links instagram-shell"
        aria-label="Links principais"
      >
        {links.map((link) => {
          const Icon = link.icon;
          const external = link.href.startsWith("http");

          return (
            <a
              key={link.label}
              href={link.href}
              className={`instagram-main-link ${link.primary ? "is-primary" : ""}`}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
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

      <section className="instagram-gallery instagram-shell" aria-label="Galeria">
        {gallery.map((src, index) => (
          <div className="instagram-gallery-image" key={src}>
            <Image
              src={src}
              alt={`Detalhe premium ZEISS ${index + 1}`}
              fill
              sizes="(max-width: 720px) 44vw, 220px"
              loading="lazy"
            />
          </div>
        ))}
      </section>

      <section
        className="instagram-testimonials instagram-shell"
        aria-labelledby="instagram-testimonials-title"
      >
        <h2 id="instagram-testimonials-title">Clientes percebem a diferença</h2>
        <div className="instagram-testimonial-grid">
          {testimonials.slice(0, 3).map((testimonial) => (
            <article key={testimonial.name}>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <footer className="instagram-footer instagram-shell">
        <span>{site.shortName}</span>
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
          {site.instagram}
        </a>
      </footer>
    </main>
  );
}
