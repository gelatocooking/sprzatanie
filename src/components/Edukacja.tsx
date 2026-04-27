import CheckList from "./ui/CheckList";
import Container from "./ui/Container";
import FeatureCard from "./ui/FeatureCard";
import SectionCard from "./ui/SectionCard";
import SectionHeader from "./ui/SectionHeader";

const pricingCards = [
  {
    title: "Sprzątanie mieszkań i domów",
    items: [
      "Sprzątanie mieszkań: od 180 zł",
      "Zakres zależy od metrażu, liczby łazienek i dodatków",
      "Domy wyceniamy po powierzchni i liczbie pomieszczeń",
      "Dla regularnych zleceń ustalamy indywidualne stawki",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Sprzątanie biur i lokali",
    items: [
      "Wycena indywidualna po metrażu i częstotliwości",
      "Możliwa obsługa jednorazowa lub cykliczna",
      "Zakres ustalamy pod biuro, lokal usługowy lub gabinet",
      "Termin dopasowujemy do godzin pracy obiektu",
    ],
    variant: "accent" as const,
  },
  {
    title: "Mycie okien i dodatki",
    items: [
      "Sprzątanie po remoncie: od 12–18 zł/m²",
      "Mycie okien: od 25–45 zł/szt.",
      "Piekarnik / lodówka / wnętrza szafek: wycena po zakresie",
      "Balkon, taras i trudniejsze zabrudzenia: wycena indywidualna",
    ],
    variant: "warm" as const,
  },
];

export default function Edukacja() {
  return (
    <section id="edukacja" className="ui-section">
      <Container>
        <SectionCard muted>
          <div className="ui-stack-section">
            <SectionHeader
              kicker="Filar 3: Edukacja"
              title="Cennik usług sprzątania we Wrocławiu"
            />
            <div className="ui-grid-3">
              {pricingCards.map((card) => (
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
  );
}
