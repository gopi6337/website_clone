import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "An excellent tutoring environment with supportive teachers. They helped clear doubts that were once difficult to grasp and my daughter has a very good rapport with her teacher.",
      author: "Vikram Sha",
      role: "Parent, US",
    },
    {
      quote:
        "EduVerseJr is a great platform to learn math. My daughter enjoys the math sessions and the teacher is amazing. She is patient with her and explains concepts well. Very supportive and there is a visible improvement in her performance in school. Thank you!",
      author: "Kevin Green",
      role: "Parent, US",
    },
    {
      quote:
        "Yug has been taking coding classes with EduVerseJr and he enjoys it. He is always keen to join classes and loves coding. The teacher has built a warm, trusting relationship with him. I think the curriculum is very kids friendly and supportive and knowledgeable teachers adds to its credibility.",
      author: "Priya Ahuja",
      role: "Parent, UK",
    },
    {
      quote:
        "My son loves the online coding and math classes from this platform—they're engaging and flexible around our schedule. The friendly teaching style built his confidence fast!",
      author: "Rajesh K.",
      role: "Parent, Canada",
    },
    {
      quote:
        "Great online classes! The tutor explains concepts and logic in a way that even math feels easy. My grades in math have improved and I'm enjoying learning coding at my own pace.",
      author: "Ananya",
      role: "Student, Class 9, US",
    },
    {
      quote:
        "I've been tutored from EduVerseJr for many years and my experience with them has been excellent. The tutor explains everything clearly and provides personalised support. The lessons are well structured and engaging. Highly recommended.",
      author: "Saira Sagga",
      role: "Student, Australia",
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
      </div>
    </section>
  );
}
