import GallerySection from "@/components/sections/GallerySection";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate("/")}
          className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
      </div>
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Gallery;