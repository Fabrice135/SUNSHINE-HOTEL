import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display text-gradient-gold mb-4">
              Sunshine Hotel
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your home away from home in the heart of the city. Experience luxury, 
              comfort, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-accent">Offerings</h4>
            <ul className="space-y-2">
              <li><a href="#rooms" className="text-primary-foreground/80 hover:text-accent transition-smooth">Rooms</a></li>
              <li><a href="#restaurant" className="text-primary-foreground/80 hover:text-accent transition-smooth">Restaurant</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">Bar</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">Events</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Room Wi-Fi</a></li>
            </ul>
          </div>

          {/* Guest Favorites */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-accent">Guest Favorites</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Calm</li>
              <li className="text-primary-foreground/80">Peace</li>
              <li className="text-primary-foreground/80">Privacy</li>
              <li className="text-primary-foreground/80">Friendly</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Sunshine Blvd<br />
                  Muyinga, Burundi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a 
                  href="tel:+25769185566" 
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                >
                  +257 69 18 55 66
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@sunshinehotel.org" 
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                >
                  info@sunshinehotel.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Sunshine Hotel. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">Sitemap</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">Help Center</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">Feedback</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;