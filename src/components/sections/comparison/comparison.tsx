import { Button } from "@/components/ui/button";
import { DialogContact } from "@/components/ui/DialogContact";
import { ArrowRight } from "lucide-react";

const comparisonData = {
  characteristics: [
    "Investimento Inicial",
    "Fluxo de Caixa",
    "Tecnologia",
    "Manutenção e Suporte",
    "Flexibilidade",
  ],
  comprar: [
    "Alto investimento de capital",
    "Desembolso único que pode comprometer o capital de giro",
    "Risco de obsolescência rápida e necessidade de novas compras",
    "Responsabilidade e custos da empresa",
    "Dificuldade para escalar ou desativar equipamentos",
  ],
  locacao: [
    "Baixo ou inexistente",
    "Previsível, com pagamentos mensais fixos",
    "Sempre atualizada, com acesso aos modelos mais recentes",
    "Inclusos no contrato, sem custos adicionais",
    "Adaptação rápida a mudanças de demanda",
  ],
};

export function Comparison() {
  return (
    <section className="w-full bg-white py-16 md:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Title Section */}
          <div className="space-y-4 text-center max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl  font-semibold leading-tight md:max-w-xl mx-auto">
              <span className="text-[var(--azul)]">Alugar ou Comprar?</span> A
              Escolha Inteligente para Seu Negócio.
            </h2>
            <p className="sm:text-base text-sm md:text-lg text-black opacity-80 max-w-3xl mx-auto font-semibold">
              A decisão entre adquirir ou alugar equipamentos de TI é
              estratégica. Para te ajudar a visualizar os benefícios da locação,
              preparamos um comparativo direto:
            </p>
          </div>

          {/* Comparison Tables */}
          <div className="flex flex-col md:flex-row justify-center gap-5">
            {/* Characteristics Table */}
            <div className="w-full md:w-[300px] rounded-[10px] overflow-hidden shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)] bg-white flex flex-col">
              <div className="bg-[var(--azul)] text-white font-semibold text-start p-4">
                Característica
              </div>
              <div className="flex flex-col">
                {comparisonData.characteristics.map((char, index) => (
                  <div
                    key={char}
                    className={
                      index % 2 === 0
                        ? "bg-white text-[var(--preto)] py-4 px-4  h-[70px] flex items-center justify-start w-full"
                        : "bg-[var(--azul)] text-white py-4 px-4 h-[70px] flex items-center justify-start w-full"
                    }
                  >
                    {char}
                  </div>
                ))}
              </div>
            </div>

            {/* Comprar Table */}
            <div className="w-full md:w-[350px] rounded-[10px] overflow-hidden shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)] bg-white flex flex-col">
              <div className="bg-[#dc2626] text-white font-semibold text-start p-4">
                Comprar Equipamentos
              </div>
              <div className="flex flex-col">
                {comparisonData.comprar.map((item, index) => (
                  <div
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white text-[var(--preto)] py-4 px-4 text-sm h-[70px] flex items-center justify-start w-full"
                        : "bg-[#fee2e2] text-[#dc2626] py-4 px-4 text-sm h-[70px] flex items-center justify-start w-full"
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Locação Table */}
            <div className="w-full md:w-[350px] rounded-[10px] overflow-hidden shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)] bg-white flex flex-col">
              <div className="bg-[#16a34a] text-white font-semibold text-start p-4">
                Locação de Equipamentos
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                {comparisonData.locacao.map((item, index) => (
                  <div
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white text-[var(--preto)] py-4 px-4 text-sm h-[70px] flex items-center justify-start w-full"
                        : "bg-[#dcfce7] text-[#16a34a] py-4 px-4 text-sm h-[70px] flex items-center justify-start w-full"
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <DialogContact
              trigger={
                <Button className="bg-gradient-to-r from-[var(--azul)] to-[var(--azul-dark)] max-w-[450px] text-white rounded-full px-8 py-6 text-[12px] md:text-sm font-medium hover:opacity-90 transition-opacity w-full md:w-auto">
                  Preserve seu capital e invista no core do seu negócio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
