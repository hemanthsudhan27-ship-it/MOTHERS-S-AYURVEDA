import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const highlights = [
  "Thoughtfully designed spaces",
  "Warm local hospitality",
  "Comfortable private rooms",
  "An ideal base for Kerala",
];

export default function AboutSection() {
  return (
    <section
      className="bg-[#F7F1E5] py-20 lg:py-32 overflow-hidden"
      aria-labelledby="about-section-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header row */}
        <ScrollReveal direction="up">
          <div className="flex items-start gap-6 mb-16 lg:mb-20">
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-3">
                Our Story
              </p>
              <h2
                id="about-section-heading"
                className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#24211C]"
              >
                More Than
                <br />a Stay.
              </h2>
            </div>
            {/* Decorative large number */}
            <span className="hidden lg:block font-serif text-[120px] leading-none text-[#E8DFC8] select-none mt-[-0.2em]" aria-hidden="true">
              02
            </span>
          </div>
        </ScrollReveal>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-start">
          {/* Left — image composition */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative pb-10 lg:pb-0">
              {/* Primary large image */}
              <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/amenities/8e01c837-1279-4ac7-896b-b75f5c86e76d.jpg"
                  alt="The warm, welcoming interior of Mother's Ayurveda in Kerala"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
              {/* Secondary inset image — desktop only to avoid overflow */}
              <div className="hidden lg:block absolute -bottom-8 -right-10 w-2/5 aspect-[3/4] overflow-hidden border-4 border-[#FFFDF7]">
                <Image
                  src="/images/amenities/33c8f677-bb0a-4840-9ff9-ff1a20cdc958.jpg"
                  alt="Interior details at Mother's Ayurveda — thoughtfully curated spaces"
                  fill
                  className="object-cover object-center"
                  sizes="200px"
                />
              </div>
              {/* Gold vertical accent — desktop only */}
              <div
                className="hidden lg:block absolute -left-4 top-12 w-px h-20 bg-[#D6A33A]"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>

          {/* Right — text content */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="pt-0 lg:pt-8">
              <p className="font-sans text-sm lg:text-base leading-relaxed text-[#6D665A] mb-6">
                Mother\u0026apos;s Ayurveda was born from a simple idea: that genuine hospitality begins
                at home. Our family has welcomed guests from across India and around the world,
                offering not just a comfortable room, but a real sense of belonging.
              </p>
              <p className="font-sans text-sm leading-relaxed text-[#6D665A] mb-10">
                Every guest who walks through our doors is treated as family. That&apos;s the
                tradition we&apos;ve carried, and it&apos;s the experience you&apos;ll take home
                with you.
              </p>

              {/* Highlights */}
              <ul className="space-y-4 mb-10" aria-label="Our key offerings">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="font-sans text-[10px] text-[#D6A33A] tracking-widest" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-sm text-[#24211C]">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                id="about-section-cta"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-[#24211C] border border-[#D6A33A] px-6 py-3 hover:bg-[#D6A33A] hover:text-[#24211C] transition-all duration-300 group"
              >
                Discover Our Story
                <span
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
