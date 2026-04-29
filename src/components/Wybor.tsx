import CheckList from "./ui/CheckList";
import Container from "./ui/Container";
import FeatureCard from "./ui/FeatureCard";
import SectionCard from "./ui/SectionCard";
import SectionHeader from "./ui/SectionHeader";
import TestimonialCard from "./ui/TestimonialCard";

const serviceCards = [
  {
    title: "Sprzątanie mieszkań i domów",
    items: [
      "Sprzątanie standardowe i generalne",
      "Obsługa mieszkań po najmie i przed sprzedażą",
      "Zakres ustalany pod metraż i priorytety klienta",
      "Możliwe zlecenia pilne i planowane",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Sprzątanie biur i lokali",
    items: [
      "Biura, gabinety, punkty usługowe i małe lokale",
      "Wycena po powierzchni, grafiku i częstotliwości",
      "Możliwa obsługa przed otwarciem lub po godzinach pracy",
      "Stały zakres albo jednorazowe doprowadzenie lokalu do porządku",
    ],
    variant: "accent" as const,
  },
  {
    title: "Sprzątanie po wyprowadzce i przed wynajmem",
    items: [
      "Przygotowanie mieszkania dla nowego najemcy lub kupującego",
      "Doczyszczenie kuchni, łazienki, podłóg i newralgicznych miejsc",
      "Możliwość rozszerzenia zakresu o okna i AGD",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Dlaczego klienci wybierają nas w Wrocławiu",
    items: [
      "Szybki kontakt i jasny termin",
      "Zakres prac ustalany przed realizacją",
      "Przejrzysta wycena zamiast ogólników",
      "Dopasowanie ekipy do typu zlecenia",
    ],
    variant: "warm" as const,
  },
];

const testimonials = [
  {
    quote: "“Po remoncie mieszkanie wyglądało jak nowe. Termin szybki, ekipa punktualna.”",
    meta: "Sprzątanie po remoncie w Wrocławiu",
  },
  {
    quote: "“Jasny zakres, bez niespodzianek. Dostałam SMS z terminem tego samego dnia.”",
    meta: "Sprzątanie mieszkania przed wynajmem",
  },
  {
    quote: "“Wystarczyła krótka rozmowa i wszystko było ogarnięte. Polecam.”",
    meta: "Sprzątanie biura jednorazowe",
  },
];

export default function Wybor() {
  return (
    <section id="wybor" className="ui-section">
      <Container>
        <SectionCard muted>
          <div className="ui-stack-section">
            <SectionHeader
              kicker="Filar 4: Wybór"
              title="Sprzątanie mieszkań i domów, biur i lokali"
            />
            <div className="ui-grid-2">
              {serviceCards.map((card) => (
                <FeatureCard
                  key={card.title}
                  list={<CheckList compact items={card.items} />}
                  title={card.title}
                  variant={card.variant}
                />
              ))}
            </div>
            <div className="ui-stack-md">
              <SectionHeader
                kicker="Zaufanie"
                title="Opinie i typowe realizacje"
              />
              <div className="ui-home-quote-grid">
                {testimonials.map((item) => (
                  <TestimonialCard key={item.meta} meta={item.meta} quote={item.quote} />
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
