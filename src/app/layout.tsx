import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";

import AnchorScrollManager from "../components/AnchorScrollManager";
import { getSiteUrl } from "../lib/site";
import "./tokens.css";
import "./primitives.css";
import "./components.css";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: "/",
  },
  title: "Sprzątanie mieszkań i biur we Wrocławiu | Szybka wycena i termin",
  description:
    "Sprzątanie mieszkań i biur we Wrocławiu. Szybki termin, jasny zakres, przewidywalna cena. Wyślij metraż, zakres i preferowany termin.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "SprzątaniePro",
    title: "Sprzątanie mieszkań i biur we Wrocławiu | Szybka wycena i termin",
    description:
      "Sprzątanie mieszkań i biur we Wrocławiu. Szybki termin, jasny zakres i przewidywalna cena. Wyślij metraż, zakres i preferowany termin.",
  },
  twitter: {
    card: "summary",
    title: "Sprzątanie mieszkań i biur we Wrocławiu | Szybka wycena i termin",
    description:
      "Sprzątanie mieszkań i biur we Wrocławiu. Szybki termin, jasny zakres i przewidywalna cena.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <AnchorScrollManager />
        {children}
      </body>
    </html>
  );
}
