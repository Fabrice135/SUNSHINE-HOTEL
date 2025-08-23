import { useParams, useNavigate } from "react-router-dom";
import { galleryImages } from "@/components/sections/GallerySection";
import ImagePreview from "@/components/ui/ImagePreview";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const GalleryPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageId = Number(id);
  const img = galleryImages.find((g) => g.id === imageId) || null;

  if (!img) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Image not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate(-1)}
          className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
      </div>

      <ImagePreview
        image={img.image}
        title={img.title}
        description={img.description}
        category={img.category}
        isOpen={true}
        onClose={() => navigate(-1)}
      />

      <Footer />
    </div>
  );
};

export default GalleryPreview;
