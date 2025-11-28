import { Button } from "@/components/ui/button";
import { DialogContact } from "@/components/ui/DialogContact";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden w-full min-h-[520px] bg-white  border-b border-b-22 border-b-[var(--azul)]">
      <div className="w-full pt-5">
        <div className="container mx-auto  py-20 relative z-10 overflow-visible">
          <div className="flex flex-col md:flex-row gap-12 items-center overflow-visible ">
            {/* Content */}
            <div className="max-w-[500px] w-full flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left">
              <div className="space-y-6 mb-8 px-4 md:px-0 xl:px-0">
                <h1 className="text-2xl xl:text-4xl font-semibold text-[var(--preto)] mt-10 md:mt-0">
                  <span className="text-[var(--azul)]">
                    {" "}
                    Locação de Equipamentos <br />
                  </span>{" "}
                  de T.I. sob Medida para Sua Empresa
                </h1>
                <p className="text-sm xl:text-xl text-[var(--preto)] opacity-80 leading-relaxed md:max-w-[400px]">
                  Transforme sua operação com tecnologia flexível e escalável,
                  sem descapitalizar sua empresa.
                </p>
              </div>
              <DialogContact
                trigger={
                  <Button className="bg-gradient-to-r from-[var(--azul)] to-[var(--azul-dark)] max-w-[400px] text-white rounded-full px-8 py-6 text-[12px]  md:text-sm font-medium hover:opacity-90 transition-opacity">
                    Solicitar orçamento personalizado
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                }
              />
            </div>

            {/* Images Grid */}
            <div className="relative h-[300px] md:h-[400px] xl:h-[450px] w-full overflow-visible">
              {/* Imagem 1 - Fundo */}
              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/hero-image-1.png"
                  alt="Equipamentos de TI"
                  fill
                  className="lg:object-cover object-contain rounded-lg -translate-y-1/16 md:translate-y-1/10 lg:-translate-y-1/8 xl:-translate-y-0 scale-80 xl:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Container para imagens lado a lado - mais largo que o pai */}
              <div className="absolute z-20 flex items-end left-1/2 -translate-x-1/2 w-[140%] h-full overflow-hidden">
                {/* Imagem 2 - Lado esquerdo */}
                <div className="relative bottom-0 w-full  h-full translate-x-1/4 translate-y-1/6">
                  <Image
                    src="/images/hero-image-2.png"
                    alt="Tecnologia"
                    fill
                    className="object-contain rounded-lg lg:scale-150 scale-100"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                {/* Imagem 3 - Lado direito */}
                <div className="relative bottom-0 w-full  h-full -translate-x-1/28 translate-y-1/6 xl:translate-x-1/8 xl:translate-y-1/4">
                  <Image
                    src="/images/hero-image-3.png"
                    alt="Soluções de TI"
                    fill
                    className="object-contain rounded-lg lg:scale-110 scale-80"
                    sizes="(max-width: 768px) 50vw, 25vw"
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
