import { Users, Globe, Award, Heart } from "lucide-react";

export default function AboutUsSection() {
  const teamFeatures = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      text: "Extensive experience with grades 5-8 students",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      text: "Expert online teaching proficiency",
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      text: "Deep mastery in math and coding",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      text: "International curriculum expertise (US, UK, Singapore, Australia, Dubai)",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">About EduVerseJr</h2>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              At EduVerseJr, we empower students in grades 5-8 with the critical
              math and coding skills necessary to thrive in the 21st century.
              Through exceptional one-to-one online instruction, we cultivate a
              love for learning, build confidence, and foster problem-solving
              abilities that serve students throughout their academic journey.
            </p>
          </div>
        </div>

        {/* Our Expert Team */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Expert Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <p className="text-gray-700 text-lg">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Commitment to Parents
            </h3>
            <p className="text-lg leading-relaxed">
              We partner with parents through open communication and regular
              progress updates, ensuring your child receives the best support
              in a safe, nurturing online environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
