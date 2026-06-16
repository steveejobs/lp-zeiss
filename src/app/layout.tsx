import type { Metadata, Viewport } from "next";
import { localBusinessJsonLd, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZEISS Vision Center Araguaína | Lentes ZEISS e Experiência Premium",
  description:
    "Lentes ZEISS, curadoria de armações e atendimento consultivo em uma experiência premium no Doha Center, em Araguaína.",
  keywords: [
    "ZEISS Araguaína",
    "ZEISS Vision Center Araguaína",
    "lentes ZEISS Araguaína",
    "ótica premium em Araguaína",
    "óculos de grau Araguaína",
    "lentes progressivas Araguaína",
    "lentes para dirigir Araguaína",
    "ótica no Doha Center",
  ],
  icons: {
    icon: [{ url: site.logoIcon, type: "image/png" }],
    shortcut: site.logoIcon,
    apple: [{ url: site.logoIcon, type: "image/png" }],
  },
  openGraph: {
    title: "ZEISS Vision Center Araguaína | Precisão Óptica Premium",
    description:
      "Lentes ZEISS, armações selecionadas e atendimento consultivo no Doha Center, em Araguaína.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: site.heroImage,
        width: 1200,
        height: 630,
        alt: "ZEISS Vision Center Araguaína",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#141E8C",
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
