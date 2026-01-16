export default function Edukacja() {
  return (
    <section id="edukacja" className="section light">
      <div className="container reveal">
        <p className="eyebrow">Filar 3: Edukacja</p>
        <h2 className="headline">
          Co wpływa na cenę i zakres? (żebyś od razu wiedział/a, czego się spodziewać)
        </h2>
        <div className="grid mt-lg">
          <div className="card">
            <h3>Cena zależy głównie od</h3>
            <ul className="list">
              <li>Metrażu / liczby pomieszczeń</li>
              <li>Rodzaju sprzątania (standard vs po remoncie)</li>
              <li>Poziomu zabrudzeń i ilości detali</li>
              <li>Dodatków (okna, piekarnik, lodówka, balkon)</li>
            </ul>
          </div>
          <div className="card">
            <h3>Co zwykle jest w “standardzie”</h3>
            <ul className="list">
              <li>Odkurzanie i mycie podłóg</li>
              <li>Przetarcie blatów i frontów z zewnątrz</li>
              <li>Łazienka (umywalka, toaleta, prysznic/wanna)</li>
              <li>Wyniesienie śmieci</li>
            </ul>
          </div>
          <div className="card">
            <h3>Dodatki (na życzenie)</h3>
            <ul className="list">
              <li>Mycie okien</li>
              <li>Piekarnik / lodówka</li>
              <li>Wnętrza szafek</li>
              <li>Sprzątanie po remoncie (detailing)</li>
            </ul>
          </div>
        </div>
        <p className="micro mt-md">
          Te listy budują long-taile typu “sprzątanie po remoncie co obejmuje”.
        </p>
      </div>
    </section>
  );
}
