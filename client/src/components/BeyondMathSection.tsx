import { Button } from "@/components/ui/button";

export default function BeyondMathSection() {
  const englishPrograms = [
    {
      number: "1",
      title: "Early Reading",
      description:
        "Develop a strong foundation in reading with engaging lessons tailored for young learners.",
    },
    {
      number: "2",
      title: "English Master",
      description:
        "Enhance grammar, vocabulary, and comprehension through interactive exercises.",
    },
    {
      number: "3",
      title: "Skilled Writer",
      description:
        "Build creative writing skills and learn to communicate effectively.",
    },
  ];

  const codingPrograms = [
    {
      number: "1",
      title: "Game Development with Scratch",
      description:
        "Learn the basics of coding by creating fun, interactive games.",
    },
    {
      number: "2",
      title: "Foundational Python",
      description:
        "Get a head start in one of the most popular programming languages with easy-to-follow lessons.",
    },
    {
      number: "3",
      title: "Advanced Python",
      description:
        "Take your coding skills to the next level with advanced concepts.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Beyond Math</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Explore Our English and Coding Programs
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            EduVerseJr isn't just about mastering math. We also offer innovative
            programs in English and coding, designed to build essential skills
            for the future.
          </p>
        </div>

        {/* English Programs */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-gray-900 mb-2">
            English Programs
          </h4>
          <p className="text-gray-600 mb-8">For age 3 to 12 yrs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {englishPrograms.map((program, idx) => (
              <div key={idx} className="feature-card">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {program.number}
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h5>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Programs */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-gray-900 mb-2">
            Coding Programs
          </h4>
          <p className="text-gray-600 mb-8">For age 5 to 15 yrs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {codingPrograms.map((program, idx) => (
              <div key={idx} className="feature-card">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {program.number}
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h5>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold">
            Start Your FREE Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
