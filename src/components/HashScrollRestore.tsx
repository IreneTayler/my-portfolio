"use client";

import { useEffect } from "react";

/**
 * After refresh (F5), the browser or framework can reset scroll and make the
 * hash target (e.g. #projects) disappear. This re-applies scroll to the hash
 * element once after mount so the section stays visible.
 */
export default function HashScrollRestore() {
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash || hash.length < 2) return;

    const id = hash.slice(1);
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "start" });
      }
    };

    // Run after paint and a short delay so we override any framework scroll reset after F5
    const t = setTimeout(scrollToHash, 100);
    return () => clearTimeout(t);
  }, []);

  return null;
}
