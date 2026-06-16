import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FocusGallery } from "@/components/FocusGallery";
import { Footer } from "@/components/Footer";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { Header } from "@/components/Header";
import { LensHero } from "@/components/LensHero";
import { ProcessSection } from "@/components/ProcessSection";
import { RoutineLensSection } from "@/components/RoutineLensSection";
import { StorePhotosSection } from "@/components/StorePhotosSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <LensHero />
        <ProcessSection />
        <RoutineLensSection />
        <StorePhotosSection />
        <GoogleReviewsSection />
        <FocusGallery />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
