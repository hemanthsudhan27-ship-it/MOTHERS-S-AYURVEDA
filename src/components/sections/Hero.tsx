"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useConcierge } from "@/context/ConciergeContext";
import { StarIcon, MapPinIcon, LeafIcon } from "@/components/ui/Icons";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const { openConcierge } = useConcierge();

  // Floating Island state
  const [stayType, setStayType] = useState<"room" | "ayurveda">("room");
  const [arrivalDate, setArrivalDate] = useState("");
  const [guestCount, setGuestCount] = useState(2);

  const handleIslandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openConcierge({
      tab: stayType,
      checkIn: arrivalDate,
      guests: guestCount,
    });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] pt-24 pb-16 lg:pb-24 overflow-hidden flex flex-col justify-between"
      aria-label="Hero — Mother's Inn Homestay & Ayurveda"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: imageY, scale: imageScale }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/amenities/2cb00dbe-9146-47a2-be7d-1c8a25e50835.jpg"
          alt="Mother's Inn Homestay — a sunlit boutique retreat in Fort Kochi"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Ambient Gradient Overlays: Deep warm golden-tinted film */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/75 via-[#1C1917]/45 to-[#1C1917]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-transparent to-black/30" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
          style={{
            background: "radial-gradient(circle at 75% 30%, rgba(243, 186, 47, 0.45) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full pt-8 lg:pt-14 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow badge */}
          <motion.div variants={lineVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#F3BA2F] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F3BA2F] animate-pulse" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase font-semibold text-white">
              Fort Kochi &nbsp;·&nbsp; Kerala, India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={lineVariants} className="mb-6">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] text-white">
              Stay. Heal.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE8A1] via-[#F3BA2F] to-[#E5A91A] italic">
                Feel at Home.
              </span>
            </h1>
          </motion.div>

          {/* Description & Key USPs */}
          <motion.div variants={lineVariants} className="mb-8">
            <p className="font-sans text-base sm:text-lg text-white/85 max-w-xl leading-relaxed mb-4 font-light">
              Experience the genuine warmth of a traditional Kerala home combined with authentic Ayurvedic rejuvenation, nestled just 5 minutes from the Arabian Sea.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-white/90">
              <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
                <StarIcon className="w-3.5 h-3.5 text-[#F3BA2F]" />
                <span>4.9/5 Guest Rating</span>
              </span>
              <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
                <MapPinIcon className="w-3.5 h-3.5 text-[#F3BA2F]" />
                <span>5-Min Walk to Beach</span>
              </span>
              <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
                <LeafIcon className="w-3.5 h-3.5 text-[#F3BA2F]" />
                <span>Authentic Ayurvedic Care</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Glassmorphic Reservation Island */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full mt-6"
      >
        <div className="glass-luxury-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/80 max-w-4xl">
          <form onSubmit={handleIslandSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            {/* Experience Selector */}
            <div className="flex-1 border-b lg:border-b-0 lg:border-r border-[#E8DFC8] pb-3 lg:pb-0 lg:pr-4">
              <label className="block text-[10px] font-sans uppercase tracking-[0.18em] text-[#8C5F05] font-semibold mb-1">
                Experience
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStayType("room")}
                  className={`text-xs px-3 py-1.5 rounded transition-all cursor-pointer font-medium ${
                    stayType === "room"
                      ? "bg-[#F3BA2F] text-[#24211C] font-semibold shadow-sm"
                      : "bg-[#FAF6EE] text-[#6D665A] hover:text-[#24211C]"
                  }`}
                >
                  Homestay Suites
                </button>
                <button
                  type="button"
                  onClick={() => setStayType("ayurveda")}
                  className={`text-xs px-3 py-1.5 rounded transition-all cursor-pointer font-medium ${
                    stayType === "ayurveda"
                      ? "bg-[#F3BA2F] text-[#24211C] font-semibold shadow-sm"
                      : "bg-[#FAF6EE] text-[#6D665A] hover:text-[#24211C]"
                  }`}
                >
                  Ayurveda Retreat
                </button>
              </div>
            </div>

            {/* Arrival Date */}
            <div className="flex-1 border-b lg:border-b-0 lg:border-r border-[#E8DFC8] pb-3 lg:pb-0 lg:pr-4">
              <label className="block text-[10px] font-sans uppercase tracking-[0.18em] text-[#8C5F05] font-semibold mb-1">
                Arrival Date
              </label>
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full text-xs text-[#24211C] font-sans bg-transparent outline-none cursor-pointer font-medium"
              />
            </div>

            {/* Guests */}
            <div className="w-full lg:w-36 border-b lg:border-b-0 lg:border-r border-[#E8DFC8] pb-3 lg:pb-0 lg:pr-4">
              <label className="block text-[10px] font-sans uppercase tracking-[0.18em] text-[#8C5F05] font-semibold mb-1">
                Guests
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full text-xs text-[#24211C] font-sans bg-transparent outline-none cursor-pointer font-medium"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4+ Guests / Group</option>
              </select>
            </div>

            {/* Instant Concierge CTA */}
            <div className="pt-2 lg:pt-0">
              <button
                type="submit"
                id="hero-reserve-btn"
                className="w-full lg:w-auto px-7 py-3.5 gold-shimmer-btn text-[#24211C] font-sans text-xs tracking-[0.16em] uppercase font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#F3BA2F]/30 cursor-pointer"
              >
                <span>Check Rates & Reserve</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 right-8 lg:right-14 hidden md:flex items-center gap-3">
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60">
          Explore Sanctuary
        </span>
        <div className="w-10 h-px bg-[#F3BA2F]" />
      </div>
    </section>
  );
}
