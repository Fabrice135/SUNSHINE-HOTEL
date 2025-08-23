import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Mkombozi",
    comment: "I felt like I spent my night in Spain.",
    rating: 5,
    location: "Bujumbura, Burundi"
  },
  {
    name: "Nahayo Desire",
    comment: "Absolutely wonderful experience!",
    rating: 5,
    location: "Gitega, Burundi"
  },
  {
    name: "Ninziza Denise",
    comment: "Best service I've ever received.",
    rating: 5,
    location: "Muyinga, Burundi"
  },
  {
    name: "Bukuru Emelyne",
    comment: "Highly recommend this hotel!",
    rating: 5,
    location: "Ngozi, Burundi"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-accent text-accent" : "text-muted"}
      />
    ));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
            Guest <span className="text-gradient-gold">Testimonials</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Hear what our valued guests have to say about their experiences
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group hover-lift transition-luxury h-full">
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="flex justify-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-muted-foreground text-center mb-3 italic flex-grow text-sm">
                      "{testimonial.comment}"
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-xl md:text-2xl font-display text-accent">4.9/5</div>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
            <div className="space-y-1">
              <div className="text-xl md:text-2xl font-display text-accent">500+</div>
              <p className="text-xs text-muted-foreground">Guests</p>
            </div>
            <div className="space-y-1">
              <div className="text-xl md:text-2xl font-display text-accent">100%</div>
              <p className="text-xs text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;