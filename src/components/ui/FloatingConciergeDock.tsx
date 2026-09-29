"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConcierge } from "@/context/ConciergeContext";
import { siteConfig } from "@/data/config";

export default function FloatingConciergeDock() {
  const { openConcierge } = useConcierge();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down slightly (150px)
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 sm:gap-3"
          aria-label="Concierge and instant booking dock"
        >
          {/* Quick WhatsApp button */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Mother's%20Inn!%20I'm%20interested%20in%20a%20stay%20and%20Ayurvedic%20wellness.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white border border-[#E8DFC8] text-[#24211C] shadow-lg hover:border-[#F3BA2F] hover:shadow-[#F3BA2F]/30 flex items-center justify-center transition-all duration-200 group"
            aria-label="Direct WhatsApp Concierge"
          >
            <svg className="w-5 h-5 text-[#24211C] group-hover:text-[#D99E10] transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Main VIP Reserve Dock Pill */}
          <button
            onClick={() => openConcierge()}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-[#F3BA2F]/40 shadow-xl hover:shadow-[#F3BA2F]/30 transition-all duration-300 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F3BA2F]" />
              <span className="absolute w-4 h-4 rounded-full bg-[#F3BA2F]/40 animate-ping" />
            </div>

            <div className="text-left">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D99E10] font-bold">
                VIP Concierge
              </p>
              <p className="font-serif text-xs text-[#24211C] font-semibold -mt-0.5">
                Reserve Stay & Ayurveda
              </p>
            </div>

            <div className="w-7 h-7 rounded-full bg-[#F3BA2F] text-[#24211C] flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 12l4-4-4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
