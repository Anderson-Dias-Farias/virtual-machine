import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ApplicationsProps {
  bannerSrc?: string;
  title: string;
  applications: {
    icon?: string;
    title: string;
    description: string;
  }[];
}

export function Applications({
  bannerSrc,
  title,
  applications,
}: ApplicationsProps) {
  return (
    <section className="w-full py-[60px] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[var(--azul)] py-4 rounded-[40px] relative overflow-hidden shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)]">
            {/* Background Image */}
            {bannerSrc && (
              <Image
                src={bannerSrc}
                alt={title}
                width={1000}
                height={1000}
                className="object-cover w-full h-full rounded-[30px] max-w-[96%] max-h-[380px] mx-auto"
              />
            )}

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <h2 className="text-[32px] font-semibold text-white mb-12 text-center leading-[1.5em]">
                {title}
              </h2>

              <div className="grid md:grid-cols-2  gap-[21px] justify-center">
                {applications.map((app, index) => {
                  return (
                    <Card
                      key={index}
                      className="bg-[var(--cinza)] border-[var(--cinza)] rounded-[20px] p-5 w-full  mx-auto hover:shadow-xl transition-shadow"
                    >
                      <CardHeader className="p-0">
                        {app.icon && (
                          <div className="mb-5">
                            <Image
                              src={app.icon}
                              alt={app.title}
                              width={24}
                              height={24}
                              className="w-[24px] h-[24px]"
                            />
                          </div>
                        )}
                        <CardTitle className="text-[var(--preto)] text-[18px] font-semibold leading-[1.5em] mb-5">
                          {app.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-[var(--preto)] text-[18px] font-normal leading-[1.5em]">
                          {app.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
