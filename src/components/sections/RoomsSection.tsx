import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Wifi, Droplets, Phone, Star, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const roomTypes = [
  {
    id: 1,
    title: "VIP Rooms",
    subtitle: "Stay",
    description: "A luxurious room that comes with premium amenities for the ultimate comfort experience.",
    features: ["King Size Bed", "Premium Service", "Luxury Bathroom", "24/7 Room Service"],
    price: "50,000 BIF",
    image: "/lovable-uploads/fe5a9366-41fb-439c-a6c3-6ab0785a081a.png",
    badge: "Luxury",
    color: "bg-gradient-hero"
  },
  {
    id: 2,
    title: "Comfort Rooms", 
    subtitle: "Enjoy",
    description: "A cozy room perfect for comfortable stays, equipped with all essential amenities.",
    features: ["Comfortable Bed", "Friendly Service", "Shower", "Daily Cleaning"],
    price: "30,000 BIF",
    image: "/lovable-uploads/d0d8af7c-d5ec-48a4-a78d-91e3ccf2c4cd.png",
    badge: "Popular",
    color: "bg-gradient-orange"
  }
];

const featureIcons = {
  "Comfortable Bed": <Bed size={16} />,
  "King Size Bed": <Bed size={16} />,
  "Shower Heater": <Droplets size={16} />,
  "Shower": <Droplets size={16} />,
  "Luxury Bathroom": <Droplets size={16} />,
  "24/7 Room Service": <Phone size={16} />,
  "Room Service": <Phone size={16} />,
  "Friendly Service": <Star size={16} />,
  "Premium Service": <Star size={16} />,
  "Basic Amenities": <Users size={16} />,
  "Shared Facilities": <Users size={16} />,
  "Daily Cleaning": <Star size={16} />
};

const RoomsSection = () => {
  return (
    <section id="rooms" className="section-padding bg-gradient-warm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blob-1"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 md:w-48 md:h-48 bg-secondary/10 rounded-full blob-2"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-12 lg:mb-16">
          <h2 className="text-responsive-xl font-display font-bold text-foreground mb-4 lg:mb-6">
            Our <span className="text-gradient-orange">Rooms</span>
          </h2>
          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Sunshine Hotel, we provide different types of rooms to meet the needs of all our guests. 
            Whether you prefer the luxurious feel of our VIP rooms or the cozy atmosphere of our simple rooms, 
            each option is designed for your comfort.
          </p>
        </AnimatedSection>

        {/* Rooms Grid with Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16 max-w-4xl mx-auto">
          {roomTypes.map((room, index) => (
            <AnimatedSection 
              key={room.id} 
              animation="fadeInUp" 
              delay={index * 100}
              className="h-full"
            >
              <Card 
                className={`group card-hover-float transition-modern card-organic overflow-hidden flex flex-col cursor-pointer ${
                  index % 2 === 0 ? 'card-rounded' : 'card-modern'
                }`}
                onClick={() => window.location.href = `/room/${room.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image.startsWith('http') ? room.image : `/${room.image.replace(/^\/+/, '')}`}
                    alt={`${room.title} - ${room.description}`}
                    className="w-full h-40 md:h-48 object-cover transition-modern group-hover:scale-110"
                  />
                  <div className={`absolute top-3 md:top-4 left-3 md:left-4 ${room.color} text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold`}>
                    {room.badge}
                  </div>
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-green-500/95 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full font-bold text-white text-xs md:text-sm z-20">
                    {room.price}/night
                  </div>
                  
                  
                  {/* Floating icon */}
                  <div className={`absolute -bottom-4 md:-bottom-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 ${room.color} rounded-full flex items-center justify-center shadow-soft z-10`}>
                    <Star className="text-white" size={16} />
                  </div>
                </div>
                
                <CardContent className="p-4 md:p-5 pt-6 md:pt-8 flex flex-col flex-grow">
                  <div className="mb-4 flex-grow">
                    <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-1">
                      {room.title}
                    </h3>
                    <h4 className="text-base md:text-lg text-primary font-semibold mb-2 md:mb-3">
                      {room.subtitle}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                        <span className="text-primary">
                          {featureIcons[feature as keyof typeof featureIcons] || <Wifi size={16} />}
                        </span>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${room.color} hover:shadow-modern transition-modern text-xs md:text-sm`}
                    onClick={() => window.location.href = `/room/${room.id}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Modern CTA Section */}
        <AnimatedSection animation="fadeInUp" className="text-center">
          <Card className="relative overflow-hidden p-6 md:p-8 lg:p-10 shadow-modern card-modern max-w-4xl mx-auto">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            />
            <div className="absolute inset-0 bg-primary/85 backdrop-blur-[2px]" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8 items-center text-primary-foreground">
              <div className="text-left">
                <h3 className="text-responsive-lg font-display font-bold mb-3 md:mb-4">Ready to Experience?</h3>
                <p className="text-responsive-sm opacity-90 leading-relaxed">
                  Experience ultimate comfort in our rooms designed for relaxation, featuring modern amenities 
                  and personalized service that makes your stay memorable.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full bg-accent hover:shadow-orange text-sm md:text-base text-white px-8 py-6 rounded-full font-bold text-lg"
                  onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ARE YOU READY?
                </Button>
                <p className="text-xs md:text-sm opacity-75">Contact us for special packages</p>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RoomsSection;