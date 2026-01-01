import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function MathCurriculumSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const topics = [
    "Algebra & Equations",
    "Geometry & Trigonometry",
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
    {
      code: "🇺🇸",
      name: "United States",
      standards: "Common Core State Standards (CCSS)",
      details: [
        "Aligned with Common Core State Standards (CCSS)",
        "Covers Grades 5-10 comprehensive curriculum",
        "Prepares for SAT, ACT, PSAT assessments",
      ],
      curriculum: "/content/maths/US Math Curriculum Grades 5-10 Parent Guide.pdf"
    },
    {
      code: "🇬🇧",
      name: "United Kingdom",
      standards: "UK National Curriculum",
      details: [
        "Follows UK National Curriculum guidelines",
        "Covers Key Stage 2, 3 & 4 (Grades 5-10)",
        "Supports SATs and GCSE preparation",
      ],
      curriculum: "/content/maths/UK Math Curriculum Grades 5-10 Parent Guide.pdf"
    },
    {
      code: "🇨🇦",
      name: "Canada",
      standards: "Provincial Curriculum Standards",
      details: [
        "Aligned with provincial curriculum standards",
        "Covers Grades 5-10 across all provinces",
        "Supports standardized testing preparation",
      ],
      curriculum: "/content/maths/Canadian Math Curriculum Grades 5-10 Parent Guide.pdf"
    },
    {
      code: "🇦🇺",
      name: "Australia",
      standards: "Australian Curriculum",
      details: [
        "Meets Australian Curriculum requirements",
        "Covers Years 5-10 across all states",
        "Supports NAPLAN and ATAR preparation",
      ],
      curriculum: "/content/maths/Australian Math Curriculum Grades 5-10 Parent Guide.pdf"
    },
    {
      code: "🇸🇬",
      name: "Singapore",
      standards: "Singapore Math Methodology",
      details: [
        "Based on Singapore Math methodology",
        "Covers Primary 5-6 to Secondary 4 (Grades 5-10)",
        "Prepares for PSLE and O-Level examinations",
      ],
      curriculum: "/content/maths/Singapore Math Curriculum Grades 5-10 Parent Guide.pdf"
    },
    {
      code: "🇦🇪",
      name: "UAE (Dubai)",
      standards: "UAE Ministry of Education",
      details: [
        "Aligned with UAE Ministry of Education standards",
        "Covers Cycle 2 & 3 (Grades 5-10)",
        "Prepares for EmSAT and local assessments",
      ],
      curriculum: "/content/maths/UAE Math Curriculum Grades 5-10 Parent Guide.pdf"
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-xl">💻</span>
            Online Math Classes
          </div>
          <h2 className="section-heading">Math Curriculum (Grades 5-10)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive math education aligned with international standards
          </p>

          {/* Country Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {countries.map((country, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 md:px-6 md:py-3 rounded-full">
                <span className="text-3xl md:text-4xl">{country.code}</span>
                <span className="text-sm md:text-base font-medium text-gray-700">{country.name}</span>
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

        {/* Country-Specific Curriculum Alignment */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="section-heading">Country-Specific Curriculum Alignment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our curriculum is carefully aligned with the educational standards of six countries, ensuring your child learns exactly what they need for success in their local school system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 hover:shadow-lg transition-shadow border-2 border-blue-100"
              >
                {/* Flag and Name */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-3">{country.code}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{country.name}</h3>
                  <p className="text-sm font-semibold text-blue-600">{country.standards}</p>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  {country.details.map((detail, didx) => (
                    <div key={didx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Grade Wise Curriculum Button */}
                <Link
                  href={`/curriculum/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Grade Wise Curriculum
                </Link>
              </div>
            ))}
          </div>

          {/* Trust Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Parents around the world
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              EduVerseJr provides curriculum-aligned education that meets your local standards while maintaining international excellence.
            </p>
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

      </div>
    </section>
  );
}
