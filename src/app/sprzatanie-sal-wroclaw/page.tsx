import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import SiteHeader from "../../components/SiteHeader";
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
import { getSiteUrl } from "../../lib/site";

const pagePath = "/sprzatanie-sal-wroclaw";

const navigationLinks = [
  { href: "#sale", label: "Sale" },
  { href: "#kiedy", label: "Kiedy" },
  { href: "#zakres", label: "Zakres" },
  { href: "#wycena", label: "Wycena" },
  { href: "#cennik", label: "Cennik" },
  { href: "#obszar", label: "Obszar" },
  { href: "#formularz", label: "Formularz" },
  { href: "#faq", label: "FAQ" },
];

const heroHighlights = [
  "sprzątanie po imprezach i eventach",
  "sale weselne, bankietowe i konferencyjne",
  "możliwość realizacji po wydarzeniu lub rano następnego dnia",
  "Wrocław i okolice",
  "zakres dopasowany do metrażu i liczby uczestników",
];

const hallCards = [
  {
    title: "Sale weselne i bankietowe",
    description:
      "Sprzątanie po weselach, komuniach, chrzcinach, urodzinach, rocznicach i innych imprezach rodzinnych.",
    variant: "neutral" as const,
  },
  {
    title: "Sale konferencyjne",
    description:
      "Sprzątanie po konferencjach, spotkaniach biznesowych, prezentacjach, szkoleniach, warsztatach i eventach firmowych.",
    variant: "accent" as const,
  },
  {
    title: "Sale eventowe",
    description:
      "Sprzątanie po wydarzeniach promocyjnych, pokazach, spotkaniach networkingowych, premierach, targach i imprezach tematycznych.",
    variant: "warm" as const,
  },
  {
    title: "Sale szkoleniowe",
    description:
      "Utrzymanie czystości po szkoleniach, kursach, warsztatach i spotkaniach cyklicznych.",
    variant: "neutral" as const,
  },
  {
    title: "Sale taneczne, fitness i treningowe",
    description:
      "Sprzątanie podłóg, luster, szatni, toalet, wejścia i powierzchni wspólnych po zajęciach lub wynajmach.",
    variant: "accent" as const,
  },
  {
    title: "Lokale wynajmowane na imprezy",
    description:
      "Sprzątanie po prywatnych wydarzeniach, urodzinach, osiemnastkach, spotkaniach firmowych i imprezach okolicznościowych.",
    variant: "warm" as const,
  },
];

const whenCards = [
  {
    title: "Po imprezie okolicznościowej",
    description:
      "Gdy po wydarzeniu zostają śmieci, zabrudzone podłogi, stoły, krzesła, toalety, zaplecze i wejście do lokalu.",
    variant: "neutral" as const,
  },
  {
    title: "Po weselu, komunii lub bankiecie",
    description:
      "Gdy sala musi być szybko przygotowana na kolejne wydarzenie albo odbiór przez właściciela.",
    variant: "accent" as const,
  },
  {
    title: "Po konferencji lub szkoleniu",
    description:
      "Gdy trzeba uporządkować salę, krzesła, stoły, strefę kawową, toalety i przestrzeń wejściową.",
    variant: "warm" as const,
  },
  {
    title: "Przed kolejnym wynajmem",
    description:
      "Gdy lokal musi wyglądać dobrze przed następną rezerwacją, sesją zdjęciową, prezentacją lub odbiorem.",
    variant: "neutral" as const,
  },
  {
    title: "Do stałej obsługi sali",
    description:
      "Gdy sala jest wynajmowana regularnie i potrzebujesz powtarzalnego sprzątania po wydarzeniach.",
    variant: "accent" as const,
  },
];

const scopeCards = [
  {
    title: "Główna sala",
    items: [
      "odkurzanie i mycie podłóg",
      "zbieranie śmieci po wydarzeniu",
      "czyszczenie stołów i krzeseł z zewnątrz",
      "uporządkowanie ustawienia mebli, jeśli jest to ustalone",
      "wycieranie dostępnych powierzchni",
      "czyszczenie listew, parapetów i widocznych zabrudzeń",
      "przygotowanie sali do kolejnego użycia",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Strefa wejściowa i korytarze",
    items: [
      "odkurzanie i mycie podłóg",
      "czyszczenie drzwi wejściowych i klamek",
      "usunięcie widocznych zabrudzeń",
      "opróżnianie koszy",
      "uporządkowanie przestrzeni przy wejściu",
    ],
    variant: "accent" as const,
  },
  {
    title: "Toalety dla gości",
    items: [
      "czyszczenie umywalek, baterii, luster i toalet",
      "mycie podłóg",
      "opróżnianie koszy",
      "czyszczenie powierzchni dotykowych",
      "uzupełnienie papieru, mydła lub ręczników, jeśli materiały są dostępne",
    ],
    variant: "warm" as const,
  },
  {
    title: "Zaplecze i strefa techniczna",
    items: [
      "sprzątanie zaplecza w ustalonym zakresie",
      "czyszczenie blatów i powierzchni roboczych",
      "wynoszenie śmieci",
      "mycie podłogi",
      "uporządkowanie podstawowych powierzchni",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Strefa gastronomiczna / cateringowa",
    items: [
      "sprzątanie po cateringu w ustalonym zakresie",
      "czyszczenie stołów i blatów",
      "wynoszenie odpadów",
      "mycie podłóg",
      "doczyszczanie zabrudzeń po napojach i jedzeniu",
    ],
    variant: "accent" as const,
  },
  {
    title: "Prace dodatkowe",
    items: [
      "mycie okien i czyszczenie przeszkleń",
      "doczyszczanie podłóg",
      "sprzątanie po remoncie sali",
      "sprzątanie po dekoracjach",
      "sprzątanie po dużych wydarzeniach",
      "przygotowanie sali przed eventem",
    ],
    variant: "warm" as const,
  },
];

const recurringItems = [
  "dni i godziny sprzątania",
  "zakres po każdym wydarzeniu",
  "zakres okresowy",
  "sposób dostępu do sali",
  "osobę kontaktową",
  "miejsce składowania worków i odpadów",
  "materiały po stronie klienta lub wykonawcy",
  "sposób zgłaszania dodatkowych prac",
];

const processSteps = [
  {
    label:
      "Wysyłasz informacje o sali: metraż, lokalizację, rodzaj sali, termin, przewidywaną liczbę uczestników i zakres prac.",
  },
  {
    label:
      "Doprecyzowujemy rodzaj wydarzenia: wesele, bankiet, konferencja, szkolenie, event firmowy, prywatna impreza albo regularny wynajem.",
  },
  {
    label:
      "Określamy zakres i dodatki: sala główna, toalety, zaplecze, strefa gastronomiczna, wejście, korytarze, okna lub przeszklone drzwi.",
  },
  {
    label:
      "Otrzymujesz orientacyjną wycenę, termin, czas realizacji i informację o dostępności ekipy.",
  },
];

const pricingRows = [
  ["Mała sala szkoleniowa / konferencyjna", "od ok. 150-300 zł"],
  ["Sala po spotkaniu firmowym", "od ok. 200-400 zł"],
  ["Sala po imprezie prywatnej", "od ok. 250-600 zł"],
  ["Sala weselna / bankietowa", "wycena indywidualna po metrażu i zakresie"],
  ["Sala eventowa po dużym wydarzeniu", "wycena indywidualna"],
  ["Stała obsługa sali", "indywidualna stawka miesięczna lub za wydarzenie"],
  ["Mycie okien / przeszkleń", "jako usługa dodatkowa"],
  ["Sprzątanie po remoncie sali", "według metrażu i poziomu zabrudzeń"],
];

const priceFactorCards = [
  {
    title: "Metraż sali",
    description:
      "Im większa powierzchnia, tym więcej czasu potrzeba na odkurzanie, mycie podłóg, czyszczenie stołów, krzeseł, wejścia i zaplecza.",
    variant: "neutral" as const,
  },
  {
    title: "Rodzaj wydarzenia",
    description:
      "Inaczej wygląda sprzątanie po szkoleniu, inaczej po weselu, imprezie firmowej, bankiecie, osiemnastce czy dużym evencie.",
    variant: "accent" as const,
  },
  {
    title: "Liczba uczestników",
    description:
      "Większa liczba gości oznacza zwykle więcej odpadów, zabrudzeń, pracy w toaletach i dokładniejszego sprzątania przestrzeni wspólnych.",
    variant: "warm" as const,
  },
  {
    title: "Zakres pomieszczeń",
    description:
      "Cena zależy od tego, czy sprzątana jest tylko sala główna, czy także toalety, korytarze, kuchnia, zaplecze, szatnia, wejście i strefa cateringowa.",
    variant: "neutral" as const,
  },
  {
    title: "Termin realizacji",
    description:
      "Sprzątanie nocne, weekendowe, pilne lub wykonywane przed kolejnym wydarzeniem może wymagać indywidualnej wyceny.",
    variant: "accent" as const,
  },
  {
    title: "Dodatkowe prace",
    description:
      "Mycie okien, przeszkleń, doczyszczanie podłóg, usuwanie trudnych zabrudzeń, sprzątanie po dekoracjach lub po remoncie ustalamy osobno.",
    variant: "warm" as const,
  },
];

const areaCards = [
  {
    title: "Wrocław",
    description:
      "Krzyki, Fabryczna, Psie Pole, Śródmieście, Stare Miasto, Ołtaszyn, Jagodno, Muchobór, Leśnica, Gaj, Grabiszyn, Borek, Klecina i Partynice.",
    variant: "neutral" as const,
  },
  {
    title: "Okolice Wrocławia",
    description:
      "Bielany Wrocławskie, Długołęka, Kiełczów, Siechnice, Kobierzyce i Smolec. Poza centrum termin i cena mogą zależeć od dojazdu, dostępności ekipy, godzin sprzątania oraz tego, kiedy sala musi być gotowa.",
    variant: "accent" as const,
  },
];

const faqItems = [
  {
    question: "Ile kosztuje sprzątanie sali we Wrocławiu?",
    answer:
      "Cena zależy od metrażu, rodzaju wydarzenia, liczby uczestników, liczby pomieszczeń, zakresu prac, terminu i poziomu zabrudzeń. Inaczej wycenia się małą salę szkoleniową, a inaczej dużą salę po weselu lub evencie.",
  },
  {
    question: "Czy można zamówić sprzątanie sali po imprezie?",
    answer:
      "Tak. Sprzątanie może obejmować salę główną, toalety, wejście, korytarze, zaplecze, strefę cateringową, wyniesienie odpadów i przygotowanie sali do kolejnego użycia.",
  },
  {
    question: "Czy sprzątanie może odbyć się rano po wydarzeniu?",
    answer:
      "Tak, termin warto ustalić indywidualnie. Przy salach eventowych i bankietowych często znaczenie ma to, kiedy lokal musi być gotowy na kolejną rezerwację.",
  },
  {
    question: "Czy sprzątacie sale weselne i bankietowe?",
    answer:
      "Tak, podstrona obejmuje sprzątanie sal weselnych, bankietowych, eventowych, konferencyjnych, szkoleniowych i lokali wynajmowanych na imprezy.",
  },
  {
    question: "Czy można zamówić regularne sprzątanie sali?",
    answer:
      "Tak. Przy regularnych wydarzeniach można ustalić stały zakres sprzątania po każdej imprezie albo cykliczną obsługę sali.",
  },
  {
    question: "Czy usługa obejmuje wynoszenie śmieci?",
    answer:
      "Może obejmować, jeśli zostanie to ustalone w zakresie. Warto wcześniej określić ilość odpadów, miejsce ich składowania oraz to, czy worki i pojemniki są dostępne na miejscu.",
  },
  {
    question: "Czy sprzątanie obejmuje toalety i zaplecze?",
    answer:
      "Tak, ale zakres powinien być wskazany w zapytaniu. Przy salach często sprzątana jest nie tylko sala główna, ale też toalety, korytarze, wejście, zaplecze i strefa cateringowa.",
  },
  {
    question: "Czy można zamówić sprzątanie sali po remoncie?",
    answer:
      "Tak. Przy sprzątaniu po remoncie sali warto podać metraż, rodzaj prac, ilość pyłu, liczbę okien, poziom zabrudzeń i zdjęcia.",
  },
];

const relatedLinks = [
  {
    href: "/sprzatanie-biur-wroclaw/",
    title: "Sprzątanie biur we Wrocławiu",
    description: "Dla firm, przestrzeni konferencyjnych i zapleczy biurowych.",
  },
  {
    href: "/sprzatanie-gabinetow-wroclaw/",
    title: "Sprzątanie gabinetów we Wrocławiu",
    description: "Dla mniejszych lokali usługowych, gabinetów i pracowni.",
  },
  {
    href: "/sprzatanie-po-remoncie-wroclaw/",
    title: "Sprzątanie sali po remoncie",
    description: "Po adaptacji, modernizacji lub pracach wykończeniowych w sali.",
  },
  {
    href: "/sprzatanie-lokali-uslugowych-wroclaw/",
    title: "Sprzątanie lokali usługowych",
    description: "Dla lokali wynajmowanych, punktów usługowych i przestrzeni dla klientów.",
  },
  {
    href: "/cennik-sprzatania-wroclaw/",
    title: "Cennik sprzątania we Wrocławiu",
    description: "Orientacyjne informacje o tym, co wpływa na koszt usługi.",
  },
  {
    href: "/mycie-okien-wroclaw/",
    title: "Mycie okien w lokalu",
    description: "Mycie okien, witryn i przeszkleń jako usługa dodatkowa.",
  },
];

const formFields = [
  { label: "Imię", name: "imie", type: "text", autoComplete: "given-name", required: true },
  { label: "Telefon", name: "telefon", type: "tel", autoComplete: "tel", required: true },
  { label: "E-mail", name: "email", type: "email", autoComplete: "email" },
  { label: "Dzielnica / miejscowość", name: "lokalizacja", type: "text", required: true },
  { label: "Metraż sali", name: "metraz", type: "text", placeholder: "np. 180 m2", required: true },
  { label: "Liczba uczestników wydarzenia", name: "liczba-uczestnikow", type: "text" },
  { label: "Data wydarzenia", name: "data-wydarzenia", type: "date" },
];

const selectFields = [
  {
    label: "Rodzaj sali",
    name: "rodzaj-sali",
    options: [
      "weselna",
      "bankietowa",
      "konferencyjna",
      "szkoleniowa",
      "eventowa",
      "taneczna / fitness",
      "lokal wynajmowany na imprezy",
      "inna",
    ],
  },
  {
    label: "Kiedy ma być wykonane sprzątanie?",
    name: "termin-sprzatania",
    options: [
      "po wydarzeniu",
      "następnego dnia rano",
      "przed kolejnym wynajmem",
      "cyklicznie",
      "do ustalenia",
    ],
  },
  {
    label: "Zakres",
    name: "zakres",
    options: [
      "sala główna",
      "sala główna i toalety",
      "sala, toalety i zaplecze",
      "pełny zakres z kuchnią / cateringiem",
      "do ustalenia",
    ],
  },
  {
    label: "Dodatki",
    name: "dodatki",
    options: [
      "mycie okien",
      "czyszczenie przeszkleń",
      "doczyszczanie podłóg",
      "sprzątanie po dekoracjach",
      "sprzątanie po remoncie",
      "bez dodatków",
      "do ustalenia",
    ],
  },
];

export const metadata: Metadata = {
  title: "Sprzątanie sal Wrocław – po imprezach, eventach i konferencjach",
  description:
    "Sprzątanie sal we Wrocławiu: sale weselne, bankietowe, konferencyjne, eventowe, szkoleniowe i lokale po imprezach. Podaj metraż, zakres i termin — sprawdź wycenę.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Sprzątanie sal Wrocław – po imprezach, eventach i konferencjach",
    description:
      "Sprzątanie sal we Wrocławiu: sale weselne, bankietowe, konferencyjne, eventowe, szkoleniowe i lokale po imprezach.",
    url: pagePath,
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    title: "Sprzątanie sal Wrocław – po imprezach, eventach i konferencjach",
    description:
      "Sprzątanie sal we Wrocławiu po imprezach, eventach, konferencjach, szkoleniach i spotkaniach firmowych.",
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
            <th>Orientacyjny sposób wyceny</th>
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

function HallLeadForm() {
  return (
    <div className="ui-form-shell">
      <LeadForm
        action="/api/contact"
        method="post"
        support="Przy sprzątaniu sali szczególnie pomocne są informacje o metrażu, rodzaju wydarzenia, liczbie uczestników, liczbie toalet, zakresie pomieszczeń i czasie, w którym sala musi być gotowa."
        actions={
          <Button type="submit" variant="primary">
            Wyślij zapytanie o sprzątanie sali
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

        <FormField className="ui-lead-form__full" label="Pomieszczenia i zakres">
          <textarea
            className="ui-form-field__control"
            name="pomieszczenia-zakres"
            placeholder="Wskaż: sala główna, toalety, zaplecze, kuchnia / catering, korytarze, wejście, szatnia, wynoszenie odpadów."
            rows={4}
          />
        </FormField>

        <FormField className="ui-lead-form__full" label="Wiadomość">
          <textarea
            className="ui-form-field__control"
            name="wiadomosc"
            placeholder="Dodaj informacje o godzinie rozpoczęcia sprzątania, kolejnym wynajmie, dostępie do sali, odpadach, parkingu lub pracach dodatkowych."
            rows={5}
          />
        </FormField>

        <FormField className="ui-lead-form__full" label="Zdjęcia sali (opcjonalnie)">
          <input
            accept="image/*"
            className="ui-form-field__control"
            multiple
            name="zdjecia"
            type="file"
          />
        </FormField>

        <label className="ui-consent-row ui-lead-form__full">
          <input name="zgoda-kontakt" required type="checkbox" />
          <span>Wyrażam zgodę na kontakt w sprawie przesłanego zapytania.</span>
        </label>
      </LeadForm>
    </div>
  );
}

export default function SprzatanieSalWroclawPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${pagePath}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Sprzątanie sal Wrocław",
      url: pageUrl,
      serviceType: "Sprzątanie sal",
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
      provider: {
        "@type": "Organization",
        name: "SprzątaniePro",
        url: siteUrl,
      },
      description:
        "Sprzątanie sal weselnych, bankietowych, konferencyjnych, eventowych, szkoleniowych i lokali po imprezach we Wrocławiu oraz okolicach.",
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
            Cennik
          </a>
          <a className="ui-mobile-sticky-link" href="#faq">
            FAQ
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
                description="Sprzątanie sal po imprezach, wydarzeniach, konferencjach, szkoleniach i spotkaniach firmowych na terenie Wrocławia oraz okolic."
                kicker="Sprzątanie sal Wrocław"
                support="Pomagamy dopasować zakres sprzątania sali do rodzaju wydarzenia, metrażu, liczby uczestników, poziomu zabrudzeń oraz terminu realizacji."
                title="Sprzątanie sal Wrocław"
                titleAs="h1"
                titleClassName="ui-service-hero__title"
              />
              <div className="ui-home-hero__checklist">
                <CheckList items={heroHighlights} />
              </div>
              <div className="ui-cluster ui-service-hero__actions">
                <Button href="#formularz" size="lg" variant="primary">
                  Wyślij zapytanie o sprzątanie sali
                </Button>
                <Button href="#cennik" size="lg" variant="secondary">
                  Sprawdź orientacyjną wycenę
                </Button>
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <ServiceSection
        description="Organizujesz wydarzenie, prowadzisz salę bankietową, konferencyjną, szkoleniową, taneczną albo lokal wynajmowany na imprezy? Po większym wydarzeniu zwykłe sprzątanie często nie wystarcza - trzeba szybko uporządkować podłogi, stoły, krzesła, toalety, zaplecze, wejście oraz odpady po gościach."
        id="wprowadzenie"
        kicker="Sprzątanie po wydarzeniu"
        title="Sprzątanie sal Wrocław - po imprezach, eventach i spotkaniach"
      >
        <FeatureCard
          description="Usługa może dotyczyć jednorazowego sprzątania po imprezie albo stałej obsługi sali po wydarzeniach."
          title="Zakres dopasowany do sali i terminu"
          variant="accent"
        />
      </ServiceSection>

      <ServiceSection
        description="W wycenie można uwzględnić różne typy sal i lokali, w których po wydarzeniu trzeba szybko przywrócić porządek przed kolejną rezerwacją, odbiorem albo normalnym użytkowaniem."
        id="sale"
        kicker="Dla jakich sal"
        muted
        title="Jakie sale możemy uwzględnić w wycenie?"
      >
        <CardsGrid cards={hallCards} columns={3} />
      </ServiceSection>

      <ServiceSection
        id="kiedy"
        kicker="Kiedy zamówić"
        title="Kiedy przyda się sprzątanie sali we Wrocławiu?"
      >
        <CardsGrid cards={whenCards} columns={3} />
      </ServiceSection>

      <ServiceSection
        description="Zakres sprzątania sali zależy od rodzaju obiektu, metrażu, liczby uczestników, typu wydarzenia, poziomu zabrudzeń oraz tego, czy usługa ma być wykonana bezpośrednio po imprezie, czy następnego dnia."
        id="zakres"
        kicker="Zakres prac"
        muted
        title="Co może obejmować sprzątanie sali?"
      >
        <CardsGrid cards={scopeCards} />
      </ServiceSection>

      <ServiceSection
        description="Sprzątanie jednorazowe sprawdzi się po weselu, bankiecie, imprezie firmowej, szkoleniu, konferencji, urodzinach, komunii, chrzcinach albo wynajmie lokalu na prywatne wydarzenie. Stała obsługa sali będzie lepsza, jeśli sala jest wynajmowana regularnie i po każdym wydarzeniu trzeba szybko przygotować ją do kolejnej rezerwacji."
        id="cykliczne"
        kicker="Jednorazowo czy cyklicznie"
        title="Sprzątanie sali jednorazowo lub cyklicznie"
      >
        <div className="ui-grid-2">
          <FeatureCard
            description="Dla pojedynczych wydarzeń, po których sala wymaga uporządkowania, doczyszczenia i przygotowania do odbioru."
            title="Sprzątanie po imprezie"
          />
          <FeatureCard
            description="Dla obiektów wynajmowanych regularnie, gdzie ważna jest powtarzalność zakresu, terminów i standardu przygotowania sali."
            title="Stała obsługa sali"
            variant="accent"
          />
        </div>
        <FeatureCard
          list={<CheckList compact items={recurringItems} />}
          title="Przy stałej współpracy warto ustalić"
          variant="warm"
        />
      </ServiceSection>

      <ServiceSection
        description="Im dokładniej opiszesz salę i wydarzenie, tym łatwiej określić koszt, termin, czas realizacji i dostępność ekipy."
        id="wycena"
        kicker="Proces wyceny"
        muted
        title="Jak wygląda wycena sprzątania sali?"
      >
        <div className="ui-grid-2">
          <FeatureCard list={<ProcessSteps steps={processSteps.slice(0, 2)} />} title="Zgłoszenie i wydarzenie" />
          <FeatureCard
            list={<ProcessSteps steps={processSteps.slice(2)} />}
            title="Zakres i orientacyjna wycena"
            variant="accent"
          />
        </div>
        <p className="ui-callout">
          Przy sprzątaniu sali bardzo ważne są: metraż, rodzaj wydarzenia, liczba gości, stan podłogi, liczba toalet, ilość odpadów, godzina rozpoczęcia sprzątania i czas, w którym sala musi być gotowa do kolejnego użycia.
        </p>
      </ServiceSection>

      <ServiceSection
        description="Cena sprzątania sali zależy od metrażu, liczby uczestników, rodzaju wydarzenia, zakresu prac, liczby toalet, ilości odpadów, terminu oraz tego, czy usługa ma być wykonana wieczorem, w nocy, rano czy w weekend."
        id="cennik"
        kicker="Cennik"
        title="Ile kosztuje sprzątanie sali we Wrocławiu?"
      >
        <PricingTable />
        <p className="ui-callout">
          Podane kwoty są orientacyjne i nie stanowią oferty handlowej. Ostateczna cena zależy od metrażu, zakresu, rodzaju wydarzenia, liczby uczestników, terminu, lokalizacji i poziomu zabrudzeń.
        </p>
        <div className="ui-cluster">
          <Button href="#formularz">Wyślij metraż sali i termin wydarzenia</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        id="czynniki-ceny"
        kicker="Czynniki ceny"
        muted
        title="Co wpływa na koszt sprzątania sali?"
      >
        <CardsGrid cards={priceFactorCards} columns={3} />
      </ServiceSection>

      <ServiceSection
        description="Obsługujemy zgłoszenia dotyczące sprzątania sal na terenie Wrocławia oraz wybranych miejscowości w okolicy. Dotyczy to zarówno mniejszych sal szkoleniowych i konferencyjnych, jak i większych sal bankietowych, eventowych, tanecznych oraz lokali wynajmowanych na imprezy."
        id="obszar"
        kicker="Lokalnie"
        title="Sprzątanie sal we Wrocławiu i okolicach"
      >
        <CardsGrid cards={areaCards} />
      </ServiceSection>

      <ServiceSection
        description="Podaj podstawowe informacje o sali, rodzaju wydarzenia, metrażu, liczbie uczestników, terminie i oczekiwanym zakresie."
        id="formularz"
        kicker="Formularz wyceny"
        muted
        title="Zapytaj o sprzątanie sali"
      >
        <HallLeadForm />
      </ServiceSection>

      <ServiceSection
        id="faq"
        kicker="FAQ"
        title="Najczęstsze pytania o sprzątanie sal we Wrocławiu"
      >
        <FAQAccordion items={faqItems} />
        <div className="ui-cluster">
          <Button href="#formularz">Ustal zakres sprzątania sali</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        description="Zobacz także powiązane usługi dla firm, gabinetów, lokali, prac po remoncie i usług dodatkowych."
        id="powiazane"
        kicker="Powięzane usługi"
        muted
        title="Linkowanie do powiązanych usług"
      >
        <div className="ui-grid-2">
          {relatedLinks.map((item) => (
            <Link
              className="ui-feature-card ui-related-link-card"
              href={item.href}
              key={item.href}
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
