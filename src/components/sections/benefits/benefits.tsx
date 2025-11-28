"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const benefits = [
  {
    title: "Aumento da Produtividade",
    description:
      "Utilize os equipamentos mais modernos para obter alta performance de suas equipes e manter sua empresa altamente competitiva.",
  },
  {
    title: "Redução de Custos",
    description:
      "Elimine gastos com manutenção e atualizações. Pague apenas pelo que usar, quando precisar.",
  },
  {
    title: "Alta Escalabilidade",
    description:
      "Aumente ou diminua sua infraestrutura conforme a demanda do seu negócio, sem compromissos de longo prazo.",
  },
];

export function Benefits() {
  return (
    <section className="w-full py-8 md:py-10 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-3xl font-semibold text-[var(--preto)] mb-6 md:mb-12 md:text-left text-center leading-[1.5em]">
            <span className="text-[var(--azul)]">Principais Vantagens</span> da{" "}
            <br />
            Locação de Equipamentos de TI
          </h2>

          <div className="">
            <div className="bg-[var(--azul)] rounded-[40px] py-4 px-8 relative overflow-hidden flex flex-col md:flex-row">
              {/* Content with Accordion */}
              <div className="relative z-10 p-8 flex-1">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-0"
                  className="w-full max-w-[400px]"
                >
                  {benefits.map((benefit, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-none"
                    >
                      <AccordionTrigger className="hover:no-underline py-5 text-[#F5F5F7]">
                        <h3 className="text-lg md:text-xl font-semibold text-[#F5F5F7] leading-[1.5em] text-left">
                          {benefit.title}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="pt-0 pb-5">
                        <div className="flex flex-col gap-5">
                          <p className="text-sm md:text-base font-normal text-[#F5F5F7] leading-[1.5em]">
                            {benefit.description}
                          </p>
                          {index < benefits.length - 1 && (
                            <div className="bg-[#DCF1F5] h-px w-full" />
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Image on the right */}
              <div className="relative w-full md:w-auto md:flex-1 flex items-center justify-center md:justify-end">
                <div className="relative w-full h-[300px] md:h-[500px]">
                  <Image
                    src="/images/benefits-background.png"
                    alt="Benefits"
                    fill
                    className="object-contain"
                    style={{ objectPosition: "right" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
