import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProductHeroProps {
  title: string;
  description: string;
  ctaText: string;
  imageSrc?: string;
  bgColor?: string;
}

export function ProductHero({
  title,
  description,
  ctaText,
  imageSrc,
  bgColor = "bg-white",
}: ProductHeroProps) {
  return (
    <section
      className={`relative w-full min-h-[545px] ${bgColor} overflow-hidden`}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8  relative z-10">
        <div className="flex flex-col md:flex-row gap-0 lg:gap-12 items-center justify-center min-h-[50dvh] mx-auto">
          {/* Content */}
          <div className=" w-full pt-10 lg:pt-0 flex flex-col items-center justify-center md:items-start pb-10 md:pb-0">
            <div className="space-y-[10px] mb-10 text-center md:text-left">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[var(--preto)] leading-[1.5em]">
                {title}
              </h1>
              <p className="text-base md:text-lg lg:text-lg font-normal text-[var(--preto)] leading-[1.5em] max-w-[480px]">
                {description}
              </p>
            </div>

            <Button className="bg-gradient-to-r from-[var(--azul)] to-[var(--azul-dark)] text-white rounded-full px-5 md:py-[10px] text-[12px] md:text-sm font-bold uppercase hover:opacity-90 transition-opacity w-full max-w-[400px] md:h-[60px] flex items-center justify-center gap-5">
              {ctaText}
              <ArrowRight className="h-5 w-5 md:h-[27.61px] md:w-[30.02px]" />
            </Button>
          </div>

          {/* Image */}
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={title}
              width={1000}
              height={1000}
              className="object-cover w-full h-full md:max-w-[350px] lg:max-w-[500px] xl:max-w-[700px] mx-auto"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
