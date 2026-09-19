import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WelcomeSection() {
  return (
    <section
      className="bg-[#FFFDF7] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — small image */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[420px] rounded-none overflow-hidden">
              <Image
                src="/images/amenities/993c30d1-78f1-4041-aac1-15a1d6f44dd4.jpg"
                alt="A cosy corner inside Mother's Homestay showing warm interior details"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 350px"
              />
              {/* Decorative gold accent */}
              <div className="absolute bottom-0 left-0 w-px h-24 bg-[#D6A33A]" aria-hidden="true" />
            </div>
          </ScrollReveal>

          {/* Center — heading */}
          <ScrollReveal direction="up" delay={0}>
            <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-5">
                Welcome to Mother&apos;s
              </p>
              <h2
                id="welcome-heading"
                className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.0] text-[#24211C]"
              >
                A Place
                <br />
                to Slow
                <br />
                Down.
              </h2>
              {/* Decorative line */}
              <div className="w-12 h-px bg-[#D6A33A] mt-8 mb-0 lg:mt-10" aria-hidden="true" />
            </div>
          </ScrollReveal>

          {/* Right — description + CTA */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="flex flex-col gap-6">
              <p className="font-sans text-sm lg:text-base leading-relaxed text-[#6D665A]">
                Nestled in the heart of Kerala, Mother&apos;s Homestay offers a rare kind of
                hospitality — one that feels personal, unhurried and genuinely warm. Every corner of
                this home has been thoughtfully curated to help you rest, recharge and reconnect.
              </p>
              <p className="font-sans text-sm leading-relaxed text-[#6D665A]">
                Whether you&apos;re here to explore Kerala&apos;s backwaters, its spice-scented
                landscapes or simply to pause and breathe — this is the place to do it from.
              </p>
              <Link
                href="/about"
                id="welcome-learn-more"
                className="self-start font-sans text-xs tracking-[0.15em] uppercase text-[#24211C] border-b border-[#D6A33A] pb-0.5 hover:text-[#D6A33A] transition-colors duration-300 mt-2 group"
              >
                Discover Our Story
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
