import { Users, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * ComparisonBlock — "Which is right for your child?" side-by-side card.
 * Both teaching modes presented as equally strong choices.
 *  - Left: EduVerseJr Human Teachers (Grades 5–10, live, SAT/SSAT included)
 *  - Right: Reva AI Teacher (Grades 5–12, 24/7 AI)
 */
export default function ComparisonBlock() {
  const human = {
    title: "EduVerseJr Teachers",
    subtitle: "Live human teaching",
    grades: "Grades 5–10",
    rows: [
      "Live 1-to-1 sessions, 60 mins, 2+ per week",
      "Maths · Science · Coding · SAT · SSAT",
      "Aligned to 6 country curricula",
      "Same teacher every session",
      "Direct WhatsApp & parent updates",
      "Free trial — no commitment",
    ],
    cta: { text: "Book a FREE Trial", action: "/#booking" },
  };

  const reva = {
    title: "Reva AI Teacher",
    subtitle: "AI teaching, 24/7",
    grades: "Grades 5–12",
    rows: [
      "Teaches new topics step-by-step",
      "Maths now · Science & Coding coming soon",
      "Chat · Voice · Whiteboard · Slides",
      "Auto-tracks weak areas across sessions",
      "Smart practice & instant feedback",
      "Free to start — no credit card",
    ],
    cta: { text: "Try Reva Free", action: "/reva" },
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Which is right for your child?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Two real teaching products under one platform. Pick the mode that fits
            your child — or use both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Human Teachers card */}
          <div className="bg-white rounded-3xl border-2 border-blue-200 p-7 shadow-md hover:shadow-xl transition-shadow flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">
                  {human.title}
                </h3>
                <p className="text-xs text-blue-700 font-semibold">{human.subtitle}</p>
              </div>
            </div>
            <div className="inline-flex w-fit bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-5">
              {human.grades}
            </div>
            <ul className="space-y-2 mb-6 flex-grow">
              {human.rows.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold py-5"
              onClick={() => (window.location.href = human.cta.action)}
            >
              {human.cta.text}
            </Button>
          </div>

          {/* Reva AI card */}
          <div className="bg-white rounded-3xl border-2 border-purple-200 p-7 shadow-md hover:shadow-xl transition-shadow flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">
                  {reva.title}
                </h3>
                <p className="text-xs text-purple-700 font-semibold">{reva.subtitle}</p>
              </div>
            </div>
            <div className="inline-flex w-fit bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-5">
              {reva.grades}
            </div>
            <ul className="space-y-2 mb-6 flex-grow">
              {reva.rows.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <Link href={reva.cta.action}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold py-5">
                {reva.cta.text}
              </Button>
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
          Many families use <span className="font-semibold text-gray-700">both</span> — scheduled live
          classes with a teacher plus Reva for daily practice and on-demand help.
        </p>
      </div>
    </section>
  );
}
