"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";
import { useConcierge } from "@/context/ConciergeContext";
import { StarIcon, PhoneIcon } from "@/components/ui/Icons";

interface MobileMenuProps {
  id: string;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  pathname: string;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
  exit: { x: "100%" },
};

export default function MobileMenu({ id, onClose, navLinks, pathname }: MobileMenuProps) {
  const { openConcierge } = useConcierge();

  const handleBookClick = () => {
    onClose();
    openConcierge({ tab: "room" });
  };

  const handleAyurvedaClick = () => {
    onClose();
    openConcierge({ tab: "ayurveda" });
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#1E1B18]/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <motion.aside
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", stiffness: 320, damping: 35 }}
        className="fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-md bg-[#FFFDF7] flex flex-col border-l border-[#F3BA2F]/30 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#F0EAE1] bg-white">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <div className="relative w-7 h-9 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Mother's Inn Homestay Logo"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl text-[#24211C]">Mother&apos;s Inn</span>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D99E10] font-medium">
                Homestay & Ayurveda
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FAF6EE] text-[#6D665A] hover:text-[#24211C] flex items-center justify-center transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Quick Concierge Banner */}
        <div className="px-6 py-4 bg-[#FFFBF0] border-b border-[#F3BA2F]/20 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-sans uppercase tracking-widest text-[#D99E10] font-bold">
              Fort Kochi, Kerala
            </p>
            <p className="text-xs text-[#24211C] font-serif">
              Direct Host Reservations
            </p>
          </div>
          <span className="text-xs font-bold text-[#F3BA2F] flex items-center gap-1">
            <StarIcon className="w-3.5 h-3.5 text-[#F3BA2F]" />
            <span>4.9</span>
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navLinks.map((link, i) => {
              const active = pathname === link.href;
              const isAyurveda = link.href === "/ayurveda";
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center justify-between py-3.5 font-sans text-xs tracking-[0.14em] uppercase border-b border-[#F0EAE1] transition-colors ${
                      active ? "text-[#D99E10] font-bold" : "text-[#24211C] hover:text-[#D99E10]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    {isAyurveda ? (
                      <span className="text-[9px] px-2 py-0.5 rounded bg-[#F3BA2F]/15 text-[#D99E10] border border-[#F3BA2F]/30 font-medium">
                        Treatments
                      </span>
                    ) : (
                      <span className="text-[#C8BFB0] text-sm">→</span>
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-8 pt-6 border-t border-[#F0EAE1]">
            <p className="text-[11px] font-sans uppercase tracking-wider text-[#8A8070] mb-3">
              Direct Contact
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-3 text-sm text-[#24211C] font-medium py-1.5 hover:text-[#D99E10]"
            >
              <span className="w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#E8DFC8] flex items-center justify-center text-[#D99E10]">
                <PhoneIcon className="w-3.5 h-3.5 text-[#D99E10]" />
              </span>
              {siteConfig.phone}
            </a>
          </div>
        </nav>

        {/* CTA Area */}
        <div className="p-6 bg-white border-t border-[#F0EAE1] space-y-2.5">
          <button
            onClick={handleBookClick}
            id="mobile-menu-book-now"
            className="w-full text-center gold-shimmer-btn text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase font-bold py-3.5 rounded shadow-md cursor-pointer"
          >
            Reserve Your Stay
          </button>

          <button
            onClick={handleAyurvedaClick}
            className="w-full text-center bg-[#FFFBF0] border border-[#F3BA2F]/40 text-[#D99E10] font-sans text-xs tracking-[0.12em] uppercase font-semibold py-3 rounded hover:bg-[#F3BA2F]/10 transition-colors"
          >
            Enquire Ayurveda Therapy
          </button>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Mother's%20Inn!%20I'm%20contacting%20you%20from%20your%20website.`}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-menu-whatsapp"
            className="flex items-center justify-center gap-2 w-full text-center border border-[#E8DFC8] text-[#6D665A] font-sans text-xs tracking-[0.12em] uppercase py-3 rounded hover:border-[#F3BA2F] hover:text-[#D99E10] transition-colors duration-300"
          >
            <svg className="w-4 h-4 text-[#D99E10]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Directly
          </a>
        </div>
      </motion.aside>
    </>
  );
}
