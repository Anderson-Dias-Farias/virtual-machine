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
    title: "Design e Criatividade",
    description:
      "MacBooks e iMacs ideais para design gráfico, edição de vídeo e criação de conteúdo profissional.",
  },
  {
    title: "Inovação e Qualidade",
    description:
      "Tecnologia Apple para equipes que buscam excelência em design, performance e experiência do usuário.",
  },
  {
    title: "Segurança Corporativa",
    description:
      "Ambiente seguro e confiável para dados corporativos sensíveis e aplicações críticas.",
  },
  {
    title: "Performance Premium",
    description:
      "Chips M-series para máxima performance e eficiência energética em todas as tarefas.",
  },
];

const products = [
  {
    id: "1",
    name: "MacBook Pro",
    specs: ["Chip M3", "16GB+ RAM", "SSD 512GB+"],
  },
  {
    id: "2",
    name: "iMac",
    specs: ["Chip M3", "24 polegadas", "8GB+ RAM"],
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
