"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, navLinks } from "@/data/config";
import { useConcierge } from "@/context/ConciergeContext";
import { StarIcon } from "@/components/ui/Icons";

const footerRooms = [
  { label: "Classic Room (Private Balcony)", href: "/rooms/classic-room" },
  { label: "Standard Room (Queen Bed)", href: "/rooms/standard-room" },
  { label: "Budget Room (Twin Comfort)", href: "/rooms/budget-room" },
  { label: "Dormitory (Social Backpacker Bunks)", href: "/rooms/dormitory" },
];

const ayurvedaLinks = [
  { label: "Shirodhara Third-Eye Therapy", href: "/ayurveda" },
  { label: "Panchakarma Detox Programs", href: "/ayurveda" },
  { label: "Classical Uzhichil Oil Massage", href: "/ayurveda" },
  { label: "Kizhi Herbal Bolus Therapy", href: "/ayurveda" },
  { label: "Prasava Raksha Postnatal Care", href: "/ayurveda" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { openConcierge } = useConcierge();

  return (
    <footer className="bg-[#1C1917] text-[#C8BFB0] border-t border-[#F3BA2F]/30" aria-label="Site footer">
      {/* Top Gold Hairline */}
      <div className="h-1 w-full gold-gradient-bg" />

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-18 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group" aria-label="Mother's Inn Homestay & Ayurveda — Home">
              <div className="flex items-center gap-3.5">
                <div className="relative w-9 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/logo.png"
                    alt="Mother's Inn Homestay Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-2xl lg:text-3xl text-white tracking-tight">
                    Mother&apos;s Inn
                  </span>
                  <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#F3BA2F] font-semibold mt-1">
                    Homestay & Ayurveda
                  </span>
                </div>
              </div>
            </Link>

            <p className="font-sans text-sm leading-relaxed text-[#9E9585] mb-6 max-w-sm font-light">
              A sun-drenched sanctuary in Fort Kochi, Kerala. Genuine homestay warmth and time-honored Ayurvedic healing, 5 minutes from the Arabian Sea.
            </p>

            {/* Google Reviews Trust Seal */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-xs flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#F3BA2F] text-[#24211C] flex items-center justify-center flex-shrink-0">
                <StarIcon className="w-5 h-5 text-[#24211C]" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">
                  4.9 / 5.0 Rating
                </p>
                <p className="text-[11px] text-[#9E9585]">
                  Rated by global travelers in Fort Kochi
                </p>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="flex items-center gap-4 text-xs font-sans">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F3BA2F] hover:underline"
              >
                <span>WhatsApp Concierge →</span>
              </a>
            </div>
          </div>

          {/* Col 2: Accommodations */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[11px] tracking-[0.22em] uppercase text-[#F3BA2F] font-bold mb-5">
              Suites & Rooms
            </h3>
            <ul className="space-y-3 font-sans text-xs">
              {footerRooms.map((room) => (
                <li key={room.label}>
                  <Link
                    href={room.href}
                    className="text-[#9E9585] hover:text-white transition-colors duration-200 block"
                  >
                    {room.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => openConcierge({ tab: "room" })}
                  className="text-[#F3BA2F] font-semibold hover:underline cursor-pointer"
                >
                  Check Live Availability →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ayurveda Therapies */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[11px] tracking-[0.22em] uppercase text-[#F3BA2F] font-bold mb-5">
              Mother&apos;s Ayurveda
            </h3>
            <ul className="space-y-3 font-sans text-xs">
              {ayurvedaLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#9E9585] hover:text-white transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => openConcierge({ tab: "ayurveda" })}
                  className="text-[#F3BA2F] font-semibold hover:underline cursor-pointer"
                >
                  Doctor Consultation →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Location */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-[11px] tracking-[0.22em] uppercase text-[#F3BA2F] font-bold mb-5">
              Contact & Visit
            </h3>
            <ul className="space-y-3 font-sans text-xs text-[#9E9585]">
              <li>
                <span className="block text-white font-medium mb-0.5">Location:</span>
                {siteConfig.location}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors block text-white font-medium"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors block"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F3BA2F] hover:underline block"
                >
                  Get Directions on Maps →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#7A7162]">
          <p>
            &copy; {year} Mother&apos;s Inn Homestay & Mother&apos;s Ayurveda. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Stay
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
