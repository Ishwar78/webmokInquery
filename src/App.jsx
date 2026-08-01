import MarqueeBar from "./components/common/MarqueeBar";
import Navbar from "./components/common/Navbar";
import HeroSection from "./sections/HeroSection";
import RegistrationIntroSection from "./sections/RegistrationIntroSection";
import CourseOverviewSection from "./sections/CourseOverviewSection";
import PaidRegistrationSection from "./sections/PaidRegistrationSection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/FooterSection";

export default function App() {
  return (
    <div className="wm-page-shell">
      <MarqueeBar />
      <Navbar />
      <main>
        <HeroSection />
         <PaidRegistrationSection />
        
        <CourseOverviewSection />
        <RegistrationIntroSection />
        <FAQSection />
      </main>
      <FooterSection />
      <a className="wm-mobile-sticky-cta" href="#paid-registration">
        Confirm Paid Registration
      </a>
    </div>
  );
}
