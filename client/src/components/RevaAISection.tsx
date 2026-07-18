import { Button } from "@/components/ui/button";
import {
  Sparkles, Clock, Brain, Target, MessageSquare,
  FlaskConical, Code2, Lock, Mic, BarChart3,
  BookOpen, Award, Zap, Globe, GalleryHorizontal,
  Dumbbell, TrendingDown, Upload
} from "lucide-react";

export default function RevaAISection() {
  const coreFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      title: "AI Chat Teacher",
      description: "Natural conversation-based learning. Ask any question in plain English — Reva explains like a patient human teacher.",
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Interactive Whiteboard",
      description: "Step-by-step visual problem solving with a live whiteboard. See how problems are worked through, not just the answer.",
    },
    {
      icon: <GalleryHorizontal className="w-6 h-6 text-purple-600" />,
      title: "Teaching Slides",
      description: "Reva generates structured lesson slides for any topic — visual, clear, and curriculum-aligned — perfect for concept revision.",
    },
    {
      icon: <Mic className="w-6 h-6 text-purple-600" />,
      title: "Voice Interaction",
      description: "Speak your questions out loud. Reva listens, understands, and responds — great for students who learn by talking.",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Available 24/7",
      description: "No waiting for a scheduled class. Get instant homework help, exam revision, or concept explanations any time of day.",
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-purple-600" />,
      title: "Smart Practice",
      description: "AI-generated practice problems tailored to your child's level and weak areas. The harder they practise, the smarter it gets.",
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-purple-600" />,
      title: "Weakness Tracking",
      description: "Automatically detects weak topics from every session and builds a targeted revision plan — no guesswork needed.",
    },
    {
      icon: <Upload className="w-6 h-6 text-purple-600" />,
      title: "Question Paper Upload",
      description: "Upload a question paper, textbook page, or photo of homework. Reva reads it, explains it, and helps solve it instantly.",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Quizzes & Assessments",
      description: "Practice quizzes with instant AI grading and detailed feedback. Every wrong answer is an explanation, not just a red cross.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      title: "Progress Tracking",
      description: "Reva tracks performance across every topic and session, building a clear picture of your child's strengths and gaps.",
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Personalised Learning Path",
      description: "Reva adapts to each student's pace and curriculum. No two students get the same lesson — it's truly personalised.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      title: "Curriculum-Aligned Content",
      description: "All content mapped to US Common Core, UK National, Singapore, Australian, Canadian, and UAE curricula.",
    },
  ];

  const subjects = [
    {
      icon: <Brain className="w-7 h-7 text-white" />,
      label: "Mathematics",
      detail: "US Curriculum · Grades 5–10",
      status: "Live Now",
      active: true,
      bg: "bg-purple-600",
    },
    {
      icon: <FlaskConical className="w-7 h-7 text-white/80" />,
      label: "Science",
      detail: "Planned",
      status: "Planned",
      active: false,
      bg: "bg-gray-400",
    },
    {
      icon: <Code2 className="w-7 h-7 text-white/80" />,
      label: "Coding",
      detail: "Planned",
      status: "Planned",
      active: false,
      bg: "bg-gray-400",
    },
  ];

  const highlights = [
    { icon: <Zap className="w-5 h-5 text-yellow-500" />, text: "Instant answers — no waiting" },
    { icon: <Globe className="w-5 h-5 text-blue-500" />, text: "Works on mobile & desktop" },
    { icon: <Sparkles className="w-5 h-5 text-purple-500" />, text: "Powered by AI" },
    { icon: <Award className="w-5 h-5 text-green-500" />, text: "Free to start — no credit card" },
  ];

  return (
    <section id="reva-ai" className="py-10 md:py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Learning
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Reva — Your Child's AI Teacher
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reva is EduVerseJr's built-in AI teacher. Unlike a chatbot, Reva understands
            your child's curriculum, tracks their progress, and teaches — not just answers.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {subjects.map((sub) => (
            <div
              key={sub.label}
              className={`relative flex flex-col items-center gap-2 px-8 py-5 rounded-2xl text-white min-w-[150px] shadow-md ${sub.bg} ${!sub.active ? "opacity-60" : ""}`}
            >
              {sub.icon}
              <span className="font-bold text-base">{sub.label}</span>
              <span className="text-xs text-white/90">{sub.detail}</span>
              {sub.active ? (
                <span className="bg-green-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">{sub.status}</span>
              ) : (
                <div className="absolute top-2 right-2">
                  <Lock className="w-4 h-4 text-white/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {coreFeatures.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="bg-purple-50 w-11 h-11 rounded-xl flex items-center justify-center mb-3">
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">{f.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Quick highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
              {h.icon}
              {h.text}
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Let Your Child Try Reva — It's Free
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Sign up in seconds. No credit card. No downloads. Just start learning
            maths with an AI teacher that never runs out of patience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-6 rounded-full text-lg font-bold"
              onClick={() => window.location.href = '/reva'}
            >
              Start Free with Reva
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-700 px-10 py-6 rounded-full text-lg font-semibold"
              onClick={() => window.location.hash = '#booking'}
            >
              Book a Human Teacher Instead
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
