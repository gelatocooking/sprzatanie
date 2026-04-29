import Link from "next/link";

const serviceLinks = [
  { href: "/", label: "Sprzątanie mieszkań Wrocław" },
  { href: "/sprzatanie-biur-wroclaw", label: "Sprzątanie biur Wrocław" },
  { href: "/sprzatanie-po-remoncie-wroclaw", label: "Sprzątanie po remoncie Wrocław" },
  { href: "/#edukacja", label: "Cennik usług sprzątania" },
];

const conversionLinks = [
  { href: "/#zakup", label: "Wyślij metraż i zakres prac" },
  { href: "/sprzatanie-biur-wroclaw#zakup", label: "Opisz sprzątanie biura" },
  { href: "/sprzatanie-po-remoncie-wroclaw#formularz", label: "Opisz sprzątanie po remoncie" },
  { href: "/#zakup", label: "Sprawdź dostępny termin" },
];

const locations = [
  "Krzyki",
  "Fabryczna",
  "Psie Pole",
  "Śródmieście",
  "Stare Miasto",
  "Ołtaszyn",
  "Jagodno",
  "Bielany Wrocławskie",
  "Długołęka",
  "Siechnice",
];

export default function SiteFooter() {
  return (
    <footer className="ui-site-footer">
      <div className="ui-container">
        <div className="ui-site-footer__grid">
          <div className="ui-site-footer__intro">
            <p className="ui-site-footer__kicker">Usługi sprzątania Wrocław</p>
            <h2 className="ui-site-footer__title">Sprzątanie mieszkań, biur i lokali</h2>
            <p className="ui-site-footer__description">
              Pomagamy zebrać zgłoszenie dotyczące sprzątania mieszkań, domów, biur,
              lokali usługowych i sprzątania po remoncie we Wrocławiu oraz okolicach.
              W formularzu podajesz metraż, lokalizację, zakres prac i preferowany termin.
            </p>
          </div>

          <nav className="ui-site-footer__nav" aria-label="Usługi sprzątania">
            <h3 className="ui-site-footer__heading">Usługi</h3>
            <ul className="ui-site-footer__list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ui-site-footer__nav">
            <h3 className="ui-site-footer__heading">Lokalizacje</h3>
            <p className="ui-site-footer__locations">{locations.join(", ")}.</p>
          </div>

          <nav className="ui-site-footer__nav" aria-label="Formularze zgłoszeniowe">
            <h3 className="ui-site-footer__heading">Zgłoszenie</h3>
            <ul className="ui-site-footer__list">
              {conversionLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="ui-site-footer__bottom">
          <p>
            © 2026 Usługi Sprzątania Wrocław. Zapytania o sprzątanie mieszkań,
            biur i lokali we Wrocławiu.
          </p>
        </div>
      </div>
    </footer>
  );
}
