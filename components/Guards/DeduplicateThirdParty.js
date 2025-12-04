// app/components/Guards/DeduplicateThirdParty.jsx
"use client";
import { useEffect } from "react";

export default function DeduplicateThirdParty() {
  useEffect(() => {
    function dedupe() {
      const scripts = [...document.querySelectorAll('script[src*="bitrix24.by"]')];
      scripts.slice(1).forEach(s => s.remove());
      const ifr = [...document.querySelectorAll("iframe")].filter(f =>
        (f.src || "").includes("bitrix24")
      );
      ifr.slice(1).forEach(f => f.remove());
      if (scripts.length > 0) window.__bitrix24_loaded = true;
    }
    dedupe();
    const mo = new MutationObserver(dedupe);
    mo.observe(document.documentElement, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
  return null;
}
