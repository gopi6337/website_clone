import { Button } from "@/components/ui/button";
import { Sparkles, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-gradient py-12 md:py-16 rounded-3xl mx-4 md:mx-8 my-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left — headline + two learning path cards */}
          <div className="text-white">
            {/* Badge */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold">
                Maths · Science · Coding
              </div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold">
                Grades 5–12
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Two Ways to Learn. <span className="text-yellow-300 inline-block">One Platform.</span>
            </h1>
            <p className="text-white/90 mb-6 text-sm md:text-base">
              EduVerseJr brings together Reva, our AI-powered teacher, and expert human teachers — so your child always has the right support.
            </p>

            {/* Reva AI — FIRST */}
            <div className="bg-white/15 border border-yellow-300/60 rounded-2xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <img src="/reva-logo.jpg" alt="Reva AI" className="w-9 h-9 rounded-full object-contain bg-white flex-shrink-0" />
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold">Reva AI Teacher</h2>
                  <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-bold">NEW</span>
                </div>
              </div>
              <ul className="text-sm text-white/90 space-y-1 mb-4">
                <li>• AI-powered personalised teaching</li>
                <li>• Text, Voice &amp; Slide interactions</li>
                <li>• Interactive whiteboard — step-by-step</li>
                <li>• Mathematics: Live &nbsp;·&nbsp; Science &amp; Coding: Coming Soon</li>
                <li>• Available 24/7, free to start</li>
              </ul>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-full font-bold"
                onClick={() => window.location.href = '/reva'}
              >
                Try Reva for Free
              </Button>
            </div>

            {/* Human Tutors — SECOND */}
            <div className="bg-white/15 border border-white/30 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-base font-bold">Human-Led Teaching</h2>
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

            {/* Country strip */}
            <p className="text-white/70 text-xs mt-4 text-center">
              Curriculum aligned · US · UK · Canada · Australia · Singapore · UAE
            </p>
          </div>

          {/* Right — child learning photo */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <img
              src="/edu_pic1.jpg"
              alt="Child learning with EduVerseJr"
              className="w-full h-full object-cover rounded-3xl"
              style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%)' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
