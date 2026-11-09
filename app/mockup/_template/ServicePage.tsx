// MOCKUP by Rankr (6 Nov 2026). Shared service-page template (deepagent: clients/pixelpro/page-plan/page-templates.md §2).
// Local review only: do not commit or deploy. `_template` is a private folder, so Next.js doesn't route it.
import Link from "next/link";
import Image from "next/image";
import FaqSection from "@/components/FaqSection";
import { ArrowRight, Check, MessageCircle, ShieldCheck, Star } from "lucide-react";
import type { ReactNode } from "react";

type LinkT = { label: string; href: string };

export type ServiceContent = {
  waText: string;
  eyebrow: string;
  h1: string;
  intro: string;
  introRetained?: string; // their current one-liner, kept under ours
  seeWorkLabel: string;
  heroImages: string[];
  heroAlt: string;
  pains: { worry: string; fix: string; spec: string }[];
  reviewsFirst?: string[]; // reviewer names to show first (reviews about this service)
  story?: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    paragraphs: string[];
    listTitle?: string;
    list?: string[];
    after?: string[];
    image?: string;
    imageAlt?: string;
  };
  services?: { eyebrow: string; title: string; items: { title: string; subtitle: string; copy: string; href: string; img: string }[] };
  buyers: { who: string; events: string; copy: string; links: LinkT[] }[];
  sizing?: { eyebrow: string; title: string; intro: string; placeholder: string };
  priceFactors: [string, string, string][];
  comparison?: { eyebrow: string; title: string; body: string; link?: LinkT; cards: [string, string][] };
  jobs: { title: string; items: { img: string; alt: string; caption?: string; placeholder?: string }[] };
  typicalSetup?: { title: string; placeholder: string };
  includedTitle: string;
  included: string[];
  addOns: { label: string; copy: string; href: string }[];
  steps?: [string, string][];
  quote: { title: string; checklist: string[] };
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  related: LinkT[];
};

const trust = ["5.0 on Google (25 reviews)", "GeBIZ registered", "bizSAFE Level 3", "Resolved within 30 minutes, or an immediate discount"];

const defaultSteps: [string, string][] = [
  ["Send us your brief", "Date, venue, guest count and your programme. WhatsApp is fastest."],
  ["Site visit if needed", "We check the space, power and access for larger or unusual setups."],
  ["Quote and confirm", "A 50% deposit confirms your date."],
  ["Setup and testing", "We build, run through your slides and sound check everything before guests arrive."],
  ["Event and pack-down", "Our crew runs everything throughout, then packs it all away."],
];

// Real Google review excerpts (deepagent: clients/pixelpro/research/google-reviews-2026-11-04.md). Excerpts only, never reworded.
const allReviews = [
  { quote: "Reliable, trustworthy, prompt, great communication.", who: "Candy Mak", context: "Finale with stage, LED screen and AV" },
  { quote: "Seamless and stress-free… last-minute requests… calm efficiency.", who: "Gwendolyn Anne David", context: "Event organiser, sound" },
  { quote: "Significantly lower… than the other vendors.", who: "Tan Hee Pheng", context: "MOE" },
  { quote: "Proactive and helpful in dealing with all our queries, liaising with our vendor.", who: "Chloe Lim", context: "School event, sound" },
  { quote: "Engaged them on short notice.", who: "Ng Sherelle", context: "Sound system and crew" },
  { quote: "Went above and beyond to source.", who: "Jasmine Chye", context: "Company event, projectors" },
  { quote: "Very proactive… replied promptly.", who: "f eli", context: "Company event" },
  { quote: "Super flexible.", who: "Reshan Sivasamy", context: "Event organiser, sound" },
];

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-yellow-400/70 bg-yellow-400/10 p-4 font-sans text-sm text-yellow-200">
      <span className="mr-2 rounded bg-yellow-400 px-1.5 py-0.5 text-xs font-bold text-black">PLACEHOLDER</span>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-brand-silver/70">{children}</p>;
}

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </span>
  );
}

function Tick() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-blue-300">
      <Check className="h-3.5 w-3.5" />
    </span>
  );
}

function WhatsAppButton({ href, label = "WhatsApp us for a quote" }: { href: string; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-sans text-sm font-semibold text-black transition-opacity hover:opacity-90">
      <MessageCircle className="h-4 w-4" />
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Cards2({ items }: { items: [string, string][] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(([t, c]) => (
        <div key={t} className="rounded-2xl border border-white/10 bg-brand-charcoal/70 p-6">
          <h3 className="font-display text-xl text-brand-off-white">{t}</h3>
          <p className="mt-2 font-sans text-sm leading-relaxed text-brand-silver/80">{c}</p>
        </div>
      ))}
    </div>
  );
}

export default function ServicePage({ c }: { c: ServiceContent }) {
  const wa = "https://wa.me/6588605489?text=" + encodeURIComponent(c.waText);
  const first = c.reviewsFirst ?? [];
  const reviews = [...allReviews].sort((a, b) => (first.includes(b.who) ? 1 : 0) - (first.includes(a.who) ? 1 : 0));
  const steps = c.steps ?? defaultSteps;

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-black from-70% to-brand-silver/10 pb-32 pt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 1. Hero, with the first photo as a darkened backdrop */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image src={c.heroImages[0]} alt={c.heroAlt} fill priority sizes="100vw" className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/75 to-brand-black/90" />
        <header className="relative mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight text-brand-off-white md:text-7xl">{c.h1}</h1>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-lg font-light leading-relaxed text-brand-off-white/75 md:text-xl">{c.intro}</p>
          {c.introRetained && <p className="mx-auto mt-3 max-w-3xl font-sans text-base font-light leading-relaxed text-brand-off-white/60">{c.introRetained}</p>}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-sm text-brand-silver">
            {trust.map((t, i) => (
              <li key={t} className="flex items-center gap-1.5">
                {i === 0 ? <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> : <Check className="h-4 w-4 text-blue-300" />}
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton href={wa} />
            <a href="#jobs" className="inline-flex items-center gap-2 rounded-md border-2 border-brand-off-white px-6 py-2.5 font-sans text-sm font-semibold text-brand-off-white transition-colors hover:bg-brand-off-white hover:text-brand-black">
              {c.seeWorkLabel}
            </a>
          </div>
        </header>
        </div>

        {/* 3. Value prop, pain first */}
        <section className="pt-16 md:pt-24">
          <Eyebrow>Why organisers book us</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-brand-off-white md:text-5xl">Common event worries, and how we handle them</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {c.pains.map((p) => (
              <article key={p.worry} className="rounded-2xl border border-white/10 bg-brand-charcoal/70 p-6 md:p-8">
                <p className="font-display text-2xl leading-snug text-brand-off-white">{p.worry}</p>
                <p className="mt-4 flex items-start gap-3 font-sans leading-relaxed text-brand-silver/85">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#25D366]" />
                  {p.fix}
                </p>
                <p className="mt-5 font-sans text-xs uppercase tracking-wider text-brand-silver/50">{p.spec}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Credibility straight after the value prop */}
        <section className="pt-12 md:pt-16" aria-label="Google reviews">
          <style>{`
            @keyframes pp-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .pp-track { animation: pp-marquee 45s linear infinite; }
            .pp-marquee:hover .pp-track { animation-play-state: paused; }
            @media (prefers-reduced-motion: reduce) { .pp-track { animation: none; } }
          `}</style>
          <div className="flex items-center gap-3 font-sans text-brand-off-white">
            <Stars />
            <span className="text-sm text-brand-silver">5.0 from 25 Google reviews</span>
          </div>
          <div className="pp-marquee relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <ul className="pp-track flex w-max gap-4">
              {[...reviews, ...reviews].map((r, i) => (
                <li key={i} aria-hidden={i >= reviews.length} className="w-[280px] shrink-0 rounded-2xl border border-white/10 bg-brand-charcoal/70 p-5 md:w-[320px]">
                  <Stars />
                  <p className="mt-3 font-sans text-brand-off-white">&ldquo;{r.quote}&rdquo;</p>
                  <p className="mt-3 font-sans text-xs text-brand-silver/70">
                    {r.who} · {r.context} · Google review
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-blue-300/30 bg-brand-blue/10 p-6">
            <ShieldCheck className="h-7 w-7 shrink-0 text-blue-300" />
            <div>
              <h2 className="font-display text-xl text-brand-off-white md:text-2xl">Worried it&apos;ll fail mid-speech?</h2>
              <p className="mt-1.5 font-sans leading-relaxed text-brand-off-white/75">
                If a technical issue ever happens during your event, our team resolves it within thirty minutes or you receive an immediate discount.
              </p>
            </div>
          </div>
        </section>

        {/* 5b. Services overview (umbrella pages): PixelPro's own section headings and intros, linking to each service page */}
        {c.services && (
          <section className="pt-20 md:pt-28">
            <Eyebrow>{c.services.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">{c.services.title}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {c.services.items.map((s) => (
                <Link key={s.href} href={s.href} className="group overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal/70 transition-colors hover:border-white/30">
                  <div className="relative aspect-[16/9]">
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-2xl text-brand-off-white">{s.title}</h3>
                      <ArrowRight className="h-5 w-5 shrink-0 text-brand-silver transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="mt-1 font-sans text-sm font-medium text-brand-off-white/70">{s.subtitle}</p>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-brand-silver/80">{s.copy}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 5. Their story: PixelPro's existing copy for this service, kept */}
        {c.story && (
          <section className="grid gap-10 pt-20 md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <Eyebrow>{c.story.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight text-brand-off-white md:text-5xl">{c.story.title}</h2>
              {c.story.subtitle && <p className="mt-4 font-sans text-lg font-medium leading-relaxed text-brand-off-white/80">{c.story.subtitle}</p>}
              <div className="mt-6 space-y-5 font-sans leading-relaxed text-brand-off-white/70">
                {c.story.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {c.story.image && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
                  <Image src={c.story.image} alt={c.story.imageAlt ?? ""} fill className="object-cover" />
                </div>
              )}
              {c.story.list && (
                <div className="rounded-3xl border border-white/10 bg-brand-charcoal/70 p-7">
                  {c.story.listTitle && <h3 className="font-display text-2xl text-brand-off-white">{c.story.listTitle}</h3>}
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {c.story.list.map((i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-brand-silver/85">
                        <Tick />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {c.story.after && (
              <div className="space-y-5 font-sans leading-relaxed text-brand-off-white/70 lg:col-span-2">
                {c.story.after.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 6. Who we set up for */}
        <section className="pt-20 md:pt-28">
          <Eyebrow>Who we set up for</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">Built around your kind of event</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {c.buyers.map((b) => (
              <article key={b.who} className="rounded-2xl border border-white/10 bg-brand-charcoal/70 p-6 md:p-7">
                <h3 className="font-display text-2xl text-brand-off-white">{b.who}</h3>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-brand-silver/60">{b.events}</p>
                <p className="mt-4 font-sans leading-relaxed text-brand-silver/85">{b.copy}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {b.links.map((l) => (
                    <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-blue-300 hover:text-blue-200">
                      {l.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 7. Sizing */}
        {c.sizing && (
          <section className="pt-20 md:pt-28">
            <Eyebrow>{c.sizing.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">{c.sizing.title}</h2>
            <p className="mt-4 max-w-2xl font-sans text-brand-off-white/70">{c.sizing.intro}</p>
            <div className="mt-8">
              <Placeholder>{c.sizing.placeholder}</Placeholder>
            </div>
          </section>
        )}

        {/* 8. What affects the price (table; stacks on phones) */}
        <section id="pricing" className="scroll-mt-24 pt-20 md:pt-28">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">What affects the price</h2>
          <p className="mt-4 max-w-2xl font-sans text-brand-off-white/70">Every event is different, so we quote per event. These are the things that move the price:</p>
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
          <p className="mt-6 font-sans text-sm text-brand-silver/80">Transparent, competitive rates. Send us your brief and we&apos;ll reply with a setup and a quote.</p>
        </section>

        {/* 9. Comparison */}
        {c.comparison && (
          <section className="grid gap-10 pt-20 md:pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <div>
              <Eyebrow>{c.comparison.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight text-brand-off-white md:text-5xl">{c.comparison.title}</h2>
              <p className="mt-6 font-sans leading-relaxed text-brand-off-white/70">{c.comparison.body}</p>
              {c.comparison.link && (
                <Link href={c.comparison.link.href} className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-blue-300 hover:text-blue-200">
                  {c.comparison.link.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
            <Cards2 items={c.comparison.cards} />
          </section>
        )}

        {/* 10. Real jobs with captions */}
        <section id="jobs" className="scroll-mt-32 pt-20 md:pt-28">
          <Eyebrow>Recent work</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">{c.jobs.title}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {c.jobs.items.map((j) => (
              <figure key={j.img} className="overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal">
                <div className="relative aspect-[4/3]">
                  <Image src={j.img} alt={j.alt} fill className="object-cover" />
                </div>
                <figcaption className="p-4 font-sans text-sm text-brand-off-white/80">
                  {j.caption ?? <Placeholder>{j.placeholder}</Placeholder>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 11. A typical setup */}
        {c.typicalSetup && (
          <section className="mt-20 rounded-3xl border border-white/10 bg-brand-charcoal/60 p-7 md:mt-28 md:p-10">
            <Eyebrow>A typical setup</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-brand-off-white md:text-4xl">{c.typicalSetup.title}</h2>
            <div className="mt-6">
              <Placeholder>{c.typicalSetup.placeholder}</Placeholder>
            </div>
          </section>
        )}

        {/* 12. Included + add-ons */}
        <section className="grid gap-10 pt-20 md:pt-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Included</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">{c.includedTitle}</h2>
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
            <Eyebrow>Add to the same booking</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">One team for the whole event</h2>
            <div className="mt-8 space-y-4">
              {c.addOns.map((a) => (
                <Link key={a.label} href={a.href} className="group block rounded-2xl border border-white/10 bg-brand-charcoal/70 p-6 transition-colors hover:border-white/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-brand-off-white">{a.label}</h3>
                    <ArrowRight className="h-4 w-4 text-brand-silver transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 font-sans text-sm text-brand-silver/80">{a.copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 13. How it works */}
        <section className="pt-20 md:pt-28">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-off-white md:text-5xl">From WhatsApp to show day</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {steps.map(([t, d], i) => (
              <li key={t} className="rounded-2xl border border-white/10 bg-brand-charcoal/70 p-6">
                <span className="font-display text-3xl text-blue-300">{i + 1}</span>
                <h3 className="mt-3 font-display text-lg text-brand-off-white">{t}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-brand-silver/75">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 14. Quote block */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-brand-charcoal/60 px-6 py-12 md:mt-28 md:px-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl text-brand-off-white md:text-5xl">{c.quote.title}</h2>
              <p className="mt-4 font-sans text-brand-off-white/70">Send us these and we&apos;ll reply with a setup and a quote. Urgent? WhatsApp works after office hours too.</p>
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

        {/* 15. FAQ */}
        <FaqSection title={c.faqTitle} faqs={c.faqs} />

        {/* 16. Related */}
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

      {/* Floating WhatsApp */}
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp PixelPro" className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-lg md:bottom-8">
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
