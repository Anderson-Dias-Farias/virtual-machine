import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Virtual Machine - Locação de Equipamentos de TI",
  description: "Locação de equipamentos de TI sob medida para sua empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
