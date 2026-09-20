import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Gallery images: editorial asymmetric composition
const galleryImages = [
  {
    src: "/images/amenities/1c66f5c5-b968-4de1-a803-ecfe3fb9e955.jpg",
    alt: "A serene room interior at Mother's Ayurveda with warm natural lighting",
    span: "row-span-2",
  },
  {
    src: "/images/amenities/309e0145-ce9e-493b-b611-28424de40f13.jpg",
    alt: "The lush green surroundings of Mother's Ayurveda property",
    span: "",
  },
  {
    src: "/images/amenities/2f093924-3ac2-4538-87c5-68c1f69e2051.jpg",
    alt: "Comfortable amenities and spaces at Mother's Ayurveda",
    span: "",
  },
  {
    src: "/images/amenities/6ce5db30-e99b-44eb-a228-869100c28d81.jpg",
    alt: "Beautiful common area at Mother's Ayurveda Kerala",
    span: "row-span-2",
  },
  {
    src: "/images/amenities/c598c459-33ae-4eb8-b98e-b448a762ae8b.jpg",
    alt: "Exterior view and grounds of Mother's Ayurveda",
    span: "",
  },
  {
    src: "/images/amenities/f5352f8c-e976-4b12-842b-4bef62e705ee.jpg",
    alt: "Thoughtfully curated interior details at Mother's Ayurveda",
    span: "",
  },
];

export default function GallerySection() {
  return (
    <section
      className="bg-[#F7F1E5] py-20 lg:py-32 overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-3">
                Moments
              </p>
              <h2
                id="gallery-heading"
                className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#24211C]"
              >
                The
                <br />
                Experience
              </h2>
            </div>
            <span
              className="hidden lg:block font-serif text-[100px] leading-none text-[#E8DFC8] select-none"
              aria-hidden="true"
            >
              03
            </span>
          </div>
        </ScrollReveal>

        {/* Desktop: Asymmetric editorial grid */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4 h-[700px]">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.07}>
              <div className={`relative overflow-hidden ${img.span} h-full min-h-[200px]`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1400px) 33vw, 450px"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: Stacked 2-column grid */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.05}>
              <div className={`relative aspect-square overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/9]" : ""}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
