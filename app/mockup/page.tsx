// MOCKUP index by Rankr (6 Nov 2026). Local review only: do not commit or deploy.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mockups | PixelPro Studios",
  robots: { index: false, follow: false },
};

const pages = [
  { href: "/mockup/led-walls", title: "LED wall rental", note: "Rewrite of /services/led-walls. Their wording kept, new blocks added." },
  { href: "/mockup/av-systems", title: "AV rental", note: "Rewrite of /services/av-systems. Hub for all AV services; their lighting section kept." },
  { href: "/mockup/sound-system-rental", title: "Sound system rental", note: "New page. Their audio copy from the AV Systems page." },
  { href: "/mockup/projector-rental", title: "Projector and screen rental", note: "New page. Their projector copy from the AV Systems page." },
  { href: "/mockup/stage-rental", title: "Stage rental", note: "New page. Written from Lucas's facts (no existing copy). Read this one closely." },
  { href: "/mockup/event-production", title: "Event production", note: "New page. Their one-stop copy, deck and services FAQs." },
  { href: "/mockup/event-av-planning", title: "Event AV planning", note: "New page. Built from their Pre-Event AV Checklist post." },
];

// Event pages (9 Nov 2026), in priority order: CNY season first, then the high-leverage school and conference pages.
const events = [
  { href: "/mockup/events/cny-event-av", title: "Chinese New Year event AV", note: "CNY dinners, lohei, spring receptions. Must be live by early December (CNY 2027 is 6 Feb)." },
  { href: "/mockup/events/dinner-and-dance-av", title: "Dinner and dance AV", note: "Company D&Ds and annual dinners. Written in buyers' words (\"arrowed\", pax, lucky draw)." },
  { href: "/mockup/events/town-hall-sound-system", title: "Town hall sound system rental", note: "Town halls and AGMs: headset mics, Q&A mics, compact livestream." },
  { href: "/mockup/events/school-sound-system-rental", title: "Sound system rental for schools", note: "Speech days, concerts, CCA shows, graduations. GeBIZ, works with the hall's vendor." },
  { href: "/mockup/events/conference-av-rental", title: "Conference AV rental", note: "Plenary, panels and breakout rooms; event agencies and dry hire." },
  { href: "/mockup/events/roadshow-led-screen-rental", title: "Roadshow LED screen rental", note: "Mall roadshows, brand and beauty pop-ups, activations." },
];

export default function MockupIndex() {
  return (
    <main className="min-h-screen bg-brand-black px-4 pb-32 pt-32 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-brand-silver/70">Rankr mockups · not live</p>
        <h1 className="mt-4 font-display text-4xl text-brand-off-white md:text-6xl">Service pages</h1>
        <p className="mt-4 font-sans text-brand-off-white/70">
          {pages.length} pages on one shared template. Yellow boxes are waiting on PixelPro&apos;s job details.
        </p>
        <ul className="mt-10 space-y-3">
          {pages.map((p, i) => (
            <li key={p.href}>
              <Link href={p.href} className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-brand-charcoal/70 p-5 transition-colors hover:border-white/30 md:p-6">
                <span className="font-display text-2xl text-blue-300">{i + 1}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl text-brand-off-white md:text-2xl">{p.title}</span>
                  <span className="mt-1 block font-sans text-sm text-brand-silver/75">{p.note}</span>
                  <span className="mt-1 block font-sans text-xs text-brand-silver/50">{p.href}</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-brand-silver transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="mt-16 font-display text-3xl text-brand-off-white md:text-4xl">Event pages</h2>
        <p className="mt-3 font-sans text-brand-off-white/70">
          {events.length} pages on one shared event template. Live routes will be /events/&lt;slug&gt;/.
        </p>
        <ul className="mt-8 space-y-3">
          {events.map((p, i) => (
            <li key={p.href}>
              <Link href={p.href} className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-brand-charcoal/70 p-5 transition-colors hover:border-white/30 md:p-6">
                <span className="font-display text-2xl text-blue-300">{i + 1}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl text-brand-off-white md:text-2xl">{p.title}</span>
                  <span className="mt-1 block font-sans text-sm text-brand-silver/75">{p.note}</span>
                  <span className="mt-1 block font-sans text-xs text-brand-silver/50">{p.href}</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-brand-silver transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
