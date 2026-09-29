import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AyurvedaEnquiryButton from "@/components/ayurveda/AyurvedaEnquiryButton";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Mother's Ayurveda | Authentic Ayurvedic Resort & Wellness Retreat Kerala",
  description:
    "Experience authentic Kerala Ayurveda at Mother's Ayurveda Resort. Traditional Panchakarma detoxification, Uzhichil deep-tissue herbal oil massage, Prasava Raksha afterbirth postnatal care, Yoga, and holistic healing in Fort Kochi, Kerala.",
  alternates: { canonical: "/ayurveda" },
};

const panchakarmaSteps = [
  {
    step: "01",
    name: "Vamana (Therapeutic Emesis)",
    desc: "Controlled expulsion of accumulated Kapha toxins from the upper respiratory and gastrointestinal tract.",
  },
  {
    step: "02",
    name: "Virechana (Purgation Therapy)",
    desc: "Targeted elimination of excess Pitta dosha from the liver, gallbladder, and small intestine to cleanse the blood.",
  },
  {
    step: "03",
    name: "Basti (Medicated Enemas)",
    desc: "The cornerstone of Panchakarma; nourishing herbal oils and decoctions administered to balance Vata and detox the colon.",
  },
  {
    step: "04",
    name: "Nasya (Nasal Administration)",
    desc: "Herbal extracts and oils instilled through nasal passages to clear head congestion, sinus pathways, and calm the mind.",
  },
  {
    step: "05",
    name: "Raktamokshana (Blood Purification)",
    desc: "Careful removal of blood-borne impurities and pitta stagnation for skin conditions, inflammation, and cellular vitality.",
  },
];

const otherTechniques = [
  {
    title: "Shirodhara",
    subtitle: "Third-Eye Herbal Flow",
    desc: "A continuous, warm stream of medicated herbal oil (or buttermilk) gently poured over the forehead to soothe the nervous system, alleviate insomnia, and melt away mental fatigue.",
    tag: "Stress & Sleep",
  },
  {
    title: "Kizhi (Podikizhi & Elakizhi)",
    subtitle: "Warm Herbal Bolus Poultices",
    desc: "Muslin bags filled with therapeutic herbs, medicated powders, and warm oils applied rhythmically to alleviate chronic back pain, joint stiffness, sciatica, and muscle inflammation.",
    tag: "Pain & Joints",
  },
  {
    title: "Njavarakizhi",
    subtitle: "Medicinal Rice Rejuvenation",
    desc: "A luxurious Kerala specialty where cooked medicinal Shashtika rice processed with milk and herbal decoction is massaged over the body to nourish tissues and slow aging.",
    tag: "Cellular Rebirth",
  },
  {
    title: "Abhyanga",
    subtitle: "Whole-Body Herbal Oleation",
    desc: "Synchronized full-body massage using warm dosha-specific oils to stimulate circulation, improve lymphatic drainage, lubricate joints, and impart a radiant glow.",
    tag: "Vitality & Glow",
  },
  {
    title: "Ksheeradhooma & Mukhalepam",
    subtitle: "Herbal Milk Steam & Facial Therapy",
    desc: "Gentle herbal steam infused with medicinal cow's milk combined with organic herbal face packs for facial paralysis, headaches, skin tonus, and sensory clarity.",
    tag: "Facial & Senses",
  },
  {
    title: "Ayurvedic Diet & Vaidya Consultation",
    subtitle: "Personalized Dosha Nutrition",
    desc: "One-on-one constitutional pulse diagnosis (Nadi Pariksha) and tailored sattvic meals prepared fresh daily with native Kerala herbs and organic regional produce.",
    tag: "Internal Harmony",
  },
];

const resortPackages = [
  {
    title: "Rejuvenation & Stress Detox",
    duration: "3 – 5 Days",
    tag: "Weekend Sanctuary",
    desc: "Designed for fast-paced urban souls seeking immediate restorative relief. Focuses on rhythmic Uzhichil massage, Shirodhara, daily morning Yoga, and revitalizing herbal cuisine.",
    includes: [
      "Daily 90-min Uzhichil & Herbal Massage",
      "Soothing Shirodhara Sessions",
      "Daily Sunrise Yoga & Pranayama",
      "Tridoshic Sattvic Breakfast & Herbal Teas",
      "Physician Pulse Diagnosis (Nadi Pariksha)",
    ],
  },
  {
    title: "Comprehensive Panchakarma Cleanse",
    duration: "7 – 14 Days",
    tag: "Deep Cellular Reset",
    desc: "The quintessential Ayurvedic purification journey. Includes complete preparatory Purvakarma, tailored cleansing protocols, custom herbal decoctions, and restorative resort rest.",
    includes: [
      "Complete 5-fold Panchakarma Treatments",
      "Snehana (Oleation) & Swedana (Herbal Steam)",
      "Daily Vaidya Medical Assessment",
      "Custom Herbal Medicinal Decoctions",
      "Full Board Organic Ayurvedic Diet",
      "Daily Yoga & Meditation Sessions",
    ],
    featured: true,
  },
  {
    title: "Prasava Raksha Postnatal Confinement",
    duration: "14 – 28 Days",
    tag: "Sacred Motherhood",
    desc: "A deeply nurturing residential confinement retreat for new mothers. Complete herbal bath therapies (Vethu Kuli), specialized postnatal Abhyanga, belly binding, lactation support, and gentle newborn care.",
    includes: [
      "Daily Postnatal Abhyanga with Dhanwantharam Thailam",
      "Traditional Vethu Kuli Medicated Herbal Baths",
      "Udara Veshtana (Abdominal Binding & Toning)",
      "Herbal Kashayams, Lehyams & Lactation Tonics",
      "Specialized Pathya Confinement Nutrition",
      "Gentle Newborn Massage & Bath Care",
      "Private Tranquil Homestay Room Sanctuary",
    ],
  },
  {
    title: "Immunity & Chronic Relief Retreat",
    duration: "14 – 21 Days",
    tag: "Holistic Transformation",
    desc: "An intensive healing retreat targeting chronic ailments, joint disorders, autoimmune vulnerability, and nervous exhaustion with profound long-term rasayana therapy.",
    includes: [
      "Advanced Kizhi, Njavarakizhi & Specialized Oils",
      "Deep Marma & Uzhichil Body Restructuring",
      "Continuous Physician Supervision",
      "Personalized Yoga & Breathwork Coaching",
      "Post-Retreat Lifestyle & Diet Plan",
      "Private Boutique Room Accommodation",
    ],
  },
];

export default function AyurvedaPage() {
  return (
    <div className="bg-[#FFFDF7] text-[#24211C]">
      {/* ─── Page Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#1E1B17]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ayurveda/hero.jpg"
            alt="Mother's Ayurveda resort wellness sanctuary in Kerala"
            fill
            className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B17] via-[#1E1B17]/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#F3BA2F]/40 bg-[#F3BA2F]/10 backdrop-blur-md mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA2F] animate-pulse" />
                <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#F3BA2F] font-medium">
                  Traditional Kerala Wellness Resort · Fort Kochi
                </p>
              </div>

              {/* Requirement: FIRST WE NEED MOTHER'S AYURVEDA AS H1 */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-[#FFFDF7] mb-6 tracking-tight">
                Mother&apos;s Ayurveda
              </h1>

              <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-8 font-light">
                An authentic Ayurvedic healing sanctuary where ancient Vedic wisdom meets the serene comfort of our resort. Revitalize mind, body, and spirit with authentic{" "}
                <strong className="text-[#F3BA2F] font-medium">Panchakarma</strong>, therapeutic{" "}
                <strong className="text-[#F3BA2F] font-medium">Uzhichil</strong>, restorative{" "}
                <strong className="text-[#F3BA2F] font-medium">Yoga</strong>, sacred{" "}
                <strong className="text-[#F3BA2F] font-medium">Prasava Raksha (Afterbirth Care)</strong>, and time-honored Ayurvedic techniques.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <AyurvedaEnquiryButton
                  treatmentName="Panchakarma & Ayurvedic Resort Stay"
                  variant="primary"
                  label="Enquire About Retreat"
                  className="px-7 py-3.5"
                />
                <a
                  href="#treatments"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-sans text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:border-[#F3BA2F] hover:text-[#F3BA2F] transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Treatments
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Badges Bar */}
          <div className="mt-14 lg:mt-20 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-white/80">
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-[#F3BA2F] mb-1">Panchakarma</p>
              <p className="font-sans text-xs text-white/60 tracking-wide uppercase">5-Fold Detoxification</p>
            </div>
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-[#F3BA2F] mb-1">Uzhichil</p>
              <p className="font-sans text-xs text-white/60 tracking-wide uppercase">Kerala Deep Oil Therapy</p>
            </div>
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-[#F3BA2F] mb-1">Prasava Raksha</p>
              <p className="font-sans text-xs text-white/60 tracking-wide uppercase">Afterbirth &amp; Postnatal Care</p>
            </div>
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-[#F3BA2F] mb-1">Yoga</p>
              <p className="font-sans text-xs text-white/60 tracking-wide uppercase">Sunrise &amp; Sunset Asanas</p>
            </div>
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-[#F3BA2F] mb-1">Resort Living</p>
              <p className="font-sans text-xs text-white/60 tracking-wide uppercase">Sattvic Cuisine &amp; Rest</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Resort Philosophy Section ──────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F7F1E5]" aria-labelledby="resort-sanctuary-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3 block">
                The Healing Sanctuary
              </span>
              <h2
                id="resort-sanctuary-heading"
                className="font-serif text-4xl lg:text-5xl xl:text-6xl text-[#24211C] leading-[1.1] mb-6"
              >
                More Than a Treatment —
                <br />
                <span className="italic font-normal">A Complete Resort Retreat.</span>
              </h2>
              <div className="w-12 h-px bg-[#F3BA2F] mb-6" aria-hidden="true" />
              <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                Ayurveda is not an isolated hourly therapy; it is a way of living that requires peace, pristine nature, wholesome nutrition, and unhurried rest. At Mother&apos;s Ayurveda, we operate as a dedicated wellness retreat where your therapeutic sessions are integrated with calm resort accommodation in Fort Kochi.
              </p>
              <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-8">
                Surrounded by swaying coconut palms, coastal breezes, and birdsong, you receive personalized care from qualified Ayurvedic Vaidyas (physicians). From dosha-specific freshly prepared meals to meditative gardens, every detail is curated to nurture deep cellular renewal.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-[#E8DFC8]">
                  <p className="font-serif text-lg text-[#24211C] mb-1">Qualified Vaidyas</p>
                  <p className="font-sans text-xs text-[#6D665A]">Direct consultation and ongoing diagnostic monitoring throughout your stay.</p>
                </div>
                <div className="p-4 bg-white border border-[#E8DFC8]">
                  <p className="font-serif text-lg text-[#24211C] mb-1">Sattvic Cuisine</p>
                  <p className="font-sans text-xs text-[#6D665A]">Freshly cooked therapeutic Kerala meals that support digestion and toxin elimination.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden shadow-2xl border border-[#E8DFC8]">
                <Image
                  src="/images/ayurveda/hero.jpg"
                  alt="Authentic Kerala Ayurvedic treatment room with traditional wooden droni and herbal oils"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <p className="font-serif text-lg text-[#F3BA2F]">Authentic Kerala Droni & Herbal Preparations</p>
                  <p className="font-sans text-xs text-white/80">Carved teak and rosewood massage tables consecrated for therapeutic healing.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Pillars of Healing: Panchakarma, Uzhichil, Yoga ─────── */}
      <section id="treatments" className="py-20 lg:py-32 bg-[#FFFDF7]" aria-label="Core Ayurvedic Treatments">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-28 lg:space-y-36">

          {/* 1. PANCHAKARMA */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal direction="left">
                <div className="relative aspect-[4/3] overflow-hidden shadow-xl border border-[#E8DFC8]">
                  <Image
                    src="/images/ayurveda/panchakarma.jpg"
                    alt="Authentic Panchakarma therapy preparation with herbal oils and kizhi boluses"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#F3BA2F] text-[#24211C] font-sans text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1">
                    Signature Detoxification
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <ScrollReveal direction="right">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3 block">
                  Pillar 01 · Cellular Purification
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#24211C] mb-6 leading-tight">
                  Panchakarma
                  <span className="block font-sans text-lg lg:text-xl text-[#6D665A] font-light mt-2">
                    The Fivefold System of Total Detoxification
                  </span>
                </h2>
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                  Panchakarma is the crown jewel of Ayurvedic science — an ancient, scientifically structured sequence designed to dislodge, liquefy, and eliminate metabolic impurities (<em>Ama</em>) stored deep within muscle, adipose, and nerve tissues.
                </p>
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                  Conducted under the careful supervision of our resident Vaidya, the treatment encompasses preparatory oleation and herbal steaming (<em>Purvakarma</em>), followed by the five primary therapeutic cleansing therapies customized to your constitutional imbalance.
                </p>

                <div className="space-y-3 mb-8 bg-[#F7F1E5] p-5 border-l-2 border-[#F3BA2F]">
                  <p className="font-sans text-xs tracking-wider uppercase text-[#24211C] font-semibold">
                    The 5 Purification Procedures:
                  </p>
                  <ul className="space-y-2 text-xs text-[#6D665A]">
                    {panchakarmaSteps.map((step) => (
                      <li key={step.step} className="flex items-start gap-2.5">
                        <span className="font-serif text-[#F3BA2F] font-semibold">{step.step}.</span>
                        <span>
                          <strong className="text-[#24211C]">{step.name}</strong> — {step.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4">
                  <AyurvedaEnquiryButton
                    treatmentName="Panchakarma Detox Program"
                    variant="primary"
                    label="Enquire About Panchakarma"
                  />
                  <span className="font-sans text-xs text-[#A09A8E]">7 to 21 Days Recommended</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 2. UZHICHIL */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal direction="left">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3 block">
                  Pillar 02 · Traditional Kerala Massage
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#24211C] mb-6 leading-tight">
                  Uzhichil
                  <span className="block font-sans text-lg lg:text-xl text-[#6D665A] font-light mt-2">
                    Kerala&apos;s Revered Deep-Tissue Oil Therapy
                  </span>
                </h2>
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                  Uzhichil is an illustrious therapeutic massage indigenous to Kerala. Practiced for millennia by traditional healers and Kalari masters, it combines rhythmic long strokes, focused kneading, and vital point stimulation using abundant warm medicated oils (<em>thailams</em>).
                </p>
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                  By systematically stimulating the body&apos;s 107 vital energy intersections (<em>Marma points</em>), Uzhichil unlocks energetic blockages, eases chronic muscular knots, drains lymph, lubricates joints, and tones the nervous system to confer lasting stamina and vigor.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border border-[#E8DFC8] p-4 bg-[#F7F1E5]">
                    <span className="font-serif text-2xl text-[#F3BA2F] block mb-1">107</span>
                    <span className="font-sans text-xs text-[#24211C] font-medium block">Marma Points</span>
                    <span className="font-sans text-[11px] text-[#6D665A]">Stimulated to restore energy circulation</span>
                  </div>
                  <div className="border border-[#E8DFC8] p-4 bg-[#F7F1E5]">
                    <span className="font-serif text-2xl text-[#F3BA2F] block mb-1">Medicated</span>
                    <span className="font-sans text-xs text-[#24211C] font-medium block">Herbal Thailams</span>
                    <span className="font-sans text-[11px] text-[#6D665A]">Simmered with indigenous Kerala botanicals</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <AyurvedaEnquiryButton
                    treatmentName="Uzhichil Traditional Oil Massage"
                    variant="primary"
                    label="Book Uzhichil Session"
                  />
                  <span className="font-sans text-xs text-[#A09A8E]">60 / 90 Minute Sessions</span>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="right">
                <div className="relative aspect-[4/3] overflow-hidden shadow-xl border border-[#E8DFC8]">
                  <Image
                    src="/images/ayurveda/uzhichil.jpg"
                    alt="Traditional Kerala Uzhichil oil massage therapy on wooden droni"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#24211C] text-[#F3BA2F] font-sans text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 border border-[#F3BA2F]">
                    Marma Rejuvenation
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 3. YOGA & MEDITATION */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal direction="left">
                <div className="relative aspect-[4/3] overflow-hidden shadow-xl border border-[#E8DFC8]">
                  <Image
                    src="/images/ayurveda/yoga.jpg"
                    alt="Tranquil sunrise yoga and meditation session in Kerala resort pavilion"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#F3BA2F] text-[#24211C] font-sans text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1">
                    Daily Resort Practice
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <ScrollReveal direction="right">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3 block">
                  Pillar 03 · Mind & Breath Equilibrium
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#24211C] mb-6 leading-tight">
                  Yoga &amp; Meditation
                  <span className="block font-sans text-lg lg:text-xl text-[#6D665A] font-light mt-2">
                    Harmonizing Prana With Ayurvedic Healing
                  </span>
                </h2>
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                  In classical Vedic wisdom, Ayurveda and Yoga are sister sciences — Ayurveda purifies and heals the physical vessel, while Yoga steadies and illuminates the mind. Neither is complete without the other.
                </p>
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                  Every morning at dawn and in the quiet hush of dusk, our open-air wooden pavilion welcomes guests for gentle Hatha yoga asanas, Pranayama (breath regulation), and guided contemplative meditation. The practices are tailored to support your specific Ayurvedic treatment program.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-[#24211C]">
                    <span className="w-2 h-2 rounded-full bg-[#F3BA2F]" />
                    <span><strong>Sunrise Asanas</strong> — Gentle mobility, dosha alignment, and spine awakenings</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#24211C]">
                    <span className="w-2 h-2 rounded-full bg-[#F3BA2F]" />
                    <span><strong>Pranayama (Breathwork)</strong> — Anulom Vilom, Bhramari, and Kapalabhati for mental clarity</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#24211C]">
                    <span className="w-2 h-2 rounded-full bg-[#F3BA2F]" />
                    <span><strong>Sunset Dhyana</strong> — Guided mindfulness meditation amidst peaceful nature</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <AyurvedaEnquiryButton
                    treatmentName="Yoga & Meditation Retreat"
                    variant="primary"
                    label="Join Yoga Retreat"
                  />
                  <span className="font-sans text-xs text-[#A09A8E]">Beginners & Advanced Welcome</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 4. PRASAVA RAKSHA (AFTERBIRTH CARE) */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal direction="left">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3 block">
                  Pillar 04 · Sacred Postnatal Healing
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#24211C] mb-6 leading-tight">
                  Prasava Raksha
                  <span className="block font-sans text-lg lg:text-xl text-[#6D665A] font-light mt-2">
                    Traditional Kerala Afterbirth &amp; Postnatal Confinement Care
                  </span>
                </h2>
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                  In Kerala&apos;s classical Ayurvedic tradition, the period following childbirth (<em>Sutika Kala</em>) is revered as a sacred window of biological rebirth. Childbirth expends profound physical and nervous energy, creating an acute aggravation of Vata dosha. <strong>Prasava Raksha</strong> is a holistic confinement regimen designed to nurture the mother back to radiant health, rebuild bone density, tone stretched pelvic muscles, and foster emotional serenity.
                </p>
                <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed mb-6">
                  At Mother&apos;s Ayurveda resort sanctuary, new mothers receive dedicated, maternal care reminiscent of an affectionate ancestral home. Treatments are performed by experienced female therapists under the guidance of our Ayurvedic physician.
                </p>

                <div className="space-y-3 mb-8 bg-[#F7F1E5] p-5 border-l-2 border-[#F3BA2F]">
                  <p className="font-sans text-xs tracking-wider uppercase text-[#24211C] font-semibold">
                    Core Elements of Prasava Raksha:
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#6D665A]">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F3BA2F] font-bold">·</span>
                      <span>
                        <strong className="text-[#24211C]">Postnatal Abhyanga:</strong> Full-body medicated oil massage with Dhanwantharam Kuzhambu &amp; Balaswagandhadi to ease backache and restore muscle tone.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F3BA2F] font-bold">·</span>
                      <span>
                        <strong className="text-[#24211C]">Vethu Kuli (Medicated Herbal Baths):</strong> Warm water infused with tamarind leaves, medicinal barks, and turmeric to relieve pelvic soreness and accelerate healing.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F3BA2F] font-bold">·</span>
                      <span>
                        <strong className="text-[#24211C]">Udara Veshtana (Belly Binding):</strong> Traditional cotton cloth abdominal wrapping to support the uterus, reduce visceral sagging, and encourage core realignment.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F3BA2F] font-bold">·</span>
                      <span>
                        <strong className="text-[#24211C]">Lactation &amp; Uterine Tonics:</strong> Time-honored Kashayams, Jeerakarishtam, and Soubhagya Sunthi Lehyam to enhance breast milk supply, improve digestion, and boost immunity.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F3BA2F] font-bold">·</span>
                      <span>
                        <strong className="text-[#24211C]">Navajatha Shishu Paricharya (Baby Care):</strong> Gentle virgin coconut oil (Kera Thailam) and Nalpamaram herbal baths for newborn vitality and calm sleep.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4">
                  <AyurvedaEnquiryButton
                    treatmentName="Prasava Raksha (Afterbirth Care)"
                    variant="primary"
                    label="Enquire for Postnatal Care"
                  />
                  <span className="font-sans text-xs text-[#A09A8E]">14 to 28 Days Recommended</span>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="right">
                <div className="relative aspect-[4/3] overflow-hidden shadow-xl border border-[#E8DFC8]">
                  <Image
                    src="/images/ayurveda/prasava-raksha.jpg"
                    alt="Traditional Kerala Ayurvedic Prasava Raksha postnatal care setting with herbal oils and warm bronze urli"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#24211C] text-[#F3BA2F] font-sans text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 border border-[#F3BA2F]">
                    Nurturing Postnatal Care
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Other Ayurveda Techniques Grid ──────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F7F1E5]" aria-labelledby="other-techniques-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3 block">
              Time-Honored Therapies
            </span>
            <h2 id="other-techniques-heading" className="font-serif text-4xl lg:text-5xl text-[#24211C] mb-4">
              Other Ayurvedic Techniques
            </h2>
            <p className="font-sans text-sm text-[#6D665A] leading-relaxed">
              Complementing our core treatments, our physicians prescribe targeted therapies using fresh medicinal herbs, sacred oils, and ancient modalities.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherTechniques.map((item, idx) => (
              <ScrollReveal key={item.title} direction="up" delay={idx * 0.05}>
                <div className="bg-[#FFFDF7] p-8 border border-[#E8DFC8] h-full flex flex-col justify-between hover:border-[#F3BA2F] transition-colors duration-300 group shadow-sm hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#F3BA2F] font-semibold bg-[#F3BA2F]/10 px-2.5 py-1">
                        {item.tag}
                      </span>
                      <span className="font-serif text-xs text-[#A09A8E]">0{idx + 1}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#24211C] group-hover:text-[#F3BA2F] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#F3BA2F] tracking-wide mb-4 font-medium">
                      {item.subtitle}
                    </p>
                    <p className="font-sans text-sm text-[#6D665A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#E8DFC8]/60 flex items-center justify-between">
                    <AyurvedaEnquiryButton
                      treatmentName={item.title}
                      variant="outline"
                      label="Enquire"
                      className="text-[10px] px-4 py-2"
                    />
                    <span className="font-sans text-[10px] text-[#A09A8E] tracking-wider uppercase">
                      Customized
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Resort Wellness Packages ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFDF7]" aria-labelledby="packages-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3 block">
              Immersive Wellness Stays
            </span>
            <h2 id="packages-heading" className="font-serif text-4xl lg:text-5xl text-[#24211C] mb-4">
              Ayurvedic Resort Retreat Packages
            </h2>
            <p className="font-sans text-sm text-[#6D665A] leading-relaxed">
              Combine authentic daily Ayurvedic treatments with peaceful room stays, therapeutic nutrition, and personalized care at Mother&apos;s Inn.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {resortPackages.map((pkg, idx) => (
              <ScrollReveal key={pkg.title} direction="up" delay={idx * 0.08} className="h-full">
                <div
                  className={`h-full flex flex-col justify-between p-8 sm:p-10 border transition-all duration-300 relative ${
                    pkg.featured
                      ? "bg-[#24211C] text-white border-[#F3BA2F] shadow-2xl"
                      : "bg-[#F7F1E5] text-[#24211C] border-[#E8DFC8] hover:border-[#F3BA2F]"
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3.5 left-8 bg-[#F3BA2F] text-[#24211C] font-sans text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-sans text-[10px] tracking-[0.2em] uppercase font-semibold ${pkg.featured ? "text-[#F3BA2F]" : "text-[#6D665A]"}`}>
                        {pkg.tag}
                      </span>
                      <span className={`font-serif text-sm font-medium ${pkg.featured ? "text-[#F3BA2F]" : "text-[#24211C]"}`}>
                        {pkg.duration}
                      </span>
                    </div>

                    <h3 className={`font-serif text-2xl sm:text-3xl mb-4 ${pkg.featured ? "text-white" : "text-[#24211C]"}`}>
                      {pkg.title}
                    </h3>

                    <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-8 ${pkg.featured ? "text-white/70" : "text-[#6D665A]"}`}>
                      {pkg.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      <p className={`font-sans text-[10px] tracking-[0.2em] uppercase font-bold ${pkg.featured ? "text-[#F3BA2F]" : "text-[#24211C]"}`}>
                        Package Includes:
                      </p>
                      <ul className="space-y-2">
                        {pkg.includes.map((inc) => (
                          <li key={inc} className={`flex items-start gap-2.5 text-xs ${pkg.featured ? "text-white/80" : "text-[#6D665A]"}`}>
                            <svg className="w-3.5 h-3.5 text-[#F3BA2F] shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 8.5l3.5 3.5 6.5-7" />
                            </svg>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-current/10">
                    <AyurvedaEnquiryButton
                      treatmentName={pkg.title}
                      variant={pkg.featured ? "primary" : "gold"}
                      label={`Enquire for ${pkg.duration}`}
                      className="w-full text-center justify-center py-3"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── A Day at Mother's Ayurveda (Dinacharya) ─────────────── */}
      <section className="py-20 lg:py-24 bg-[#F7F1E5] border-t border-[#E8DFC8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <ScrollReveal direction="left">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3 block">
                The Sacred Rhythm
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#24211C] mb-6">
                Dinacharya:
                <br />
                A Day at the Resort
              </h2>
              <p className="font-sans text-sm text-[#6D665A] leading-relaxed mb-6">
                In classical Ayurveda, healing follows the solar rhythm. By aligning our sleep, meals, treatments, and contemplation with the cycles of nature, the body intuitively resets its circadian biological clock.
              </p>
              <div className="p-6 bg-white border border-[#E8DFC8] space-y-3">
                <p className="font-serif text-lg text-[#24211C]">Restful Room Accommodations</p>
                <p className="font-sans text-xs text-[#6D665A] leading-relaxed">
                  Guests reside in our spacious, sunlit rooms at Mother&apos;s Inn featuring natural ventilation, comfortable bedding, and genuine Kerala hospitality.
                </p>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-[#F3BA2F] hover:text-[#D9A21B] font-medium pt-2"
                >
                  View Resort Rooms &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative border-l border-[#E8DFC8] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F3BA2F] border-2 border-[#FFFDF7]" />
                  <span className="font-mono text-xs text-[#F3BA2F] font-semibold">06:30 AM</span>
                  <h3 className="font-serif text-lg text-[#24211C] mt-1">Ushapan &amp; Sunrise Yoga</h3>
                  <p className="font-sans text-xs text-[#6D665A] mt-1">Warm herbal infusion followed by gentle Hatha yoga &amp; Pranayama in the wooden pavilion.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F3BA2F] border-2 border-[#FFFDF7]" />
                  <span className="font-mono text-xs text-[#F3BA2F] font-semibold">08:30 AM</span>
                  <h3 className="font-serif text-lg text-[#24211C] mt-1">Sattvic Ayurvedic Breakfast</h3>
                  <p className="font-sans text-xs text-[#6D665A] mt-1">Freshly steamed Kerala delicacies (Idli, Appam, stew) prepared according to dosha balance.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F3BA2F] border-2 border-[#FFFDF7]" />
                  <span className="font-mono text-xs text-[#F3BA2F] font-semibold">10:00 AM</span>
                  <h3 className="font-serif text-lg text-[#24211C] mt-1">Morning Healing Sessions (Panchakarma / Uzhichil)</h3>
                  <p className="font-sans text-xs text-[#6D665A] mt-1">Doctor pulse assessment, tailored warm oil application, deep bodywork, and medicated steam bath.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F3BA2F] border-2 border-[#FFFDF7]" />
                  <span className="font-mono text-xs text-[#F3BA2F] font-semibold">01:00 PM</span>
                  <h3 className="font-serif text-lg text-[#24211C] mt-1">Nutrient-Rich Tridoshic Lunch &amp; Relaxation</h3>
                  <p className="font-sans text-xs text-[#6D665A] mt-1">Wholesome vegetable curation, digestive buttermilk, followed by restful quiet time.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F3BA2F] border-2 border-[#FFFDF7]" />
                  <span className="font-mono text-xs text-[#F3BA2F] font-semibold">04:30 PM</span>
                  <h3 className="font-serif text-lg text-[#24211C] mt-1">Afternoon Therapy (Shirodhara / Kizhi)</h3>
                  <p className="font-sans text-xs text-[#6D665A] mt-1">Third-eye oil stream or warm herbal bolus application to relieve residual stress.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F3BA2F] border-2 border-[#FFFDF7]" />
                  <span className="font-mono text-xs text-[#F3BA2F] font-semibold">06:00 PM</span>
                  <h3 className="font-serif text-lg text-[#24211C] mt-1">Sunset Meditation &amp; Evening Chanting</h3>
                  <p className="font-sans text-xs text-[#6D665A] mt-1">Calming breath regulation and guided inner meditation as daylight gently fades.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F3BA2F] border-2 border-[#FFFDF7]" />
                  <span className="font-mono text-xs text-[#F3BA2F] font-semibold">07:30 PM</span>
                  <h3 className="font-serif text-lg text-[#24211C] mt-1">Light Dinner &amp; Restorative Sleep</h3>
                  <p className="font-sans text-xs text-[#6D665A] mt-1">Digestive soups, herbal decoctions, and early sleep in comfortable cool surroundings.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Final CTA & Direct Booking ─────────────────────────── */}
      <section className="bg-[#24211C] py-20 lg:py-28 text-white relative overflow-hidden" aria-labelledby="ayurveda-cta-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-4 block">
              Begin Your Healing Journey
            </span>
            <h2 id="ayurveda-cta-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Experience the Rejuvenating Touch of Mother&apos;s Ayurveda?
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/60 max-w-xl mx-auto mb-10 leading-relaxed font-light">
              Connect with our Ayurvedic team directly to schedule a personal doctor consultation, customize your Panchakarma or Uzhichil program, and reserve your resort stay.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <AyurvedaEnquiryButton
                treatmentName="General Consultation & Resort Package"
                variant="primary"
                label="Enquire via WhatsApp"
                className="px-8 py-4"
              />
              <Link
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 border border-white/30 text-white font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:border-[#F3BA2F] hover:text-[#F3BA2F] transition-all duration-300"
              >
                Call: {siteConfig.phone}
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 border border-transparent bg-white/10 text-white font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-white/20 transition-all duration-300"
              >
                Book Room Accommodation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
