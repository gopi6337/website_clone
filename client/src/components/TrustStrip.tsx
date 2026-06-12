import { GraduationCap, Globe2, BookOpen } from "lucide-react";

/**
 * TrustStrip — single horizontal credibility bar shown right after the hero.
 * No teacher count, no student count. Only signals we want to surface publicly.
 */
export default function TrustStrip() {
  const items = [
    { icon: <GraduationCap className="w-4 h-4" />, text: "Experienced Teachers" },
    { icon: <Globe2 className="w-4 h-4" />, text: "Students from 6 Countries" },
    { icon: <BookOpen className="w-4 h-4" />, text: "Maths · Science · Coding · SAT · PSAT" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 py-3 md:py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white text-sm md:text-base font-medium">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="opacity-80">{item.icon}</span>
              <span>{item.text}</span>
              {i < items.length - 1 && (
                <span className="text-white/40 hidden md:inline ml-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
