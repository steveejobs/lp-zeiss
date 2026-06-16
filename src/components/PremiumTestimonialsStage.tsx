"use client";

import { Testimonial3DMarquee } from "@/components/ui/3d-testimonails";
import { testimonials } from "@/data/testimonials";

type PremiumTestimonialsStageProps = {
  animationComponent?: React.ReactNode;
};

export function PremiumTestimonialsStage({
  animationComponent,
}: PremiumTestimonialsStageProps) {
  if (animationComponent) {
    return <div className="premium-testimonials-stage">{animationComponent}</div>;
  }

  return (
    <div className="premium-testimonials-stage" aria-label="Avaliacoes reais do Google">
      <Testimonial3DMarquee testimonials={testimonials} />
    </div>
  );
}
