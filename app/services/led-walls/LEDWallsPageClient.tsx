"use client";

import BottomNavbar from "@/components/BottomNavbar";
import FaqSection from "@/components/FaqSection";
import ImageCarousel from "@/components/ImageCarousel";
import { ledWallsFaqs } from "@/lib/faqs";
import { motion } from "framer-motion";
import { ArrowRight, Check, Eye, MonitorUp, RadioTower, Sun } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";

const specifications = [
  { value: "P2.5", label: "Fine-pitch indoor panels" },
  { value: "P3.9", label: "Versatile event panels" },
  { value: "3840Hz", label: "Camera-ready refresh rate" },
  { value: "4000+", label: "Nits for outdoor visibility" },
];

const capabilities = [
  "Indoor and outdoor LED panels",
  "Modular screens sized to your venue",
  "Full-stage backdrops and side screens",
  "Ground-supported or rigged configurations",
  "Live camera feeds and presentation playback",
  "Video processors and signal management",
  "Power distribution, calibration, and testing",
  "On-site video operators and technical crew",
];

const eventTypes = [
  {
    icon: MonitorUp,
    title: "Corporate & conferences",
    copy: "Clear presentations, live camera feeds, speaker content, and branded backdrops that remain readable across the room.",
  },
  {
    icon: RadioTower,
    title: "Concerts & live shows",
    copy: "Large-format visuals, playback, and IMAG support designed to amplify performances and keep every audience member connected.",
  },
  {
    icon: Sun,
    title: "Outdoor & public events",
    copy: "High-brightness screens for festivals, community programmes, screenings, and activations in challenging ambient light.",
  },
];

export default function LEDWallsPageClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-black from-70% to-brand-silver/10 pb-32 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 md:px-8"
      >
        <header className="mx-auto max-w-4xl py-10 text-center md:py-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-brand-silver/70">
            High-impact event visuals
          </p>
          <h1 className="mt-4 text-5xl font-display leading-tight text-brand-off-white md:text-7xl">
            LED Wall Rental
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-lg font-light leading-relaxed text-brand-off-white/75 md:text-xl">
            Bright, seamless LED displays engineered for conferences, concerts,
            exhibitions, roadshows, launches, and large-scale events in Singapore.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              onClick={() =>
                posthog.capture("get_a_quote_clicked", {
                  service_page: "led-walls",
                })
              }
              className="group inline-flex items-center gap-2 rounded-md bg-brand-off-white px-6 py-3 font-sans text-sm font-semibold text-brand-black transition-colors hover:bg-brand-platinum"
            >
              Get an LED Wall Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio#stage"
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand-off-white px-6 py-2.5 font-sans text-sm font-semibold text-brand-off-white transition-colors hover:bg-brand-off-white hover:text-brand-black"
            >
              <Eye className="h-4 w-4" />
              See Our Work
            </Link>
          </div>
        </header>

        <section aria-label="LED wall gallery" className="h-[420px] md:h-[620px]">
          <ImageCarousel
            images={[
              "/services-av-led/pixelpro-studios-led-wall-screen-rental-singapore.jpg",
              "/services-av-led/pixelpro-studios-led-wall-services-singapore.jpg",
            ]}
            alt="PixelPro Studios LED wall installations at live events"
          />
        </section>

        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4 mt-8 md:mt-12">
          {specifications.map((spec) => (
            <div key={spec.value} className="bg-brand-charcoal px-4 py-7 text-center md:px-6 md:py-9">
              <p className="font-display text-3xl text-brand-off-white md:text-4xl">
                {spec.value}
              </p>
              <p className="mt-2 font-sans text-xs leading-relaxed text-brand-silver/65 md:text-sm">
                {spec.label}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 md:py-32">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-brand-silver/70">
              Built around your production
            </p>
            <h2 className="mt-4 text-4xl font-display leading-tight text-brand-off-white md:text-6xl">
              Your content, impossible to miss.
            </h2>
            <div className="mt-6 space-y-5 font-sans text-base leading-relaxed text-brand-off-white/70 md:text-lg">
              <p>
                Every installation is planned around viewing distance, venue
                lighting, content format, audience size, and programme flow. We
                configure the screen so presentations stay crisp, videos remain
                smooth, and branding lands with impact.
              </p>
              <p>
                Our team handles structure planning, rigging, cable management,
                power, calibration, testing, playback, and live operation—giving
                organisers one accountable technical partner from setup to strike.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-brand-charcoal/70 p-7 md:p-10">
            <h3 className="text-2xl font-display text-brand-off-white md:text-3xl">
              Complete LED wall support
            </h3>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-brand-silver/80 md:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-blue-300">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-brand-silver/70">
              Designed for the room
            </p>
            <h2 className="mt-4 text-4xl font-display text-brand-off-white md:text-6xl">
              One screen. Every kind of show.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {eventTypes.map((event) => (
              <article key={event.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-charcoal to-brand-black p-7 md:p-9">
                <event.icon className="h-7 w-7 text-brand-silver" aria-hidden="true" />
                <h3 className="mt-8 text-2xl font-display text-brand-off-white">
                  {event.title}
                </h3>
                <p className="mt-4 font-sans leading-relaxed text-brand-off-white/65">
                  {event.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="rounded-3xl border border-white/10 bg-brand-charcoal/60 px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="text-4xl font-display text-brand-off-white md:text-5xl">
              Tell us what your audience needs to see.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-brand-off-white/70 md:text-lg">
              Share your venue, date, screen size, and content sources. We&apos;ll
              recommend a reliable configuration and support plan for your event.
            </p>
            <Link
              href="/contact"
              onClick={() =>
                posthog.capture("get_a_quote_clicked", {
                  service_page: "led-walls",
                  source: "led_wall_cta",
                })
              }
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-brand-off-white px-7 py-3.5 font-sans text-sm font-semibold text-brand-black transition-colors hover:bg-brand-platinum"
            >
              Plan Your LED Wall
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <FaqSection faqs={ledWallsFaqs} />
      </motion.div>

      <BottomNavbar />
    </main>
  );
}
