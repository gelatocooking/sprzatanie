"use client";

import { useEffect } from "react";

const SCROLL_OFFSET = 16;

export default function AnchorScrollManager() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest('a[href^="#"]');

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const element = document.querySelector(href);

      if (!(element instanceof HTMLElement)) {
        return;
      }

      event.preventDefault();

      const header = document.querySelector(".site-header");
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
      const top =
        element.getBoundingClientRect().top + window.scrollY - headerHeight - SCROLL_OFFSET;

      window.history.pushState(null, "", href);
      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth",
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
