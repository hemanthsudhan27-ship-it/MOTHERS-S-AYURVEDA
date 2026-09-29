"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useConcierge } from "@/context/ConciergeContext";
import { HomeCareIcon, LotusIcon, BoatIcon, StarIcon } from "@/components/ui/Icons";

const stats = [
  { value: "4.9 / 5.0", hasStar: true, label: "Guest Satisfaction", sub: "Top rated in Fort Kochi" },
  { value: "5 Min", hasStar: false, label: "Walk to Coast", sub: "Beaches & Chinese nets" },
  { value: "100%", hasStar: false, label: "Pure Herbal Oils", sub: "Traditional Ayurvedic lineage" },
  { value: "10+ Yrs", hasStar: false, label: "Warm Hospitality", sub: "Welcoming global travelers" },
];

const pillars = [
  {
    icon: HomeCareIcon,
    title: "Heartfelt Homestay Care",
    desc: "Not a commercial hotel — a living Kerala home where every traveler is welcomed like cherished family with warm smiles and homemade delicacies.",
  },
  {
    icon: LotusIcon,
    title: "On-Site Ayurvedic Sanctuary",
    desc: "Rejuvenate mind and body with classical Panchakarma, soothing Shirodhara, and herbal body therapies prepared with time-honored formulations.",
  },
  {
    icon: BoatIcon,
    title: "The Heart of Fort Kochi",
    desc: "Leave the car behind. Stroll within minutes to the historic Chinese fishing nets, ancient churches, spice warehouses, and seaside sunset walkways.",
  },
];

export default function WelcomeSection() {
  const { openConcierge } = useConcierge();

  return (
    <section
      className="bg-[#FFFDF7] py-20 lg:py-32 relative overflow-hidden"
      aria-labelledby="welcome-heading"
    >
      {/* Decorative Gold Ambient Glow */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(243, 186, 47, 0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        {/* Top Header & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] border border-[#F3BA2F]/30 text-[#8C5F05] text-[10px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F]" />
                Welcome to Mother&apos;s Inn
              </div>
              <h2
                id="welcome-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211C] leading-[1.08]"
              >
                A Sanctuary to Slow Down,
                <br />
                <span className="text-[#D99E10] italic">Rest & Rediscover Harmony.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#6D665A] mb-6">
                Nestled on Bishops Garden Lane in historical Fort Kochi, Mother&apos;s Inn is born from a simple belief: the purest luxury is genuine hospitality. Thoughtfully designed spaces, serene tropical courtyards, and deep-rooted Ayurvedic traditions come together under one peaceful roof.
              </p>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => openConcierge({ tab: "room" })}
                  className="font-sans text-xs tracking-[0.14em] uppercase text-[#24211C] font-semibold border-b-2 border-[#F3BA2F] pb-1 hover:text-[#D99E10] hover:border-[#D99E10] transition-all cursor-pointer"
                >
                  Reserve Your Haven →
                </button>
                <Link
                  href="/about"
                  className="font-sans text-xs tracking-[0.14em] uppercase text-[#6D665A] hover:text-[#24211C] transition-colors"
                >
                  Read Our Story
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 3 Pillars Grid with White & Gold Luxury Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <ScrollReveal key={p.title} direction="up" delay={0.1 * idx}>
                <div className="bg-white rounded-2xl p-8 border border-[#E8DFC8]/70 shadow-sm hover:shadow-xl hover:border-[#F3BA2F]/50 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FFFBF0] border border-[#F3BA2F]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#F3BA2F]/20 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-[#D99E10]" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#24211C] mb-3 group-hover:text-[#D99E10] transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6D665A] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="w-8 h-0.5 bg-[#F3BA2F]/40 group-hover:w-16 group-hover:bg-[#F3BA2F] transition-all duration-300 mt-6" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Key Numerical Highlights Strip */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="rounded-2xl bg-gradient-to-r from-[#FFFBF0] via-[#FAF6EE] to-[#FFFBF0] border border-[#F3BA2F]/30 p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFC8]">
              {stats.map((s, idx) => (
                <div key={s.label} className={`text-center ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""}`}>
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#D99E10] font-medium">
                      {s.value}
                    </p>
                    {s.hasStar && <StarIcon className="w-5 h-5 text-[#F3BA2F] -mt-1" />}
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-[#24211C] tracking-wide mb-0.5">
                    {s.label}
                  </p>
                  <p className="font-sans text-[11px] text-[#6D665A]">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
