import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl, site, whatsappMessages } from "@/lib/site";

export function StorePhotosSection() {
  const gallery = site.storeImages.slice(0, 3);

  return (
    <section
      id="vitrine"
      className="section store-photos-section olhar-gallery-section"
      aria-labelledby="store-photos-title"
    >
      <div className="site-shell olhar-gallery-layout">
        <AnimatedReveal className="section-heading compact olhar-gallery-copy">
          <p className="eyebrow">Curadoria</p>
          <h2 id="store-photos-title">
            Armações escolhidas como peça de estilo.
          </h2>
          <p>
            Design, proporção, conforto e personalidade. A escolha da armação
            deve valorizar o rosto, acompanhar sua rotina e traduzir seu estilo
            com discrição e elegância.
          </p>
          <a
            href={buildWhatsAppUrl(whatsappMessages.collections)}
            className="button button-ghost"
            aria-label="Conhecer armações selecionadas pelo WhatsApp"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Conhecer curadoria
          </a>
        </AnimatedReveal>

        <AnimatedReveal className="olhar-gallery-media" delay={0.06}>
          {gallery.map((image, index) => (
            <div
              className={`premium-gallery-image premium-gallery-image-${index + 1}`}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 92vw, 360px"
                loading="lazy"
              />
            </div>
          ))}
        </AnimatedReveal>
      </div>
    </section>
  );
}
