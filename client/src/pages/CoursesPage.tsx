import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import MathCurriculumSection from "@/components/MathCurriculumSection";
import ScienceCurriculumSection from "@/components/ScienceCurriculumSection";
import CodingCurriculumSection from "@/components/CodingCurriculumSection";
import BookingSection from "@/components/BookingSection";
import FooterSection from "@/components/FooterSection";
import { Brain, FlaskConical, Code2 } from "lucide-react";
import { Link } from "wouter";
import { GRADES } from "@/data/gradeLevels";

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
        <title>Courses — EduVerseJr | Maths, Science & Coding for Grades 5–12</title>
        <meta name="description" content="Maths, Science and Coding courses for Grades 5–12 aligned with US, UK, Australia, Singapore, Canada and UAE curricula. Expert human teachers + Reva AI Teacher." />
        <link rel="canonical" href="https://eduversejr.com/courses" />
        <meta property="og:title" content="Courses — EduVerseJr | Maths, Science & Coding for Grades 5–12" />
        <meta property="og:description" content="Curriculum-aligned Maths, Science and Coding for Grades 5–12 across 6 countries. Human teachers + Reva AI Teacher." />
        <meta property="og:url" content="https://eduversejr.com/courses" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Courses — EduVerseJr | Maths, Science & Coding for Grades 5–12" />
        <meta name="twitter:description" content="Maths, Science and Coding for Grades 5–12 across US, UK, Australia, Singapore, Canada and UAE. Human teachers + Reva AI." />
        <meta name="twitter:image" content="https://eduversejr.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "EduVerseJr", "item": "https://eduversejr.com/" },
            { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://eduversejr.com/courses" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "EduVerseJr Courses — Maths, Science & Coding",
          "description": "Curriculum-aligned courses for Grades 5–12 taught by expert human teachers and Reva AI Teacher, covering US, UK, Canada, Australia, Singapore and UAE curricula.",
          "url": "https://eduversejr.com/courses",
          "numberOfItems": 3,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Course",
                "name": "Mathematics — Grades 5–12",
                "description": "Comprehensive Maths programme covering Algebra, Geometry, Trigonometry and Statistics. Aligned with US Common Core, UK, Canada, Australia, Singapore and UAE curricula. Taught by expert human teachers and Reva AI Teacher.",
                "provider": { "@type": "EducationalOrganization", "name": "EduVerseJr", "url": "https://eduversejr.com" },
                "educationalLevel": "Grades 5–12",
                "teaches": "Algebra, Geometry, Trigonometry, Statistics, Mathematical Reasoning",
                "courseMode": "Online",
                "url": "https://eduversejr.com/courses"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Course",
                "name": "Science — Grades 5–10",
                "description": "Science programme covering Biology, Chemistry, Physics, and Earth & Space Science for Grades 5–10. Aligned with NGSS (US), UK National Curriculum, ACARA, Singapore MOE and UAE standards.",
                "provider": { "@type": "EducationalOrganization", "name": "EduVerseJr", "url": "https://eduversejr.com" },
                "educationalLevel": "Grades 5–10",
                "teaches": "Biology, Chemistry, Physics, Earth Science",
                "courseMode": "Online",
                "url": "https://eduversejr.com/courses"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Course",
                "name": "Coding & Programming — Grades 5–10",
                "description": "Coding programme covering Python, JavaScript, HTML/CSS, block-based coding and web/app development for Grades 5–10.",
                "provider": { "@type": "EducationalOrganization", "name": "EduVerseJr", "url": "https://eduversejr.com" },
                "educationalLevel": "Grades 5–10",
                "teaches": "Python, JavaScript, HTML, CSS, Web Development, Block-Based Coding",
                "courseMode": "Online",
                "url": "https://eduversejr.com/courses"
              }
            }
          ]
        })}</script>
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="hero-gradient py-10 md:py-12 mx-4 md:mx-8 my-8 rounded-3xl text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Our Courses
          </h1>
          <p className="text-white/90 text-base max-w-xl mx-auto mb-6">
            All three subjects available with expert human teachers. Reva AI is live for
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

      {/* Maths by grade — internal links to grade-specific landing pages */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Maths tutoring by grade</h2>
          <p className="text-gray-600 mb-6">See exactly what each grade covers and how Reva AI helps — Grades 5 to 12.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {GRADES.map((g) => (
              <Link key={g.slug} href={`/courses/${g.slug}`}>
                <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-semibold text-sm cursor-pointer transition-all">
                  Grade {g.grade} Maths
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div id="booking">
        <BookingSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </div>
  );
}
