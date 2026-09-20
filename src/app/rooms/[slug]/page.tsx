import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import rooms, { getRoomBySlug } from "@/data/rooms";
import RoomGallery from "@/components/rooms/RoomGallery";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FinalCTA from "@/components/sections/FinalCTA";

interface RoomPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: room.seoTitle,
    description: room.seoDescription,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: room.seoTitle,
      description: room.seoDescription,
      images: room.images[0] ? [{ url: room.images[0], alt: room.name }] : [],
    },
  };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <nav
        className="fixed top-20 left-0 right-0 z-40 bg-[#FFFDF7]/90 backdrop-blur-sm border-b border-[#E8DFC8]"
        aria-label="Breadcrumb"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-2.5">
          <ol className="flex items-center gap-2 font-sans text-[10px] tracking-[0.1em] uppercase text-[#6D665A]">
            <li>
              <Link href="/" className="hover:text-[#D6A33A] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#D6A33A]">·</li>
            <li>
              <Link href="/rooms" className="hover:text-[#D6A33A] transition-colors">
                Rooms
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#D6A33A]">·</li>
            <li aria-current="page" className="text-[#24211C]">
              {room.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 lg:pt-44 pb-0 bg-[#FFFDF7]" aria-label={`${room.name} hero`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] items-end gap-6 mb-10">
            <ScrollReveal direction="up">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-3 block">
                {room.id}
              </span>
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#24211C]">
                {room.name}
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="lg:text-right flex lg:flex-col lg:items-end gap-4">
                <WhatsAppButton
                  roomName={room.name}
                  label={`Enquire About This Room`}
                  id={`room-${room.slug}-enquire-hero`}
                />
                <Link
                  href={`/booking?room=${encodeURIComponent(room.name)}`}
                  id={`room-${room.slug}-book`}
                  className="inline-flex items-center gap-2 border border-[#D6A33A] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#D6A33A] transition-all duration-300"
                >
                  Book Your Stay
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#E8DFC8]">
              <Image
                src={room.images[0] || "/images/placeholder-room.svg"}
                alt={`${room.name} at Mother's Ayurveda — main view`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Room Details */}
      <section className="bg-[#FFFDF7] py-16 lg:py-24" aria-labelledby="room-details-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24">
            {/* Description */}
            <ScrollReveal direction="left">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-4">
                About This Room
              </p>
              <h2 id="room-details-heading" className="font-serif text-3xl lg:text-4xl text-[#24211C] mb-6">
                {room.shortDescription}
              </h2>
              <div className="w-12 h-px bg-[#D6A33A] mb-6" aria-hidden="true" />
              <p className="font-sans text-sm lg:text-base text-[#6D665A] leading-relaxed">
                {room.description}
              </p>
            </ScrollReveal>

            {/* Quick details */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-[#F7F1E5] p-8">
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-6">
                  Room Details
                </p>
                <dl className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-[#E8DFC8] pb-3">
                    <dt className="font-sans text-xs text-[#6D665A] tracking-wide">Capacity</dt>
                    <dd className="font-sans text-xs text-[#24211C] font-medium">
                      {room.capacity} Guest{room.capacity > 1 ? "s" : ""}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DFC8] pb-3">
                    <dt className="font-sans text-xs text-[#6D665A] tracking-wide">Bed Type</dt>
                    <dd className="font-sans text-xs text-[#24211C] font-medium">{room.bedType}</dd>
                  </div>
                  {room.roomSize && (
                    <div className="flex justify-between border-b border-[#E8DFC8] pb-3">
                      <dt className="font-sans text-xs text-[#6D665A] tracking-wide">Room Size</dt>
                      <dd className="font-sans text-xs text-[#24211C] font-medium">{room.roomSize}</dd>
                    </div>
                  )}
                  {room.price && (
                    <div className="flex justify-between border-b border-[#E8DFC8] pb-3">
                      <dt className="font-sans text-xs text-[#6D665A] tracking-wide">Rate</dt>
                      <dd className="font-sans text-xs text-[#D6A33A] font-medium">{room.price}</dd>
                    </div>
                  )}
                </dl>
                <WhatsAppButton
                  roomName={room.name}
                  label="Enquire About This Room"
                  id={`room-${room.slug}-enquire-details`}
                  className="w-full justify-center"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-[#F7F1E5] py-16 lg:py-20" aria-labelledby="amenities-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-4">
              What&apos;s Included
            </p>
            <h2 id="amenities-heading" className="font-serif text-3xl lg:text-4xl text-[#24211C] mb-10">
              Room Amenities
            </h2>
          </ScrollReveal>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            aria-label={`Amenities included in ${room.name}`}
          >
            {room.amenities.map((amenity, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.04}>
                <li className="flex items-center gap-3 bg-white p-4">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#D6A33A] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-xs text-[#24211C]">{amenity}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      {room.images.length > 1 && (
        <section className="bg-[#FFFDF7] py-16 lg:py-24" aria-labelledby="gallery-heading">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal direction="up">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-4">
                Gallery
              </p>
              <h2 id="gallery-heading" className="font-serif text-3xl lg:text-4xl text-[#24211C] mb-10">
                See the Space
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.05}>
              <RoomGallery images={room.images} roomName={room.name} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Enquiry CTA */}
      <section
        className="bg-[#24211C] py-16 lg:py-20"
        aria-labelledby="room-enquiry-heading"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 id="room-enquiry-heading" className="font-serif text-3xl lg:text-4xl text-white mb-2">
                  Interested in the {room.name}?
                </h2>
                <p className="font-sans text-sm text-white/50">
                  Reach out and we&apos;ll confirm availability and share all the details.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <WhatsAppButton
                  roomName={room.name}
                  label="Enquire About This Room"
                  id={`room-${room.slug}-enquire-bottom`}
                />
                <Link
                  href={`/booking?room=${encodeURIComponent(room.name)}`}
                  id={`room-${room.slug}-book-bottom`}
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-sans text-xs tracking-[0.15em] uppercase px-6 py-3 hover:border-[#D6A33A] hover:text-[#D6A33A] transition-all duration-300"
                >
                  Make a Booking Enquiry
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Other rooms */}
      {otherRooms.length > 0 && (
        <section className="bg-[#FFFDF7] py-16 lg:py-24" aria-labelledby="other-rooms-heading">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal direction="up">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D6A33A] mb-3">
                Explore More
              </p>
              <h2 id="other-rooms-heading" className="font-serif text-3xl lg:text-4xl text-[#24211C] mb-10">
                Other Rooms
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {otherRooms.map((r, i) => (
                <ScrollReveal key={r.id} direction="up" delay={i * 0.08}>
                  <Link
                    href={`/rooms/${r.slug}`}
                    id={`other-room-${r.slug}`}
                    className="group block"
                    aria-label={`View ${r.name}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DFC8] mb-4">
                      <Image
                        src={r.images[0] || "/images/placeholder-room.svg"}
                        alt={r.name}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <p className="font-sans text-[10px] text-[#D6A33A] tracking-widest uppercase mb-1">
                      {r.id}
                    </p>
                    <h3 className="font-serif text-xl text-[#24211C] group-hover:text-[#B98424] transition-colors duration-300">
                      {r.name}
                    </h3>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
