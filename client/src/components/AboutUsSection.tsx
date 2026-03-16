import { Users, Globe, Award, Heart, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function AboutUsSection() {
  const keyFacts = [
    { label: "Age Range", value: "Grades 5-10 (Ages 10-16)" },
    { label: "Countries Served", value: "6 countries (US, UK, Canada, Australia, Singapore, UAE)" },
    { label: "Learning Mode", value: "100% Online, Live 1-on-1 Classes" },
    { label: "Class Duration", value: "60 minutes per session" },
    { label: "Class Frequency", value: "2+ classes per week" },
    { label: "Subjects Offered", value: "Mathematics, Science & Coding/Programming" },
    { label: "Curriculum Alignment", value: "US Common Core, UK National, Singapore Maths, Australian, Canadian, UAE" },
    { label: "Trial Offer", value: "FREE trial class available" },
  ];

  const teamFeatures = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      text: "Extensive experience with grades 5-10 students",
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

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EduVerseJr",
    "description": "Online personalized coding and math education for children grades 5-10 across 6 countries",
    "url": "https://eduversejr.com",
    "serviceArea": [
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "Singapore",
      "United Arab Emirates"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "Expert instructors"
    },
    "slogan": "Explore Your Learning Universe",
    "knowsAbout": [
      "Online Math Education for Grades 5-10",
      "Coding Education for Children Ages 10-16",
      "One-on-One Tutoring",
      "US Common Core Mathematics",
      "UK National Curriculum",
      "Singapore Maths",
      "Python Programming for Kids",
      "JavaScript for Kids",
      "Web Development Education"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Multiple Countries"
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">About EduVerseJr</h2>
        </div>

        {/* Quick Facts - AI Optimized */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Quick Facts About EduVerseJr
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-200 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-cyan-100 text-sm font-medium mb-1">
                        {fact.label}
                      </div>
                      <div className="text-white font-semibold">
                        {fact.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              At EduVerseJr, we empower students in grades 5 to 10 with the critical
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
