import { Button } from "@/components/ui/button";
import { DialogContact } from "@/components/ui/DialogContact";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="w-full bg-[var(--azul)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Solicite agora uma proposta personalizada para modernizar seu
            negócio!
          </h2>
          <DialogContact
            trigger={
              <Button className="bg-white text-[var(--azul)] border-white font-bold rounded-full px-8 py-6 md:text-base text-sm  hover:bg-gray-50 w-full md:w-auto">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
