import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import HeroSection from "./components/HeroSection";
import MarqueeStrip from "./components/MarqueeStrip";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhySection from "./components/WhySection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaSection from "./components/CtaSection";
import FooterSection from "./components/FooterSection";
import ScrollTopButton from "./components/ScrollTopButton";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const EnquirySection = lazy(() => import("./components/EnquirySection"));

export default function App() {
  return (
    <>
      <PageLoader />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1A0E04",
            color: "#FDFAF4",
            border: "1px solid rgba(232, 98, 26, 0.3)",
          },
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <TestimonialsSection />
        <CtaSection />
        <Suspense fallback={null}>
          <EnquirySection />
        </Suspense>
      </main>
      <FooterSection />
      <FloatingWhatsApp />
      <ScrollTopButton />
    </>
  );
}

