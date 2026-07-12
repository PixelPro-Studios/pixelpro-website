"use client";

import { useEffect } from "react";

const EMBED_SRC =
  "https://app.trysoro.com/api/embed/319e7d33-0476-4430-91a6-b6ba05ad26a9?theme=dark";

export default function SoroBlogEmbed() {
  useEffect(() => {
    const container = document.getElementById("soro-blog");
    if (!container) return;

    // Remove any previous embed script so client navigations re-init cleanly
    document
      .querySelectorAll(`script[src="${EMBED_SRC}"]`)
      .forEach((node) => node.remove());
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      const el = document.getElementById("soro-blog");
      if (el) el.innerHTML = "";
    };
  }, []);

  return <div id="soro-blog" />;
}
