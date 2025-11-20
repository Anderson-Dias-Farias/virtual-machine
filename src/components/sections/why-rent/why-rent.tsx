import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
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
          <h2 className="text-[32px] font-semibold text-white mb-[60px] text-center leading-[1.5em]">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {items.map((item, index) => (
              <Card
                key={index}
                className="bg-[var(--cinza)] border border-[var(--azul)] rounded-[20px] p-5 w-full max-w-[305px] mx-auto hover:shadow-xl transition-shadow"
              >
                <CardHeader className="p-0">
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
                  <CardTitle className="text-[var(--preto)] text-[20px] font-semibold leading-[1.5em] mb-5">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-[var(--preto)] text-[18px] font-normal leading-[1.5em]">
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
