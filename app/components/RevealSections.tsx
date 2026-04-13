"use client";

import { useEffect } from "react";

/**
 * Ensures .fade-in-section gets .visible when the user jumps via #hash
 * (fixed nav + smooth scroll can otherwise miss IntersectionObserver timing).
 */
export default function RevealSections() {
  useEffect(() => {
    const revealTarget = (id: string) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (el?.classList.contains("fade-in-section")) {
        el.classList.add("visible");
      }
    };

    const syncFromHash = () => {
      revealTarget(window.location.hash.slice(1));
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href^='#']");
      if (!a || !(a instanceof HTMLAnchorElement)) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      window.setTimeout(() => revealTarget(id), 450);
    };

    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
