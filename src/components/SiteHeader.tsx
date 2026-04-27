import Link from "next/link";

type SiteHeaderLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  links: SiteHeaderLink[];
  ctaHref: string;
  ctaLabel: string;
};

export default function SiteHeader({
  links,
  ctaHref,
  ctaLabel,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          Sprzątanie<span>Pro</span>
        </Link>
        <nav className="nav-inline">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn secondary" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
