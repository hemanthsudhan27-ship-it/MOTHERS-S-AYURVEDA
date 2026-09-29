"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/data/config";
import MobileMenu from "./MobileMenu";
import { useConcierge } from "@/context/ConciergeContext";
import { StarIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { openConcierge } = useConcierge();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      {/* Top Heritage Micro Banner */}
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? "h-0 opacity-0" : "h-8 sm:h-9 opacity-100"} ${
        isTransparent ? "bg-[#1E1B18]/70 text-white/90 border-b border-white/10" : "bg-[#FAF6EE] text-[#6D665A] border-b border-[#F0EAE1]"
      } backdrop-blur-md`}>
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between text-[11px] font-sans">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F]" />
            <span className="tracking-wide flex items-center gap-1.5">
              <span>Fort Kochi Heritage Quarter &nbsp;·&nbsp;</span>
              <span className="inline-flex items-center gap-1 font-medium text-[#F3BA2F]">
                <StarIcon className="w-3 h-3 text-[#F3BA2F]" />
                <span>4.9 Guest Rating</span>
              </span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-[#F3BA2F] transition-colors flex items-center gap-1.5"
            >
              <span>{siteConfig.phone}</span>
            </a>
            <span className="text-[#F3BA2F]/40">|</span>
            <button
              onClick={() => openConcierge({ tab: "ayurveda" })}
              className="text-[#D99E10] hover:underline font-medium cursor-pointer"
            >
              Enquire Ayurvedic Consultation →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "top-0" : "top-8 sm:top-9"
        } ${
          isTransparent
            ? "bg-transparent text-white"
            : "bg-[#FFFDF7]/95 backdrop-blur-md text-[#24211C] border-b border-[#E8DFC8] shadow-sm"
        }`}
        aria-label="Site navigation"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-18 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Mother's Inn Homestay — Home"
          >
            <div className="relative w-8 h-10 lg:w-9 lg:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Mother's Inn Homestay Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-xl lg:text-2xl tracking-tight transition-colors duration-300 ${
                  isTransparent ? "text-white" : "text-[#24211C]"
                }`}
              >
                Mother&apos;s Inn
              </span>
              <span
                className={`font-sans text-[10px] lg:text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 font-medium ${
                  isTransparent ? "text-[#F3BA2F]" : "text-[#D99E10]"
                }`}
              >
                Homestay & Ayurveda
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const isAyurveda = link.href === "/ayurveda";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-xs tracking-[0.12em] uppercase transition-all duration-300 py-1 flex items-center gap-1.5 ${
                    isTransparent
                      ? "text-white/85 hover:text-white"
                      : "text-[#6D665A] hover:text-[#24211C]"
                  } ${active ? (isTransparent ? "text-white font-semibold" : "text-[#24211C] font-semibold") : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {isAyurveda && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#F3BA2F]/20 text-[#F3BA2F] border border-[#F3BA2F]/40 font-medium">
                      Spa
                    </span>
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#F3BA2F] transition-all duration-300 ${
                      active ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action Row */}
          <div className="flex items-center gap-4">
            {/* VIP Reserve Trigger */}
            <button
              onClick={() => openConcierge({ tab: "room" })}
              id="nav-book-now"
              className="hidden lg:inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-sans tracking-[0.15em] uppercase font-semibold gold-shimmer-btn text-[#24211C] rounded-sm cursor-pointer shadow-md shadow-[#F3BA2F]/20"
            >
              <span>Reserve Stay</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 6h10M7 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-[#24211C]"
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 w-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            id="mobile-menu"
            onClose={() => setMenuOpen(false)}
            navLinks={navLinks}
            pathname={pathname}
          />
        )}
      </AnimatePresence>
    </>
  );
}
