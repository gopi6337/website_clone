import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import MathCurriculumSection from "@/components/MathCurriculumSection";
import ScienceCurriculumSection from "@/components/ScienceCurriculumSection";
import CodingCurriculumSection from "@/components/CodingCurriculumSection";
import BookingSection from "@/components/BookingSection";
import FooterSection from "@/components/FooterSection";
import { Brain, FlaskConical, Code2 } from "lucide-react";

type Subject = "maths" | "science" | "coding";

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<Subject>("maths");

  const tabs: { id: Subject; label: string; icon: React.ReactNode }[] = [
    { id: "maths", label: "Mathematics", icon: <Brain className="w-4 h-4" /> },
    { id: "science", label: "Science", icon: <FlaskConical className="w-4 h-4" /> },
    { id: "coding", label: "Coding", icon: <Code2 className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Courses — EduVerseJr | Maths, Science & Coding for Grades 5–10</title>
        <meta name="description" content="EduVerseJr offers Maths, Science and Coding courses for Grades 5–10 aligned with US, UK, Canada, Australia, Singapore and UAE curricula. Expert human tutors and Reva AI available." />
        <link rel="canonical" href="https://eduversejr.com/courses" />
        <meta property="og:title" content="Courses — EduVerseJr | Maths, Science & Coding" />
        <meta property="og:description" content="Curriculum-aligned Maths, Science and Coding for Grades 5–10 across 6 countries." />
        <meta property="og:url" content="https://eduversejr.com/courses" />
        <meta property="og:image" content="https://eduversejr.com/logo.jpg" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="hero-gradient py-10 md:py-12 mx-4 md:mx-8 my-8 rounded-3xl text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Our Courses
          </h1>
          <p className="text-white/90 text-base max-w-xl mx-auto mb-6">
            All three subjects available with expert human tutors. Reva AI is live for
            Mathematics — Science and Coding AI coming soon.
          </p>

          {/* Subject Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  activeTab === tab.id
                    ? "bg-white text-purple-700 border-white shadow-lg"
                    : "bg-white/20 hover:bg-white/30 border-white/40 text-white"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content — only active subject shown */}
      {activeTab === "maths" && <MathCurriculumSection />}
      {activeTab === "science" && <ScienceCurriculumSection />}
      {activeTab === "coding" && <CodingCurriculumSection />}

      <div id="booking">
        <BookingSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </div>
  );
}
