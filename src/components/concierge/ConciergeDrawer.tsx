"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useConcierge } from "@/context/ConciergeContext";
import { siteConfig } from "@/data/config";
import rooms from "@/data/rooms";
import { StarIcon } from "@/components/ui/Icons";

const ayurvedaTreatments = [
  { id: "consultation", name: "General Ayurveda Consultation", duration: "45 Mins", desc: "Pulse diagnosis (Nadi Pariksha) & tailored routine" },
  { id: "shirodhara", name: "Shirodhara Therapy", duration: "60 Mins", desc: "Warm herbal oil stream on the forehead for deep mental stillness" },
  { id: "panchakarma", name: "Panchakarma Detox Program", duration: "7 - 14 Days", desc: "Complete mind-body purification & rejuvenation" },
  { id: "uzhichil", name: "Uzhichil Traditional Oil Massage", duration: "60 Mins", desc: "Full-body rhythmic marma therapy for vitality" },
  { id: "kizhi", name: "Kizhi / Podikizhi Herbal Therapy", duration: "60 Mins", desc: "Warm herbal poultice massage for joint & muscle relief" },
  { id: "prasava", name: "Prasava Raksha (Postnatal Care)", duration: "Custom", desc: "Traditional Kerala postpartum healing & recovery" },
  { id: "weekend", name: "3-Day Rejuvenation Weekend", duration: "3 Days", desc: "Massages, organic meals & restorative herbal teas" },
];

export default function ConciergeDrawer() {
  const {
    isOpen,
    closeConcierge,
    activeTab,
    setActiveTab,
    selectedRoom,
    setSelectedRoom,
    selectedTreatment,
    setSelectedTreatment,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guests,
    setGuests,
    isRoomLocked,
  } = useConcierge();

  const [notes, setNotes] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const selectedRoomData = rooms.find(
    (r) => r.name.toLowerCase() === selectedRoom.toLowerCase() || r.slug === selectedRoom.toLowerCase()
  ) || rooms[0];

  // Lock body & html scroll completely when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = "";
    if (activeTab === "room") {
      message = `Hello Mother's Inn Homestay!%0A%0AI would like to reserve a stay:%0A` +
        `• *Guest Name:* ${guestName || "Guest"}%0A` +
        (guestPhone ? `• *Mobile Number:* ${guestPhone}%0A` : "") +
        `• *Selected Suite:* ${selectedRoom}%0A` +
        `• *Check-in:* ${checkInDate || "Flexible / Not selected"}%0A` +
        `• *Check-out:* ${checkOutDate || "Flexible / Not selected"}%0A` +
        `• *Guests:* ${guests}%0A` +
        (notes ? `• *Special Notes:* ${encodeURIComponent(notes)}%0A` : "") +
        `%0APlease let me know the availability and best package rate. Thank you!`;
    } else {
      message = `Hello Mother's Ayurveda!%0A%0AI would like to enquire about Ayurvedic wellness:%0A` +
        `• *Guest Name:* ${guestName || "Guest"}%0A` +
        (guestPhone ? `• *Mobile Number:* ${guestPhone}%0A` : "") +
        `• *Treatment / Program:* ${selectedTreatment}%0A` +
        `• *Preferred Date:* ${checkInDate || "Upcoming visit"}%0A` +
        `• *Participants:* ${guests}%0A` +
        (notes ? `• *Health Goals / Notes:* ${encodeURIComponent(notes)}%0A` : "") +
        `%0APlease share details and consultation schedule. Thank you!`;
    }

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    closeConcierge();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="VIP Reservation Concierge"
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeConcierge}
            className="fixed inset-0 bg-[#1E1B18]/50 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            data-lenis-prevent="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 35 }}
            className="relative w-full max-w-xl h-full bg-[#FFFDF7] shadow-2xl flex flex-col z-10 border-l border-[#F3BA2F]/30 overflow-hidden"
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Top decorative gold hairline */}
            <div className="h-1.5 w-full gold-gradient-bg flex-shrink-0" />

            {/* Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#F0EAE1] flex items-center justify-between bg-white/80 backdrop-blur-md flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center text-[#D99E10] border border-[#F3BA2F]/40 font-serif text-sm font-semibold">
                  M
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-[#24211C]">
                    VIP Reservation Concierge
                  </h2>
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#D99E10] font-medium">
                    Fort Kochi · Direct Best Rates
                  </p>
                </div>
              </div>

              <button
                onClick={closeConcierge}
                className="w-9 h-9 rounded-full bg-[#F7F1E5] hover:bg-[#F3BA2F] hover:text-[#24211C] text-[#6D665A] flex items-center justify-center transition-all duration-200 cursor-pointer"
                aria-label="Close concierge drawer"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="px-6 sm:px-8 pt-4 pb-2 border-b border-[#F0EAE1] bg-[#FAF6EE] flex gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab("room")}
                className={`flex-1 py-3 px-4 rounded-md font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "room"
                    ? "bg-white text-[#24211C] shadow-sm border border-[#F3BA2F]/40"
                    : "text-[#6D665A] hover:text-[#24211C]"
                }`}
              >
                <svg className="w-4 h-4 text-[#F3BA2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 20v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 14h18M6 10V7a2 2 0 012-2h8a2 2 0 012 2v3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Homestay Suite
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("ayurveda")}
                className={`flex-1 py-3 px-4 rounded-md font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "ayurveda"
                    ? "bg-white text-[#24211C] shadow-sm border border-[#F3BA2F]/40"
                    : "text-[#6D665A] hover:text-[#24211C]"
                }`}
              >
                <svg className="w-4 h-4 text-[#F3BA2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 00-9-9zm0 4v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Mother&apos;s Ayurveda
              </button>
            </div>

            {/* Scrollable Form Body with Lenis scroll prevention */}
            <form
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onSubmit={handleWhatsAppSubmit}
              className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6 space-y-6"
            >
              {/* Guest Details: Full Name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-1.5">
                    Your Full Name <span className="text-[#D99E10]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E8DFC8] rounded-md text-sm text-[#24211C] focus:border-[#F3BA2F] focus:ring-1 focus:ring-[#F3BA2F] outline-none transition-all placeholder:text-[#A89F91]"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E8DFC8] rounded-md text-sm text-[#24211C] focus:border-[#F3BA2F] focus:ring-1 focus:ring-[#F3BA2F] outline-none transition-all placeholder:text-[#A89F91]"
                  />
                </div>
              </div>

              {/* Selection based on tab */}
              {activeTab === "room" ? (
                <div>
                  {isRoomLocked ? (
                    /* Specific Room Mode: ONLY the chosen room is shown, no switching */
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-semibold">
                          Selected Room
                        </label>
                        <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#FAF6EE] text-[#8C5F05] font-semibold border border-[#F3BA2F]/30">
                          Specific Room Booking
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-white to-[#FFFBF0] border-2 border-[#F3BA2F] shadow-sm flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#E8DFC8] bg-[#E8DFC8]">
                            {selectedRoomData.images[0] && (
                              <Image
                                src={selectedRoomData.images[0]}
                                alt={selectedRoomData.name}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-serif text-lg font-bold text-[#24211C]">
                                {selectedRoomData.name}
                              </span>
                              <span className="text-[10px] font-sans px-2 py-0.2 rounded bg-[#F3BA2F] text-[#24211C] font-bold">
                                Suite {selectedRoomData.id}
                              </span>
                            </div>
                            <p className="text-xs text-[#6D665A] mb-1 line-clamp-1">
                              {selectedRoomData.shortDescription}
                            </p>
                            <p className="text-[11px] font-sans text-[#8C5F05] font-semibold">
                              {selectedRoomData.bedType} &nbsp;·&nbsp; Up to {selectedRoomData.capacity} Guests
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* General Room Mode: Let user select a room */
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-2">
                        Select Your Room / Suite
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {rooms.map((room) => {
                          const isSelected = selectedRoom === room.name;
                          return (
                            <div
                              key={room.id}
                              onClick={() => setSelectedRoom(room.name)}
                              className={`cursor-pointer p-3.5 rounded-lg border transition-all relative flex flex-col justify-between ${
                                isSelected
                                  ? "bg-white border-[#F3BA2F] ring-2 ring-[#F3BA2F]/30 shadow-md"
                                  : "bg-white/80 border-[#E8DFC8] hover:border-[#F3BA2F]/50"
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-serif text-base font-semibold text-[#24211C]">
                                    {room.name}
                                  </span>
                                  {isSelected && (
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#F3BA2F]" />
                                  )}
                                </div>
                                <p className="text-[11px] text-[#6D665A] line-clamp-1 mb-2">
                                  {room.shortDescription}
                                </p>
                              </div>
                              <div className="flex items-center justify-between text-[11px] font-sans text-[#D99E10] font-medium pt-2 border-t border-[#F0EAE1]">
                                <span>{room.bedType}</span>
                                <span>Up to {room.capacity} Guests</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-2">
                    Choose Ayurvedic Therapy / Program
                  </label>
                  <div className="space-y-2.5">
                    {ayurvedaTreatments.map((t) => {
                      const isSelected = selectedTreatment === t.name;
                      return (
                        <div
                          key={t.id}
                          onClick={() => setSelectedTreatment(t.name)}
                          className={`cursor-pointer p-3.5 rounded-lg border transition-all flex items-start justify-between gap-3 ${
                            isSelected
                              ? "bg-white border-[#F3BA2F] ring-2 ring-[#F3BA2F]/30 shadow-md"
                              : "bg-white/80 border-[#E8DFC8] hover:border-[#F3BA2F]/50"
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-serif text-sm font-semibold text-[#24211C]">
                                {t.name}
                              </span>
                              <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-[#FAF6EE] text-[#D99E10] font-medium border border-[#F3BA2F]/30">
                                {t.duration}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#6D665A]">
                              {t.desc}
                            </p>
                          </div>
                          <div className={`w-4 h-4 rounded-full border mt-1 flex items-center justify-center flex-shrink-0 ${
                            isSelected ? "border-[#F3BA2F] bg-[#F3BA2F]" : "border-[#C8BFB0]"
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Dates & Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-1.5">
                    {activeTab === "room" ? "Check-in Date" : "Preferred Date"}
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#E8DFC8] rounded-md text-xs text-[#24211C] focus:border-[#F3BA2F] outline-none cursor-pointer"
                  />
                </div>
                {activeTab === "room" ? (
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-1.5">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#E8DFC8] rounded-md text-xs text-[#24211C] focus:border-[#F3BA2F] outline-none cursor-pointer"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-1.5">
                      Total Guests
                    </label>
                    <div className="flex items-center h-[41px] border border-[#E8DFC8] rounded-md bg-white px-2 justify-between">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-7 h-7 rounded hover:bg-[#FAF6EE] text-[#24211C] font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-[#24211C]">{guests} Guest{guests > 1 ? "s" : ""}</span>
                      <button
                        type="button"
                        onClick={() => setGuests(guests + 1)}
                        className="w-7 h-7 rounded hover:bg-[#FAF6EE] text-[#24211C] font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {activeTab === "room" && (
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-1.5">
                    Number of Guests (Max {selectedRoomData.capacity})
                  </label>
                  <div className="flex items-center h-[42px] border border-[#E8DFC8] rounded-md bg-white px-3 justify-between max-w-[200px]">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded hover:bg-[#FAF6EE] text-[#24211C] text-lg font-bold flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold text-[#24211C]">{guests} Guest{guests > 1 ? "s" : ""}</span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(selectedRoomData.capacity, guests + 1))}
                      className="w-8 h-8 rounded hover:bg-[#FAF6EE] text-[#24211C] text-lg font-bold flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Special Requests */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#24211C] font-medium mb-1.5">
                  Special Notes / Dietary / Health Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Late evening check-in, authentic Kerala vegetarian breakfast, specific muscle soreness..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#E8DFC8] rounded-md text-xs text-[#24211C] focus:border-[#F3BA2F] outline-none"
                />
              </div>

              {/* Trust Badge */}
              <div className="p-3.5 rounded-lg bg-[#FFFBF0] border border-[#F3BA2F]/30 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3BA2F] text-[#24211C] flex items-center justify-center flex-shrink-0">
                  <StarIcon className="w-4 h-4 text-[#24211C]" />
                </div>
                <div className="text-xs text-[#6D665A] leading-relaxed">
                  <span className="font-semibold text-[#24211C] block">Direct VIP Booking Perks:</span>
                  Best rate assurance, complimentary welcome herbal drink, and personal host concierge.
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-md gold-shimmer-btn text-[#24211C] font-sans text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2.5 shadow-lg shadow-[#F3BA2F]/25 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Confirm via WhatsApp Concierge
                </button>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full py-3.5 px-6 rounded-md border border-[#E8DFC8] bg-white text-[#24211C] font-sans text-xs uppercase tracking-[0.14em] font-medium flex items-center justify-center gap-2 hover:border-[#F3BA2F] hover:text-[#D99E10] transition-all"
                >
                  <svg className="w-4 h-4 text-[#D99E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Call Directly: {siteConfig.phone}
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
