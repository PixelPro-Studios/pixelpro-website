import type { Metadata } from "next";
import DeckPageClient from "./DeckPageClient";

export const metadata: Metadata = {
  title: "Services Deck",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DeckPage() {
  return <DeckPageClient />;
}
