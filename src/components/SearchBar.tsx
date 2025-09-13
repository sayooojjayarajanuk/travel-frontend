import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, MapPin } from "lucide-react";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  
  const tags = ["Pet Friendly", "Wifi", "Adventure", "Self Check-In"];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-card rounded-[var(--radius)] shadow-card border border-border/20">
      <div className="space-y-4">
        {/* Search Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
            <Input
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10 h-12 bg-surface border-border/30 focus:border-primary animate-smooth"
            />
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
            <Input
              type="date"
              placeholder="Dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="pl-10 h-12 bg-surface border-border/30 focus:border-primary animate-smooth"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground animate-smooth"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Search Button */}
        <Button variant="cta" size="lg" className="w-full h-12">
          <Search className="w-5 h-5 mr-2" />
          Search Adventures
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;