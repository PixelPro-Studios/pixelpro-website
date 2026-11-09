// MOCKUP by Rankr (9 Nov 2026). Shared event-page template (deepagent: clients/pixelpro/page-plan/page-templates.md §1,
// adapted to the approved service-page look). One buyer, one event type per page; the 5 core service cards are shared.
// Review only: noindex. `_template` is a private folder, so Next.js doesn't route it.
import Link from "next/link";
import Image from "next/image";
import FaqSection from "@/components/FaqSection";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Eyebrow, Placeholder, ReviewsAndPromise, Tick, WhatsAppButton, trust, defaultSteps } from "./ServicePage";
import { Star } from "lucide-react";

type LinkT = { label: string; href: string };

export type EventContent = {
  waText: string;
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  painsTitle: string; // "Where [X] falls short" or "Why [persona]s [miss the outcome]"
  pains: { worry: string; fix: string }[]; // 3 (template §1 block 4)
  reviewsFirst?: string[];
  pitch: { title: string; paragraphs: string[] }; // ties the core services to this event
  moments: { title: string; intro: string; items: [string, string][] }; // the run of show: moment → what we set up
  typicalSetup: { title: string; placeholder: string }; // block 5b, from the bible job table only
  coreTitle: string; // "Built to…" heading
  timeline?: { title: string; intro: string; items: [string, string][] }; // when to book
  priceFactors: [string, string, string][];
  photos: { title: string; items: { img: string; alt: string; caption?: string; placeholder?: string }[] };
  included: string[];
  quote: { title: string; checklist: string[] };
  faqTitle: string;
  faqs: { question: string; answer: string }[]; // 6; #1 = "How is PixelPro different from X?"
  related: LinkT[];
};

// The 5 core service cards (BUILD-BRIEF: LED walls, sound, stage, projectors, event production). Shared on every event page.
const core = [
  { label: "LED walls", title: "A bright screen everyone can read", copy: "Slides, videos, a live camera on the speaker and your own graphics, sharp even in a bright room.", bullets: ["Indoor and outdoor walls", "Spare panels on hand", "An operator runs playback"], href: "/mockup/led-walls", img: "/services-hero/services_led-walls.webp" },
  { label: "Sound", title: "Every word heard, front to back", copy: "Speakers sized for your room and wireless mics for every speaker, run by our sound engineer.", bullets: ["Headset and handheld mics", "Sound check on setup day", "Backup mics on hand"], href: "/mockup/sound-system-rental", img: "/services-hero/services_sound-system-rental.webp" },
  { label: "Stage", title: "Speakers and performers seen", copy: "Modular stage platforms with skirting and steps, built and packed away by our crew.", bullets: ["Up to 32 m², bigger through partners", "60 to 100 cm high", "Black skirting standard"], href: "/mockup/stage-rental", img: "/services-hero/services_stage-rental.webp" },
  { label: "Projectors", title: "A screen for smaller rooms and budgets", copy: "Projectors and screens for seminars, breakout rooms and screenings, set up and tested.", bullets: ["Screens up to 250\"", "Laser projectors for bigger rooms", "Set up and aligned for you"], href: "/mockup/projector-rental", img: "/services-hero/services_projector-rental.webp" },
  { label: "Event production", title: "One contact for the whole event", copy: "Sound, screen, stage, lighting, photo and video from one team, plus emcees and more through our partners.", bullets: ["One quote", "One crew on the day", "Photo and video too"], href: "/mockup/event-production", img: "/services-hero/services_event-production.webp" },
];

export default function EventPage({ c }: { c: EventContent }) {
  const wa = "https://wa.me/6588605489?text=" + encodeURIComponent(c.waText);

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-black from-70% to-brand-silver/10 pb-32 pt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 1–3. Hero: keyword H1, keyword-first intro, trust line, CTA */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image src={c.heroImage} alt={c.heroAlt} fill priority sizes="100vw" className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/75 to-brand-black/90" />
          <header className="relative mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-tight text-brand-off-white md:text-7xl">{c.h1}</h1>
            <p className="mx-auto mt-6 max-w-3xl font-sans text-lg font-light leading-relaxed text-brand-off-white/75 md:text-xl">{c.intro}</p>
            {/* CTA before the trust line, so it sits in the first screen on phones */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <WhatsAppButton href={wa} />
              <a href="#programme" className="inline-flex items-center gap-2 rounded-md border-2 border-brand-off-white px-6 py-2.5 font-sans text-sm font-semibold text-brand-off-white transition-colors hover:bg-brand-off-white hover:text-brand-black">
                What we set up
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-sm text-brand-silver">
              {trust.map((t, i) => (
                <li key={t} className="flex items-center gap-1.5">
                  {i === 0 ? <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> : <Check className="h-4 w-4 text-blue-300" />}
                  {t}
                </li>
              ))}
            </ul>
          </header>
        </div>

        {/* 4. Pain: where the usual way falls short */}
        <section className="pt-16 md:pt-24">
          <Eyebrow>The usual problems</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-brand-off-white md:text-5xl">{c.painsTitle}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {c.pains.map((p) => (
              <article key={p.worry} className="rounded-2xl border border-white/10 bg-brand-charcoal/70 p-6 md:p-7">
                <h3 className="font-display text-2xl leading-snug text-brand-off-white">{p.worry}</h3>
                <p className="mt-4 flex items-start gap-3 font-sans leading-relaxed text-brand-silver/85">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#25D366]" />
                  {p.fix}
                </p>
              </article>
            ))}
          </div>
        </section>

        <ReviewsAndPromise first={c.reviewsFirst} />

        {/* 5. Pitch: how the core services fit this event */}
        <section className="pt-20 md:pt-28">
          <Eyebrow>How we help</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-brand-off-white md:text-5xl">{c.pitch.title}</h2>
          <div className="mt-6 max-w-3xl space-y-5 font-sans leading-relaxed text-brand-off-white/75">
            {c.pitch.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        {/* 5a. The programme, moment by moment */}
        <section id="programme" className="scroll-mt-32 pt-20 md:pt-28">
          <Eyebrow>Your programme</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">{c.moments.title}</h2>
          <p className="mt-4 max-w-2xl font-sans text-brand-off-white/70">{c.moments.intro}</p>
          <ol className="mt-10 space-y-3">
            {c.moments.items.map(([moment, setup], i) => (
              <li key={moment} className="grid gap-2 rounded-2xl border border-white/10 bg-brand-charcoal/70 p-5 md:grid-cols-[3rem_1fr_1.6fr] md:items-baseline md:gap-6 md:p-6">
                <span className="font-display text-2xl text-blue-300">{i + 1}</span>
                <h3 className="font-display text-xl text-brand-off-white">{moment}</h3>
                <p className="font-sans text-sm leading-relaxed text-brand-silver/85">{setup}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 5b. A typical setup (bible job table only, never invented) */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-brand-charcoal/60 p-7 md:mt-28 md:p-10">
          <Eyebrow>A typical setup</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-brand-off-white md:text-4xl">{c.typicalSetup.title}</h2>
          <div className="mt-6">
            <Placeholder>{c.typicalSetup.placeholder}</Placeholder>
          </div>
        </section>

        {/* 6. Built to… (shared core service cards) */}
        <section className="pt-20 md:pt-28">
          <Eyebrow>One team</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-brand-off-white md:text-5xl">{c.coreTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {core.map((s) => (
              <Link key={s.href} href={s.href} className="group overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal/70 transition-colors hover:border-white/30">
                <div className="relative aspect-[16/9]">
                  <Image src={s.img} alt={s.label} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">{s.label}</p>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl text-brand-off-white">{s.title}</h3>
                    <ArrowRight className="h-4 w-4 shrink-0 text-brand-silver transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-brand-silver/80">{s.copy}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 font-sans text-xs text-brand-silver/75">
                        <Check className="h-3.5 w-3.5 text-blue-300" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* When to book */}
        {c.timeline && (
          <section className="pt-20 md:pt-28">
            <Eyebrow>When to book</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">{c.timeline.title}</h2>
            <p className="mt-4 max-w-2xl font-sans text-brand-off-white/70">{c.timeline.intro}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {c.timeline.items.map(([when, what]) => (
                <div key={when} className="rounded-2xl border border-white/10 bg-brand-charcoal/70 p-6">
                  <h3 className="font-display text-xl text-brand-off-white">{when}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-brand-silver/80">{what}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What affects the price */}
        <section className="pt-20 md:pt-28">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">What affects the price</h2>
          <p className="mt-4 max-w-2xl font-sans text-brand-off-white/70">We quote per event. These are the things that move the price:</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full border-collapse font-sans text-sm">
              <thead className="hidden bg-brand-charcoal sm:table-header-group">
                <tr className="text-left text-xs uppercase tracking-wider text-brand-silver/60">
                  <th className="px-6 py-4 font-semibold">What changes the price</th>
                  <th className="px-6 py-4 font-semibold">Costs less when</th>
                  <th className="px-6 py-4 font-semibold">Costs more when</th>
                </tr>
              </thead>
              <tbody>
                {c.priceFactors.map(([factor, less, more]) => (
                  <tr key={factor} className="block border-t border-white/10 bg-brand-charcoal/40 px-5 py-4 first:border-t-0 sm:table-row sm:p-0 sm:first:border-t">
                    <th scope="row" className="block text-left font-display text-lg font-normal text-brand-off-white sm:table-cell sm:px-6 sm:py-4 sm:align-top">{factor}</th>
                    <td className="mt-2 block text-brand-silver/85 sm:mt-0 sm:table-cell sm:px-6 sm:py-4 sm:align-top">
                      <span className="mr-1 text-xs uppercase tracking-wider text-[#25D366] sm:hidden">Less:</span>
                      {less}
                    </td>
                    <td className="mt-1 block text-brand-silver/85 sm:mt-0 sm:table-cell sm:px-6 sm:py-4 sm:align-top">
                      <span className="mr-1 text-xs uppercase tracking-wider text-yellow-300 sm:hidden">More:</span>
                      {more}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-sans text-sm text-brand-silver/80">Transparent, competitive rates. No minimum booking: small events are welcome.</p>
        </section>

        {/* Photos of this event type */}
        <section id="photos" className="scroll-mt-32 pt-20 md:pt-28">
          <Eyebrow>Recent work</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">{c.photos.title}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {c.photos.items.map((j) => (
              <figure key={j.img} className="overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal">
                <div className="relative aspect-[4/3]">
                  <Image src={j.img} alt={j.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="p-4 font-sans text-sm text-brand-off-white/80">{j.caption ?? <Placeholder>{j.placeholder}</Placeholder>}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Included + how it works */}
        <section className="grid gap-10 pt-20 md:pt-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Included</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">You host. We run the tech.</h2>
            <ul className="mt-8 space-y-4">
              {c.included.map((i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-brand-silver/85">
                  <Tick />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">From WhatsApp to show day</h2>
            <ol className="mt-8 space-y-3">
              {defaultSteps.map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-2xl border border-white/10 bg-brand-charcoal/70 p-5">
                  <span className="font-display text-2xl text-blue-300">{i + 1}</span>
                  <span>
                    <span className="block font-display text-lg text-brand-off-white">{t}</span>
                    <span className="mt-1 block font-sans text-sm leading-relaxed text-brand-silver/75">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Quote block */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-brand-charcoal/60 px-6 py-12 md:mt-28 md:px-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl text-brand-off-white md:text-5xl">{c.quote.title}</h2>
              <p className="mt-4 font-sans text-brand-off-white/70">Send us these and we&apos;ll reply with a setup and a quote, usually within 1 day to 1 week depending on the event.</p>
              <div className="mt-8">
                <WhatsAppButton href={wa} label="WhatsApp +65 8860 5489" />
              </div>
              <p className="mt-5 font-sans text-sm text-brand-silver/80">
                Need a formal quotation or documents? Email{" "}
                <a href="mailto:hello@pixelprostudios.sg" className="font-semibold text-blue-300 hover:text-blue-200">hello@pixelprostudios.sg</a>
              </p>
              <p className="mt-2 font-sans text-xs text-brand-silver/60">Office Mon–Sun 9am–10pm · WhatsApp for urgent requests after hours</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {c.quote.checklist.map((i) => (
                <li key={i} className="flex items-start gap-2 font-sans text-sm text-brand-silver/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FaqSection title={c.faqTitle} faqs={c.faqs} />

        <section className="mx-auto mt-20 max-w-4xl">
          <h2 className="text-center font-display text-2xl text-brand-off-white">Related</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {c.related.map((r) => (
              <Link key={r.href} href={r.href} className="rounded-full border border-white/15 px-4 py-2 font-sans text-sm text-brand-silver hover:border-white/40 hover:text-brand-off-white">
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp PixelPro" className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-lg md:bottom-8">
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
