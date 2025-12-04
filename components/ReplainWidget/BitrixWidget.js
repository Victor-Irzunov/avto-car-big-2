"use client";

import { useEffect } from "react";

const SRC = "https://cdn-ru.bitrix24.by/b34208610/crm/site_button/loader_1_mykez7.js";

export default function BitrixWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasBitrixScript = () =>
      !!document.querySelector(`script[src^="${SRC}"]`) ||
      [...document.scripts].some(s => (s.src || "").includes("bitrix24.by"));

    const ensureOne = () => {
      const scripts = [...document.querySelectorAll('script[src*="bitrix24.by"]')];
      if (scripts.length > 1) scripts.slice(1).forEach(s => s.remove());

      const iframes = [...document.querySelectorAll("iframe")].filter(f =>
        (f.src || "").includes("bitrix24")
      );
      if (iframes.length > 1) iframes.slice(1).forEach(f => f.remove());

      if (scripts.length > 0) window.__bitrix24_loaded = true;
    };

    const mo = new MutationObserver(() => ensureOne());
    mo.observe(document.documentElement, { childList: true, subtree: true });

    ensureOne();

    const t = setTimeout(() => {
      if (!hasBitrixScript() && !window.__bitrix24_loaded) {
        const s = document.createElement("script");
        s.id = "bitrix24-script";
        s.src = `${SRC}?${(Date.now() / 60000) | 0}`;
        s.async = true;
        s.defer = true;
        s.onload = () => {
          window.__bitrix24_loaded = true;
          ensureOne();
        };
        document.body.appendChild(s);
      } else {
        ensureOne();
      }
    }, 3000);

    return () => {
      clearTimeout(t);
      mo.disconnect();
    };
  }, []);

  return null;
}

