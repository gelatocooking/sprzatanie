import Edukacja from "../components/Edukacja";
import Hero from "../components/Hero";
import Koncepcja from "../components/Koncepcja";
import Problem from "../components/Problem";
import Wybor from "../components/Wybor";
import Zakup from "../components/Zakup";

export default function Home() {
  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sprzątanie mieszkań i biur Wrocław",
            areaServed: "Wrocław",
            telephone: "+48XXXXXXXXX",
            url: "https://example.com",
          }),
        }}
      />
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            Sprzątanie<span>Pro</span>
          </div>
          <nav className="nav-inline">
            <a href="#problem">Problem</a>
            <a href="#koncepcja">Jak to działa</a>
            <a href="#edukacja">Cennik i zakres</a>
            <a href="#wybor">Dlaczego my</a>
            <a href="#zakup">Zgłoszenie</a>
          </nav>
          <a className="btn secondary" href="tel:+48XXXXXXXXX">
            Telefon: [Telefon]
          </a>
        </div>
      </header>
      <main>
        <Hero />
        <Problem />
        <Koncepcja />
        <Edukacja />
        <Wybor />
        <Zakup />
      </main>
    </div>
  );
}
