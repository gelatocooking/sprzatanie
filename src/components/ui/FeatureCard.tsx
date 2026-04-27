import type { ReactNode } from "react";

type FeatureCardProps = {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  list?: ReactNode;
  variant?: "neutral" | "accent" | "warm";
  className?: string;
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
  className,
}: FeatureCardProps) {
  return (
    <article className={[variantClassName[variant], className].filter(Boolean).join(" ")}>
      {icon ? <div className="ui-feature-card__icon">{icon}</div> : null}
      <h3 className="ui-feature-card__title">{title}</h3>
      {description ? <p className="ui-feature-card__description">{description}</p> : null}
      {list}
    </article>
  );
}
