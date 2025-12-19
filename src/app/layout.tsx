import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Virtual Machine - Locação de Equipamentos de TI",
  description: "Locação de equipamentos de TI sob medida para sua empresa",
  authors: [
    { name: "Anderson Dias Farias", url: "https://adfdeveloper.com.br" },
  ],
  metadataBase: new URL("https://virtualmachine.com.br"),
  openGraph: {
    title: "Virtual Machine - Locação de Equipamentos de TI",
    description: "Locação de equipamentos de TI sob medida para sua empresa",
    url: "https://virtualmachine.com.br",
    siteName: "Virtual Machine",
  },
  verification: {
    other: {
      "facebook-domain-verification": "yzw2cp4h5mlec675q6smq14exxx8s2",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PS92VRT8');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PS92VRT8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* DPO Easy Banner */}
        <div id="dpoeasy-banner" />
        <Script
          id="dpoeasy-banner-script"
          strategy="afterInteractive"
          src="https://cdn.cookies.dponet.com.br?bannerToken=386392b6b47d17b5632dffbdd709911b"
        />
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
