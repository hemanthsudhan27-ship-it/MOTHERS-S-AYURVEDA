"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface GalleryItem {
  src: string;
  alt: string;
  category: "all" | "suites" | "wellness" | "grounds";
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/amenities/1c66f5c5-b968-4de1-a803-ecfe3fb9e955.jpg",
    alt: "A serene room interior with warm natural lighting",
    category: "suites",
    title: "Sunlit Suite Bedroom",
  },
  {
    src: "/images/amenities/309e0145-ce9e-493b-b611-28424de40f13.jpg",
    alt: "The lush green surroundings of Mother's Inn Homestay",
    category: "grounds",
    title: "Tropical Courtyard Garden",
  },
  {
    src: "/images/amenities/2f093924-3ac2-4538-87c5-68c1f69e2051.jpg",
    alt: "Comfortable amenities and relaxation spaces",
    category: "wellness",
    title: "Ayurvedic Treatment Room",
  },
  {
    src: "/images/amenities/6ce5db30-e99b-44eb-a228-869100c28d81.jpg",
    alt: "Beautiful common lounge area",
    category: "grounds",
    title: "Heritage Common Living Lounge",
  },
  {
    src: "/images/amenities/c598c459-33ae-4eb8-b98e-b448a762ae8b.jpg",
    alt: "Exterior view and peaceful grounds",
    category: "grounds",
    title: "Quiet Lane in Fort Kochi",
  },
  {
    src: "/images/amenities/f5352f8c-e976-4b12-842b-4bef62e705ee.jpg",
    alt: "Thoughtfully curated interior details",
    category: "suites",
    title: "Teak Details & Handcrafted Accents",
  },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <section
      className="bg-[#FAF7F2] py-20 lg:py-32 overflow-hidden relative"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header and Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F3BA2F]/30 text-[#8C5F05] text-[10px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F]" />
              Visual Journey
            </div>
            <h2
              id="gallery-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211C] leading-[1.08]"
            >
              Atmosphere &
              <br />
              <span className="text-[#D99E10] italic">Tranquil Moments.</span>
            </h2>
          </ScrollReveal>

          {/* Filter Pills */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-[#E8DFC8]">
              {[
                { id: "all", label: "All Spaces" },
                { id: "suites", label: "Suites" },
                { id: "wellness", label: "Ayurveda" },
                { id: "grounds", label: "Courtyard & Ambiance" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-[#F3BA2F] text-[#24211C] shadow-xs"
                      : "text-[#6D665A] hover:text-[#24211C]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <ScrollReveal key={item.src} direction="up" delay={index * 0.06}>
              <div
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-[#E8DFC8] border border-[#E8DFC8] shadow-sm hover:shadow-xl hover:border-[#F3BA2F] transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay with gold frame & magnifying prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#F3BA2F] font-bold mb-1">
                    Click to Enlarge
                  </span>
                  <p className="font-serif text-xl text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1E1B18]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-[#F3BA2F] text-white hover:text-[#24211C] flex items-center justify-center transition-colors z-20 cursor-pointer"
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
              </svg>
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#F3BA2F] text-white hover:text-[#24211C] flex items-center justify-center transition-colors z-20 cursor-pointer"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#F3BA2F] text-white hover:text-[#24211C] flex items-center justify-center transition-colors z-20 cursor-pointer"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="mt-4 text-center">
                <p className="font-serif text-xl text-white">
                  {filtered[lightboxIndex].title}
                </p>
                <p className="font-sans text-xs text-[#F3BA2F] uppercase tracking-widest mt-1">
                  {lightboxIndex + 1} of {filtered.length} &nbsp;·&nbsp; Mother&apos;s Inn Homestay & Ayurveda
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
