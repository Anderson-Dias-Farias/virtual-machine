import { Benefits } from "@/components/sections/benefits/benefits";
import { Categories } from "@/components/sections/categories/categories";
import { Comparison } from "@/components/sections/comparison/comparison";
import { CTA } from "@/components/sections/cta/cta";
import { Hero } from "@/components/sections/hero/hero";
import { Solutions } from "@/components/sections/solutions/solutions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <Hero />
        <Comparison />
        <Solutions />
        <Categories />
        <Benefits />
        <CTA />
      </main>
    </div>
  );
}
