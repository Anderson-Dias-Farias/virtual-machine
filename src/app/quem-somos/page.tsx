import { DialogContact } from "@/components/ui/DialogContact";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import Image from "next/image";

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full relative bg-[var(--azul)] py-16 md:py-24">
          <Image
            src="/images/application-3426397_1920-1024x597.jpg"
            alt="Quem Somos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Somos a melhor parceria tecnológica das empresas
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Desde 1999, a Virtual Machine oferece Tecnologia de Informação
                (TI) aos mais diversos segmentos corporativos, com soluções que
                buscam integrar os benefícios da alta tecnologia aos objetivos
                estratégicos do cliente e bem-estar dos usuários.
              </p>
            </div>
          </div>
        </section>

        {/* A EMPRESA Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--preto)] mb-4">
                  A EMPRESA
                </h2>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="text-6xl md:text-8xl font-bold text-[var(--azul)]">
                    20
                  </div>
                  <div className="text-left">
                    <div className="text-xl md:text-2xl font-semibold text-[var(--preto)]">
                      Anos de Experiência
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="bg-[var(--cinza)] rounded-[20px] p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4">
                    O que fazemos?
                  </h3>
                  <p className="text-base md:text-lg text-[var(--preto)] leading-relaxed">
                    Disponibilizamos para locação computadores e equipamentos
                    diversos na área de TI, além de suprimentos e consultoria
                    qualificada para agregar vantagens ao seu negócio.
                  </p>
                </div>

                <div className="bg-[var(--cinza)] rounded-[20px] p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4">
                    Como fazemos?
                  </h3>
                  <p className="text-base md:text-lg text-[var(--preto)] leading-relaxed">
                    Com uma equipe altamente especializada, garantimos
                    atendimento diferenciado, eficiência operacional e
                    produtividade em todos os níveis da empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOSSA PROPOSTA Section */}
        <section className="w-full bg-[var(--cinza)] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--preto)] mb-12 text-center">
                Somos a Virtual Machine
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Missão */}
                <div className="bg-white rounded-[20px] p-6 md:p-8 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--azul)] mb-4">
                    Missão
                  </h3>
                  <p className="text-sm md:text-base text-[var(--preto)] leading-relaxed">
                    Ser uma empresa que se recria a cada dia, tornando-se um dos
                    melhores e mais respeitados fornecedores de soluções na área
                    de Tecnologia da Informação.
                  </p>
                </div>

                {/* Visão */}
                <div className="bg-white rounded-[20px] p-6 md:p-8 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--azul)] mb-4">
                    Visão
                  </h3>
                  <p className="text-sm md:text-base text-[var(--preto)] leading-relaxed">
                    Nossa filosofia de trabalho é baseada na convicção de que o
                    ser humano é o elo mais importante da corrente de soluções
                    em um sistema corporativo saudável.
                  </p>
                </div>

                {/* Valores */}
                <div className="bg-white rounded-[20px] p-6 md:p-8 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--azul)] mb-4">
                    Valores
                  </h3>
                  <p className="text-sm md:text-base text-[var(--preto)] leading-relaxed">
                    Entregamos de forma ética, transparente, humana e
                    sustentável as melhores soluções de tecnologia. Apresentamos
                    resultados que superam as expectativas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NÚMEROS Section */}
        <section className="w-full bg-[var(--azul)] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">
                NÚMEROS QUE REVELAM NOSSO POTENCIAL
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-12 text-center max-w-3xl mx-auto">
                Entregamos rapidamente as melhores soluções para equipar e
                acelerar a performance das empresas, assim superamos as
                expectativas de nossos clientes.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={5200} prefix="+" duration={2000} />
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-white">
                    Negócios
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={2000} prefix="+" duration={2000} />
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-white">
                    Equipamentos
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={1200} prefix="+" duration={2000} />
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-white">
                    Clientes
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={20} duration={2000} />
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-white">
                    Anos de Empresa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais Competitivos Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--preto)] mb-12 text-center">
                Nossos Diferenciais Competitivos
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[var(--azul)] rounded-[20px] p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    Especialistas em Tecnologia
                  </h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Somos uma empresa focada em oferecer tecnologia de ponta
                    para todos os tipos de negócio.
                  </p>
                </div>

                <div className="bg-[var(--azul)] rounded-[20px] p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    Entregamos Soluções Reais
                  </h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Buscamos a parceria das melhores marcas do mercado como
                    Apple, Dell, HP, Lenovo, dentre outras.
                  </p>
                </div>

                <div className="bg-[var(--azul)] rounded-[20px] p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    Aprimoramos seu Negócio
                  </h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    Garantimos qualidade, segurança e performance para sua
                    operação, entregamos os melhores e mais modernos recursos
                    para potencializar sua empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustentabilidade Section */}
        <section className="w-full bg-[var(--cinza)] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[var(--preto)] mb-4">
                    Tecnologia com Responsabilidade Ambiental
                  </h2>
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--azul)] mb-4">
                    Consciência socioambiental também faz parte do nosso
                    negócio!
                  </h3>
                  <p className="text-base md:text-lg text-[var(--preto)] leading-relaxed">
                    Reduzir o descarte indiscriminado de produtos eletrônicos é
                    nossa missão, esses materiais quando lançados de forma
                    incorreta na natureza provocam danos ao meio ambiente e à
                    saúde das pessoas. Por isso, criamos soluções inteligentes e
                    sustentáveis para realizar o descarte adequado dos recursos
                    tecnológicos, assim, simplificamos essa tarefa também para
                    nossos clientes.
                  </p>
                </div>
                <div className="flex items-center justify-center min-h-[400px] rounded-[20px] p-8 text-center relative">
                  <Image
                    src="/images/blog_01.jpg"
                    alt="Sustainability"
                    fill
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className="object-cover w-auto absolute top-0 left-0"
                  />
                  ,<div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-20">
                    <div className="text-6xl md:text-8xl font-bold text-[var(--azul)] mb-2">
                      20
                    </div>
                    <div className="text-xl md:text-2xl font-semibold text-white">
                      Anos de Experiência
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parceiros Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--preto)] mb-12 text-center">
                Gigantes da Tecnologia
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="flex items-center justify-center h-46 w-full relative">
                  <Image
                    src="/images/logos/logo-apple.png"
                    alt="Apple"
                    fill
                    className="object-cover max-h-46 w-auto absolute top-0 left-0"
                  />
                </div>
                <div className="flex items-center justify-center h-46 w-full relative">
                  <Image
                    src="/images/logos/logo-dell.png"
                    alt="Dell"
                    fill
                    className="object-cover max-h-46 w-auto absolute top-0 left-0"
                  />
                </div>
                <div className="flex items-center justify-center h-46 w-full relative">
                  <Image
                    src="/images/logos/logo-hp.png"
                    alt="HP"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover max-h-46 w-auto absolute top-0 left-0"
                  />
                </div>
                <div className="flex items-center justify-center h-46 w-full relative">
                  <Image
                    src="/images/logos/logo-lenovo.png"
                    alt="Lenovo"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover max-h-46 w-auto absolute top-0 left-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-[var(--azul)] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Estamos prontos para oferecer a melhor solução em tecnologia
                para sua empresa.
              </h2>
              <DialogContact
                trigger={
                  <Button className="bg-white text-[var(--azul)] border-white rounded-full hover:bg-gray-50 px-8 py-6 text-base md:text-lg font-medium">
                    SOLICITE UM ORÇAMENTO
                  </Button>
                }
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
