import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const Shopping = () => {
  const products = [
    {
      id: 1,
      name: "Multi-Day Rucksack",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      price: "₹1,699",
      originalPrice: "₹2,499",
      rating: 4.5,
      brand: "Adventure Pro",
    },
    {
      id: 2,
      name: "Waterproof Hiking Shoes",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop",
      price: "₹2,299",
      originalPrice: "₹3,299",
      rating: 4.7,
      brand: "Trail Master",
    },
    {
      id: 3,
      name: "DSLR Travel Camera",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
      price: "₹49,999",
      originalPrice: "₹65,999",
      rating: 4.8,
      brand: "PhotoTech",
    },
    {
      id: 4,
      name: "Travel Sleeping Bag",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      price: "₹3,299",
      originalPrice: "₹4,299",
      rating: 4.6,
      brand: "Comfort Zone",
    },
    {
      id: 5,
      name: "Portable Travel Charger",
      image: "https://images.unsplash.com/photo-1609592219913-2a0c4e0cd5e2?w=400&h=400&fit=crop",
      price: "₹1,899",
      originalPrice: "₹2,499",
      rating: 4.4,
      brand: "PowerPack",
    },
    {
      id: 6,
      name: "Travel First Aid Kit",
      image: "https://images.unsplash.com/photo-1603398938726-e2c1b05903f2?w=400&h=400&fit=crop",
      price: "₹899",
      originalPrice: "₹1,299",
      rating: 4.3,
      brand: "SafeTravel",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-text-primary mb-4">
            Travel Store
          </h1>
          <p className="text-xl text-text-secondary">
            Essential gear for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer animate-smooth hover:shadow-hover hover:-translate-y-1 border-border/20 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 animate-smooth"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-surface/90 text-text-primary">
                    <Star className="w-3 h-3 mr-1 fill-accent text-accent" />
                    {product.rating}
                  </Badge>
                </div>
                {product.originalPrice !== product.price && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-destructive text-destructive-foreground">
                      SALE
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-text-primary text-lg">{product.name}</CardTitle>
                <p className="text-text-muted text-sm">{product.brand}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                  {product.originalPrice !== product.price && (
                    <div className="text-sm text-text-muted line-through">{product.originalPrice}</div>
                  )}
                </div>
                
                <Button variant="cta" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopping;