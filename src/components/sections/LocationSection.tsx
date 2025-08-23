import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const LocationSection = () => {
  return (
    <section id="location" className="py-12 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
            Find <span className="text-gradient-gold">Us Here</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Located in the heart of Muyinga with easy access to attractions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Contact Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <Card className="shadow-soft hover-glow transition-luxury cursor-pointer transform hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-gold rounded-xl shadow-lg">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-primary mb-1">Address</h3>
                    <p className="text-muted-foreground text-xs font-medium">123 Sunshine Blvd, Muyinga</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover-glow transition-luxury cursor-pointer transform hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <a href="tel:+25769185566" className="flex items-center gap-3 w-full">
                  <div className="p-3 bg-gradient-gold rounded-xl shadow-lg">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground hover:text-accent text-xs font-medium transition-colors">
                      +257 69 18 55 66
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover-glow transition-luxury cursor-pointer transform hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <a href="mailto:info@sunshinehotel.org" className="flex items-center gap-3 w-full">
                  <div className="p-3 bg-gradient-gold rounded-xl shadow-lg">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground hover:text-accent text-xs font-medium transition-colors">
                      info@sunshinehotel.org
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover-glow transition-luxury cursor-pointer transform hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-gold rounded-xl shadow-lg">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-primary mb-1">Hours</h3>
                    <div className="text-muted-foreground text-xs font-medium">
                      <p>24/7 Service</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <AnimatedSection animation="fadeInRight" delay={400} className="relative">
            <Card className="overflow-hidden shadow-luxury">
              <div className="h-64 lg:h-80 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8539950301076!2d30.345!3d-2.843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTAnMzQuNiJTIDMwwrAyMCc1MC40IkU!5e0!3m2!1sen!2sbi!4v1234567890!5m2!1sen!2sbi"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '8px 8px 0 0' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sunshine Hotel Location"
                />
                <div className="absolute bottom-4 right-4">
                  <Button 
                    size="sm"
                    className="bg-background/90 text-foreground hover:bg-background border shadow-lg"
                    onClick={() => window.open('https://maps.google.com/?q=-2.842940181502511,30.34734799459045', '_blank')}
                  >
                    <Navigation size={14} className="mr-2" />
                    Open in Maps
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-8">
          <h3 className="text-xl font-display text-primary text-center mb-4">
            Nearby <span className="text-gradient-gold">Attractions</span>
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Card className="text-center p-3 hover-lift">
              <h4 className="font-semibold text-primary text-sm mb-1">Kobero Border Market</h4>
              <p className="text-muted-foreground text-xs">~15 km</p>
            </Card>
            <Card className="text-center p-3 hover-lift">
              <h4 className="font-semibold text-primary text-sm mb-1">Cultural Village Experiences</h4>
              <p className="text-muted-foreground text-xs">Local tours</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;