import Button from "./ui/Button";
import Container from "./ui/Container";
import FormField from "./ui/FormField";
import LeadForm from "./ui/LeadForm";
import SectionCard from "./ui/SectionCard";
import SectionHeader from "./ui/SectionHeader";

const extras = [
  { value: "okna", label: "Mycie okien" },
  { value: "piekarnik", label: "Piekarnik / lodówka" },
  { value: "szafki", label: "Wnętrza szafek" },
  { value: "balkon", label: "Balkon / taras" },
];

export default function Zakup() {
  return (
    <section id="zakup" className="ui-section">
      <Container>
        <SectionCard muted>
          <div className="ui-stack-section">
            <SectionHeader
              description="Zostaw najważniejsze informacje, a wrócimy z terminem, zakresem i wstępną wyceną dopasowaną do rodzaju zlecenia."
              kicker="Filar 5: Zakup"
              title="Zgłoszenie zajmuje 60 sekund — oddzwonimy w 10 minut"
            />
            <div className="ui-form-shell">
              <LeadForm
                action="#"
                actions={
                  <Button size="lg" type="submit" variant="primary">
                    Chcę wycenę i termin
                  </Button>
                }
                method="post"
                support="Kontakt bez zobowiązań. Jeśli nie odbierzesz — wyślemy SMS z propozycją terminu."
              >
                <FormField label="Imię">
                  <input
                    autoComplete="given-name"
                    className="ui-form-field__control"
                    name="imie"
                    required
                    type="text"
                  />
                </FormField>
                <FormField label="Telefon">
                  <input
                    autoComplete="tel"
                    className="ui-form-field__control"
                    name="telefon"
                    required
                    type="tel"
                  />
                </FormField>
                <FormField label="Dzielnica / miejscowość">
                  <input
                    autoComplete="address-level2"
                    className="ui-form-field__control"
                    name="lokalizacja"
                    required
                    type="text"
                  />
                </FormField>
                <FormField label="Rodzaj sprzątania">
                  <select className="ui-form-field__control" name="rodzaj" required>
                    <option value="">Wybierz rodzaj</option>
                    <option value="standard">Sprzątanie standardowe</option>
                    <option value="po-remoncie">Sprzątanie po remoncie</option>
                    <option value="po-wyprowadzce">Po wyprowadzce / przed wynajmem</option>
                    <option value="biuro">Sprzątanie biura</option>
                  </select>
                </FormField>
                <FormField label="Metraż">
                  <select className="ui-form-field__control" name="metraz" required>
                    <option value="">Wybierz metraż</option>
                    <option value="do-40">do 40 m²</option>
                    <option value="41-70">41–70 m²</option>
                    <option value="71-100">71–100 m²</option>
                    <option value="100+">powyżej 100 m²</option>
                  </select>
                </FormField>
                <FormField label="Termin">
                  <select className="ui-form-field__control" name="termin" required>
                    <option value="">Wybierz termin</option>
                    <option value="pilne">Pilne (0–3 dni)</option>
                    <option value="tydzien">W tym tygodniu</option>
                    <option value="miesiac">W tym miesiącu</option>
                    <option value="ustalenie">Do ustalenia</option>
                  </select>
                </FormField>
                <fieldset className="ui-fieldset ui-lead-form__full">
                  <legend className="ui-fieldset__legend">Dodatki (opcjonalnie)</legend>
                  <div className="ui-choice-list ui-choice-list--two-columns">
                    {extras.map((extra) => (
                      <label className="ui-choice-item" key={extra.value}>
                        <input name="dodatki" type="checkbox" value={extra.value} />
                        <span>{extra.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="ui-consent-row ui-lead-form__full">
                  <input name="rodo" required type="checkbox" />
                  <span>Wyrażam zgodę na kontakt i przetwarzanie danych (RODO).</span>
                </label>
              </LeadForm>
            </div>
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
