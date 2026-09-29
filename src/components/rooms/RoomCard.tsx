"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Room } from "@/data/rooms";
import { useConcierge } from "@/context/ConciergeContext";
import { SunIcon, MoonIcon, BedIcon, UsersIcon, CheckIcon } from "@/components/ui/Icons";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const { openConcierge } = useConcierge();
  // Ambiance mode toggle: "day" uses primary image, "evening" uses alternative image if available
  const [ambiance, setAmbiance] = useState<"day" | "evening">("day");

  const currentImage = ambiance === "day"
    ? (room.images[0] || "/images/placeholder-room.svg")
    : (room.images[1] || room.images[0] || "/images/placeholder-room.svg");

  return (
    <div
      id={`room-card-${room.slug}`}
      className="group bg-white rounded-2xl border border-[#E8DFC8]/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#F3BA2F]/60 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Image Showcase */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F1E5]">
        <motion.div
          key={ambiance}
          initial={{ opacity: 0.8, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage}
            alt={`${room.name} at Mother's Inn Homestay Kerala`}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C5F05] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#F3BA2F]/40 shadow-sm">
            Suite {room.id}
          </span>

          {/* Daylight vs Evening Ambiance Switch */}
          {room.images.length > 1 && (
            <div className="flex items-center gap-1 bg-black/45 backdrop-blur-md rounded-full p-1 border border-white/20">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setAmbiance("day");
                }}
                title="Daylight view"
                className={`text-[10px] px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 ${
                  ambiance === "day"
                    ? "bg-[#F3BA2F] text-[#24211C] font-bold shadow-xs"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <SunIcon className="w-3 h-3 text-current" />
                <span>Day</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setAmbiance("evening");
                }}
                title="Cozy evening ambiance"
                className={`text-[10px] px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 ${
                  ambiance === "evening"
                    ? "bg-[#F3BA2F] text-[#24211C] font-bold shadow-xs"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <MoonIcon className="w-3 h-3 text-current" />
                <span>Eve</span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom image overlay specs */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white text-xs font-sans">
          <span className="bg-black/45 backdrop-blur-sm px-3 py-1 rounded-md flex items-center gap-1.5 border border-white/10">
            <BedIcon className="w-3.5 h-3.5 text-[#F3BA2F]" />
            <span>{room.bedType}</span>
          </span>
          <span className="bg-black/45 backdrop-blur-sm px-3 py-1 rounded-md flex items-center gap-1.5 border border-white/10">
            <UsersIcon className="w-3.5 h-3.5 text-[#F3BA2F]" />
            <span>Up to {room.capacity} Guests</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif text-2xl text-[#24211C] group-hover:text-[#D99E10] transition-colors">
              <Link href={`/rooms/${room.slug}`}>
                {room.name}
              </Link>
            </h3>
            {room.roomSize && (
              <span className="font-sans text-[11px] text-[#6D665A] bg-[#FAF6EE] px-2 py-1 rounded border border-[#E8DFC8]">
                {room.roomSize}
              </span>
            )}
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#6D665A] leading-relaxed mb-4 line-clamp-2">
            {room.description}
          </p>

          {/* Key Amenities Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {room.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="text-[10px] font-sans px-2.5 py-1 rounded-full bg-[#FAF6EE] text-[#6D665A] border border-[#E8DFC8] flex items-center gap-1"
              >
                <CheckIcon className="w-3 h-3 text-[#D99E10]" />
                <span>{amenity}</span>
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-[10px] font-sans px-2 py-1 text-[#8C5F05] font-semibold">
                +{room.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CTA Buttons in Yellow & White */}
        <div className="pt-4 border-t border-[#F0EAE1] flex items-center gap-3">
          <button
            onClick={() => openConcierge({ tab: "room", room: room.name, lockRoom: true })}
            className="flex-1 py-2.5 px-4 rounded-lg gold-shimmer-btn text-[#24211C] font-sans text-xs uppercase tracking-[0.14em] font-bold text-center cursor-pointer shadow-sm"
          >
            Reserve Suite
          </button>

          <Link
            href={`/rooms/${room.slug}`}
            className="py-2.5 px-4 rounded-lg border border-[#E8DFC8] bg-white text-[#24211C] font-sans text-xs uppercase tracking-[0.12em] font-medium hover:border-[#F3BA2F] hover:text-[#D99E10] transition-all text-center"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
