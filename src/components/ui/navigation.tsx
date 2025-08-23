import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-modern ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4 lg:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group transition-all duration-500"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            <span className="text-xl lg:text-2xl font-display font-bold text-gradient-blue group-hover:text-gradient-orange transition-all duration-300">
              Sunshine Hotel
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-modern text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Home
            </a>
            <a 
              href="#rooms" 
              className="text-foreground hover:text-primary transition-modern text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Rooms
            </a>
            <a 
              href="#restaurant" 
              className="text-foreground hover:text-primary transition-modern text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('restaurant')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Menu
            </a>
            <a 
              href="#gallery" 
              className="text-foreground hover:text-primary transition-modern text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Gallery
            </a>
            <a 
              href="#restaurant" 
              className="text-foreground hover:text-primary transition-modern text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('restaurant')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Restaurant
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-modern text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Services
            </a>
            <a 
              href="#location" 
              className="text-foreground hover:text-primary transition-modern text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('location')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Location
            </a>
          </div>

          {/* Contact Button */}
          <Button variant="default" className="hidden md:inline-flex bg-gradient-orange hover:shadow-orange text-sm lg:text-base px-4 lg:px-6 text-white"
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>

          {/* Mobile Menu Sidebar */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 bg-gradient-warm backdrop-blur-md border-primary/20">
              <SheetHeader className="p-6 border-b border-primary/20 bg-gradient-subtle">
                <SheetTitle 
                  className="text-2xl font-display font-bold text-gradient-orange text-left cursor-pointer hover:text-gradient-blue transition-all duration-500 p-1"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/';
                  }}
                >
                  Sunshine Hotel
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6 space-y-6">
                <nav className="flex flex-col space-y-4">
                  <a 
                    href="#home" 
                    className="text-foreground hover:text-primary transition-modern text-lg py-2 border-b border-border/30"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                  >
                    Home
                  </a>
                  <a 
                    href="#rooms" 
                    className="text-foreground hover:text-primary transition-modern text-lg py-2 border-b border-border/30"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                  >
                    Rooms
                  </a>
                  <a 
                    href="#restaurant" 
                    className="text-foreground hover:text-primary transition-modern text-lg py-2 border-b border-border/30"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('restaurant')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                  >
                    Menu
                  </a>
                  <a 
                    href="#gallery" 
                    className="text-foreground hover:text-primary transition-modern text-lg py-2 border-b border-border/30"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                  >
                    Gallery
                  </a>
                  <a 
                    href="#restaurant" 
                    className="text-foreground hover:text-primary transition-modern text-lg py-2 border-b border-border/30"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('restaurant')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                  >
                    Restaurant
                  </a>
                  <a 
                    href="#services" 
                    className="text-foreground hover:text-primary transition-modern text-lg py-2 border-b border-border/30"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                  >
                    Services
                  </a>
                  <a 
                    href="#location" 
                    className="text-foreground hover:text-primary transition-modern text-lg py-2 border-b border-border/30"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('location')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                  >
                    Location
                  </a>
                </nav>
                <Button 
                  variant="default" 
                  className="bg-gradient-orange hover:shadow-orange mt-6 w-full text-white"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;