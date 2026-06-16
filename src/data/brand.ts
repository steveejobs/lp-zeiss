export const WHATSAPP_PHONE = "5563993012626";
export const LINA_WHATSAPP_PHONE = WHATSAPP_PHONE;

export const whatsappMessages = {
  site:
    "Olá, vim pelo site da ZEISS Vision Center Araguaína e quero agendar uma experiência ZEISS.",
  bio: "Olá, vim pelo site da ZEISS Vision Center Araguaína e quero agendar uma experiência ZEISS.",
  frames:
    "Olá, quero conhecer a curadoria de armações premium da ZEISS Vision Center Araguaína.",
  sunglasses:
    "Olá, quero conhecer óculos de sol premium na ZEISS Vision Center Araguaína.",
  drive:
    "Olá, quero falar sobre lentes ZEISS DriveSafe para dirigir com mais conforto.",
  screens:
    "Olá, quero falar sobre lentes ZEISS para telas e rotina digital.",
  collections:
    "Olá, quero conhecer armações selecionadas na ZEISS Vision Center Araguaína.",
  proposal:
    "Olá, vi a proposta da ZEISS Vision Center Araguaína e quero falar sobre o projeto.",
};

export function buildWhatsAppUrl(message: string, phone = WHATSAPP_PHONE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const brandColors = {
  zeissBlue: "#141E8C",
  zeissBlueDeep: "#0A0F5C",
  midnight: "#030615",
  ink: "#070A1F",
  royal: "#111A86",
  white: "#FFFFFF",
  ice: "#F4F7FF",
  silver: "#D8DDE8",
  platinum: "#AEB7C9",
};

const rawAddress =
  "Doha Center - Av. José de Brito, 366 - Loja 2 - Setor Anhanguera, Araguaína - TO, 77818-530, Brasil";
const encodedAddress = encodeURIComponent(rawAddress);

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
  fullAddress: rawAddress,
  phoneDisplay: "+55 63 99301-2626",
  phoneE164: "+5563993012626",
  instagram: "@zeissvisioncenter_araguaina",
  instagramUrl: "https://www.instagram.com/zeissvisioncenter_araguaina/",
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
    "Precisão alemã, tecnologia ZEISS e atendimento consultivo em Araguaína.",
  promiseNote:
    "Lentes escolhidas para sua rotina, seu estilo e sua forma de enxergar.",
  logoIcon: "/galeria%20cole%C3%A7%C3%A3o/zeiss%20logo.png",
  logoWide: "/galeria%20cole%C3%A7%C3%A3o/zeiss%20logo.png",
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
  locations: [
    {
      id: "doha-center",
      name: "Doha Center",
      address: rawAddress,
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
  { label: "Experiência", href: "#experiencia" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Curadoria", href: "#curadoria" },
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
    name: "Neciane Gomes Pacifico",
    text: "Produto de alta qualidade. Um investimento na visão. Atendimento de excelência.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Helena Andrade Rocha",
    text: "Lentes de alta qualidade, leveza e conforto aos olhos.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Eurivan Lima",
    text: "Atendimento excelente, grande variedade de produtos e reconhecida qualidade ZEISS.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Wagner dos Santos Mariano",
    text: "Local acolhedor, vários modelos e atendimento muito atencioso.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Gabriella Verissimo",
    text: "Loja linda, elegante, produtos de alta qualidade e atendimento impecável.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Karina Lagares",
    text: "Atendimento impecável, equipe atenciosa, variedade e lentes de alta qualidade.",
    rating: 5,
    source: "Google",
  },
];
