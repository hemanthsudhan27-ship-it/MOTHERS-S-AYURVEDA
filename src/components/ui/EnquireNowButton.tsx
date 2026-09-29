"use client";

import { useConcierge } from "@/context/ConciergeContext";

interface EnquireNowButtonProps {
  roomName: string;
  capacity?: number;
  className?: string;
  variant?: "primary" | "outline";
  id?: string;
  label?: string;
}

export default function EnquireNowButton({
  roomName,
  className = "",
  variant = "primary",
  id,
  label,
}: EnquireNowButtonProps) {
  const { openConcierge } = useConcierge();

  const baseBtnClass =
    "inline-flex items-center justify-center gap-1.5 font-sans text-xs tracking-[0.12em] uppercase transition-all duration-300 px-4 py-2 rounded cursor-pointer";
  const variants = {
    primary: "gold-shimmer-btn text-[#24211C] font-bold shadow-xs",
    outline: "border border-[#E8DFC8] bg-white text-[#24211C] hover:border-[#F3BA2F] hover:text-[#D99E10] font-semibold",
  };

  return (
    <button
      id={id}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        openConcierge({
          tab: "room",
          room: roomName,
          lockRoom: true,
        });
      }}
      className={`${baseBtnClass} ${variants[variant]} ${className}`}
      aria-label={`Enquire about ${roomName}`}
    >
      {label || "Enquire"}
      <span aria-hidden="true" className="text-xs">→</span>
    </button>
  );
}
