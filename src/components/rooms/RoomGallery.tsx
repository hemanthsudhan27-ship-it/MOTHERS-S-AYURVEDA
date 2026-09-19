"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface RoomGalleryProps {
  images: string[];
  roomName: string;
}

export default function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const validImages = images.filter(Boolean);
  if (validImages.length === 0) return null;

  const [primary, ...secondary] = validImages;

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Primary large image */}
        <button
          onClick={() => setLightbox(0)}
          className="col-span-2 lg:col-span-2 relative aspect-[16/10] overflow-hidden group"
          aria-label={`View main image of ${roomName}`}
        >
          <Image
            src={primary}
            alt={`${roomName} — main view`}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 800px"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          <div className="absolute bottom-3 right-3 bg-black/30 backdrop-blur-sm text-white font-sans text-[10px] tracking-[0.15em] uppercase px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Full
          </div>
        </button>

        {/* Secondary images */}
        {secondary.slice(0, 4).map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i + 1)}
            className="relative aspect-[4/3] overflow-hidden group"
            aria-label={`View image ${i + 2} of ${roomName}`}
          >
            <Image
              src={src}
              alt={`${roomName} — view ${i + 2}`}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${roomName} image gallery`}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={validImages[lightbox]}
                alt={`${roomName} — full view`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Navigation */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((l) => l !== null ? Math.max(0, l - 1) : 0); }}
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((l) => l !== null ? Math.min(validImages.length - 1, l + 1) : 0); }}
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                →
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs text-white/40">
              {lightbox + 1} / {validImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
