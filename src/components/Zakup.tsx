export default function Zakup() {
  return (
    <section id="zakup" className="section light">
      <div className="container reveal">
        <p className="eyebrow">Filar 5: Zakup</p>
        <h2 className="headline">Zgłoszenie zajmuje 60 sekund — oddzwonimy w 10 minut</h2>
        <form className="form" action="#" method="post">
          <label className="field">
            Imię
            <input type="text" name="imie" autoComplete="given-name" required />
          </label>
          <label className="field">
            Telefon
            <input type="tel" name="telefon" autoComplete="tel" required />
          </label>
          <label className="field">
            Dzielnica / miejscowość
            <input type="text" name="lokalizacja" autoComplete="address-level2" required />
          </label>
          <label className="field">
            Rodzaj sprzątania
            <select name="rodzaj" required>
              <option value="">Wybierz rodzaj</option>
              <option value="standard">Sprzątanie standardowe</option>
              <option value="po-remoncie">Sprzątanie po remoncie</option>
              <option value="po-wyprowadzce">Po wyprowadzce / przed wynajmem</option>
              <option value="biuro">Sprzątanie biura</option>
            </select>
          </label>
          <label className="field">
            Metraż
            <select name="metraz" required>
              <option value="">Wybierz metraż</option>
              <option value="do-40">do 40 m²</option>
              <option value="41-70">41–70 m²</option>
              <option value="71-100">71–100 m²</option>
              <option value="100+">powyżej 100 m²</option>
            </select>
          </label>
          <label className="field">
            Termin
            <select name="termin" required>
              <option value="">Wybierz termin</option>
              <option value="pilne">Pilne (0–3 dni)</option>
              <option value="tydzien">W tym tygodniu</option>
              <option value="miesiac">W tym miesiącu</option>
              <option value="ustalenie">Do ustalenia</option>
            </select>
          </label>
          <fieldset className="field">
            <legend>Dodatki (opcjonalnie)</legend>
            <label className="checkbox-row">
              <input type="checkbox" name="dodatki" value="okna" />
              <span>Mycie okien</span>
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="dodatki" value="piekarnik" />
              <span>Piekarnik / lodówka</span>
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="dodatki" value="szafki" />
              <span>Wnętrza szafek</span>
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="dodatki" value="balkon" />
              <span>Balkon / taras</span>
            </label>
          </fieldset>
          <label className="checkbox-row">
            <input type="checkbox" name="rodo" required />
            <span>Wyrażam zgodę na kontakt i przetwarzanie danych (RODO).</span>
          </label>
          <div className="form-actions">
            <button className="btn primary" type="submit">
              Chcę wycenę i termin
            </button>
            <span className="micro">
              Kontakt bez zobowiązań. Jeśli nie odbierzesz — wyślemy SMS z propozycją terminu.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
