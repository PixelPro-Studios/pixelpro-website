// Festive packages page on the review site (Jovin, 24 Nov). Goes live as /promotions/festive-packages/ once he OKs it.
import type { Metadata } from "next";
import FestivePackages from "./FestivePackages";
import { CNY } from "../_v2/festive";

export const metadata: Metadata = {
  title: "Chinese New Year 2027 AV Packages from S$888",
  description: "Sound and lighting packages for your company Chinese New Year dinner or lo hei, from S$888 with setup, dismantling and technical support included.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <FestivePackages p={CNY} />;
}
