"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const menuItems = [
    { label: "Laptops", href: "/laptops" },
    { label: "Tablets", href: "/tablets" },
    { label: "Celulares", href: "/celulares" },
    { label: "Workstations", href: "/workstations" },
    { label: "Apple", href: "/apple" },
  ];

  return (
    <header className="w-full bg-[var(--azul)] border-b border-[var(--azul)]">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-header.svg"
                alt="Virtual Machine"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-opacity ${
                    isActive
                      ? "text-[var(--preto)] font-semibold"
                      : "text-white hover:opacity-80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="bg-white text-[var(--azul)] border-[var(--azul)] rounded-full hover:bg-gray-50 px-6"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </header>
  );
}
