import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  FileText,
  Gem,
  Instagram,
  MessageCircle,
  MousePointer2,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { buildWhatsAppUrl, site, testimonialsSummary, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proposta Digital Premium | ZEISS Vision Center Araguaína",
  description:
    "Proposta de experiência digital premium para a ZEISS Vision Center Araguaína.",
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

const problems = [
  "Presença digital ainda não transmite todo o valor da marca.",
  "Excesso de informação reduz percepção premium.",
  "Depoimentos precisam virar prova social de luxo.",
  "Instagram/linktree deve funcionar como entrada comercial rápida.",
  "A proposta comercial precisa vender valor, não apenas páginas.",
];

const solutions = [
  "Site institucional premium",
  "Linktree/Instagram exclusivo",
  "Proposta comercial digital",
  "Copy de autoridade ZEISS",
  "Prova social com avaliações reais",
  "SEO local",
  "WhatsApp estratégico",
  "Galeria premium",
];

const deliverables = [
  "Landing page institucional",
  "Página /instagram",
  "Página /proposta",
  "Copy premium",
  "Tratamento visual de galerias",
  "Responsividade mobile",
  "Integração WhatsApp",
  "Instagram oficial",
  "Revisão SEO",
  "Deploy Vercel",
];

const proposalPlans = [
  {
    name: "Presença Premium",
    price: "R$ 2.997,00",
    description: "Site institucional premium + WhatsApp + SEO local.",
  },
  {
    name: "Experiência ZEISS",
    price: "R$ 4.997,00",
    description: "Site premium + /instagram + proposta comercial + copy completa.",
    recommended: true,
  },
  {
    name: "Autoridade Local",
    price: "R$ 6.997,00",
    description:
      "Experiência completa + refinamento visual + prova social + otimização avançada.",
  },
];

const timeline = [
  "Identidade e estrutura",
  "Copy e páginas",
  "Revisão mobile",
  "Publicação e ajustes finais",
];

function ProposalButton() {
  return (
    <a href={proposalWhatsAppUrl} className="proposal-button proposal-button-primary">
      <span>Falar sobre a proposta</span>
      <MessageCircle size={18} aria-hidden="true" />
    </a>
  );
}

export default function ProposalPage() {
  return (
    <main className="proposal-page premium-proposal-page">
      <section className="proposal-hero" aria-labelledby="proposal-title">
        <div className="proposal-shell proposal-hero-grid">
          <div className="proposal-hero-copy">
            <Link
              className="proposal-logo"
              href="/"
              aria-label="Voltar para o site da ZEISS Vision Center Araguaína"
            >
              <Image
                src={site.logoIcon}
                alt="ZEISS"
                width={64}
                height={64}
                priority
              />
              <span>{site.shortName} Araguaína</span>
            </Link>

            <div className="proposal-kicker">
              <Sparkles size={16} aria-hidden="true" />
              <span>Experiência digital premium</span>
            </div>

            <h1 id="proposal-title">
              Proposta de Experiência Digital Premium para ZEISS Vision Center
              Araguaína
            </h1>
            <p>
              Uma presença digital à altura da tecnologia, reputação e
              sofisticação da marca ZEISS.
            </p>

            <div className="proposal-hero-actions">
              <ProposalButton />
              <Link href="/" className="proposal-button proposal-button-light">
                <span>Ver experiência atualizada</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="proposal-hero-visual">
            <div className="proposal-rating-card">
              <span className="proposal-rating-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </span>
              <strong>
                {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no
                Google
              </strong>
              <span>{testimonialsSummary.total} avaliações reais</span>
            </div>
            <div className="proposal-showcase-main">
              <Image
                src={site.heroImage}
                alt="ZEISS Vision Center Araguaína"
                fill
                sizes="(min-width: 960px) 440px, 88vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="diagnosis-title">
        <div className="proposal-shell proposal-two-column">
          <div className="proposal-section-heading">
            <span className="proposal-eyebrow">Diagnóstico</span>
            <h2 id="diagnosis-title">A reputação local já é forte.</h2>
          </div>
          <p className="proposal-lead">
            A ZEISS Vision Center Araguaína já possui avaliações excelentes e
            percepção de qualidade. O desafio digital é transformar essa
            autoridade em uma experiência online compatível com o padrão
            internacional da marca.
          </p>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="problem-title">
        <div className="proposal-shell">
          <div className="proposal-section-heading">
            <span className="proposal-eyebrow">Problema atual</span>
            <h2 id="problem-title">Menos informação solta. Mais percepção de valor.</h2>
          </div>
          <div className="proposal-card-grid">
            {problems.map((item, index) => (
              <article className="proposal-glass-card" key={item}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="solution-title">
        <div className="proposal-shell proposal-site-card">
          <div className="proposal-site-copy">
            <span className="proposal-eyebrow">Solução</span>
            <h2 id="solution-title">Uma experiência digital ZEISS, não um template de ótica.</h2>
            <p>
              Visual editorial, prova social real, rotas comerciais claras e
              presença mobile com a mesma precisão percebida dentro da loja.
            </p>
          </div>

          <div className="proposal-site-includes" aria-label="Soluções">
            {solutions.map((item) => (
              <span key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="deliver-title">
        <div className="proposal-shell">
          <div className="proposal-section-heading proposal-heading-center">
            <span className="proposal-eyebrow">Entregáveis</span>
            <h2 id="deliver-title">O pacote completo para vender autoridade.</h2>
          </div>
          <div className="proposal-deliverable-grid">
            {deliverables.map((item) => (
              <span key={item}>
                <BadgeCheck size={17} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="investment-title">
        <div className="proposal-shell">
          <div className="proposal-section-heading">
            <span className="proposal-eyebrow">Investimento</span>
            <h2 id="investment-title">Planos sóbrios, editáveis e orientados por valor.</h2>
          </div>

          <div className="proposal-plan-grid">
            {proposalPlans.map((plan) => (
              <article
                className={`proposal-plan-card ${plan.recommended ? "is-featured" : ""}`}
                key={plan.name}
              >
                {plan.recommended ? (
                  <span className="proposal-plan-badge">Recomendado</span>
                ) : null}
                <h3>{plan.name}</h3>
                <strong className="proposal-plan-price">{plan.price}</strong>
                <p>{plan.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="timeline-title">
        <div className="proposal-shell proposal-timeline-panel">
          <div className="proposal-section-heading">
            <span className="proposal-eyebrow">Cronograma</span>
            <h2 id="timeline-title">Quatro momentos até a publicação.</h2>
          </div>
          <div className="proposal-timeline">
            {timeline.map((item, index) => (
              <article key={item}>
                <Clock3 size={18} aria-hidden="true" />
                <strong>{`${index + 1}º momento`}</strong>
                <span>{item}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proposal-final" aria-labelledby="final-title">
        <div className="proposal-shell">
          <div className="proposal-final-panel">
            <div className="proposal-final-icons" aria-hidden="true">
              <FileText size={24} />
              <MousePointer2 size={24} />
              <Instagram size={24} />
              <Gem size={24} />
              <Search size={24} />
              <MessageCircle size={24} />
            </div>
            <h2 id="final-title">
              Vamos colocar a experiência digital da ZEISS Vision Center no
              mesmo nível da experiência dentro da loja.
            </h2>
            <div className="proposal-final-actions">
              <ProposalButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
