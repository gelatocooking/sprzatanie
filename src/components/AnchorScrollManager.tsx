"use client";

import { useEffect } from "react";

const SCROLL_OFFSET = 16;
const HERO_IMAGE_PARALLAX_MAX_OFFSET = 96;

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

      const header = document.querySelector(".ui-site-header");
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    let animationFrame = 0;

    const updateHeroImageOffset = () => {
      animationFrame = 0;

      document.querySelectorAll<HTMLElement>(".ui-section-card--hero").forEach((heroCard) => {
        const rect = heroCard.getBoundingClientRect();
        const isNearViewport = rect.bottom > 0 && rect.top < window.innerHeight;

        if (!isNearViewport) {
          return;
        }

        const offset = Math.min(
          Math.max(window.scrollY * 0.18, 0),
          HERO_IMAGE_PARALLAX_MAX_OFFSET,
        );

        heroCard.style.setProperty("--hero-image-scroll-offset", `${offset.toFixed(2)}px`);
      });
    };

    const requestUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateHeroImageOffset);
    };

    updateHeroImageOffset();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return null;
}
