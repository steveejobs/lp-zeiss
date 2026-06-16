import { BadgeCheck, Gem, ScanEye } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const pillars = [
  {
    icon: ScanEye,
    title: "Precisão óptica",
    text: "Tecnologia ZEISS apresentada de forma clara para sua rotina visual.",
  },
  {
    icon: Gem,
    title: "Curadoria de estilo",
    text: "Armações escolhidas por proporção, conforto e presença.",
  },
  {
    icon: BadgeCheck,
    title: "Atendimento consultivo",
    text: "Uma escolha orientada por uso, estética, conforto e confiança.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="experiencia"
      className="section process-section olhar-experience-section"
      aria-labelledby="experience-title"
    >
      <div className="site-shell premium-editorial-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Experiência ZEISS</p>
          <h2 id="experience-title">
            A lente certa não é apenas uma questão de grau.
          </h2>
          <p>
            Na ZEISS Vision Center Araguaína, cada escolha é orientada por
            rotina, conforto, estética e tecnologia. É uma questão de
            experiência.
          </p>
        </AnimatedReveal>

        <div className="premium-pillar-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <AnimatedReveal
                className="premium-pillar-card"
                key={pillar.title}
                delay={index * 0.05}
              >
                <Icon size={20} aria-hidden="true" />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
