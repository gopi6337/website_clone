import { Button } from "@/components/ui/button";
import {
  Zap,
  BookOpen,
  Users,
  Target,
  Eye,
  Globe,
} from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Personalized Learning Paths",
      description: "Tailored to your child's unique pace and needs",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Interactive and Engaging Lessons",
      description: "Experience math like never before with simulations, and gamified learning.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Tutors",
      description: "Access to highly trained tutors for personalized 1-on-1 guidance.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Comprehensive Coverage",
      description: "Excel in School Math and ace Olympiads, Math Kangaroo, PSAT, NAPLAN, PCEP, WDA and other certifications.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Curriculum Alignment",
      description: "Designed to meet US Common Core, British, Australian, Singapore, UAE standards.",
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Choose EduVerseJr?</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            0% Worries About Your Child's Math and Coding Journey
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock your child's potential in math and coding with personalized learning,
            expert tutors, and engaging tools for mastery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold" onClick={() => window.location.hash = '#booking'}>
            Start Your FREE Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
