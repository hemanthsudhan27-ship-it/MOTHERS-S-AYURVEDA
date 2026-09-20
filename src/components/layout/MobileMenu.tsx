"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface MobileMenuProps {
  id: string;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  pathname: string;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

export default function MobileMenu({ id, onClose, navLinks, pathname }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <motion.div
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", stiffness: 300, damping: 35 }}
        className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[#FFFDF7] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#E8DFC8]">
          <Link href="/" onClick={onClose} className="flex flex-col leading-none">
            <span className="font-serif text-xl text-[#24211C]">Mother&apos;s</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A]">
              Ayurveda
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-[#6D665A] hover:text-[#24211C] transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-10" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navLinks.map((link, i) => {
              const active = pathname === link.href;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-3 font-sans text-sm tracking-[0.12em] uppercase border-b border-[#E8DFC8] transition-colors ${
                      active ? "text-[#D6A33A]" : "text-[#24211C] hover:text-[#D6A33A]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Book Now */}
        <div className="px-6 pb-10">
          <Link
            href="/booking"
            onClick={onClose}
            id="mobile-menu-book-now"
            className="block w-full text-center bg-[#D6A33A] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase py-4 hover:bg-[#B98424] transition-colors duration-300"
          >
            Book Your Stay
          </Link>
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-menu-whatsapp"
            className="mt-3 flex items-center justify-center gap-2 w-full text-center border border-[#E8DFC8] text-[#6D665A] font-sans text-xs tracking-[0.12em] uppercase py-4 hover:border-[#D6A33A] hover:text-[#D6A33A] transition-colors duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </>
  );
}
