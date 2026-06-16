"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { FullMapSection } from "@/components/FullMapSection";
import { HeroMediaLayer } from "@/components/hero/HeroMediaLayer";
import { PremiumImage } from "@/components/PremiumImage";
import { PremiumTestimonialsStage } from "@/components/PremiumTestimonialsStage";
import { SparklesCore } from "@/components/ui/sparkles";
import { premiumImages } from "@/data/premiumImages";
import { site, testimonialsSummary } from "@/lib/site";

const proof = [
  ["5,0", "no Google"],
  ["117", "avaliações"],
  ["ZEISS", "Vision Center"],
  ["Doha Center", "Araguaína"],
];

const routines = [
  {
    label: "Telas e trabalho",
    title: "Foco confortável entre tela, leitura e reunião.",
    text: "A lente certa não é apenas grau. É rotina, conforto, precisão e estilo.",
    image: premiumImages.glassesProduct,
  },
  {
    label: "Direção noturna",
    title: "Mais controle visual em reflexos e baixa luz.",
    text: "Para quem dirige à noite e quer uma experiência visual mais estável.",
    image: premiumImages.facadeHero,
  },
  {
    label: "Sol e ambientes externos",
    title: "Conforto para luz, rua, viagens e transições.",
    text: "Tecnologias que acompanham diferentes condições de luminosidade.",
    image: premiumImages.storeWide,
  },
  {
    label: "Multifocal",
    title: "Perto, intermediário e longe com orientação.",
    text: "Escolha com calma. Enxergue com precisão.",
    image: premiumImages.storeDesk,
  },
  {
    label: "Estilo e armação",
    title: "Presença, proporção e encaixe no rosto.",
    text: "Armações pensadas para sua presença, sua rotina e sua visão.",
    image: premiumImages.storeCurved,
  },
  {
    label: "Primeira experiência ZEISS",
    title: "Um primeiro contato com tecnologia visual premium.",
    text: "No Doha Center, uma experiência óptica à altura da marca ZEISS.",
    image: premiumImages.facadeWide,
  },
];

const lensCards = [
  {
    title: "SmartLife",
    text: "Para uma rotina conectada e dinâmica.",
  },
  {
    title: "DriveSafe",
    text: "Para dirigir com mais conforto em reflexos e baixa luminosidade.",
  },
  {
    title: "PhotoFusion X",
    text: "Fotocromáticas premium para diferentes condições de luz.",
  },
  {
    title: "DuraVision",
    text: "Tratamento premium para nitidez, estética e limpeza facilitada.",
  },
];

const faqs = [
  ["A equipe ajuda a escolher a lente ideal?", "Sim. A orientação considera receita, rotina, armação e ambiente de uso."],
  ["Posso chamar pelo WhatsApp antes de ir?", "Pode. A equipe orienta dúvidas iniciais e ajuda a combinar o atendimento."],
  ["Onde fica a ZEISS Vision Center Araguaína?", "No Doha Center, Av. José de Brito, 366, Loja 2, Setor Anhanguera."],
  ["A loja trabalha com lentes ZEISS?", "Sim. A loja trabalha com lentes ZEISS e atendimento consultivo."],
];

function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function StarsLine() {
  return (
    <span className="zpx-stars" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={13} fill="currentColor" />
      ))}
    </span>
  );
}

export function ZeissPrivateVisionExperience() {
  const [activeRoutine, setActiveRoutine] = useState(0);
  const routine = routines[activeRoutine];

  return (
    <div className="zpx-page">
      <header className="zpx-header">
        <a href="#top" className="zpx-brand" aria-label="ZEISS Vision Center Araguaína">
          <PremiumImage
            src={premiumImages.logo.src}
            alt="ZEISS"
            mode="contain"
            ratio="1 / 1"
            priority
            className="zpx-brand-logo"
            sizes="58px"
          />
          <span>
            <strong>ZEISS Vision Center</strong>
            <small>Araguaína</small>
          </span>
        </a>
        <nav className="zpx-nav" aria-label="Navegação principal">
          <a href="#rotina">Rotina visual</a>
          <a href="#curadoria">Curadoria</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Localização</a>
        </nav>
        <a className="zpx-header-action" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
          Agendar
          <MessageCircle size={17} />
        </a>
      </header>

      <main id="top">
        <section className="zpx-hero" aria-labelledby="zpx-title">
          <HeroMediaLayer fallback3D />
          <div className="zpx-shell zpx-hero-grid">
            <div className="zpx-hero-copy">
              <PremiumImage
                src={premiumImages.logo.src}
                alt="ZEISS"
                mode="contain"
                ratio="1 / 1"
                priority
                className="zpx-hero-logo"
                sizes="84px"
              />
              <p className="zpx-kicker">
                <Sparkles size={15} />
                ZEISS Private Vision Experience
              </p>
              <h1 id="zpx-title">Precisão ZEISS para quem exige mais da própria visão.</h1>
              <p>
                No Doha Center, em Araguaína, uma experiência premium para escolher lentes ZEISS,
                armações selecionadas e soluções visuais alinhadas à sua rotina.
              </p>
              <div className="zpx-hero-rating">
                <StarsLine />
                <strong>5,0 no Google</strong>
                <span>117 avaliações</span>
              </div>
              <div className="zpx-actions">
                <a className="zpx-button zpx-button-primary" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar experiência ZEISS
                  <MessageCircle size={18} />
                </a>
                <a className="zpx-button zpx-button-ghost" href="#tecnologias">
                  Conhecer tecnologias
                  <ArrowRight size={18} />
                </a>
              </div>
              <small>Atendimento consultivo • Doha Center • Araguaína</small>
            </div>

            <div className="zpx-hero-showcase">
              <PremiumImage
                src={premiumImages.facadeHero.src}
                alt={premiumImages.facadeHero.alt}
                mode="cover"
                position={premiumImages.facadeHero.position}
                ratio="4 / 5"
                priority
                sizes="(min-width: 960px) 38vw, 90vw"
              />
              <div className="zpx-hero-glass-card">
                <strong>Private fitting</strong>
                <span>Lentes, armações e medidas com orientação boutique.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="zpx-proof" aria-label="Provas rápidas">
          <div className="zpx-shell zpx-proof-grid">
            {proof.map(([value, label]) => (
              <div key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <SectionReveal className="zpx-section zpx-experience-section">
          <div className="zpx-shell zpx-split">
            <div>
              <p className="zpx-kicker">Experiência boutique</p>
              <h2>Tecnologia ZEISS em uma experiência de atendimento boutique.</h2>
              <p>
                Escolha com calma. Enxergue com precisão. Uma jornada com curadoria, reputação local
                e presença internacional.
              </p>
            </div>
            <DisplayCards
              cards={[
                { title: "Precisão", description: "Rotina, medidas e foco", date: "ZEISS" },
                { title: "Curadoria", description: "Armações e presença", date: "Boutique" },
                { title: "Reputação", description: "5,0 • 117 avaliações", date: "Google" },
              ]}
            />
          </div>
        </SectionReveal>

        <SectionReveal className="zpx-section zpx-routine-section" >
          <div className="zpx-shell">
            <div className="zpx-section-head">
              <p className="zpx-kicker">Sua rotina visual</p>
              <h2>Sua rotina visual pede uma lente diferente.</h2>
            </div>
            <div className="zpx-routine-grid">
              <div className="zpx-routine-tabs" role="tablist" aria-label="Rotinas visuais">
                {routines.map((item, index) => (
                  <button
                    type="button"
                    key={item.label}
                    className={index === activeRoutine ? "is-active" : ""}
                    onClick={() => setActiveRoutine(index)}
                    role="tab"
                    aria-selected={index === activeRoutine}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <motion.article
                className="zpx-routine-card"
                key={routine.label}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <PremiumImage
                  src={routine.image.src}
                  alt={routine.image.alt}
                  mode={routine.image.fit}
                  position={routine.image.position}
                  ratio="16 / 10"
                  sizes="(min-width: 900px) 48vw, 92vw"
                />
                <div>
                  <span>Consultoria ZEISS</span>
                  <h3>{routine.title}</h3>
                  <p>{routine.text}</p>
                  <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Conversar sobre minha rotina
                    <ArrowRight size={17} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="zpx-section zpx-curation-section" >
          <div className="zpx-shell zpx-section-head">
            <p className="zpx-kicker">Vitrine editorial</p>
            <h2>Curadoria óptica com assinatura ZEISS.</h2>
            <p>Lentes, armações e orientação consultiva para transformar escolha em experiência.</p>
          </div>
          <div className="zpx-shell zpx-editorial-grid" id="curadoria">
            <PremiumImage
              src={premiumImages.storeWide.src}
              alt={premiumImages.storeWide.alt}
              mode="cover"
              position={premiumImages.storeWide.position}
              ratio="16 / 10"
              className="zpx-editorial-main"
            />
            <PremiumImage
              src={premiumImages.glassesProduct.src}
              alt={premiumImages.glassesProduct.alt}
              mode="contain"
              ratio="16 / 10"
              className="zpx-editorial-product"
            />
            <PremiumImage
              src={premiumImages.storeCurved.src}
              alt={premiumImages.storeCurved.alt}
              mode="cover"
              position={premiumImages.storeCurved.position}
              ratio="16 / 10"
            />
            <div className="zpx-editorial-strip">
              <span>Design</span>
              <span>Proporção</span>
              <span>Conforto</span>
              <span>Presença</span>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="zpx-section zpx-tech-section" >
          <div className="zpx-shell zpx-section-head" id="tecnologias">
            <p className="zpx-kicker">Tecnologias ZEISS</p>
            <h2>Quatro assinaturas para uma visão mais precisa.</h2>
          </div>
          <div className="zpx-shell zpx-lens-stage">
            {lensCards.map((lens, index) => (
              <article key={lens.title} style={{ "--lens-index": index } as CSSProperties}>
                <div className="zpx-lens-orb" />
                <h3>{lens.title}</h3>
                <p>{lens.text}</p>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Conversar sobre essa lente
                </a>
              </article>
            ))}
          </div>
        </SectionReveal>

        <FullMapSection />

        <SectionReveal className="zpx-section zpx-testimonials-section" >
          <div className="zpx-shell zpx-reviews-head" id="avaliacoes">
            <div>
              <p className="zpx-kicker">Avaliações reais</p>
              <h2>Prova social com movimento, sem excesso.</h2>
            </div>
            <div>
              <StarsLine />
              <strong>{testimonialsSummary.rating.toFixed(1).replace(".", ",")}</strong>
              <span>{testimonialsSummary.total} avaliações no Google</span>
            </div>
          </div>
          <PremiumTestimonialsStage />
        </SectionReveal>

        <SectionReveal className="zpx-section zpx-faq-section" >
          <div className="zpx-shell zpx-faq-grid">
            <div>
              <p className="zpx-kicker">FAQ</p>
              <h2>Perguntas rápidas antes da visita.</h2>
            </div>
            <div>
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </SectionReveal>

        <section className="zpx-final-cta">
          <div className="zpx-final-sparkles">
            <SparklesCore
              background="transparent"
              minSize={0.35}
              maxSize={1.1}
              particleDensity={80}
              particleColor="#D8DDE8"
              speed={0.7}
            />
          </div>
          <div className="zpx-shell zpx-final-content">
            <ShieldCheck size={36} />
            <h2>Veja sua rotina com mais precisão.</h2>
            <p>Agende uma experiência ZEISS e escolha lentes e armações com orientação consultiva.</p>
            <a className="zpx-button zpx-button-primary" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
              <MessageCircle size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="zpx-footer">
        <div className="zpx-shell">
          <a href="#top" className="zpx-brand">
            <PremiumImage
              src={premiumImages.logo.src}
              alt="ZEISS"
              mode="contain"
              ratio="1 / 1"
              className="zpx-brand-logo"
              sizes="46px"
            />
            <span>
              <strong>ZEISS Vision Center</strong>
              <small>Araguaína</small>
            </span>
          </a>
          <div>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              <Instagram size={16} />
              {site.instagram}
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
