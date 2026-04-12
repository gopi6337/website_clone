import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-gradient py-12 md:py-16 rounded-3xl mx-4 md:mx-8 my-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
              Math, Science & Coding | Grades 5-10
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Empower Your Child's Future with{" "}
              <span className="text-yellow-300">FUN</span> Personalized Learning!
            </h1>

            <p className="text-lg mb-4 text-white/90">
              EduVerseJr offers live 1-to-1 online classes with expert human tutors
              — and now <strong>Reva</strong>, our AI-powered math tutor available
              24/7. Whether your child thrives with personal guidance or needs help
              right now, we've got them covered.
            </p>

            {/* AI Tutor Highlight */}
            <div className="bg-white/15 border border-white/30 rounded-2xl px-5 py-3 mb-8 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0" />
              <span className="text-sm text-white/95">
                <strong>NEW:</strong> Meet <strong>Reva</strong> — AI Math Tutor. Instant help, any time.
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold" onClick={() => window.location.hash = '#booking'}>
                Parents, Book FREE Trial
              </Button>
              <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-6 rounded-full text-lg font-semibold" onClick={() => window.open('http://agenticaifirst.in', '_blank')}>
                Try Reva AI
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <img
              src="/edu_pic1.jpg"
              alt="Child Learning Illustration"
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
