import type { Metadata } from "next";
import Link from "next/link";

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

const pagePath = "/sprzatanie-domow-wroclaw";

export const metadata: Metadata = {
  title: "Sprzątanie domów Wrocław - standardowe, generalne i po remoncie",
  description:
    "Sprzątanie domów we Wrocławiu i okolicach. Standardowe, generalne, po remoncie, po wyprowadzce i przed sprzedażą. Podaj metraż, zakres i termin - sprawdź wycenę.",
  alternates: {
    canonical: pagePath,
  },
};

const navigationLinks = [
  { href: "#kiedy", label: "Kiedy" },
  { href: "#zakres", label: "Zakres" },
  { href: "#wycena", label: "Wycena" },
  { href: "#cennik", label: "Cennik" },
  { href: "#lokalizacje", label: "Lokalizacje" },
  { href: "#formularz", label: "Formularz" },
  { href: "#faq", label: "FAQ" },
];

const heroHighlights = [
  "wycena po metrażu i zakresie",
  "sprzątanie standardowe, generalne i po remoncie",
  "obsługa Wrocławia i okolic",
  "dodatki ustalane przed realizacją",
];

const problemCards = [
  {
    title: "Sprzątanie standardowe domu",
    description:
      "Dla osób, które chcą odświeżyć dom po tygodniu, przed gośćmi lub po intensywnym użytkowaniu.",
  },
  {
    title: "Sprzątanie generalne domu",
    description:
      "Dla domów wymagających dokładniejszego czyszczenia kuchni, łazienek, podłóg, listew, drzwi, schodów i trudno dostępnych miejsc.",
  },
  {
    title: "Sprzątanie domu po remoncie",
    description:
      "Dla domów po malowaniu, montażu mebli, pracach budowlanych lub większym odświeżeniu.",
  },
  {
    title: "Sprzątanie domu przed sprzedażą lub wynajmem",
    description:
      "Dla właścicieli, którzy chcą przygotować nieruchomość do zdjęć, prezentacji albo przekazania nowym mieszkańcom.",
  },
];

const scopeCards = [
  {
    title: "Kuchnia i jadalnia",
    items: [
      "czyszczenie blatów i frontów z zewnątrz",
      "mycie zlewu, płyty i powierzchni roboczych",
      "odkurzanie i mycie podłogi",
      "możliwość rozszerzenia o piekarnik, lodówkę i wnętrza szafek",
    ],
  },
  {
    title: "Łazienki i toalety",
    items: [
      "czyszczenie umywalek, baterii, kabiny, wanny i toalety",
      "mycie luster i powierzchni",
      "doczyszczanie osadów w podstawowym zakresie",
      "mycie podłóg i płytek w ustalonym zakresie",
    ],
  },
  {
    title: "Pokoje, salon i sypialnie",
    items: [
      "odkurzanie i mycie podłóg",
      "wycieranie kurzu z dostępnych powierzchni",
      "czyszczenie parapetów, listew i drzwi",
      "uporządkowanie podstawowych powierzchni",
    ],
  },
  {
    title: "Schody, korytarze i ciągi komunikacyjne",
    items: [
      "odkurzanie schodów",
      "mycie podłóg",
      "czyszczenie poręczy",
      "odświeżenie wejścia i przedpokoju",
    ],
  },
  {
    title: "Okna, taras, balkon, garaż",
    items: [
      "mycie okien jako usługa dodatkowa",
      "balkon lub taras po wcześniejszym ustaleniu",
      "garaż, piwnica lub pomieszczenia gospodarcze wyceniane indywidualnie",
    ],
  },
];

const processSteps = [
  {
    label:
      "Wysyłasz dane o domu: metraż, liczbę kondygnacji, łazienki, lokalizację, zakres prac i preferowany termin.",
  },
  {
    label:
      "Doprecyzowujemy, czy chodzi o sprzątanie standardowe, generalne, po remoncie, po wyprowadzce albo przed sprzedażą.",
  },
  {
    label:
      "Otrzymujesz orientacyjną wycenę i termin na podstawie zakresu, dostępności ekipy oraz ewentualnych dodatków.",
  },
];

const pricingRows = [
  ["Sprzątanie standardowe domu", "od ok. 250-450 zł"],
  ["Sprzątanie większego domu", "wycena indywidualna po metrażu i zakresie"],
  ["Sprzątanie generalne domu", "od ok. 400-800 zł+"],
  ["Sprzątanie domu po remoncie", "najczęściej według m² i poziomu zabrudzeń"],
  ["Mycie okien w domu", "dodatkowo, według liczby i typu okien"],
  ["Garaż, taras, piwnica, pomieszczenia gospodarcze", "wycena indywidualna"],
];

const priceFactors = [
  {
    title: "Metraż i układ domu",
    items: ["powierzchnia domu", "liczba kondygnacji", "liczba pokoi", "liczba łazienek", "schody i korytarze"],
  },
  {
    title: "Zakres prac",
    items: [
      "sprzątanie standardowe",
      "sprzątanie generalne",
      "sprzątanie po remoncie",
      "sprzątanie po wyprowadzce",
      "przygotowanie domu do sprzedaży lub wynajmu",
    ],
  },
  {
    title: "Dodatki",
    items: [
      "mycie okien",
      "piekarnik, lodówka, wnętrza szafek",
      "taras, balkon, garaż",
      "piwnica lub pomieszczenia gospodarcze",
      "doczyszczanie trudniejszych zabrudzeń",
    ],
  },
  {
    title: "Warunki realizacji",
    items: [
      "dostęp do domu",
      "możliwość parkowania",
      "pilny termin",
      "konieczność pracy w określonych godzinach",
      "odległość od centrum Wrocławia",
    ],
  },
];

const audienceCards = [
  {
    title: "Dla właścicieli domów",
    description:
      "Gdy chcesz odświeżyć dom po intensywnym tygodniu, przed świętami, przed gośćmi albo po dłuższej nieobecności.",
  },
  {
    title: "Dla rodzin",
    description:
      "Gdy brakuje czasu na dokładne czyszczenie kuchni, łazienek, podłóg, schodów i okien.",
  },
  {
    title: "Dla osób po remoncie",
    description:
      "Gdy po malowaniu, montażu mebli albo pracach budowlanych został pył, zabrudzenia i ślady po ekipie remontowej.",
  },
  {
    title: "Dla właścicieli nieruchomości",
    description:
      "Gdy chcesz przygotować dom do zdjęć, prezentacji, przekazania najemcy albo odbioru przez kupującego.",
  },
  {
    title: "Dla osób po przeprowadzce",
    description:
      "Gdy dom trzeba posprzątać po opróżnieniu pomieszczeń albo przed wprowadzeniem nowych mieszkańców.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje sprzątanie domu we Wrocławiu?",
    answer:
      "Cena zależy od metrażu, liczby pomieszczeń, liczby łazienek, zakresu prac, dodatków i terminu. Inaczej wycenia się standardowe odświeżenie domu, a inaczej sprzątanie generalne lub poremontowe.",
  },
  {
    question: "Czy sprzątanie domu obejmuje mycie okien?",
    answer:
      "Mycie okien może być dodane do zakresu usługi. Warto podać liczbę okien, ich typ oraz informację, czy mają być myte tylko od środka, czy także z zewnątrz.",
  },
  {
    question: "Czy można zamówić sprzątanie domu po remoncie?",
    answer:
      "Tak. Przy sprzątaniu po remoncie warto opisać rodzaj prac, ilość pyłu, liczbę pomieszczeń, okien, łazienek oraz ewentualne trudniejsze zabrudzenia.",
  },
  {
    question: "Czy sprzątacie domy poza Wrocławiem?",
    answer:
      "Zgłoszenia mogą dotyczyć Wrocławia i okolic, m.in. Bielan Wrocławskich, Długołęki, Kiełczowa, Siechnic, Kobierzyc i Smolca. Termin zależy od lokalizacji, zakresu i dostępności ekipy.",
  },
  {
    question: "Czy można zamówić regularne sprzątanie domu?",
    answer:
      "Tak, ale zakres i częstotliwość warto ustalić indywidualnie. Przy regularnych zleceniach znaczenie ma metraż, liczba pomieszczeń, oczekiwany standard oraz godziny realizacji.",
  },
  {
    question: "Jak przygotować dom do wyceny sprzątania?",
    answer:
      "Najlepiej podać metraż, liczbę pięter, liczbę łazienek, zakres prac, dodatki, lokalizację i preferowany termin. Przy większych lub trudniejszych zleceniach pomocne są zdjęcia.",
  },
];

const homeFormFields = [
  { name: "imie", label: "Imię", type: "text", autoComplete: "given-name", required: true },
  { name: "telefon", label: "Telefon", type: "tel", autoComplete: "tel", required: true },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { name: "lokalizacja", label: "Dzielnica / miejscowość", type: "text", required: true },
];

const selectFields = [
  {
    name: "metraz",
    label: "Metraż domu",
    options: ["do 100 m²", "101-150 m²", "151-200 m²", "201-300 m²", "powyżej 300 m²"],
  },
  {
    name: "kondygnacje",
    label: "Liczba kondygnacji",
    options: ["1", "2", "3 lub więcej"],
  },
  {
    name: "lazienki",
    label: "Liczba łazienek",
    options: ["1", "2", "3", "4 lub więcej"],
  },
  {
    name: "rodzaj",
    label: "Rodzaj sprzątania",
    options: [
      "standardowe",
      "generalne",
      "po remoncie",
      "po wyprowadzce",
      "przed sprzedażą / wynajmem",
    ],
  },
  {
    name: "termin",
    label: "Preferowany termin",
    options: ["pilne (0-3 dni)", "w tym tygodniu", "w tym miesiącu", "do ustalenia"],
  },
];

const extras = [
  "okna",
  "piekarnik",
  "lodówka",
  "wnętrza szafek",
  "taras",
  "garaż",
  "piwnica",
];

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

function HomeLeadForm() {
  return (
    <div className="ui-form-shell">
      <LeadForm
        action="/api/contact"
        method="post"
        support="Przy domach szczególnie pomocne są informacje o metrażu, liczbie łazienek, schodach, oknach, tarasie, garażu i poziomie zabrudzeń."
        actions={
          <Button size="lg" type="submit" variant="primary">
            Wyślij metraż i zakres prac
          </Button>
        }
      >
        {homeFormFields.map(({ label, ...field }) => (
          <FormField key={field.name} label={label}>
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

        <fieldset className="ui-fieldset ui-lead-form__full">
          <legend className="ui-fieldset__legend">Dodatki</legend>
          <div className="ui-choice-list ui-choice-list--two-columns">
            {extras.map((extra) => (
              <label className="ui-choice-item" key={extra}>
                <input name="dodatki" type="checkbox" value={extra} />
                <span>{extra}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <FormField className="ui-lead-form__full" label="Opis domu i zakresu">
          <textarea
            className="ui-form-field__control"
            name="opis"
            placeholder="Opisz liczbę pomieszczeń, schody, okna, taras, garaż, poziom zabrudzeń i oczekiwany zakres."
            rows={5}
          />
        </FormField>

        <FormField className="ui-lead-form__full" label="Zdjęcia domu lub zabrudzeń (opcjonalnie)">
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

export default function SprzatanieDomowWroclawPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${pagePath}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Sprzątanie domów Wrocław",
      url: pageUrl,
      serviceType: "Sprzątanie domów",
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
      provider: {
        "@type": "Organization",
        name: "SprzątaniePro",
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <section className="ui-section section section--hero" id="hero">
        <Container>
          <SectionCard variant="hero">
            <div className="ui-service-hero">
              <SectionHeader
                align="center"
                description="Potrzebujesz posprzątać dom jednorodzinny, segment, bliźniak albo większe mieszkanie z tarasem? Wypełnij krótki formularz, podaj metraż, liczbę pomieszczeń, zakres prac i preferowany termin."
                kicker="Sprzątanie domów Wrocław"
                title="Sprzątanie domów Wrocław - standardowe, generalne i po remoncie"
                titleAs="h1"
                titleClassName="ui-service-hero__title"
              />
              <p className="ui-service-hero__subtitle">
                Sprzątanie domu wyceniamy według powierzchni, liczby łazienek, kondygnacji,
                okien, schodów, tarasu, garażu oraz poziomu zabrudzeń.
              </p>
              <div className="ui-cluster ui-service-hero__actions">
                <Button href="#formularz" size="lg">
                  Wyślij metraż i zakres prac
                </Button>
                <Button href="#wycena" size="lg" variant="secondary">
                  Sprawdź dostępny termin
                </Button>
              </div>
              <CheckList className="ui-home-hero__checklist" compact items={heroHighlights} />
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="kiedy">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader
                description="Sprzątanie domu zajmuje zwykle więcej czasu niż sprzątanie mieszkania. Dochodzą dodatkowe łazienki, schody, większa liczba okien, pomieszczenia gospodarcze, garaż, taras albo ogród zimowy."
                kicker="Zakres zlecenia"
                title="Kiedy warto zamówić sprzątanie domu we Wrocławiu?"
              />
              <div className="ui-grid-2">
                {problemCards.map((card) => (
                  <FeatureCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="zakres">
        <Container>
          <SectionCard muted>
            <div className="ui-stack-section">
              <SectionHeader
                description="Zakres sprzątania domu zależy od metrażu, liczby pomieszczeń, poziomu zabrudzeń i tego, czy usługa ma być standardowa, generalna, poremontowa czy przygotowująca dom do sprzedaży lub wynajmu."
                kicker="Co obejmuje usługa"
                title="Co może obejmować sprzątanie domu?"
              />
              <div className="ui-grid-2">
                {scopeCards.map((card) => (
                  <FeatureCard
                    key={card.title}
                    title={card.title}
                    list={<CheckList compact items={card.items} />}
                  />
                ))}
              </div>
              <div>
                <Button href="#formularz" variant="secondary">
                  Opisz dom i zakres sprzątania
                </Button>
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="wycena">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader
                description="Najpierw zbieramy konkretne dane o domu, potem doprecyzowujemy zakres i termin. Dzięki temu łatwiej uniknąć błędnej wyceny."
                kicker="Proces"
                title="Jak wygląda wycena sprzątania domu?"
              />
              <ProcessSteps steps={processSteps} />
              <p className="ui-callout">
                Im dokładniej opiszesz dom, tym łatwiej uniknąć błędnej wyceny. Przy większych
                domach znaczenie mają nie tylko metry, ale też liczba łazienek, okien, schodów,
                taras, garaż i poziom zabrudzeń.
              </p>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="cennik">
        <Container>
          <SectionCard muted>
            <div className="ui-stack-section">
              <SectionHeader
                description="Cena sprzątania domu zależy od powierzchni, liczby pomieszczeń, liczby łazienek, poziomu zabrudzeń, dodatków i terminu realizacji."
                kicker="Cennik orientacyjny"
                title="Ile kosztuje sprzątanie domu we Wrocławiu?"
              />
              <PricingTable />
              <p className="ui-section-header__support">
                Podane kwoty są orientacyjne i nie stanowią oferty handlowej. Ostateczna cena
                zależy od zakresu usługi, metrażu, stanu domu i ustaleń z wykonawcą.
              </p>
              <div>
                <Button href="#formularz">Sprawdź orientacyjny koszt sprzątania domu</Button>
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="czynniki">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader
                description="Największy wpływ na koszt mają metraż, układ domu, dodatki oraz warunki realizacji."
                kicker="Koszt usługi"
                title="Co wpływa na cenę sprzątania domu?"
              />
              <div className="ui-grid-2">
                {priceFactors.map((card) => (
                  <FeatureCard
                    key={card.title}
                    title={card.title}
                    list={<CheckList compact items={card.items} />}
                  />
                ))}
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="dla-kogo">
        <Container>
          <SectionCard muted>
            <div className="ui-stack-section">
              <SectionHeader
                description="Usługa pasuje do jednorazowych porządków, zleceń poremontowych, przygotowania domu do sprzedaży oraz regularnego utrzymania większej nieruchomości."
                kicker="Klienci"
                title="Dla kogo jest sprzątanie domów we Wrocławiu?"
              />
              <div className="ui-grid-3">
                {audienceCards.map((card) => (
                  <FeatureCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="lokalizacje">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader
                description="Obsługujemy zgłoszenia dotyczące sprzątania domów na terenie Wrocławia oraz okolicznych miejscowości. Najczęściej dotyczy to domów jednorodzinnych, segmentów, bliźniaków i nieruchomości przygotowywanych do sprzedaży, wynajmu albo odbioru po remoncie."
                kicker="Lokalnie"
                title="Sprzątanie domów we Wrocławiu i okolicach"
              />
              <div className="ui-grid-2">
                <FeatureCard
                  title="Wrocław"
                  description="Krzyki, Psie Pole, Fabryczna, Ołtaszyn, Jagodno, Muchobór, Leśnica, Śródmieście, Stare Miasto."
                />
                <FeatureCard
                  title="Okolice Wrocławia"
                  description="Bielany Wrocławskie, Długołęka, Kiełczów, Siechnice, Kobierzyce, Smolec."
                />
              </div>
              <p className="ui-callout">
                W przypadku domów poza centrum Wrocławia termin i cena mogą zależeć od dojazdu,
                zakresu prac oraz dostępności ekipy w danej lokalizacji.
              </p>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="realizacje">
        <Container>
          <SectionCard muted>
            <div className="ui-stack-section">
              <SectionHeader
                description="Najczęściej zgłaszane są domy po intensywnym użytkowaniu, po wyprowadzce, po remoncie albo przed zdjęciami sprzedażowymi. W każdym przypadku zakres ustalamy przed realizacją."
                kicker="Typowe realizacje"
                title="Jakie domy najczęściej trafiają do wyceny?"
              />
              <div className="ui-grid-3">
                <FeatureCard title="Dom jednorodzinny" description="Standardowe lub generalne sprzątanie domu z kuchnią, łazienkami, schodami i pokojami." />
                <FeatureCard title="Segment albo bliźniak" description="Wycena według metrażu, liczby kondygnacji, łazienek, schodów i dodatków." />
                <FeatureCard title="Dom po remoncie" description="Doczyszczanie pyłu, podłóg, listew, powierzchni roboczych i pomieszczeń po pracach." />
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="formularz">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader
                description="Podaj metraż, liczbę kondygnacji, łazienki, lokalizację, rodzaj sprzątania, dodatki i preferowany termin."
                kicker="Formularz wyceny"
                title="Wyślij metraż, zakres prac i preferowany termin"
              />
              <HomeLeadForm />
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="faq">
        <Container>
          <SectionCard muted>
            <div className="ui-stack-section">
              <SectionHeader
                kicker="FAQ"
                title="Najczęstsze pytania o sprzątanie domów we Wrocławiu"
              />
              <FAQAccordion items={faqItems} />
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="powiazane">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader
                description="Jeśli zakres dotyczy innego rodzaju lokalu albo remontu, sprawdź powiązane usługi."
                kicker="Powiązane usługi"
                title="Zobacz też inne usługi sprzątania"
              />
              <div className="ui-grid-3">
                <FeatureCard title={<Link href="/">Sprzątanie mieszkań Wrocław</Link>} description="Dla mniejszych lokali, mieszkań i apartamentów." />
                <FeatureCard title={<Link href="/sprzatanie-po-remoncie-wroclaw">Sprzątanie po remoncie Wrocław</Link>} description="Dla domów i mieszkań po pracach budowlanych." />
                <FeatureCard title={<Link href="/sprzatanie-biur-wroclaw">Sprzątanie biur Wrocław</Link>} description="Dla klientów firmowych i powierzchni biurowych." />
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>
    </PageShell>
  );
}
