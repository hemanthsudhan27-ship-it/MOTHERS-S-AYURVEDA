"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useConcierge } from "@/context/ConciergeContext";
import { siteConfig } from "@/data/config";
import {
  WaterDropIcon,
  SparkleIcon,
  LeafIcon,
  HerbalBowlIcon,
  FlowerPetalIcon,
} from "@/components/ui/Icons";

interface TreatmentMatch {
  id: string;
  name: string;
  sanskrit: string;
  duration: string;
  description: string;
  herbs: string[];
  idealFor: string;
  quoteTemplate: string;
}

const goals: { id: string; label: string; icon: React.ComponentType<{ className?: string }>; match: TreatmentMatch }[] = [
  {
    id: "stress",
    label: "Stress, Burnout & Deep Sleep",
    icon: WaterDropIcon,
    match: {
      id: "shirodhara",
      name: "Shirodhara & Herbal Head Massage",
      sanskrit: "शिरोधारा",
      duration: "60 - 90 Mins",
      description:
        "A continuous, rhythmic stream of warm herbal medicated oil poured gently over the third eye, inducing profound parasympathetic relaxation and relieving mental fatigue.",
      herbs: ["Brahmi", "Ashwagandha", "Ksheerabala Oil", "Sandalwood"],
      idealFor: "Chronic insomnia, anxiety, screen fatigue, and nervous system reset.",
      quoteTemplate: "I am interested in Shirodhara Therapy for stress and insomnia relief.",
    },
  },
  {
    id: "rejuvenation",
    label: "Full-Body Vitality & Energy",
    icon: SparkleIcon,
    match: {
      id: "uzhichil",
      name: "Classical Uzhichil & Abhyanga",
      sanskrit: "उझिच्चिल",
      duration: "60 Mins",
      description:
        "Deep rhythmic Ayurvedic body therapy using warm customized herbal oils along the energy channels (Nadis) to invigorate circulation, tone muscles, and revitalize the spirit.",
      herbs: ["Dhanwantharam Thailam", "Sesame Oil", "Bala", "Manjistha"],
      idealFor: "Lethargy, muscle stiffness, lymphatic drainage, and full vitality.",
      quoteTemplate: "I would like to enquire about Classical Uzhichil & Abhyanga therapy.",
    },
  },
  {
    id: "pain",
    label: "Joint, Spine & Muscle Relief",
    icon: LeafIcon,
    match: {
      id: "kizhi",
      name: "Podikizhi & Elakizhi Herbal Poultice",
      sanskrit: "किऴि",
      duration: "60 - 75 Mins",
      description:
        "Warm linen boluses filled with therapeutic herbal powders and fresh medicinal leaves, gently rhythmically pressed onto pain points to alleviate inflammation and tension.",
      herbs: ["Moringa Leaves", "Nirgundi", "Kottamchukkadi", "Rock Salt"],
      idealFor: "Lower back pain, shoulder stiffness, arthritis, and sports recovery.",
      quoteTemplate: "I would like consultation for Kizhi / Herbal Poultice therapy for joint and back relief.",
    },
  },
  {
    id: "detox",
    label: "Complete Detox & Cleanse",
    icon: HerbalBowlIcon,
    match: {
      id: "panchakarma",
      name: "Panchakarma Classical Cleanse",
      sanskrit: "पंचकर्म",
      duration: "7 - 14 Days",
      description:
        "The gold standard of Ayurvedic healing. A multi-phase clinical detoxification that eliminates accumulated metabolic toxins (Ama), restores gut agni, and rebalances the doshas.",
      herbs: ["Triphala", "Guggulu", "Medicated Ghee", "Herbal Steam"],
      idealFor: "Total physiological reboot, metabolism correction, and immune defense.",
      quoteTemplate: "I am interested in the 7-14 Day Panchakarma Detox Program.",
    },
  },
  {
    id: "postnatal",
    label: "Women's Wellness & Postpartum",
    icon: FlowerPetalIcon,
    match: {
      id: "prasava",
      name: "Prasava Raksha & Holistic Care",
      sanskrit: "प्रसव रक्षा",
      duration: "Custom Program",
      description:
        "Traditional Kerala postpartum regimen combining warm herbal medicated oil wraps, belly binding, medicated herbal baths, and specialized nutritional tonics.",
      herbs: ["Jeerakarishtam", "Dhanwantharam 101", "Murivenna", "Turmeric"],
      idealFor: "New mothers restoring pelvic strength, vital energy, and maternal glow.",
      quoteTemplate: "I would like to enquire about the Prasava Raksha Postnatal Care Program.",
    },
  },
];

const botanicals = [
  { name: "Ashwagandha", benefit: "Restores vitality, balances cortisol & calms the nervous system." },
  { name: "Brahmi (Bacopa)", benefit: "Enhances mental clarity, soothes headaches & promotes restorative sleep." },
  { name: "Dhanwantharam", benefit: "Classic 40+ herb elixir nourishing joints, tissues, and muscles." },
  { name: "Triphala", benefit: "Ancient three-fruit blend for pure cellular detoxification and gut agni." },
];

export default function AyurvedaInteractiveSection() {
  const [selectedGoal, setSelectedGoal] = useState<string>("stress");
  const { openConcierge } = useConcierge();

  const activeMatch = goals.find((g) => g.id === selectedGoal)?.match || goals[0].match;

  const handleConsultWhatsApp = () => {
    const text = `Hello Mother's Ayurveda!%0A%0A${activeMatch.quoteTemplate}%0A%0APlease let me know available slots and consultation details.`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="bg-[#FFFDF7] py-20 lg:py-32 relative overflow-hidden"
      aria-labelledby="ayurveda-interactive-heading"
    >
      {/* Decorative Gold Ambient Background */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(243, 186, 47, 0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EE] border border-[#F3BA2F]/30 text-[#8C5F05] text-[10px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F]" />
              Mother&apos;s Ayurveda Sanctuary
            </div>
            <h2
              id="ayurveda-interactive-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211C] leading-[1.08] mb-6"
            >
              Discover Your Personalized
              <br />
              <span className="text-[#D99E10] italic">Healing Sanctuary.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6D665A] leading-relaxed">
              Rooted in centuries-old Kerala Vaidya traditions. Select your body&apos;s current need below to explore tailored treatments administered with pure cold-pressed medicated oils.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Treatment Explorer Widget */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="glass-luxury-white rounded-3xl p-6 sm:p-10 border border-[#F3BA2F]/30 shadow-xl mb-16">
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-[#8C5F05] font-semibold mb-3">
                Step 1: What is your body seeking right now?
              </p>
              {/* Goal Pills */}
              <div className="flex flex-wrap gap-2.5">
                {goals.map((g) => {
                  const isSelected = selectedGoal === g.id;
                  const IconComp = g.icon;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGoal(g.id)}
                      className={`px-4 py-3 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                        isSelected
                          ? "bg-[#F3BA2F] text-[#24211C] font-semibold shadow-md shadow-[#F3BA2F]/30 scale-[1.02]"
                          : "bg-white text-[#6D665A] border border-[#E8DFC8] hover:border-[#F3BA2F]"
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isSelected ? "text-[#24211C]" : "text-[#D99E10]"}`} />
                      <span>{g.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Matched Treatment Detail Box */}
            <div className="bg-gradient-to-br from-[#FFFDF7] to-[#FAF6EE] rounded-2xl p-6 sm:p-8 border border-[#F3BA2F]/40 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E8DFC8]">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-serif text-xs text-[#D99E10] font-medium tracking-widest uppercase">
                      {activeMatch.sanskrit}
                    </span>
                    <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#F3BA2F]/20 text-[#8C5F05] font-semibold">
                      Duration: {activeMatch.duration}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#24211C]">
                    {activeMatch.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleConsultWhatsApp}
                    className="px-6 py-3.5 gold-shimmer-btn text-[#24211C] font-sans text-xs uppercase tracking-[0.14em] font-bold rounded-lg shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <span>Enquire This Therapy</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
                    onClick={() => openConcierge({ tab: "ayurveda", treatment: activeMatch.name })}
                    className="px-5 py-3.5 bg-white border border-[#E8DFC8] text-[#24211C] font-sans text-xs uppercase tracking-[0.12em] font-semibold rounded-lg hover:border-[#F3BA2F] transition-all cursor-pointer"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>

              {/* Treatment Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
                <div className="md:col-span-7">
                  <p className="font-sans text-sm text-[#24211C] font-medium mb-1">
                    How it works & heals:
                  </p>
                  <p className="font-sans text-sm text-[#6D665A] leading-relaxed mb-4">
                    {activeMatch.description}
                  </p>
                  <p className="font-sans text-xs text-[#8C5F05] font-semibold">
                    Ideal For: <span className="font-normal text-[#6D665A]">{activeMatch.idealFor}</span>
                  </p>
                </div>

                <div className="md:col-span-5 bg-white rounded-xl p-4 border border-[#E8DFC8]">
                  <p className="font-sans text-xs uppercase tracking-wider text-[#24211C] font-semibold mb-2">
                    Key Medicinal Botanicals:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeMatch.herbs.map((herb) => (
                      <span
                        key={herb}
                        className="text-xs font-sans px-3 py-1 rounded-full bg-[#FAF6EE] text-[#8C5F05] font-medium border border-[#F3BA2F]/30 flex items-center gap-1.5"
                      >
                        <LeafIcon className="w-3 h-3 text-[#D99E10]" />
                        <span>{herb}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Botanical Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {botanicals.map((b, i) => (
            <ScrollReveal key={b.name} direction="up" delay={0.08 * i}>
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-sm hover:border-[#F3BA2F] hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#FFFBF0] border border-[#F3BA2F]/40 flex items-center justify-center text-sm font-serif font-bold text-[#D99E10] mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-serif text-xl text-[#24211C] mb-2">{b.name}</h4>
                <p className="font-sans text-xs text-[#6D665A] leading-relaxed">{b.benefit}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Callout to Dedicated Ayurveda Page */}
        <div className="text-center">
          <Link
            href="/ayurveda"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-[#F3BA2F] bg-white text-[#24211C] font-sans text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#F3BA2F] transition-all duration-300 shadow-sm"
          >
            <span>Explore Complete Treatment Menu & Daily Regimens</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
