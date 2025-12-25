export default function CountryAlignmentSection() {
  const countries = [
    {
      flag: "🇺🇸",
      name: "United States",
      standards: "Common Core State Standards (CCSS)",
      details: [
        "Aligned with Common Core State Standards (CCSS)",
        "Covers all major mathematical domains",
        "Prepares students for state assessments",
      ],
    },
    {
      flag: "🇬🇧",
      name: "United Kingdom",
      standards: "UK National Curriculum",
      details: [
        "Follows UK National Curriculum guidelines",
        "Meets Key Stage 2 & 3 requirements",
        "Supports GCSE preparation",
      ],
    },
    {
      flag: "🇨🇦",
      name: "Canada",
      standards: "Provincial Curriculum Standards",
      details: [
        "Aligned with provincial curriculum standards",
        "Covers Ontario, BC, Alberta requirements",
        "Supports standardized testing preparation",
      ],
    },
    {
      flag: "🇦🇺",
      name: "Australia",
      standards: "Australian Curriculum",
      details: [
        "Meets Australian Curriculum requirements",
        "Covers all content strands",
        "Supports NAPLAN preparation",
      ],
    },
    {
      flag: "🇸🇬",
      name: "Singapore",
      standards: "Singapore Math Methodology",
      details: [
        "Based on Singapore Math methodology",
        "Follows Ministry of Education syllabus",
        "Emphasizes problem-solving approach",
      ],
    },
    {
      flag: "🇦🇪",
      name: "UAE (Dubai)",
      standards: "UAE Ministry of Education",
      details: [
        "Aligned with UAE Ministry of Education standards",
        "Supports both CBSE and British curricula",
        "Prepares for local assessments",
      ],
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Country-Specific Curriculum Alignment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our curriculum is carefully aligned with the educational standards of six countries, ensuring your child learns exactly what they need for success in their local school system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 hover:shadow-lg transition-shadow border-2 border-blue-100"
            >
              {/* Flag and Name */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{country.flag}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{country.name}</h3>
                <p className="text-sm font-semibold text-blue-600">{country.standards}</p>
              </div>

              {/* Details */}
              <div className="space-y-3">
                {country.details.map((detail, didx) => (
                  <div key={didx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Parents around the world
          </h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            EduVerseJr provides curriculum-aligned education that meets your local standards while maintaining international excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
