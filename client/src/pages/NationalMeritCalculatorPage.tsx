// Public National Merit Scholarship calculator — /national-merit-calculator.
//
// Free, no-login version of the in-app calculator, built for organic search:
// the query "PSAT national merit calculator" is dominated by free interactive
// tools. We take the Selection Index (48–228) directly — it's printed on the
// official PSAT/NMSQT score report — rather than deriving it from digital
// section scores, because the digital conversion is ambiguous and a wrong
// formula would mislead. Cutoffs are estimates with prominent disclaimers;
// official status is determined solely by NMSC.
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useState, useMemo } from "react";
import { GraduationCap, ArrowRight, MapPin, Trophy, Info } from "lucide-react";
import {
  STATES,
  COMMENDED_SI,
  CUTOFF_CLASS_LABEL,
  SEMIFINALIST_CUTOFFS,
  classifySelectionIndex,
} from "../data/nationalMeritCutoffs";

const SIGNUP_URL = "https://revaai.eduversejr.com/register";

const TONE: Record<string, string> = {
  green: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  amber: "border-amber-500/40 bg-amber-500/10 text-amber-200",
  blue: "border-indigo-500/40 bg-indigo-500/10 text-indigo-200",
  gray: "border-white/15 bg-white/5 text-white/70",
};

const faqs = [
  {
    q: "What is the National Merit Selection Index?",
    a: "The Selection Index (SI) is the number the National Merit Scholarship Program uses to rank students. It equals 2 × (your PSAT/NMSQT Reading & Writing test score + your Math test score), so it ranges from 48 to 228. It is printed directly on your official PSAT/NMSQT score report — you don't have to calculate it yourself.",
  },
  {
    q: "What Selection Index do I need to be a Semifinalist?",
    a: "It depends on your state. National Merit allocates Semifinalist spots by state, so the cutoff differs by roughly 14 points — from about 210 in lower-cutoff states to about 225 in California, Massachusetts, New Jersey and DC. Enter your state above to see its estimated Class of 2026 cutoff.",
  },
  {
    q: "What's the difference between Commended and Semifinalist?",
    a: "Commended Student uses a single national cutoff (about 210 for the Class of 2026) and recognises roughly the top 50,000 scorers. Semifinalist uses a higher, state-specific cutoff and recognises about 16,000 students; only Semifinalists advance toward Finalist standing and National Merit scholarships.",
  },
  {
    q: "Do the PSAT 8/9 or PSAT 10 count for National Merit?",
    a: "No. Only the PSAT/NMSQT taken in 11th grade (junior year) qualifies a student for National Merit recognition. PSAT 8/9 and PSAT 10 scores never count — but practising on them early builds the exact skills that raise your junior-year Selection Index.",
  },
  {
    q: "Are these cutoffs official?",
    a: "No. The National Merit Scholarship Corporation does not publish official cutoffs. The figures here are the community-reported consensus for the Class of 2026 and vary by ±1–2 points year to year. Treat this as a projection tool, not a guarantee — official recognition is determined solely by NMSC.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "EduVerseJr", "item": "https://eduversejr.com/" },
        { "@type": "ListItem", "position": 2, "name": "PSAT Prep", "item": "https://eduversejr.com/psat" },
        { "@type": "ListItem", "position": 3, "name": "National Merit Calculator", "item": "https://eduversejr.com/national-merit-calculator" },
      ],
    },
    {
      "@type": "WebApplication",
      "name": "National Merit Scholarship Calculator",
      "url": "https://eduversejr.com/national-merit-calculator",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "description": "Free state-by-state National Merit Scholarship calculator. Enter your PSAT/NMSQT Selection Index and state to project your Commended Student or Semifinalist standing using Class of 2026 cutoffs.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "publisher": { "@id": "https://eduversejr.com" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

export default function NationalMeritCalculatorPage() {
  const [siInput, setSiInput] = useState("");
  const [state, setState] = useState("");

  const si = useMemo(() => {
    const n = parseInt(siInput, 10);
    return Number.isFinite(n) ? n : null;
  }, [siInput]);

  const siValid = si != null && si >= 48 && si <= 228;
  const result = useMemo(() => {
    if (!siValid || !state || si == null) return null;
    return classifySelectionIndex(si, state);
  }, [si, siValid, state]);

  const stateCut = state ? SEMIFINALIST_CUTOFFS[state as keyof typeof SEMIFINALIST_CUTOFFS] : null;

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f", color: "#fff" }}>
      <Helmet>
        <title>National Merit Scholarship Calculator (by State) — PSAT/NMSQT | EduVerseJr</title>
        <meta name="description" content="Free National Merit calculator: enter your PSAT/NMSQT Selection Index and state to project Commended or Semifinalist standing — Class of 2026 state cutoffs." />
        <link rel="canonical" href="https://eduversejr.com/national-merit-calculator" />
        <meta name="keywords" content="National Merit calculator, National Merit Selection Index calculator, PSAT NMSQT calculator, National Merit Semifinalist cutoff by state, National Merit cutoff 2026, Selection Index calculator, Commended Student cutoff" />
        <meta property="og:title" content="National Merit Scholarship Calculator (by State) | EduVerseJr" />
        <meta property="og:description" content="Enter your PSAT/NMSQT Selection Index and state to project Commended or Semifinalist standing. Free, no login. Class of 2026 state cutoffs." />
        <meta property="og:url" content="https://eduversejr.com/national-merit-calculator" />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="National Merit Scholarship Calculator (by State)" />
        <meta name="twitter:description" content="Project your Commended or Semifinalist standing from your PSAT/NMSQT Selection Index. Free, all 50 states." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <span className="text-white font-bold text-sm sm:text-base tracking-tight">National Merit Calculator</span>
            </div>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/60">
            <Link href="/psat"><span className="hover:text-white transition-colors cursor-pointer">PSAT Prep</span></Link>
            <Link href="/sat"><span className="hover:text-white transition-colors cursor-pointer">SAT Prep</span></Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            <Trophy className="w-3.5 h-3.5" /> {CUTOFF_CLASS_LABEL}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            National Merit Scholarship Calculator
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Enter your PSAT/NMSQT <strong className="text-white/80">Selection Index</strong> and your state to
            project whether you're tracking toward <strong className="text-white/80">Commended Student</strong> or{" "}
            <strong className="text-white/80">Semifinalist</strong>. Free, no sign-up — this is an estimate, not an official result.
          </p>
        </div>

        {/* Inputs */}
        <section className="border border-white/10 rounded-3xl bg-white/3 p-6 sm:p-8 mb-5">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="si" className="block text-sm font-semibold text-white/80 mb-2">
                Selection Index (48–228)
              </label>
              <input
                id="si"
                type="number"
                inputMode="numeric"
                min={48}
                max={228}
                value={siInput}
                onChange={(e) => setSiInput(e.target.value)}
                placeholder="e.g. 215"
                className="w-full rounded-xl border border-white/15 bg-[#12121a] px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              />
              {siInput && !siValid && (
                <p className="text-xs text-red-400 mt-1.5">Enter a number between 48 and 228.</p>
              )}
              <p className="text-xs text-white/40 mt-1.5">
                On your PSAT/NMSQT score report. It equals 2 × (Reading &amp; Writing + Math test scores).
              </p>
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-white/80 mb-2">
                Your state
              </label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-[#12121a] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              >
                <option value="">Select a state…</option>
                {STATES.map(([code, name]) => (
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
              <p className="text-xs text-white/40 mt-1.5">Semifinalist cutoffs are set per state.</p>
            </div>
          </div>
        </section>

        {/* Result */}
        {result && si != null ? (
          <section className={`rounded-3xl border p-6 sm:p-8 mb-5 ${TONE[result.tone] || TONE.gray}`}>
            <h2 className="text-xl font-bold mb-1.5">{result.headline}</h2>
            <p className="text-sm leading-relaxed text-white/80">{result.detail}</p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-black/20 border border-white/10 px-2 py-4">
                <div className="text-[10px] uppercase tracking-wide text-white/40">Your index</div>
                <div className="text-2xl font-black text-white">{si}</div>
              </div>
              <div className="rounded-2xl bg-black/20 border border-white/10 px-2 py-4">
                <div className="text-[10px] uppercase tracking-wide text-white/40">Commended (national)</div>
                <div className="text-2xl font-black text-white">~{COMMENDED_SI}</div>
              </div>
              <div className="rounded-2xl bg-black/20 border border-white/10 px-2 py-4">
                <div className="text-[10px] uppercase tracking-wide text-white/40">Semifinalist ({state})</div>
                <div className="text-2xl font-black text-white">~{stateCut}</div>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-3xl border border-white/10 bg-white/3 p-6 mb-5 text-sm text-white/40 text-center">
            Enter your Selection Index and pick your state to see your projected National Merit standing.
          </section>
        )}

        {/* CTA to prep */}
        <section className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/15 to-amber-500/10 p-6 sm:p-8 mb-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">A few points short? You can close the gap.</h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-5">
            A few more questions right can move your Selection Index several points. Reva AI drills your weakest
            PSAT/NMSQT skills with a tutor on every question — and carries straight into SAT prep. Start your free trial.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-amber-600 hover:from-indigo-500 hover:to-amber-500 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-xl shadow-indigo-900/40"
          >
            Start Free Trial with Reva <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* How it works */}
        <section className="border border-white/10 rounded-3xl bg-white/3 p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">How National Merit recognition works</h2>
          <ul className="text-sm text-white/70 leading-relaxed space-y-2 list-disc pl-5">
            <li><strong className="text-white/90">Commended Student</strong> — a single national cutoff (~{COMMENDED_SI} for the Class of 2026), roughly the top 50,000 scorers.</li>
            <li><strong className="text-white/90">Semifinalist</strong> — a higher, per-state cutoff, roughly the top 16,000 allocated by state. Only Semifinalists advance toward Finalist standing and scholarships.</li>
            <li>Only the <strong className="text-white/90">PSAT/NMSQT taken in 11th grade</strong> counts. PSAT 8/9 and PSAT 10 scores never qualify — but drilling early builds the skills that raise your junior-year index.</li>
          </ul>
        </section>

        {/* State cutoff table (also lives in the crawler prerender) */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-amber-400" />
            <h2 className="text-lg font-bold text-white">Semifinalist cutoffs by state — {CUTOFF_CLASS_LABEL}</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-white/50 text-xs uppercase tracking-wide">
                  <th className="text-left font-semibold px-4 py-2.5">State</th>
                  <th className="text-right font-semibold px-4 py-2.5">Semifinalist SI</th>
                </tr>
              </thead>
              <tbody>
                {STATES.map(([code, name], i) => (
                  <tr key={code} className={i % 2 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2 text-white/80">{name}</td>
                    <td className="px-4 py-2 text-right text-amber-300 font-semibold">
                      ~{SEMIFINALIST_CUTOFFS[code as keyof typeof SEMIFINALIST_CUTOFFS]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/40 mt-2">National Commended cutoff: ~{COMMENDED_SI} (applies in every state).</p>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">National Merit — common questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-white/10 rounded-2xl bg-white/3 p-5">
                <h3 className="text-white font-semibold text-sm mb-1.5">{f.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="rounded-2xl bg-amber-500/5 border border-amber-500/25 p-5 text-xs text-amber-200/80 leading-relaxed flex gap-3">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
          <span>
            <strong>Estimate only.</strong> Cutoffs shown are {CUTOFF_CLASS_LABEL} and vary ±1–2 points each year.
            The National Merit Scholarship Corporation does not publish official cutoffs and determines all recognition
            solely at its discretion. This tool is not affiliated with, endorsed by, or connected to the National Merit
            Scholarship Corporation or the College Board. Use it as a rough projection, not a guarantee.
          </span>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 px-4 text-center">
        <div className="text-white/30 text-sm space-y-2">
          <p>
            National Merit Calculator is part of{" "}
            <Link href="/"><span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">EduVerseJr.com</span></Link>
            {" · "}
            <Link href="/psat"><span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">PSAT Prep</span></Link>
            {" · "}
            <Link href="/sat"><span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">SAT Prep</span></Link>
          </p>
          <p>© {new Date().getFullYear()} EduVerseJr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
