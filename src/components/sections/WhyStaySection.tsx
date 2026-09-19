import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    id: "01",
    title: "Warm Hospitality",
    description:
      "We treat every guest like family. Our home is your home — generous, genuine and never rushed.",
  },
  {
    id: "02",
    title: "Thoughtful Spaces",
    description:
      "Each room is carefully curated for comfort, with natural materials and a calm, inviting atmosphere.",
  },
  {
    id: "03",
    title: "Peaceful Stays",
    description:
      "Away from the noise, our home offers the kind of quiet that lets you truly rest and recharge.",
  },
  {
    id: "04",
    title: "Easy Access",
    description:
      "Centrally located in Kerala, we are a short distance from backwaters, temples and local markets.",
  },
];

export default function WhyStaySection() {
  return (
    <section
      className="bg-[#24211C] py-20 lg:py-32 overflow-hidden"
      aria-labelledby="why-stay-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="grid lg:grid-cols-[1fr_1fr] items-end gap-6 mb-16 lg:mb-24">
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-3">
                Why Choose Us
              </p>
              <h2
                id="why-stay-heading"
                className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white"
              >
                Why
                <br />
                Mother&apos;s
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="font-sans text-sm text-white/50 max-w-sm lg:ml-auto leading-relaxed">
                We believe a great homestay is more than just a place to sleep — it&apos;s a memory
                you carry home.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((f, i) => (
            <ScrollReveal key={f.id} direction="up" delay={i * 0.08}>
              <div className="border-t border-white/10 pt-8 pr-0 lg:pr-8 pb-8">
                <span className="font-sans text-xs text-[#D6A33A] tracking-widest mb-4 block">
                  {f.id}
                </span>
                {/* Decorative line */}
                <div className="w-8 h-px bg-[#D6A33A] mb-6" aria-hidden="true" />
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4">{f.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
