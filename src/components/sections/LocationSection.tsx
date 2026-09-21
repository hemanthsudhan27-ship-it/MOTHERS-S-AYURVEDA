import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/config";

export default function LocationSection() {
  return (
    <section
      className="bg-[#FFFDF7] py-20 lg:py-28"
      aria-labelledby="location-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
          {/* Left — Text */}
          <ScrollReveal direction="left">
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-3">
                Location
              </p>
              <h2
                id="location-heading"
                className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-[1.05] text-[#24211C] mb-6"
              >
                Find Your
                <br />
                Way Home
              </h2>
              <p className="font-sans text-sm text-[#6D665A] leading-relaxed mb-6 max-w-sm">
                Situated in the heart of Kerala, Mother\u0026apos;s Inn Homestay is easily accessible and
                close to the region&apos;s most celebrated attractions.
              </p>

              {/* Address block */}
              <div className="border-l-2 border-[#F3BA2F] pl-5 mb-8">
                <p className="font-sans text-sm text-[#24211C] leading-relaxed">
                  {siteConfig.address}
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-sans text-sm text-[#6D665A] hover:text-[#F3BA2F] transition-colors mt-1 block"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-get-directions"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-[#24211C] border border-[#F3BA2F] px-6 py-3 hover:bg-[#F3BA2F] transition-all duration-300 group"
              >
                Get Directions
                <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Map placeholder */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative aspect-square lg:aspect-[4/3] bg-[#E8DFC8] overflow-hidden">
              {siteConfig.googleMapsEmbedUrl ? (
                <iframe
                  src={siteConfig.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mother's Inn Homestay location on Google Maps"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
                  <svg
                    className="w-12 h-12 text-[#F3BA2F]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C8.21 0 5.1 3.11 5.1 6.9c0 5.18 6.9 17.1 6.9 17.1s6.9-11.92 6.9-17.1C18.9 3.11 15.79 0 12 0zm0 9.3c-1.32 0-2.4-1.08-2.4-2.4s1.08-2.4 2.4-2.4 2.4 1.08 2.4 2.4-1.08 2.4-2.4 2.4z" />
                  </svg>
                  <p className="font-sans text-sm text-[#6D665A]">
                    Map will appear here once the Google Maps embed URL is configured.
                  </p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-[#F3BA2F] tracking-widest uppercase hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
