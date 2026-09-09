"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

type CalFn = ((...args: unknown[]) => void) & { loaded?: boolean; q?: unknown[][] };

const EMBED_SRC = "https://app.cal.com/embed/embed.js";

/** Loads the Cal.com embed script once and mounts an inline calendar. */
export function CalEmbed({ calLink }: { calLink: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Cal.com's official loader snippet, written out instead of pasted.
    if (!window.Cal) {
      const cal: CalFn = (...args: unknown[]) => {
        cal.q = cal.q ?? [];
        cal.q.push(args);
      };
      window.Cal = cal;
      const script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      document.head.appendChild(script);
      cal("init", { origin: "https://cal.com" });
    }

    window.Cal?.("inline", {
      elementOrSelector: el,
      calLink,
      config: { layout: "month_view", theme: "light" },
    });
    window.Cal?.("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#e89a94" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    return () => {
      el.innerHTML = "";
    };
  }, [calLink]);

  return <div ref={ref} className="min-h-[600px] w-full overflow-auto" />;
}
