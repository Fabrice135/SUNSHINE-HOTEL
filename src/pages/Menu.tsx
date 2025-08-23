import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Coffee, UtensilsCrossed, Wine, IceCream, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImagePreview from "@/components/ui/ImagePreview";
import { getImagePath } from "@/lib/utils";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedFood, setSelectedFood] = useState<any>(null);

  const menuCategories = [
    {
      title: "Breakfast",
      icon: <Coffee className="w-5 h-5" />,
      time: "6:00 AM - 11:00 AM",
      items: [
        { 
          name: "Continental Breakfast", 
          price: "15,000 BIF", 
          description: "Fresh fruits, pastries, coffee, and juice",
          image: "/lovable-uploads/e6b75220-cf1c-45a2-addc-adc33807b122.png"
        },
        { 
          name: "Burundi Traditional", 
          price: "12,000 BIF", 
          description: "Local dishes with tea or coffee",
          image: "/lovable-uploads/541d629c-d57d-48f6-86d7-a111ba817ed2.png"
        },
        { 
          name: "English Breakfast", 
          price: "18,000 BIF", 
          description: "Eggs, bacon, sausage, beans, toast",
          image: "/lovable-uploads/94ac28bd-8783-4de4-896d-65e656314e90.png"
        },
        { 
          name: "Pancakes & Syrup", 
          price: "10,000 BIF", 
          description: "Fluffy pancakes with honey syrup",
          image: "/lovable-uploads/e6b75220-cf1c-45a2-addc-adc33807b122.png"
        }
      ]
    },
    {
      title: "Lunch",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      time: "12:00 PM - 3:00 PM",
      items: [
        { 
          name: "Grilled Tilapia", 
          price: "25,000 BIF", 
          description: "Fresh tilapia with local spices",
          image: "/lovable-uploads/56619b35-b968-4371-833d-b1d3e892f420.png"
        },
        { 
          name: "Beef Steak", 
          price: "35,000 BIF", 
          description: "Premium beef with mushroom sauce",
          image: "/lovable-uploads/56619b35-b968-4371-833d-b1d3e892f420.png"
        },
        { 
          name: "Chicken Curry", 
          price: "20,000 BIF", 
          description: "Tender chicken in rich curry sauce",
          image: "/lovable-uploads/a40702c5-03b1-4d4f-bbb2-c80dff6cda9d.png"
        },
        { 
          name: "Vegetarian Platter", 
          price: "15,000 BIF", 
          description: "Mixed vegetables with rice and beans",
          image: "/lovable-uploads/8186112c-88fa-46ea-a191-b7596b10fd17.png"
        }
      ]
    },
    {
      title: "Dinner",
      icon: <Utensils className="w-5 h-5" />,
      time: "6:00 PM - 10:00 PM",
      items: [
        { 
          name: "Pasta Alfredo", 
          price: "18,000 BIF", 
          description: "Creamy pasta with garlic bread",
          image: "/lovable-uploads/a40702c5-03b1-4d4f-bbb2-c80dff6cda9d.png"
        },
        { 
          name: "Fish Special", 
          price: "22,000 BIF", 
          description: "Traditional preparation with ugali",
          image: "/lovable-uploads/56619b35-b968-4371-833d-b1d3e892f420.png"
        },
        { 
          name: "Grilled Salmon", 
          price: "28,000 BIF", 
          description: "Atlantic salmon with herbs",
          image: "/lovable-uploads/56619b35-b968-4371-833d-b1d3e892f420.png"
        },
        { 
          name: "Lamb Chops", 
          price: "32,000 BIF", 
          description: "Tender lamb with rosemary",
          image: "/lovable-uploads/56619b35-b968-4371-833d-b1d3e892f420.png"
        }
      ]
    },
    {
      title: "Desserts",
      icon: <IceCream className="w-5 h-5" />,
      time: "All Day",
      items: [
        { 
          name: "Chocolate Cake", 
          price: "8,000 BIF", 
          description: "Rich chocolate cake with cream",
          image: "/lovable-uploads/e6b75220-cf1c-45a2-addc-adc33807b122.png"
        },
        { 
          name: "Fruit Salad", 
          price: "6,000 BIF", 
          description: "Seasonal fruits with honey",
          image: "/lovable-uploads/8186112c-88fa-46ea-a191-b7596b10fd17.png"
        },
        { 
          name: "Ice Cream", 
          price: "5,000 BIF", 
          description: "Vanilla, chocolate, or strawberry",
          image: "/lovable-uploads/e6b75220-cf1c-45a2-addc-adc33807b122.png"
        },
        { 
          name: "Honey Cake", 
          price: "7,000 BIF", 
          description: "Traditional cake with local honey",
          image: "/lovable-uploads/e6b75220-cf1c-45a2-addc-adc33807b122.png"
        }
      ]
    },
    {
      title: "Drinks",
      icon: <Wine className="w-5 h-5" />,
      time: "All Day",
      items: [
        { 
          name: "Fresh Juice", 
          price: "3,000 BIF", 
          description: "Orange, pineapple, or mango",
          image: "/lovable-uploads/8186112c-88fa-46ea-a191-b7596b10fd17.png"
        },
        { 
          name: "Burundi Coffee", 
          price: "2,500 BIF", 
          description: "Local Burundi coffee",
          image: "/lovable-uploads/541d629c-d57d-48f6-86d7-a111ba817ed2.png"
        },
        { 
          name: "Premium Tea", 
          price: "2,000 BIF", 
          description: "Black, green, or herbal",
          image: "/lovable-uploads/541d629c-d57d-48f6-86d7-a111ba817ed2.png"
        },
        { 
          name: "Soft Drinks", 
          price: "2,500 BIF", 
          description: "Coca-Cola, Sprite, Fanta",
          image: "/lovable-uploads/8186112c-88fa-46ea-a191-b7596b10fd17.png"
        },
        { 
          name: "Wine Selection", 
          price: "8,000 BIF", 
          description: "Red or white wine per glass",
          image: "/lovable-uploads/541d629c-d57d-48f6-86d7-a111ba817ed2.png"
        },
        { 
          name: "Local Beer", 
          price: "4,000 BIF", 
          description: "Primus or Mutzig",
          image: "/lovable-uploads/c91d8367-a577-4b99-9d7a-652e7365a6d1.png"
        }
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-background pt-0">
      {/* Navigation */}
      <div className="sticky top-0 bg-background/90 backdrop-blur-sm border-b z-10">
        <div className="container mx-auto px-4 lg:px-6 py-4 lg:py-8">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="text-foreground hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
              Our Menu
            </h1>
            <div className="w-16"></div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <AnimatedSection animation="fadeInDown" className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex overflow-x-auto gap-2 lg:gap-4 pb-2">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(index)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full transition-all duration-200 ${
                  selectedCategory === index 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-background hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {category.icon}
                  <div className="text-left">
                    <div className="text-xs font-semibold">{category.title}</div>
                    <div className="text-xs opacity-75">{category.time}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Menu Items */}
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <AnimatedSection animation="fadeInUp" className="mb-8">
          <div className="text-center">
            <h2 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-2">
              {menuCategories[selectedCategory].title}
            </h2>
            <p className="text-muted-foreground">
              Available {menuCategories[selectedCategory].time}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {menuCategories[selectedCategory].items.map((item, itemIndex) => (
            <AnimatedSection 
              key={itemIndex} 
              animation="fadeInUp" 
              delay={itemIndex * 100}
              className="h-full"
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col cursor-pointer"
                onClick={() => setSelectedFood(item)}
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={getImagePath(item.image)}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold text-xs">
                    {item.price}
                  </div>
                </div>
                <div className="p-2 sm:p-3 flex-grow flex flex-col">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground flex-grow line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Contact Section */}
        <AnimatedSection animation="fadeInUp" className="mt-12">
          <Card className="p-6 lg:p-8 bg-gradient-warm text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Questions About Our Menu?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is happy to help you with any dietary requirements or special requests
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-hero hover:shadow-modern"
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      </div>

      <ImagePreview 
        image={selectedFood?.image || ""}
        title={selectedFood?.name || ""}
        description={selectedFood?.description}
        category={menuCategories[selectedCategory].title}
        price={selectedFood?.price}
        isOpen={!!selectedFood}
        onClose={() => setSelectedFood(null)}
      />
    </div>
  );
};

export default Menu;