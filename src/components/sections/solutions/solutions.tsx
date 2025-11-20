import Image from "next/image";

const solutions = [
  {
    icon: "/images/icons/icon-startups.svg",
    title: "Startups e Pequenas Empresas",
    description:
      "Cresça sem grandes investimentos iniciais. Tenha acesso a tecnologia de ponta para iniciar ou expandir suas operações.",
  },
  {
    icon: "/images/icons/icon-medias-grandes.svg",
    title: "Médias e Grandes Empresas",
    description:
      "Escalabilidade e modernização contínua do parque tecnológico. Renove sua infraestrutura sem descapitalizar.",
  },
  {
    icon: "/images/icons/icon-eventos.svg",
    title: "Eventos e Projetos Temporários",
    description:
      "Tecnologia de ponta para demandas pontuais. Ideal para feiras, congressos e qualquer projeto específico.",
  },
];

export function Solutions() {
  return (
    <section className="w-full bg-[var(--azul)] py-16 md:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[1560px] mx-auto w-full">
          <div className="bg-white rounded-[40px] px-6 py-10 md:px-10 md:py-14 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.01)] w-full">
            <h2 className="text-[32px] font-semibold text-[var(--preto)] leading-tight text-left mb-6 md:max-w-[500px]">
              <span className="text-[var(--azul)]">Soluções de TI</span> Sob
              Medida para Cada Necessidade
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[21px]">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-[var(--azul)] rounded-[20px] p-5 flex flex-col gap-5 w-full"
                >
                  <div>
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={50}
                      height={50}
                      className="w-[50px] h-[50px]"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F5F5F7] leading-[1.5em]">
                    {solution.title}
                  </h3>
                  <p className="text-base font-normal text-[#F5F5F7] leading-[1.5em]">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
