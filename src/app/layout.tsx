import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hélder Santana | Analista de Redes e Segurança",
  description: "Currículo profissional de Hélder Santana — Analista de Redes e Segurança da Informação com 7+ anos de experiência em infraestrutura de rede, firewalls, VPNs e segurança defensiva.",
  keywords: ["Hélder Santana", "Analista de Redes", "Segurança da Informação", "FortiGate", "Network Security", "Firewall", "VPN", "SD-WAN"],
  authors: [{ name: "Hélder Santana" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Hélder Santana | Analista de Redes e Segurança",
    description: "Analista de Redes e Segurança com 7+ anos de experiência em infraestrutura corporativa.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hélder Santana | Analista de Redes e Segurança",
    description: "Analista de Redes e Segurança com 7+ anos de experiência.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
