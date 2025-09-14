import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroMountains from "@/assets/hero-mountains.jpg";
import heroSantorini from "@/assets/hero-santorini.jpg";
import heroAmazon from "@/assets/hero-amazon.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroMountains,
      caption: "Andes Adventure",
      title: "Discover Epic Mountain Trails",
      description: "Experience breathtaking peaks and unforgettable adventures",
    },
    {
      image: heroSantorini,
      caption: "Santorini Views",
      title: "Mediterranean Paradise",
      description: "White-washed villages and stunning sunsets await",
    },
    {
      image: heroAmazon,
      caption: "Amazon Wander",
      title: "Jungle Expedition",
      description: "Explore the world's most biodiverse rainforest",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <span className="text-7xl md:text-9xl drop-shadow-2xl">🌎</span>
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mt-6 drop-shadow-lg">
              Travelly
            </h1>
          </div>

          {/* Current slide content */}
          <div className="space-y-6 mb-12">
            <p className="text-accent text-xl md:text-2xl font-semibold uppercase tracking-wider">
              {slides[currentSlide].caption}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Button */}
          <Link to="/register">
            <Button variant="hero" size="xl" className="text-xl px-12 py-6 h-auto shadow-2xl">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-white/80 text-sm">
            Powered by Travelly | Adventure Begins Here.
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full glass text-white hover:bg-white/20 animate-smooth"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full glass text-white hover:bg-white/20 animate-smooth"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full animate-smooth ${
              index === currentSlide ? "bg-accent" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;