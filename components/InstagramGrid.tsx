import { Instagram } from "lucide-react";

const INSTAGRAM_PROFILE = "https://www.instagram.com/pixelprostudios.sg/";

export default function InstagramGrid() {
  return (
    <div className="w-full pt-6 pb-10 md:pt-10 md:pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-silver/70">
          From the field
        </p>
        <h3 className="mt-3 text-3xl font-display text-brand-off-white md:text-5xl">
          See what we&apos;ve been creating.
        </h3>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-brand-off-white/65 md:text-lg">
          Recent productions, live setups and moments from our crew.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-[660px] overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal shadow-[0_20px_70px_rgba(0,0,0,0.45)] md:mt-10">
        <iframe
          src="https://www.instagram.com/pixelprostudios.sg/embed/"
          title="Latest Instagram posts from PixelPro Studios"
          className="block h-[620px] w-full bg-white sm:h-[690px]"
          loading="lazy"
          allow="encrypted-media"
        />
      </div>

      <div className="mt-7 flex justify-center">
        <a
          href={INSTAGRAM_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-sans text-sm font-semibold text-brand-off-white/80 transition-colors hover:border-brand-silver/60 hover:text-brand-off-white"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          Follow @pixelprostudios.sg
        </a>
      </div>
    </div>
  );
}
