import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  solucoes: [
    { label: "Notebooks", href: "/laptops" },
    { label: "Tablets", href: "/tablets" },
    { label: "Celulares", href: "/celulares" },
    { label: "Workstations", href: "/workstations" },
    { label: "Apple", href: "/apple" },
    { label: "Eventos", href: "#" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contato", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-[var(--preto)] text-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-6 md:mb-8">
          {/* Logo and Description */}
          <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="mb-3 md:mb-4">
              <Image
                src="/images/logo-header.svg"
                alt="Virtual Machine"
                width={162}
                height={30}
                className="h-7 md:h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-[var(--cinza-2)] text-xs md:text-sm leading-relaxed max-w-md">
              A provedora número 1 em tecnologia para otimizar sua empresa.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-white text-sm md:text-base">
              Soluções
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--cinza-2)] text-xs md:text-sm hover:text-white transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-white text-sm md:text-base">
              Empresa
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--cinza-2)] text-xs md:text-sm hover:text-white transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-4 md:mb-6 text-white text-sm md:text-base">
              Contato
            </h4>
            <ul className="space-y-2 md:space-y-3 text-[var(--cinza-2)] text-xs md:text-sm">
              <li>
                <a
                  href="tel:+551120847800"
                  className="hover:text-white transition-colors"
                >
                  (11) 2084-7800
                </a>
              </li>
              <li>
                <Link
                  href="mailto:contato@virtualmachine.com.br"
                  className="hover:text-white transition-colors break-all"
                >
                  contato@virtualmachine.com.br
                </Link>
              </li>
              <li>Rua Dom Valverde, 32</li>
              <li>Ipiranga – São Paulo – SP</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8 text-center">
          <p className="text-[var(--cinza-2)] text-xs md:text-sm">
            © 2025 Virtual Machine. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
