import type { Metadata } from "next";
import Link from "next/link";

import CenteredHero from "../../components/CenteredHero";
import SiteHeader from "../../components/SiteHeader";
import { getSiteUrl } from "../../lib/site";

const pagePath = "/sprzatanie-po-remoncie-wroclaw";

const faqItems = [
  {
    question: "Ile kosztuje sprzątanie po remoncie we Wrocławiu?",
    answer:
      "Cena zależy od metrażu, stopnia zabrudzenia, liczby okien i zakresu prac. Lekkie sprzątanie po remoncie może być wyceniane od około kilkunastu złotych za m², natomiast większe zabrudzenia i doczyszczanie po farbie, kleju lub silikonie zwykle wymagają indywidualnej wyceny.",
  },
  {
    question: "Czy sprzątanie po remoncie obejmuje mycie okien?",
    answer:
      "Mycie okien często jest usługą dodatkową, dlatego warto zaznaczyć je w formularzu. Przy sprzątaniu po remoncie ważne jest nie tylko umycie szyb, ale także ram, parapetów i usunięcie pyłu budowlanego.",
  },
  {
    question: "Czy można zamówić sprzątanie tylko jednego pomieszczenia?",
    answer:
      "Tak, zgłoszenie może dotyczyć całego mieszkania, domu, biura albo wybranych pomieszczeń, na przykład łazienki, kuchni, salonu lub klatki schodowej po remoncie.",
  },
  {
    question: "Czy sprzątanie obejmuje wynoszenie gruzu i odpadów budowlanych?",
    answer:
      "Standardowe sprzątanie po remoncie zwykle nie obejmuje wywozu gruzu, dużych odpadów budowlanych ani pozostałości po ekipie remontowej. Takie rzeczy warto opisać osobno, ponieważ mogą wymagać dodatkowej usługi.",
  },
  {
    question: "Czy trzeba być na miejscu podczas sprzątania?",
    answer:
      "Najczęściej warto być na miejscu przy rozpoczęciu lub zakończeniu usługi, aby ustalić zakres i sprawdzić efekt. Szczegóły zależą od konkretnego zlecenia i ustaleń z wykonawcą.",
  },
  {
    question: "Jak szybko można zamówić sprzątanie po remoncie?",
    answer:
      "Dostępność terminów zależy od lokalizacji, zakresu prac i obłożenia wykonawców. Najlepiej wysłać zgłoszenie z metrażem, dzielnicą i preferowanym terminem, aby szybciej sprawdzić możliwość realizacji.",
  },
  {
    question: "Czy można zgłosić mieszkanie po wykończeniu deweloperskim?",
    answer:
      "Tak, sprzątanie po wykończeniu mieszkania deweloperskiego to jeden z najczęstszych przypadków. W takim lokalu zwykle trzeba usunąć pył budowlany, umyć podłogi, parapety, drzwi, łazienkę, kuchnię i okna.",
  },
  {
    question: "Czy da się usunąć wszystkie zabrudzenia po remoncie?",
    answer:
      "Nie zawsze. Część zabrudzeń, takich jak zaschnięta farba, klej, fuga, silikon albo zarysowania na powierzchniach, może wymagać specjalistycznego doczyszczania. Dlatego warto opisać problem w formularzu lub dodać zdjęcia, jeśli taka opcja jest dostępna.",
  },
  {
    question: "Czy sprzątanie po remoncie nadaje się przed wynajmem mieszkania?",
    answer:
      "Tak, to dobra opcja, jeśli mieszkanie ma być przygotowane dla najemcy, do sesji zdjęciowej, prezentacji albo odbioru po remoncie.",
  },
  {
    question: "Czy ten serwis sam wykonuje sprzątanie?",
    answer:
      "Serwis pomaga zebrać zapytanie dotyczące sprzątania po remoncie i ułatwia kontakt w sprawie wyceny. Realizacja usługi, termin i ostateczna cena zależą od ustaleń z wykonawcą.",
  },
];

export const metadata: Metadata = {
  title: "Sprzątanie po remoncie Wrocław – szybka wycena i kontakt",
  description:
    "Potrzebujesz sprzątania po remoncie we Wrocławiu? Wyślij metraż, zakres prac i termin. Pomagamy szybko zebrać zgłoszenie i przekazać je do wykonawcy.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Sprzątanie po remoncie Wrocław – szybka wycena i kontakt",
    description:
      "Potrzebujesz sprzątania po remoncie we Wrocławiu? Wyślij metraż, zakres prac i termin. Pomagamy szybko zebrać zgłoszenie i przekazać je do wykonawcy.",
    url: pagePath,
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    title: "Sprzątanie po remoncie Wrocław – szybka wycena i kontakt",
    description:
      "Potrzebujesz sprzątania po remoncie we Wrocławiu? Wyślij metraż, zakres prac i termin. Pomagamy szybko zebrać zgłoszenie i przekazać je do wykonawcy.",
  },
};

export default function SprzataniePoRemonciePage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${pagePath}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SprzątaniePro",
      url: siteUrl,
      telephone: "+48 693 858 260",
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Sprzątanie po remoncie Wrocław",
      url: pageUrl,
      serviceType: "Sprzątanie po remoncie",
      areaServed: {
        "@type": "City",
        name: "Wrocław",
      },
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Serwis pomaga zebrać zapytanie o sprzątanie po remoncie we Wrocławiu i okolicach, aby łatwiej określić zakres, termin i orientacyjną wycenę usługi.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <SiteHeader
        links={[
          { href: "#zakres", label: "Zakres" },
          { href: "#cennik", label: "Cennik" },
          { href: "#lokalizacje", label: "Lokalizacje" },
          { href: "#faq", label: "FAQ" },
          { href: "#formularz", label: "Formularz" },
        ]}
        ctaHref="#formularz"
        ctaLabel="Poproś o wycenę"
      />

      <main>
        <CenteredHero
          id="hero"
          pill="sprzątanie po remoncie Wrocław"
          variant="service"
          title={
            <>
              Sprzątanie po remoncie Wrocław
              <br />
              szybka wycena usługi
            </>
          }
          titleClassName="service-hero-title"
          subtitle="Sprzątanie po remoncie we Wrocławiu – sprawdź dostępność terminu"
          description={
            <>
              Zakończyłeś remont mieszkania, domu lub lokalu? Wypełnij krótki formularz,
              podaj metraż, zakres zabrudzeń i preferowany termin. Na tej podstawie
              łatwiej przygotować wycenę sprzątania poremontowego.
            </>
          }
          support="Zgłoszenie pozwala określić orientacyjny koszt i dostępność terminu. Wycena zależy od metrażu, stopnia zabrudzenia, liczby okien i zakresu prac."
          actions={[
            {
              href: "#formularz",
              label: "Poproś o wycenę sprzątania",
              variant: "primary",
            },
            {
              href: "#zakres",
              label: "Sprawdź, co obejmuje usługa",
              variant: "secondary",
            },
          ]}
        />

        <section className="section section--muted" id="problem">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Zakres i wycena</p>
                  <h2 className="section-title">
                    Dlaczego sprzątanie po remoncie wymaga dokładniejszego zakresu?
                  </h2>
                  <p className="section-copy">
                    Po remoncie zwykłe odkurzanie i mycie podłóg zazwyczaj nie
                    wystarcza. Pył budowlany osiada na listwach, drzwiach, parapetach,
                    płytkach, fugach, oknach, meblach i trudno dostępnych miejscach.
                  </p>
                  <p className="section-copy">
                    Dlatego przy wycenie ważny jest nie tylko metraż, ale też rodzaj
                    remontu, ilość pyłu, liczba pomieszczeń, okien oraz to, czy
                    sprzątanie ma obejmować także łazienkę, kuchnię, balkon lub klatkę
                    schodową.
                  </p>
                </div>
                <div className="grid grid-2">
                  <div className="card">
                    <h3 className="card-title">Co warto opisać w zgłoszeniu</h3>
                    <ul className="list">
                      <li>Metraż mieszkania, domu, biura lub lokalu</li>
                      <li>Rodzaj zabrudzeń po remoncie lub budowie</li>
                      <li>Liczbę okien, pomieszczeń i łazienek</li>
                      <li>Zakres dodatkowy: balkon, garaż, klatka schodowa</li>
                    </ul>
                  </div>
                  <div className="card card-accent">
                    <h3 className="card-title">Po co te dane są potrzebne</h3>
                    <ul className="list">
                      <li>Łatwiej odróżnić lekkie sprzątanie od ciężkiego doczyszczania</li>
                      <li>Można szybciej oszacować orientacyjny koszt usługi</li>
                      <li>Łatwiej sprawdzić realną dostępność terminu</li>
                      <li>Opis zakresu zmniejsza ryzyko błędnej wyceny</li>
                    </ul>
                  </div>
                </div>
                <div className="cta-group">
                  <a className="btn primary" href="#formularz">
                    Poproś o wycenę sprzątania
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="zakres">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Zakres usługi</p>
                  <h2 className="section-title">Co obejmuje sprzątanie po remoncie?</h2>
                  <p className="section-copy">
                    Zakres sprzątania poremontowego może obejmować czynności zależne od
                    typu remontu, ilości pyłu oraz poziomu zabrudzeń w lokalu.
                  </p>
                </div>
                <div className="grid grid-2">
                  <div className="card">
                    <h3 className="card-title">Usuwanie pyłu budowlanego</h3>
                    <ul className="list">
                      <li>Usuwanie pyłu budowlanego z podłóg, listew i parapetów</li>
                      <li>Odkurzanie i mycie powierzchni</li>
                      <li>Odkurzanie trudno dostępnych miejsc</li>
                    </ul>
                  </div>
                  <div className="card card-accent">
                    <h3 className="card-title">Mycie podłóg, listew i parapetów</h3>
                    <ul className="list">
                      <li>Czyszczenie drzwi, framug i klamek</li>
                      <li>Mycie płytek, fug i armatury</li>
                      <li>Czyszczenie łazienki po remoncie</li>
                    </ul>
                  </div>
                  <div className="card card-warm">
                    <h3 className="card-title">Czyszczenie łazienki i kuchni</h3>
                    <ul className="list">
                      <li>Sprzątanie kuchni po montażu mebli lub sprzętów</li>
                      <li>Usuwanie drobnych zabrudzeń po farbie, gładzi lub silikonie</li>
                      <li>Przygotowanie mieszkania do wprowadzenia lub wynajmu</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h3 className="card-title">Mycie okien po remoncie</h3>
                    <ul className="list">
                      <li>Mycie okien, ram i parapetów</li>
                      <li>Doczyszczanie zabrudzeń po remoncie lub budowie</li>
                      <li>Przygotowanie lokalu do odbioru albo sprzedaży</li>
                    </ul>
                  </div>
                </div>
                <div className="callout">
                  <p className="support-copy">
                    Dokładny zakres usługi zawsze warto ustalić przed realizacją,
                    ponieważ nie każde zabrudzenie po remoncie da się usunąć
                    standardowymi środkami. Niektóre powierzchnie wymagają ostrożnego
                    doczyszczania albo osobnej wyceny.
                  </p>
                </div>
                <div className="cta-group">
                  <a className="btn primary" href="#formularz">
                    Opisz zakres prac
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted" id="dla-kogo">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Dla kogo</p>
                  <h2 className="section-title">
                    Dla kogo jest sprzątanie poremontowe we Wrocławiu?
                  </h2>
                </div>
                <div className="grid grid-3">
                  <div className="card">
                    <h3 className="card-title">Właściciele mieszkań</h3>
                    <p className="support-copy">
                      Dla osób, które zakończyły remont i chcą szybko przygotować
                      mieszkanie do normalnego użytkowania.
                    </p>
                  </div>
                  <div className="card card-accent">
                    <h3 className="card-title">Najemcy i wynajmujący</h3>
                    <p className="support-copy">
                      Dla osób przygotowujących lokal do wynajmu albo odbioru po
                      zakończonej umowie najmu.
                    </p>
                  </div>
                  <div className="card card-warm">
                    <h3 className="card-title">Inwestorzy i flipperzy</h3>
                    <p className="support-copy">
                      Dla osób, które chcą przygotować mieszkanie do zdjęć, prezentacji
                      lub sprzedaży.
                    </p>
                  </div>
                  <div className="card">
                    <h3 className="card-title">Lokale usługowe i biura</h3>
                    <p className="support-copy">
                      Dla firm, które kończą remont biura, gabinetu, salonu, punktu
                      usługowego lub lokalu handlowego.
                    </p>
                  </div>
                  <div className="card card-accent">
                    <h3 className="card-title">Ekipy remontowe</h3>
                    <p className="support-copy">
                      Dla wykonawców, którzy chcą przekazać klientowi czysty lokal po
                      zakończeniu prac.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="jak-to-dziala">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Proces zgłoszenia</p>
                  <h2 className="section-title">
                    Jak wygląda zgłoszenie sprzątania po remoncie?
                  </h2>
                </div>
                <div className="grid grid-2">
                  <div className="card">
                    <ol className="steps">
                      <li>
                        <span className="step-number">01</span>
                        <span>
                          Wysyłasz podstawowe informacje: metraż, lokalizację, rodzaj
                          lokalu, zakres prac i preferowany termin.
                        </span>
                      </li>
                      <li>
                        <span className="step-number">02</span>
                        <span>
                          Opisujesz stan po remoncie: pył budowlany, zabrudzenia po
                          farbie, mycie okien, łazienkę, kuchnię lub całe mieszkanie.
                        </span>
                      </li>
                    </ol>
                  </div>
                  <div className="card card-accent">
                    <ol className="steps">
                      <li>
                        <span className="step-number">03</span>
                        <span>
                          Zgłoszenie trafia do weryfikacji, aby określić, czy chodzi o
                          standardowe sprzątanie, sprzątanie poremontowe czy dodatkowe
                          doczyszczanie.
                        </span>
                      </li>
                      <li>
                        <span className="step-number">04</span>
                        <span>
                          Otrzymujesz kontakt lub orientacyjną wycenę po analizie
                          zgłoszenia, dostępności terminu i zakresu prac.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="callout">
                  <p className="support-copy">
                    Serwis pomaga zebrać zapytanie o usługę sprzątania po remoncie.
                    Realizacja usługi zależy od dostępności wykonawcy i potwierdzonego
                    zakresu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted" id="cennik">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Cennik orientacyjny</p>
                  <h2 className="section-title">
                    Ile kosztuje sprzątanie po remoncie we Wrocławiu?
                  </h2>
                  <p className="section-copy">
                    Cena sprzątania po remoncie zależy głównie od metrażu, stopnia
                    zabrudzenia, liczby okien, rodzaju powierzchni oraz tego, czy
                    usługa obejmuje samo odkurzanie i mycie, czy również dokładne
                    doczyszczanie po farbie, gładzi, silikonie lub kleju.
                  </p>
                </div>
                <div className="pricing-table-wrap">
                  <table className="pricing-table">
                    <thead>
                      <tr>
                        <th>Rodzaj usługi</th>
                        <th>Przykładowy sposób wyceny</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sprzątanie po lekkim remoncie</td>
                        <td>od ok. 10–15 zł/m²</td>
                      </tr>
                      <tr>
                        <td>Sprzątanie po większym remoncie</td>
                        <td>od ok. 15–25 zł/m²</td>
                      </tr>
                      <tr>
                        <td>Sprzątanie po budowie / ciężkie zabrudzenia</td>
                        <td>wycena indywidualna</td>
                      </tr>
                      <tr>
                        <td>Mycie okien po remoncie</td>
                        <td>często jako usługa dodatkowa</td>
                      </tr>
                      <tr>
                        <td>Doczyszczanie fug, silikonu, farby, kleju</td>
                        <td>często wycena indywidualna</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="callout">
                  <p className="support-copy">
                    Podane kwoty są orientacyjne i nie stanowią oferty handlowej.
                    Ostateczna cena zależy od zakresu usługi i ustaleń z wykonawcą.
                  </p>
                </div>
                <div className="cta-group">
                  <a className="btn primary" href="#formularz">
                    Sprawdź orientacyjny koszt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="czynniki-ceny">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Czynniki ceny</p>
                  <h2 className="section-title">
                    Co wpływa na cenę sprzątania poremontowego?
                  </h2>
                </div>
                <div className="grid grid-3">
                  <div className="card">
                    <ul className="list">
                      <li>Metraż mieszkania lub lokalu</li>
                      <li>Liczba pomieszczeń</li>
                      <li>Liczba okien</li>
                      <li>Ilość pyłu budowlanego</li>
                    </ul>
                  </div>
                  <div className="card card-accent">
                    <ul className="list">
                      <li>Rodzaj zabrudzeń</li>
                      <li>Konieczność doczyszczania farby, kleju, fug lub silikonu</li>
                      <li>Czy lokal jest pusty, czy umeblowany</li>
                      <li>Zakres dodatkowy: balkon, garaż, piwnica, klatka schodowa</li>
                    </ul>
                  </div>
                  <div className="card card-warm">
                    <ul className="list">
                      <li>Dostęp do windy</li>
                      <li>Piętro i możliwość parkowania</li>
                      <li>Termin realizacji</li>
                      <li>Rodzaj lokalu i etap po remoncie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted" id="formularz">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Formularz leadowy</p>
                  <h2 className="section-title">Poproś o wycenę sprzątania po remoncie</h2>
                  <p className="section-copy">
                    Im dokładniej opiszesz metraż, zakres i zabrudzenia, tym łatwiej
                    będzie przygotować realną wycenę.
                  </p>
                </div>
                <div className="form-shell">
                  <form className="form" action="#" method="post">
                    <div className="form-grid">
                      <label className="field">
                        Imię
                        <input type="text" name="imie" autoComplete="given-name" required />
                      </label>
                      <label className="field">
                        Telefon
                        <input type="tel" name="telefon" autoComplete="tel" required />
                      </label>
                      <label className="field">
                        E-mail (opcjonalnie)
                        <input type="email" name="email" autoComplete="email" />
                      </label>
                      <label className="field">
                        Lokalizacja / dzielnica
                        <input type="text" name="lokalizacja" required />
                      </label>
                      <label className="field">
                        Metraż
                        <input type="text" name="metraz" placeholder="np. 58 m²" required />
                      </label>
                      <label className="field">
                        Rodzaj lokalu
                        <select name="rodzaj-lokalu" required>
                          <option value="">Wybierz rodzaj lokalu</option>
                          <option value="mieszkanie">mieszkanie</option>
                          <option value="dom">dom</option>
                          <option value="biuro">biuro</option>
                          <option value="lokal-uslugowy">lokal usługowy</option>
                          <option value="inny">inny</option>
                        </select>
                      </label>
                      <label className="field">
                        Rodzaj remontu
                        <select name="rodzaj-remontu" required>
                          <option value="">Wybierz rodzaj remontu</option>
                          <option value="malowanie">malowanie</option>
                          <option value="gladzie">gładzie</option>
                          <option value="lazienka">łazienka</option>
                          <option value="kuchnia">kuchnia</option>
                          <option value="generalny">generalny remont</option>
                          <option value="deweloperskie">wykończenie deweloperskie</option>
                          <option value="inny">inny</option>
                        </select>
                      </label>
                      <label className="field">
                        Zakres
                        <select name="zakres" required>
                          <option value="">Wybierz zakres</option>
                          <option value="cale-mieszkanie">całe mieszkanie</option>
                          <option value="wybrane-pomieszczenia">wybrane pomieszczenia</option>
                          <option value="lazienka">łazienka</option>
                          <option value="kuchnia">kuchnia</option>
                          <option value="okna">okna</option>
                          <option value="balkon">balkon</option>
                          <option value="klatka">klatka schodowa</option>
                          <option value="lokal-po-ekipie">lokal po ekipie remontowej</option>
                        </select>
                      </label>
                      <label className="field">
                        Czy potrzebne mycie okien?
                        <select name="okna" required>
                          <option value="">Wybierz opcję</option>
                          <option value="tak">tak</option>
                          <option value="nie">nie</option>
                          <option value="nie-wiem">nie wiem</option>
                        </select>
                      </label>
                      <label className="field">
                        Preferowany termin
                        <select name="termin" required>
                          <option value="">Wybierz termin</option>
                          <option value="jak-najszybciej">jak najszybciej</option>
                          <option value="w-tym-tygodniu">w tym tygodniu</option>
                          <option value="w-przyszlym-tygodniu">w przyszłym tygodniu</option>
                          <option value="konkretny-termin">konkretny termin</option>
                        </select>
                      </label>
                    </div>

                    <label className="field">
                      Opis sytuacji
                      <textarea
                        name="opis"
                        rows={5}
                        placeholder="Opisz zakres zabrudzeń, liczbę okien, piętro, parking i to, czy remont jest już zakończony."
                      />
                    </label>

                    <label className="field">
                      Zdjęcia zabrudzeń (opcjonalnie)
                      <input type="file" name="zdjecia" accept="image/*" multiple />
                    </label>

                    <div className="checkbox-list checkbox-list--consents">
                      <label className="checkbox-row checkbox-row--consent">
                        <input type="checkbox" name="zgoda-kontakt" required />
                        <span>
                          Wysyłając formularz, zgadzasz się na kontakt w sprawie
                          przesłanego zapytania.
                        </span>
                      </label>
                      <label className="checkbox-row checkbox-row--consent">
                        <input type="checkbox" name="zgoda-przekazanie" required />
                        <span>
                          Wyrażam zgodę na przekazanie mojego zapytania partnerowi
                          realizującemu usługi sprzątania w celu przygotowania wyceny.
                        </span>
                      </label>
                    </div>

                    <div className="form-actions">
                      <button className="btn primary" type="submit">
                        Wyślij zapytanie o wycenę
                      </button>
                      <span className="support-copy">
                        Zgłoszenie pomaga szybciej określić realny zakres, termin i
                        możliwość wyceny.
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="checklista">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Checklista</p>
                  <h2 className="section-title">Checklista sprzątania po remoncie</h2>
                </div>
                <div className="grid grid-2">
                  <div className="card">
                    <ul className="checklist">
                      <li>Czy remont jest już zakończony?</li>
                      <li>Czy ekipa remontowa wyniosła odpady?</li>
                      <li>Czy w lokalu są jeszcze narzędzia lub materiały?</li>
                      <li>Czy trzeba myć okna?</li>
                    </ul>
                  </div>
                  <div className="card card-accent">
                    <ul className="checklist">
                      <li>Czy są zabrudzenia po farbie, silikonie, kleju lub fugach?</li>
                      <li>Czy mieszkanie ma być gotowe do zamieszkania lub wynajmu?</li>
                      <li>Czy jest dostęp do prądu i wody?</li>
                      <li>Czy można zaparkować blisko budynku?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted" id="uwagi">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Na co zwrócić uwagę</p>
                  <h2 className="section-title">
                    Na co zwrócić uwagę przy sprzątaniu po remoncie?
                  </h2>
                </div>
                <div className="grid grid-2">
                  <div className="card">
                    <ul className="list">
                      <li>Nie każda powierzchnia może być szorowana</li>
                      <li>Pył po gładzi wraca, jeśli lokal nie jest dokładnie odkurzony</li>
                      <li>Okna po remoncie wymagają ostrożności</li>
                    </ul>
                  </div>
                  <div className="card card-warm">
                    <ul className="list">
                      <li>Resztki silikonu, farby i kleju mogą wymagać osobnego doczyszczania</li>
                      <li>Odpady budowlane zwykle nie są częścią standardowego sprzątania</li>
                      <li>Dobre zgłoszenie powinno zawierać metraż, zdjęcia i informacje o zabrudzeniach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="lokalizacje">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Lokalnie</p>
                  <h2 className="section-title">Sprzątanie po remoncie Wrocław i okolice</h2>
                  <p className="section-copy">
                    Zapytania można składać dla mieszkań, domów, biur i lokali na
                    terenie Wrocławia oraz okolic. Najczęściej sprzątanie po remoncie
                    dotyczy mieszkań w nowych inwestycjach, lokali po wykończeniu
                    deweloperskim, mieszkań po malowaniu, remontach łazienki, kuchni
                    lub całkowitej modernizacji.
                  </p>
                </div>
                <div className="grid grid-2">
                  <div className="card">
                    <h3 className="card-title">Wrocław</h3>
                    <p className="support-copy">
                      Krzyki, Fabryczna, Psie Pole, Śródmieście, Stare Miasto, Jagodno,
                      Ołtaszyn, Muchobór, Leśnica, Zakrzów, Klecina, Brochów i Biskupin.
                    </p>
                  </div>
                  <div className="card card-accent">
                    <h3 className="card-title">Okolice</h3>
                    <p className="support-copy">
                      Bielany Wrocławskie, Długołęka, Kiełczów, Siechnice, Kobierzyce,
                      Smolec, Radwanice i Żórawina.
                    </p>
                  </div>
                </div>
                <div className="cta-group">
                  <a className="btn primary" href="#formularz">
                    Wyślij zapytanie z Wrocławia lub okolic
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted" id="faq">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">FAQ</p>
                  <h2 className="section-title">Najczęstsze pytania</h2>
                </div>
                <div className="faq-list">
                  {faqItems.map((item) => (
                    <details className="faq-item" key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
                <div className="cta-group">
                  <a className="btn primary" href="#formularz">
                    Zgłoś sprzątanie po remoncie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-frame reveal">
              <div className="section-inner section-stack">
                <div className="section-header stack-sm">
                  <p className="section-kicker">Zobacz też</p>
                  <h2 className="section-title">Powiązane zapytania i strony</h2>
                  <p className="section-copy">
                    Jeśli porównujesz różne typy usług, zobacz też stronę główną oraz
                    sekcje dotyczące sprzątania mieszkań, mycia okien i sprzątania po
                    wyprowadzce.
                  </p>
                </div>
                <div className="link-grid">
                  <Link className="card link-card" href="/">
                    <span className="card-title">Strona główna</span>
                    <span className="support-copy">
                      Ogólny formularz zapytań o sprzątanie we Wrocławiu.
                    </span>
                  </Link>
                  <Link className="card link-card" href="/#wybor">
                    <span className="card-title">Sprzątanie mieszkań</span>
                    <span className="support-copy">
                      Zobacz zakres dla mieszkań i domów.
                    </span>
                  </Link>
                  <Link className="card link-card" href="/#edukacja">
                    <span className="card-title">Mycie okien</span>
                    <span className="support-copy">
                      Informacje o dodatkach i usługach dodatkowych.
                    </span>
                  </Link>
                  <Link className="card link-card" href="/#wybor">
                    <span className="card-title">Sprzątanie po wyprowadzce</span>
                    <span className="support-copy">
                      Zakres przy przygotowaniu lokalu do najmu lub sprzedaży.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-sticky-bar">
        <a className="mobile-sticky-link" href="#formularz">
          Formularz
        </a>
        <a className="mobile-sticky-link" href="#cennik">
          Wycena
        </a>
        <a className="mobile-sticky-link" href="#faq">
          Kontakt
        </a>
      </div>
    </div>
  );
}
