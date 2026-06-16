import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PremiumImageMode } from "@/data/premiumImages";

type PremiumImageProps = {
  src: string;
  alt: string;
  mode?: PremiumImageMode;
  position?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PremiumImage({
  src,
  alt,
  mode = "cover",
  position = "center center",
  ratio = "16 / 10",
  className,
  priority = false,
  sizes = "(max-width: 768px) 92vw, 50vw",
}: PremiumImageProps) {
  return (
    <div
      className={cn("premium-image", mode === "contain" && "is-contain", className)}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        style={{
          objectFit: mode,
          objectPosition: position,
        }}
      />
    </div>
  );
}
