import type { ReactNode } from "react";

type FormFieldProps = {
  label: ReactNode;
  error?: ReactNode;
  className?: string;
  children: ReactNode;
};

export default function FormField({ label, error, className, children }: FormFieldProps) {
  return (
    <label className={["ui-form-field", className].filter(Boolean).join(" ")}>
      <span className="ui-form-field__label">{label}</span>
      {children}
      {error ? <span className="ui-form-field__error">{error}</span> : null}
    </label>
  );
}
