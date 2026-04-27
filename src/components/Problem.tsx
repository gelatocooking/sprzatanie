import CheckList from "./ui/CheckList";
import Container from "./ui/Container";
import FeatureCard from "./ui/FeatureCard";
import SectionCard from "./ui/SectionCard";
import SectionHeader from "./ui/SectionHeader";

const cards = [
  {
    title: "Najczęstsze sytuacje, które obsługujemy",
    items: [
      "Sprzątanie po remoncie (pył, fugi, detale)",
      "Sprzątanie po wyprowadzce / przed wynajmem",
      "Sprzątanie standardowe mieszkania lub domu",
      "Sprzątanie biura (jednorazowo lub cyklicznie)",
    ],
    variant: "neutral" as const,
  },
  {
    title: "Co zdejmujemy z Twojej głowy",
    items: [
      "Dobór ekipy do zakresu i terminu",
      "Checklista prac zamiast zgadywania",
      "Ustalenie dopłat jeszcze przed realizacją",
      "Jeden kontakt i szybka decyzja",
    ],
    variant: "accent" as const,
  },
];

export default function Problem() {
  return (
    <section id="problem" className="ui-section">
      <Container>
        <SectionCard muted>
          <div className="ui-stack-section">
            <SectionHeader
              description="Jeśli masz remont, wyprowadzkę, najem, gości albo po prostu brak czasu — to normalne, że chcesz ogarnąć to szybko i bez stresu."
              kicker="Filar 1: Problem"
              support="Najczęściej problemem nie jest samo sprzątanie, tylko: termin, zaufanie i przewidywalna cena."
              title="Sprzątanie po remoncie we Wrocławiu i zlecenia na już"
            />
            <div className="ui-grid-2">
              {cards.map((card) => (
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
