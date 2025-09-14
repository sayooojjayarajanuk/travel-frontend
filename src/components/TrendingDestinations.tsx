import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

const TrendingDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      rating: 4.8,
      type: "Beach Paradise",
      price: "From ₹25,000",
    },
    {
      id: 2,
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 4.9,
      type: "Mountain Adventure",
      price: "From ₹85,000",
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      rating: 4.7,
      type: "Cultural Experience",
      price: "From ₹45,000",
    },
    {
      id: 4,
      name: "Iceland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 4.8,
      type: "Natural Wonders",
      price: "From ₹75,000",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-text-primary">
          Trending Destinations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group cursor-pointer hover-lift border-border/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover group-hover:scale-110 animate-slow"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-surface/90 text-text-primary">
                      <Star className="w-3 h-3 mr-1 fill-accent text-accent" />
                      {destination.rating}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {destination.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-text-muted text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {destination.name}
                  </div>
                  <h3 className="font-semibold text-lg text-text-primary">{destination.name}</h3>
                  <p className="text-primary font-bold text-lg">{destination.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;