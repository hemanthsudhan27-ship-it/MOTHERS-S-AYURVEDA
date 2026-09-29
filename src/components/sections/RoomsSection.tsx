"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RoomCard from "@/components/rooms/RoomCard";
import rooms from "@/data/rooms";
import { useConcierge } from "@/context/ConciergeContext";

export default function RoomsSection() {
  const [filter, setFilter] = useState<"all" | "private" | "budget">("all");
  const { openConcierge } = useConcierge();

  const filteredRooms = rooms.filter((r) => {
    if (filter === "private") return r.id === "01" || r.id === "02";
    if (filter === "budget") return r.id === "03" || r.id === "04";
    return true;
  });

  return (
    <section
      className="bg-[#FAF7F2] py-20 lg:py-32 relative"
      aria-labelledby="rooms-section-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F3BA2F]/30 text-[#8C5F05] text-[10px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F]" />
              Accommodations & Living
            </div>
            <h2
              id="rooms-section-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211C] leading-[1.08]"
            >
              Suites Crafted for
              <br />
              <span className="text-[#D99E10] italic">Tranquil Rest.</span>
            </h2>
          </ScrollReveal>

          {/* Filter Pills */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-[#E8DFC8] shadow-xs">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  filter === "all"
                    ? "bg-[#F3BA2F] text-[#24211C] shadow-xs"
                    : "text-[#6D665A] hover:text-[#24211C]"
                }`}
              >
                All Spaces ({rooms.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("private")}
                className={`px-4 py-2 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  filter === "private"
                    ? "bg-[#F3BA2F] text-[#24211C] shadow-xs"
                    : "text-[#6D665A] hover:text-[#24211C]"
                }`}
              >
                Private Suites
              </button>
              <button
                type="button"
                onClick={() => setFilter("budget")}
                className={`px-4 py-2 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  filter === "budget"
                    ? "bg-[#F3BA2F] text-[#24211C] shadow-xs"
                    : "text-[#6D665A] hover:text-[#24211C]"
                }`}
              >
                Budget & Dorm
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, i) => (
            <ScrollReveal key={room.id} direction="up" delay={i * 0.08}>
              <RoomCard room={room} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-16 rounded-2xl bg-white p-8 sm:p-10 border border-[#F3BA2F]/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl text-[#24211C] mb-2">
                Traveling with family or looking for a customized stay?
              </h3>
              <p className="font-sans text-sm text-[#6D665A] max-w-xl">
                We accommodate private group bookings, long-stay Ayurveda retreats, and customized travel itineraries. Speak directly with our host concierge.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => openConcierge({ tab: "room" })}
                className="px-6 py-3.5 gold-shimmer-btn text-[#24211C] font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-lg cursor-pointer"
              >
                Custom Request
              </button>
              <Link
                href="/rooms"
                className="px-6 py-3.5 border border-[#E8DFC8] bg-[#FAF6EE] text-[#24211C] font-sans text-xs uppercase tracking-[0.14em] font-medium rounded-lg hover:border-[#F3BA2F] transition-all"
              >
                All Room Specs
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
