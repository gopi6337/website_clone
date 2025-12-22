import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AchieversSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievers = [
    {
      name: "Harvin Singh Karwal",
      location: "Canada",
      achievement: "Achieved 1st place in the 2024 Canadian Math Kangaroo Contest.",
      detail:
        "Mastering concepts four grades ahead, this student is a math prodigy, consistently excelling beyond their age level.",
    },
    {
      name: "Emma Johnson",
      location: "USA",
      achievement: "Scored 98% in Math Olympiad 2024.",
      detail:
        "Exceptional problem-solving skills and dedication to learning have made her a standout student.",
    },
    {
      name: "Aisha Patel",
      location: "India",
      achievement: "Won the National Science Competition.",
      detail:
        "Her innovative approach to coding and math has impressed judges and mentors alike.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievers.length) % achievers.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Spotlight on our Young Achievers</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Meet the EduVerseJr Stars
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our students aren't just learners—they're trailblazers. We are proud
            to celebrate their outstanding achievements and the limitless
            potential they unlock with our platform.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {achievers[currentIndex].name}
              </h4>
              <p className="text-lg text-gray-600 mb-2">
                {achievers[currentIndex].location}
              </p>
              <p className="text-lg font-semibold text-blue-600 mb-4">
                {achievers[currentIndex].achievement}
              </p>
              <p className="text-gray-600">
                {achievers[currentIndex].detail}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              title="Go to previous achiever"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              title="Go to next achiever"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {achievers.map((_, idx) => (
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
