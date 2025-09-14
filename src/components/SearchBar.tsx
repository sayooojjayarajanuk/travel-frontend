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
    <div className="w-full max-w-5xl mx-auto p-8 bg-gradient-card rounded-xl shadow-xl border border-border/10">
      <div className="space-y-6">
        {/* Search Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
            <Input
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-12 h-14 bg-surface border-border/20 focus:border-primary animate-smooth text-lg rounded-lg shadow-sm focus:shadow-md"
            />
          </div>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
            <Input
              type="date"
              placeholder="Dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="pl-12 h-14 bg-surface border-border/20 focus:border-primary animate-smooth text-lg rounded-lg shadow-sm focus:shadow-md"
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
        <Button variant="cta" size="xl" className="w-full h-16 text-lg font-bold">
          <Search className="w-6 h-6 mr-3" />
          Search Adventures
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;