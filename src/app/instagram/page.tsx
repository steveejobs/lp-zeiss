import type { Metadata } from "next";
import { InstagramConcierge } from "@/components/InstagramConcierge";
import { premiumImages } from "@/data/premiumImages";

export const metadata: Metadata = {
  title: "ZEISS Concierge | ZEISS Vision Center Araguaína",
  description:
    "Entrada mobile premium da ZEISS Vision Center Araguaína para agendamento, rotina visual, localização, avaliações e Instagram oficial.",
  alternates: {
    canonical: "/instagram",
  },
  openGraph: {
    title: "ZEISS Concierge | ZEISS Vision Center Araguaína",
    description:
      "Lentes ZEISS, armações premium e atendimento consultivo no Doha Center.",
    type: "website",
    images: [
      {
        url: premiumImages.storeWide.src,
        width: 1200,
        height: 630,
        alt: premiumImages.storeWide.alt,
      },
    ],
  },
};

export default function InstagramBioPage() {
  return <InstagramConcierge />;
}
