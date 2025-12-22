export default function AwardsSection() {
  const awards = [
    {
      title: "STEM.org Accreditation",
      description:
        "Accredited by STEM.org, the leading global STEM credentialing organization, our program ensures a world-class standard in science, technology, engineering, and mathematics education",
    },
    {
      title: "Economic Times Global Indian Leader Award",
      description:
        "Honored with the prestigious 'Economic Times Global Indian Leader Award,' celebrating outstanding leadership and global impact through Education",
    },
    {
      title: "APAC Insider Award",
      description:
        "Recognized with the esteemed APAC Insider Award, presented by the renowned publication celebrating business excellence across the Asia-Pacific region, our program sets a benchmark in innovation and impact.",
    },
    {
      title: "Microsoft Partnership",
      description:
        "In partnership with Microsoft, we are proud to be the first globally to leverage cutting-edge AI technology to revolutionize education and empower learners worldwide.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Awards & Recognitions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="feature-card">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {award.title}
              </h3>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
