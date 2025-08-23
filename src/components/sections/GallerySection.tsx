import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getImagePath } from "@/lib/utils";
import ImagePreview from "@/components/ui/ImagePreview";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  // Hotel Exterior
  {
    id: 1,
    title: "Hotel Exterior",
    description: "Beautiful exterior view of Sunshine Hotel with stunning architecture",
    image: "/lovable-uploads/fe5a9366-41fb-439c-a6c3-6ab0785a081a.png",
    category: "Exterior"
  },
  {
    id: 2,
    title: "Main Entrance",
    description: "Welcoming entrance to our luxury hotel",
    image: "/lovable-uploads/fe5a9366-41fb-439c-a6c3-6ab0785a081a.png",
    category: "Exterior"
  },

  // Rooms
  {
    id: 3,
    title: "VIP Suite",
    description: "Luxurious VIP suite with premium amenities",
    image: "/lovable-uploads/fe5a9366-41fb-439c-a6c3-6ab0785a081a.png",
    category: "Rooms"
  },
  {
    id: 4,
    title: "Simple Room",
    description: "Comfortable and clean simple room",
    image: "/lovable-uploads/d0d8af7c-d5ec-48a4-a78d-91e3ccf2c4cd.png",
    category: "Rooms"
  },
  {
    id: 5,
    title: "Deluxe Room",
    description: "Elegant deluxe room with modern amenities",
    image: "/lovable-uploads/5ccb51cf-ef8a-4520-9515-ff19b0ebe69d.png",
    category: "Rooms"
  },

  // Restaurant & Food
  {
    id: 6,
    title: "Traditional Rice Dish",
    description: "Delicious traditional rice dish with fresh vegetables",
    image: "/lovable-uploads/5781df02-192f-4633-93fd-03509f86bbbb.png",
    category: "Restaurant"
  },
  {
    id: 7,
    title: "Fried Rice Special",
    description: "Aromatic fried rice with local spices and garnish",
    image: "/lovable-uploads/541d629c-d57d-48f6-86d7-a111ba817ed2.png",
    category: "Restaurant"
  },
  {
    id: 8,
    title: "Shakshuka Breakfast",
    description: "Traditional eggs in tomato sauce with fresh herbs",
    image: "/lovable-uploads/94ac28bd-8783-4de4-896d-65e656314e90.png",
    category: "Restaurant"
  },
  {
    id: 9,
    title: "Gourmet Burger",
    description: "Premium burger with artisanal ingredients",
    image: "/lovable-uploads/e0e972f4-ed30-44ec-90f1-5f2e03862543.png",
    category: "Restaurant"
  },
  {
    id: 10,
    title: "Fresh Salad",
    description: "Healthy salad with roasted vegetables and greens",
    image: "/lovable-uploads/99b608ed-1337-41d9-a9ca-c85e10b9df69.png",
    category: "Restaurant"
  },
  {
    id: 11,
    title: "Steak Dinner",
    description: "Premium grilled steak with seasonal vegetables",
    image: "/lovable-uploads/56619b35-b968-4371-833d-b1d3e892f420.png",
    category: "Restaurant"
  },
  {
    id: 12,
    title: "Indian Cuisine",
    description: "Authentic Indian dishes with traditional accompaniments",
    image: "/lovable-uploads/a40702c5-03b1-4d4f-bbb2-c80dff6cda9d.png",
    category: "Restaurant"
  },
  {
    id: 13,
    title: "Burger & Fries",
    description: "Classic burger with golden fries",
    image: "/lovable-uploads/c91d8367-a577-4b99-9d7a-652e7365a6d1.png",
    category: "Restaurant"
  },
  {
    id: 14,
    title: "Pancake Stack",
    description: "Fluffy pancakes with fresh fruit and syrup",
    image: "/lovable-uploads/e6b75220-cf1c-45a2-addc-adc33807b122.png",
    category: "Restaurant"
  },
  {
    id: 15,
    title: "Healthy Bowl",
    description: "Nutritious vegetable bowl with quinoa and fresh herbs",
    image: "/lovable-uploads/8186112c-88fa-46ea-a191-b7596b10fd17.png",
    category: "Restaurant"
  },

  // Services & Amenities
  {
    id: 16,
    title: "Room Service",
    description: "24/7 room service for your convenience",
    image: "/lovable-uploads/8947dbb2-97f9-44bd-9d6f-2ca4137f50fa.png",
    category: "Amenities"
  },
  {
    id: 17,
    title: "Reception Area",
    description: "Friendly and professional reception service",
    image: "/lovable-uploads/054764d0-cd69-4d3f-8922-7f7ed4942576.png",
    category: "Interior"
  },
  {
    id: 18,
    title: "Conference Room",
    description: "Modern conference facilities for business meetings",
    image: "/lovable-uploads/054764d0-cd69-4d3f-8922-7f7ed4942576.png",
    category: "Business"
  }
];

const categories = ["All", "Rooms", "Restaurant", "Amenities", "Exterior", "Interior", "Business"];



const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Scroll to top smoothly when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); // Empty dependency array means this runs once when component mounts

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <section id="gallery" className="py-12 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-orange rounded-full blob-2 opacity-10"></div>
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-gradient-hero rounded-full blob-3 opacity-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Hotel <span className="text-gradient-blue">Gallery</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Explore our beautiful facilities and accommodations
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animation="fadeInDown" delay={200} className="mb-8">
          <div className="overflow-x-auto">
            <div className="flex gap-3 pb-2 min-w-max mx-auto justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold transition-modern text-sm ${
                    selectedCategory === category
                      ? "bg-gradient-hero text-white shadow-modern"
                      : "bg-muted text-muted-foreground hover:bg-primary hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredImages.map((image, index) => (
            <AnimatedSection 
              key={image.id} 
              animation="fadeInUp" 
              delay={index * 50}
              className="h-full"
            >
              <Card 
                className={`group hover-lift transition-modern overflow-hidden cursor-pointer ${
                  index % 3 === 0 ? 'card-organic' : index % 3 === 1 ? 'card-rounded' : 'card-modern'
                }`}
                onClick={() => setSelectedImage(image)}>
                <div className="relative">
                  <img
                    src={getImagePath(image.image)}
                    alt={image.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover transition-modern group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-modern"
                  ></div>
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-0 group-hover:translate-y-full transition-modern"
                  >
                    <h3 className="font-display font-semibold text-white text-sm">{image.title}</h3>
                    <p className="text-white/80 text-xs line-clamp-1">{image.description}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Full screen image preview */}
      <ImagePreview
        image={selectedImage?.image || ""}
        title={selectedImage?.title}
        description={selectedImage?.description}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default GallerySection;