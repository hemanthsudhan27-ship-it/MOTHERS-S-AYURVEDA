"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    id: "01",
    title: "Genuine Family Warmth",
    subtitle: "Atithi Devo Bhava",
    description:
      "We treat every traveler like a cherished family guest. No commercial corporate impersonality — just unhurried conversations, tailored travel advice, and sincere Kerala care.",
  },
  {
    id: "02",
    title: "Classical Ayurvedic Roots",
    subtitle: "Traditional Vaidya Lineage",
    description:
      "Our on-site Ayurvedic treatments are overseen by qualified doctors and performed by traditional therapists using time-honored cold-pressed herbal formulations.",
  },
  {
    id: "03",
    title: "Fort Kochi at Your Door",
    subtitle: "5 Minutes to the Coast",
    description:
      "Peacefully nestled in Bishops Garden Lane, yet a brief walk from the Chinese fishing nets, sunset beaches, Santa Cruz Cathedral, and artisanal cafes.",
  },
  {
    id: "04",
    title: "Immaculate Comfort & Serenity",
    subtitle: "Tranquil Sleep Sanctuary",
    description:
      "High-thread linens, air-conditioned quiet rooms, immaculate private baths, and a calm garden courtyard to read, meditate, and recharge.",
  },
];

export default function WhyStaySection() {
  return (
    <section
      className="bg-[#1C1917] text-white py-24 lg:py-36 relative overflow-hidden"
      aria-labelledby="why-stay-heading"
    >
      {/* Decorative Gold Ambient Radial Glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(243, 186, 47, 0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#F3BA2F] text-[10px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F]" />
                The Mother&apos;s Difference
              </div>
              <h2
                id="why-stay-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08]"
              >
                Why Discerning Travelers
                <br />
                <span className="text-[#F3BA2F] italic">Choose Mother&apos;s Inn.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
                More than just a place to sleep — a sanctuary where the essence of Kerala hospitality, restorative Ayurvedic healing, and historical Fort Kochi meet.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Feature Columns with Gold Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <ScrollReveal key={f.id} direction="up" delay={i * 0.08}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F3BA2F]/50 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-[#F3BA2F]">
                      {f.id}
                    </span>
                    <div className="w-8 h-px bg-[#F3BA2F]/40 group-hover:w-12 group-hover:bg-[#F3BA2F] transition-all duration-300" />
                  </div>

                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D99E10] font-semibold mb-1">
                    {f.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#F3BA2F] transition-colors">
                    {f.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] font-sans text-[#F3BA2F] uppercase tracking-wider">
                  <span>Authentic Kerala</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
