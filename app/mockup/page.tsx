// MOCKUP index by Rankr: every page on the review site in one list, newest design first (rebuilt 25 Nov 2026).
// Review site only (rankr-mockups); main has no /mockup pages. Add a row here whenever a mockup page is added.
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All mockups",
  robots: { index: false, follow: false },
};

const LIVE = "https://www.pixelprostudios.sg";

type Row = { href: string; title: string; note: string; live?: string };
type Section = { heading: string; intro: string; rows: Row[] };

const sections: Section[] = [
  {
    heading: "Design 2: the current design",
    intro: "Pages marked Live are on pixelprostudios.sg. The rest are waiting for Jovin's OK.",
    rows: [
      { href: "/mockup/home-v3/", title: "Home", note: "The live home page since 24 Nov.", live: "/" },
      { href: "/mockup/christmas-packages/", title: "Christmas 2026 promotion", note: "Three festive packages. Ends 31 December 2026.", live: "/promotions/christmas-av-packages-singapore/" },
      { href: "/mockup/festive-packages/", title: "Chinese New Year 2027 promotion", note: "The same three packages. Ends 28 February 2027.", live: "/promotions/festive-av-packages-singapore/" },
      { href: "/mockup/led-walls-v3/", title: "LED wall rental", note: "Service page. Waiting for Jovin's OK." },
      { href: "/mockup/stage-rental-v3/", title: "Stage rental", note: "Service page. Waiting for Jovin's OK." },
      { href: "/mockup/cny-event-av-v3/", title: "Chinese New Year event AV", note: "Event page. Waiting for Jovin's OK." },
      { href: "/mockup/service-template-v3/", title: "Service page template", note: "The slots every service page fills, each one explained." },
      { href: "/mockup/wireframes/review/", title: "Design board", note: "Home, LED walls, stage, CNY and the template, desktop and phone side by side. Short link /board." },
    ],
  },
  {
    heading: "Design 1 (16 to 17 Nov)",
    intro: "Replaced by Design 2. Same content, earlier look.",
    rows: [
      { href: "/mockup/home-v2/", title: "Home", note: "Design 1." },
      { href: "/mockup/led-walls-v2/", title: "LED wall rental", note: "Design 1." },
      { href: "/mockup/stage-rental-v2/", title: "Stage rental", note: "Design 1." },
      { href: "/mockup/service-template-v2/", title: "Service page template", note: "Design 1." },
    ],
  },
  {
    heading: "Service page drafts (6 Nov)",
    intro: "First drafts of the copy, on the current site's look.",
    rows: [
      { href: "/mockup/led-walls/", title: "LED wall rental", note: "Rewrite of /services/led-walls." },
      { href: "/mockup/av-systems/", title: "AV rental", note: "Rewrite of /services/av-systems, the hub for all AV services." },
      { href: "/mockup/sound-system-rental/", title: "Sound system rental", note: "New page, from the AV Systems audio copy." },
      { href: "/mockup/projector-rental/", title: "Projector and screen rental", note: "New page, from the AV Systems projector copy." },
      { href: "/mockup/stage-rental/", title: "Stage rental", note: "New page." },
      { href: "/mockup/event-production/", title: "Event production", note: "New page, from their one-stop copy, deck and FAQs." },
      { href: "/mockup/event-av-planning/", title: "Event AV planning", note: "New page, from their Pre-Event AV Checklist post." },
    ],
  },
  {
    heading: "Event page drafts (9 Nov)",
    intro: "Six event pages on one event template. Only CNY has moved to Design 2 so far.",
    rows: [
      { href: "/mockup/events/cny-event-av/", title: "Chinese New Year event AV", note: "CNY dinners, lo hei, spring receptions." },
      { href: "/mockup/events/dinner-and-dance-av/", title: "Dinner and dance AV", note: "Company D&Ds and annual dinners." },
      { href: "/mockup/events/town-hall-sound-system/", title: "Town hall sound system rental", note: "Town halls and AGMs." },
      { href: "/mockup/events/school-sound-system-rental/", title: "Sound system rental for schools", note: "Speech days, concerts, graduations." },
      { href: "/mockup/events/conference-av-rental/", title: "Conference AV rental", note: "Plenary, panels and breakout rooms." },
      { href: "/mockup/events/roadshow-led-screen-rental/", title: "Roadshow LED screen rental", note: "Mall roadshows and pop-ups." },
    ],
  },
];

const total = sections.reduce((n, s) => n + s.rows.length, 0);

export default function MockupIndex() {
  return (
    <main className="min-h-screen bg-brand-black px-4 pb-32 pt-32 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-brand-silver/70">PixelPro review site</p>
        <h1 className="mt-4 font-display text-4xl text-brand-off-white md:text-6xl">All mockups</h1>
        <p className="mt-4 font-sans text-brand-off-white/70">
          {total} pages, newest design first. Each card opens the mockup; Live opens the page on pixelprostudios.sg.
        </p>
        {sections.map((s) => (
          <section key={s.heading} className="mt-16">
            <h2 className="font-display text-3xl text-brand-off-white md:text-4xl">{s.heading}</h2>
            <p className="mt-3 font-sans text-brand-off-white/70">{s.intro}</p>
            <ul className="mt-8 space-y-3">
              {s.rows.map((r) => (
                <li key={r.href} className="group relative flex items-center gap-5 rounded-2xl border border-white/10 bg-brand-charcoal/70 p-5 transition-colors hover:border-white/30 md:p-6">
                  <span className="min-w-0 flex-1">
                    {/* the title link covers the whole card; the Live link sits above it */}
                    <a href={r.href} className="block font-display text-xl text-brand-off-white after:absolute after:inset-0 after:rounded-2xl md:text-2xl">
                      {r.title}
                    </a>
                    <span className="mt-1 block font-sans text-sm text-brand-silver/75">{r.note}</span>
                    <span className="mt-1 block font-sans text-xs text-brand-silver/50">{r.href}</span>
                  </span>
                  {r.live && (
                    <a href={LIVE + r.live} target="_blank" rel="noopener" className="relative z-10 inline-flex shrink-0 items-center gap-1 rounded-full bg-green-500/15 px-3 py-1.5 font-sans text-xs font-semibold text-green-400 transition-colors hover:bg-green-500/25">
                      Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <ArrowRight className="h-5 w-5 shrink-0 text-brand-silver transition-transform group-hover:translate-x-1" />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
