import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[520px] bg-white overflow-visible border-b border-b-22 border-b-[var(--azul)]">
      <div className="w-full pt-5">
        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10 overflow-visible">
          <div className="flex flex-col lg:flex-row gap-12 items-center overflow-visible ">
            {/* Content */}
            <div className="max-w-[500px] w-full flex flex-col justify-center gap-6">
              <div className="space-y-6 mb-8">
                <h1 className="text-4xl md:text-4xl font-semibold text-[var(--preto)]">
                  <span className="text-[var(--azul)]">
                    {" "}
                    Locação de Equipamentos <br />
                  </span>{" "}
                  de T.I. sob Medida para Sua Empresa
                </h1>
                <p className="text-lg md:text-xl text-[var(--preto)] opacity-80 leading-relaxed max-w-[400px]">
                  Transforme sua operação com tecnologia flexível e escalável,
                  sem descapitalizar sua empresa.
                </p>
              </div>

              <Button className="bg-gradient-to-r from-[var(--azul)] to-[var(--azul-dark)] max-w-[400px] text-white rounded-full px-8 py-6 text-base font-medium hover:opacity-90 transition-opacity">
                Solicitar orçamento personalizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Images Grid */}
            <div className="relative h-[400px] lg:h-[450px] w-full overflow-visible">
              {/* Imagem 1 - Fundo */}
              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/hero-image-1.png"
                  alt="Equipamentos de TI"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Container para imagens lado a lado - mais largo que o pai */}
              <div className="absolute z-20 flex items-end left-1/2 -translate-x-1/2 w-[140%] h-full overflow-visible">
                {/* Imagem 2 - Lado esquerdo */}
                <div className="relative bottom-0 w-full  h-full translate-x-1/4 translate-y-1/6">
                  <Image
                    src="/images/hero-image-2.png"
                    alt="Tecnologia"
                    fill
                    className="object-contain rounded-lg scale-150"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                {/* Imagem 3 - Lado direito */}
                <div className="relative bottom-0 w-full  h-full translate-x-1/8 translate-y-1/4">
                  <Image
                    src="/images/hero-image-3.png"
                    alt="Soluções de TI"
                    fill
                    className="object-contain rounded-lg scale-110"
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
