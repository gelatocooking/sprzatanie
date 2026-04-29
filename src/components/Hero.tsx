import Button from "./ui/Button";
import CheckList from "./ui/CheckList";
import Container from "./ui/Container";
import SectionCard from "./ui/SectionCard";
import SectionHeader from "./ui/SectionHeader";

const heroChecklist = [
  "Termin dopasowany do Twojej sytuacji",
  "Checklista zakresu — wiesz, za co płacisz",
  "Bez niespodzianek: zasady dopłat ustalamy przed realizacją",
];

export default function Hero() {
  return (
    <section id="hero" className="ui-section section section--hero">
      <Container>
        <SectionCard variant="hero">
          <div className="ui-home-hero">
            <SectionHeader
              align="center"
              className="ui-home-hero__header"
              description="Obsługujemy zlecenia jednorazowe i cykliczne we Wrocławiu oraz okolicach. Szybko ustalamy zakres, termin i orientacyjną wycenę, żeby od razu było wiadomo, czego się spodziewać."
              kicker="Firma sprzątająca Wrocław"
              support="Kontakt bez zobowiązań. Zakres, termin i dopłaty ustalamy przed realizacją."
              title="Firma sprzątająca Wrocław sprzątanie mieszkań, biur i po remoncie"
              titleAs="h1"
              titleClassName="ui-home-hero__title"
            />
            <div className="ui-home-hero__checklist">
              <CheckList items={heroChecklist} />
            </div>
            <div className="ui-cluster ui-home-hero__actions">
              <Button href="#zakup" size="lg" variant="primary">
                Wyślij zakres i termin
              </Button>
              <Button href="#zakup" size="lg" variant="secondary">
                Sprawdź dostępny termin
              </Button>
            </div>
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
