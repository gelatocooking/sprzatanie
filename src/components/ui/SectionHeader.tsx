import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: ReactNode;
  kicker?: ReactNode;
  description?: ReactNode;
  support?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
  titleClassName?: string;
};

export default function SectionHeader({
  title,
  kicker,
  description,
  support,
  align = "left",
  className,
  titleAs: TitleTag = "h2",
  titleClassName,
}: SectionHeaderProps) {
  return (
    <header
      className={[
        "ui-section-header",
        align === "center" ? "ui-section-header--center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {kicker ? <p className="ui-section-header__kicker">{kicker}</p> : null}
      <TitleTag
        className={["ui-section-header__title", titleClassName].filter(Boolean).join(" ")}
      >
        {title}
      </TitleTag>
      {description ? <p className="ui-section-header__description">{description}</p> : null}
      {support ? <p className="ui-section-header__support">{support}</p> : null}
    </header>
  );
}
