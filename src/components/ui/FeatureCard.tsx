import type { ReactNode } from "react";

type FeatureCardProps = {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  list?: ReactNode;
  variant?: "neutral" | "accent" | "warm";
  badge?: ReactNode;
  className?: string;
  indexLabel?: ReactNode;
};

const variantClassName: Record<NonNullable<FeatureCardProps["variant"]>, string> = {
  neutral: "ui-feature-card",
  accent: "ui-feature-card ui-feature-card--accent",
  warm: "ui-feature-card ui-feature-card--warm",
};

export default function FeatureCard({
  title,
  description,
  icon,
  list,
  variant = "neutral",
  badge,
  className,
  indexLabel,
}: FeatureCardProps) {
  const hasMeta = icon || badge || indexLabel;

  return (
    <article className={[variantClassName[variant], className].filter(Boolean).join(" ")}>
      {hasMeta ? (
        <div className="ui-feature-card__meta-row">
          <div className="ui-feature-card__meta-main">
            {indexLabel ? (
              <span className="ui-feature-card__index">{indexLabel}</span>
            ) : null}
            {badge ? <span className="ui-feature-card__badge">{badge}</span> : null}
          </div>
          {icon ? <div className="ui-feature-card__icon">{icon}</div> : null}
        </div>
      ) : null}
      <h3 className="ui-feature-card__title">{title}</h3>
      {description ? <p className="ui-feature-card__description">{description}</p> : null}
      {list}
    </article>
  );
}
