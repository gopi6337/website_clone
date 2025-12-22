import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "EduVerseJr has transformed my child's approach to learning. The personalized attention and engaging lessons have made a huge difference!",
      author: "Sarah Johnson",
      role: "Parent",
    },
    {
      quote:
        "I love how I can learn at my own pace. The lessons are fun and the tutors are really supportive!",
      author: "Alex Smith",
      role: "Student",
    },
    {
      quote:
        "The progress my daughter has made in just 3 months is incredible. Highly recommend EduVerseJr!",
      author: "Priya Patel",
      role: "Parent",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Hear from Our Happy Learners and Their Parents
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-8">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-6 text-center">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="text-center">
              <p className="font-bold text-gray-900">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
          <div className="text-4xl font-bold text-blue-600 mb-2">1,00,000+</div>
          <p className="text-lg text-gray-600">Active students worldwide</p>
        </div>
      </div>
    </section>
  );
}
