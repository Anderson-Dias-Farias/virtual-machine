import { Applications } from "@/components/sections/applications/applications";
import { ContactForm } from "@/components/sections/contact-form/contact-form";
import { ProductsCarousel } from "@/components/sections/products-carousel/products-carousel";
import { WhyRent } from "@/components/sections/why-rent/why-rent";
import { Button } from "@/components/ui/button";
import { whyRentItems } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const applications = [
  {
    title: "Comunicação e Atendimento",
    icon: "/images/icons/cliente 1.png",
    description:
      "Mantenha sua equipe sempre conectada com clientes e parceiros através de chamadas, mensagens e aplicativos corporativos.",
  },
  {
    title: "Vendas e Marketing",
    icon: "/images/icons/Vector (2).png",
    description:
      "Aumente suas oportunidades com apps de vendas rápidas, campanhas personalizadas e acompanhamento de leads direto no celular.",
  },
  {
    title: "Serviços em Campo",
    icon: "/images/icons/local (1) 1.png",
    description:
      "Simplifique o trabalho fora do escritório — registre visitas, colete dados e acompanhe operações com praticidade e geolocalização.",
  },
  {
    title: "Consumo e Entretenimento",
    icon: "/images/icons/entretenimento 1.png",
    description:
      "Tenha diversão e praticidade ao alcance das mãos: vídeos, música, redes sociais e tudo o que conecta seu dia a dia.",
  },
];

const products = [
  {
    id: "1",
    name: "IPHONE 14",
    specs: ["Super Retina XDR", "IOS 16", "128GB+ ARMAZENAMENTO"],
    image: "/images/9e7f569a95bf2a95a4c91c9ae0bd632b1ddbfe18.png",
  },
  {
    id: "2",
    name: "IPHONE 15",
    specs: ["Super Retina XDR", "IOS 17", "128GB+ ARMAZENAMENTO"],
    image: "/images/2309cb672977c2bb6f7c5ddb638a65766b98d912.png",
  },
  {
    id: "3",
    name: "IPHONE 16",
    specs: ["Super Retina XDR", "IOS 18", "128GB+ ARMAZENAMENTO"],
    image: "/images/587978cc9d70ed746031f8cd9c8e56918f0e1c18.png",
  },
];

export default function CelularesPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex-1">
        <section
          className={`relative w-full min-h-[80dvh] md:min-h-[400px] xl:min-h-[545px] bg-[#CDDFF3] `}
        >
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8  relative z-10">
            <div className="flex flex-col md:flex-row gap-0 lg:gap-12 items-center justify-start lg:min-h-[50dvh] mx-auto">
              {/* Content */}
              <div className=" w-full pt-20 lg:pt-0 flex flex-col items-center justify-center md:items-start md:max-w-[500px]">
                <div className="space-y-[10px] mb-10 text-center md:text-left">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[var(--preto)] leading-[1.5em]">
                    Celulares Corporativos: Conectividade e Produtividade
                  </h1>
                  <p className="text-base md:text-lg lg:text-lg font-normal text-[var(--preto)] leading-[1.5em] max-w-[480px]">
                    Mantenha sua equipe sempre conectada com os smartphones mais
                    avançados do mercado.
                  </p>
                </div>

                <Button className="bg-gradient-to-r from-[var(--azul)] to-[var(--azul-dark)] text-white rounded-full px-5 md:py-[10px] text-[12px] md:text-base font-bold uppercase hover:opacity-90 transition-opacity w-full max-w-[400px] md:h-[60px] flex items-center justify-center gap-5">
                  explore nossos modelos e planos
                  <ArrowRight className="h-5 w-5 md:h-[27.61px] md:w-[30.02px]" />
                </Button>
              </div>
            </div>
            {/* Image */}
          </div>
          <Image
            src="/images/celular-hero.png"
            alt="A Versatilidade que Sua Empresa Precisa"
            width={1000}
            height={1000}
            className="object-contain    w-full h-full translate-x-[15%] -translate-y-[20%] md:translate-y-0  md:translate-x-[40%] lg:translate-x-1/3 2xl:translate-x-1/4 md:bottom-0   md:max-h-full mx-auto absolute  md:right-0 z-10"
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
          />
        </section>
        <WhyRent
          title="Por Que Alugar Celulares Conosco?"
          items={whyRentItems}
        />
        <Applications
          title="Aplicações Ideais para Celulares"
          applications={applications}
          bannerSrc="/images/06b63d10c68d6e24203f273c629e69178d8bc8a2.png"
          bannerClassName="object-[100%_16%]"
        />
        <ProductsCarousel title="Produtos mais assinados" products={products} />
        <ContactForm />
      </main>
    </div>
  );
}
