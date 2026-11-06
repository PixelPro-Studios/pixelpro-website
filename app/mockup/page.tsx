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
      </div>
    </main>
  );
}
