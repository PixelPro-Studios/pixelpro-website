"use client";

import { useEffect } from "react";

const DECK_URL =
  "https://drive.google.com/file/d/1Dam6cbg6rP7jy5qcaxsGO3-3J579LfA2/view?usp=share_link";

export default function ServicesDeckRedirect() {
  useEffect(() => {
    window.location.replace(DECK_URL);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-black text-brand-off-white px-4">
      <div className="text-center font-sans">
        <p className="text-lg md:text-xl mb-2">Opening our services deck…</p>
        <p className="text-brand-off-white/70">
          If you are not redirected,{" "}
          <a href={DECK_URL} className="underline text-brand-silver hover:text-brand-platinum">
            click here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
