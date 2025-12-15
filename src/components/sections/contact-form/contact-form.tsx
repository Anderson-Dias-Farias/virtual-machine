"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { z } from "zod";

const contactFormSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(14, "Telefone inválido"),
  cnpj: z.string().optional(),
  funcionarios: z.string().optional(),
  empresa: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Orçamento solicitado com sucesso! Entraremos em contato em breve.",
        });
        reset();
      } else {
        setMessage({
          type: "error",
          text:
            responseData.error || "Erro ao enviar formulário. Tente novamente.",
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
              <form
                className="space-y-[40px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid md:grid-cols-2 md:gap-[40px] gap-4">
                  <div className="space-y-2">
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Nome"
                      {...register("nome")}
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                    {errors.nome && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.nome.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      {...register("email")}
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-[40px] gap-4">
                  <div className="space-y-2">
                    <Controller
                      name="telefone"
                      control={control}
                      render={({ field }) => (
                        <IMaskInput
                          mask="(00) 00000-0000"
                          value={field.value || ""}
                          onAccept={(value) => field.onChange(value)}
                          onBlur={field.onBlur}
                          inputRef={field.ref}
                          id="telefone"
                          type="tel"
                          placeholder="Telefone"
                          className="flex h-[40px] md:h-[50px] w-full rounded-[4px] border border-[var(--cinza)] bg-[var(--cinza)] px-[10px] text-[14px] font-normal text-[var(--preto)] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      )}
                    />
                    {errors.telefone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.telefone.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Controller
                      name="cnpj"
                      control={control}
                      render={({ field }) => (
                        <IMaskInput
                          mask="00.000.000/0000-00"
                          value={field.value || ""}
                          onAccept={(value) => field.onChange(value)}
                          onBlur={field.onBlur}
                          inputRef={field.ref}
                          id="cnpj"
                          type="text"
                          placeholder="CNPJ"
                          className="flex h-[40px] md:h-[50px] w-full rounded-[4px] border border-[var(--cinza)] bg-[var(--cinza)] px-[10px] text-[14px] font-normal text-[var(--preto)] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      )}
                    />
                    {errors.cnpj && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cnpj.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-[40px] gap-4">
                  <div className="space-y-2">
                    <Input
                      id="funcionarios"
                      type="text"
                      placeholder="Quantidade de funcionários"
                      {...register("funcionarios")}
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[4px] h-[40px] md:h-[50px] px-[10px] text-[14px] font-normal text-[var(--preto)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="empresa"
                      type="text"
                      placeholder="Nome da empresa"
                      {...register("empresa")}
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
