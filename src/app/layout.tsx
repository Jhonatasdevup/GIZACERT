import type { Metadata } from "next";
import './styles.css'

export const metadata: Metadata = {
  title: "Certificado Digital com Preço Acessível | Giza Cert",
  description:
    "Adquira seu certificado digital com segurança, praticidade e os melhores preços do mercado. e-CPF e e-CNPJ para pessoa física e empresas, modelos A1 e A3.",
  keywords: [
    "certificado digital",
    "e-CPF",
    "e-CNPJ",
    "certificado A1",
    "certificado A3",
    "certificação digital barata",
    "token certificado digital",
    "Giza Cert",
    "assinatura digital",
    "certificado ICP-Brasil",
    "comprar certificado digital"
  ],
  authors: [{ name: "Giza Cert", url: "https://certificadoedigital.com.br/" }],
  creator: "Giza Cert",
  publisher: "Giza Cert",
  metadataBase: new URL("https://certificadoedigital.com.br/"),
  openGraph: {
    title: "Giza Cert | Certificados Digitais com o Melhor Custo-benefício",
    description:
      "Compre seu certificado digital e garanta sua assinatura eletrônica de forma rápida, segura e acessível. Para pessoa física e empresas.",
    url: "https://certificadoedigital.com.br/",
    siteName: "Giza Cert",
    images: [
      {
        url: "/og-cover.png", // coloque uma imagem representativa na public/
        width: 1200,
        height: 630,
        alt: "Banner Giza Cert com preços de certificados digitais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giza Cert | Certificados Digitais com o Melhor Preço",
    description:
      "Adquira seu certificado digital de forma prática e segura. Preços acessíveis para e-CPF e e-CNPJ A1 e A3.",
    images: ["/og-cover.png"],
    creator: "@gizacert",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://certificadoedigital.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
