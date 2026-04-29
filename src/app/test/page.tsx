import type { Metadata } from "next";

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
import SectionImage from "../../components/ui/SectionImage";
import TestimonialCard from "../../components/ui/TestimonialCard";

export const metadata: Metadata = {
  title: "DEFLO - kompleksowa obsługa nieruchomości",
  description:
    "Kompleksowa obsługa nieruchomości przez cały rok. Utrzymanie części wspólnych, komunikacja i stabilna współpraca.",
  alternates: {
    canonical: "/test",
  },
};

const headerLinks = [
  { href: "#problemy", label: "Problemy" },
  { href: "#system", label: "Jak działamy" },
  { href: "#referencje", label: "Referencje" },
  { href: "#wspolpraca", label: "Współpraca" },
  { href: "#faq", label: "FAQ" },
];

const dailyProblems = [
  "Słaba komunikacja",
  "Ciągłe zgłoszenia od mieszkańców",
  "Brak realizacji zgodnie z harmonogramem",
  "Konieczność ciągłej kontroli",
  "Częste zmiany wykonawców",
];

const problemsImage = {
  src: "/tlo.webp",
  alt: "Części wspólne nieruchomości utrzymywane przez DEFLO",
};

const approachCards = [
  {
    title: "Komunikacja, która realnie działa",
    description:
      "Masz bezpośredni kontakt i szybką reakcję na zgłoszenia. Działamy według ustalonych zasad, bez niedomówień.",
    variant: "accent" as const,
    badge: "Aktywne",
    icon: "↗",
    indexLabel: "01",
  },
  {
    title: "System pracy zamiast improwizacji",
    description:
      "Każdy obiekt działa według określonego modelu. To, co ma być wykonane, jest realizowane zgodnie z ustaleniami.",
    variant: "neutral" as const,
    badge: "Ustalone",
    icon: "✓",
    indexLabel: "02",
  },
  {
    title: "Zakres czynności dopasowany do nieruchomości",
    description:
      "Prace realizowane są według ustalonego harmonogramu i jasno określonego zakresu. Masz pewność, nie musisz sprawdzać.",
    variant: "warm" as const,
    badge: "Dopasowane",
    icon: "▦",
    indexLabel: "03",
  },
  {
    title: "Długoterminowe partnerstwo, nie rotacja firm",
    description:
      "Priorytetem jest stabilna współpraca oparta na zaufaniu. Koniec z koniecznością ciągłego poszukiwania wykonawcy.",
    variant: "accent" as const,
    badge: "Stałe",
    icon: "∞",
    indexLabel: "04",
  },
];

const practiceCards = [
  {
    title: "Uporządkowany sposób działania od pierwszych dni",
    items: [
      "Po podpisaniu umowy wysyłamy ankietę przejęcia nieruchomości.",
      "Wchodzimy na teren z jasnymi zasadami pracy.",
      "Ustalamy cele na najbliższy czas.",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Kontrola realizacji bez domysłów",
    items: [
      "System potwierdzania prac zapewnia przejrzystość wykonania.",
      "Na obiekcie możemy wywiesić harmonogramy czynności.",
      "Listy obecności ułatwiają bieżącą kontrolę.",
    ],
    variant: "accent" as const,
  },
  {
    title: "Funkcja: Utwórz zgłoszenie",
    items: [
      "Mieszkańcy mogą zgłaszać sprawy bezpośrednio do nas.",
      "Ogranicza to ilość bieżących tematów dla zarządcy.",
      "Przyspiesza reakcję i porządkuje komunikację.",
    ],
    variant: "warm" as const,
  },
  {
    title: "Stały poziom zaangażowania",
    items: [
      "Jakość utrzymywana w długim okresie współpracy.",
      "Regularnie kontrolujemy realizację prac.",
      "Proponujemy rozwiązania korzystne dla Wspólnoty i zgłaszamy bieżące usterki.",
    ],
    variant: "neutral" as const,
  },
];

const testimonials = [
  {
    quote:
      "Dobre wrażenie, szacunek i chęć dążenia do realizacji wspólnych celów można odczuć podczas wzajemnych kontaktów.",
    meta: "Grzegorz Woźniak, nKrak Zarządzanie Nieruchomościami",
  },
  {
    quote:
      "Zlecone prace są realizowane zgodnie z ustalonym harmonogramem, a wszystkie zadania wykonywane są rzetelnie i terminowo.",
    meta: "Izabela Zagórska, Castelia Spółka Cywilna",
  },
  {
    quote:
      "Jesteśmy zadowoleni z usług wykonywanych przez firmę Tomasz Sobieraj DEFLO. Polecamy tę firmę jako kompetentnego wykonawcę.",
    meta: "Krzysztof Wiśniowski, M-KONSTRUKTOR Sp. z o.o.",
  },
  {
    quote:
      "Firma wyróżnia się świetną obsługą klienta i zaangażowaniem w wykonanie powierzonych obowiązków.",
    meta: "Sławomir Siedlarski, Regina Biskupska, JHM DEVELOPMENT S.A.",
  },
  {
    quote:
      "Kontrahent jest godny zaufania, a pracownicy w pełni zaangażowani w powierzone obowiązki.",
    meta: "Alicja Loth, NCC Nieruchomości Sp. z o.o.",
  },
];

const cooperationSteps = [
  {
    label:
      "Kontakt: wypełnij krótki formularz na stronie, a wrócimy z dalszymi krokami.",
  },
  {
    label:
      "Wizja lokalna: w ciągu 48h ustalamy dogodną formę spotkania, na obiekcie lub zdalnie.",
  },
  {
    label:
      "Jasna propozycja współpracy: otrzymujesz ofertę w wariantach cenowych, zakres prac, katalog i referencje w PDF.",
  },
];

const faqItems = [
  {
    question: "Jak wygląda rozpoczęcie współpracy i ile to trwa?",
    answer:
      "Pierwszym krokiem jest wizja lokalna. Na jej podstawie projektujemy zakres czynności dopasowany do nieruchomości i przygotowujemy ofertę w różnych wariantach cenowych. Po akceptacji współpraca zwykle może rozpocząć się natychmiastowo.",
  },
  {
    question: "Co, jeśli pojawi się problem na obiekcie?",
    answer:
      "Po otrzymaniu zgłoszenia reagujemy możliwie najszybciej i rozwiązujemy sytuację zgodnie z wytycznymi albo proponujemy rozwiązanie. Temat nie pozostaje bez reakcji.",
  },
  {
    question: "Czy mieszkańcy mogą zgłaszać uwagi?",
    answer:
      "Tak. Każdy mieszkaniec może utworzyć zgłoszenie bezpośrednio na stronie. Dzięki temu zarządca zyskuje spokój, czas i przejrzystość obsługi bieżących tematów.",
  },
  {
    question: "Czy mieszkańcy mogą zgłaszać potrzebę zmiany pracownika?",
    answer:
      "Tak. W każdym momencie współpracy mieszkańcy oraz zarządca mogą zasygnalizować chęć zmiany osób skierowanych do prac. To DEFLO odpowiada za rekrutację i wdrożenie pracownika.",
  },
  {
    question: "Czy muszę kontrolować wykonanie usług?",
    answer:
      "Na początku współpracy zalecamy wspólną kontrolę i bieżącą informację zwrotną. Z czasem bieżąca kontrola nie jest konieczna, ponieważ prace realizowane są według harmonogramu, zakresu i procedur.",
  },
  {
    question: "Jak wygląda kontakt z firmą?",
    answer:
      "Masz uporządkowany kontakt przez formularz i dalszą komunikację dopasowaną do sprawy.",
  },
  {
    question: "Czy można dopasować zakres prac do budżetu?",
    answer:
      "Tak. Zakres prac można elastycznie dopasować do możliwości i potrzeb nieruchomości. Każdy obiekt jest inny, dlatego kluczowa jest rozmowa i wspólne ustalenia.",
  },
  {
    question: "Czy można zmienić zakres w trakcie współpracy?",
    answer:
      "Tak. Zakres usług może być dostosowywany w zależności od potrzeb, pory roku lub sytuacji na nieruchomości.",
  },
  {
    question: "Od czego zależy cena?",
    answer:
      "Cena zależy między innymi od zakresu prac, wielkości nieruchomości, częstotliwości usług oraz specyfiki obiektu i jego otoczenia.",
  },
];

export default function TestPage() {
  return (
    <PageShell
      header={
        <SiteHeader
          ctaHref="#kontakt"
          ctaLabel="Umów wizję lokalną"
          links={headerLinks}
        />
      }
    >
      <section className="ui-section section section--hero" id="hero">
        <Container>
          <SectionCard variant="hero">
            <div className="ui-service-hero">
              <SectionHeader
                align="center"
                description="Kompleksowa obsługa nieruchomości przez cały rok. Mniej problemów. Więcej czasu i pełna kontrola."
                kicker="Nieruchomość to wizytówka zarządcy"
                support="Bez zobowiązań"
                title="Utrzymanie części wspólnych, które po prostu działa"
                titleAs="h1"
                titleClassName="ui-service-hero__title"
              />
              <div className="ui-cluster ui-service-hero__actions">
                <Button href="#kontakt" size="lg">
                  Umów bezpłatną wizję lokalną
                </Button>
                <Button href="#kontakt" size="lg" variant="secondary">
                  Wyślij dane nieruchomości
                </Button>
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="problemy">
        <Container>
          <SectionCard muted>
            <div className="ui-split-section">
              <div className="ui-stack-lg">
                <SectionHeader
                  kicker="Czy tak wygląda codzienność?"
                  title="To nie jest partnerstwo. To ciągłe zarządzanie problemami."
                />
                <FeatureCard
                  list={<CheckList items={dailyProblems} />}
                  title="Najczęstsze problemy zarządców"
                  variant="warm"
                />
              </div>
              <SectionImage alt={problemsImage.alt} src={problemsImage.src} />
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="system">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader
                description="Większość problemów nie wynika z braku sprzątania. Wynika z braku systemu, komunikacji i odpowiedzialności."
                kicker="Dlatego w DEFLO działamy inaczej"
                title="System pracy, który odciąża zarządcę"
              />
              <div className="ui-grid-2">
                {approachCards.map((card) => (
                  <FeatureCard
                    badge={card.badge}
                    className="ui-feature-card--system"
                    description={card.description}
                    icon={<span aria-hidden="true">{card.icon}</span>}
                    indexLabel={card.indexLabel}
                    key={card.title}
                    title={card.title}
                    variant={card.variant}
                  />
                ))}
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="praktyka">
        <Container>
          <SectionCard muted>
            <div className="ui-stack-section">
              <SectionHeader
                description="To, co ma znaczenie, zauważalne jest na co dzień. Każdy obiekt generuje bieżące sytuacje do rozwiązania. Kluczowe jest to, jak są obsługiwane."
                kicker="Szukamy rozwiązań, a nie usprawiedliwień"
                title="Co to oznacza w praktyce?"
              />
              <div className="ui-grid-2">
                {practiceCards.map((card) => (
                  <FeatureCard
                    key={card.title}
                    list={<CheckList compact items={card.items} />}
                    title={card.title}
                    variant={card.variant}
                  />
                ))}
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="referencje">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader
                description="To potwierdzają zarządcy, z którymi współpracujemy od lat."
                kicker="Cytaty z referencji"
                title="Referencje i głosy partnerów"
              />
              <div className="ui-home-quote-grid">
                {testimonials.map((item) => (
                  <TestimonialCard key={item.meta} meta={item.meta} quote={item.quote} />
                ))}
              </div>
              <div className="ui-cluster">
                <Button href="#kontakt">Zobacz, jak to może wyglądać w Twojej nieruchomości</Button>
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="wspolpraca">
        <Container>
          <SectionCard muted>
            <div className="ui-stack-section">
              <SectionHeader
                description="Zacznijmy od krótkiej rozmowy. Przeprowadzimy Cię przez resztę procesu."
                kicker="Jak zacząć współpracę"
                support="Na tym etapie nie ma żadnych zobowiązań. Masz pełny obraz współpracy, a wdrożenie możliwe jest nawet od zaraz."
                title="Trzy proste kroki do jasnej propozycji"
              />
              <FeatureCard list={<ProcessSteps steps={cooperationSteps} />} title="Proces" />
              <div className="ui-cluster">
                <Button href="#kontakt" size="lg">
                  Umów bezpłatną wizję lokalną
                </Button>
                <Button href="#kontakt" size="lg" variant="secondary">
                  Opisz zakres obsługi
                </Button>
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="faq">
        <Container>
          <SectionCard>
            <div className="ui-stack-section">
              <SectionHeader kicker="FAQ" title="Najczęściej zadawane pytania" />
              <FAQAccordion items={faqItems} />
            </div>
          </SectionCard>
        </Container>
      </section>

      <section className="ui-section" id="kontakt">
        <Container>
          <SectionCard muted>
            <div className="ui-stack-section">
              <SectionHeader
                description="Masz dodatkowe pytania? Opisz sprawę w formularzu, a wrócimy z dalszymi krokami."
                kicker="Bezpłatna wycena"
                support="Bez zobowiązań"
                title="Umów bezpłatną wizję lokalną"
              />
              <div className="ui-form-shell">
                <LeadForm
                  action="#"
                  method="post"
                  support="Im dokładniej opiszesz nieruchomość, tym łatwiej ustalić sensowny zakres obsługi."
                  actions={
                    <Button size="lg" type="submit">
                      Wyślij zgłoszenie
                    </Button>
                  }
                >
                  <FormField label="Imię i nazwisko">
                    <input className="ui-form-field__control" name="name" required type="text" />
                  </FormField>
                  <FormField label="Telefon">
                    <input className="ui-form-field__control" name="phone" required type="tel" />
                  </FormField>
                  <FormField label="E-mail">
                    <input className="ui-form-field__control" name="email" type="email" />
                  </FormField>
                  <FormField label="Adres nieruchomości">
                    <input className="ui-form-field__control" name="address" type="text" />
                  </FormField>
                  <FormField className="ui-lead-form__full" label="Wiadomość">
                    <textarea
                      className="ui-form-field__control"
                      name="message"
                      placeholder="Opisz nieruchomość, liczbę klatek, zakres prac lub termin wizji lokalnej."
                      rows={5}
                    />
                  </FormField>
                  <label className="ui-consent-row ui-lead-form__full">
                    <input name="consent" required type="checkbox" />
                    <span>Wyrażam zgodę na kontakt w sprawie przesłanego zapytania.</span>
                  </label>
                </LeadForm>
              </div>
            </div>
          </SectionCard>
        </Container>
      </section>
    </PageShell>
  );
}
