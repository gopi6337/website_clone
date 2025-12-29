import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

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
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="nav-link flex items-center gap-1"
              >
                Courses
                <ChevronDown size={16} className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[150px] border border-gray-100">
                  <a href="#curriculum" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                    Math
                  </a>
                  <a href="#curriculum" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                    Coding
                  </a>
                </div>
              )}
            </div>
            <a href="#why-choose" className="nav-link">
              Why Choose Us
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
            <div>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="nav-link flex items-center gap-1 w-full text-left"
              >
                Courses
                <ChevronDown size={16} className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCoursesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="#curriculum" className="block nav-link text-sm" onClick={() => setIsMenuOpen(false)}>
                    Math
                  </a>
                  <a href="#curriculum" className="block nav-link text-sm" onClick={() => setIsMenuOpen(false)}>
                    Coding
                  </a>
                </div>
              )}
            </div>
            <a href="#why-choose" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Why Choose Us
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
