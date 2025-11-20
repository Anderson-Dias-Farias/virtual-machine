"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  return (
    <section className="w-full bg-[#FBFBFB] py-16 md:py-24 border-t-2 border-[var(--azul)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-5">
              <h2 className="text-[30px] font-semibold text-[var(--preto)] leading-[1.5em]">
                Tecnologia sem complicação para sua empresa crescer.
              </h2>
              <p className="text-[20px] font-normal text-[var(--preto)] leading-[1.5em]">
                Com a Virtual Machine, você reduz custos, aumenta a eficiência e
                libera sua equipe para o que realmente importa.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[20px] p-[29px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
              <form className="space-y-[40px]">
                <div className="grid md:grid-cols-2 gap-[40px]">
                  <div className="space-y-2">
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Nome"
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-[40px]">
                  <div className="space-y-2">
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="Telefone"
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="cnpj"
                      type="text"
                      placeholder="CNPJ"
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-[40px]">
                  <div className="space-y-2">
                    <Input
                      id="funcionarios"
                      type="text"
                      placeholder="Quantidade de funcionários"
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="empresa"
                      type="text"
                      placeholder="Nome da empresa"
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--azul)] to-[var(--azul-dark)] text-white rounded-full py-[10px] h-[60px] text-[17.94px] font-bold uppercase hover:opacity-90 transition-opacity leading-[1.5em]"
                >
                  Solicitar orçamento agora
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

