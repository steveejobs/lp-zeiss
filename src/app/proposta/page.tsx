import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  FileText,
  Instagram,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { HeroMediaLayer } from "@/components/hero/HeroMediaLayer";
import { PremiumImage } from "@/components/PremiumImage";
import { premiumImages } from "@/data/premiumImages";
import { buildWhatsAppUrl, site, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proposta de Experiência Digital Premium | ZEISS Vision Center Araguaína",
  description:
    "Proposta visual premium para home, concierge Instagram e presença digital da ZEISS Vision Center Araguaína.",
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
    text: "Presença institucional premium com caminho direto para WhatsApp e SEO local.",
  },
  {
    name: "Experiência ZEISS",
    price: "R$ 4.997,00",
    text: "Home premium, concierge /instagram, proposta digital, copy e prova social refinada.",
    recommended: true,
  },
  {
    name: "Autoridade Local",
    price: "R$ 6.997,00",
    text: "Sistema completo com camadas adicionais de autoridade, SEO e refinamento comercial.",
  },
];

function ProposalCTA() {
  return (
    <a className="proposalx-button proposalx-button-primary" href={proposalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
      Falar sobre a proposta
      <MessageCircle size={18} />
    </a>
  );
}

export default function ProposalPage() {
  return (
    <main className="proposalx-page">
      <section className="proposalx-hero" aria-labelledby="proposalx-title">
        <HeroMediaLayer fallback3D />
        <div className="proposalx-shell proposalx-hero-grid">
          <div>
            <Link href="/" className="proposalx-brand" aria-label="Voltar para a home">
              <PremiumImage
                src={premiumImages.logo.src}
                alt="ZEISS"
                mode="contain"
                ratio="1 / 1"
                priority
                className="proposalx-logo"
                sizes="64px"
              />
              <span>ZEISS Vision Center Araguaína</span>
            </Link>
            <p className="proposalx-kicker">
              <Sparkles size={15} />
              Direção digital premium
            </p>
            <h1 id="proposalx-title">
              Proposta de Experiência Digital Premium para ZEISS Vision Center Araguaína
            </h1>
            <p>
              A marca já carrega autoridade internacional e forte reputação local. O digital precisa
              traduzir isso com profundidade, precisão e desejo.
            </p>
            <div className="proposalx-actions">
              <ProposalCTA />
              <Link href="/" className="proposalx-button proposalx-button-ghost">
                Ver experiência
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="proposalx-mockups" aria-label="Mockups das páginas">
            <div className="proposalx-mockup proposalx-mockup-home">
              <PremiumImage
                src={premiumImages.facadeHero.src}
                alt={premiumImages.facadeHero.alt}
                mode="cover"
                position={premiumImages.facadeHero.position}
                ratio="4 / 5"
                priority
              />
              <span>Home</span>
            </div>
            <div className="proposalx-mockup proposalx-mockup-instagram">
              <PremiumImage
                src={premiumImages.storeWide.src}
                alt={premiumImages.storeWide.alt}
                mode="cover"
                position={premiumImages.storeWide.position}
                ratio="9 / 14"
              />
              <span>Instagram Concierge</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proposalx-section">
        <div className="proposalx-shell proposalx-diagnosis">
          <div>
            <p className="proposalx-kicker">Diagnóstico</p>
            <h2>O projeto digital precisa parecer tão premium quanto a experiência dentro da loja.</h2>
          </div>
          <DisplayCards
            cards={[
              { title: "Marca", description: "Autoridade internacional", date: "ZEISS" },
              { title: "Local", description: "5,0 • 117 avaliações", date: "Google" },
              { title: "Conversão", description: "WhatsApp e rota clara", date: "Doha Center" },
            ]}
          />
        </div>
      </section>

      <section className="proposalx-section">
        <div className="proposalx-shell">
          <div className="proposalx-section-head">
            <p className="proposalx-kicker">O que será entregue</p>
            <h2>Um sistema digital com home, concierge e proposta visual.</h2>
          </div>
          <div className="proposalx-deliver-grid">
            {deliverables.map((item) => (
              <span key={item}>
                <BadgeCheck size={17} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="proposalx-section">
        <div className="proposalx-shell proposalx-direction">
          <div>
            <p className="proposalx-kicker">Direção criativa</p>
            <h2>Luxo tecnológico, precisão alemã e atendimento consultivo.</h2>
            <p>
              Azul ZEISS profundo, preto azulado, prata, vidro, reflexos ópticos,
              fotos reais da loja e animações leves preparadas para evolução futura.
            </p>
          </div>
          <div className="proposalx-icon-grid" aria-hidden="true">
            <MonitorSmartphone />
            <Instagram />
            <MapPin />
            <FileText />
            <Search />
            <ShieldCheck />
          </div>
        </div>
      </section>

      <section className="proposalx-section">
        <div className="proposalx-shell">
          <div className="proposalx-section-head">
            <p className="proposalx-kicker">Investimento</p>
            <h2>Planos editáveis no código, apresentados com valor.</h2>
          </div>
          <div className="proposalx-plan-grid">
            {plans.map((plan) => (
              <article className={plan.recommended ? "is-recommended" : ""} key={plan.name}>
                {plan.recommended ? <span>Recomendado</span> : null}
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
                    Mobile refinado
                  </li>
                  <li>
                    <Check size={16} />
                    WhatsApp estratégico
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proposalx-final">
        <div className="proposalx-shell">
          <PremiumImage
            src={premiumImages.logo.src}
            alt="ZEISS"
            mode="contain"
            ratio="1 / 1"
            className="proposalx-final-logo"
            sizes="72px"
          />
          <h2>Vamos colocar o digital no mesmo nível da experiência dentro da loja.</h2>
          <ProposalCTA />
        </div>
      </section>
    </main>
  );
}
