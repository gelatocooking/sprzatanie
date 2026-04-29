import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import Button from "../../components/ui/Button";
import CheckList from "../../components/ui/CheckList";
import Container from "../../components/ui/Container";
import FAQAccordion from "../../components/ui/FAQAccordion";
import FeatureCard from "../../components/ui/FeatureCard";
import FormField from "../../components/ui/FormField";
import LeadForm from "../../components/ui/LeadForm";
import PageShell from "../../components/ui/PageShell";
import ProcessSteps from "../../components/ui/ProcessSteps";
import SectionCard from "../../components/ui/SectionCard";
import SectionHeader from "../../components/ui/SectionHeader";
import SiteHeader from "../../components/SiteHeader";
import { getSiteUrl } from "../../lib/site";

const pagePath = "/sprzatanie-po-remoncie-wroclaw";

const navigationLinks = [
  { href: "#zakres", label: "Zakres" },
  { href: "#cennik", label: "Cennik" },
  { href: "#lokalizacje", label: "Lokalizacje" },
  { href: "#faq", label: "FAQ" },
  { href: "#formularz", label: "Formularz" },
];

const heroActions = [
  { href: "#formularz", label: "Wyślij metraż i zdjęcia zabrudzeń", variant: "primary" as const },
  { href: "#zakres", label: "Sprawdź, co obejmuje usługa", variant: "secondary" as const },
];

const problemCards = [
  {
    title: "Co warto opisać w zgłoszeniu",
    items: [
      "Metraż mieszkania, domu, biura lub lokalu",
      "Rodzaj zabrudzeń po remoncie lub budowie",
      "Liczbę okien, pomieszczeń i łazienek",
      "Zakres dodatkowy: balkon, garaż, klatka schodowa",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Po co te dane są potrzebne",
    items: [
      "Łatwiej odróżnić lekkie sprzątanie od ciężkiego doczyszczania",
      "Można szybciej oszacować orientacyjny koszt usługi",
      "Łatwiej sprawdzić realną dostępność terminu",
      "Opis zakresu zmniejsza ryzyko błędnej wyceny",
    ],
    variant: "accent" as const,
  },
];

const scopeCards = [
  {
    title: "Usuwanie pyłu budowlanego",
    items: [
      "Usuwanie pyłu budowlanego z podłóg, listew i parapetów",
      "Odkurzanie i mycie powierzchni",
      "Odkurzanie trudno dostępnych miejsc",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Mycie podłóg, listew i parapetów",
    items: ["Czyszczenie drzwi, framug i klamek", "Mycie płytek, fug i armatury", "Czyszczenie łazienki po remoncie"],
    variant: "accent" as const,
  },
  {
    title: "Czyszczenie łazienki i kuchni",
    items: [
      "Sprzątanie kuchni po montażu mebli lub sprzętów",
      "Usuwanie drobnych zabrudzeń po farbie, gładzi lub silikonie",
      "Przygotowanie mieszkania do wprowadzenia lub wynajmu",
    ],
    variant: "warm" as const,
  },
  {
    title: "Mycie okien po remoncie",
    items: [
      "Mycie okien, ram i parapetów",
      "Doczyszczanie zabrudzeń po remoncie lub budowie",
      "Przygotowanie lokalu do odbioru albo sprzedaży",
    ],
    variant: "neutral" as const,
  },
];

const serviceTypes = [
  {
    title: "Właściciele mieszkań",
    description:
      "Dla osób, które zakończyły remont i chcą szybko przygotować mieszkanie do normalnego użytkowania.",
    variant: "neutral" as const,
  },
  {
    title: "Najemcy i wynajmujący",
    description:
      "Dla osób przygotowujących lokal do wynajmu albo odbioru po zakończonej umowie najmu.",
    variant: "accent" as const,
  },
  {
    title: "Inwestorzy i flipperzy",
    description:
      "Dla osób, które chcą przygotować mieszkanie do zdjęć, prezentacji lub sprzedaży.",
    variant: "warm" as const,
  },
  {
    title: "Lokale usługowe i biura",
    description:
      "Dla firm, które kończą remont biura, gabinetu, salonu, punktu usługowego lub lokalu handlowego.",
    variant: "neutral" as const,
  },
  {
    title: "Ekipy remontowe",
    description:
      "Dla wykonawców, którzy chcą przekazać klientowi czysty lokal po zakończeniu prac.",
    variant: "accent" as const,
  },
];

const processSteps = [
  {
    label:
      "Wysyłasz podstawowe informacje: metraż, lokalizację, rodzaj lokalu, zakres prac i preferowany termin.",
  },
  {
    label:
      "Opisujesz stan po remoncie: pył budowlany, zabrudzenia po farbie, mycie okien, łazienkę, kuchnię lub całe mieszkanie.",
  },
  {
    label:
      "Zgłoszenie trafia do weryfikacji, aby określić, czy chodzi o standardowe sprzątanie, sprzątanie poremontowe czy dodatkowe doczyszczanie.",
  },
  {
    label:
      "Otrzymujesz kontakt lub orientacyjną wycenę po analizie zgłoszenia, dostępności terminu i zakresu prac.",
  },
];

const pricingRows = [
  ["Sprzątanie po lekkim remoncie", "od ok. 10-15 zł/m2"],
  ["Sprzątanie po większym remoncie", "od ok. 15-25 zł/m2"],
  ["Sprzątanie po budowie / ciężkie zabrudzenia", "wycena indywidualna"],
  ["Mycie okien po remoncie", "często jako usługa dodatkowa"],
  ["Doczyszczanie fug, silikonu, farby, kleju", "często wycena indywidualna"],
];

const priceFactorCards = [
  {
    title: "Lokal i metraż",
    items: ["Metraż mieszkania lub lokalu", "Liczba pomieszczeń", "Liczba okien", "Ilość pyłu budowlanego"],
    variant: "neutral" as const,
  },
  {
    title: "Rodzaj zabrudzeń",
    items: [
      "Rodzaj zabrudzeń",
      "Konieczność doczyszczania farby, kleju, fug lub silikonu",
      "Czy lokal jest pusty, czy umeblowany",
      "Zakres dodatkowy: balkon, garaż, piwnica, klatka schodowa",
    ],
    variant: "accent" as const,
  },
  {
    title: "Warunki realizacji",
    items: ["Dostęp do windy", "Piętro i możliwość parkowania", "Termin realizacji", "Rodzaj lokalu i etap po remoncie"],
    variant: "warm" as const,
  },
];

const checklistCards = [
  {
    title: "Przed zgłoszeniem",
    items: [
      "Czy remont jest już zakończony?",
      "Czy ekipa remontowa wyniosła odpady?",
      "Czy w lokalu są jeszcze narzędzia lub materiały?",
      "Czy trzeba myć okna?",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Przed realizacją",
    items: [
      "Czy są zabrudzenia po farbie, silikonie, kleju lub fugach?",
      "Czy mieszkanie ma być gotowe do zamieszkania lub wynajmu?",
      "Czy jest dostęp do prądu i wody?",
      "Czy można zaparkować blisko budynku?",
    ],
    variant: "accent" as const,
  },
];

const attentionCards = [
  {
    title: "Powierzchnie i pył",
    items: [
      "Nie każda powierzchnia może być szorowana",
      "Pył po gładzi wraca, jeśli lokal nie jest dokładnie odkurzony",
      "Okna po remoncie wymagają ostrożności",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Dodatkowe prace",
    items: [
      "Resztki silikonu, farby i kleju mogą wymagać osobnego doczyszczania",
      "Odpady budowlane zwykle nie są częścią standardowego sprzątania",
      "Dobre zgłoszenie powinno zawierać metraż, zdjęcia i informacje o zabrudzeniach",
    ],
    variant: "warm" as const,
  },
];

const areaCards = [
  {
    title: "Wrocław",
    description:
      "Krzyki, Fabryczna, Psie Pole, Śródmieście, Stare Miasto, Jagodno, Ołtaszyn, Muchobór, Leśnica, Zakrzów, Klecina, Brochów i Biskupin.",
    variant: "neutral" as const,
  },
  {
    title: "Okolice",
    description:
      "Bielany Wrocławskie, Długołęka, Kiełczów, Siechnice, Kobierzyce, Smolec, Radwanice i Żórawina.",
    variant: "accent" as const,
  },
];

const relatedLinks = [
  {
    href: "/",
    title: "Strona główna",
    description: "Ogólny formularz zapytań o sprzątanie we Wrocławiu.",
  },
  {
    href: "/#wybor",
    title: "Sprzątanie mieszkań",
    description: "Zobacz zakres dla mieszkań i domów.",
  },
  {
    href: "/#edukacja",
    title: "Mycie okien",
    description: "Informacje o dodatkach i usługach dodatkowych.",
  },
  {
    href: "/#wybor",
    title: "Sprzątanie po wyprowadzce",
    description: "Zakres przy przygotowaniu lokalu do najmu lub sprzedaży.",
  },
];

const formFields = [
  { label: "Imię", name: "imie", type: "text", autoComplete: "given-name", required: true },
  { label: "Telefon", name: "telefon", type: "tel", autoComplete: "tel", required: true },
  { label: "E-mail (opcjonalnie)", name: "email", type: "email", autoComplete: "email" },
  { label: "Lokalizacja / dzielnica", name: "lokalizacja", type: "text", required: true },
  { label: "Metraż", name: "metraz", type: "text", placeholder: "np. 58 m2", required: true },
];

const selectFields = [
  {
    label: "Rodzaj lokalu",
    name: "rodzaj-lokalu",
    options: ["mieszkanie", "dom", "biuro", "lokal usługowy", "inny"],
  },
  {
    label: "Rodzaj remontu",
    name: "rodzaj-remontu",
    options: ["malowanie", "gładzie", "łazienka", "kuchnia", "generalny remont", "wykończenie deweloperskie", "inny"],
  },
  {
    label: "Zakres",
    name: "zakres",
    options: ["całe mieszkanie", "wybrane pomieszczenia", "łazienka", "kuchnia", "okna", "balkon", "klatka schodowa", "lokal po ekipie remontowej"],
  },
  {
    label: "Czy potrzebne mycie okien?",
    name: "okna",
    options: ["tak", "nie", "nie wiem"],
  },
  {
    label: "Preferowany termin",
    name: "termin",
    options: ["jak najszybciej", "w tym tygodniu", "w przyszłym tygodniu", "konkretny termin"],
  },
];

const faqItems = [
  {
    question: "Ile kosztuje sprzątanie po remoncie we Wrocławiu?",
    answer:
      "Cena zależy od metrażu, stopnia zabrudzenia, liczby okien i zakresu prac. Lekkie sprzątanie po remoncie może być wyceniane od około kilkunastu złotych za m2, natomiast większe zabrudzenia i doczyszczanie po farbie, kleju lub silikonie zwykle wymagają indywidualnej wyceny.",
  },
  {
    question: "Czy sprzątanie po remoncie obejmuje mycie okien?",
    answer:
      "Mycie okien często jest usługą dodatkową, dlatego warto zaznaczyć je w formularzu. Przy sprzątaniu po remoncie ważne jest nie tylko umycie szyb, ale także ram, parapetów i usunięcie pyłu budowlanego.",
  },
  {
    question: "Czy można zamówić sprzątanie tylko jednego pomieszczenia?",
    answer:
      "Tak, zgłoszenie może dotyczyć całego mieszkania, domu, biura albo wybranych pomieszczeń, na przykład łazienki, kuchni, salonu lub klatki schodowej po remoncie.",
  },
  {
    question: "Czy sprzątanie obejmuje wynoszenie gruzu i odpadów budowlanych?",
    answer:
      "Standardowe sprzątanie po remoncie zwykle nie obejmuje wywozu gruzu, dużych odpadów budowlanych ani pozostałości po ekipie remontowej. Takie rzeczy warto opisać osobno, ponieważ mogą wymagać dodatkowej usługi.",
  },
  {
    question: "Czy trzeba być na miejscu podczas sprzątania?",
    answer:
      "Najczęściej warto być na miejscu przy rozpoczęciu lub zakończeniu usługi, aby ustalić zakres i sprawdzić efekt. Szczegóły zależą od konkretnego zlecenia i ustaleń z wykonawcą.",
  },
  {
    question: "Jak szybko można zamówić sprzątanie po remoncie?",
    answer:
      "Dostępność terminów zależy od lokalizacji, zakresu prac i obłożenia wykonawców. Najlepiej wysłać zgłoszenie z metrażem, dzielnicą i preferowanym terminem, aby szybciej sprawdzić możliwość realizacji.",
  },
  {
    question: "Czy można zgłosić mieszkanie po wykończeniu deweloperskim?",
    answer:
      "Tak, sprzątanie po wykończeniu mieszkania deweloperskiego to jeden z najczęstszych przypadków. W takim lokalu zwykle trzeba usunąć pył budowlany, umyć podłogi, parapety, drzwi, łazienkę, kuchnię i okna.",
  },
  {
    question: "Czy da się usunąć wszystkie zabrudzenia po remoncie?",
    answer:
      "Nie zawsze. Część zabrudzeń, takich jak zaschnięta farba, klej, fuga, silikon albo zarysowania na powierzchniach, może wymagać specjalistycznego doczyszczania. Dlatego warto opisać problem w formularzu lub dodać zdjęcia, jeśli taka opcja jest dostępna.",
  },
  {
    question: "Czy sprzątanie po remoncie nadaje się przed wynajmem mieszkania?",
    answer:
      "Tak, to dobra opcja, jeśli mieszkanie ma być przygotowane dla najemcy, do sesji zdjęciowej, prezentacji albo odbioru po remoncie.",
  },
  {
    question: "Czy ten serwis sam wykonuje sprzątanie?",
    answer:
      "Serwis pomaga zebrać zapytanie dotyczące sprzątania po remoncie i ułatwia kontakt w sprawie wyceny. Realizacja usługi, termin i ostateczna cena zależą od ustaleń z wykonawcą.",
  },
];

export const metadata: Metadata = {
  title: "Sprzątanie po remoncie Wrocław - szybka wycena i kontakt",
  description:
    "Potrzebujesz sprzątania po remoncie we Wrocławiu? Wyślij metraż, zakres prac i termin. Pomagamy szybko zebrać zgłoszenie i przekazać je do wykonawcy.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Sprzątanie po remoncie Wrocław - szybka wycena i kontakt",
    description:
      "Potrzebujesz sprzątania po remoncie we Wrocławiu? Wyślij metraż, zakres prac i termin. Pomagamy szybko zebrać zgłoszenie i przekazać je do wykonawcy.",
    url: pagePath,
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    title: "Sprzątanie po remoncie Wrocław - szybka wycena i kontakt",
    description:
      "Potrzebujesz sprzątania po remoncie we Wrocławiu? Wyślij metraż, zakres prac i termin. Pomagamy szybko zebrać zgłoszenie i przekazać je do wykonawcy.",
  },
};

type ServiceSectionProps = {
  id?: string;
  muted?: boolean;
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  support?: ReactNode;
  children: ReactNode;
};

function ServiceSection({
  id,
  muted,
  kicker,
  title,
  description,
  support,
  children,
}: ServiceSectionProps) {
  return (
    <section className="ui-section" id={id}>
      <Container>
        <SectionCard muted={muted}>
          <div className="ui-stack-section">
            <SectionHeader
              description={description}
              kicker={kicker}
              support={support}
              title={title}
            />
            {children}
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}

function CardsGrid({
  columns = 2,
  cards,
}: {
  columns?: 2 | 3;
  cards: Array<{
    title: string;
    description?: string;
    items?: string[];
    variant: "neutral" | "accent" | "warm";
  }>;
}) {
  return (
    <div className={columns === 3 ? "ui-grid-3" : "ui-grid-2"}>
      {cards.map((card) => (
        <FeatureCard
          description={card.description}
          key={card.title}
          list={card.items ? <CheckList compact items={card.items} /> : undefined}
          title={card.title}
          variant={card.variant}
        />
      ))}
    </div>
  );
}

function PricingTable() {
  return (
    <div className="ui-pricing-table-wrap">
      <table className="ui-pricing-table">
        <thead>
          <tr>
            <th>Rodzaj usługi</th>
            <th>Przykładowy sposób wyceny</th>
          </tr>
        </thead>
        <tbody>
          {pricingRows.map(([service, price]) => (
            <tr key={service}>
              <td>{service}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RenovationLeadForm() {
  return (
    <div className="ui-form-shell">
      <LeadForm
        action="#"
        method="post"
        support="Zgłoszenie pomaga szybciej określić realny zakres, termin i możliwość wyceny."
        actions={
          <Button type="submit" variant="primary">
            Wyślij metraż, termin i zdjęcia
          </Button>
        }
      >
        {formFields.map((field) => (
          <FormField key={field.name} label={field.label}>
            <input className="ui-form-field__control" {...field} />
          </FormField>
        ))}

        {selectFields.map((field) => (
          <FormField key={field.name} label={field.label}>
            <select className="ui-form-field__control" name={field.name} required>
              <option value="">Wybierz opcję</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>
        ))}

        <FormField className="ui-lead-form__full" label="Opis sytuacji">
          <textarea
            className="ui-form-field__control"
            name="opis"
            placeholder="Opisz zakres zabrudzeń, liczbę okien, piętro, parking i to, czy remont jest już zakończony."
            rows={5}
          />
        </FormField>

        <FormField className="ui-lead-form__full" label="Zdjęcia zabrudzeń (opcjonalnie)">
          <input
            accept="image/*"
            className="ui-form-field__control"
            multiple
            name="zdjecia"
            type="file"
          />
        </FormField>

        <div className="ui-lead-form__full ui-stack-sm">
          <label className="ui-consent-row">
            <input name="zgoda-kontakt" required type="checkbox" />
            <span>Wysyłając formularz, zgadzasz się na kontakt w sprawie przesłanego zapytania.</span>
          </label>
          <label className="ui-consent-row">
            <input name="zgoda-przekazanie" required type="checkbox" />
            <span>
              Wyrażam zgodę na przekazanie mojego zapytania partnerowi realizującemu
              usługi sprzątania w celu przygotowania wyceny.
            </span>
          </label>
        </div>
      </LeadForm>
    </div>
  );
}

export default function SprzataniePoRemonciePage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${pagePath}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SprzątaniePro",
      url: siteUrl,
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Sprzątanie po remoncie Wrocław",
      url: pageUrl,
      serviceType: "Sprzątanie po remoncie",
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Serwis pomaga zebrać zapytanie o sprzątanie po remoncie we Wrocławiu i okolicach, aby łatwiej określić zakres, termin i orientacyjną wycenę usługi.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <PageShell
      header={
        <SiteHeader
          ctaHref="#formularz"
          ctaLabel="Wyślij metraż"
          links={navigationLinks}
        />
      }
      footer={
        <div className="ui-mobile-sticky-bar">
          <a className="ui-mobile-sticky-link" href="#formularz">
            Formularz
          </a>
          <a className="ui-mobile-sticky-link" href="#cennik">
            Formularz
          </a>
          <a className="ui-mobile-sticky-link" href="#faq">
            Kontakt
          </a>
        </div>
      }
    >
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
        type="application/ld+json"
      />

      <section className="ui-section section section--hero" id="hero">
        <Container>
          <SectionCard variant="hero">
            <div className="ui-service-hero">
              <SectionHeader
                align="center"
                description="Zakończyłeś remont mieszkania, domu lub lokalu? Wypełnij krótki formularz, podaj metraż, zakres zabrudzeń i preferowany termin. Na tej podstawie łatwiej przygotować wycenę sprzątania poremontowego."
                kicker="sprzątanie po remoncie Wrocław"
                support="Zgłoszenie pozwala określić orientacyjny koszt i dostępność terminu. Wycena zależy od metrażu, stopnia zabrudzenia, liczby okien i zakresu prac."
                title={
                  <>
                    Sprzątanie po remoncie Wrocław
                    <br />
                    szybka wycena usługi
                  </>
                }
                titleAs="h1"
                titleClassName="ui-service-hero__title"
              />
              <p className="ui-service-hero__subtitle">
                Sprzątanie po remoncie we Wrocławiu - sprawdź dostępność terminu
              </p>
              <div className="ui-cluster ui-service-hero__actions">
                {heroActions.map((action) => (
                  <Button
                    href={action.href}
                    key={action.href}
                    size="lg"
                    variant={action.variant}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <ServiceSection
        description="Po remoncie zwykłe odkurzanie i mycie podłóg zazwyczaj nie wystarcza. Pył budowlany osiada na listwach, drzwiach, parapetach, płytkach, fugach, oknach, meblach i trudno dostępnych miejscach."
        id="problem"
        kicker="Zakres i wycena"
        muted
        support="Przy wycenie ważny jest nie tylko metraż, ale też rodzaj remontu, ilość pyłu, liczba pomieszczeń, okien oraz zakres dodatkowy."
        title="Dlaczego sprzątanie po remoncie wymaga dokładniejszego zakresu?"
      >
        <CardsGrid cards={problemCards} />
        <div className="ui-cluster">
          <Button href="#formularz">Wyślij metraż i zdjęcia zabrudzeń</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        description="Zakres sprzątania poremontowego może obejmować czynności zależne od typu remontu, ilości pyłu oraz poziomu zabrudzeń w lokalu."
        id="zakres"
        kicker="Zakres usługi"
        title="Co obejmuje sprzątanie po remoncie?"
      >
        <CardsGrid cards={scopeCards} />
        <p className="ui-callout">
          Dokładny zakres usługi zawsze warto ustalić przed realizacją, ponieważ nie każde
          zabrudzenie po remoncie da się usunąć standardowymi środkami. Niektóre
          powierzchnie wymagają ostrożnego doczyszczania albo osobnej wyceny.
        </p>
        <div className="ui-cluster">
          <Button href="#formularz">Opisz zakres prac</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        id="dla-kogo"
        kicker="Dla kogo"
        muted
        title="Dla kogo jest sprzątanie poremontowe we Wrocławiu?"
      >
        <CardsGrid cards={serviceTypes} columns={3} />
      </ServiceSection>

      <ServiceSection
        id="jak-to-dziala"
        kicker="Proces zgłoszenia"
        title="Jak wygląda zgłoszenie sprzątania po remoncie?"
      >
        <div className="ui-grid-2">
          <FeatureCard
            list={<ProcessSteps steps={processSteps.slice(0, 2)} />}
            title="Informacje o lokalu"
          />
          <FeatureCard
            list={<ProcessSteps steps={processSteps.slice(2)} />}
            title="Weryfikacja i wycena"
            variant="accent"
          />
        </div>
        <p className="ui-callout">
          Serwis pomaga zebrać zapytanie o usługę sprzątania po remoncie. Realizacja
          usługi zależy od dostępności wykonawcy i potwierdzonego zakresu.
        </p>
      </ServiceSection>

      <ServiceSection
        description="Poniższe stawki pomagają oszacować rząd wielkości kosztu, ale nie zastępują wyceny konkretnego lokalu."
        id="cennik"
        kicker="Cennik orientacyjny"
        muted
        title="Ile kosztuje sprzątanie po remoncie we Wrocławiu?"
      >
        <PricingTable />
        <p className="ui-callout">
          Podane kwoty są orientacyjne i nie stanowią oferty handlowej. Ostateczna cena
          zależy od zakresu usługi i ustaleń z wykonawcą.
        </p>
        <div className="ui-cluster">
          <Button href="#formularz">Sprawdź orientacyjny koszt</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        id="czynniki-ceny"
        kicker="Czynniki ceny"
        title="Co wpływa na cenę sprzątania poremontowego?"
      >
        <CardsGrid cards={priceFactorCards} columns={3} />
      </ServiceSection>

      <ServiceSection
        description="Im dokładniej opiszesz metraż, zakres i zabrudzenia, tym łatwiej będzie przygotować realną wycenę."
        id="formularz"
        kicker="Formularz leadowy"
        muted
        title="Wyślij metraż, zakres prac i preferowany termin"
      >
        <RenovationLeadForm />
      </ServiceSection>

      <ServiceSection
        id="checklista"
        kicker="Checklista"
        title="Checklista sprzątania po remoncie"
      >
        <CardsGrid cards={checklistCards} />
      </ServiceSection>

      <ServiceSection
        id="uwagi"
        kicker="Na co zwrócić uwagę"
        muted
        title="Na co zwrócić uwagę przy sprzątaniu po remoncie?"
      >
        <CardsGrid cards={attentionCards} />
      </ServiceSection>

      <ServiceSection
        description="Zapytania można składać dla mieszkań, domów, biur i lokali na terenie Wrocławia oraz okolic. Najczęściej sprzątanie po remoncie dotyczy mieszkań w nowych inwestycjach, lokali po wykończeniu deweloperskim, mieszkań po malowaniu, remontach łazienki, kuchni lub całkowitej modernizacji."
        id="lokalizacje"
        kicker="Lokalnie"
        title="Sprzątanie po remoncie Wrocław i okolice"
      >
        <CardsGrid cards={areaCards} />
        <div className="ui-cluster">
          <Button href="#formularz">Wyślij zapytanie z Wrocławia lub okolic</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        id="faq"
        kicker="FAQ"
        muted
        title="Najczęstsze pytania"
      >
        <FAQAccordion items={faqItems} />
        <div className="ui-cluster">
          <Button href="#formularz">Zgłoś sprzątanie po remoncie</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        description="Jeśli porównujesz różne typy usług, zobacz też stronę główną oraz sekcje dotyczące sprzątania mieszkań, mycia okien i sprzątania po wyprowadzce."
        kicker="Zobacz też"
        title="Powiązane zapytania i strony"
      >
        <div className="ui-grid-2">
          {relatedLinks.map((item) => (
            <Link
              className="ui-feature-card ui-related-link-card"
              href={item.href}
              key={`${item.href}-${item.title}`}
            >
              <span className="ui-feature-card__title">{item.title}</span>
              <span className="ui-feature-card__description">{item.description}</span>
            </Link>
          ))}
        </div>
      </ServiceSection>
    </PageShell>
  );
}
