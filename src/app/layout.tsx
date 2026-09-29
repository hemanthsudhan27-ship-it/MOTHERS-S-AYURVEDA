import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/LenisProvider";
import { siteConfig } from "@/data/config";
import { ConciergeProvider } from "@/context/ConciergeContext";
import ConciergeDrawer from "@/components/concierge/ConciergeDrawer";
import FloatingConciergeDock from "@/components/ui/FloatingConciergeDock";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Boutique Homestay & Ayurveda in Fort Kochi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["homestay", "Kerala", "Fort Kochi", "Ayurveda", "bed and breakfast", "accommodation", "wellness retreat"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Boutique Homestay & Ayurveda in Fort Kochi`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Boutique Homestay & Ayurveda in Fort Kochi`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              logo: `${siteConfig.url}${siteConfig.logo}`,
              address: {
                "@type": "PostalAddress",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.phone,
                contactType: "reservations",
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#FFFDF7] text-[#24211C] antialiased selection:bg-[#F3BA2F]/30 selection:text-[#24211C]">
        <ConciergeProvider>
          <LenisProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <ConciergeDrawer />
            <FloatingConciergeDock />
          </LenisProvider>
        </ConciergeProvider>
      </body>
    </html>
  );
}
