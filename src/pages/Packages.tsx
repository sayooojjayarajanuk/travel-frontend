import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, MapPin } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Himalayan Trek Adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "14-day guided trek through stunning mountain landscapes",
      price: "₹85,000",
      duration: "14 days",
      rating: 4.9,
      groupSize: "8-12 people",
      agent: "Mountain Guides Co.",
    },
    {
      id: 2,
      name: "Bali Beach & Culture",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
      description: "Relax on pristine beaches and explore ancient temples",
      price: "₹45,000",
      duration: "7 days",
      rating: 4.8,
      groupSize: "4-8 people",
      agent: "Tropical Adventures",
    },
    {
      id: 3,
      name: "European City Tour",
      image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=600&h=400&fit=crop",
      description: "Visit 5 iconic European cities in one amazing journey",
      price: "₹125,000",
      duration: "10 days",
      rating: 4.7,
      groupSize: "15-20 people",
      agent: "Euro Explorers",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-text-primary mb-4">
            Travel Packages
          </h1>
          <p className="text-xl text-text-secondary">
            Curated adventures by verified travel agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="group cursor-pointer animate-smooth hover:shadow-hover hover:-translate-y-1 border-border/20 overflow-hidden">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-110 animate-smooth"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-surface/90 text-text-primary">
                    <Star className="w-3 h-3 mr-1 fill-accent text-accent" />
                    {pkg.rating}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-text-primary">{pkg.name}</CardTitle>
                <p className="text-text-secondary text-sm">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-text-muted">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {pkg.groupSize}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-text-muted">
                  <MapPin className="w-4 h-4 mr-1" />
                  {pkg.agent}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  <Button variant="cta" size="sm">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;