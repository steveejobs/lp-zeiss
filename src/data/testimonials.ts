export type TestimonialTheme = "qualidade" | "atendimento" | "ambiente" | "confiança";

export type Testimonial = {
  name: string;
  quote: string;
  text: string;
  source: "Google";
  theme: TestimonialTheme;
  rating: 5;
};

const makeTestimonial = (
  name: string,
  quote: string,
  theme: TestimonialTheme,
): Testimonial => ({
  name,
  quote,
  text: quote,
  source: "Google",
  theme,
  rating: 5,
});

export const testimonials: Testimonial[] = [
  makeTestimonial(
    "Neciane Gomes Pacifico",
    "Produto de alta qualidade. Um investimento na visão. Atendimento de excelência.",
    "qualidade",
  ),
  makeTestimonial(
    "Helena Andrade Rocha",
    "Lentes de alta qualidade, leveza e conforto aos olhos.",
    "qualidade",
  ),
  makeTestimonial(
    "Eurivan Lima",
    "Atendimento excelente, grande variedade de produtos e reconhecida qualidade ZEISS.",
    "atendimento",
  ),
  makeTestimonial(
    "Wagner dos Santos Mariano",
    "Local acolhedor, vários modelos e atendimento muito atencioso.",
    "ambiente",
  ),
  makeTestimonial(
    "Gabriella Verissimo",
    "Loja linda, elegante, produtos de alta qualidade e atendimento impecável.",
    "ambiente",
  ),
  makeTestimonial(
    "Karina Lagares",
    "Atendimento impecável, equipe atenciosa, variedade e lentes de alta qualidade.",
    "atendimento",
  ),
  makeTestimonial(
    "Denis Duarte",
    "Atendimento impecável e excelente conhecimento sobre os produtos.",
    "confiança",
  ),
  makeTestimonial(
    "Soldado Maroto",
    "Explicação didática e orientação sobre a melhor escolha de lente.",
    "confiança",
  ),
  makeTestimonial(
    "Bruna Sousa",
    "Profissionais capacitados. Atendimento de qualidade e confiança.",
    "confiança",
  ),
  makeTestimonial(
    "Fernanda Motta",
    "Estrutura aconchegante, elegante e atendentes maravilhosos.",
    "ambiente",
  ),
];

export const testimonialsSummary = {
  rating: 5,
  total: 117,
  source: "Google",
};
