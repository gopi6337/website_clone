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
      <div className="w-full max-w-[1600px] mx-auto px-3 lg:px-5 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer shrink-0">
              <img
                src="/logo.jpg"
                alt="EduVerseJr Logo"
                className="h-10 w-10 md:h-11 md:w-11 object-contain shrink-0"
              />
              <div className="flex flex-col shrink-0">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight whitespace-nowrap">
                  EduVerseJr
                </div>
                <div className="text-[11px] text-gray-600 italic whitespace-nowrap">
                  Explore Your Learning Universe
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-[1300px]:flex items-center gap-x-1.5 text-[11px]">
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
            <Link href="/sat" className="nav-link whitespace-nowrap">
              SAT Prep
            </Link>
            <Link href="/psat" className="nav-link whitespace-nowrap">
              PSAT Prep
            </Link>
            <Link href="/resources" className="nav-link whitespace-nowrap">
              Resources
            </Link>
            <a href="/#pricing" className="nav-link whitespace-nowrap">
              Pricing
            </a>
            <a href="/#testimonials" className="nav-link whitespace-nowrap">
              Testimonials
            </a>
            <a href="/#faq" className="nav-link">
              FAQ
            </a>
            <a href="/#booking" className="nav-link whitespace-nowrap">
              Contact Us
            </a>
            <a
              href="https://revaai.eduversejr.com/login"
              className="whitespace-nowrap font-bold text-base text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-full px-4 py-1.5 transition-colors"
            >
              Sign in
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden min-[1300px]:flex items-center gap-1.5 shrink-0">
            <Button variant="outline" className="rounded-full text-[11px] px-2.5 py-1.5 leading-tight text-center bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100 font-bold whitespace-nowrap" onClick={() => window.location.href = '/#booking'}>
              Book a Free Trial<br />Human Teacher
            </Button>
            <Button className="rounded-full bg-purple-600 hover:bg-purple-700 text-white text-[11px] px-2.5 py-1.5 whitespace-nowrap" onClick={() => window.location.href = '/reva'}>
              Try Reva AI Teacher
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="min-[1300px]:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="min-[1300px]:hidden mt-4 space-y-4">
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
            <Link href="/sat" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              SAT Prep
            </Link>
            <Link href="/psat" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              PSAT Prep
            </Link>
            <Link href="/resources" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Resources
            </Link>
            <a href="/#pricing" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="/#testimonials" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="/#faq" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <a href="/#booking" className="block nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
            <a
              href="https://revaai.eduversejr.com/login"
              className="block nav-link font-bold text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in to Reva AI
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
