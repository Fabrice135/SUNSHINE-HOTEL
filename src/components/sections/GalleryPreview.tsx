import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const previewImages = [
  {
    id: 1,
    src: "/lovable-uploads/054764d0-cd69-4d3f-8922-7f7ed4942576.png",
    title: "Hotel Exterior",
    category: "Exterior"
  },
  {
    id: 2,
    src: "/lovable-uploads/fe5a9366-41fb-439c-a6c3-6ab0785a081a.png",
    title: "VIP Room",
    category: "Rooms"
  },
  {
    id: 3,
    src: "/lovable-uploads/5781df02-192f-4633-93fd-03509f86bbbb.png",
    title: "Restaurant",
    category: "Dining"
  },
  {
    id: 4,
    src: "/lovable-uploads/d0d8af7c-d5ec-48a4-a78d-91e3ccf2c4cd.png",
    title: "Deluxe Suite", 
    category: "Rooms"
  },
  {
    id: 5,
    src: "/lovable-uploads/5ccb51cf-ef8a-4520-9515-ff19b0ebe69d.png",
    title: "Standard Room",
    category: "Rooms"
  },
  {
    id: 6,
    src: "/lovable-uploads/8947dbb2-97f9-44bd-9d6f-2ca4137f50fa.png",
    title: "Lounge Area",
    category: "Amenities"
  }
];

const GalleryPreview = () => {
  return (
    <section id="gallery" className="py-16 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Camera size={18} className="text-primary" />
            <span className="text-primary font-medium text-sm">Photo Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Explore Our <span className="text-gradient-blue">Beautiful Spaces</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Take a visual journey through Sunshine Hotel's elegant rooms, dining areas, 
            and stunning architecture that creates unforgettable experiences.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {previewImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-xs md:text-sm">{image.title}</h3>
                  <p className="text-xs opacity-90">{image.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-hero hover:shadow-modern px-8 py-6 rounded-full font-bold text-lg z-50 relative">
            <Link to="/gallery" className="inline-flex items-center gap-2">
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;