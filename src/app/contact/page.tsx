import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LocationSection from "@/components/sections/LocationSection";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact | Mother's Ayurveda Kerala",
  description:
    "Get in touch with Mother's Ayurveda. Call, WhatsApp or email us — we'd love to hear from you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="bg-[#F7F1E5] pt-32 lg:pt-40 pb-14 lg:pb-20"
        aria-label="Contact page header"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#24211C] mb-6">
              Contact.
            </h1>
            <p className="font-sans text-sm lg:text-base text-[#6D665A] max-w-md leading-relaxed">
              Have a question or want to make an enquiry? We&apos;re happy to hear from you. Reach
              out through any of the channels below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-[#FFFDF7] py-16 lg:py-24" aria-labelledby="contact-details-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 id="contact-details-heading" className="sr-only">
            Contact Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#E8DFC8]">
            {/* Phone */}
            <ScrollReveal direction="up">
              <div className="pt-10 pb-10 pr-0 sm:pr-10">
                <div className="w-10 h-10 border border-[#D6A33A] flex items-center justify-center mb-6">
                  <svg
                    className="w-4 h-4 text-[#D6A33A]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D6A33A] mb-3">
                  Call Us
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-serif text-2xl text-[#24211C] hover:text-[#D6A33A] transition-colors duration-300"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </ScrollReveal>

            {/* WhatsApp */}
            <ScrollReveal direction="up" delay={0.08}>
              <div className="pt-10 pb-10 pr-0 sm:pr-10 border-t sm:border-t-0 sm:border-l border-[#E8DFC8]">
                <div className="sm:pl-10">
                  <div className="w-10 h-10 border border-[#25D366] flex items-center justify-center mb-6">
                    <svg
                      className="w-4 h-4 text-[#25D366]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D6A33A] mb-3">
                    WhatsApp
                  </p>
                  <WhatsAppButton
                    id="contact-whatsapp-cta"
                    label="Chat on WhatsApp"
                    variant="outline"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal direction="up" delay={0.16}>
              <div className="pt-10 pb-10 pr-0 sm:pr-10 border-t lg:border-t-0 lg:border-l border-[#E8DFC8]">
                <div className="lg:pl-10">
                  <div className="w-10 h-10 border border-[#D6A33A] flex items-center justify-center mb-6">
                    <svg
                      className="w-4 h-4 text-[#D6A33A]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D6A33A] mb-3">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-serif text-xl text-[#24211C] hover:text-[#D6A33A] transition-colors duration-300 break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick links */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mt-16 flex flex-wrap gap-4">
              <Link
                href="/booking"
                id="contact-booking-cta"
                className="inline-flex items-center gap-2 bg-[#D6A33A] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B98424] transition-all duration-300 group"
              >
                Make a Booking Enquiry
                <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/rooms"
                id="contact-rooms-cta"
                className="inline-flex items-center gap-2 border border-[#D6A33A] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#D6A33A] transition-all duration-300"
              >
                View Our Rooms
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map */}
      <LocationSection />
    </>
  );
}
