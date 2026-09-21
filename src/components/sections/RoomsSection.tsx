import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RoomCard from "@/components/rooms/RoomCard";
import rooms from "@/data/rooms";

export default function RoomsSection() {
  const featured = rooms.filter((r) => r.featured);

  return (
    <section
      className="bg-[#FFFDF7] py-20 lg:py-32"
      aria-labelledby="rooms-section-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1fr_1fr] items-end gap-6 mb-14 lg:mb-20">
          <ScrollReveal direction="up">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3">
              Our Rooms
            </p>
            <h2
              id="rooms-section-heading"
              className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#24211C]"
            >
              Thoughtfully
              <br />
              Prepared
              <br />
              Spaces.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <div className="lg:text-right">
              <p className="font-sans text-sm lg:text-base leading-relaxed text-[#6D665A] mb-6 lg:ml-auto lg:max-w-sm">
                Designed for comfort, rest and memorable stays. Each room at Mother&apos;s carries
                the warmth of home with the care of considered hospitality.
              </p>
              <Link
                href="/rooms"
                id="rooms-section-view-all"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-[#24211C] border-b border-[#F3BA2F] pb-0.5 hover:text-[#F3BA2F] transition-colors duration-300 group"
              >
                View All Rooms
                <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Room grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((room, i) => (
            <ScrollReveal key={room.id} direction="up" delay={i * 0.08}>
              <RoomCard room={room} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/rooms"
              id="rooms-section-all-rooms-cta"
              className="inline-flex items-center gap-2 border border-[#F3BA2F] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#F3BA2F] transition-all duration-300 group"
            >
              See All Room Options
              <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
