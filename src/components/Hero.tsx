export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="container hero-grid">
        <div className="reveal">
          <p className="pill">Sprzątanie mieszkań i biur w Wrocław</p>
          <h1 className="headline">
            Sprzątanie mieszkań i biur w Wrocław — szybki termin, jasny zakres,
            szybka wycena
          </h1>
          <p className="lead">
            Zostaw kontakt, a oddzwonimy w 10 minut. W 2–3 minuty zbierzemy
            szczegóły, podamy widełki cenowe i dopasujemy ekipę do terminu.
          </p>
          <ul className="checklist">
            <li>
              <span>✅</span>
              <span>Termin dopasowany do Twojej sytuacji (pilne i planowane)</span>
            </li>
            <li>
              <span>✅</span>
              <span>Checklista zakresu — wiesz, za co płacisz</span>
            </li>
            <li>
              <span>✅</span>
              <span>Bez niespodzianek: zasady dopłat ustalamy przed realizacją</span>
            </li>
          </ul>
          <div className="cta-group">
            <a className="btn primary" href="#zakup">
              Poproś o wycenę (60 sek)
            </a>
            <a className="btn secondary" href="tel:+48693858260">
              Zadzwoń: +48 693 858 260
            </a>
          </div>
        </div>
        <div className="hero-card reveal">
          <p className="eyebrow">Szybka wycena bez zgadywania</p>
          <p className="lead">
            Powiedz, co trzeba zrobić — my dopasujemy ekipę, termin i zakres do
            realnej sytuacji. Dostajesz konkret, nie ogólniki.
          </p>
          <div className="grid mt-md">
            <div className="card">
              <h3>10 min</h3>
              <p className="micro">
                Oddzwonimy szybko, jeśli teraz nie możesz — zostaw SMS.
              </p>
            </div>
            <div className="card">
              <h3>2–3 min</h3>
              <p className="micro">
                Krótka rozmowa wystarcza do podania widełek cenowych.
              </p>
            </div>
            <div className="card">
              <h3>1 termin</h3>
              <p className="micro">Dobieramy ekipę do Twojego zakresu, bez przekładania.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
