"use client";

import { useState } from "react";
import type { FormEvent, FormHTMLAttributes, ReactNode } from "react";

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
  action = "/api/contact",
  method = "post",
  onSubmit,
  ...props
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (typeof action !== "string" || method.toLowerCase() !== "post") {
      return;
    }

    event.preventDefault();
    setStatus("sending");
    setMessage("Wysylanie...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_sourcePath", window.location.pathname);

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Nie udalo sie wyslac formularza.");
      }

      form.reset();
      setStatus("success");
      setMessage(result?.message || "Dzieki, zgloszenie zostalo wyslane.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Nie udalo sie wyslac formularza.");
    }
  }

  return (
    <form
      action={action}
      aria-busy={status === "sending"}
      className={["ui-lead-form", className].filter(Boolean).join(" ")}
      method={method}
      onSubmit={handleSubmit}
      {...props}
    >
      <input autoComplete="off" hidden name="website" tabIndex={-1} type="text" />
      <div className="ui-lead-form__grid">{children}</div>
      {actions || support ? (
        <div className="ui-lead-form__actions">
          {actions}
          {support ? <span className="ui-lead-form__support">{support}</span> : null}
        </div>
      ) : null}
      {message ? (
        <p className={`ui-lead-form__status ui-lead-form__status--${status}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
