import { useState } from "react";
import { ChevronDown, Download, Code, Lightbulb, Target, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CodingCurriculumSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const codingConcepts = [
    { name: "Python", icon: "🐍", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
    { name: "HTML/CSS", icon: "🎨", color: "from-pink-400 to-pink-600" },
    { name: "Web/App/Game Development", icon: "🎮", color: "from-purple-400 to-purple-600" },
    { name: "Artificial Intelligence", icon: "🤖", color: "from-cyan-400 to-cyan-600" },
    { name: "Internet of Things", icon: "🌐", color: "from-green-400 to-green-600" },
    { name: "Block Based Coding", icon: "🧩", color: "from-orange-400 to-orange-600" },
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

  const detailedCurriculum = [
    {
      category: "Beginner Level (Ages 6-9)",
      programs: [
        {
          name: "Block-Based Coding",
          topics: ["Visual programming", "Drag-and-drop coding", "Basic logic", "Animation creation"],
          projects: "Interactive stories, simple games, animations",
        },
        {
          name: "Scratch Programming",
          topics: ["Game design", "Character creation", "Sound effects", "Storytelling"],
          projects: "Arcade games, animated stories, creative projects",
        },
      ],
    },
    {
      category: "Intermediate Level (Ages 10-12)",
      programs: [
        {
          name: "Python Fundamentals",
          topics: ["Syntax & basics", "Variables & data types", "Loops & conditions", "Functions"],
          projects: "Text games, calculators, quiz applications",
        },
        {
          name: "HTML/CSS Basics",
          topics: ["Web page structure", "Styling elements", "Responsive design", "Basic layouts"],
          projects: "Personal websites, portfolios, landing pages",
        },
        {
          name: "JavaScript Introduction",
          topics: ["DOM manipulation", "Events & interactions", "Basic animations", "Form validation"],
          projects: "Interactive web pages, simple web apps, games",
        },
      ],
    },
    {
      category: "Advanced Level (Ages 13-15)",
      programs: [
        {
          name: "Full-Stack Web Development",
          topics: ["Frontend frameworks", "Backend basics", "Databases", "API integration"],
          projects: "Complete web applications, e-commerce sites, social platforms",
        },
        {
          name: "Game Development",
          topics: ["Game engines", "Physics", "AI behavior", "Multiplayer concepts"],
          projects: "2D/3D games, platformers, puzzle games",
        },
        {
          name: "Artificial Intelligence",
          topics: ["Machine learning basics", "Neural networks", "AI applications", "Data science"],
          projects: "Chatbots, image recognition, prediction models",
        },
        {
          name: "Internet of Things (IoT)",
          topics: ["Sensors & actuators", "Arduino/Raspberry Pi", "Smart devices", "Automation"],
          projects: "Smart home systems, robots, wearable tech",
        },
      ],
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
            From visual programming to AI - Master the technologies that power our digital world with 1:1 fun interactive sessions
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
                <div className={`text-5xl mb-3 transform group-hover:scale-110 transition-transform`}>
                  {concept.icon}
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

            {/* 1:1 Fun Interactive Sessions - Special Card */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">1:1 Fun Interactive Sessions</h4>
                  <p className="text-sm text-white/90">
                    Personalized attention with expert instructors in engaging, hands-on classes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Detailed Breakdown */}
        <div className="max-w-5xl mx-auto mb-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl p-6 flex justify-between items-center transition-all shadow-lg"
          >
            <span className="text-xl font-bold">
              View Complete Curriculum by Age Group
            </span>
            <ChevronDown
              size={28}
              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>

          {isExpanded && (
            <div className="bg-white rounded-xl shadow-xl p-8 mt-4 border-2 border-gray-100">
              <div className="space-y-8">
                {detailedCurriculum.map((level, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                      {level.category}
                    </h4>
                    <div className="space-y-4">
                      {level.programs.map((program, pidx) => (
                        <div key={pidx} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h5 className="text-lg font-bold text-gray-900 mb-3">{program.name}</h5>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <span className="font-semibold text-gray-700 block mb-2">Topics Covered:</span>
                              <ul className="space-y-1">
                                {program.topics.map((topic, tidx) => (
                                  <li key={tidx} className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700 block mb-2">Example Projects:</span>
                              <p className="text-sm text-gray-600">{program.projects}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* PDF Download Section */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="text-6xl mb-4">📥</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Download Our Complete Coding Curriculum
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Get detailed curriculum breakdown, lesson plans, and learning outcomes for all age groups (6-15 years)
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
            <Download className="w-5 h-5 mr-2" />
            Download Full Curriculum (PDF)
          </Button>
          <p className="text-sm text-white/70 mt-4">
            Includes detailed breakdown of all 7 coding concepts and age-appropriate learning paths
          </p>
        </div>
      </div>
    </section>
  );
}
