import { Applications } from "@/components/sections/applications/applications";
import { ContactForm } from "@/components/sections/contact-form/contact-form";
import { ProductHero } from "@/components/sections/product-hero/product-hero";
import { WhyRent } from "@/components/sections/why-rent/why-rent";
import { whyRentItems } from "@/lib/utils";
const applications = [
  {
    title: "Processamento Pesado",
    icon: "/images/icons/Group.png",
    description:
      "Workstations de alta performance para renderização, simulações e processamento de dados complexos.",
  },
  {
    title: "Produção de Vídeo",
    icon: "/images/icons/Layer_1.png",
    description:
      "Edição profissional de vídeo, motion graphics e pós-produção com hardware especializado.",
  },
  {
    title: "Desenvolvimento",
    icon: "/images/icons/Vector.png",
    description:
      "Ambientes de desenvolvimento robustos para programação, compilação e testes de software.",
  },
  {
    title: "Análise de Dados",
    icon: "/images/icons/Vector.png",
    description:
      "Processamento de big data, machine learning e análises estatísticas avançadas.",
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
          bannerSrc="/images/efe4269e88c5263217463a007ba5acb33b88cc6c.png"
          bannerClassName="object-[100%_34%]"
        />
        <ContactForm />
      </main>
    </div>
  );
}
