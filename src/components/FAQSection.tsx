import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "O atendimento ajuda na escolha das lentes ZEISS?",
    answer:
      "Sim. A orientação considera grau, rotina, estilo de vida, conforto visual, adaptação e preferências de uso.",
  },
  {
    question: "A loja trabalha com armações premium?",
    answer:
      "Sim. A curadoria combina armações de diferentes estilos com orientação sobre conforto, proporção e uso diário.",
  },
  {
    question: "Onde fica a ZEISS Vision Center Araguaína?",
    answer: `A loja fica no ${site.locations[0].address}.`,
  },
  {
    question: "Posso chamar pelo WhatsApp antes de ir?",
    answer:
      "Sim. Você pode falar pelo WhatsApp para pedir orientação, tirar dúvidas e agendar seu atendimento.",
  },
  {
    question: "A loja realiza diagnóstico médico?",
    answer:
      "Não prometemos diagnóstico ou cura pelo site. A proposta da loja é orientar a escolha de lentes e armações de forma consultiva.",
  },
];

export function FAQSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="site-shell faq-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Dúvidas comuns</p>
          <h2 id="faq-title">Perguntas rápidas antes da sua experiência ZEISS.</h2>
        </AnimatedReveal>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <AnimatedReveal
              className="faq-item"
              key={item.question}
              delay={index * 0.04}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
