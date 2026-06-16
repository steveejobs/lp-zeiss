import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Quote,
  Star,
} from "lucide-react";
import { site, testimonialsSummary } from "@/lib/site";

const images = {
  logo: site.logoIcon,
  main: "/galeria%20cole%C3%A7%C3%A3o/qa%20(5).png",
  sideA: "/galeria%20cole%C3%A7%C3%A3o/qa%20(1).png",
  sideB: "/galeria%20cole%C3%A7%C3%A3o/qa%20(4).png",
};

const conciergeLinks = [
  {
    title: "Lentes para minha rotina",
    text: "Telas, direção, leitura e conforto visual.",
    href: "/#rotina",
    icon: MonitorSmartphone,
  },
  {
    title: "Ver localização",
    text: "Doha Center, Setor Anhanguera.",
    href: site.mapsRouteUrl,
    icon: MapPin,
  },
  {
    title: "Avaliações de clientes",
    text: "5,0 no Google.",
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

export const metadata: Metadata = {
  title: "ZEISS Concierge | ZEISS Vision Center Araguaína",
  description:
    "Entrada rápida premium da ZEISS Vision Center Araguaína para WhatsApp, localização, avaliações e Instagram oficial.",
  alternates: {
    canonical: "/instagram",
  },
  openGraph: {
    title: "ZEISS Concierge | ZEISS Vision Center Araguaína",
    description:
      "Lentes ZEISS, armações premium e atendimento consultivo no Doha Center.",
    type: "website",
    images: [
      {
        url: images.main,
        width: 1200,
        height: 630,
        alt: "ZEISS Vision Center Araguaína",
      },
    ],
  },
};

function StarsLine() {
  return (
    <span className="zc-stars" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={12} fill="currentColor" />
      ))}
    </span>
  );
}

export default function InstagramBioPage() {
  return (
    <main className="zc-page">
      <section className="zc-hero" aria-labelledby="zc-title">
        <div className="zc-light-lines" aria-hidden="true" />
        <div className="zc-shell">
          <Image src={images.logo} alt="ZEISS" width={68} height={68} priority className="zc-logo" />
          <p className="zc-kicker">ZEISS Concierge</p>
          <h1 id="zc-title">ZEISS Vision Center Araguaína</h1>
          <p>Lentes ZEISS, armações premium e atendimento consultivo no Doha Center.</p>
          <div className="zc-rating">
            <StarsLine />
            <strong>{testimonialsSummary.rating.toFixed(1).replace(".", ",")}</strong>
            <span>{testimonialsSummary.total} avaliações</span>
          </div>
        </div>
      </section>

      <section className="zc-shell zc-main-invite" aria-labelledby="zc-invite-title">
        <div>
          <span>Convite privado</span>
          <h2 id="zc-invite-title">Agende sua experiência ZEISS</h2>
          <p>
            Fale com a equipe e receba orientação para escolher lentes e armações com mais segurança.
          </p>
        </div>
        <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
          Chamar no WhatsApp
          <MessageCircle size={18} />
        </a>
      </section>

      <section className="zc-shell zc-link-grid" aria-label="Ações rápidas">
        {conciergeLinks.map((link) => {
          const Icon = link.icon;
          const external = link.href.startsWith("http");

          return (
            <a
              href={link.href}
              key={link.title}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <Icon size={19} aria-hidden="true" />
              <span>
                <strong>{link.title}</strong>
                <small>{link.text}</small>
              </span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          );
        })}
      </section>

      <section className="zc-shell zc-showcase" aria-label="Mini vitrine ZEISS">
        <div className="zc-showcase-main">
          <Image src={images.main} alt="Interior da ZEISS Vision Center Araguaína" fill sizes="(max-width: 520px) 92vw, 430px" priority />
        </div>
        <div>
          <Image src={images.sideA} alt="Fachada da ZEISS Vision Center Araguaína" fill sizes="(max-width: 520px) 44vw, 190px" />
        </div>
        <div>
          <Image src={images.sideB} alt="Curadoria de armações ZEISS" fill sizes="(max-width: 520px) 44vw, 190px" />
        </div>
      </section>

      <section className="zc-shell zc-featured-review" aria-labelledby="zc-review-title">
        <Quote size={20} aria-hidden="true" />
        <h2 id="zc-review-title" className="sr-only">Depoimento em destaque</h2>
        <p>“Lentes de alta qualidade, leveza e conforto aos olhos.”</p>
        <strong>Helena Andrade Rocha</strong>
      </section>

      <section className="zc-shell zc-final">
        <h2>Fale com a ZEISS Vision Center</h2>
        <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
          Agendar pelo WhatsApp
          <MessageCircle size={18} />
        </a>
      </section>

      <footer className="zc-shell zc-footer">
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
          <Instagram size={15} />
          {site.instagramUrl}
        </a>
      </footer>
    </main>
  );
}
