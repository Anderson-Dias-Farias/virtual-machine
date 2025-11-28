import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const whyRentItems = [
  {
    title: "Tecnologia Atualizada",
    description: "Sempre com os modelos mais recentes",
    icon: "/images/icons/icon-tecnologia-atualizada.svg",
  },
  {
    title: "Suporte Técnico",
    description: "Equipe especializada à disposição",
    icon: "/images/icons/icon-suporte-tecnico.svg",
  },
  {
    title: "Flexibilidade",
    description: "Aumente ou diminua conforme demanda",
    icon: "/images/icons/icon-flexibilidade.svg",
  },
  {
    title: "Redução de Custos",
    description: "Elimine gastos com manutenção",
    icon: "/images/icons/icon-reducao-custos.svg",
  },
];
