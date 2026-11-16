// MOCKUP by Rankr (16 Nov 2026). Design board: each v2 page on a desktop screen and a phone screen, side by side.
import type { Metadata } from "next";
import Board from "./Board";

export const metadata: Metadata = {
  title: "Design board · v2 mockups",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Board />;
}
