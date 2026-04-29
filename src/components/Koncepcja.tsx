import CheckList from "./ui/CheckList";
import Container from "./ui/Container";
import FeatureCard from "./ui/FeatureCard";
import ProcessSteps from "./ui/ProcessSteps";
import SectionCard from "./ui/SectionCard";
import SectionHeader from "./ui/SectionHeader";

const steps = [
  { label: "Wypełniasz formularz z metrażem, zakresem i terminem" },
  { label: "Doprecyzowujemy zakres i termin na podstawie danych ze zgłoszenia" },
  { label: "Potwierdzamy termin i przekazujemy realizację do ekipy" },
];

const pricingInputs = [
  "Metraż i liczba pomieszczeń",
  "Rodzaj sprzątania: standard, po remoncie, po wyprowadzce, biuro",
  "Dodatki: okna, AGD, wnętrza szafek, balkon, taras",
];

export default function Koncepcja() {
  return (
    <section id="koncepcja" className="ui-section">
      <Container>
        <SectionCard muted>
          <div className="ui-stack-section">
            <SectionHeader kicker="Filar 2: Koncepcja" title="Jak wygląda wycena?" />
            <div className="ui-grid-2">
              <FeatureCard list={<ProcessSteps steps={steps} />} title="3 kroki" />
              <FeatureCard
                description="Wycena nie opiera się na zgadywaniu. Liczy się realny zakres, metraż, poziom zabrudzeń, dodatki i termin realizacji."
                list={<CheckList compact items={pricingInputs} />}
                title="Co bierzemy pod uwagę"
                variant="warm"
              />
            </div>
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
