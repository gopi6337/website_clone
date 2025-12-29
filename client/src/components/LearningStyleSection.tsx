import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LearningStyleSection() {
  const [activeTab, setActiveTab] = useState("tutoring");

  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Explore How EduVerseJr Fits Your Child's Learning Style
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether your child thrives with direct guidance or prefers the
            freedom to explore concepts independently, EduVerseJr offers the
            perfect learning experience.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => { setActiveTab("tutoring"); window.location.hash = '#booking'; }}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "tutoring"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 border-2 border-gray-200"
            }`}
          >
            1 to 1 Tutoring
          </button>
          <button
            onClick={() => { setActiveTab("selfpaced"); window.location.hash = '#booking'; }}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "selfpaced"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 border-2 border-gray-200"
            }`}
          >
            Self-Paced Learning
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            {activeTab === "tutoring" ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Live 1-to-1 Classes: Personalized instruction with expert
                  tutors.
                </h3>
                <p className="text-gray-600 mb-6">
                  Get the best of both worlds with live, personalized
                  instruction from expert tutors. Our 1-to-1 classes ensure
                  that your child receives focused attention, tailored to their
                  unique learning needs.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Self-Paced Learning: Learn at your own rhythm.
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore concepts at your own pace with our comprehensive
                  self-paced learning platform. Access lessons anytime,
                  anywhere, and progress through the material as quickly or
                  slowly as you need.
                </p>
              </>
            )}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full" onClick={() => window.location.hash = '#booking'}>
              Start Your FREE Trial
            </Button>
          </div>

          {/* Video Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎥</div>
              <p className="text-gray-600">Video Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
