import type { Metadata, Viewport } from "next";
import { localBusinessJsonLd, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "ZEISS Vision Center Araguaína | Lentes ZEISS, Óculos e Atendimento Premium",
  description:
    "Conheça a ZEISS Vision Center Araguaína. Lentes ZEISS, armações selecionadas, atendimento consultivo e experiência premium em tecnologia visual.",
  keywords: [
    "ZEISS Araguaína",
    "ZEISS Vision Center Araguaína",
    "lentes ZEISS Araguaína",
    "ótica premium em Araguaína",
    "óculos de grau Araguaína",
    "lentes progressivas Araguaína",
    "lentes para dirigir Araguaína",
    "lentes para computador Araguaína",
    "ótica no Setor Anhanguera",
    "ótica no Doha Center",
  ],
  icons: {
    icon: [{ url: site.logoIcon, type: "image/jpeg" }],
    shortcut: site.logoIcon,
    apple: [{ url: site.logoIcon, type: "image/jpeg" }],
  },
  openGraph: {
    title:
      "ZEISS Vision Center Araguaína | Lentes ZEISS, Óculos e Atendimento Premium",
    description:
      "Lentes ZEISS, armações selecionadas, atendimento consultivo e experiência premium em tecnologia visual.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: site.logoIcon,
        width: 1200,
        height: 1200,
        alt: "Logo da ZEISS Vision Center Araguaína",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#001E82",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
