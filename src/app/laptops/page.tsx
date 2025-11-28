import { Applications } from "@/components/sections/applications/applications";
import { ContactForm } from "@/components/sections/contact-form/contact-form";
import { ProductHero } from "@/components/sections/product-hero/product-hero";
import { ProductsCarousel } from "@/components/sections/products-carousel/products-carousel";
import { WhyRent } from "@/components/sections/why-rent/why-rent";

const whyRentItems = [
  {
    icon: "/images/icons/icon-tecnologia-atualizada.svg",
    title: "Tecnologia Atualizada",
    description: "Sempre com os modelos mais recentes",
  },
  {
    icon: "/images/icons/icon-suporte-tecnico.svg",
    title: "Suporte Técnico",
    description: "Equipe especializada à disposição",
  },
  {
    icon: "/images/icons/icon-flexibilidade.svg",
    title: "Flexibilidade",
    description: "Aumente ou diminua conforme demanda",
  },
  {
    icon: "/images/icons/icon-reducao-custos.svg",
    title: "Redução de Custos",
    description: "Elimine gastos com manutenção",
  },
];

const applications = [
  {
    icon: "/images/icons/Processing.png",
    title: "Trabalho e Produtividade",
    description:
      "Maximize sua performance com ferramentas completas para planilhas, apresentações e colaboração em equipe — tudo com agilidade e precisão.",
  },
  {
    icon: "/images/icons/Group (1).png",
    title: "Design e Criação",
    description:
      "Dê vida às suas ideias! Laptops oferecem potência e flexibilidade para edição de imagens, vídeos e projetos de alto desempenho.",
  },
  {
    icon: "/images/icons/_x36_5.png",
    title: "Educação e Pesquisa",
    description:
      "Estude, crie e compartilhe conhecimento com plataformas interativas e recursos ideais para aprendizado remoto ou presencial.",
  },
  {
    icon: "/images/icons/Vector (1).png",
    title: "Gestão Empresarial",
    description:
      "Mantenha o controle total do seu negócio com sistemas de gestão, relatórios em tempo real e análises estratégicas na tela do seu notebook.",
  },
];

const products = [
  {
    id: "1",
    name: "NOTEBOOK DELL LATITUDE 3420",
    image: "/images/notebook-dell-latitude.png",
    specs: ["WINDOWS 11PRO", "CORE I5", "08 GB DDR4 MEMORIA"],
  },
  {
    id: "2",
    name: "Notebook Dell Pro 16",
    image: "/images/notebook-dell-pro.png",
    specs: ["SSD 512GB", "CORE i5-1345U 4.70 GHz", "16GB MEMORIA"],
  },
  {
    id: "3",
    name: "NOTEBOOK LENOVO V14 CORE I5",
    image: "/images/notebook-lenovo-78fd74.png",
    specs: ["WINDOWS 11PRO", "CORE i5-1135G7 2.40 GHz", "16GB MEMORIA DDR4"],
  },
];

export default function LaptopsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ProductHero
          title="Laptops de Alta Performance para Sua Equipe"
          description="Mobilidade, poder e flexibilidade para o dia a dia da sua empresa. Alugue os melhores modelos do mercado."
          ctaText="ver modelos e Solicitar orçamento"
          imageSrc="/images/laptop-hero.png"
        />
        <WhyRent title="Por Que Alugar Laptops Conosco?" items={whyRentItems} />
        <Applications
          title="Aplicações Ideais para Laptops"
          applications={applications}
          bannerSrc="/images/applications-laptops-banner.png"
        />
        <ProductsCarousel title="Produtos mais assinados" products={products} />
        <ContactForm />
      </main>
    </div>
  );
}
