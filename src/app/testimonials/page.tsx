import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Guest Reviews | Mother's Inn Homestay Kerala",
  description:
    "Read what guests say about staying at Mother's Inn Homestay in Kerala — clean, comfortable rooms, a peaceful garden, delicious homemade breakfast and warm, welcoming hosts.",
  alternates: { canonical: "/testimonials" },
};

// ─── Highlight chips extracted from visitor feedback ──────────────────────────
const highlights = [
  { emoji: "🌿", label: "Beautiful Garden" },
  { emoji: "🛏️", label: "Clean & Comfortable Rooms" },
  { emoji: "🍳", label: "Delicious Homemade Breakfast" },
  { emoji: "🤝", label: "Friendly, Welcoming Staff" },
  { emoji: "🏡", label: "Peaceful, Homely Atmosphere" },
  { emoji: "✨", label: "Basic Amenities" },
];

// ─── Rating bar data ───────────────────────────────────────────────────────────
const ratings = [
  { aspect: "Cleanliness", score: 4.7 },
  { aspect: "Comfort", score: 4.5 },
  { aspect: "Atmosphere", score: 4.8 },
  { aspect: "Hospitality", score: 4.4 },
];

// ─── Real Google reviews ───────────────────────────────────────────────────────
const googleReviews = [
  {
    id: "tintu",
    name: "Tintu Tintu",
    initials: "TT",
    stars: 5,
    review:
      "We had a wonderful stay at Fort Kochi's Mother's Inn Homestay. The place has such a warm, homely atmosphere that we truly felt like we were staying at our own home. The owner was very welcoming and kind, and the ambience was peaceful and comfortable. Overall, it was a lovely experience and we would definitely recommend this place to anyone looking for a cozy and homely stay in Fort Kochi. ❤️",
  },
  {
    id: "akash",
    name: "Akash K Sukumaran",
    initials: "AK",
    stars: 5,
    review:
      "I stayed at Mother's Inn Homestay and had a very pleasant experience. The atmosphere was calm and peaceful, making it a perfect place to relax. The staff were very friendly and welcoming, which made the stay even more comfortable. Overall, it was a great experience and I would definitely recommend it to others.",
  },
  {
    id: "kaarthik",
    name: "Kaarthik Raja",
    initials: "KR",
    stars: 5,
    review:
      "Stayed at Mother Inn Homestay and had a really comfortable experience. The place feels very homely, especially with the garden around — calm and relaxing. The hosts were friendly and easygoing, and they let us stay even after checkout without any rush. The environment was clean, well maintained, and peaceful overall. A good place to stay if you want something simple, relaxed, and comfortable.",
  },
];

function RatingBar({ aspect, score }: { aspect: string; score: number }) {
  const pct = (score / 5) * 100;
  return (
    <div className="flex items-center gap-4">
      <span className="font-sans text-xs text-[#6D665A] w-24 shrink-0 truncate">{aspect}</span>
      <div className="flex-1 h-px bg-[#E8DFC8] relative">
        <span
          className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-[#F3BA2F] transition-all duration-700"
          style={{ width: `${pct}%` }}
          aria-hidden="true"
        />
      </div>
      <span className="font-sans text-xs text-[#F3BA2F] w-8 text-right tabular-nums shrink-0">{score.toFixed(1)}</span>
    </div>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-[#F3BA2F]" : "text-[#E8DFC8]"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 lg:pt-44 pb-20 lg:pb-28 bg-[#F7F1E5] overflow-hidden"
        aria-label="Testimonials hero"
      >
        {/* Decorative large quote mark */}
        <span
          className="absolute right-6 lg:right-16 top-20 font-serif text-[18rem] lg:text-[24rem] leading-none text-[#E8DFC8] select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <ScrollReveal direction="up">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-4">
              Guest Voices
            </p>
            <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl leading-[1.02] text-[#24211C] mb-6 max-w-3xl">
              What Our
              <br />
              Guests Say.
            </h1>
            <p className="font-sans text-sm lg:text-base text-[#6D665A] max-w-md leading-relaxed">
              Honest words from the people who matter most — those who have stayed, rested and
              experienced Mother\u0026apos;s Inn Homestay for themselves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── General Summary Testimonial ──────────────────────────────── */}
      <section
        className="bg-[#24211C] py-20 lg:py-32"
        aria-labelledby="summary-testimonial-heading"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">

            {/* Left — ratings panel */}
            <ScrollReveal direction="left">
              <div className="space-y-10">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-6">
                    Overall Rating
                  </p>
                  <div className="flex items-end gap-4 mb-3">
                    <span className="font-serif text-7xl lg:text-8xl text-white leading-none">4.6</span>
                    <span className="font-sans text-xs text-white/40 mb-3">/ 5.0</span>
                  </div>
                  <Stars count={5} />
                  <p className="font-sans text-xs text-white/40 mt-3">Based on visitor feedback</p>
                </div>

                <div className="space-y-5">
                  {ratings.map((r) => (
                    <RatingBar key={r.aspect} aspect={r.aspect} score={r.score} />
                  ))}
                </div>

                {/* Highlight chips */}
                <div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4">
                    Frequently Mentioned
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {highlights.map((h) => (
                      <span
                        key={h.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-sans text-xs text-white/70"
                      >
                        <span aria-hidden="true">{h.emoji}</span>
                        {h.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — summary quote card */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative">
                {/* decorative top accent line */}
                <div className="w-12 h-[2px] bg-[#F3BA2F] mb-10" aria-hidden="true" />

                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-6">
                  General Impression
                </p>

                {/* The main quote */}
                <blockquote
                  id="summary-testimonial-heading"
                  className="font-serif text-2xl lg:text-3xl xl:text-4xl leading-[1.35] text-white mb-10"
                >
                  &ldquo;Visitors say this homestay offers clean, comfortable rooms with basic
                  amenities and a peaceful, homely atmosphere — often highlighting the beautiful
                  garden. They also appreciate the friendly, welcoming staff and the delicious,
                  homemade complimentary breakfast.&rdquo;
                </blockquote>

                {/* Attribution */}
                <footer className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full bg-[#F3BA2F]/20 border border-[#F3BA2F]/30 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5 text-[#F3BA2F]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-white">Our Guests</p>
                    <p className="font-sans text-xs text-white/40 mt-0.5">Collective visitor feedback</p>
                    <div className="mt-2">
                      <Stars count={4} />
                    </div>
                  </div>
                </footer>

                {/* Note about honest feedback */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="font-sans text-xs text-white/40 leading-relaxed">
                    We value every piece of feedback — the kind words and the honest critiques alike.
                    They help us grow and serve you better with every stay.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Real Google Reviews ──────────────────────────────────────── */}
      <section
        className="bg-[#F7F1E5] py-20 lg:py-28"
        aria-labelledby="google-reviews-heading"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-4">
                  From Google Reviews
                </p>
                <h2
                  id="google-reviews-heading"
                  className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#24211C]"
                >
                  Voices of Our Guests.
                </h2>
              </div>
              {/* Google logo pill */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8DFC8] rounded-full">
                <svg className="w-4 h-4" viewBox="0 0 24 24" aria-label="Google" role="img">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="font-sans text-xs text-[#6D665A] tracking-wide">Google Reviews</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {googleReviews.map((r, i) => (
              <ScrollReveal key={r.id} direction="up" delay={i * 0.1}>
                <article
                  className="group relative bg-white border border-[#E8DFC8] p-8 flex flex-col h-full hover:border-[#F3BA2F] hover:shadow-lg transition-all duration-300"
                  aria-label={`Review by ${r.name}`}
                >
                  {/* Top row */}
                  <header className="flex items-center gap-4 mb-6">
                    {/* Avatar */}
                    <div
                      className="w-11 h-11 rounded-full bg-[#F3BA2F]/15 border border-[#F3BA2F]/30 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <span className="font-serif text-sm text-[#F3BA2F]">{r.initials}</span>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-[#24211C]">{r.name}</p>
                      <Stars count={r.stars} />
                    </div>
                    {/* Google icon — top right */}
                    <svg
                      className="w-4 h-4 ml-auto shrink-0 opacity-40"
                      viewBox="0 0 24 24"
                      aria-label="Verified Google Review"
                      role="img"
                    >
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z" />
                    </svg>
                  </header>

                  {/* Decorative quote */}
                  <span
                    className="font-serif text-5xl leading-none text-[#F3BA2F]/20 mb-2 block"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  {/* Review text */}
                  <blockquote className="font-sans text-sm text-[#6D665A] leading-relaxed flex-1">
                    {r.review}
                  </blockquote>

                  {/* Bottom accent line animates on hover */}
                  <div
                    className="mt-8 h-px bg-[#E8DFC8] group-hover:bg-[#F3BA2F] transition-colors duration-300"
                    aria-hidden="true"
                  />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Guests Love ─────────────────────────────────────────── */}
      <section
        className="bg-[#FFFDF7] py-20 lg:py-28"
        aria-labelledby="love-heading"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-4">
              Recurring Themes
            </p>
            <h2
              id="love-heading"
              className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#24211C] mb-14"
            >
              What Guests Love.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#E8DFC8]">
            {[
              {
                id: "01",
                title: "Clean & Comfortable Rooms",
                body: "Guests consistently praise the cleanliness and comfort of their rooms, noting that the spaces feel fresh, well-maintained and genuinely homely.",
              },
              {
                id: "02",
                title: "Beautiful Garden",
                body: "The garden is a recurring highlight. Guests love spending quiet mornings or evenings surrounded by Kerala's natural greenery right on the property.",
              },
              {
                id: "03",
                title: "Homemade Breakfast",
                body: "The complimentary homemade breakfast draws frequent praise for its freshness, flavour and the care that clearly goes into its preparation.",
              },
              {
                id: "04",
                title: "Warm & Welcoming Hosts",
                body: "Reviewers highlight the warmth and friendliness of the staff, noting that their genuine hospitality makes the homestay feel like a true home away from home.",
              },
              {
                id: "05",
                title: "Peaceful Atmosphere",
                body: "Guests treasure the tranquil, restful ambience of the property — a calm retreat that allows them to truly unwind and recharge.",
              },
              {
                id: "06",
                title: "Honest & Always Improving",
                body: "Some visitors have noted areas for improvement in staff professionalism. We take this to heart and continuously work to deliver a better experience for every guest.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.id} direction="up" delay={i * 0.07}>
                <div className="border-b sm:border-b-0 sm:border-r border-[#E8DFC8] last:border-r-0 pt-8 pr-0 sm:pr-10 pb-10">
                  <span className="font-sans text-xs text-[#F3BA2F] tracking-widest mb-4 block">
                    {item.id}
                  </span>
                  <div className="w-8 h-px bg-[#F3BA2F] mb-6" aria-hidden="true" />
                  <h3 className="font-serif text-xl lg:text-2xl text-[#24211C] mb-4">{item.title}</h3>
                  <p className="font-sans text-sm text-[#6D665A] leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Share Your Experience CTA ────────────────────────────────── */}
      <section
        className="bg-[#F7F1E5] py-20 lg:py-28"
        aria-labelledby="share-heading"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] mb-4">
                  Share Your Story
                </p>
                <h2
                  id="share-heading"
                  className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#24211C] mb-4"
                >
                  Stayed With Us?
                </h2>
                <p className="font-sans text-sm text-[#6D665A] max-w-lg leading-relaxed">
                  Your experience matters to us and to future guests. If you&apos;ve stayed at
                  Mother\u0026apos;s Inn Homestay, we&apos;d love to hear your thoughts — good or honest.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  id="testimonials-cta-contact"
                  className="inline-flex items-center gap-2 bg-[#F3BA2F] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#D9A21B] transition-all duration-300 group"
                >
                  Write to Us
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
                <Link
                  href="/booking"
                  id="testimonials-cta-book"
                  className="inline-flex items-center gap-2 border border-[#F3BA2F] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#F3BA2F] transition-all duration-300"
                >
                  Book a Stay
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
