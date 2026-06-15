"use client";

import {
  CarFront,
  Glasses,
  MonitorSmartphone,
  Moon,
  Sparkles,
  Sun,
  TabletSmartphone,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

const technologies = [
  {
    icon: TabletSmartphone,
    label: "ZEISS SmartLife",
    title: "Para uma rotina conectada e em movimento",
    text: "Lentes pensadas para quem alterna entre celular, computador, leitura, direção e atividades do dia a dia.",
    message: whatsappMessages.site,
  },
  {
    icon: CarFront,
    label: "ZEISS DriveSafe",
    title: "Mais conforto para dirigir de dia e à noite",
    text: "Tecnologia voltada à redução de reflexos e ofuscamento, especialmente em situações de baixa luminosidade.",
    message: whatsappMessages.drive,
  },
  {
    icon: Sun,
    label: "ZEISS PhotoFusion X",
    title: "Lentes que se adaptam à luz",
    text: "Fotocromáticas premium que escurecem em ambientes externos, com proteção UV permanente e conforto em diferentes condições de iluminação.",
    message: whatsappMessages.site,
  },
  {
    icon: MonitorSmartphone,
    label: "ZEISS BlueGuard",
    title: "Proteção para a vida digital",
    text: "Tecnologia para quem passa muitas horas diante de telas e busca mais conforto visual na rotina conectada.",
    message: whatsappMessages.screens,
  },
  {
    icon: Glasses,
    label: "ZEISS DuraVision",
    title: "Antirreflexo premium e limpeza facilitada",
    text: "Revestimentos que valorizam nitidez, resistência e estética das lentes.",
    message: whatsappMessages.site,
  },
  {
    icon: Moon,
    label: "ZEISS UVProtect",
    title: "Proteção UV todos os dias",
    text: "Proteção UV em lentes incolores, para cuidado visual contínuo na rotina.",
    message: whatsappMessages.site,
  },
];

const audience = [
  "Quem trabalha muitas horas no computador",
  "Quem dirige com frequência",
  "Quem busca lentes progressivas ou multifocais",
  "Quem procura óculos de sol premium",
  "Quem valoriza armações de bom gosto",
  "Quem quer atendimento técnico e seguro",
];

export function RoutineLensSection() {
  return (
    <section
      id="rotina"
      className="section routine-lens-section"
      aria-labelledby="routine-lens-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Tecnologias ZEISS</p>
          <h2 id="routine-lens-title">Sua visão merece mais do que uma lente comum.</h2>
          <p>
            Tecnologia óptica, atendimento premium e lentes escolhidas para o
            seu estilo de vida. As soluções são apresentadas de forma
            consultiva, sem promessas médicas e com foco em conforto, proteção e
            rotina.
          </p>
        </AnimatedReveal>

        <div className="zeiss-technology-layout">
          <AnimatedReveal
            className="zeiss-lens-visual"
            delay={0.04}
          >
            <div
              role="img"
              aria-label="Lente óptica premium com reflexos técnicos em azul"
            >
              <span>Precisão ZEISS</span>
              <strong>Mais conforto para telas, direção, leitura e rotina.</strong>
            </div>
          </AnimatedReveal>

          <div className="olhar-choice-grid">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <AnimatedReveal
                  className="olhar-choice-card"
                  key={technology.label}
                  delay={index * 0.04}
                >
                  <Icon size={22} aria-hidden="true" />
                  <span className="technology-label">{technology.label}</span>
                  <h3>{technology.title}</h3>
                  <p>{technology.text}</p>
                  <a
                    href={buildWhatsAppUrl(technology.message)}
                    aria-label={`${technology.label} pelo WhatsApp`}
                  >
                    Conversar sobre essa solução
                  </a>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>

        <AnimatedReveal className="zeiss-audience-panel" delay={0.08}>
          <div>
            <p className="eyebrow">Para quem é</p>
            <h3>Lentes escolhidas para sua rotina, seu estilo e sua forma de enxergar.</h3>
          </div>
          <div className="zeiss-audience-grid" aria-label="Perfis atendidos">
            {audience.map((item) => (
              <span key={item}>
                <Sparkles size={15} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
