export const WHATSAPP_PHONE = "5563993012626";
export const LINA_WHATSAPP_PHONE = WHATSAPP_PHONE;

export const whatsappMessages = {
  site:
    "Olá, vim pelo site e quero agendar um atendimento na ZEISS Vision Center Araguaína.",
  bio: "Olá, vim pelo Instagram e quero agendar um atendimento na ZEISS Vision Center Araguaína.",
  frames:
    "Olá, vim pelo Instagram e quero conhecer armações premium na ZEISS Vision Center Araguaína.",
  sunglasses:
    "Olá, vim pelo Instagram e quero conhecer óculos de sol premium na ZEISS Vision Center Araguaína.",
  drive:
    "Olá, vim pelo site e quero falar sobre lentes ZEISS para dirigir.",
  screens:
    "Olá, vim pelo site e quero falar sobre lentes ZEISS para telas.",
  collections:
    "Olá, vim pelo site e quero conhecer armações selecionadas na ZEISS Vision Center Araguaína.",
  proposal:
    "Olá, vi a proposta da ZEISS Vision Center Araguaína e quero aprovar a atualização do projeto.",
};

export function buildWhatsAppUrl(message: string, phone = WHATSAPP_PHONE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const brandColors = {
  zeissBlue: "#001E82",
  zeissBlueDeep: "#06114D",
  electricBlue: "#18B7FF",
  opticalCyan: "#75D9FF",
  white: "#FFFFFF",
  silver: "#D8DEE8",
  graphite: "#111827",
  text: "#5B6575",
};

const encodedAddress =
  "ZEISS%20Vision%20Center%20Aragua%C3%ADna%20Doha%20Center%20Av.%20Jos%C3%A9%20de%20Brito%20366%20Loja%202%20Setor%20Anhanguera%20Aragua%C3%ADna%20TO%2077818-530";

export const site = {
  name: "ZEISS Vision Center Araguaína",
  shortName: "ZEISS Vision Center",
  legalName: "ZEISS Vision Center Araguaína",
  city: "Araguaína",
  region: "TO",
  streetAddress: "Doha Center - Av. José de Brito, 366 - Loja 2",
  neighborhood: "Setor Anhanguera",
  addressLocality: "Araguaína",
  addressRegion: "TO",
  postalCode: "77818-530",
  postalCountry: "BR",
  displayAddress:
    "Doha Center - Av. José de Brito, 366 - Loja 2 - Setor Anhanguera, Araguaína - TO",
  fullAddress:
    "Doha Center - Av. José de Brito, 366 - Loja 2 - Setor Anhanguera, Araguaína - TO, 77818-530, Brasil",
  phoneDisplay: "+55 63 99301-2626",
  phoneE164: "+5563993012626",
  instagram: "@zeissvisioncenteraraguaina",
  instagramUrl: "https://www.instagram.com/zeissvisioncenteraraguaina/",
  whatsappUrl: buildWhatsAppUrl(whatsappMessages.site),
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
  mapsRouteUrl: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodedAddress}&output=embed`,
  rating: 5,
  reviewCount: 117,
  openingHours: {
    weekdays: "Segunda a sexta: atendimento em horário comercial",
    saturday: "Sábado: consulte disponibilidade",
  },
  paymentSummary: "Atendimento consultivo",
  mainPromise:
    "Precisão alemã, tecnologia ZEISS e atendimento consultivo para uma experiência visual superior em Araguaína.",
  promiseNote:
    "Lentes escolhidas para sua rotina, seu estilo e sua forma de enxergar.",
  logoIcon: "/galeria%20cole%C3%A7%C3%A3o/zeiss%20logo.png",
  logoWide: "/galeria%20cole%C3%A7%C3%A3o/zeiss%20lo.jpg",
  heroImage: "/galeria%20cole%C3%A7%C3%A3o/qa%20(1).png",
  storeImages: [
    {
      src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(4).png",
      alt: "Interior da ZEISS Vision Center Araguaína com curadoria de armações",
    },
    {
      src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(5).png",
      alt: "Ambiente premium da ZEISS Vision Center Araguaína com iluminação técnica",
    },
    {
      src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(2).png",
      alt: "Atendimento consultivo dentro da ZEISS Vision Center Araguaína",
    },
    {
      src: "/galeria%20cole%C3%A7%C3%A3o/qa%20(3).png",
      alt: "Fachada da ZEISS Vision Center Araguaína no Doha Center",
    },
  ],
  lensImage:
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1400&q=82",
  locations: [
    {
      id: "doha-center",
      name: "Doha Center",
      address:
        "Doha Center - Av. José de Brito, 366 - Loja 2 - Setor Anhanguera, Araguaína - TO, 77818-530",
      streetAddress: "Doha Center - Av. José de Brito, 366 - Loja 2",
      neighborhood: "Setor Anhanguera",
      postalCode: "77818-530",
      phoneDisplay: "+55 63 99301-2626",
      phoneE164: "+5563993012626",
      whatsappPhone: WHATSAPP_PHONE,
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      mapsEmbedUrl: `https://www.google.com/maps?q=${encodedAddress}&output=embed`,
    },
  ],
};

export const navItems = [
  { label: "Experiência ZEISS", href: "#experiencia" },
  { label: "Tecnologias", href: "#rotina" },
  { label: "Curadoria", href: "#vitrine" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#contato" },
];

export const testimonialsSummary = {
  rating: 5,
  total: 117,
  source: "Google",
};

export type Testimonial = {
  name: string;
  text: string;
  rating: 5;
  source: "Google";
};

export const testimonials: Testimonial[] = [
  {
    name: "Cliente Google 01",
    text: "Produto de alta qualidade. É um investimento na visão, com leveza e conforto aos olhos.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Google 02",
    text: "Atendimento de excelência, profissionais capacitados e explicação didática para escolher a melhor lente.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Google 03",
    text: "Loja linda, elegante e acolhedora, com grande variedade de produtos e uma experiência muito agradável.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Google 04",
    text: "Atendimento impecável. A equipe orienta com paciência e transmite segurança em cada detalhe da escolha.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Google 05",
    text: "Lentes de alta qualidade, conforto visual e cuidado no pós-atendimento. Uma experiência premium.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Google 06",
    text: "Ambiente moderno, equipe atenciosa e muitas opções de armações para diferentes estilos.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Google 07",
    text: "A diferença está no atendimento consultivo: tudo é explicado de forma clara antes da escolha.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Google 08",
    text: "Qualidade, bom gosto e confiança. A loja entrega uma experiência acima do padrão.",
    rating: 5,
    source: "Google",
  },
];
