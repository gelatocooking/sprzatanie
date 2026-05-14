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

const pagePath = "/sprzatanie-gabinetow-wroclaw";

const navigationLinks = [
  { href: "#gabinety", label: "Gabinety" },
  { href: "#zakres", label: "Zakres" },
  { href: "#wycena", label: "Wycena" },
  { href: "#cennik", label: "Cennik" },
  { href: "#obszar", label: "Obszar" },
  { href: "#formularz", label: "Formularz" },
  { href: "#faq", label: "FAQ" },
];

const heroHighlights = [
  "gabinety lekarskie, kosmetyczne i usługowe",
  "sprzątanie jednorazowe lub cykliczne",
  "zakres dopasowany do godzin pracy",
  "Wrocław i wybrane okolice",
  "możliwość rozszerzenia o okna, podłogi i prace okresowe",
];

const cabinetCards = [
  {
    title: "Gabinety lekarskie",
    description:
      "Sprzątanie pomieszczeń, w których ważna jest czystość, powtarzalność i praca zgodnie z ustalonym zakresem. Dotyczy m.in. gabinetów prywatnych, poradni specjalistycznych i małych placówek.",
    variant: "neutral" as const,
  },
  {
    title: "Gabinety kosmetyczne",
    description:
      "Czyszczenie stanowisk, podłóg, luster, recepcji, poczekalni, toalety i zaplecza. Dobrze sprawdzi się przy gabinetach beauty, salonach stylizacji paznokci, makijażu permanentnego czy depilacji.",
    variant: "accent" as const,
  },
  {
    title: "Gabinety stomatologiczne",
    description:
      "Sprzątanie pomieszczeń wspólnych, poczekalni, toalet, podłóg, powierzchni zewnętrznych i zaplecza, zgodnie z wcześniej ustalonym zakresem.",
    variant: "warm" as const,
  },
  {
    title: "Gabinety fizjoterapii i masażu",
    description:
      "Utrzymanie czystości w gabinetach zabiegowych, recepcji, szatni, toalecie i strefie wejściowej.",
    variant: "neutral" as const,
  },
  {
    title: "Gabinety psychologiczne i terapeutyczne",
    description:
      "Dyskretne sprzątanie przestrzeni, w której ważny jest porządek, zapach, estetyka i komfort klienta.",
    variant: "accent" as const,
  },
  {
    title: "Małe lokale usługowe",
    description:
      "Sprzątanie niedużych lokali, w których obsługiwani są klienci: recepcja, stanowiska pracy, toaleta, zaplecze i wejście.",
    variant: "warm" as const,
  },
];

const whenCards = [
  {
    title: "Przed otwarciem nowego gabinetu",
    description:
      "Po remoncie, adaptacji lokalu, montażu mebli lub odbiorze przestrzeni od poprzedniego najemcy.",
    variant: "neutral" as const,
  },
  {
    title: "Po remoncie lub odświeżeniu lokalu",
    description:
      "Gdy w gabinecie został pył, zabrudzenia na podłodze, ślady po ekipie remontowej, kurz na listwach, parapetach i meblach.",
    variant: "accent" as const,
  },
  {
    title: "Do stałej obsługi gabinetu",
    description:
      "Gdy gabinet działa regularnie i potrzebujesz utrzymania czystości raz, kilka razy w tygodniu albo codziennie.",
    variant: "warm" as const,
  },
  {
    title: "Przed ważnym dniem pracy",
    description:
      "Przed sesją zdjęciową, wizytą audytową, otwarciem, większym ruchem klientów lub rozpoczęciem współpracy z nowymi specjalistami.",
    variant: "neutral" as const,
  },
  {
    title: "Po intensywnym okresie przyjęć",
    description:
      "Gdy standardowe codzienne porządki nie wystarczają i potrzebne jest dokładniejsze doczyszczenie.",
    variant: "accent" as const,
  },
];

const scopeCards = [
  {
    title: "Gabinet właściwy",
    items: [
      "odkurzanie i mycie podłóg",
      "wycieranie kurzu z dostępnych powierzchni",
      "czyszczenie blatów, biurek i powierzchni roboczych z zewnątrz",
      "czyszczenie drzwi, klamek, parapetów i listew",
      "opróżnianie koszy",
      "uzupełnianie worków, jeśli jest to ustalone w zakresie",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Recepcja i poczekalnia",
    items: [
      "odkurzanie i mycie podłogi",
      "czyszczenie lady recepcyjnej",
      "wycieranie stolików, krzeseł i powierzchni wspólnych",
      "uporządkowanie widocznych elementów",
      "czyszczenie wejścia i strefy pierwszego kontaktu",
    ],
    variant: "accent" as const,
  },
  {
    title: "Toaleta dla klientów lub pacjentów",
    items: [
      "czyszczenie umywalki, baterii, lustra i toalety",
      "mycie podłogi",
      "czyszczenie powierzchni dotykowych",
      "wynoszenie śmieci",
      "uzupełnienie papieru, mydła lub ręczników, jeśli materiały są dostępne na miejscu",
    ],
    variant: "warm" as const,
  },
  {
    title: "Zaplecze i pomieszczenia socjalne",
    items: [
      "czyszczenie blatów i zlewu",
      "odkurzanie i mycie podłogi",
      "opróżnianie koszy",
      "czyszczenie powierzchni zewnętrznych",
      "lodówka, szafki i sprzęty jako usługi dodatkowe",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Prace okresowe",
    items: [
      "mycie okien",
      "doczyszczanie podłóg",
      "czyszczenie przeszkleń",
      "sprzątanie po remoncie",
      "sprzątanie po przeprowadzce gabinetu",
      "przygotowanie lokalu do otwarcia",
    ],
    variant: "accent" as const,
  },
];

const recurringItems = [
  "dni i godziny sprzątania",
  "lista pomieszczeń",
  "zakres codzienny",
  "zakres tygodniowy",
  "zakres miesięczny",
  "sposób dostępu do lokalu",
  "materiały po stronie klienta lub wykonawcy",
  "osoba kontaktowa do zgłaszania uwag",
];

const processSteps = [
  {
    label:
      "Wysyłasz podstawowe informacje: rodzaj gabinetu, metraż, liczbę pomieszczeń, lokalizację, preferowane godziny i oczekiwaną częstotliwość.",
  },
  {
    label:
      "Doprecyzowujemy zakres: ustalamy, czy chodzi o sprzątanie jednorazowe, cykliczne, po remoncie, po poprzednim najemcy czy przygotowanie gabinetu do otwarcia.",
  },
  {
    label:
      "Otrzymujesz orientacyjną wycenę: na podstawie danych łatwiej określić koszt, termin, czas realizacji i ewentualne dodatki.",
  },
];

const pricingRows = [
  ["Mały gabinet 1-2 pomieszczenia", "od ok. 120-200 zł za wizytę"],
  ["Gabinet z recepcją i toaletą", "od ok. 180-300 zł za wizytę"],
  ["Gabinet kosmetyczny / beauty", "wycena według metrażu, stanowisk i częstotliwości"],
  ["Gabinet lekarski / terapeutyczny", "wycena według zakresu i harmonogramu"],
  ["Sprzątanie cykliczne gabinetu", "indywidualna stawka miesięczna"],
  ["Sprzątanie po remoncie gabinetu", "według metrażu i poziomu zabrudzeń"],
  ["Mycie okien / przeszkleń", "jako usługa dodatkowa"],
];

const priceFactorCards = [
  {
    title: "Metraż i liczba pomieszczeń",
    description:
      "Znaczenie ma powierzchnia gabinetu, liczba stanowisk, poczekalnia, recepcja, toaleta, zaplecze i pomieszczenia socjalne.",
    variant: "neutral" as const,
  },
  {
    title: "Rodzaj gabinetu",
    description:
      "Inaczej wygląda sprzątanie gabinetu psychologicznego, inaczej kosmetycznego, stomatologicznego, fizjoterapeutycznego czy lekarskiego.",
    variant: "accent" as const,
  },
  {
    title: "Częstotliwość",
    description:
      "Jednorazowe sprzątanie zwykle wycenia się inaczej niż stałą obsługę kilka razy w tygodniu.",
    variant: "warm" as const,
  },
  {
    title: "Godziny realizacji",
    description:
      "Sprzątanie przed otwarciem, po zamknięciu albo w weekend może wpływać na dostępność wykonawcy i cenę.",
    variant: "neutral" as const,
  },
  {
    title: "Zakres dodatkowy",
    description:
      "Mycie okien, przeszkleń, doczyszczanie podłóg, sprzątanie po remoncie, zaplecze, lodówka, szafki czy prace okresowe powinny być ustalone osobno.",
    variant: "accent" as const,
  },
  {
    title: "Lokalizacja",
    description:
      "Cena i termin mogą zależeć od dzielnicy Wrocławia, dojazdu, parkowania i dostępności ekipy.",
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
      "Bielany Wrocławskie, Długołęka, Kiełczów, Siechnice, Kobierzyce i Smolec. Poza centrum termin i koszt mogą zależeć od dojazdu, parkowania, częstotliwości oraz godzin sprzątania.",
    variant: "accent" as const,
  },
];

const faqItems = [
  {
    question: "Ile kosztuje sprzątanie gabinetu we Wrocławiu?",
    answer:
      "Cena zależy od metrażu, liczby pomieszczeń, rodzaju gabinetu, zakresu prac, godzin realizacji i częstotliwości. Mały gabinet jednoosobowy będzie wyceniany inaczej niż lokal z recepcją, poczekalnią, toaletą i kilkoma stanowiskami.",
  },
  {
    question: "Czy można zamówić regularne sprzątanie gabinetu?",
    answer:
      "Tak. Sprzątanie gabinetu może być jednorazowe lub cykliczne, np. raz w tygodniu, kilka razy w tygodniu albo codziennie. Harmonogram najlepiej dopasować do godzin pracy gabinetu.",
  },
  {
    question: "Czy sprzątacie gabinety lekarskie i kosmetyczne?",
    answer:
      "Podstrona obejmuje zapytania o gabinety lekarskie, kosmetyczne, terapeutyczne, fizjoterapeutyczne, stomatologiczne, masażu i inne małe lokale usługowe. Zakres należy każdorazowo ustalić przed realizacją.",
  },
  {
    question: "Czy sprzątanie gabinetu obejmuje dezynfekcję?",
    answer:
      "Standardowy zakres obejmuje sprzątanie i czyszczenie ustalonych powierzchni. Dezynfekcja specjalistyczna, procedury sanitarne lub środki wymagane dla konkretnej branży powinny być potwierdzone indywidualnie przed realizacją.",
  },
  {
    question: "Czy można sprzątać gabinet po godzinach pracy?",
    answer:
      "Tak, przy gabinetach często preferowane jest sprzątanie rano, wieczorem, po zamknięciu albo w określonych dniach tygodnia. Dostępność zależy od lokalizacji, częstotliwości i zakresu.",
  },
  {
    question: "Czy można zamówić sprzątanie gabinetu po remoncie?",
    answer:
      "Tak. Przy sprzątaniu po remoncie warto podać metraż, rodzaj prac, liczbę pomieszczeń, ilość pyłu, liczbę okien i zdjęcia lokalu.",
  },
  {
    question: "Czy wystawiacie fakturę?",
    answer:
      "Możliwość wystawienia faktury warto potwierdzić przed realizacją. Dla gabinetów B2B faktura może być jednym z kluczowych czynników decyzji.",
  },
  {
    question: "Czy środki czystości są po stronie klienta czy wykonawcy?",
    answer:
      "Zakres i materiały warto ustalić przed realizacją. Przy stałej obsłudze gabinetu można określić, które środki, worki, papier, ręczniki i mydło są dostępne na miejscu.",
  },
];

const relatedLinks = [
  {
    href: "/sprzatanie-biur-wroclaw/",
    title: "Sprzątanie biur we Wrocławiu",
    description: "Dla większych lokali firmowych, biur, recepcji i części wspólnych.",
  },
  {
    href: "/sprzatanie-po-remoncie-wroclaw/",
    title: "Sprzątanie po remoncie gabinetu",
    description: "Przy adaptacji lokalu, odświeżeniu gabinetu lub przygotowaniu do otwarcia.",
  },
  {
    href: "/cennik-sprzatania-wroclaw/",
    title: "Cennik sprzątania we Wrocławiu",
    description: "Orientacyjne informacje o tym, od czego zależy koszt sprzątania.",
  },
  {
    href: "/mycie-okien-wroclaw/",
    title: "Mycie okien w gabinecie",
    description: "Usługa dodatkowa przy oknach, witrynach i przeszklonych drzwiach.",
  },
];

const formFields = [
  { label: "Imię", name: "imie", type: "text", autoComplete: "given-name", required: true },
  { label: "Telefon", name: "telefon", type: "tel", autoComplete: "tel", required: true },
  { label: "E-mail", name: "email", type: "email", autoComplete: "email" },
  { label: "Dzielnica / miejscowość", name: "lokalizacja", type: "text", required: true },
  { label: "Metraż", name: "metraz", type: "text", placeholder: "np. 45 m2", required: true },
  { label: "Liczba pomieszczeń", name: "pomieszczenia", type: "text" },
];

const selectFields = [
  {
    label: "Rodzaj gabinetu",
    name: "rodzaj-gabinetu",
    options: [
      "lekarski",
      "kosmetyczny",
      "stomatologiczny",
      "fizjoterapeutyczny",
      "masażu",
      "psychologiczny / terapeutyczny",
      "inny lokal usługowy",
    ],
  },
  {
    label: "Czy jest toaleta dla klientów/pacjentów?",
    name: "toaleta",
    options: ["tak", "nie", "do ustalenia"],
  },
  {
    label: "Czy jest recepcja/poczekalnia?",
    name: "recepcja-poczekalnia",
    options: ["tak", "nie", "do ustalenia"],
  },
  {
    label: "Rodzaj sprzątania",
    name: "rodzaj-sprzatania",
    options: ["jednorazowe", "cykliczne", "po remoncie", "przed otwarciem", "po poprzednim najemcy"],
  },
  {
    label: "Preferowane godziny",
    name: "preferowane-godziny",
    options: ["rano", "po zamknięciu", "weekend", "do ustalenia"],
  },
  {
    label: "Dodatki",
    name: "dodatki",
    options: [
      "mycie okien",
      "przeszklone drzwi/witryny",
      "doczyszczanie podłogi",
      "zaplecze",
      "lodówka/szafki",
      "prace okresowe",
      "bez dodatków",
    ],
  },
];

export const metadata: Metadata = {
  title: "Sprzątanie gabinetów Wrocław – lekarskich, kosmetycznych i usługowych",
  description:
    "Sprzątanie gabinetów we Wrocławiu: lekarskich, kosmetycznych, terapeutycznych, stomatologicznych i usługowych. Jednorazowo lub cyklicznie. Podaj metraż, zakres i termin.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Sprzątanie gabinetów Wrocław – lekarskich, kosmetycznych i usługowych",
    description:
      "Sprzątanie gabinetów we Wrocławiu: lekarskich, kosmetycznych, terapeutycznych, stomatologicznych i usługowych. Jednorazowo lub cyklicznie.",
    url: pagePath,
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    title: "Sprzątanie gabinetów Wrocław – lekarskich, kosmetycznych i usługowych",
    description:
      "Sprzątanie gabinetów we Wrocławiu: lekarskich, kosmetycznych, terapeutycznych, stomatologicznych i usługowych.",
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

function CabinetLeadForm() {
  return (
    <div className="ui-form-shell">
      <LeadForm
        action="/api/contact"
        method="post"
        support="Przy gabinetach szczególnie pomocne są informacje o metrażu, liczbie pomieszczeń, rodzaju działalności, godzinach pracy oraz oczekiwanej częstotliwości sprzątania."
        actions={
          <Button type="submit" variant="primary">
            Wyślij zapytanie o sprzątanie gabinetu
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

        <FormField className="ui-lead-form__full" label="Wiadomość">
          <textarea
            className="ui-form-field__control"
            name="wiadomosc"
            placeholder="Opisz zakres: gabinet właściwy, recepcja, poczekalnia, toaleta, zaplecze, godziny pracy, częstotliwość i ewentualne dodatki."
            rows={5}
          />
        </FormField>

        <FormField className="ui-lead-form__full" label="Zdjęcia gabinetu (opcjonalnie)">
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

export default function SprzatanieGabinetowWroclawPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${pagePath}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Sprzątanie gabinetów Wrocław",
      url: pageUrl,
      serviceType: "Sprzątanie gabinetów",
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
        "Sprzątanie gabinetów lekarskich, kosmetycznych, terapeutycznych, stomatologicznych, fizjoterapeutycznych i usługowych we Wrocławiu oraz okolicach.",
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
                description="Sprzątanie małych i średnich gabinetów we Wrocławiu: lekarskich, kosmetycznych, terapeutycznych, stomatologicznych i usługowych."
                kicker="Sprzątanie gabinetów Wrocław"
                support="Prowadzisz gabinet lekarski, kosmetyczny, terapeutyczny, stomatologiczny, masażu albo mały lokal usługowy? Pomagamy dopasować zakres sprzątania do rodzaju gabinetu, metrażu, godzin pracy i częstotliwości realizacji."
                title="Sprzątanie gabinetów Wrocław - czystość w miejscu, gdzie liczy się zaufanie"
                titleAs="h1"
                titleClassName="ui-service-hero__title"
              />
              
              <div className="ui-home-hero__checklist">
                <CheckList items={heroHighlights} />
              </div>
              <div className="ui-cluster ui-service-hero__actions">
                <Button href="#formularz" size="lg" variant="primary">
                  Wyślij zapytanie o sprzątanie gabinetu
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
        description="W wycenie można uwzględnić różne typy małych i średnich lokali, w których liczy się regularny porządek, estetyka i czystość stref dostępnych dla klientów lub pacjentów."
        id="gabinety"
        kicker="Dla jakich gabinetów"
        muted
        title="Jakie gabinety możemy uwzględnić w wycenie?"
      >
        <CardsGrid cards={cabinetCards} columns={3} />
      </ServiceSection>

      <ServiceSection
        id="kiedy"
        kicker="Kiedy zamówić"
        title="Kiedy przyda się sprzątanie gabinetu?"
      >
        <CardsGrid cards={whenCards} columns={3} />
      </ServiceSection>

      <ServiceSection
        description="Zakres sprzątania gabinetu zależy od rodzaju działalności, metrażu, liczby pomieszczeń, liczby stanowisk, częstotliwości realizacji i oczekiwanego standardu czystości."
        id="zakres"
        kicker="Zakres prac"
        muted
        title="Co może obejmować sprzątanie gabinetu?"
      >
        <CardsGrid cards={scopeCards} />
        <p className="ui-callout">
          Na stronie celowo używamy określeń sprzątanie i utrzymanie czystości. Dezynfekcja specjalistyczna, procedury sanitarne lub środki wymagane dla konkretnej branży powinny być potwierdzone indywidualnie przed realizacją.
        </p>
      </ServiceSection>

      <ServiceSection
        description="Sprzątanie jednorazowe sprawdzi się, gdy gabinet wymaga odświeżenia, przygotowania do otwarcia, sprzątania po remoncie, po poprzednim najemcy albo po większym okresie pracy. Sprzątanie cykliczne będzie lepsze, jeśli gabinet działa regularnie i potrzebujesz powtarzalnej obsługi."
        id="cykliczne"
        kicker="Jednorazowo czy cyklicznie"
        title="Sprzątanie gabinetu jednorazowo lub w stałej obsłudze"
      >
        <div className="ui-grid-2">
          <FeatureCard
            description="Dobre przy odświeżeniu lokalu, po remoncie, przed otwarciem, po poprzednim najemcy albo po intensywnym okresie przyjęć."
            title="Sprzątanie jednorazowe"
          />
          <FeatureCard
            description="Dla gabinetów działających regularnie: raz w tygodniu, kilka razy w tygodniu albo codziennie, zależnie od liczby wizyt i pomieszczeń."
            title="Sprzątanie cykliczne"
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
        description="Im dokładniej opiszesz gabinet, tym łatwiej przygotować realną wycenę. Przy gabinetach ważne są nie tylko metry, ale też liczba pomieszczeń, toaleta, recepcja, godziny pracy, częstotliwość oraz wymagania dotyczące powierzchni wspólnych."
        id="wycena"
        kicker="Proces wyceny"
        muted
        title="Jak wygląda wycena sprzątania gabinetu?"
      >
        <div className="ui-grid-2">
          <FeatureCard list={<ProcessSteps steps={processSteps.slice(0, 2)} />} title="Zgłoszenie i zakres" />
          <FeatureCard
            list={<ProcessSteps steps={processSteps.slice(2)} />}
            title="Orientacyjna wycena"
            variant="accent"
          />
        </div>
      </ServiceSection>

      <ServiceSection
        description="Cena sprzątania gabinetu zależy od metrażu, liczby pomieszczeń, rodzaju działalności, zakresu prac, częstotliwości oraz tego, czy usługa ma być jednorazowa, czy cykliczna."
        id="cennik"
        kicker="Cennik"
        title="Ile kosztuje sprzątanie gabinetu we Wrocławiu?"
      >
        <PricingTable />
        <p className="ui-callout">
          Podane kwoty są orientacyjne i nie stanowią oferty handlowej. Ostateczna cena zależy od zakresu, metrażu, częstotliwości, lokalizacji, godzin realizacji i stanu gabinetu.
        </p>
        <div className="ui-cluster">
          <Button href="#formularz">Wyślij metraż gabinetu i zakres sprzątania</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        id="czynniki-ceny"
        kicker="Czynniki ceny"
        muted
        title="Co wpływa na koszt sprzątania gabinetu?"
      >
        <CardsGrid cards={priceFactorCards} columns={3} />
      </ServiceSection>

      <ServiceSection
        description="Obsługujemy zgłoszenia dotyczące sprzątania gabinetów na terenie Wrocławia oraz wybranych miejscowości w okolicy. Dotyczy to zarówno małych gabinetów jednoosobowych, jak i większych lokali z recepcją, poczekalnią, toaletą i kilkoma pomieszczeniami."
        id="obszar"
        kicker="Lokalnie"
        title="Sprzątanie gabinetów we Wrocławiu i okolicach"
      >
        <CardsGrid cards={areaCards} />
      </ServiceSection>

      <ServiceSection
        description="Podaj podstawowe informacje o gabinecie, rodzaju działalności, metrażu, pomieszczeniach, godzinach pracy i oczekiwanej częstotliwości."
        id="formularz"
        kicker="Formularz wyceny"
        muted
        title="Zapytaj o sprzątanie gabinetu"
      >
        <CabinetLeadForm />
      </ServiceSection>

      <ServiceSection
        id="faq"
        kicker="FAQ"
        title="Najczęstsze pytania o sprzątanie gabinetów we Wrocławiu"
      >
        <FAQAccordion items={faqItems} />
        <div className="ui-cluster">
          <Button href="#formularz">Ustal zakres sprzątania gabinetu</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        description="Zobacz także powiązane usługi dla biur, gabinetów, lokali i prac okresowych."
        id="powiazane"
        kicker="Powiązane usługi"
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
