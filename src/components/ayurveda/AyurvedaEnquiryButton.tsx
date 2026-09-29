"use client";

import { useConcierge } from "@/context/ConciergeContext";

interface AyurvedaEnquiryButtonProps {
  treatmentName?: string;
  className?: string;
  variant?: "primary" | "outline" | "gold";
  id?: string;
  label?: string;
}

export default function AyurvedaEnquiryButton({
  treatmentName,
  className = "",
  variant = "primary",
  id,
  label,
}: AyurvedaEnquiryButtonProps) {
  const { openConcierge } = useConcierge();

  const baseBtnClass =
    "inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 px-6 py-3 cursor-pointer rounded-lg";
  const variants = {
    primary:
      "gold-shimmer-btn text-[#24211C] font-bold shadow-md shadow-[#F3BA2F]/20",
    gold:
      "bg-white border-2 border-[#F3BA2F] text-[#24211C] hover:bg-[#F3BA2F] font-bold shadow-sm",
    outline:
      "border border-[#E8DFC8] bg-white text-[#24211C] hover:border-[#F3BA2F] hover:text-[#D99E10] font-semibold",
  };

  return (
    <button
      id={id}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        openConcierge({
          tab: "ayurveda",
          treatment: treatmentName || "General Ayurveda Consultation",
        });
      }}
      className={`${baseBtnClass} ${variants[variant]} ${className}`}
      aria-label={`Enquire about ${treatmentName || "Mother's Ayurveda"}`}
    >
      {label || "Enquire Therapy"}
      <span aria-hidden="true" className="text-sm">→</span>
    </button>
  );
}
