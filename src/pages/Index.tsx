import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/HeroSection";
import RoomsSection from "@/components/sections/RoomsSection";
import RestaurantSection from "@/components/sections/RestaurantSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import LocationSection from "@/components/sections/LocationSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <RoomsSection />
      <RestaurantSection />
      <ServicesSection />
      <TestimonialsSection />
      <GalleryPreview />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
