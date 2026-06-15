import {
  BadgeCheck,
  Glasses,
  HeartHandshake,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const experienceItems = [
  { icon: MessageSquareText, text: "Entendimento da sua rotina visual" },
  { icon: Glasses, text: "Curadoria de lentes e armações" },
  { icon: BadgeCheck, text: "Orientação técnica personalizada" },
  { icon: ShieldCheck, text: "Escolha com conforto, segurança e bom gosto" },
  { icon: HeartHandshake, text: "Pós-atendimento e cuidado contínuo" },
];

export function ProcessSection() {
  return (
    <section
      id="experiencia"
      className="section process-section olhar-experience-section"
      aria-labelledby="experience-title"
    >
      <div className="site-shell olhar-experience-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Experiência ZEISS</p>
          <h2 id="experience-title">
            Mais que óculos. Uma experiência ZEISS para a sua visão.
          </h2>
          <p>
            Cada pessoa enxerga, trabalha, dirige e vive de uma forma. Por
            isso, a escolha das lentes deve considerar mais do que o grau: deve
            considerar rotina, estilo de vida, conforto, proteção e adaptação.
            Na ZEISS Vision Center Araguaína, o atendimento é consultivo para
            ajudar você a escolher com mais segurança.
          </p>
        </AnimatedReveal>

        <div className="olhar-experience-list">
          {experienceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedReveal
                className="olhar-experience-item"
                key={item.text}
                delay={index * 0.04}
              >
                <Icon size={20} aria-hidden="true" />
                <span>{item.text}</span>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
