import Edukacja from "../components/Edukacja";
import Hero from "../components/Hero";
import Koncepcja from "../components/Koncepcja";
import ObszarDzialania from "../components/ObszarDzialania";
import PageShell from "../components/ui/PageShell";
import Problem from "../components/Problem";
import SiteHeader from "../components/SiteHeader";
import Wybor from "../components/Wybor";
import Zakup from "../components/Zakup";
import { getSiteUrl } from "../lib/site";

export default function Home() {
  const siteUrl = getSiteUrl();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Usługi Sprzątania Wrocław",
      url: siteUrl,
      inLanguage: "pl-PL",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SprzątaniePro",
      url: siteUrl,
      telephone: "+48 693 858 260",
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "SprzątaniePro",
      url: siteUrl,
      telephone: "+48 693 858 260",
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
      image: `${siteUrl}/favicon.ico`,
      serviceType: [
        "Sprzątanie mieszkań",
        "Sprzątanie domów",
        "Sprzątanie biur",
        "Sprzątanie po remoncie",
        "Sprzątanie po wyprowadzce",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usługi sprzątania",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sprzątanie mieszkań",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sprzątanie biur",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sprzątanie po remoncie",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sprzątanie po wyprowadzce",
            },
          },
        ],
      },
    },
  ];

  return (
    <PageShell
      header={
        <SiteHeader
          links={[
            { href: "#problem", label: "Problem" },
            { href: "#koncepcja", label: "Jak to działa" },
            { href: "#edukacja", label: "Cennik i zakres" },
            { href: "#wybor", label: "Dlaczego my" },
            { href: "#zakup", label: "Zgłoszenie" },
          ]}
          ctaHref="tel:+48693858260"
          ctaLabel="Telefon: +48 693 858 260"
        />
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Hero />
      <Problem />
      <Koncepcja />
      <Edukacja />
      <Wybor />
      <ObszarDzialania />
      <Zakup />
    </PageShell>
  );
}
