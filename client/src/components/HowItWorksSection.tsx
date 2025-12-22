export default function HowItWorksSection() {
  const benefits = [
    "Higher grades",
    "Better retention",
    "Strong conceptual knowledge",
    "Increased confidence",
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">How EduVerseJr Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A personalized learning experience that drives exceptional results
            for students.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-16">
          <div className="text-center">
            <div className="text-6xl mb-4">🎥</div>
            <p className="text-gray-600">How It Works Video</p>
          </div>
        </div>

        {/* Research Section */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-md mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Research-Backed Learning for Proven Results
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            At EduVerseJr, our method is grounded in evidence. A recent study by
            the Annenberg Institute at Brown University found that students who
            engaged in personalized, self-paced learning with 1-to-1 tutoring
            showed substantial improvements in academic performance.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-900 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-blue-600 text-white rounded-lg">
              <div className="text-5xl font-bold mb-2">20X</div>
              <p className="text-lg">20 times more effective</p>
              <p className="text-sm mt-2">Grade Improvement</p>
            </div>
            <div className="text-center p-6 bg-blue-600 text-white rounded-lg">
              <div className="text-5xl font-bold mb-2">2.5X</div>
              <p className="text-lg">2.5 times more likely to achieve grade-level proficiency.</p>
              <p className="text-sm mt-2">Increased Confidence</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Source: www.annenberg.brown.edu
          </p>
        </div>
      </div>
    </section>
  );
}
