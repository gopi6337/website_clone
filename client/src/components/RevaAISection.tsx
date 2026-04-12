import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Brain, Target, MessageSquare, FlaskConical, Code2, Lock } from "lucide-react";

export default function RevaAISection() {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Available 24/7",
      description: "Get instant help with homework, practice problems, or exam prep — any time of day.",
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Adaptive & Personalized",
      description: "Reva tracks your child's progress, identifies weak areas, and tailors explanations to their level.",
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Step-by-Step Guidance",
      description: "Interactive whiteboard with worked examples, not just answers — building real understanding.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      title: "Natural Conversation",
      description: "Ask questions in plain English. Reva explains concepts the way a tutor would, not a textbook.",
    },
  ];

  const subjects = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      label: "Maths",
      detail: "Algebra, Geometry, Pre-Calculus & more",
      active: true,
      bg: "bg-purple-600",
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-white/70" />,
      label: "Science",
      detail: "Coming Soon",
      active: false,
      bg: "bg-gray-400",
    },
    {
      icon: <Code2 className="w-8 h-8 text-white/70" />,
      label: "Coding",
      detail: "Coming Soon",
      active: false,
      bg: "bg-gray-400",
    },
  ];

  return (
    <section id="reva-ai" className="py-10 md:py-14 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Powered by Claude AI
          </div>
          <h2 className="section-heading">Meet Reva, Your AI Math Tutor</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reva is EduVerseJr's AI-powered tutor — always available, endlessly patient,
            and designed to help your child truly understand math, not just memorise it.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {subjects.map((sub) => (
            <div
              key={sub.label}
              className={`relative flex flex-col items-center gap-2 px-8 py-5 rounded-2xl text-white min-w-[140px] shadow-md ${sub.bg} ${!sub.active ? "opacity-60" : ""}`}
            >
              {sub.icon}
              <span className="font-bold text-lg">{sub.label}</span>
              <span className="text-xs text-white/90">{sub.detail}</span>
              {!sub.active && (
                <div className="absolute top-2 right-2">
                  <Lock className="w-4 h-4 text-white/70" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
              <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let Your Child Try Reva — For Free
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            No credit card. No setup. Just sign up and start learning maths
            with an AI tutor that never runs out of patience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-6 rounded-full text-lg font-bold"
              onClick={() => window.open('http://agenticaifirst.in', '_blank')}
            >
              Start Free with Reva
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-700 px-10 py-6 rounded-full text-lg font-semibold"
              onClick={() => window.location.hash = '#booking'}
            >
              Book a Human Tutor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
