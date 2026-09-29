"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useConcierge } from "@/context/ConciergeContext";
import { siteConfig } from "@/data/config";
import { PhoneIcon, ChatIcon } from "@/components/ui/Icons";

export default function FinalCTA() {
  const { openConcierge } = useConcierge();

  return (
    <section
      className="relative overflow-hidden bg-[#1C1917] py-24 lg:py-36 text-white"
      aria-labelledby="final-cta-heading"
    >
      {/* Background image with warm Kerala golden tone */}
      <div className="absolute inset-0">
        <Image
          src="/images/amenities/6e1a2035-55f4-44de-a95a-6a9a7d2a3070.jpg"
          alt="Mother's Inn Homestay peaceful surroundings"
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/95 via-[#1C1917]/80 to-[#1C1917]/95" />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(243, 186, 47, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative Gold Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F3BA2F]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F3BA2F]/50 to-transparent" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F3BA2F] text-[10px] font-sans uppercase tracking-[0.25em] font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F]" />
              Direct VIP Reservation
            </div>

            <h2
              id="final-cta-heading"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] text-white mb-6"
            >
              Your Journey to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE8A1] via-[#F3BA2F] to-[#E5A91A] italic">
                Kerala Peace
              </span>
              <br />
              Begins Here.
            </h2>

            <p className="font-sans text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed mb-10 font-light">
              Experience Fort Kochi&apos;s genuine hospitality and Ayurvedic rejuvenation. Book directly for the best package rates and personalized care.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <button
                onClick={() => openConcierge({ tab: "room" })}
                className="px-8 py-4 gold-shimmer-btn text-[#24211C] font-sans text-xs tracking-[0.16em] uppercase font-bold rounded-lg shadow-xl shadow-[#F3BA2F]/25 cursor-pointer flex items-center gap-2"
              >
                <span>Reserve Your Stay</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                onClick={() => openConcierge({ tab: "ayurveda" })}
                className="px-8 py-4 bg-white/10 border border-[#F3BA2F]/50 text-[#F3BA2F] font-sans text-xs tracking-[0.16em] uppercase font-bold rounded-lg hover:bg-[#F3BA2F] hover:text-[#24211C] transition-all duration-300 cursor-pointer"
              >
                Enquire Ayurveda Consultation
              </button>
            </div>

            {/* Direct Host Hotline */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-white/70">
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-[#F3BA2F] transition-colors flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4 text-[#F3BA2F]" />
                <span>Direct Call:</span>
                <strong className="text-white font-medium">{siteConfig.phone}</strong>
              </a>
              <span className="text-[#F3BA2F]/40">•</span>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F3BA2F] transition-colors flex items-center gap-2"
              >
                <ChatIcon className="w-4 h-4 text-[#F3BA2F]" />
                <span>WhatsApp Hotline:</span>
                <strong className="text-white font-medium">Instant Response</strong>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
