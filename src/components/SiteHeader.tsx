import Link from "next/link";

import Button from "./ui/Button";
import Container from "./ui/Container";

type SiteHeaderLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  links: SiteHeaderLink[];
  ctaHref: string;
  ctaLabel: string;
};

export default function SiteHeader({ links, ctaHref, ctaLabel }: SiteHeaderProps) {
  return (
    <header className="ui-site-header">
      <Container className="ui-site-header__inner">
        <Link className="ui-site-header__brand" href="/">
          Sprzatanie<span>Pro</span>
        </Link>
        <nav className="ui-site-header__nav">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button href={ctaHref} variant="secondary">
          {ctaLabel}
        </Button>
      </Container>
    </header>
  );
}
