import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - Virtual Machine",
  description: "Política de Privacidade da Virtual Machine",
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--preto)] mb-4 leading-[1.5em]">
                Política de Privacidade
              </h1>
              <p className="text-sm md:text-base text-[var(--cinza-2)]">
                Última atualização:{" "}
                {new Date().toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 md:space-y-8 text-[var(--preto)]">
                {/* Introdução */}
                <section>
                  <p className="text-base md:text-lg leading-[1.6em] text-[var(--preto)]">
                    A Virtual Machine (&quot;nós&quot;, &quot;nosso&quot; ou
                    &quot;empresa&quot;) está comprometida em proteger a
                    privacidade e os dados pessoais de nossos clientes e
                    visitantes. Esta Política de Privacidade descreve como
                    coletamos, usamos, armazenamos e protegemos suas informações
                    pessoais quando você utiliza nossos serviços ou acessa nosso
                    site.
                  </p>
                </section>

                {/* 1. Informações que Coletamos */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    1. Informações que Coletamos
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-[var(--preto)] mb-2">
                        1.1. Informações Fornecidas por Você
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-[1.6em] ml-4">
                        <li>Nome completo</li>
                        <li>Endereço de e-mail</li>
                        <li>Número de telefone</li>
                        <li>Endereço residencial ou comercial</li>
                        <li>Informações de pagamento</li>
                        <li>Documentos de identificação (quando necessário)</li>
                        <li>Informações sobre sua empresa ou organização</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-[var(--preto)] mb-2">
                        1.2. Informações Coletadas Automaticamente
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-[1.6em] ml-4">
                        <li>Endereço IP</li>
                        <li>Tipo de navegador e sistema operacional</li>
                        <li>Páginas visitadas e tempo de permanência</li>
                        <li>Data e hora de acesso</li>
                        <li>Cookies e tecnologias similares</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 2. Como Usamos suas Informações */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    2. Como Usamos suas Informações
                  </h2>
                  <p className="text-base md:text-lg leading-[1.6em] mb-4">
                    Utilizamos suas informações pessoais para os seguintes fins:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-[1.6em] ml-4">
                    <li>
                      Processar e gerenciar solicitações de locação de
                      equipamentos
                    </li>
                    <li>Fornecer suporte técnico e atendimento ao cliente</li>
                    <li>Comunicar-nos com você sobre nossos serviços</li>
                    <li>Processar pagamentos e gerenciar contratos</li>
                    <li>Melhorar nossos serviços e experiência do usuário</li>
                    <li>
                      Enviar comunicações de marketing (com seu consentimento)
                    </li>
                    <li>Cumprir obrigações legais e regulatórias</li>
                    <li>Prevenir fraudes e garantir a segurança</li>
                  </ul>
                </section>

                {/* 3. Compartilhamento de Informações */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    3. Compartilhamento de Informações
                  </h2>
                  <p className="text-base md:text-lg leading-[1.6em] mb-4">
                    Não vendemos suas informações pessoais. Podemos compartilhar
                    seus dados apenas nas seguintes situações:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-[1.6em] ml-4">
                    <li>
                      <strong>Prestadores de serviços:</strong> Compartilhamos
                      com parceiros que nos auxiliam na operação do negócio
                      (processamento de pagamentos, hospedagem, etc.)
                    </li>
                    <li>
                      <strong>Obrigações legais:</strong> Quando exigido por lei
                      ou ordem judicial
                    </li>
                    <li>
                      <strong>Proteção de direitos:</strong> Para proteger
                      nossos direitos, propriedade ou segurança, bem como de
                      nossos clientes
                    </li>
                    <li>
                      <strong>Com seu consentimento:</strong> Em outras
                      situações, quando você autorizar expressamente
                    </li>
                  </ul>
                </section>

                {/* 4. Segurança dos Dados */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    4. Segurança dos Dados
                  </h2>
                  <p className="text-base md:text-lg leading-[1.6em]">
                    Implementamos medidas de segurança técnicas e
                    organizacionais adequadas para proteger suas informações
                    pessoais contra acesso não autorizado, alteração, divulgação
                    ou destruição. Isso inclui criptografia, controles de acesso
                    e monitoramento regular de nossos sistemas.
                  </p>
                </section>

                {/* 5. Seus Direitos */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    5. Seus Direitos
                  </h2>
                  <p className="text-base md:text-lg leading-[1.6em] mb-4">
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), você
                    tem os seguintes direitos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-[1.6em] ml-4">
                    <li>
                      <strong>Acesso:</strong> Solicitar acesso aos seus dados
                      pessoais
                    </li>
                    <li>
                      <strong>Correção:</strong> Solicitar a correção de dados
                      incompletos ou desatualizados
                    </li>
                    <li>
                      <strong>Exclusão:</strong> Solicitar a exclusão de dados
                      desnecessários ou tratados em desconformidade
                    </li>
                    <li>
                      <strong>Portabilidade:</strong> Solicitar a portabilidade
                      dos seus dados
                    </li>
                    <li>
                      <strong>Revogação:</strong> Revogar seu consentimento a
                      qualquer momento
                    </li>
                    <li>
                      <strong>Oposição:</strong> Opor-se ao tratamento de seus
                      dados
                    </li>
                  </ul>
                  <p className="text-base md:text-lg leading-[1.6em] mt-4">
                    Para exercer seus direitos, entre em contato conosco através
                    do e-mail:{" "}
                    <a
                      href="mailto:contato@virtualmachine.com.br"
                      className="text-[var(--azul)] hover:underline"
                    >
                      contato@virtualmachine.com.br
                    </a>
                  </p>
                </section>

                {/* 6. Cookies */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    6. Cookies e Tecnologias Similares
                  </h2>
                  <p className="text-base md:text-lg leading-[1.6em]">
                    Utilizamos cookies e tecnologias similares para melhorar sua
                    experiência em nosso site, analisar o tráfego e personalizar
                    conteúdo. Você pode gerenciar suas preferências de cookies
                    através das configurações do seu navegador.
                  </p>
                </section>

                {/* 7. Retenção de Dados */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    7. Retenção de Dados
                  </h2>
                  <p className="text-base md:text-lg leading-[1.6em]">
                    Mantemos suas informações pessoais apenas pelo tempo
                    necessário para cumprir os fins para os quais foram
                    coletadas, incluindo requisitos legais, contábeis ou de
                    relatórios. Quando não houver mais necessidade de reter seus
                    dados, eles serão excluídos ou anonimizados de forma segura.
                  </p>
                </section>

                {/* 8. Alterações nesta Política */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    8. Alterações nesta Política
                  </h2>
                  <p className="text-base md:text-lg leading-[1.6em]">
                    Podemos atualizar esta Política de Privacidade
                    periodicamente. A versão mais recente estará sempre
                    disponível em nosso site, com a data da última atualização
                    indicada no topo desta página. Recomendamos que você revise
                    esta política regularmente.
                  </p>
                </section>

                {/* 9. Contato */}
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--azul)] mb-4 leading-[1.5em]">
                    9. Contato
                  </h2>
                  <p className="text-base md:text-lg leading-[1.6em] mb-4">
                    Se você tiver dúvidas, preocupações ou solicitações
                    relacionadas a esta Política de Privacidade ou ao tratamento
                    de seus dados pessoais, entre em contato conosco:
                  </p>
                  <div className="bg-[var(--cinza)] rounded-[20px] p-6 md:p-8 space-y-3">
                    <p className="text-base md:text-lg font-semibold text-[var(--preto)]">
                      Virtual Machine
                    </p>
                    <p className="text-base md:text-lg text-[var(--preto)]">
                      <strong>E-mail:</strong>{" "}
                      <a
                        href="mailto:contato@virtualmachine.com.br"
                        className="text-[var(--azul)] hover:underline"
                      >
                        contato@virtualmachine.com.br
                      </a>
                    </p>
                    <p className="text-base md:text-lg text-[var(--preto)]">
                      <strong>Telefone:</strong>{" "}
                      <a
                        href="tel:+551120847800"
                        className="text-[var(--azul)] hover:underline"
                      >
                        (11) 2084-7800
                      </a>
                    </p>
                    <p className="text-base md:text-lg text-[var(--preto)]">
                      <strong>Endereço:</strong> Rua Dom Valverde, 32 - Ipiranga
                      - São Paulo - SP
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}








