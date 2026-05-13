import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Users,
  GraduationCap,
  CheckCircle,
  MessageCircle,
  Calendar,
  Globe2,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";

/**
 * HumanTeachersSection — full Human Teachers home section.
 * Replaces the previous thin "Prefer a Live Human Teacher?" 2-column block.
 *
 * Content blocks (in order):
 *  1. Section heading + intro
 *  2. Our Teaching Team — text-based credentials (no photos, no teacher count)
 *  3. Subjects row (Maths · Science · Coding · SAT · SSAT)
 *  4. Why parents stay — 6 reasons
 *  5. Country flag strip (6 countries)
 *  6. CTAs — Book Free Trial + Learn More
 */
export default function HumanTeachersSection() {
  const teamPoints = [
    { icon: <GraduationCap className="w-5 h-5 text-blue-600" />, text: "Post-graduate qualifications in their subject" },
    { icon: <Clock className="w-5 h-5 text-blue-600" />, text: "5+ years of teaching experience each" },
    { icon: <Globe2 className="w-5 h-5 text-blue-600" />, text: "Trained in international curricula across 6 countries" },
    { icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, text: "Background-verified and trained in online teaching" },
  ];

  const subjects = [
    { label: "Mathematics", color: "from-blue-500 to-blue-600" },
    { label: "Science", color: "from-emerald-500 to-emerald-600" },
    { label: "Coding", color: "from-orange-500 to-orange-600" },
    { label: "SAT", color: "from-purple-500 to-purple-600" },
    { label: "SSAT", color: "from-pink-500 to-pink-600" },
  ];

  const whyStay = [
    { icon: <Users className="w-5 h-5" />, text: "Same teacher every session — real rapport, not a random pool" },
    { icon: <MessageCircle className="w-5 h-5" />, text: "Direct WhatsApp with your child's teacher" },
    { icon: <Calendar className="w-5 h-5" />, text: "Flexible slot booking — tell us your time, we adjust" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Customised pace — no group classes, no distractions" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "Curriculum-aligned to your child's school" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Free trial — no commitment, no credit card" },
  ];

  const countries = [
    { flag: "🇺🇸", name: "US" },
    { flag: "🇬🇧", name: "UK" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇸🇬", name: "Singapore" },
    { flag: "🇦🇪", name: "UAE" },
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" /> EduVerseJr Teachers · Grades 5–10
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn with Experienced Human Teachers
          </h2>
          <p className="text-gray-600 text-lg">
            Live, personalised 1-to-1 online classes in Mathematics, Science, Coding —
            and full SAT &amp; SSAT preparation. Aligned to your child's school curriculum
            across 6 countries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Our Teaching Team */}
          <div className="bg-blue-50 rounded-3xl p-6 md:p-10 mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Teaching Team
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {teamPoints.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-blue-100"
                >
                  <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <p className="text-gray-800 text-sm md:text-base font-medium leading-snug">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects row */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
              Subjects We Teach
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {subjects.map((s, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-r ${s.color} text-white px-5 py-2.5 rounded-full text-sm md:text-base font-semibold shadow-sm`}
                >
                  {s.label}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              Grades 5–10 for Maths · Science · Coding ·&nbsp;
              <span className="text-purple-700 font-semibold">SAT &amp; SSAT prep for high-school students</span>
            </p>
          </div>

          {/* Why parents stay */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-6 md:p-10 text-white mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
              Why parents stay with EduVerseJr
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {whyStay.map((w, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-white/20 w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
                    {w.icon}
                  </div>
                  <p className="text-white/95 text-sm md:text-base leading-snug pt-1">
                    {w.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Country flag strip */}
          <div className="text-center mb-10">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
              Students learning from
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {countries.map((c, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 min-w-[80px]"
                >
                  <span className="text-3xl leading-none">{c.flag}</span>
                  <span className="text-xs text-gray-700 font-semibold">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-base font-bold"
              onClick={() => (window.location.href = "/#booking")}
            >
              Book a FREE Trial
            </Button>
            <Link href="/teachers">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-6 rounded-full text-base font-semibold flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
