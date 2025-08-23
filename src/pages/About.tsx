import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Award, Users, Heart, Star, Shield, Wifi, Car, Coffee, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence in Service",
      description: "Over 10 years of hospitality experience providing world-class service to our valued guests."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Our professional staff is trained to exceed expectations and ensure your comfort at all times."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Care",
      description: "We treat every guest like family, providing personalized attention to make your stay memorable."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-Star Experience",
      description: "Luxurious amenities and attention to detail that rivals the finest hotels worldwide."
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, name: "High-Speed WiFi" },
    { icon: <Car className="w-6 h-6" />, name: "Free Parking" },
    { icon: <Coffee className="w-6 h-6" />, name: "24/7 Room Service" },
    { icon: <Utensils className="w-6 h-6" />, name: "Fine Dining" },
    { icon: <Shield className="w-6 h-6" />, name: "24/7 Security" },
    { icon: <Users className="w-6 h-6" />, name: "Concierge Service" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About Sunshine Hotel
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your premier destination for luxury, comfort, and exceptional hospitality in Burundi
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-6 py-16">
        <Card className="p-8 shadow-soft card-modern mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Established with a vision to redefine hospitality in Burundi, Sunshine Hotel has been a beacon 
              of excellence for travelers seeking comfort, luxury, and authentic local experiences. Located in 
              the heart of the city, we combine modern amenities with traditional Burundian warmth to create 
              an unforgettable stay for every guest.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment goes beyond providing accommodation; we curate experiences that showcase the 
              beauty of our country while ensuring world-class comfort and service. From business travelers 
              to families on vacation, we cater to every need with personalized attention and care.
            </p>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 shadow-soft card-modern hover:shadow-modern transition-modern">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-warm shadow-soft card-modern">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide exceptional hospitality services that exceed guest expectations while showcasing 
              the beauty and culture of Burundi. We strive to create memorable experiences through 
              personalized service, modern amenities, and genuine care for every visitor.
            </p>
          </Card>
          
          <Card className="p-8 bg-primary/5 shadow-soft card-modern">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as the premier hospitality destination in Burundi, known for our 
              commitment to excellence, sustainability, and community development. We aim to set 
              the standard for luxury accommodation and service in the region.
            </p>
          </Card>
        </div>

        {/* Amenities */}
        <Card className="p-8 shadow-soft card-modern mb-12">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Premium Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 p-4 rounded-full text-primary mx-auto mb-3 w-fit">
                  {amenity.icon}
                </div>
                <p className="text-sm font-medium text-foreground">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Contact Section */}
        <Card className="p-8 text-center bg-gradient-hero text-white shadow-soft card-modern">
          <h3 className="text-2xl font-display font-bold mb-4">
            Experience the Sunshine Difference
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Ready to create unforgettable memories? Contact us today to book your stay or learn more 
            about our services and special packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-8 py-3"
              onClick={() => window.open('https://wa.me/25769362950?text=Hello, I would like to know more about Sunshine Hotel', '_blank')}
            >
              Contact Us Now
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              onClick={() => window.open('mailto:mentorhub011@gmail.com?subject=Hotel Inquiry&body=Hello, I would like to know more about your hotel services', '_blank')}
            >
              Email Us
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;