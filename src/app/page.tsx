import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WelcomeSection from "@/components/sections/WelcomeSection";
import RoomsSection from "@/components/sections/RoomsSection";
import AyurvedaInteractiveSection from "@/components/sections/AyurvedaInteractiveSection";
import WhyStaySection from "@/components/sections/WhyStaySection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Mother's Inn Homestay & Ayurveda | Luxury Boutique Stay in Fort Kochi, Kerala",
  description:
    "Experience the luxury of slow living at Mother's Inn Homestay & Mother's Ayurveda in Fort Kochi. Sunlit suites, traditional Ayurvedic wellness, and genuine Kerala hospitality just 5 minutes from the beach.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <RoomsSection />
      <AyurvedaInteractiveSection />
      <WhyStaySection />
      <GallerySection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
