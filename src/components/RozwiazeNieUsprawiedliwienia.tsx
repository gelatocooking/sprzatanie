import PremiumAccordion from "./ui/PremiumAccordion";
import Container from "./ui/Container";
import SectionCard from "./ui/SectionCard";
import SectionHeader from "./ui/SectionHeader";

const solutionsData = [
  {
    id: "kontakt",
    title: "Szybki kontakt",
    number: 1,
    description: (
      <div className="ui-stack-sm">
        <p>
          Nie będziesz czekać w nieskończoność. Po wypełnieniu formularza lub telefonie
          oddzwonimy w <strong>maksymalnie 10 minut</strong>.
        </p>
        <p className="ui-text-muted">
          Jeśli nie będziesz w domu, wyślemy SMS-a z propozycją terminu. Brak stresu, brak
          gry.
        </p>
      </div>
    ),
  },
  {
    id: "zakres",
    title: "Jasny zakres",
    number: 2,
    description: (
      <div className="ui-stack-sm">
        <p>
          Dostajesz <strong>checklist zakresu prac</strong> – dokładnie wiesz, co wchodzi w
          cenę i co to kosztuje.
        </p>
        <p>
          Brak niespodzianek typu „ale to jeszcze nie wchodzi". Zasady dopłat ustalamy{" "}
          <strong>przed realizacją</strong>.
        </p>
        <p className="ui-text-muted">
          Transparentność to nasza reguła, a nie wyjątek.
        </p>
      </div>
    ),
  },
  {
    id: "termin",
    title: "Termin dopasowany",
    number: 3,
    description: (
      <div className="ui-stack-sm">
        <p>
          Pilne sprzątanie na jutro? Po remoncie za 2 dni? <strong>Dobieramy ekipę</strong>{" "}
          do Twojego harmonogramu, a nie odwrotnie.
        </p>
        <p>
          Pracujemy z siecią zaufanych zespołów – znajdziemy ekipę na Twój termin, nie na
          nasz.
        </p>
        <p className="ui-text-muted">
          Elastyczność to nasza mocna strona.
        </p>
      </div>
    ),
  },
  {
    id: "cena",
    title: "Cena bez niespodzianek",
    number: 4,
    description: (
      <div className="ui-stack-sm">
        <p>
          Po krótkiej rozmowie (2–3 minuty) podamy Ci <strong>widełki cenowe</strong> w
          zależności od metrażu i zakresu.
        </p>
        <p>
          Nie będziesz porównywać oferty od 5 firm i zgadywać, która jest rzetelna. Jedno
          zgłoszenie = konkretne liczby.
        </p>
        <p className="ui-text-muted">
          Wycena na postawie realnych parametrów, nie ćwierćsławek.
        </p>
      </div>
    ),
  },
];

export default function RozwiazanaNieUsprawiedliwienia() {
  return (
    <section id="rozwiazania" className="ui-section">
      <Container>
        <SectionCard muted>
          <div className="ui-stack-section">
            <SectionHeader
              kicker="Filar 4: Konkret zamiast teorii"
              title="Szukamy rozwiązań, nie usprawiedliwień"
              description="4 rzeczy, które robią różnicę: szybki kontakt, jasny zakres, termin dostosowany do Ciebie i cena bez niespodzianek."
            />
            <PremiumAccordion items={solutionsData} />
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
