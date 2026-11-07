import { startAnalytics } from "@/lib/analytics";

// PostHog starts once the page has loaded, so it doesn't compete with the first paint
if (document.readyState === "complete") startAnalytics();
else window.addEventListener("load", () => startAnalytics(), { once: true });
