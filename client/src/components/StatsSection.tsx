export default function StatsSection() {
  const stats = [
    {
      number: "1,000,000+",
      label: "Hours of learning delivered",
    },
    {
      number: "40+ Countries",
      label: "with active EduVerseJr learners",
    },
    {
      number: "87% of students",
      label: "show improved grades within 3 months",
    },
    {
      number: "4.8/5 Stars",
      label: "on Google and Facebook",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Sania Mirza Testimonial */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md text-center">
          <p className="text-lg text-gray-700 mb-4">
            Proudly supported by Sania Mirza, India's tennis legend, who
            champions EduVerseJr's mission to empower young minds
          </p>
          <div className="text-4xl">🎾</div>
        </div>
      </div>
    </section>
  );
}
