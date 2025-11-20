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
    title: "Comunicação e Atendimento",
    description:
      "Mantenha sua equipe sempre conectada com clientes e parceiros através de chamadas, mensagens e aplicativos corporativos.",
  },
  {
    title: "Gestão de Equipe",
    description:
      "Coordene equipes remotas e de campo com ferramentas de gestão e comunicação integradas.",
  },
  {
    title: "Vendas Externas",
    description:
      "Equipe de vendas sempre conectada com acesso a catálogos, cotações e sistemas de CRM em tempo real.",
  },
  {
    title: "E-commerce e Delivery",
    description:
      "Gerencie pedidos, entregas e atendimento ao cliente diretamente do dispositivo móvel.",
  },
];

const products = [
  {
    id: "1",
    name: "Smartphone Corporativo",
    specs: ["Android/iOS", "4G/5G", "64GB+ ARMAZENAMENTO"],
  },
];

export default function CelularesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ProductHero
          title="Celulares Corporativos: Conectividade e Produtividade"
          description="Mantenha sua equipe sempre conectada com os smartphones mais avançados do mercado."
          ctaText="explore nossos modelos e planos"
          bgColor="bg-[#CDDFF3]"
          imageSrc="/images/celular-hero.png"
        />
        <WhyRent
          title="Por Que Alugar Celulares Conosco?"
          items={whyRentItems}
        />
        <Applications
          title="Aplicações Ideais para Celulares"
          applications={applications}
        />
        <ProductsCarousel title="Produtos mais assinados" products={products} />
        <ContactForm />
      </main>
    </div>
  );
}
