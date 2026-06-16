import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Gem,
  Instagram,
  MessageCircle,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { buildWhatsAppUrl, site, testimonialsSummary, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proposta de Experiência Digital Premium | ZEISS Vision Center Araguaína",
  description:
    "Proposta premium para landing page, concierge Instagram e presença digital da ZEISS Vision Center Araguaína.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/proposta",
  },
};

const proposalWhatsAppUrl = buildWhatsAppUrl(whatsappMessages.proposal);

const deliverables = [
  "Landing page institucional premium",
  "Microsite /instagram estilo concierge",
  "Proposta digital",
  "Copy premium",
  "Prova social com avaliações reais",
  "Galeria editorial",
  "Integração WhatsApp",
  "SEO local",
  "Responsividade mobile",
  "Deploy Vercel",
];

const plans = [
  {
    name: "Essencial Premium",
    price: "R$ 2.997,00",
    text: "Base institucional premium para apresentar a marca, reputação local e caminho direto para WhatsApp.",
  },
  {
    name: "Experiência ZEISS",
    price: "R$ 4.997,00",
    text: "Landing premium, concierge /instagram, proposta digital, copy completa e prova social refinada.",
    recommended: true,
  },
  {
    name: "Autoridade Local",
    price: "R$ 6.997,00",
    text: "Experiência completa com camadas adicionais de autoridade, SEO local e refinamento comercial.",
  },
];

function ProposalCTA() {
  return (
    <a className="zp-button zp-button-primary" href={proposalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
      Falar sobre a proposta
      <MessageCircle size={18} />
    </a>
  );
}

export default function ProposalPage() {
  return (
    <main className="zp-page">
      <section className="zp-hero" aria-labelledby="zp-title">
        <div className="zp-shell zp-hero-grid">
          <div>
            <Link href="/" className="zp-brand" aria-label="Voltar para home">
              <Image src={site.logoIcon} alt="ZEISS" width={62} height={62} priority />
              <span>ZEISS Vision Center Araguaína</span>
            </Link>
            <p className="zp-kicker">
              <Sparkles size={15} />
              Pitch premium
            </p>
            <h1 id="zp-title">
              Proposta de Experiência Digital Premium para ZEISS Vision Center Araguaína
            </h1>
            <p>
              Uma presença digital com luxo tecnológico, precisão alemã e atendimento consultivo.
            </p>
            <div className="zp-actions">
              <ProposalCTA />
              <Link className="zp-button zp-button-secondary" href="/">
                Ver experiência
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="zp-hero-card">
            <Image src="/galeria%20cole%C3%A7%C3%A3o/qa%20(1).png" alt="ZEISS Vision Center Araguaína" fill sizes="(min-width: 920px) 42vw, 92vw" priority />
            <div>
              <span>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={13} fill="currentColor" />
                ))}
              </span>
              <strong>{testimonialsSummary.rating.toFixed(1).replace(".", ",")} no Google</strong>
              <small>{testimonialsSummary.total} avaliações reais</small>
            </div>
          </div>
        </div>
      </section>

      <section className="zp-section">
        <div className="zp-shell zp-two-col">
          <div>
            <p className="zp-eyebrow">Diagnóstico</p>
            <h2>A marca já carrega autoridade internacional e forte reputação local.</h2>
          </div>
          <p>
            O projeto digital precisa traduzir essa percepção em uma experiência visual superior:
            mais premium, mais clara, mais memorável e comercialmente orientada para agendamento.
          </p>
        </div>
      </section>

      <section className="zp-section">
        <div className="zp-shell">
          <div className="zp-section-head">
            <p className="zp-eyebrow">O que será entregue</p>
            <h2>Um sistema digital enxuto, sofisticado e pronto para conversão.</h2>
          </div>
          <div className="zp-deliver-grid">
            {deliverables.map((item) => (
              <span key={item}>
                <BadgeCheck size={17} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="zp-section">
        <div className="zp-shell zp-direction">
          <div>
            <p className="zp-eyebrow">Direção criativa</p>
            <h2>Luxo tecnológico, precisão alemã e atendimento consultivo.</h2>
            <p>
              A experiência visual parte do azul ZEISS profundo, fotografia real da loja,
              reflexos ópticos, vidro, prata, ritmo editorial e prova social com nomes reais.
            </p>
          </div>
          <div className="zp-direction-icons" aria-hidden="true">
            <Gem />
            <ShieldCheck />
            <MonitorSmartphone />
            <Instagram />
            <Search />
            <MessageCircle />
          </div>
        </div>
      </section>

      <section className="zp-section">
        <div className="zp-shell">
          <div className="zp-section-head">
            <p className="zp-eyebrow">Planos</p>
            <h2>Investimento editável no código.</h2>
          </div>
          <div className="zp-plan-grid">
            {plans.map((plan) => (
              <article className={plan.recommended ? "zp-plan is-recommended" : "zp-plan"} key={plan.name}>
                {plan.recommended ? <span className="zp-recommended">Recomendado</span> : null}
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.text}</p>
                <ul>
                  <li>
                    <Check size={16} />
                    Visual premium
                  </li>
                  <li>
                    <Check size={16} />
                    WhatsApp estratégico
                  </li>
                  <li>
                    <Check size={16} />
                    Mobile responsivo
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="zp-final" aria-labelledby="zp-final-title">
        <div className="zp-shell zp-final-panel">
          <Image src={site.logoIcon} alt="ZEISS" width={70} height={70} />
          <h2 id="zp-final-title">
            Vamos colocar o digital no mesmo nível da experiência dentro da loja.
          </h2>
          <ProposalCTA />
        </div>
      </section>
    </main>
  );
}
