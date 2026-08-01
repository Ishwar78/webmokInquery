import MarqueeBar from "./components/common/MarqueeBar";
import Navbar from "./components/common/Navbar";
import HeroSection from "./sections/HeroSection";
import RegistrationIntroSection from "./sections/RegistrationIntroSection";
import CourseOverviewSection from "./sections/CourseOverviewSection";
import PaidRegistrationSection from "./sections/PaidRegistrationSection";
import GallerySection from "./sections/GallerySection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/FooterSection";
import EnquiryPopup from "./components/forms/EnquiryPopup";

function SectionDivider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background:
          "linear-gradient(90deg, transparent 0%, rgba(114,216,255,0.18) 30%, rgba(26,182,232,0.38) 50%, rgba(114,216,255,0.18) 70%, transparent 100%)",
      }}
    />
  );
}

export default function App() {
  return (
    <>
      <div className="wm-page-shell">
        <MarqueeBar />
        <Navbar />
        <main>
          <HeroSection />
          <SectionDivider />
          <PaidRegistrationSection />
          <SectionDivider />
          <CourseOverviewSection />
          <SectionDivider />
          <RegistrationIntroSection />
          <SectionDivider />
          <GallerySection />
          <SectionDivider />
          <FAQSection />
        </main>
        <FooterSection />
        <a className="wm-mobile-sticky-cta" href="#paid-registration">
          Confirm Paid Registration
        </a>
      </div>

      {/* Popup — mounts outside the page shell so z-index is always on top */}
      <EnquiryPopup />
    </>
  );
}
