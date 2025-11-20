import Image from "next/image";

const categories = [
  {
    icon: "/images/icons/icon-notebooks.svg",
    iconMais: "/images/icons/icon-mais-notebooks.svg",
    title: "Notebooks",
    description: "Mobilidade e performance para sua equipe",
  },
  {
    icon: "/images/icons/icon-tablets.svg",
    iconMais: "/images/icons/icon-mais-tablets.svg",
    title: "Tablets",
    description: "Versatilidade para vendas e eventos",
  },
  {
    icon: "/images/icons/icon-celulares.svg",
    iconMais: "/images/icons/icon-mais-celulares.svg",
    title: "Celulares",
    description: "Conectividade para sua força de trabalho",
  },
  {
    icon: "/images/icons/icon-workstations.svg",
    iconMais: "/images/icons/icon-mais-workstations.svg",
    title: "Workstations",
    description: "Potência para tarefas exigentes",
  },
  {
    icon: "/images/icons/icon-apple.svg",
    iconMais: "/images/icons/icon-mais-apple.svg",
    title: "Apple",
    description: "Inovação e design premium",
  },
  {
    icon: "/images/icons/icon-eventos.svg",
    iconMais: "/images/icons/icon-mais-eventos.svg",
    title: "Eventos",
    description: "Soluções completas para eventos",
  },
];

export function Categories() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-3xl font-semibold text-[var(--preto)] mb-6 md:mb-12 text-center leading-[1.5em]">
            Conheça Nossas{" "}
            <span className="text-[var(--azul)]">
              Categorias de Equipamentos
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[var(--azul)] border-[var(--azul)] border rounded-[20px] p-5 flex flex-col gap-5 relative h-full"
                style={{ paddingBottom: "60px" }}
              >
                <div>
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <h3 className="text-[20px] font-semibold text-white leading-[1.5em]">
                  {category.title}
                </h3>
                <p className="text-[16px] font-normal text-white leading-[1.5em]">
                  {category.description}
                </p>
                <div className="absolute bottom-5 right-5">
                  <Image
                    src={category.iconMais}
                    alt="Mais"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
