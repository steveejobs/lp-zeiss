import { Star } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { testimonials, testimonialsSummary } from "@/data/testimonials";
import { site } from "@/lib/site";

export function GoogleReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="section google-reviews-section premium-reviews-section"
      aria-labelledby="google-reviews-title"
    >
      <div className="site-shell testimonials-shell">
        <AnimatedReveal className="section-heading compact testimonials-heading">
          <p className="eyebrow">Prova social</p>
          <h2 id="google-reviews-title">Avaliações que sustentam reputação.</h2>
          <p>
            Uma seleção breve de clientes que destacam qualidade, conforto,
            estética e atendimento.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="testimonials-rating-wrap" delay={0.08}>
          <span className="premium-rating-pill">
            <span aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={13} fill="currentColor" />
              ))}
            </span>
            <strong>
              {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no Google
            </strong>
            <small>{testimonialsSummary.total} avaliações</small>
          </span>
        </AnimatedReveal>
      </div>

      <div className="site-shell premium-review-grid">
        {testimonials.map((testimonial, index) => (
          <AnimatedReveal
            className="premium-review-card"
            key={testimonial.name}
            delay={index * 0.035}
          >
            <span className="premium-review-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} size={12} fill="currentColor" />
              ))}
            </span>
            <p>{testimonial.text}</p>
            <strong>{testimonial.name}</strong>
          </AnimatedReveal>
        ))}
      </div>

      <div className="site-shell premium-review-actions">
        <a href={site.whatsappUrl} className="button button-red">
          Agendar atendimento
        </a>
      </div>
    </section>
  );
}
