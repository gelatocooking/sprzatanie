export default function Wybor() {
  return (
    <section id="wybor" className="section">
      <div className="container reveal">
        <p className="eyebrow">Filar 4: Wybór</p>
        <h2 className="headline">Dlaczego klienci wybierają nas w Wrocław?</h2>
        <div className="grid mt-lg">
          <div className="card">
            <h3>Bo dostają konkret zamiast zgadywania</h3>
            <ul className="list">
              <li>Szybki kontakt i jasny termin</li>
              <li>Checklista zakresu (wiesz, co wchodzi)</li>
              <li>Widełki cenowe po krótkiej rozmowie</li>
              <li>Zasady dopłat ustalane przed realizacją</li>
            </ul>
          </div>
          <div className="card">
            <h3>Widełki (opcjonalnie)</h3>
            <ul className="price-list">
              <li>
                <span>Sprzątanie standardowe</span>
                <span>od X zł</span>
              </li>
              <li>
                <span>Sprzątanie po remoncie</span>
                <span>od Y zł</span>
              </li>
              <li>
                <span>Sprzątanie po wyprowadzce</span>
                <span>od Z zł</span>
              </li>
            </ul>
            <p className="micro mt-xs">
              Jeśli nie chcesz podawać liczb: wpisz “od X zł” i doprecyzuj w rozmowie,
              ale lepiej mieć chociaż “od”.
            </p>
          </div>
        </div>
        <div className="mt-xl">
          <h3 className="headline-small">Opinie / realizacje</h3>
          <div className="quote-grid mt-md">
            <figure className="card">
              <blockquote className="quote">
                “Po remoncie mieszkanie wyglądało jak nowe. Termin szybki, ekipa punktualna.”
              </blockquote>
              <figcaption className="micro">Sprzątanie po remoncie w Wrocław</figcaption>
            </figure>
            <figure className="card">
              <blockquote className="quote">
                “Jasny zakres, bez niespodzianek. Dostałam SMS z terminem tego samego dnia.”
              </blockquote>
              <figcaption className="micro">Sprzątanie mieszkania przed wynajmem</figcaption>
            </figure>
            <figure className="card">
              <blockquote className="quote">
                “Wystarczyła krótka rozmowa i wszystko było ogarnięte. Polecam.”
              </blockquote>
              <figcaption className="micro">Sprzątanie biura jednorazowe</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
