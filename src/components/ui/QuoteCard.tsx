import type { ReactNode } from "react";

type QuoteCardProps = {
  quote: ReactNode;
  meta?: ReactNode;
  className?: string;
};

export default function QuoteCard({ quote, meta, className }: QuoteCardProps) {
  return (
    <figure className={["ui-quote-card", className].filter(Boolean).join(" ")}>
      <blockquote className="ui-quote-card__quote">{quote}</blockquote>
      {meta ? <figcaption className="ui-quote-card__meta">{meta}</figcaption> : null}
    </figure>
  );
}
