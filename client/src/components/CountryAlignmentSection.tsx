export default function CountryAlignmentSection() {
  const countries = [
    {
      countryCode: "us",
      name: "United States",
      standards: "Common Core State Standards (CCSS)",
      details: [
        "Aligned with Common Core State Standards (CCSS)",
        "Covers Grades 5-10 comprehensive curriculum",
        "Prepares for SAT, ACT, PSAT assessments",
      ],
      curriculum: "/content/maths/US Math Curriculum Grades 5-10 Parent Guide.pdf",
    },
    {
      countryCode: "gb",
      name: "United Kingdom",
      standards: "UK National Curriculum",
      details: [
        "Follows UK National Curriculum guidelines",
        "Covers Key Stage 2, 3 & 4 (Grades 5-10)",
        "Supports SATs and GCSE preparation",
      ],
      curriculum: "/content/maths/UK Math Curriculum Grades 5-10 Parent Guide.pdf",
    },
    {
      countryCode: "ca",
      name: "Canada",
      standards: "Provincial Curriculum Standards",
      details: [
        "Aligned with provincial curriculum standards",
        "Covers Grades 5-10 across all provinces",
        "Supports standardized testing preparation",
      ],
      curriculum: "/content/maths/Canadian Math Curriculum Grades 5-10 Parent Guide.pdf",
    },
    {
      countryCode: "au",
      name: "Australia",
      standards: "Australian Curriculum",
      details: [
        "Meets Australian Curriculum requirements",
        "Covers Years 5-10 across all states",
        "Supports NAPLAN and ATAR preparation",
      ],
      curriculum: "/content/maths/Australian Math Curriculum Grades 5-10 Parent Guide.pdf",
    },
    {
      countryCode: "sg",
      name: "Singapore",
      standards: "Singapore Math Methodology",
      details: [
        "Based on Singapore Math methodology",
        "Covers Primary 5-6 to Secondary 4 (Grades 5-10)",
        "Prepares for PSLE and O-Level examinations",
      ],
      curriculum: "/content/maths/Singapore Math Curriculum Grades 5-10 Parent Guide.pdf",
    },
    {
      countryCode: "ae",
      name: "UAE (Dubai)",
      standards: "UAE Ministry of Education",
      details: [
        "Aligned with UAE Ministry of Education standards",
        "Covers Cycle 2 & 3 (Grades 5-10)",
        "Prepares for EmSAT and local assessments",
      ],
      curriculum: "/content/maths/UAE Math Curriculum Grades 5-10 Parent Guide.pdf",
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
                <span className={`fi fi-${country.countryCode} text-6xl mb-3 inline-block`} style={{ fontSize: '4rem' }}></span>
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
              <a
                href={country.curriculum}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Grade Wise Curriculum
              </a>
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
