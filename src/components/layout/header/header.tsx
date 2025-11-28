"use client";

import { Button } from "@/components/ui/button";
import { DialogContact } from "@/components/ui/DialogContact";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(88);
  const menuItems = [
    { label: "Laptops", href: "/laptops" },
    { label: "Tablets", href: "/tablets" },
    { label: "Celulares", href: "/celulares" },
    { label: "Workstations", href: "/workstations" },
    { label: "Apple", href: "/apple" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full bg-[var(--azul)] border-b border-[var(--azul)] relative z-50 sticky top-0"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-22 gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={closeMobileMenu}
            >
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

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[12px] xl:text-sm font-medium transition-opacity ${
                    isActive
                      ? "text-[var(--preto)] font-semibold"
                      : "text-white hover:opacity-80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <DialogContact
                trigger={
                  <Button
                    variant="outline"
                    className="bg-white text-[var(--azul)] border-[var(--azul)] rounded-full hover:bg-gray-50 px-6 text-[10px] md:text-sm"
                  >
                    <span className="text-[10px] xl:text-sm">
                      Solicitar Orçamento
                    </span>
                  </Button>
                }
              />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-in fade-in duration-300 flex items-center justify-center"
              onClick={closeMobileMenu}
            />
            {/* Menu */}
            <div
              className="lg:hidden fixed left-0 right-0 bg-[var(--azul)] border-t border-[var(--azul-dark)] z-50 shadow-lg transform transition-all duration-300 ease-out flex items-center justify-end"
              style={{ top: `${headerHeight}px` }}
            >
              <nav className="flex flex-col py-4">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`px-4 py-3 text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "text-[var(--preto)] font-semibold bg-white/10"
                          : "text-white hover:bg-white/10"
                      }`}
                      style={{
                        animation: `slideInLeft 0.3s ease-out ${
                          index * 0.05
                        }s both`,
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div
                  className="px-4 pt-4"
                  style={{
                    animation: `fadeInUp 0.3s ease-out ${
                      menuItems.length * 0.05 + 0.1
                    }s both`,
                  }}
                >
                  <DialogContact
                    trigger={
                      <Button
                        variant="outline"
                        className="w-full max-w-[300px] bg-white text-[var(--azul)] border-[var(--azul)] rounded-full hover:bg-gray-50"
                      >
                        Solicitar Orçamento
                      </Button>
                    }
                  />
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
