import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  image?: string;
  specs: string[];
}

interface ProductsCarouselProps {
  title: string;
  products: Product[];
}

export function ProductsCarousel({ title, products }: ProductsCarouselProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[32px] font-semibold text-[var(--preto)] leading-[1.5em]">
              {title}
            </h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[var(--azul)] text-[var(--azul)] bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[var(--azul)] text-[var(--azul)] bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-[rgba(245,245,247,0.79)] border border-[var(--cinza)] rounded-[20px] overflow-hidden hover:shadow-xl transition-shadow"
              >
                {product.image && (
                  <div className="relative h-[210px] w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-[20px] font-bold text-[var(--preto)] mb-4 leading-[1.5em]">
                    {product.name}
                  </h3>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li
                        key={index}
                        className="text-[16px] font-light text-[rgba(23,11,6,0.6)] uppercase leading-[1.5em]"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

