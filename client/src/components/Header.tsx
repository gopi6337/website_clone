import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) {
        setIsCoursesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="/logo.jpg"
                alt="EduVerseJr Logo"
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
              />
              <div className="flex flex-col">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  EduVerseJr
                </div>
                <div className="text-xs text-gray-600 italic">
                  Explore Your Learning Universe
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 text-sm">
            <Link href="/about" className="nav-link whitespace-nowrap">
              About
            </Link>
            <div className="relative" ref={coursesRef}>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="nav-link flex items-center gap-1 whitespace-nowrap"
              >
                Courses
                <ChevronDown size={16} className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[150px] border border-gray-100">
                  <Link href="/courses" onClick={() => setIsCoursesOpen(false)}>
                    <span className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Maths</span>
                  </Link>
                  <Link href="/courses" onClick={() => setIsCoursesOpen(false)}>
                    <span className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Science</span>
                  </Link>
                  <Link href="/courses" onClick={() => setIsCoursesOpen(false)}>
                    <span className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Coding</span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/teachers" className="nav-link whitespace-nowrap">
              Human Teachers
            </Link>
            <Link href="/reva" className="nav-link font-semibold text-purple-600 whitespace-nowrap">
              Reva AI Teacher
            </Link>
            <a href="/#testimonials" className="nav-link whitespace-nowrap">
              Testimonials
            </a>
            <a href="/#faq" className="nav-link">
              FAQ
            </a>
            <a href="/#booking" className="nav-link whitespace-nowrap">
              Contact Us
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" className="rounded-full text-xs px-3 py-2 leading-tight text-center bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100 font-bold" onClick={() => window.location.href = '/#booking'}>
              Book a Free Trial<br />Human Teacher
            </Button>
            <Button className="rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-2 whitespace-nowrap" onClick={() => window.location.href = '/reva'}>
              Try Reva AI Teacher
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
            <Link href="/about" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/courses" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Courses
            </Link>
            <Link href="/teachers" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Human Teachers
            </Link>
            <Link href="/reva" className="block nav-link font-semibold text-purple-600" onClick={() => setIsMenuOpen(false)}>
              Reva AI Teacher
            </Link>
            <a href="/#testimonials" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="/#faq" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <a href="/#booking" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
            <div className="space-y-2 pt-4">
              <Button className="w-full rounded-full" onClick={() => { setIsMenuOpen(false); window.location.href = '/#booking'; }}>Book a Free Trial Human Teacher</Button>
              <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white" onClick={() => { setIsMenuOpen(false); window.location.href = '/reva'; }}>
                Try Reva AI Teacher
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
