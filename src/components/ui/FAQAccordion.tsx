type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <div className={["ui-faq", className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <details className="ui-faq__item" key={item.question}>
          <summary className="ui-faq__summary">{item.question}</summary>
          <p className="ui-faq__content">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
