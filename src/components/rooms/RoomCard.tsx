"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Room } from "@/data/rooms";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Link
      href={`/rooms/${room.slug}`}
      id={`room-card-${room.slug}`}
      className="group block overflow-hidden"
      aria-label={`View ${room.name} details`}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DFC8]">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={room.images[0] || "/images/placeholder-room.svg"}
            alt={`${room.name} at Mother's Ayurveda`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
        </motion.div>

        {/* Room number badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1">
            {room.id}
          </span>
        </div>

        {/* Yellow accent on hover */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-8 h-px bg-[#D6A33A] transition-all duration-500" aria-hidden="true" />
      </div>

      {/* Card footer */}
      <div className="pt-4 pb-2">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D6A33A] mb-1">
              {room.id}
            </p>
            <h3 className="font-serif text-xl lg:text-2xl text-[#24211C] group-hover:text-[#B98424] transition-colors duration-300">
              {room.name}
            </h3>
            <p className="font-sans text-xs text-[#6D665A] mt-1 leading-relaxed line-clamp-2">
              {room.shortDescription}
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[#E8DFC8]">
          <span className="font-sans text-[10px] text-[#6D665A] tracking-wide">
            {room.capacity} Guest{room.capacity > 1 ? "s" : ""}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#D6A33A]" aria-hidden="true" />
          <span className="font-sans text-[10px] text-[#6D665A] tracking-wide">
            {room.bedType}
          </span>
          {room.roomSize && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#D6A33A]" aria-hidden="true" />
              <span className="font-sans text-[10px] text-[#6D665A] tracking-wide">
                {room.roomSize}
              </span>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 border border-[#E8DFC8] text-[#24211C] font-sans text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 group-hover:border-[#D6A33A] group-hover:bg-[#D6A33A] transition-all duration-300">
            View Details
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
