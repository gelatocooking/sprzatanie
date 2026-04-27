import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: "default" | "narrow" | "wide";
};

const variantClassName: Record<NonNullable<ContainerProps["variant"]>, string> = {
  default: "ui-container",
  narrow: "ui-container ui-container--narrow",
  wide: "ui-container ui-container--wide",
};

export default function Container({
  as: Component = "div",
  children,
  className,
  variant = "default",
}: ContainerProps) {
  return (
    <Component className={[variantClassName[variant], className].filter(Boolean).join(" ")}>
      {children}
    </Component>
  );
}
