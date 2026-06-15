import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildWhatsAppUrl, site, whatsappMessages } from "@/lib/site";

export function StorePhotosSection() {
  const [mainImage, ...supportImages] = site.storeImages;

  return (
    <section
      id="vitrine"
      className="section store-photos-section olhar-gallery-section"
      aria-labelledby="store-photos-title"
    >
      <div className="site-shell olhar-gallery-layout">
        <AnimatedReveal className="olhar-gallery-media">
          <div className="olhar-gallery-main">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              sizes="(max-width: 900px) 92vw, 620px"
              loading="lazy"
            />
          </div>
          <div className="olhar-gallery-supports">
            {supportImages.slice(0, 2).map((image) => (
              <div className="olhar-gallery-small" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 900px) 44vw, 280px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal className="section-heading compact olhar-gallery-copy">
          <p className="eyebrow">Armações e curadoria</p>
          <h2 id="store-photos-title">
            Armações selecionadas para diferentes rostos, estilos e momentos.
          </h2>
          <p>
            Da escolha da lente à escolha da armação, cada detalhe influencia
            conforto, estética e segurança. Nossa equipe orienta você na
            combinação entre tecnologia óptica, design e estilo pessoal.
          </p>
          <a
            href={buildWhatsAppUrl(whatsappMessages.collections)}
            className="button button-ghost"
            aria-label="Conhecer armações selecionadas pelo WhatsApp"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Conhecer armações premium
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
}
