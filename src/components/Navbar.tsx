import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", route: "/home" },
    { label: "Packages", route: "/packages" },
    { label: "Blog", route: "/blog" },
    { label: "Shopping", route: "/shopping" },
    { label: "News", route: "/news" },
  ];

  const isActive = (route: string) => location.pathname === route;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 animate-smooth hover:scale-105">
            <span className="text-3xl">🌎</span>
            <span className="text-2xl font-montserrat font-bold bg-gradient-primary bg-clip-text text-transparent">
              Travelly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.route}
                to={link.route}
                className={`font-semibold text-sm uppercase tracking-wide animate-smooth hover:text-primary relative ${
                  isActive(link.route) 
                    ? "text-primary" 
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {link.label}
                {isActive(link.route) && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* User Avatar & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="hero" size="sm">
                Join Now
              </Button>
            </Link>
            <Link to="/profile">
              <Avatar className="w-8 h-8 cursor-pointer animate-smooth hover:scale-110">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/20">
            {navLinks.map((link) => (
              <Link
                key={link.route}
                to={link.route}
                className={`block font-medium animate-smooth ${
                  isActive(link.route) 
                    ? "text-primary" 
                    : "text-text-secondary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border/20">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" size="sm" className="w-full">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;