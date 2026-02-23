"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CHAT_WIDGET_SRC =
  "https://widgets.leadconnectorhq.com/loader.js";
const WIDGET_ID = "691b47b4f4a10e654a163323";

/**
 * Loads the Lead Connector chat widget only after first user interaction.
 * Reduces TBT by deferring third-party script until the user engages.
 */
export default function ChatWidgetLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const loadOnInteraction = () => setShouldLoad(true);

    const events = ["scroll", "click", "touchstart", "keydown"];
    events.forEach((ev) =>
      window.addEventListener(ev, loadOnInteraction, { once: true, passive: true })
    );

    // Fallback: load after 4s if user hasn't interacted (e.g. reading)
    const fallback = setTimeout(loadOnInteraction, 4000);

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, loadOnInteraction));
      clearTimeout(fallback);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script
      src={CHAT_WIDGET_SRC}
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={WIDGET_ID}
      strategy="afterInteractive"
    />
  );
}
