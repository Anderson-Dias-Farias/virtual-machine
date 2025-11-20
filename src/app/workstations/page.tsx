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
    title: "Processamento Pesado",
    description:
      "Workstations de alta performance para renderização, simulações e processamento de dados complexos.",
  },
  {
    title: "Produção de Vídeo",
    description:
      "Edição profissional de vídeo, motion graphics e pós-produção com hardware especializado.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Ambientes de desenvolvimento robustos para programação, compilação e testes de software.",
  },
  {
    title: "Análise de Dados",
    description:
      "Processamento de big data, machine learning e análises estatísticas avançadas.",
  },
];

const products = [
  {
    id: "1",
    name: "Workstation Dell Precision",
    specs: ["Intel Xeon", "32GB+ RAM", "SSD NVMe"],
  },
];

export default function WorkstationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ProductHero
          title="Workstations de Alta Performance"
          description="Potência e confiabilidade para tarefas exigentes. Workstations profissionais para sua equipe."
          ctaText="descubra a workstation ideal para você"
          imageSrc="/images/workstation-hero.png"
        />
        <WhyRent
          title="Por Que Alugar Workstations Conosco?"
          items={whyRentItems}
        />
        <Applications
          title="Aplicações Ideais para Workstations"
          applications={applications}
        />
        <ProductsCarousel title="Produtos mais assinados" products={products} />
        <ContactForm />
      </main>
    </div>
  );
}
