import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

export default function MathCurriculumSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const topics = [
    "Algebra & Equations",
    "Geometry & Shapes",
    "Statistics & Probability",
    "Number Systems & Operations",
    "Ratios, Proportions & Percentages",
    "Measurement & Units",
    "Data Analysis & Graphs",
  ];

  const learningOutcomes = [
    "Master problem-solving skills",
    "Build strong mathematical foundation",
    "Excel in school exams and assessments",
    "Develop critical thinking abilities",
    "Gain confidence in mathematical concepts",
    "Apply math to real-world situations",
  ];

  const gradeBreakdown = [
    { grade: "Grade 5", topics: "Fractions, Decimals, Basic Geometry, Introduction to Algebra" },
    { grade: "Grade 6", topics: "Ratios, Percentages, Negative Numbers, Basic Statistics" },
    { grade: "Grade 7", topics: "Algebraic Expressions, Linear Equations, Probability" },
    { grade: "Grade 8", topics: "Advanced Algebra, Pythagorean Theorem, Data Analysis" },
    { grade: "Grade 9", topics: "Quadratic Equations, Trigonometry, Advanced Geometry" },
    { grade: "Grade 10", topics: "Functions, Advanced Statistics, Coordinate Geometry" },
  ];

  const countries = [
    { code: "🇺🇸", name: "US" },
    { code: "🇬🇧", name: "UK" },
    { code: "🇨🇦", name: "Canada" },
    { code: "🇦🇺", name: "Australia" },
    { code: "🇸🇬", name: "Singapore" },
    { code: "🇦🇪", name: "UAE" },
  ];

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Math Curriculum (Grades 5-10)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive math education aligned with international standards
          </p>

          {/* Country Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {countries.map((country, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-2xl">{country.code}</span>
                <span className="text-sm font-medium text-gray-700">{country.name}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600">
            Aligned with US, UK, Canadian, Australian, Singapore, and UAE curricula
          </p>
        </div>

        {/* Core Topics */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Topics Covered
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {topics.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What Your Child Will Achieve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-lg">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Grade Breakdown */}
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg p-6 flex justify-between items-center transition-colors mb-4"
          >
            <span className="text-xl font-bold text-gray-900">
              See Grade-by-Grade Breakdown
            </span>
            <ChevronDown
              size={24}
              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>

          {isExpanded && (
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 space-y-4">
              {gradeBreakdown.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="text-lg font-bold text-blue-600 mb-2">{item.grade}</h4>
                  <p className="text-gray-700">{item.topics}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
