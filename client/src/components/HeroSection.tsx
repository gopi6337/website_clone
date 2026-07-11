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
                Maths · Science · Coding · SAT · PSAT
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
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <img src="/reva-logo.webp" alt="Reva AI" width="36" height="36" decoding="async" className="w-9 h-9 rounded-full object-contain bg-white flex-shrink-0" />
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base font-bold">Reva AI Teacher</h2>
                  <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-bold">NEW</span>
                  <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold border border-white/30">Grades 5–12</span>
                </div>
              </div>
              <ul className="text-sm text-white/90 space-y-1 mb-3">
                <li>• AI-powered personalised teaching</li>
                <li>• Text, Voice &amp; Slide interactions</li>
                <li>• Interactive whiteboard — step-by-step</li>
                <li>• Mathematics: Live &nbsp;·&nbsp; Science &amp; Coding: Coming Soon</li>
                <li>• Available 24/7, free to start</li>
              </ul>
              <div className="flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-xl px-3 py-2 mb-4">
                <span className="text-amber-300 text-sm">🎓</span>
                <span className="text-xs text-white/90"><span className="font-bold text-amber-300">SAT &amp; PSAT Prep</span> — Coming Soon</span>
                <span className="ml-auto bg-amber-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full shrink-0">Soon</span>
              </div>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-full font-bold"
                onClick={() => window.location.href = '/reva'}
              >
                Try Reva for Free
              </Button>
            </div>

            {/* Human Teachers — SECOND */}
            <div className="bg-white/15 border border-white/30 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-base font-bold">Expert Human Teachers</h2>
                <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold border border-white/30">Grades 5–10</span>
              </div>
              <ul className="text-sm text-white/90 space-y-1 mb-4">
                <li>• Live 1-to-1 online classes</li>
                <li>• Experienced teachers, real rapport</li>
                <li>• Maths · Science · Coding · SAT · PSAT</li>
                <li>• Flexible scheduling, same teacher every session</li>
              </ul>
              <Button
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold shadow-lg shadow-emerald-500/30"
                onClick={() => window.location.hash = '#booking'}
              >
                Book a FREE Trial
              </Button>
            </div>

            {/* Country strip */}
            <p className="text-white/70 text-xs mt-4 text-center">
              Curriculum aligned · US · UK · Canada · Australia · Singapore · UAE
            </p>

            {/* Founder trust line */}
            <p className="text-white/60 text-xs mt-2 text-center">
              Founded in 2026 by Revathi Gopinath (MSc, BEd) · Coimbatore, India
            </p>
          </div>

          {/* Right — child learning photo */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <img
              src="/edu_pic1.webp"
              alt="Child learning with EduVerseJr"
              width="390"
              height="255"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover rounded-3xl"
              style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%)' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
