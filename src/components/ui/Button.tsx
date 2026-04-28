import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export default function Button(props: ButtonProps) {
  const { children, className, variant = "primary", size = "md" } = props;
  const classes = ["ui-button", `ui-button--${variant}`, `ui-button--${size}`, className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const href = props.href;
    const anchorProps = { ...(props as Partial<ButtonAsAnchorProps>) };
    delete anchorProps.children;
    delete anchorProps.className;
    delete anchorProps.variant;
    delete anchorProps.size;
    delete anchorProps.href;

    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = { ...(props as Partial<ButtonAsButtonProps>) };
  const buttonType = buttonProps.type ?? "button";
  delete buttonProps.children;
  delete buttonProps.className;
  delete buttonProps.variant;
  delete buttonProps.size;
  delete buttonProps.href;
  delete buttonProps.type;

  return (
    <button className={classes} type={buttonType} {...buttonProps}>
      {children}
    </button>
  );
}
