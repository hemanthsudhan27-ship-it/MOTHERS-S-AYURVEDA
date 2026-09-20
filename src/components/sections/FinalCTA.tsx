import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-[#24211C] py-24 lg:py-36"
      aria-labelledby="final-cta-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/amenities/6e1a2035-55f4-44de-a95a-6a9a7d2a3070.jpg"
          alt="A beautiful view from Mother's Ayurveda in Kerala"
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#24211C]/90 via-[#24211C]/70 to-[#24211C]/90" />
      </div>

      {/* Gold decorative line — top */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D6A33A]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="max-w-3xl">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#D6A33A] mb-6">
              Ready to Visit?
            </p>
            <h2
              id="final-cta-heading"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] text-white mb-6"
            >
              Your Next
              <br />
              Stay Starts
              <br />
              <span className="text-[#D6A33A]">Here.</span>
            </h2>
            <p className="font-sans text-sm lg:text-base text-white/60 max-w-md leading-relaxed mb-10">
              Come for the stay. Leave with memories.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                id="final-cta-book"
                className="inline-flex items-center gap-2 bg-[#D6A33A] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B98424] transition-all duration-300 group"
              >
                Book Your Stay
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
              <Link
                href="/rooms"
                id="final-cta-rooms"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:border-[#D6A33A] hover:text-[#D6A33A] transition-all duration-300"
              >
                View Our Rooms
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Gold decorative line — bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D6A33A]/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
