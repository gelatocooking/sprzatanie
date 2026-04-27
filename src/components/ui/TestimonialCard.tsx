import type { ReactNode } from "react";

type TestimonialCardProps = {
  quote: ReactNode;
  meta?: ReactNode;
  className?: string;
};

export default function TestimonialCard({
  quote,
  meta,
  className,
}: TestimonialCardProps) {
  return (
    <figure className={["ui-quote-card", className].filter(Boolean).join(" ")}>
      <blockquote className="ui-quote-card__quote">{quote}</blockquote>
      {meta ? <figcaption className="ui-quote-card__meta">{meta}</figcaption> : null}
    </figure>
  );
}
