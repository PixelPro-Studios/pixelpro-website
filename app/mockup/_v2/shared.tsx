"use client";
// MOCKUP by Rankr (16 Nov 2026). Shared parts for the v2 design (LED page + home page).
// `_v2` is a private folder, so Next.js doesn't route it.
import Image from "next/image";
import { useRef, useState } from "react";
import "./v2.css";

export const waLink = (text: string) => "https://wa.me/6588605489?text=" + encodeURIComponent(text);

// Real Google review excerpts, same list as ../_template/ServicePage.tsx (never reworded)
export const allReviews = [
  { quote: "Reliable, trustworthy, prompt, great communication.", who: "Candy Mak", context: "Finale with stage, LED screen and AV" },
  { quote: "Seamless and stress-free… last-minute requests… calm efficiency.", who: "Gwendolyn Anne David", context: "Event organiser, sound" },
  { quote: "Significantly lower… than the other vendors.", who: "Tan Hee Pheng", context: "MOE" },
  { quote: "Proactive and helpful in dealing with all our queries, liaising with our vendor.", who: "Chloe Lim", context: "School event, sound" },
  { quote: "Engaged them on short notice.", who: "Ng Sherelle", context: "Sound system and crew" },
  { quote: "Went above and beyond to source.", who: "Jasmine Chye", context: "Company event, projectors" },
  { quote: "Very proactive… replied promptly.", who: "f eli", context: "Company event" },
  { quote: "Super flexible.", who: "Reshan Sivasamy", context: "Event organiser, sound" },
];

export type Project = { img: string; alt: string; tag?: string; spec: string[]; title: string; line: string };

// LED jobs from Jovin's write-ups (clients anonymous until PixelPro confirms names)
export const LED_PROJECTS: Project[] = [
  {
    img: "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp",
    alt: "6 m × 2.5 m LED wall at a university innovation showcase, set up by PixelPro",
    tag: "Featured project",
    spec: ["6 m × 2.5 m LED wall", "Sound and crew"],
    title: "A university innovation showcase",
    line: "The LED display carried pitch presentations, countdown timers and sponsor visuals, with our technical team on site throughout the event.",
  },
  {
    img: "/portfolio-jobs/conference-av-rental_led-wall-hotel-ballroom-forum.webp",
    alt: "3.5 m × 2.5 m LED wall in a hotel ballroom for a three-day international forum",
    spec: ["3.5 m × 2.5 m LED wall", "50-inch confidence monitor"],
    title: "A three-day international forum",
    line: "Presentations and visual content for about 100 delegates in a hotel ballroom.",
  },
  {
    img: "/portfolio-jobs/led-wall-rental_5-5x3m-led-wall-mall-atrium.webp",
    alt: "5.5 m × 3 m LED display above a 7 m × 4 m stage in a mall atrium, set up by PixelPro",
    spec: ["5.5 m × 3 m LED display", "7 m × 4 m stage"],
    title: "An overnight build in a mall atrium",
    line: "Built within the venue's access window, so everything was ready before the mall opened.",
  },
  {
    img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp",
    alt: "Four upright PixelPro LED panels on a school hall stage for a prize day",
    spec: ["Four 1 m × 2 m LED panels"],
    title: "A school prize-day ceremony",
    line: "Upright panels framed the stage and carried the programme visuals for students, parents and guests.",
  },
];

export function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.3Z" />
    </svg>
  );
}

export function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="v2-stars" aria-label="5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" width={size} height={size} aria-hidden>
          <path fill="currentColor" d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

/* Apple-style carousel: cards side by side, ‹ › arrows, swipe on phones */
export function WorkCarousel({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState({ start: true, end: false });
  const update = () => {
    const el = ref.current;
    if (!el) return;
    setAt({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  };
  const move = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".v2-car-card");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 400) + 20), behavior: "smooth" });
  };
  return (
    <div className="v2-car">
      <div ref={ref} className="v2-car-track" onScroll={update}>
        {projects.map((p) => (
          <article key={p.title} className="v2-car-card">
            <div className="v2-car-media">
              <Image src={p.img} alt={p.alt} fill sizes="(min-width: 1024px) 460px, 85vw" className="v2-cover" />
            </div>
            <div className="v2-car-text">
              <div className="v2-chips">
                {p.tag && <span className="v2-chip v2-chip-light">{p.tag}</span>}
                {p.spec.map((s) => (
                  <span key={s} className="v2-chip">
                    {s}
                  </span>
                ))}
              </div>
              <h3 className="v2-card-title">{p.title}</h3>
              <p className="v2-card-line">{p.line}</p>
              <span className="v2-soon">View project · coming soon</span>
            </div>
          </article>
        ))}
      </div>
      <div className="v2-wrap v2-car-nav">
        <button type="button" aria-label="Previous project" disabled={at.start} onClick={() => move(-1)}>
          ‹
        </button>
        <button type="button" aria-label="Next project" disabled={at.end} onClick={() => move(1)}>
          ›
        </button>
      </div>
    </div>
  );
}

/* Review row that slides by itself (Jovin likes this one); pauses under the mouse */
export function ReviewsMarquee({ first = "Candy Mak" }: { first?: string }) {
  const reviews = [...allReviews].sort((a, b) => (b.who === first ? 1 : 0) - (a.who === first ? 1 : 0));
  return (
    <div className="v2-marquee">
      <ul className="v2-track">
        {[...reviews, ...reviews].map((r, i) => (
          <li key={i} aria-hidden={i >= reviews.length} className="v2-review">
            <Stars />
            <p>&ldquo;{r.quote}&rdquo;</p>
            <span>
              {r.who} · {r.context}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RatingBlock() {
  return (
    <div className="v2-rating">
      <span className="v2-rating-num">5.0</span>
      <div>
        <Stars size={16} />
        <span>Rated on Google</span>
      </div>
    </div>
  );
}
