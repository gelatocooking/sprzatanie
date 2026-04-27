import type { ReactNode } from "react";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type CenteredHeroProps = {
  id: string;
  pill: string;
  title: ReactNode;
  description: ReactNode;
  actions: HeroAction[];
  checklist?: string[];
  subtitle?: ReactNode;
  support?: ReactNode;
  tags?: string[];
  titleClassName?: string;
  variant?: "default" | "service";
};

export default function CenteredHero({
  id,
  pill,
  title,
  description,
  actions,
  checklist,
  subtitle,
  support,
  tags,
  titleClassName,
  variant = "default",
}: CenteredHeroProps) {
  return (
    <section
      id={id}
      className={`section section--hero ${variant === "service" ? "section--hero-service" : ""}`.trim()}
    >
      <div className="container">
        <div
          className={`section-frame service-hero-frame ${variant === "service" ? "service-hero-frame--simple" : ""} reveal`.trim()}
        >
          <div className="section-inner service-hero-layout">
            <div className="service-hero-copy service-hero-copy--center section-stack">
              <div className="stack-md">
                <p className="pill">{pill}</p>
                <h1 className={`headline hero-title ${titleClassName ?? ""}`.trim()}>{title}</h1>
                <div className="stack-sm">
                  {subtitle ? <p className="service-subtitle">{subtitle}</p> : null}
                  <p className="section-copy">{description}</p>
                  {support ? <p className="support-copy">{support}</p> : null}
                </div>
              </div>

              {checklist?.length ? (
                <ul className="checklist">
                  {checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              <div className="cta-group">
                {actions.map((action) => (
                  <a
                    key={`${action.href}-${action.label}`}
                    className={`btn ${action.variant ?? "primary"}`}
                    href={action.href}
                  >
                    {action.label}
                  </a>
                ))}
              </div>

              {tags?.length ? (
                <div className="cluster">
                  {tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
