import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export default function PageShell({ children, header, footer, className }: PageShellProps) {
  return (
    <div className={["page ui-page-shell", className].filter(Boolean).join(" ")}>
      {header}
      <main className="ui-page-shell__main">{children}</main>
      {footer}
    </div>
  );
}
