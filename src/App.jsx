import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PriceSection from "./components/PriceSection";
import TestimonialSection from "./components/TestimonialSection";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <PriceSection />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
