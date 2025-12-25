import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="EduVerseJr Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <div className="flex flex-col">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                EduVerseJr
              </div>
              <div className="text-xs md:text-sm text-gray-600 italic">
                Explore Your Learning Universe
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#why-choose" className="nav-link">
              Why Choose Us
            </a>
            <a href="#curriculum" className="nav-link">
              Curriculum
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full" onClick={() => window.location.hash = '#booking'}>
              Book a FREE Trial
            </Button>
            <Button variant="ghost" className="rounded-full">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#why-choose" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Why Choose Us
            </a>
            <a href="#curriculum" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Curriculum
            </a>
            <a href="#testimonials" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contact" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
            <div className="space-y-2 pt-4">
              <Button className="w-full rounded-full" onClick={() => { setIsMenuOpen(false); window.location.hash = '#booking'; }}>Book a FREE Trial</Button>
              <Button variant="ghost" className="w-full rounded-full">
                Login
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
