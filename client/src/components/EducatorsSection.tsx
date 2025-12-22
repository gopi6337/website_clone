export default function EducatorsSection() {
  const educatorTraits = [
    {
      letter: "A",
      title: "Certified & Experienced",
      description: "Certified with years of teaching experience.",
    },
    {
      letter: "B",
      title: "Individualized Support",
      description: "Skilled in addressing each student's learning style and pace.",
    },
    {
      letter: "C",
      title: "Trained Professionals",
      description: "Continuously upskilled to stay ahead in education.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Meet Our Certified Educators</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At EduVerseJr, our tutors are more than just teachers—they're mentors
            who inspire and guide each student to reach their full potential.
          </p>
        </div>

        {/* Educator Traits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {educatorTraits.map((trait, idx) => (
            <div key={idx} className="feature-card">
              <div className="text-5xl font-bold text-blue-600 mb-4">
                {trait.letter}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {trait.title}
              </h4>
              <p className="text-gray-600">{trait.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Educator */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍🏫</div>
                <p className="text-gray-600">Educator Photo</p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Maria Anitha
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Bachelor of engineering (computer Science)
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">7</div>
                  <p className="text-gray-600">Years of experience</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">3000+</div>
                  <p className="text-gray-600">Hrs Taught</p>
                </div>
              </div>

              <p className="text-gray-600 italic">
                "Inspiring minds, one student at a time!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
