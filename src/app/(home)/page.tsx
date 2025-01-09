import VideoBanner from "@/components/HomeOne/VideoBannerOne";
import Features from "@/components/HomeParallax/Features";
import HeroThree from "@/components/HomeParallax/HeroThree";
import PackageThree from "@/components/HomeParallax/PackageThree";
import InstagramFeed from "@/components/layout/InstagramFeed";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Aktivferien Nepal | Trekking & Abenteuerreisen im Himalaya",
  description:
    "Erleben Sie unvergessliche Trekking- und Abenteuerreisen in Nepal mit Aktivferien. Geführt von erfahrenen Schweizer Bergführern, entdecken Sie die Schönheit des Himalayas.",
  keywords: [
    "Nepal",
    "Trekking",
    "Himalaya",
    "Aktivferien",
    "Abenteuerreisen",
    "Schweizer Bergführer",
    "Mustang",
    "Annapurna",
    "Everest Base Camp",
    "Kulturreisen",
  ],
};

const HomeParallax = () => {
  return (
    <>
      <HeroThree />
      <PackageThree />
      <Features />
      <VideoBanner />
      <InstagramFeed />
    </>
  );
};

export default HomeParallax;
