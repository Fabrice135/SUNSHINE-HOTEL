import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Utensils, Wine, Clock, Wifi, Dumbbell, BarChart3, Zap, Shield, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: <BarChart3 size={32} />,
    title: "App Analytics",
    description: "Track your stay experience with detailed analytics",
    color: "bg-gradient-hero",
    featured: true
  },
  {
    icon: <Zap size={32} />,
    title: "Speed",
    description: "Fast check-in and checkout processes",
    color: "bg-gradient-orange",
    featured: false
  },
  {
    icon: <Shield size={32} />,
    title: "Security",
    description: "24/7 security and safety protocols",
    color: "bg-accent",
    featured: false
  },
  {
    icon: <Users size={32} />,
    title: "Multiple Actions",
    description: "Comprehensive guest services and support",
    color: "bg-secondary",
    featured: false
  },
  {
    icon: <Car size={32} />,
    title: "Free Parking",
    description: "Complimentary parking for all guests",
    color: "bg-primary",
    featured: false
  },
  {
    icon: <Wifi size={32} />,
    title: "High-Speed Wi-Fi",
    description: "Free internet throughout the hotel",
    color: "bg-gradient-hero",
    featured: true
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gradient-warm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-primary/10 rounded-full blob-1"></div>
      <div className="absolute bottom-16 right-16 w-48 h-48 bg-secondary/10 rounded-full blob-3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient-orange">Services</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of services to ensure your stay is comfortable, 
            convenient, and memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover-lift transition-modern card-modern overflow-hidden relative ${
                service.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardContent className="p-6 text-center relative">
                {/* Background shape */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${service.color} opacity-10 rounded-full -translate-y-2 translate-x-2`}></div>
                
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-modern ${service.color} text-white shadow-soft`}>
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                
                {service.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-gradient-orange text-white text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ARE YOU READY Section */}
        <AnimatedSection animation="fadeInUp" className="text-center">
          <Card className="relative overflow-hidden p-8 lg:p-10 shadow-modern card-modern max-w-2xl mx-auto">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            />
            <div className="absolute inset-0 bg-primary/85 backdrop-blur-[2px]" />
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-4 -translate-x-4"></div>
            
            <div className="relative z-10 text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">ARE YOU READY?</h3>
              <p className="text-base md:text-lg opacity-90 mb-6 leading-relaxed">
                Experience the perfect blend of comfort, technology, and hospitality. 
                Our team is available 24/7 to make your stay extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  variant="secondary" 
                  className="bg-accent text-accent-foreground hover:shadow-orange px-6 py-3 rounded-full font-bold text-sm"
                  onClick={() => window.location.href = '/about'}
                >
                  read more
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-primary px-6 py-3 rounded-full font-bold text-sm"
                  onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;