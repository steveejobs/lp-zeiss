"use client";

import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

type PremiumTestimonialsStageProps = {
  animationComponent?: React.ReactNode;
};

function Stars() {
  return (
    <span className="premium-testimonial-stars" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={12} fill="currentColor" />
      ))}
    </span>
  );
}

export function PremiumTestimonialsStage({
  animationComponent,
}: PremiumTestimonialsStageProps) {
  const reduceMotion = useReducedMotion();

  if (animationComponent) {
    return <div className="premium-testimonials-stage">{animationComponent}</div>;
  }

  const visibleTestimonials = [...testimonials, ...testimonials.slice(0, 4)];

  return (
    <div className="premium-testimonials-stage" aria-label="Avaliações reais do Google">
      <motion.div
        className="premium-testimonials-track"
        animate={reduceMotion ? undefined : { x: ["0%", "-38%"] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 26, repeat: Infinity, ease: "linear" }
        }
      >
        {visibleTestimonials.map((testimonial, index) => (
          <article
            className={`premium-testimonial-card premium-testimonial-card-${index % 5}`}
            key={`${testimonial.name}-${index}`}
          >
            <Stars />
            <p>“{testimonial.quote}”</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.source} • {testimonial.theme}</span>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
