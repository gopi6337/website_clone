import { Code, Lightbulb, Target, Rocket, Users, Code2, Zap, Palette, Gamepad2, Bot, Wifi, Blocks, Award, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CodingCurriculumSection() {

  const codingConcepts = [
    { name: "Python", iconImg: "/python.webp", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", iconImg: "/javascript.webp", color: "from-yellow-400 to-yellow-600" },
    { name: "HTML/CSS", iconImg: "/html-css.webp", color: "from-pink-400 to-pink-600" },
    { name: "Web/App/Game Development", iconImg: "/webgameapp-development.webp", color: "from-purple-400 to-purple-600" },
    { name: "Artificial Intelligence", icon: <Bot className="w-12 h-12" />, color: "from-cyan-400 to-cyan-600" },
    { name: "Block Based Coding", iconImg: "/block-based-coding.webp", color: "from-orange-400 to-orange-600" },
  ];

  const keyFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Structured & Comprehensive Curriculum",
      description: "Well-designed progression from basics to advanced concepts",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Based Coding",
      description: "Learn by building real-world applications and games",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving & Logical Thinking",
      description: "Develop critical thinking skills that last a lifetime",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Build Creativity & Self-Expression",
      description: "Express ideas through code and bring imagination to life",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Prepare for Future in Tech",
      description: "Equip kids with skills for tomorrow's digital world",
    },
  ];

  const codingCourses = [
    {
      title: "Python Fundamentals and Data Visualization",
      lessons: 60,
      grade: "Grade 5-10",
      description: "Learn Python fundamentals with interactive apps and games. Explore the basics, learn about different libraries, OOPs and data visualization concepts with real-time examples.",
      outcomes: [
        "Master Python fundamentals",
        "Build cool GUI-based apps and games",
        "Object-oriented programming concepts learned",
      ],
      color: "from-blue-500 to-blue-700",
      iconImg: "/python.webp",
    },
    {
      title: "Python with AI",
      lessons: 36,
      grade: "Grade 5-10",
      description: "Master AI-based concepts like machine learning, neural networks, natural language processing etc. with real-world projects.",
      outcomes: [
        "Learn to code like a pro",
        "Create amazing apps and games",
        "Clear understanding of AI concepts",
      ],
      color: "from-purple-500 to-purple-700",
      icon: <Sparkles className="w-16 h-16 text-purple-600" />,
    },
    {
      title: "Block-Based Coding",
      lessons: 30,
      grade: "Grade 5-10",
      description: "Dive into the world of coding with blocks, easy to learn and use. Learn logic of app and game creation, animations with ease.",
      outcomes: [
        "Create apps, games, animation using code.org",
        "Understand concepts and logic of programming easily",
      ],
      color: "from-orange-500 to-orange-700",
      iconImg: "/block-based-coding.webp",
    },
    {
      title: "Web Development",
      lessons: 50,
      grade: "Grade 5-10",
      description: "Learn fundamentals of website development using HTML, CSS, JavaScript and incorporate AI into it. Build interactive websites.",
      outcomes: [
        "Build interactive and responsive websites",
        "Build personal websites, portfolios, landing pages",
        "Learn HTML, CSS and JavaScript together to create amazing web pages, web apps and games",
      ],
      color: "from-cyan-500 to-cyan-700",
      icon: <Globe className="w-16 h-16 text-cyan-600" />,
    },
    {
      title: "App/Game Development with AI",
      lessons: 96,
      grade: "Grade 5-10",
      description: "Learn to create interactive responsive apps and games using HTML, CSS, JS. Boost your app and game development skills with Visual Studio platform and database connectivity.",
      outcomes: [
        "Build interactive and responsive apps and games",
        "Connect, store and retrieve values from a database",
        "Learn HTML, CSS and JavaScript together to create amazing apps and games and share with the world",
      ],
      color: "from-pink-500 to-pink-700",
      iconImg: "/webgameapp-development.webp",
    },
    {
      title: "Certifications",
      lessons: null,
      grade: "Grade 5-10",
      description: "Excellent support for professional certifications. Providing resources like course materials, study guides, PowerPoint presentations and practice assessments.",
      outcomes: [
        "PCEP (Certified Entry-Level Python Programmer) Certification by Python Institute",
        "WDA (Certified Associate Web Developer) Certification by OpenEDG",
      ],
      color: "from-green-500 to-green-700",
      icon: <Award className="w-16 h-16 text-green-600" />,
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-xl">💻</span>
            Online Coding Classes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coding For Kids <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AGE 6-15</span>
          </h2>
          <p className="text-2xl font-semibold text-gray-700 mb-2">Learn • Code • Innovate</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From learning software languages, building apps and games, developing websites to delving into the new world of AI - Master the technologies that power our digital world with 1:1 fun interactive sessions
          </p>
        </div>

        {/* Coding Concepts Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Coding Concepts We Teach
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {codingConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="group bg-white hover:shadow-xl rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 border-2 border-gray-100"
              >
                <div className={`bg-gradient-to-br ${concept.color} text-white p-4 rounded-lg mb-3 transform group-hover:scale-110 transition-transform inline-flex items-center justify-center`}>
                  {concept.iconImg ? (
                    <img src={concept.iconImg} alt={concept.name} className="w-12 h-12 object-contain" />
                  ) : (
                    concept.icon
                  )}
                </div>
                <h4 className="text-sm font-bold text-gray-900 leading-tight">{concept.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Our Coding Program?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-600"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-blue-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* 1:1 Fun Interactive Sessions */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-blue-600 flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">1:1 Fun Interactive Sessions</h4>
                  <p className="text-sm text-gray-600">
                    Personalized attention with expert instructors in engaging, hands-on classes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coding Courses - Grid Layout */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Our Coding Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codingCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 hover:shadow-lg transition-shadow border-2 border-blue-100"
              >
                {/* Course Icon and Title */}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {course.iconImg ? (
                      <img src={course.iconImg} alt={course.title} className="w-16 h-16 object-contain" />
                    ) : (
                      course.icon
                    )}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h4>
                  <p className="text-sm font-semibold text-blue-600 mb-2">{course.grade}</p>
                  {course.lessons && (
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Code2 className="w-4 h-4" />
                      <span className="text-sm font-semibold">{course.lessons} Lessons</span>
                    </div>
                  )}
                </div>

                {/* Course Description */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Learning Outcomes */}
                <div className="space-y-3 mb-6">
                  {course.outcomes.map((outcome, oidx) => (
                    <div key={oidx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
