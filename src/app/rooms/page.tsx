import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RoomCard from "@/components/rooms/RoomCard";
import rooms from "@/data/rooms";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Rooms | Mother's Ayurveda Kerala",
  description:
    "Explore all rooms at Mother's Ayurveda — from our cosy Couple Room to our spacious Family Room. Each space thoughtfully prepared for your comfort.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#F7F1E5] pt-32 lg:pt-40 pb-16 lg:pb-20" aria-label="Rooms listing hero">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <div className="grid lg:grid-cols-[1fr_1fr] items-end gap-6">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-4">
                  Our Rooms
                </p>
                <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#24211C]">
                  Thoughtfully
                  <br />
                  Prepared
                  <br />
                  Spaces.
                </h1>
              </div>
              <div className="lg:text-right">
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed max-w-md lg:ml-auto">
                  Each room at Mother\u0026apos;s Ayurveda has been designed with care — for the guest
                  who values comfort, quiet and genuine warmth over anything else.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="bg-[#FFFDF7] py-16 lg:py-24" aria-label="All available rooms">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            {rooms.map((room, i) => (
              <ScrollReveal key={room.id} direction="up" delay={i * 0.08}>
                <RoomCard room={room} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Note on availability */}
      <section className="bg-[#F7F1E5] py-12 lg:py-16" aria-label="Booking information">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <div className="border-l-2 border-[#D6A33A] pl-6 max-w-2xl">
              <p className="font-sans text-sm text-[#6D665A] leading-relaxed">
                Each room listed represents a single, individual offering. To enquire about
                availability for your preferred dates, please use our booking enquiry form or
                reach out directly via WhatsApp — we&apos;ll respond promptly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
