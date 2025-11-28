import { Applications } from "@/components/sections/applications/applications";
import { ContactForm } from "@/components/sections/contact-form/contact-form";
import { ProductHero } from "@/components/sections/product-hero/product-hero";
import { ProductsCarousel } from "@/components/sections/products-carousel/products-carousel";
import { WhyRent } from "@/components/sections/why-rent/why-rent";
import { whyRentItems } from "@/lib/utils";

const applications = [
  {
    title: "Vendas e Atendimento",
    icon: "/images/icons/cliente 1.png",
    description:
      "Apresentações premium e catálogos digitais com iPad e MacBook. Integração total com iPhone e CRM para atendimento ágil.",
  },
  {
    title: "Eventos e Feiras",
    icon: "/images/icons/Layer_1.png",
    description:
      "Credenciamento e pesquisas com iPad e iPhone.Desempenho confiável e câmeras de alta qualidade para registro.",
  },
  {
    title: "Treinamentos",
    icon: "/images/icons/Vector.png",
    description:
      "iPad com Apple Pencil e apps didáticos interativos. MacBook ideal para aulas online e edição de conteúdo.",
  },
  {
    title: "Logística e Campo",
    icon: "/images/icons/local (1) 1.png",
    description:
      "iPhone e iPad com GPS e coleta de dados em tempo real. Sincronização segura via iCloud e longa autonomia.",
  },
];

const products = [
  {
    id: "1",
    name: "MacBook Pro 14 M4",
    image: "/images/5fdab2a0d334cb4406335d8a8b0dcbe87f130cfc.png",
    specs: ["SSD512GB", "Apple Chip M4", "16GB+ RAM"],
  },
];

export default function ApplePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ProductHero
          title="O Ecossistema Apple a Serviço da Sua Empresa"
          description="Inovação, design e performance incomparáveis. Alugue iPhones, iPads, MacBooks e iMacs."
          ctaText="descubra as soluções apple"
          imageSrc="/images/apple-hero.png"
        />
        <WhyRent
          title="Por Que Alugar Equipamentos Apple Conosco?"
          items={whyRentItems}
        />
        <Applications
          title="Aplicações Ideais para Equipamentos Apple"
          applications={applications}
        />
        <ProductsCarousel title="Produtos mais assinados" products={products} />
        <ContactForm />
      </main>
    </div>
  );
}
