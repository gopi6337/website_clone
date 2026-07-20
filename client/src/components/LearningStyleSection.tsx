import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function LearningStyleSection() {
  const [activeTab, setActiveTab] = useState("teaching");

  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Explore How EduVerseJr Fits Your Child's Learning Style
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether your child thrives with direct guidance, self-paced exploration,
            or AI-powered teaching, EduVerseJr has the perfect learning experience.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("teaching")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "teaching"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 border-2 border-gray-200"
            }`}
          >
            1 to 1 Teaching
          </button>
          <button
            onClick={() => setActiveTab("selfpaced")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "selfpaced"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 border-2 border-gray-200"
            }`}
          >
            Self-Paced Learning
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === "ai"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-900 border-2 border-purple-200"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Reva AI Teacher
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            {activeTab === "teaching" && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Live 1-to-1 Classes: Personalized instruction with expert
                  teachers.
                </h3>
                <p className="text-gray-600 mb-6">
                  Get the best of both worlds with live, personalized
                  instruction from expert teachers. Our 1-to-1 classes ensure
                  that your child receives focused attention, tailored to their
                  unique learning needs.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full" onClick={() => window.location.hash = '#booking'}>
                  Book a FREE Trial
                </Button>
              </>
            )}
            {activeTab === "selfpaced" && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Self-Paced Learning: Learn at your own rhythm.
                </h3>
                <p className="text-gray-600 mb-6">
                  Experience the flexibility of self-paced learning where you can progress at your own pace, learn anytime, anywhere, and achieve your goals on your own terms.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full" onClick={() => window.location.hash = '#booking'}>
                  Start Your FREE Trial
                </Button>
              </>
            )}
            {activeTab === "ai" && (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Reva: AI Teacher, Always On.
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Reva is our AI-powered math teacher — available 24/7 to explain
                  concepts, work through problems step-by-step, and adapt to your
                  child's pace. No waiting for a scheduled class.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                    Instant answers with full explanations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                    Interactive whiteboard for visual learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                    Tracks weak areas and suggests revision
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                    Maths for Grades 5–12 — SAT & PSAT Math prep included
                  </li>
                </ul>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full"
                  onClick={() => window.location.href = '/reva'}
                >
                  Try Reva for Free
                </Button>
              </>
            )}
          </div>

          {/* Image */}
          <div className="rounded-lg h-96 overflow-hidden">
            <img
              src="/replace-video.webp"
              alt="Learning Experience"
              width="1600"
              height="1068"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
