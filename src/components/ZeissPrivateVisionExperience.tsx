"use client";

import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useState } from "react";
import { site, testimonials, testimonialsSummary } from "@/lib/site";

const logo = site.logoIcon;
const images = {
  facade: "/galeria%20cole%C3%A7%C3%A3o/qa%20(1).png",
  store: "/galeria%20cole%C3%A7%C3%A3o/qa%20(4).png",
  storeWide: "/galeria%20cole%C3%A7%C3%A3o/qa%20(5).png",
  interior: "/galeria%20cole%C3%A7%C3%A3o/qa%20(2).png",
  facadeWide: "/galeria%20cole%C3%A7%C3%A3o/qa%20(3).png",
  glasses: "/assets/glasses/eyeglasses-hero.webp",
};

const proof = [
  ["5,0", "no Google"],
  ["117", "avaliações"],
  ["ZEISS", "Vision Center"],
  ["Doha Center", "Araguaína"],
];

const routines = [
  {
    label: "Trabalho em telas",
    title: "Precisão para alternar foco sem perder conforto.",
    text: "Para quem alterna entre celular, computador, leitura e reuniões, a escolha da lente precisa considerar distância, postura, foco e conforto ao longo do dia.",
    detail: "Rotina digital, leitura curta, reuniões e jornadas longas.",
  },
  {
    label: "Direção à noite",
    title: "Mais segurança percebida em luz baixa e reflexos.",
    text: "A experiência considera contraste, brilho de faróis, chuva, tempo de resposta visual e estabilidade para dirigir com mais tranquilidade.",
    detail: "Ideal para quem dirige à noite ou pega estrada com frequência.",
  },
  {
    label: "Sol e ambientes externos",
    title: "Conforto visual em diferentes condições de luz.",
    text: "A curadoria avalia rotina externa, sensibilidade à claridade, estética da armação e tecnologias que acompanham a variação de luminosidade.",
    detail: "Para rua, viagens, campo, sol intenso e transições de ambiente.",
  },
  {
    label: "Lentes multifocais",
    title: "Adaptação guiada para enxergar em várias distâncias.",
    text: "Uma escolha multifocal premium pede medida, desenho de lente, armação correta e orientação próxima para tornar a adaptação mais segura.",
    detail: "Perto, intermediário e longe com orientação consultiva.",
  },
  {
    label: "Estilo e armação",
    title: "Uma peça que muda presença, proporção e expressão.",
    text: "A equipe ajuda a equilibrar formato do rosto, material, cor, peso, ajuste e rotina de uso para a armação parecer natural e sofisticada.",
    detail: "Curadoria para uso diário, ocasiões e imagem pessoal.",
  },
  {
    label: "Primeira experiência ZEISS",
    title: "Um primeiro contato com tecnologia visual premium.",
    text: "A conversa começa pela sua rotina: onde você sente esforço, quais ambientes frequenta e o que espera de uma lente ZEISS.",
    detail: "Para entender opções sem pressa e com orientação clara.",
  },
];

const lenses = [
  {
    name: "SmartLife",
    text: "Para uma rotina conectada, dinâmica e em constante mudança de foco.",
  },
  {
    name: "DriveSafe",
    text: "Para quem dirige e busca mais conforto em situações de reflexo e baixa luminosidade.",
  },
  {
    name: "PhotoFusion X",
    text: "Lentes fotocromáticas premium que acompanham diferentes condições de luz.",
  },
  {
    name: "DuraVision",
    text: "Tratamento premium para nitidez, estética e limpeza facilitada.",
  },
];

const faqs = [
  {
    question: "A equipe ajuda a escolher a lente ideal?",
    answer:
      "Sim. A conversa parte da sua receita, rotina, armação e ambientes de uso para orientar a escolha com mais segurança.",
  },
  {
    question: "Posso chamar pelo WhatsApp antes de ir?",
    answer:
      "Pode. O WhatsApp é o caminho mais rápido para tirar dúvidas e combinar o melhor momento para atendimento.",
  },
  {
    question: "Onde fica a ZEISS Vision Center Araguaína?",
    answer:
      "No Doha Center, Av. José de Brito, 366, Loja 2, Setor Anhanguera, em Araguaína.",
  },
  {
    question: "A loja trabalha com lentes ZEISS?",
    answer:
      "Sim. A ZEISS Vision Center Araguaína trabalha com lentes ZEISS e orientação consultiva para sua rotina visual.",
  },
];

function Stars({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "zpv-stars is-compact" : "zpv-stars"} aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={compact ? 12 : 14} fill="currentColor" />
      ))}
    </span>
  );
}

export function ZeissPrivateVisionExperience() {
  const [activeRoutine, setActiveRoutine] = useState(0);
  const routine = routines[activeRoutine];

  return (
    <div className="zpv-page">
      <header className="zpv-header">
        <a href="#top" className="zpv-brand" aria-label="ZEISS Vision Center Araguaína">
          <Image src={logo} alt="ZEISS" width={54} height={54} priority />
          <span>
            <strong>ZEISS Vision Center</strong>
            <small>Araguaína</small>
          </span>
        </a>
        <nav className="zpv-nav" aria-label="Navegação principal">
          <a href="#experiencia">Experiência</a>
          <a href="#rotina">Rotina visual</a>
          <a href="#curadoria">Curadoria</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Localização</a>
        </nav>
        <a className="zpv-header-cta" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={17} />
          Agendar
        </a>
      </header>

      <main id="top">
        <section className="zpv-hero" aria-labelledby="zpv-hero-title">
          <div className="zpv-optic-lines" aria-hidden="true" />
          <div className="zpv-shell zpv-hero-grid">
            <div className="zpv-hero-copy">
              <Image src={logo} alt="ZEISS" width={76} height={76} priority className="zpv-hero-logo" />
              <div className="zpv-kicker">
                <Sparkles size={15} />
                ZEISS Private Vision Experience
              </div>
              <h1 id="zpv-hero-title">
                Tecnologia ZEISS. Precisão para quem exige mais da própria visão.
              </h1>
              <p>
                No Doha Center, em Araguaína, uma experiência premium para escolher lentes ZEISS,
                armações selecionadas e soluções visuais alinhadas à sua rotina.
              </p>
              <div className="zpv-rating-pill">
                <Stars compact />
                <strong>5,0 no Google</strong>
                <span>117 avaliações</span>
              </div>
              <div className="zpv-hero-actions">
                <a className="zpv-button zpv-button-primary" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar experiência ZEISS
                  <MessageCircle size={18} />
                </a>
                <a className="zpv-button zpv-button-secondary" href="#experiencia">
                  Conhecer a experiência
                  <ChevronDown size={18} />
                </a>
              </div>
              <p className="zpv-microcopy">Atendimento consultivo no Doha Center.</p>
            </div>
            <div className="zpv-hero-visual" aria-label="Fachada da ZEISS Vision Center Araguaína">
              <div className="zpv-hero-photo">
                <Image src={images.facade} alt="Fachada da ZEISS Vision Center Araguaína" fill priority sizes="(min-width: 920px) 48vw, 92vw" />
              </div>
              <div className="zpv-floating-panel">
                <span>Private fitting</span>
                <strong>Lentes, armações e medidas com orientação individual.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="zpv-proof-section" aria-label="Provas rápidas da ZEISS Vision Center Araguaína">
          <div className="zpv-shell zpv-proof-grid">
            {proof.map(([value, label]) => (
              <article className="zpv-proof-card" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="zpv-section zpv-intro-section">
          <div className="zpv-shell zpv-intro-grid">
            <div>
              <p className="zpv-eyebrow">Experiência consultiva</p>
              <h2>Uma jornada óptica com calma, precisão e presença.</h2>
            </div>
            <p>
              A ZEISS Vision Center Araguaína combina tecnologia visual, curadoria de armações e
              atendimento individual para transformar a escolha dos óculos em uma decisão segura e elegante.
            </p>
          </div>
        </section>

        <section id="rotina" className="zpv-section zpv-routine-section" aria-labelledby="routine-title">
          <div className="zpv-shell">
            <div className="zpv-section-head">
              <p className="zpv-eyebrow">Rotina visual</p>
              <h2 id="routine-title">Qual rotina visual pede mais precisão?</h2>
              <p>Escolha uma situação e veja qual experiência ZEISS conversa melhor com o seu dia.</p>
            </div>

            <div className="zpv-routine-layout">
              <div className="zpv-routine-tabs" role="tablist" aria-label="Rotinas visuais">
                {routines.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    className={index === activeRoutine ? "is-active" : ""}
                    onClick={() => setActiveRoutine(index)}
                    role="tab"
                    aria-selected={index === activeRoutine}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <article className="zpv-routine-card">
                <span>Experiência indicada</span>
                <h3>{routine.title}</h3>
                <p>{routine.text}</p>
                <small>{routine.detail}</small>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Conversar sobre minha rotina
                  <ArrowRight size={17} />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="zpv-section zpv-lenses-section" aria-labelledby="lenses-title">
          <div className="zpv-shell">
            <div className="zpv-section-head">
              <p className="zpv-eyebrow">ZEISS Signature Lenses</p>
              <h2 id="lenses-title">Tecnologias escolhidas pela vida real.</h2>
            </div>
            <div className="zpv-lens-grid">
              {lenses.map((lens) => (
                <article className="zpv-lens-card" key={lens.name}>
                  <Image src={images.glasses} alt="" fill sizes="(min-width: 900px) 25vw, 90vw" />
                  <div>
                    <strong>{lens.name}</strong>
                    <p>{lens.text}</p>
                    <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Consultar opção
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="curadoria" className="zpv-section zpv-gallery-section" aria-labelledby="gallery-title">
          <div className="zpv-shell zpv-gallery-head">
            <div>
              <p className="zpv-eyebrow">Curadoria ZEISS</p>
              <h2 id="gallery-title">Armações escolhidas como peça de estilo.</h2>
            </div>
            <p>
              Design, proporção, conforto e presença. A escolha certa valoriza o rosto e acompanha
              sua rotina com discrição.
            </p>
          </div>
          <div className="zpv-shell zpv-editorial-gallery">
            <figure className="zpv-gallery-main">
              <Image src={images.storeWide} alt="Curadoria de armações ZEISS" fill sizes="(min-width: 900px) 58vw, 92vw" />
              <figcaption>Curadoria ampla de armações</figcaption>
            </figure>
            <figure>
              <Image src={images.store} alt="Detalhe da loja ZEISS Vision Center" fill sizes="(min-width: 900px) 24vw, 44vw" />
              <figcaption>Design e proporção</figcaption>
            </figure>
            <figure>
              <Image src={images.interior} alt="Atendimento e tecnologia dentro da ZEISS Vision Center" fill sizes="(min-width: 900px) 24vw, 44vw" />
              <figcaption>Medidas e orientação</figcaption>
            </figure>
            <figure>
              <Image src={images.facadeWide} alt="Fachada da ZEISS Vision Center Araguaína" fill sizes="(min-width: 900px) 24vw, 92vw" />
              <figcaption>Loja real no Doha Center</figcaption>
            </figure>
          </div>
        </section>

        <section className="zpv-section zpv-store-section" aria-labelledby="store-title">
          <div className="zpv-shell zpv-store-grid">
            <div className="zpv-store-copy">
              <p className="zpv-eyebrow">Experiência da loja</p>
              <h2 id="store-title">Uma loja pensada para escolher com calma.</h2>
              <p>
                Ambiente elegante, atendimento próximo e orientação técnica para transformar a escolha
                dos óculos em uma experiência segura, confortável e sofisticada.
              </p>
              <div className="zpv-pillars">
                <span>Atendimento consultivo</span>
                <span>Curadoria de armações</span>
                <span>Tecnologia ZEISS</span>
              </div>
            </div>
            <div className="zpv-store-photo">
              <Image src={images.interior} alt="Interior da ZEISS Vision Center Araguaína" fill sizes="(min-width: 900px) 44vw, 92vw" />
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="zpv-section zpv-testimonials-section" aria-labelledby="reviews-title">
          <div className="zpv-shell zpv-reviews-head">
            <div>
              <p className="zpv-eyebrow">Avaliações reais</p>
              <h2 id="reviews-title">Clientes percebem qualidade no atendimento e nas lentes.</h2>
            </div>
            <div className="zpv-review-score">
              <Stars />
              <strong>{testimonialsSummary.rating.toFixed(1).replace(".", ",")}</strong>
              <span>{testimonialsSummary.total} avaliações no Google</span>
            </div>
          </div>
          <div className="zpv-shell zpv-testimonial-track" aria-label="Depoimentos de clientes">
            {testimonials.slice(0, 6).map((testimonial) => (
              <article className="zpv-testimonial-card" key={testimonial.name}>
                <Stars compact />
                <p>“{testimonial.text}”</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
          <div className="zpv-shell zpv-center-action">
            <a className="zpv-button zpv-button-primary" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar minha experiência ZEISS
              <MessageCircle size={18} />
            </a>
          </div>
        </section>

        <section id="contato" className="zpv-section zpv-location-section" aria-labelledby="location-title">
          <div className="zpv-shell zpv-location-grid">
            <div>
              <p className="zpv-eyebrow">Localização premium</p>
              <h2 id="location-title">ZEISS Vision Center Araguaína no Doha Center.</h2>
              <div className="zpv-address-card">
                <strong>Doha Center</strong>
                <span>Av. José de Brito, 366 - Loja 2</span>
                <span>Setor Anhanguera</span>
                <span>Araguaína - TO</span>
                <span className="zpv-phone">{site.phoneDisplay}</span>
              </div>
              <div className="zpv-location-actions">
                <a className="zpv-button zpv-button-secondary" href={site.mapsRouteUrl} target="_blank" rel="noopener noreferrer">
                  Como chegar
                  <MapPin size={18} />
                </a>
                <a className="zpv-button zpv-button-primary" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar atendimento
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
            <div className="zpv-map-panel">
              <iframe title="Mapa ZEISS Vision Center Araguaína" src={site.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section className="zpv-section zpv-faq-section" aria-labelledby="faq-title">
          <div className="zpv-shell zpv-faq-grid">
            <div>
              <p className="zpv-eyebrow">FAQ</p>
              <h2 id="faq-title">Perguntas rápidas antes da visita.</h2>
            </div>
            <div className="zpv-faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="zpv-final-section" aria-labelledby="final-title">
          <div className="zpv-shell zpv-final-panel">
            <ShieldCheck size={34} />
            <h2 id="final-title">Veja sua rotina com mais precisão.</h2>
            <p>Agende uma experiência ZEISS e escolha lentes e armações com orientação consultiva.</p>
            <a className="zpv-button zpv-button-primary" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
              <MessageCircle size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="zpv-footer">
        <div className="zpv-shell zpv-footer-grid">
          <a href="#top" className="zpv-brand">
            <Image src={logo} alt="ZEISS" width={46} height={46} />
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
            <a href={site.mapsRouteUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Doha Center, Araguaína
            </a>
          </div>
        </div>
      </footer>

      <a className="zpv-floating-whatsapp" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar experiência ZEISS pelo WhatsApp">
        <MessageCircle size={23} />
      </a>
    </div>
  );
}
