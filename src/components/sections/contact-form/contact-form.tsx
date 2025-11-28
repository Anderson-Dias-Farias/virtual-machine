"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cnpj: "",
    funcionarios: "",
    empresa: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Limpar mensagem ao começar a digitar
    if (message.type) {
      setMessage({ type: null, text: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Orçamento solicitado com sucesso! Entraremos em contato em breve.",
        });
        // Limpar formulário
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          cnpj: "",
          funcionarios: "",
          empresa: "",
        });
      } else {
        setMessage({
          type: "error",
          text: data.error || "Erro ao enviar formulário. Tente novamente.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Erro ao enviar formulário. Tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#FBFBFB] py-16 md:py-24 border-t-2 border-[var(--azul)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-5">
              <h2 className="text-xl md:text-3xl font-semibold text-[var(--preto)] leading-[1.5em]">
                <span className="text-[var(--azul)]">
                  Tecnologia sem complicação
                </span>{" "}
                <br />
                para sua empresa crescer.
              </h2>
              <p className="text-sm md:text-lg font-normal text-[var(--preto)] leading-[1.5em] md:max-w-[400px]">
                Com a Virtual Machine, você reduz custos, aumenta a eficiência e
                libera sua equipe para o que realmente importa.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[20px] p-[29px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] w-full lg:max-w-[50%]">
              <form className="space-y-[40px]" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-[40px] gap-4">
                  <div className="space-y-2">
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-[40px] gap-4">
                  <div className="space-y-2">
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="Telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="cnpj"
                      type="text"
                      placeholder="CNPJ"
                      value={formData.cnpj}
                      onChange={handleChange}
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-[40px] gap-4">
                  <div className="space-y-2">
                    <Input
                      id="funcionarios"
                      type="text"
                      placeholder="Quantidade de funcionários"
                      value={formData.funcionarios}
                      onChange={handleChange}
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="empresa"
                      type="text"
                      placeholder="Nome da empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                </div>

                {message.type && (
                  <div
                    className={`p-4 rounded-[4px] text-sm ${
                      message.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[var(--azul)] to-[var(--azul-dark)] text-white rounded-full py-[10px] md:h-[60px] h-[40px] text-sm md:text-base font-bold uppercase hover:opacity-90 transition-opacity leading-[1.5em] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Enviando..." : "Solicitar orçamento agora"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
