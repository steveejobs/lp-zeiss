"use client";

import { CarFront, Glasses, MonitorSmartphone, Sparkles, Sun } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

const technologies = [
  {
    icon: MonitorSmartphone,
    label: "ZEISS SmartLife",
    text: "Para uma rotina entre telas, leitura, trabalho e movimento.",
    message: whatsappMessages.screens,
  },
  {
    icon: CarFront,
    label: "ZEISS DriveSafe",
    text: "Conforto visual para quem dirige de dia e à noite.",
    message: whatsappMessages.drive,
  },
  {
    icon: Sun,
    label: "ZEISS PhotoFusion X",
    text: "Lentes fotocromáticas que acompanham diferentes condições de luz.",
    message: whatsappMessages.site,
  },
  {
    icon: Glasses,
    label: "ZEISS DuraVision",
    text: "Tratamento premium para nitidez, estética e limpeza facilitada.",
    message: whatsappMessages.site,
  },
];

export function RoutineLensSection() {
  return (
    <section
      id="rotina"
      className="section routine-lens-section"
      aria-labelledby="routine-lens-title"
    >
      <div className="site-shell zeiss-technology-layout">
        <AnimatedReveal className="zeiss-lens-visual" delay={0.04}>
          <div
            role="img"
            aria-label="Lente óptica premium com reflexos técnicos em azul"
          >
            <Sparkles size={18} aria-hidden="true" />
            <span>Tecnologias ZEISS</span>
            <strong>Precisão para telas, direção, luz e rotina.</strong>
          </div>
        </AnimatedReveal>

        <div>
          <AnimatedReveal className="section-heading compact">
            <p className="eyebrow">Tecnologias</p>
            <h2 id="routine-lens-title">Soluções ópticas para viver melhor o detalhe.</h2>
            <p>
              Quatro caminhos premium para transformar conforto, nitidez e
              estética em decisões mais precisas.
            </p>
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
                  <Icon size={20} aria-hidden="true" />
                  <h3>{technology.label}</h3>
                  <p>{technology.text}</p>
                  <a
                    href={buildWhatsAppUrl(technology.message)}
                    aria-label={`Conversar sobre ${technology.label}`}
                  >
                    Conversar
                  </a>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
