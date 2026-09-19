"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/data/config";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-[#FFFDF7]/95 backdrop-blur-sm border-b border-[#E8DFC8]"
        }`}
        aria-label="Site navigation"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Mother's Homestay — Home"
          >
            <span
              className={`font-serif text-xl lg:text-2xl tracking-tight transition-colors duration-500 ${
                isTransparent ? "text-white" : "text-[#24211C]"
              }`}
            >
              Mother&apos;s
            </span>
            <span
              className={`font-sans text-[10px] lg:text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                isTransparent ? "text-white/70" : "text-[#6D665A]"
              }`}
            >
              Homestay
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-sm tracking-[0.12em] uppercase transition-colors duration-300 group ${
                    isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-[#6D665A] hover:text-[#24211C]"
                  } ${active ? (isTransparent ? "text-white" : "text-[#24211C]") : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#D6A33A] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Book Now CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              id="nav-book-now"
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans tracking-[0.15em] uppercase transition-all duration-300 border ${
                isTransparent
                  ? "bg-[#D6A33A] border-[#D6A33A] text-[#24211C] hover:bg-[#B98424] hover:border-[#B98424]"
                  : "bg-[#D6A33A] border-[#D6A33A] text-[#24211C] hover:bg-[#B98424] hover:border-[#B98424]"
              }`}
            >
              Book Now
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 6h10M7 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 p-1 transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-[#24211C]"
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 w-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
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
