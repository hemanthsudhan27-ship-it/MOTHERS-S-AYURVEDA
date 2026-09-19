import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WelcomeSection from "@/components/sections/WelcomeSection";
import AboutSection from "@/components/sections/AboutSection";
import RoomsSection from "@/components/sections/RoomsSection";
import WhyStaySection from "@/components/sections/WhyStaySection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Mother's Homestay | Comfortable Stay in Kerala, India",
  description:
    "Experience genuine Kerala hospitality at Mother's Homestay. Warm, comfortable and thoughtfully prepared rooms in the heart of Kerala, India.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <AboutSection />
      <RoomsSection />
      <WhyStaySection />
      <GallerySection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
