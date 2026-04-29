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

const pagePath = "/sprzatanie-biur-wroclaw";

const navigationLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#koncepcja", label: "Jak działa" },
  { href: "#cennik", label: "Cennik" },
  { href: "#wybor", label: "Zakres" },
  { href: "#obszar", label: "Obszar" },
  { href: "#zakup", label: "Formularz" },
  { href: "#faq", label: "FAQ" },
];

const heroHighlights = [
  "Sprzątanie jednorazowe i cykliczne",
  "Biura, gabinety i lokale usługowe",
  "Wycena na podstawie metrażu i zakresu",
  "Wrocław oraz okolice",
];

const problemCards = [
  {
    title: "Niejasny zakres prac",
    description:
      "Jeśli nie ustalisz, co dokładnie ma być sprzątane, łatwo o rozbieżności: biurka, kuchnia, toalety, podłogi, kosze, recepcja, sala konferencyjna czy części wspólne.",
    variant: "neutral" as const,
  },
  {
    title: "Niedopasowana częstotliwość",
    description:
      "Nie każde biuro wymaga codziennego sprzątania. Czasem wystarczy 1-2 razy w tygodniu, a czasem potrzebna jest stała obsługa kilka razy w tygodniu.",
    variant: "accent" as const,
  },
  {
    title: "Godziny pracy firmy",
    description:
      "Sprzątanie biura często musi odbywać się rano, wieczorem albo po zamknięciu lokalu, żeby nie przeszkadzać pracownikom i klientom.",
    variant: "warm" as const,
  },
  {
    title: "Trudna wycena bez danych",
    description:
      "Do sensownej wyceny potrzebny jest metraż, liczba pomieszczeń, toalety, kuchnia, częstotliwość oraz informacja, czy potrzebne są środki i sprzęt.",
    variant: "neutral" as const,
  },
];

const processSteps = [
  {
    label:
      "Wysyłasz zgłoszenie: podajesz lokalizację biura, metraż, liczbę pomieszczeń i preferowaną częstotliwość sprzątania.",
  },
  {
    label:
      "Doprecyzowujemy zakres: ustalamy biurka, podłogi, kuchnię, toalety, recepcję, salę konferencyjną, kosze i części wspólne.",
  },
  {
    label:
      "Przygotowujemy wycenę zależną od powierzchni, zakresu, częstotliwości, godzin realizacji i usług dodatkowych.",
  },
  {
    label:
      "Ustalamy stałą obsługę: po akceptacji można potwierdzić dni, godziny oraz sposób realizacji sprzątania biura.",
  },
];

const solutionCards = [
  {
    title: "Szybka wycena",
    description:
      "Im dokładniej opiszesz biuro, tym szybciej można przygotować orientacyjną cenę i sprawdzić dostępność.",
    variant: "neutral" as const,
  },
  {
    title: "Jasny zakres",
    description:
      "Ustalamy, które pomieszczenia i czynności mają być objęte sprzątaniem, żeby firma wiedziała, za co płaci.",
    variant: "accent" as const,
  },
  {
    title: "Godziny dopasowane do pracy biura",
    description:
      "Sprzątanie można zaplanować poza godzinami pracy, rano, wieczorem albo w ustalonych przedziałach czasowych.",
    variant: "warm" as const,
  },
  {
    title: "Możliwość stałej współpracy",
    description:
      "Dla firm najlepiej sprawdza się cykliczna obsługa: raz, kilka razy w tygodniu albo codziennie.",
    variant: "neutral" as const,
  },
];

const priceCards = [
  {
    title: "Metraż biura",
    description:
      "Im większa powierzchnia, tym większy zakres pracy. Do wyceny warto podać orientacyjny metraż oraz liczbę pomieszczeń.",
    variant: "neutral" as const,
  },
  {
    title: "Częstotliwość",
    description:
      "Sprzątanie może odbywać się jednorazowo, raz w tygodniu, kilka razy w tygodniu albo codziennie.",
    variant: "accent" as const,
  },
  {
    title: "Zakres prac",
    description:
      "Na cenę wpływa m.in. sprzątanie stanowisk, podłóg, kuchni, toalet, recepcji, sal konferencyjnych i części wspólnych.",
    variant: "warm" as const,
  },
  {
    title: "Godziny realizacji",
    description:
      "Znaczenie ma to, czy sprzątanie ma odbywać się w godzinach pracy, przed otwarciem, po zamknięciu albo wieczorem.",
    variant: "neutral" as const,
  },
];

const officeScopeItems = [
  "odkurzanie i mycie podłóg",
  "opróżnianie koszy",
  "wycieranie kurzu z dostępnych powierzchni",
  "sprzątanie kuchni lub aneksu",
  "czyszczenie toalet",
  "sprzątanie recepcji",
  "sprzątanie sal konferencyjnych",
  "uzupełnianie podstawowych środków higienicznych, jeśli zostanie ustalone",
  "mycie drzwi, klamek i powierzchni dotykowych",
  "okresowe mycie okien lub przeszkleń",
];

const serviceCards = [
  {
    title: "Sprzątanie cykliczne",
    description:
      "Dla firm, które chcą utrzymać stały porządek w biurze. Możliwe terminy: raz w tygodniu, kilka razy w tygodniu albo codziennie.",
    variant: "neutral" as const,
  },
  {
    title: "Sprzątanie jednorazowe",
    description:
      "Dobre rozwiązanie po przeprowadzce biura, remoncie, większym spotkaniu, evencie albo przed ważną wizytą klientów.",
    variant: "accent" as const,
  },
  {
    title: "Sprzątanie gabinetów",
    description:
      "Dla małych biur, gabinetów specjalistycznych, kancelarii, pracowni, showroomów i punktów obsługi klienta.",
    variant: "warm" as const,
  },
  {
    title: "Sprzątanie lokali usługowych",
    description:
      "Dla lokali, w których ważna jest czystość części dostępnej dla klientów: recepcji, sali obsługi, poczekalni, toalet i zaplecza.",
    variant: "neutral" as const,
  },
  {
    title: "Sprzątanie części wspólnych",
    description:
      "Dla przestrzeni biurowych, klatek, korytarzy, kuchni, toalet, open space i sal konferencyjnych.",
    variant: "accent" as const,
  },
  {
    title: "Usługi dodatkowe",
    description:
      "Mycie okien, doczyszczanie podłóg, sprzątanie po remoncie, pranie tapicerki lub prace okresowe zależnie od dostępności wykonawcy.",
    variant: "warm" as const,
  },
];

const trustCards = [
  {
    title: "Małe biuro 40-80 m2",
    description:
      "Sprzątanie 1-2 razy w tygodniu, odkurzanie, podłogi, kosze, kuchnia i toaleta.",
    variant: "neutral" as const,
  },
  {
    title: "Biuro open space",
    description:
      "Regularne sprzątanie stanowisk, ciągów komunikacyjnych, sal konferencyjnych i części wspólnych.",
    variant: "accent" as const,
  },
  {
    title: "Lokal usługowy",
    description:
      "Sprzątanie po godzinach pracy, z naciskiem na strefę klienta, zaplecze i toalety.",
    variant: "warm" as const,
  },
];

const areaCards = [
  {
    title: "Wrocław",
    description:
      "Krzyki, Fabryczna, Psie Pole, Śródmieście, Stare Miasto, Ołtaszyn, Jagodno, Muchobór, Gądów, Grabiszyn, Biskupin, Nadodrze, Karłowice, Klecina i inne osiedla.",
    variant: "neutral" as const,
  },
  {
    title: "Okolice Wrocławia",
    description:
      "Bielany Wrocławskie, Długołęka, Siechnice, Kiełczów, Smolec, Kobierzyce, Mokronos Dolny, Wysoka i wybrane miejscowości w pobliżu miasta.",
    variant: "accent" as const,
  },
];

const faqItems = [
  {
    question: "Ile kosztuje sprzątanie biura we Wrocławiu?",
    answer:
      "Cena zależy od metrażu biura, liczby pomieszczeń, częstotliwości sprzątania, godzin realizacji oraz zakresu prac. Najszybciej przygotować wycenę po podaniu lokalizacji, metrażu, liczby toalet, informacji o kuchni lub aneksie oraz preferowanej częstotliwości.",
  },
  {
    question: "Czy można zamówić stałe sprzątanie biura?",
    answer:
      "Tak. Sprzątanie biura może być realizowane cyklicznie: raz w tygodniu, kilka razy w tygodniu albo codziennie. Zakres i częstotliwość są ustalane indywidualnie.",
  },
  {
    question: "Czy sprzątanie może odbywać się po godzinach pracy?",
    answer:
      "Tak, w wielu przypadkach sprzątanie biura można zaplanować przed otwarciem, po zamknięciu, wieczorem lub w ustalonych godzinach, które nie przeszkadzają w pracy firmy.",
  },
  {
    question: "Co obejmuje standardowe sprzątanie biura?",
    answer:
      "Standardowo może obejmować odkurzanie i mycie podłóg, opróżnianie koszy, wycieranie kurzu z dostępnych powierzchni, sprzątanie kuchni lub aneksu, toalet, recepcji, sal konferencyjnych i części wspólnych.",
  },
  {
    question: "Czy środki czystości są po stronie wykonawcy?",
    answer:
      "To zależy od ustaleń. Przy zgłoszeniu warto zaznaczyć, czy środki i sprzęt mają być zapewnione przez wykonawcę, czy są dostępne na miejscu w biurze.",
  },
  {
    question: "Czy można zamówić jednorazowe sprzątanie biura?",
    answer:
      "Tak. Jednorazowe sprzątanie sprawdza się po przeprowadzce, remoncie, większym spotkaniu, evencie, zmianie najemcy albo przed ważną wizytą klientów.",
  },
  {
    question: "Czy obsługujecie małe biura i gabinety?",
    answer:
      "Tak. Zgłoszenie może dotyczyć zarówno małego gabinetu, kancelarii czy pracowni, jak i większego biura z wieloma pomieszczeniami.",
  },
  {
    question: "Jakie dane podać do wyceny?",
    answer:
      "Najlepiej podać lokalizację, metraż, liczbę pomieszczeń, liczbę toalet, informację o kuchni lub aneksie, oczekiwaną częstotliwość, preferowane godziny oraz zakres prac.",
  },
];

const relatedLinks = [
  {
    href: "/sprzatanie-po-remoncie-wroclaw/",
    title: "Sprzątanie po remoncie",
    description:
      "Sprzątanie biura lub lokalu po remoncie, modernizacji albo pracach wykończeniowych.",
  },
  {
    href: "/mycie-okien-wroclaw/",
    title: "Mycie okien",
    description:
      "Mycie okien, witryn i przeszkleń w biurach, lokalach usługowych oraz punktach obsługi klienta.",
  },
  {
    href: "/cennik-sprzatania-wroclaw/",
    title: "Cennik sprzątania",
    description:
      "Sprawdź, od czego zależy cena sprzątania mieszkań, biur, lokali i usług dodatkowych.",
  },
  {
    href: "/kontakt/",
    title: "Kontakt",
    description: "Wyślij zgłoszenie i opisz, jakiej obsługi potrzebuje Twoje biuro.",
  },
];

const formFields = [
  { label: "Nazwa firmy", name: "firma", type: "text", autoComplete: "organization" },
  { label: "Osoba kontaktowa", name: "kontakt", type: "text", autoComplete: "name", required: true },
  { label: "Telefon", name: "telefon", type: "tel", autoComplete: "tel", required: true },
  { label: "E-mail", name: "email", type: "email", autoComplete: "email" },
  { label: "Lokalizacja biura", name: "lokalizacja", type: "text", required: true },
  { label: "Metraż", name: "metraz", type: "text", placeholder: "np. 120 m2", required: true },
  { label: "Liczba pomieszczeń", name: "pomieszczenia", type: "text" },
  { label: "Liczba toalet", name: "toalety", type: "text" },
];

const selectFields = [
  {
    label: "Czy jest kuchnia/aneks?",
    name: "kuchnia",
    options: ["tak", "nie", "nie wiem"],
  },
  {
    label: "Preferowana częstotliwość",
    name: "czestotliwosc",
    options: ["jednorazowo", "raz w tygodniu", "kilka razy w tygodniu", "codziennie", "do ustalenia"],
  },
  {
    label: "Preferowane godziny sprzątania",
    name: "godziny",
    options: ["rano", "w godzinach pracy", "po godzinach pracy", "wieczorem", "do ustalenia"],
  },
  {
    label: "Czy potrzebne są środki i sprzęt?",
    name: "srodki-sprzet",
    options: ["tak", "nie", "do ustalenia"],
  },
];

export const metadata: Metadata = {
  title: "Sprzątanie biur Wrocław | Stała obsługa firm i lokali",
  description:
    "Sprzątanie biur we Wrocławiu — jednorazowo lub cyklicznie. Obsługa biur, gabinetów, lokali usługowych i części wspólnych. Wyślij metraż i częstotliwość do wyceny.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Sprzątanie biur Wrocław | Stała obsługa firm i lokali",
    description:
      "Sprzątanie biur we Wrocławiu — jednorazowo lub cyklicznie. Obsługa biur, gabinetów, lokali usługowych i części wspólnych.",
    url: pagePath,
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    title: "Sprzątanie biur Wrocław | Stała obsługa firm i lokali",
    description:
      "Sprzątanie biur we Wrocławiu — jednorazowo lub cyklicznie. Wyślij metraż i częstotliwość do wyceny.",
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
  cards,
  columns = 2,
}: {
  cards: Array<{
    title: string;
    description: string;
    variant: "neutral" | "accent" | "warm";
  }>;
  columns?: 2 | 3;
}) {
  return (
    <div className={columns === 3 ? "ui-grid-3" : "ui-grid-2"}>
      {cards.map((card) => (
        <FeatureCard
          description={card.description}
          key={card.title}
          title={card.title}
          variant={card.variant}
        />
      ))}
    </div>
  );
}

function OfficeLeadForm() {
  return (
    <div className="ui-form-shell">
      <LeadForm
        action="#"
        method="post"
        support="Im dokładniej opiszesz biuro i oczekiwany zakres, tym szybciej można przygotować sensowną wycenę."
        actions={
          <Button size="lg" type="submit" variant="primary">
            Wyślij zapytanie o sprzątanie biura
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

        <FormField className="ui-lead-form__full" label="Zakres prac">
          <textarea
            className="ui-form-field__control"
            name="zakres"
            placeholder="Opisz biurka, podłogi, kuchnię, toalety, recepcję, sale konferencyjne, kosze, części wspólne i usługi dodatkowe."
            rows={4}
          />
        </FormField>
        <FormField className="ui-lead-form__full" label="Wiadomość">
          <textarea
            className="ui-form-field__control"
            name="wiadomosc"
            placeholder="Dodaj informacje o dostępie do biura, parkingu, preferowanych dniach lub szczególnych wymaganiach."
            rows={4}
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

export default function SprzatanieBiurWroclawPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${pagePath}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Sprzątanie biur Wrocław",
      url: pageUrl,
      serviceType: "Sprzątanie biur",
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
        "Sprzątanie biur, gabinetów, lokali usługowych i części wspólnych we Wrocławiu oraz okolicach.",
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
          ctaHref="#zakup"
          ctaLabel="Wyślij metraż"
          links={navigationLinks}
        />
      }
      footer={
        <div className="ui-mobile-sticky-bar">
          <a className="ui-mobile-sticky-link" href="#zakup">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <section className="ui-section section section--hero" id="hero">
        <Container>
          <SectionCard variant="hero">
            <div className="ui-home-hero">
              <SectionHeader
                align="center"
                className="ui-home-hero__header"
                description="Organizujemy sprzątanie biur, gabinetów, lokali usługowych i części wspólnych we Wrocławiu oraz okolicach. Podaj metraż, lokalizację, częstotliwość i preferowane godziny - przygotujemy wycenę stałej lub jednorazowej obsługi."
                kicker="Sprzątanie biur Wrocław"
                support="Wyślij metraż i częstotliwość - przygotujemy wycenę sprzątania biura."
                title="Sprzątanie biur Wrocław - stała obsługa firm i lokali"
                titleAs="h1"
                titleClassName="ui-home-hero__title"
              />
              <div className="ui-home-hero__checklist">
                <CheckList items={heroHighlights} />
              </div>
              <div className="ui-cluster ui-home-hero__actions">
                <Button href="#zakup" size="lg" variant="primary">
                  Wyślij metraż i godziny sprzątania
                </Button>
                <Button href="#zakup" size="lg" variant="secondary">
                  Wyślij metraż i częstotliwość
                </Button>
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <ServiceSection
        description="W biurze liczy się nie tylko czystość, ale też regularność, godziny pracy, zakres obowiązków i przewidywalność. Inaczej wygląda sprzątanie małego gabinetu raz w tygodniu, inaczej codzienna obsługa większego biura, a jeszcze inaczej sprzątanie lokalu usługowego po godzinach pracy."
        id="problem"
        kicker="Plan 1 / Problem"
        muted
        title="Dlaczego sprzątanie biura warto ustalić dokładniej niż zwykłe porządki?"
      >
        <CardsGrid cards={problemCards} />
      </ServiceSection>

      <ServiceSection
        description="Sprzątanie biura można zaplanować jako usługę jednorazową albo stałą obsługę cykliczną. Najpierw ustalamy zakres, częstotliwość i godziny pracy, a potem na tej podstawie przygotowujemy wycenę dopasowaną do realnych potrzeb firmy."
        id="koncepcja"
        kicker="Plan 2 / Koncepcja"
        title="Jak wygląda sprzątanie biur we Wrocławiu?"
      >
        <div className="ui-grid-2">
          <FeatureCard list={<ProcessSteps steps={processSteps.slice(0, 2)} />} title="Zgłoszenie i zakres" />
          <FeatureCard
            list={<ProcessSteps steps={processSteps.slice(2)} />}
            title="Wycena i obsługa"
            variant="accent"
          />
        </div>
      </ServiceSection>

      <ServiceSection
        description="Sprzątanie biura powinno być przewidywalne. Dlatego przed wyceną zbieramy dane, które pomagają dopasować zakres prac, częstotliwość i godziny realizacji - bez zgadywania, niedopowiedzeń i przypadkowych stawek."
        id="rozwiazania"
        kicker="Plan 3 / Stała obsługa bez chaosu"
        muted
        title="Szukamy rozwiązań, nie wymówek"
      >
        <CardsGrid cards={solutionCards} />
      </ServiceSection>

      <ServiceSection
        description="Cena sprzątania biura zależy od metrażu, liczby pomieszczeń, częstotliwości, godzin realizacji oraz zakresu prac. Inaczej wycenia się mały gabinet sprzątany raz w tygodniu, a inaczej biuro z kuchnią, toaletami, recepcją i kilkudziesięcioma stanowiskami pracy."
        id="cennik"
        kicker="Plan 4 / Cennik i zakres"
        title="Ile kosztuje sprzątanie biura we Wrocławiu?"
      >
        <CardsGrid cards={priceCards} />
        <FeatureCard
          list={<CheckList compact items={officeScopeItems} />}
          title="Co może obejmować sprzątanie biura?"
          variant="accent"
        />
        <div className="ui-cluster">
          <Button href="#zakup">Wyślij metraż i częstotliwość</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        description="Zakres obsługi można dopasować do rodzaju firmy, liczby pracowników, godzin pracy i standardu, jaki chcesz utrzymać w biurze."
        id="wybor"
        kicker="Plan 5 / Wybór obsługi"
        muted
        title="Jakiego sprzątania biura potrzebujesz?"
      >
        <CardsGrid cards={serviceCards} columns={3} />
        <div className="ui-stack-md">
          <SectionHeader kicker="Zaufanie" title="Typowe realizacje dla firm" />
          <CardsGrid cards={trustCards} columns={3} />
        </div>
      </ServiceSection>

      <ServiceSection
        description="Obsługujemy zgłoszenia dotyczące sprzątania biur, gabinetów i lokali usługowych na terenie Wrocławia oraz wybranych miejscowości w okolicy. Przy wycenie podaj dokładną lokalizację, metraż i preferowane godziny realizacji."
        id="obszar"
        kicker="Obszar działania"
        title="Sprzątanie biur we Wrocławiu i okolicach"
      >
        <CardsGrid cards={areaCards} />
        <div className="ui-cluster">
          <Button href="#zakup">Sprawdź możliwość obsługi Twojego biura</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        description="Podaj podstawowe informacje o biurze, a wrócimy z wyceną lub dodatkowymi pytaniami. Najważniejsze są: lokalizacja, metraż, liczba pomieszczeń, częstotliwość i preferowane godziny sprzątania."
        id="zakup"
        kicker="Plan 6 / Zgłoszenie"
        muted
        title="Wyślij dane biura i preferowane godziny"
      >
        <OfficeLeadForm />
      </ServiceSection>

      <ServiceSection
        id="faq"
        kicker="FAQ"
        title="Najczęstsze pytania o sprzątanie biur we Wrocławiu"
      >
        <FAQAccordion items={faqItems} />
        <div className="ui-cluster">
          <Button href="#zakup">Ustal zakres sprzątania biura</Button>
        </div>
      </ServiceSection>

      <ServiceSection
        description="Zobacz także usługi powiązane ze sprzątaniem biur, lokali i powierzchni firmowych."
        id="powiazane"
        kicker="Dowiedz się więcej"
        muted
        title="Powiązane usługi sprzątania"
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
