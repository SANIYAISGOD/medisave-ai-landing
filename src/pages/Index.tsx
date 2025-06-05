
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import SupportedSchemes from "@/components/SupportedSchemes";
import AppDemo from "@/components/AppDemo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <SupportedSchemes />
      <AppDemo />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
