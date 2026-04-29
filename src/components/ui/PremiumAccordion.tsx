"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type PremiumAccordionItem = {
  id: string;
  title: string;
  description: ReactNode;
  number?: number;
};

type PremiumAccordionProps = {
  items: PremiumAccordionItem[];
  className?: string;
};

export default function PremiumAccordion({ items, className }: PremiumAccordionProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  return (
    <div className={["ui-premium-accordion", className].filter(Boolean).join(" ")}>
      <div className="ui-premium-accordion__cards">
        {items.map((item, index) => {
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              className={[
                "ui-premium-accordion__card",
                isActive && "ui-premium-accordion__card--active",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setActiveId(item.id)}
              aria-expanded={isActive}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className="ui-premium-accordion__card-header">
                <div className="ui-premium-accordion__card-number">
                  {item.number ?? index + 1}
                </div>
                <h3 className="ui-premium-accordion__card-title">{item.title}</h3>
              </div>
              {isActive && (
                <div
                  id={`accordion-content-${item.id}`}
                  className="ui-premium-accordion__card-content"
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                >
                  {item.description}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Accordion */}
      <div className="ui-premium-accordion__mobile">
        {items.map((item, index) => {
          const isActive = activeId === item.id;

          return (
            <details
              key={item.id}
              className="ui-premium-accordion__details"
              open={isActive}
              onChange={() => setActiveId(isActive ? "" : item.id)}
            >
              <summary
                className="ui-premium-accordion__details-summary"
                id={`accordion-trigger-${item.id}`}
              >
                <div className="ui-premium-accordion__details-number">
                  {item.number ?? index + 1}
                </div>
                <div className="ui-premium-accordion__details-title">{item.title}</div>
                <div className="ui-premium-accordion__details-toggle" aria-hidden="true">
                  +
                </div>
              </summary>
              <div className="ui-premium-accordion__details-content">
                {item.description}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
