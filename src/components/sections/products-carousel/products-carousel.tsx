import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
          <div className="flex items-center justify-center mb-14">
            <h2 className="text-xl md:text-3xl mb-2 font-semibold text-[var(--preto)] leading-[1.5em] text-center">
              {title.split(" ")[0]}{" "}
              <span className="text-[var(--azul)]">
                {title.split(" ")[1]} {title.split(" ")[2]}
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
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
                      className="object-contain"
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
                        className="text-[16px] font-light text-[rgba(23,11,6,0.6)] capitalize leading-[1.5em]"
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
