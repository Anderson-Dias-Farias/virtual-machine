import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface WhyRentProps {
  title: string;
  items: {
    icon?: string;
    title: string;
    description: string;
  }[];
}

export function WhyRent({ title, items }: WhyRentProps) {
  return (
    <section className="w-full bg-[var(--azul)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-[60px] text-center leading-[1.5em]">
            {title}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center0 w-full">
            {items.map((item, index) => (
              <Card
                key={index}
                className="bg-[var(--cinza)] border border-[var(--azul)] rounded-[20px] p-5 w-full lg:max-w-[305px] mx-auto hover:shadow-xl transition-shadow"
              >
                <div className="p-0 flex sm:flex-col items-center justify-start sm:items-start gap-5 sm:gap-0 w-full">
                  {item.icon && (
                    <div className="mb-5">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px]"
                      />
                    </div>
                  )}
                  <CardTitle className="  text-[var(--preto)] text-sm md:text-lg font-semibold leading-[1.5em] mb-5">
                    {item.title}
                  </CardTitle>
                </div>
                <CardContent className="p-0">
                  <CardDescription className="text-[var(--preto)] text-sm md:text-base font-normal leading-[1.5em]">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
