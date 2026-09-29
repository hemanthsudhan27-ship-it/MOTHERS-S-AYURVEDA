"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/config";
import {
  BeachWavesIcon,
  FishingNetIcon,
  ChurchIcon,
  CoffeeCupIcon,
  TheaterMaskIcon,
  SunIcon,
} from "@/components/ui/Icons";

const attractions = [
  {
    name: "Fort Kochi Beach & Sunset Promenade",
    time: "5 Min Walk",
    distance: "400m",
    icon: BeachWavesIcon,
    desc: "Golden-sand shoreline, evening breeze, and uninterrupted views across the Arabian Sea.",
  },
  {
    name: "Historic Chinese Fishing Nets",
    time: "7 Min Walk",
    distance: "650m",
    icon: FishingNetIcon,
    desc: "Centuries-old cantilevered fishing machinery in active operation along the harbor entrance.",
  },
  {
    name: "Santa Cruz Cathedral Basilica",
    time: "4 Min Walk",
    distance: "350m",
    icon: ChurchIcon,
    desc: "Majestic heritage church dating back to Portuguese era with ornate ceilings and quiet serenity.",
  },
  {
    name: "Princess Street Cafes & Boutiques",
    time: "5 Min Walk",
    distance: "450m",
    icon: CoffeeCupIcon,
    desc: "Colonial Dutch architecture, artisanal bakeries, bookshops, and organic spice outlets.",
  },
  {
    name: "Kerala Kathakali Performance Centre",
    time: "6 Min Walk",
    distance: "500m",
    icon: TheaterMaskIcon,
    desc: "Daily traditional classical dance drama with live makeup preparation and music.",
  },
];

export default function LocationSection() {
  const [selectedAttraction, setSelectedAttraction] = useState(0);

  return (
    <section
      className="bg-[#FFFDF7] py-20 lg:py-32 relative overflow-hidden"
      aria-labelledby="location-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] border border-[#F3BA2F]/30 text-[#8C5F05] text-[10px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F]" />
              Fort Kochi Neighborhood
            </div>
            <h2
              id="location-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211C] leading-[1.08] mb-4"
            >
              Step Outside into
              <br />
              <span className="text-[#D99E10] italic">500 Years of Living History.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6D665A] leading-relaxed">
              Situated in Bishops Garden Lane, Mother&apos;s Inn is peaceful and tucked away, yet only a brief stroll from Fort Kochi&apos;s most celebrated coastlines, tea stalls, and art heritage.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Interactive Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Attraction List */}
          <div className="lg:col-span-6 space-y-3">
            {attractions.map((item, idx) => {
              const isSelected = selectedAttraction === idx;
              const IconComp = item.icon;
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedAttraction(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "bg-white border-[#F3BA2F] shadow-lg ring-1 ring-[#F3BA2F]/30"
                      : "bg-[#FAF7F2] border-[#E8DFC8] hover:border-[#F3BA2F]/50 hover:bg-white"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFFBF0] border border-[#F3BA2F]/30 flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6 text-[#D99E10]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg font-semibold text-[#24211C]">
                        {item.name}
                      </h3>
                      <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#F3BA2F]/20 text-[#8C5F05] font-bold flex-shrink-0">
                        {item.time}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#6D665A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Map & Host Insider Guide Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Host's Morning Walking Itinerary */}
            <div className="bg-gradient-to-br from-[#FFFBF0] to-[#FAF6EE] rounded-3xl p-8 border border-[#F3BA2F]/40 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#F3BA2F]/20 border border-[#F3BA2F]/40 flex items-center justify-center flex-shrink-0">
                  <SunIcon className="w-5 h-5 text-[#D99E10]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#24211C]">
                    Host&apos;s Curated Morning Walk
                  </h4>
                  <p className="font-sans text-[11px] text-[#8C5F05] uppercase tracking-wider font-semibold">
                    Local Fort Kochi Insider Secret
                  </p>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#6D665A] leading-relaxed mb-6">
                &ldquo;Wake up at 6:15 AM, step out onto quiet Bishops Garden Lane, and stroll 5 minutes straight to the beachfront. Watch the fishermen raise the Chinese nets in the morning light before any crowds arrive, then return to our veranda for hot Kerala ginger tea and fresh Appam.&rdquo;
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E8DFC8] mb-6">
                <p className="text-[10px] font-sans uppercase tracking-widest text-[#8C5F05] font-bold mb-1">
                  Our Exact Address
                </p>
                <p className="text-xs font-sans text-[#24211C] font-medium leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 gold-shimmer-btn text-[#24211C] font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-lg shadow-sm flex items-center gap-2"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="px-5 py-3.5 bg-white border border-[#E8DFC8] text-[#24211C] font-sans text-xs uppercase tracking-[0.12em] font-semibold rounded-lg hover:border-[#F3BA2F] transition-all"
                >
                  Call Host for Directions
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-sm bg-[#FAF6EE]">
              {siteConfig.googleMapsEmbedUrl ? (
                <iframe
                  src={siteConfig.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mother's Inn Homestay location in Fort Kochi"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-center p-6">
                  <p className="text-xs text-[#6D665A]">Fort Kochi Heritage District Map</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
