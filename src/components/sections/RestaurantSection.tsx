import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Star, Utensils } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const RestaurantSection = () => {
  return (
    <section id="restaurant" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-orange rounded-full blob-1 opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 md:w-60 md:h-60 bg-gradient-hero rounded-full blob-2 opacity-15"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-12 lg:mb-16">
          <h2 className="text-responsive-xl font-display font-bold text-foreground mb-4 lg:mb-6">
            Special <span className="text-gradient-orange">Foods</span>
          </h2>
          <p className="text-responsive-sm text-muted-foreground max-w-2xl mx-auto">
            at Sunshine Hotel Restaurant
          </p>
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image with Modern Design */}
          <div className="relative">
            <div className="card-organic overflow-hidden shadow-modern">
              <img
                src="/lovable-uploads/a40702c5-03b1-4d4f-bbb2-c80dff6cda9d.png"
                alt="Authentic Indian cuisine dishes with traditional accompaniments at Sunshine Hotel Restaurant"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating rating badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-orange rounded-full flex items-center justify-center shadow-orange">
              <div className="text-center">
                <div className="text-white font-bold text-sm">5.0</div>
                <Star className="text-white mx-auto" size={12} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Culinary Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Indulge in a culinary journey with our exquisite dishes prepared by top chefs. 
                Enjoy a cozy atmosphere and a menu that caters to all tastes, making your dining 
                experience truly unforgettable.
              </p>
            </div>

            {/* Features Grid with Modern Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 card-modern hover-glow transition-modern">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-hero rounded-xl">
                    <ChefHat className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Expert Chefs</h4>
                    <p className="text-xs text-muted-foreground">Top culinary talent</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 card-modern hover-glow transition-modern">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-orange rounded-xl">
                    <Utensils className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Fresh Ingredients</h4>
                    <p className="text-xs text-muted-foreground">Locally sourced</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 card-modern hover-glow transition-modern">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-xl">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">All Day Dining</h4>
                    <p className="text-xs text-muted-foreground">6 AM - 11 PM</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 card-modern hover-glow transition-modern">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary rounded-xl">
                    <Star className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">5-Star Service</h4>
                    <p className="text-xs text-muted-foreground">Exceptional quality</p>
                  </div>
                </div>
              </Card>
            </div>

            <Button 
              className="bg-gradient-hero hover:shadow-modern px-8 py-6 rounded-full font-bold w-full text-lg"
              onClick={() => window.location.href = '/menu'}
            >
              See Menu
            </Button>
          </div>
        </div>

        {/* More About Us - Modern Design */}
        <Card className="bg-gradient-warm p-8 shadow-soft card-modern">
          <div className="text-center">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">More About Our Restaurant</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
              Our restaurant offers a diverse menu featuring local and international cuisine, 
              crafted with fresh ingredients. Join us for special events and themed nights, 
              where our chefs showcase their creativity and passion for food.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RestaurantSection;