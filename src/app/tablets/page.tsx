import { Applications } from "@/components/sections/applications/applicationsv2";
import { ContactForm } from "@/components/sections/contact-form/contact-form";
import { ProductsCarousel } from "@/components/sections/products-carousel/products-carousel";
import { WhyRent } from "@/components/sections/why-rent/why-rent";
import { Button } from "@/components/ui/button";
import { DialogContact } from "@/components/ui/DialogContact";
import { whyRentItems } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const applications = [
  {
    title: "Vendas e Atendimento",
    description: "Catálogos digitais e formulários interativos",
    icon: "/images/icons/Group.png",
  },
  {
    title: "Eventos e Feiras",
    description: "Credenciamento e pesquisas de satisfação",
    icon: "/images/icons/Layer_1.png",
  },
  {
    title: "Treinamentos",
    description: "Material didático interativo",
    icon: "/images/icons/Vector.png",
  },
  {
    title: "Logística e Campo",
    description: "Coleta de dados e gestão de estoque",
    icon: "/images/icons/Vector.png",
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
    <div className=" flex flex-col overflow-hidden">
      <main className="flex-1">
        <section
          className={`relative w-full min-h-[80dvh] md:min-h-[400px] lg:min-h-[545px] bg-white `}
        >
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8  relative z-10">
            <div className="flex flex-col md:flex-row gap-0 lg:gap-12 items-center justify-start lg:min-h-[50dvh] mx-auto">
              {/* Content */}
              <div className=" w-full pt-20 lg:pt-0 flex flex-col items-center justify-center md:items-start md:max-w-[500px]">
                <div className="space-y-[10px] mb-10 text-center md:text-left">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[var(--preto)] leading-[1.5em]">
                    A Versatilidade que Sua Empresa Precisa
                  </h1>
                  <p className="text-base md:text-lg lg:text-lg font-normal text-[var(--preto)] leading-[1.5em] max-w-[480px]">
                    Leveza, interatividade e alta performance para vendas,
                    eventos, treinamentos e muito mais.
                  </p>
                </div>

                <DialogContact
                  trigger={
                    <Button className="bg-gradient-to-r from-[var(--azul)] to-[var(--azul-dark)] text-white rounded-full px-5 md:py-[10px] text-[12px] md:text-sm font-bold uppercase hover:opacity-90 transition-opacity w-full max-w-[400px] md:h-[60px] flex items-center justify-center gap-5">
                      conheça nossos modelos e aplicações
                      <ArrowRight className="h-5 w-5 md:h-[27.61px] md:w-[30.02px]" />
                    </Button>
                  }
                />
              </div>
            </div>
            {/* Image */}
          </div>
          <Image
            src="/images/tablet-hero.png"
            alt="A Versatilidade que Sua Empresa Precisa"
            width={1000}
            height={1000}
            className="object-cover  object-left-bottom  w-full h-full lg:max-w-[50vw] max-w-[70vw] md:max-w-[45vw] max-h-[350px] md:max-h-full mx-auto absolute bottom-0 right-0 z-10"
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
          />
        </section>
        <WhyRent title="Por Que Alugar Tablets Conosco?" items={whyRentItems} />
        <Applications
          title="Aplicações Ideais para Tablets"
          applications={applications}
          bannerSrc="/images/f2de727ebe89dabf66ab7cc42d8da2e1e4b6d83d.png"
        />
        <ProductsCarousel title="Produtos mais assinados" products={products} />
        <ContactForm />
      </main>
    </div>
  );
}
