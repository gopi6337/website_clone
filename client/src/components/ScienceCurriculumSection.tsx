import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function ScienceCurriculumSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const topics = [
    "Biology: Cells, Genetics & Ecology",
    "Chemistry: Atoms, Reactions & Periodic Table",
    "Physics: Forces, Energy & Electricity",
    "Earth & Space Science",
    "Scientific Inquiry & Experimentation",
    "Environmental Science & Sustainability",
    "Human Body Systems & Health",
  ];

  const learningOutcomes = [
    "Develop strong scientific reasoning skills",
    "Build a solid foundation in Biology, Chemistry & Physics",
    "Excel in school science exams and assessments",
    "Cultivate curiosity and analytical thinking",
    "Gain confidence in scientific concepts",
    "Apply science knowledge to real-world situations",
  ];

  const gradeBreakdown = [
    { grade: "Grade 5", topics: "Ecosystems, Matter Properties, Solar System, Earth's Layers" },
    { grade: "Grade 6", topics: "Cells, Atoms & Molecules, Rock Cycle, Simple Machines" },
    { grade: "Grade 7", topics: "Genetics, Periodic Table, Plate Tectonics, Chemical Changes" },
    { grade: "Grade 8", topics: "Evolution, Newton's Laws, Waves, Astronomy" },
    { grade: "Grade 9", topics: "Cell Biology, Atomic Structure, Chemical Bonding, Motion & Forces" },
    { grade: "Grade 10", topics: "Biotechnology, Organic Chemistry, Nuclear Physics, Electromagnetism" },
  ];

  const countries = [
    {
      countryCode: "us",
      name: "United States",
      slug: "united-states",
      standards: "Next Generation Science Standards (NGSS)",
      details: [
        "Aligned with Next Generation Science Standards (NGSS)",
        "Covers Grade 5-10 comprehensive curriculum",
        "Prepares for state science assessments and SAT Subject Tests",
      ],
      curriculum: "/content/science/US Science Curriculum Grade 5-10.md"
    },
    {
      countryCode: "gb",
      name: "United Kingdom",
      slug: "united-kingdom",
      standards: "UK National Curriculum (KS2–KS4)",
      details: [
        "Follows UK National Curriculum guidelines",
        "Covers Key Stage 2, 3 & 4 (Grade 5-10)",
        "Supports SATs and GCSE Science preparation",
      ],
      curriculum: "/content/science/UK Science Curriculum Grade 5-10.md"
    },
    {
      countryCode: "ca",
      name: "Canada",
      slug: "canada",
      standards: "Provincial Curriculum Standards",
      details: [
        "Aligned with provincial science curriculum standards",
        "Covers Grade 5-10 across all provinces",
        "Supports standardized science testing preparation",
      ],
      curriculum: "/content/science/Canadian Science Curriculum Grade 5-10.md"
    },
    {
      countryCode: "au",
      name: "Australia",
      slug: "australia",
      standards: "Australian Curriculum (ACARA)",
      details: [
        "Meets Australian Curriculum (ACARA) requirements",
        "Covers Years 5-10 across all states",
        "Supports NAPLAN and ATAR Science preparation",
      ],
      curriculum: "/content/science/Australian Science Curriculum Grade 5-10.md"
    },
    {
      countryCode: "sg",
      name: "Singapore",
      slug: "singapore",
      standards: "MOE Singapore Syllabus",
      details: [
        "Based on MOE Singapore Science syllabus",
        "Covers Primary 5-6 to Secondary 4 (Grade 5-10)",
        "Prepares for PSLE and O-Level Science examinations",
      ],
      curriculum: "/content/science/Singapore Science Curriculum Grade 5-10.md"
    },
    {
      countryCode: "ae",
      name: "UAE (Dubai)",
      slug: "uae",
      standards: "UAE Ministry of Education",
      details: [
        "Aligned with UAE Ministry of Education standards",
        "Covers Cycle 2 & 3 (Grade 5-10)",
        "Prepares for EmSAT Science and local assessments",
      ],
      curriculum: "/content/science/UAE Science Curriculum Grade 5-10.md"
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-xl">🔬</span>
            Online Science Classes
          </div>
          <h2 className="section-heading">Science Curriculum (Grade 5-10)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive science education aligned with international standards
          </p>

          {/* Country Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {countries.map((country, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 md:px-6 md:py-3 rounded-full">
                <span className={`fi fi-${country.countryCode}`} style={{ fontSize: '2rem' }}></span>
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
              Our science curriculum is carefully aligned with the educational standards of six countries, ensuring your child learns exactly what they need for success in their local school system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 hover:shadow-lg transition-shadow border-2 border-blue-100 flex flex-col"
              >
                {/* Flag and Name */}
                <div className="text-center mb-6">
                  <span className={`fi fi-${country.countryCode}`} style={{ fontSize: '4rem', display: 'inline-block', marginBottom: '0.75rem' }}></span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{country.name}</h3>
                  <p className="text-sm font-semibold text-blue-600">{country.standards}</p>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6 flex-grow">
                  {country.details.map((detail, didx) => (
                    <div key={didx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Grade Wise Curriculum Button */}
                <Link
                  href={`/science-curriculum/${country.slug}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors mt-auto"
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
              EduVerseJr provides curriculum-aligned science education that meets your local standards while maintaining international excellence.
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
