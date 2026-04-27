import type { FormHTMLAttributes, ReactNode } from "react";

type LeadFormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  actions?: ReactNode;
  support?: ReactNode;
  className?: string;
};

export default function LeadForm({
  children,
  actions,
  support,
  className,
  ...props
}: LeadFormProps) {
  return (
    <form className={["ui-lead-form", className].filter(Boolean).join(" ")} {...props}>
      <div className="ui-lead-form__grid">{children}</div>
      {actions || support ? (
        <div className="ui-lead-form__actions">
          {actions}
          {support ? <span className="ui-lead-form__support">{support}</span> : null}
        </div>
      ) : null}
    </form>
  );
}
