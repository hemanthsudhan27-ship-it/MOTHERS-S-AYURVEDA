"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] overflow-hidden"
      aria-label="Hero — Mother's Homestay"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/amenities/2cb00dbe-9146-47a2-be7d-1c8a25e50835.jpg"
          alt="Mother's Homestay — a warm and welcoming Kerala homestay"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative h-full flex flex-col justify-end pb-16 lg:pb-20 px-6 lg:px-16 xl:px-24"
        style={{ y: contentY }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[1400px] mx-auto w-full"
        >
          {/* Eyebrow */}
          <motion.p
            variants={lineVariants}
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#D6A33A] mb-5"
          >
            Mother&apos;s Homestay &nbsp;·&nbsp; Kerala, India
          </motion.p>

          {/* Main heading */}
          <motion.div variants={containerVariants} className="overflow-hidden mb-6">
            <motion.h1
              variants={lineVariants}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] text-white"
            >
              Stay.
              <br />
              Feel at
              <br />
              <span className="text-[#D6A33A]">Home.</span>
            </motion.h1>
          </motion.div>

          {/* Supporting text */}
          <motion.p
            variants={lineVariants}
            className="font-sans text-sm lg:text-base text-white/75 max-w-md leading-relaxed mb-8"
          >
            Comfort, warmth and genuine hospitality,&nbsp;thoughtfully
            brought together under one roof.
          </motion.p>

          {/* CTA Row */}
          <motion.div variants={lineVariants} className="flex flex-wrap items-center gap-4">
            <Link
              href="/booking"
              id="hero-book-now"
              className="inline-flex items-center gap-2 bg-[#D6A33A] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B98424] transition-all duration-300 group"
            >
              Book Your Stay
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/rooms"
              id="hero-explore-rooms"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:border-[#D6A33A] hover:text-[#D6A33A] transition-all duration-300"
            >
              Explore Rooms
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#D6A33A]"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: "40%" }}
          />
        </div>
        <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/50 rotate-90 origin-center mt-2">
          Scroll
        </span>
      </motion.div>

      {/* Room count badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 -translate-y-1/2 right-6 lg:right-16 hidden lg:flex flex-col items-end gap-1"
        aria-hidden="true"
      >
        <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/40">
          Rooms
        </span>
        <span className="font-serif text-5xl text-white/20 leading-none">04</span>
      </motion.div>
    </section>
  );
}
