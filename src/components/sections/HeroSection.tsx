import { Button } from "@/components/ui/button";
import { Play, Image } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm pt-16 lg:pt-24 xl:pt-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-orange rounded-full blob-1 opacity-20"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-gradient-hero rounded-full blob-2 opacity-30"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent rounded-full blob-3 opacity-15"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Left Content */}
        <AnimatedSection animation="fadeInLeft" className="space-y-6 lg:space-y-8">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-responsive-2xl font-display font-bold text-foreground leading-tight">
              Visit{" "}
              <span className="text-gradient-orange">Sunshine</span>{" "}
              <span className="text-gradient-blue">Hotel</span>{" "}
              <span className="inline-block transform hover:scale-110 transition-transform text-4xl md:text-5xl align-middle -mt-2" role="img" aria-label="Burundi flag">🇧🇮</span><br />
              and Enjoy
            </h1>
            <p className="text-responsive-sm text-muted-foreground max-w-lg leading-relaxed">
              Experience luxury and comfort at Sunshine Hotel Muyinga. 
              Where everything looks amazing and bright, just like you're at home!
            </p>
          </div>

          <AnimatedSection animation="fadeInUp" delay={200} className="flex flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-modern text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 md:py-6 card-modern"
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 md:py-6 card-modern group"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              <Image size={20} className="mr-2 group-hover:scale-110 transition-modern" />
              View Gallery
            </Button>
          </AnimatedSection>
        </AnimatedSection>

        {/* Right Content - Hero Image with Modern Design */}
        <AnimatedSection animation="fadeInRight" delay={300} className="relative">
          <div className="relative card-organic overflow-hidden shadow-modern">
            <img
              src="/lovable-uploads/fe5a9366-41fb-439c-a6c3-6ab0785a081a.png"
              alt="Luxury Hotel Exterior View"
              className="w-full h-80 md:h-96 lg:h-[450px] xl:h-[500px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-60"></div>
            
            {/* Small overlay badge */}
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-soft">
              <span className="text-primary font-semibold text-xs">★ Premium Stay</span>
            </div>
          </div>
          
          {/* Floating Elements */}
          <AnimatedSection animation="scaleIn" delay={600} className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-orange rounded-full flex items-center justify-center shadow-orange">
            <span className="text-white font-bold text-xs md:text-sm">5★</span>
          </AnimatedSection>
          
          <AnimatedSection animation="scaleIn" delay={800} className="absolute -bottom-4 -left-4 bg-background p-3 md:p-4 card-modern shadow-soft border">
            <div className="text-xs md:text-sm text-muted-foreground">Guest Rating</div>
            <div className="text-lg md:text-2xl font-bold text-gradient-blue">4.9/5</div>
          </AnimatedSection>
        </AnimatedSection>
      </div>

      {/* Modern scroll indicator */}
      <AnimatedSection animation="fadeInUp" delay={1000} className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary/30 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-2 md:h-3 bg-primary rounded-full mt-1 md:mt-2"></div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;