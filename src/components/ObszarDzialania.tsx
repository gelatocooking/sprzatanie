import CheckList from "./ui/CheckList";
import Container from "./ui/Container";
import FeatureCard from "./ui/FeatureCard";
import SectionCard from "./ui/SectionCard";
import SectionHeader from "./ui/SectionHeader";

const locationCards = [
  {
    title: "Wrocław",
    description:
      "Krzyki, Psie Pole, Fabryczna, Stare Miasto, Śródmieście, Ołtaszyn, Jagodno, Muchobór i Leśnica.",
    items: [
      "Szybkie terminy dla sprzątania mieszkań i domów",
      "Stała obsługa biur i lokali usługowych",
      "Sprzątanie po remoncie i po wyprowadzce",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Okolice Wrocławia",
    description:
      "Bielany Wrocławskie, Długołęka, Kiełczów, Siechnice, Kobierzyce i Smolec.",
    items: [
      "Terminy ustalane według zakresu i dojazdu",
      "Wycena po metrażu, rodzaju zabrudzeń i dodatkach",
      "Obsługa domów, najmu i zleceń jednorazowych",
    ],
    variant: "accent" as const,
  },
];

export default function ObszarDzialania() {
  return (
    <section id="obszar" className="ui-section">
      <Container>
        <SectionCard muted>
          <div className="ui-stack-section">
            <SectionHeader
              description="Działamy na terenie Wrocławia i okolic. Najczęściej obsługujemy mieszkania, domy, biura i lokale w dzielnicach z dobrym dojazdem oraz zleceniami pilnymi, po remoncie i przed wynajmem."
              kicker="Obszar działania"
              title="Obsługiwane dzielnice i okolice Wrocławia"
            />
            <div className="ui-grid-2">
              {locationCards.map((card) => (
                <FeatureCard
                  key={card.title}
                  description={card.description}
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
  );
}
