import type { ReactNode } from "react";
import { Hero3DBackground } from "@/components/hero/Hero3DBackground";
import { PremiumImage } from "@/components/PremiumImage";

type HeroMediaLayerProps = {
  image?: {
    src: string;
    alt: string;
    position?: string;
  };
  video?: {
    src: string;
    poster?: string;
  };
  animationComponent?: ReactNode;
  fallback3D?: boolean;
};

export function HeroMediaLayer({
  image,
  video,
  animationComponent,
  fallback3D = true,
}: HeroMediaLayerProps) {
  if (animationComponent) {
    return <div className="hero-media-layer">{animationComponent}</div>;
  }

  if (video) {
    return (
      <div className="hero-media-layer">
        <video autoPlay muted loop playsInline poster={video.poster}>
          <source src={video.src} />
        </video>
      </div>
    );
  }

  if (image) {
    return (
      <div className="hero-media-layer">
        <PremiumImage
          src={image.src}
          alt={image.alt}
          mode="cover"
          position={image.position || "center center"}
          ratio="16 / 9"
          priority
          sizes="100vw"
        />
      </div>
    );
  }

  return fallback3D ? (
    <div className="hero-media-layer">
      <Hero3DBackground />
    </div>
  ) : null;
}
