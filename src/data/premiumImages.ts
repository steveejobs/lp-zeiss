export type PremiumImageMode = "contain" | "cover";
export type PremiumImageType = "product" | "environment" | "portrait" | "hero";

export type PremiumImageAsset = {
  src: string;
  alt: string;
  type: PremiumImageType;
  fit: PremiumImageMode;
  position: string;
  ratio: string;
};

export const premiumImages = {
  logo: {
    src: "/galeria%20cole%C3%A7%C3%A3o/zeiss%20logo.png",
    alt: "ZEISS",
    type: "product",
    fit: "contain",
    position: "center center",
    ratio: "1 / 1",
  },
  facadeHero: {
    src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(1).png",
    alt: "Fachada da ZEISS Vision Center Araguaína no Doha Center",
    type: "hero",
    fit: "cover",
    position: "center 42%",
    ratio: "4 / 5",
  },
  facadeWide: {
    src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(3).png",
    alt: "Fachada da ZEISS Vision Center Araguaína",
    type: "environment",
    fit: "cover",
    position: "center 38%",
    ratio: "16 / 10",
  },
  storeWide: {
    src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(5).png",
    alt: "Interior amplo da ZEISS Vision Center Araguaína",
    type: "environment",
    fit: "cover",
    position: "center center",
    ratio: "16 / 9",
  },
  storeCurved: {
    src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(4).png",
    alt: "Curadoria de armações dentro da ZEISS Vision Center Araguaína",
    type: "environment",
    fit: "cover",
    position: "center 45%",
    ratio: "16 / 10",
  },
  storeDesk: {
    src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(2).png",
    alt: "Ambiente de atendimento e tecnologia ZEISS",
    type: "environment",
    fit: "cover",
    position: "center 35%",
    ratio: "4 / 5",
  },
  glassesProduct: {
    src: "/assets/glasses/eyeglasses-hero.webp",
    alt: "Armação premium em fundo óptico conceitual",
    type: "product",
    fit: "contain",
    position: "center center",
    ratio: "16 / 9",
  },
} satisfies Record<string, PremiumImageAsset>;
