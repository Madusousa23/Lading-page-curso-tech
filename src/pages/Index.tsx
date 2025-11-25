import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Benefits from "@/components/Benefits";
import Modules from "@/components/Modules";
import Guarantee from "@/components/Guarantee";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Offer />
      <Benefits />
      <Modules />
      <Testimonials />
      <Guarantee />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
