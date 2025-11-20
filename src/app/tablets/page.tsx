import { Applications } from "@/components/sections/applications/applications";
import { ContactForm } from "@/components/sections/contact-form/contact-form";
import { ProductHero } from "@/components/sections/product-hero/product-hero";
import { ProductsCarousel } from "@/components/sections/products-carousel/products-carousel";
import { WhyRent } from "@/components/sections/why-rent/why-rent";

const whyRentItems = [
  {
    title: "Tecnologia Atualizada",
    description: "Sempre com os modelos mais recentes",
  },
  {
    title: "Suporte Técnico",
    description: "Equipe especializada à disposição",
  },
  {
    title: "Flexibilidade",
    description: "Aumente ou diminua conforme demanda",
  },
  {
    title: "Redução de Custos",
    description: "Elimine gastos com manutenção",
  },
];

const applications = [
  {
    title: "Vendas e Atendimento",
    description: "Catálogos digitais e formulários interativos",
  },
  {
    title: "Eventos e Feiras",
    description: "Credenciamento e pesquisas de satisfação",
  },
  {
    title: "Treinamentos",
    description: "Material didático interativo",
  },
  {
    title: "Logística e Campo",
    description: "Coleta de dados e gestão de estoque",
  },
];

const products = [
  {
    id: "1",
    name: "Samsung A9",
    image: "/images/samsung-a9.png",
    specs: ["11 Polegadas", "Androide 13", "64 GB DE ARMAZENAMENTO"],
  },
  {
    id: "2",
    name: "Ipad 11",
    image: "/images/ipad-11-6aae9f.png",
    specs: [
      "11 Polegadas",
      "Apple A16 Bionic",
      "64 OU 256 GB DE ARMAZENAMENTO",
    ],
  },
];

export default function TabletsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ProductHero
          title="A Versatilidade que Sua Empresa Precisa"
          description="Leveza, interatividade e alta performance para vendas, eventos, treinamentos e muito mais."
          ctaText="conheça nossos modelos e aplicações"
          imageSrc="/images/tablet-hero.png"
        />
        <WhyRent title="Por Que Alugar Tablets Conosco?" items={whyRentItems} />
        <Applications
          title="Aplicações Ideais para Tablets"
          applications={applications}
        />
        <ProductsCarousel title="Produtos mais assinados" products={products} />
        <ContactForm />
      </main>
    </div>
  );
}
