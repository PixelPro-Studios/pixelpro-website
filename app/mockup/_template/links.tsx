// MOCKUP by Rankr (15 Nov 2026). Link guard for the mockup pages.
// Pages link to some pages that are planned but not built yet (e.g. /events/prize-giving-ceremony-av).
// A link renders as a real link only if its target exists; otherwise it renders as plain text,
// so the site never ships a link to a 404. When a planned page is built, add its route to
// LIVE_ROUTES (blog posts are picked up automatically) and every link to it switches on.
import Link from "next/link";
import type { ReactNode } from "react";
import { getPostSlugs } from "@/lib/blog";

// Real routes on the site today (app/**/page.tsx, outside /mockup).
const LIVE_ROUTES = new Set<string>([
  "/", "/about", "/blog", "/contact", "/portfolio", "/privacy", "/promotions", "/services", "/terms",
  "/services/av-systems", "/services/led-walls", "/services/photography", "/services/talent", "/services/videography",
]);

// Where each mockup moves when it is copied to the real site (route names to confirm with Abel).
// At copy-over: replace "/mockup/..." hrefs with these, and add these routes to LIVE_ROUTES.
export const MOCKUP_TO_LIVE: Record<string, string> = {
  "/mockup/led-walls": "/services/led-walls",
  "/mockup/av-systems": "/services/av-systems",
  "/mockup/sound-system-rental": "/services/sound-system-rental",
  "/mockup/projector-rental": "/services/projector-rental",
  "/mockup/stage-rental": "/services/stage-rental",
  "/mockup/event-production": "/services/event-production",
  "/mockup/event-av-planning": "/services/event-av-planning",
  "/mockup/events/cny-event-av": "/events/cny-event-av",
  "/mockup/events/dinner-and-dance-av": "/events/dinner-and-dance-av",
  "/mockup/events/town-hall-sound-system": "/events/town-hall-sound-system",
  "/mockup/events/school-sound-system-rental": "/events/school-sound-system-rental",
  "/mockup/events/conference-av-rental": "/events/conference-av-rental",
  "/mockup/events/roadshow-led-screen-rental": "/events/roadshow-led-screen-rental",
};

function blogSlugs(): Set<string> {
  try {
    return new Set(getPostSlugs().map((s) => `/blog/${s.replace(/\.mdx?$/, "")}`));
  } catch {
    return new Set();
  }
}

export function isLive(href: string): boolean {
  if (!href.startsWith("/")) return true; // external links and wa.me
  const path = href.split(/[?#]/)[0].replace(/\/$/, "") || "/";
  if (path in MOCKUP_TO_LIVE || path === "/mockup") return true; // the mockups exist on the preview
  return LIVE_ROUTES.has(path) || blogSlugs().has(path);
}

const PLANNED_TITLE = "Planned page: becomes a link when the page is live";

// Inline link (buyer cards, comparison link, related chips).
export function SafeLink({ href, className, plannedClassName, children }: { href: string; className?: string; plannedClassName?: string; children: ReactNode }) {
  if (isLive(href)) return <Link href={href} className={className}>{children}</Link>;
  return (
    <span title={PLANNED_TITLE} className={plannedClassName ?? "cursor-default underline decoration-dotted decoration-white/30 underline-offset-4"}>
      {children}
    </span>
  );
}

// Block link (cards): a div with the same look when the target isn't live.
export function SafeCard({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  if (isLive(href)) return <Link href={href} className={className}>{children}</Link>;
  return <div title={PLANNED_TITLE} className={className}>{children}</div>;
}
