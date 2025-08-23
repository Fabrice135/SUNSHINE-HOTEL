import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bed, Wifi, Droplets, Phone, Star, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roomsData = [
  {
    id: "1",
    title: "VIP Rooms",
    subtitle: "Stay",
    description: "A cozy room that comes with all the essential amenities you need for a comfortable stay.",
    fullDescription: "Experience luxury at its finest in our VIP rooms. These spacious accommodations feature premium furnishings, modern amenities, and stunning views. Perfect for guests who appreciate the finer things in life.",
    features: ["Comfortable Bed", "Friendly Service", "Shower Heater", "24/7 Room Service"],
    price: "50,000 BIF",
    image: "/lovable-uploads/fe5a9366-41fb-439c-a6c3-6ab0785a081a.png",
    badge: "Luxury",
    amenities: ["King Size Bed", "Air Conditioning", "Mini Bar", "Room Service", "Free WiFi", "Plasma TV", "Safe Box", "Balcony"]
  },
  {
    id: "2",
    title: "Simple Rooms", 
    subtitle: "Enjoy",
    description: "A cozy room perfect for budget travelers, equipped with all essential amenities.",
    fullDescription: "Our simple rooms offer comfort and value without compromising on quality. Clean, well-maintained, and equipped with everything you need for a pleasant stay.",
    features: ["Comfortable Bed", "Friendly Service", "Shower", "24/7 Room Service"],
    price: "30,000 BIF",
    image: "/lovable-uploads/d0d8af7c-d5ec-48a4-a78d-91e3ccf2c4cd.png",
    badge: "Popular",
    amenities: ["Double Bed", "Private Bathroom", "Free WiFi", "TV", "Desk", "Wardrobe"]
  },
  {
    id: "3",
    title: "Deluxe Rooms",
    subtitle: "Explore", 
    description: "Spacious and elegant rooms, perfect for a special luxurious exploration.",
    fullDescription: "Deluxe rooms combine elegance with comfort, featuring sophisticated décor and premium amenities. Ideal for special occasions and extended stays.",
    features: ["King Size Bed", "Premium Service", "Luxury Bathroom", "Room Service"],
    price: "50,000 BIF",
    image: "/lovable-uploads/5ccb51cf-ef8a-4520-9515-ff19b0ebe69d.png",
    badge: "Premium",
    amenities: ["King Size Bed", "Luxury Bathroom", "Sitting Area", "Premium Service", "Free WiFi", "Smart TV", "Mini Fridge", "Coffee Machine"]
  },
  {
    id: "4",
    title: "Economy Rooms",
    subtitle: "Relax",
    description: "Experience the comfortness at Sunshine Hotel Muyinga with its friendly rooms.",
    fullDescription: "Our economy rooms provide excellent value for money with all basic amenities included. Perfect for budget-conscious travelers who don't want to compromise on cleanliness and comfort.",
    features: ["Comfortable Bed", "Basic Amenities", "Shared Facilities", "Daily Cleaning"],
    price: "30,000 BIF",
    image: "/lovable-uploads/8947dbb2-97f9-44bd-9d6f-2ca4137f50fa.png",
    badge: "Budget",
    amenities: ["Single/Twin Beds", "Shared Bathroom", "Free WiFi", "Daily Cleaning", "Basic Furnishing"]
  }
];

const featureIcons = {
  "King Size Bed": <Bed size={20} />,
  "Double Bed": <Bed size={20} />,
  "Single/Twin Beds": <Bed size={20} />,
  "Air Conditioning": <Star size={20} />,
  "Private Bathroom": <Droplets size={20} />,
  "Luxury Bathroom": <Droplets size={20} />,
  "Shared Bathroom": <Droplets size={20} />,
  "Room Service": <Phone size={20} />,
  "Free WiFi": <Wifi size={20} />,
  "Mini Bar": <Star size={20} />,
  "Plasma TV": <Star size={20} />,
  "Smart TV": <Star size={20} />,
  "TV": <Star size={20} />,
  "Safe Box": <Star size={20} />,
  "Balcony": <Star size={20} />,
  "Sitting Area": <Users size={20} />,
  "Mini Fridge": <Star size={20} />,
  "Coffee Machine": <Star size={20} />,
  "Desk": <Star size={20} />,
  "Wardrobe": <Star size={20} />,
  "Daily Cleaning": <Star size={20} />,
  "Basic Furnishing": <Star size={20} />
};

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const room = roomsData.find(r => r.id === id);
  
  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Room not found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate("/")}
          className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
      </div>

      <div className="pt-20 pb-10">
        <div className="container mx-auto px-6">
          {/* Room Header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-modern"
              />
              <div className={`absolute top-4 left-4 bg-gradient-hero text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                {room.badge}
              </div>
              <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-foreground">
                {room.price}/night
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-display font-bold text-foreground mb-2">
                  {room.title}
                </h1>
                <h2 className="text-2xl text-primary font-semibold mb-4">
                  {room.subtitle}
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {room.fullDescription}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Room Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span className="text-primary">
                        {featureIcons[amenity as keyof typeof featureIcons] || <Star size={16} />}
                      </span>
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-gradient-subtle">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{room.price}</div>
                    <div className="text-sm text-muted-foreground">per night</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Includes taxes and fees. Free cancellation up to 24 hours before check-in.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomDetail;