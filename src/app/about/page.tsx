import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FinalCTA from "@/components/sections/FinalCTA";
import GallerySection from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "About Mother's Inn Homestay | Kerala, India",
  description:
    "Learn the story behind Mother's Inn Homestay — a Kerala family home that has opened its doors to guests with warmth, care and genuine hospitality.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    title: "Warmth First",
    desc: "Every guest deserves to feel at home from the moment they arrive. That is not a policy — it is who we are.",
  },
  {
    title: "Authentic Kerala",
    desc: "We celebrate our heritage through food, décor and conversation. Kerala is not just where we are — it is who we are.",
  },
  {
    title: "Thoughtful Care",
    desc: "We pay attention to the small things: the freshness of your towels, the temperature of your room, the quality of your breakfast.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-[#F7F1E5] overflow-hidden" aria-label="About hero">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="up">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-4">
                About Us
              </p>
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#24211C] mb-6">
                About
                <br />
                Mother&apos;s.
              </h1>
              <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed max-w-md">
                A home that opened its doors and never quite closed them again.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/amenities/0fe29b00-db72-463a-abcd-bb5cb820be14.jpg"
                  alt="Mother's Inn Homestay — the welcoming entrance and facade of our Kerala property"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 700px"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#FFFDF7] py-20 lg:py-28" aria-labelledby="story-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
            <ScrollReveal direction="left">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-4">
                Our Story
              </p>
              <h2 id="story-heading" className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-[1.05] text-[#24211C] mb-8">
                A Home with
                <br />
                an Open Door.
              </h2>
              <div className="w-12 h-px bg-[#F3BA2F] mb-8" aria-hidden="true" />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-5">
                Mother\u0026apos;s Inn Homestay began as a family home — a place where hospitality was
                simply the natural way of life. Over the years, friends and travellers encouraged us
                to open our doors to guests who were seeking something different: not a hotel, not a
                resort, but a genuine home.
              </p>
              <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-5">
                So that is what we offer. A place where you are welcomed by name, where breakfast
                is made with care, where the conversations around the table are as nourishing as the
                food itself.
              </p>
              <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed">
                Kerala is a special corner of the world — rich in colour, flavour and spirit. We
                want every guest to experience that character, not from behind a hotel window, but
                from the warmth of a home.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-[#F7F1E5] py-20 lg:py-28" aria-labelledby="philosophy-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-4">
              Our Philosophy
            </p>
            <h2 id="philosophy-heading" className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#24211C] mb-14">
              How We Host.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-[#E8DFC8]">
            {philosophy.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="pt-8 pr-0 sm:pr-10 pb-10">
                  <span className="font-sans text-xs text-[#F3BA2F] tracking-widest mb-4 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#24211C] mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#6D665A] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <GallerySection />

      {/* CTA row */}
      <section className="bg-[#FFFDF7] py-16 lg:py-20" aria-label="Internal navigation">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/rooms"
                id="about-cta-rooms"
                className="inline-flex items-center gap-2 bg-[#F3BA2F] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#D9A21B] transition-all duration-300 group"
              >
                View Our Rooms
                <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/booking"
                id="about-cta-book"
                className="inline-flex items-center gap-2 border border-[#F3BA2F] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#F3BA2F] transition-all duration-300"
              >
                Make an Enquiry
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
