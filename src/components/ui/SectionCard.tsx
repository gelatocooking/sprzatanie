import type { ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  variant?: "default" | "hero" | "compact";
};

const variantClassName: Record<NonNullable<SectionCardProps["variant"]>, string> = {
  default: "ui-section-card",
  hero: "ui-section-card ui-section-card--hero",
  compact: "ui-section-card ui-section-card--compact",
};

export default function SectionCard({
  children,
  className,
  muted,
  variant = "default",
}: SectionCardProps) {
  return (
    <div
      className={[
        variantClassName[variant],
        muted ? "ui-section-card--muted" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="ui-section-card__inner">{children}</div>
    </div>
  );
}
