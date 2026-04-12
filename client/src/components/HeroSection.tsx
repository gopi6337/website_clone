import { Button } from "@/components/ui/button";
import { Sparkles, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-gradient py-12 md:py-16 rounded-3xl mx-4 md:mx-8 my-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
            Mathematics · Science · Coding &nbsp;|&nbsp; Grades 5–10
          </div>
        </div>

        {/* Headline */}
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Two Ways to Learn.{" "}
            <span className="text-yellow-300">One Platform.</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            EduVerseJr combines expert human tutors with Reva, our AI-powered teacher —
            so your child gets personalised support whether they prefer a live session
            or instant 24/7 help.
          </p>
        </div>

        {/* Two-column learning paths */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
          {/* Human Teachers */}
          <div className="bg-white/15 border border-white/30 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500 rounded-full p-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold">Human-Led Tutoring</h2>
            </div>
            <ul className="text-sm text-white/90 space-y-1 mb-4">
              <li>• Live 1-to-1 online classes</li>
              <li>• Expert certified teachers</li>
              <li>• Mathematics, Science &amp; Coding</li>
              <li>• Flexible scheduling</li>
            </ul>
            <Button
              className="w-full bg-white text-blue-700 hover:bg-blue-50 rounded-full font-semibold"
              onClick={() => window.location.hash = '#booking'}
            >
              Book a FREE Trial
            </Button>
          </div>

          {/* Reva AI */}
          <div className="bg-white/15 border border-yellow-300/50 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500 rounded-full p-2">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Reva AI Teacher</h2>
                <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-bold">NEW</span>
              </div>
            </div>
            <ul className="text-sm text-white/90 space-y-1 mb-4">
              <li>• Available 24/7, instant help</li>
              <li>• AI chat + interactive whiteboard</li>
              <li>• Mathematics now live</li>
              <li>• Science &amp; Coding coming soon</li>
            </ul>
            <Button
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-full font-bold"
              onClick={() => window.open('http://agenticaifirst.in', '_blank')}
            >
              Try Reva for Free
            </Button>
          </div>
        </div>

        {/* Countries strip */}
        <div className="text-center text-white/80 text-sm">
          Curriculum aligned for &nbsp;
          <span className="text-white font-semibold">US · UK · Canada · Australia · Singapore · UAE</span>
        </div>
      </div>
    </section>
  );
}
