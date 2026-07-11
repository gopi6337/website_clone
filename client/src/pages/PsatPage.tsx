import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  Sparkles, Target, BookOpen, Trophy,
  ChevronDown, ChevronUp, Menu, X, GraduationCap, MapPin,
  Award, Clock, BarChart3, Brain
} from "lucide-react";

const products = [
  {
    badge: "Grades 8–9",
    title: "PSAT 8/9",
    subtitle: "Low-stakes intro to the digital SAT format",
    bullets: [
      "2 full digital PSAT 8/9 practice tests",
      "Reading · Writing · Math — adaptive 2-module format",
      "Per-skill score report with weakness map",
      "Reva AI explanations on every wrong answer",
    ],
    bundling: "Standalone plan · $49/yr · or included with G8 / G9 annual",
    accent: "from-indigo-600 to-cyan-600",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/5",
  },
  {
    badge: "Grades 10–11",
    title: "PSAT/NMSQT",
    subtitle: "The scholarship-qualifying test",
    bullets: [
      "Full PSAT/NMSQT digital simulation",
      "Score predictor tuned to your state's Selectivity Index",
      "National Merit cutoff calculator (Commended / Semifinalist / Finalist)",
      "Same Reva AI tutor as SAT prep — picks up where PSAT ends",
    ],
    bundling: "Bundled with SAT Prep · no extra cost · upgrade path to full SAT",
    accent: "from-amber-500 to-orange-600",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
  },
];

const stateCutoffs = [
  { state: "California", cutoff: 222 },
  { state: "Texas", cutoff: 220 },
  { state: "New York", cutoff: 220 },
  { state: "Florida", cutoff: 217 },
  { state: "Illinois", cutoff: 219 },
  { state: "Washington", cutoff: 221 },
  { state: "West Virginia", cutoff: 209 },
  { state: "Wyoming", cutoff: 208 },
];

const faqs = [
  {
    q: "What's the difference between PSAT 8/9 and PSAT/NMSQT?",
    a: "PSAT 8/9 is the low-stakes introductory test for Grades 8–9 — it familiarises students with the digital SAT format before high school. PSAT/NMSQT is the Grade 10–11 test that also qualifies students for the National Merit Scholarship. Both are digital, adaptive, and structured exactly like the SAT (two modules each for Reading & Writing and Math).",
  },
  {
    q: "Is PSAT prep included with my Reva subscription?",
    a: "PSAT 8/9 prep is included for students on the G8 or G9 annual plan. PSAT/NMSQT prep is bundled with every SAT Prep plan (Grades 10–11). If your child is between plans, the standalone PSAT 8/9 plan is $49/year.",
  },
  {
    q: "What is the National Merit Scholarship cutoff calculator?",
    a: "National Merit cutoffs differ by state — they range from ~208 (Wyoming, West Virginia) to ~222 (California, New Jersey). Most prep platforms quote a single national number and miss this entirely. Reva's calculator takes your state, target percentile, and current practice scores and tells you exactly how many more points you need to hit Commended, Semifinalist, or Finalist for YOUR state.",
  },
  {
    q: "When does PSAT prep open?",
    a: "PSAT 8/9 and PSAT/NMSQT prep are both coming soon. They're built on the same Reva AI engine as our SAT prep — check back soon. No specific date is being promised in advance.",
  },
  {
    q: "Does Reva use real College Board PSAT questions?",
    a: "No — Reva uses original AI-generated practice items modelled on the official PSAT specification, plus a curated set of public-domain reading passages. We don't scrape Bluebook or use any copyrighted College Board content. Our items follow the same difficulty bands and skill taxonomy that College Board publishes.",
  },
  {
    q: "Can my child upgrade from PSAT 8/9 to a full G8–G10 plan later?",
    a: "Yes. If you start with the $49/yr PSAT 8/9 plan and upgrade to the full G8 or G9 annual plan within the first 90 days, the PSAT 8/9 fee is credited toward your upgrade. After 90 days the plan continues as standalone PSAT prep.",
  },
];

function PsatNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="text-white/50 hover:text-white/80 text-sm transition-colors cursor-pointer">
              ← EduVerseJr
            </span>
          </Link>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-white font-bold text-sm sm:text-base tracking-tight">PSAT Prep</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <a href="#products" className="hover:text-white transition-colors">Plans</a>
          <a href="#nm-scholarship" className="hover:text-white transition-colors">National Merit</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <Link href="/reva">
            <span className="hover:text-white transition-colors cursor-pointer">Reva AI</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 text-amber-300 text-sm font-semibold px-5 py-2 rounded-full">
            Coming Soon
          </span>
          <button className="md:hidden text-white/70" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3 bg-[#0a0a0f]">
          <a href="#products" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>Plans</a>
          <a href="#nm-scholarship" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>National Merit</a>
          <a href="#faq" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>FAQ</a>
          <Link href="/reva">
            <span className="block text-white/70 hover:text-white py-1 cursor-pointer" onClick={() => setOpen(false)}>Reva AI</span>
          </Link>
          <span className="block w-full mt-2 text-center border border-amber-500/40 bg-amber-500/10 text-amber-300 font-semibold px-5 py-3 rounded-full">
            Coming Soon
          </span>
        </div>
      )}
    </nav>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">PSAT — common questions</h2>
      </div>
      <div className="space-y-2">
        {faqs.map((f, i) => (
          <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/3">
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-white font-medium">{f.q}</span>
              {open === i
                ? <ChevronUp className="w-4 h-4 text-white/40 flex-shrink-0" />
                : <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />}
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/10">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "EduVerseJr", "item": "https://eduversejr.com/" },
        { "@type": "ListItem", "position": 2, "name": "PSAT Prep", "item": "https://eduversejr.com/psat" },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": "https://eduversejr.com/psat",
      "name": "PSAT Prep by Reva AI",
      "description": "Digital PSAT 8/9 (Grades 8–9) and PSAT/NMSQT (Grades 10–11) preparation by EduVerseJr's Reva AI Teacher. Includes full practice tests, per-skill weakness tracking, AI-tutored explanations, and a state-by-state National Merit Scholarship cutoff calculator.",
      "url": "https://eduversejr.com/psat",
      "provider": {
        "@type": "Organization",
        "@id": "https://eduversejr.com",
        "name": "EduVerseJr",
      },
      "educationalProgramMode": "online",
      "educationalLevel": "Grades 8–11 (Ages 13–17)",
      "occupationalCategory": "Test Preparation",
      "programType": "test_prep",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/PreOrder",
        "description": "PSAT 8/9 standalone $49/yr · PSAT/NMSQT bundled with SAT Prep plan. Coming soon.",
      },
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

export default function PsatPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f", color: "#fff" }}>
      <Helmet>
        <title>PSAT Prep — Reva AI by EduVerseJr | PSAT 8/9 & NMSQT</title>
        <meta name="description" content="Digital PSAT 8/9 (Grades 8–9) and PSAT/NMSQT (Grades 10–11) prep by Reva AI. Adaptive practice tests, per-skill score report, and a state-by-state National Merit Scholarship cutoff calculator. Standalone $49/yr or bundled with SAT Prep. Coming soon." />
        <link rel="canonical" href="https://eduversejr.com/psat" />
        <meta name="keywords" content="PSAT prep, PSAT 8/9 prep, PSAT NMSQT prep, National Merit Scholarship prep, digital PSAT, PSAT practice test, PSAT score predictor, National Merit cutoff by state, Reva AI PSAT, EduVerseJr PSAT" />
        <meta property="og:title" content="PSAT Prep — Reva AI by EduVerseJr | PSAT 8/9 & NMSQT" />
        <meta property="og:description" content="Adaptive digital PSAT 8/9 and PSAT/NMSQT prep with a state-by-state National Merit cutoff calculator. Standalone $49/yr or bundled with SAT Prep. Coming soon." />
        <meta property="og:url" content="https://eduversejr.com/psat" />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PSAT Prep — Reva AI by EduVerseJr" />
        <meta name="twitter:description" content="PSAT 8/9 + PSAT/NMSQT prep with state-specific National Merit cutoffs. Coming soon." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <PsatNav />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center px-4 py-24">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-amber-500/15 blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 text-amber-300 text-sm font-medium px-4 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              PSAT 8/9 · Coming Soon &nbsp;·&nbsp; PSAT/NMSQT · Coming Soon
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
            PSAT prep that knows{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8 0%, #fbbf24 50%, #818cf8 100%)",
                backgroundSize: "200%",
              }}
            >
              your state
            </span>
            .
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Digital PSAT 8/9 (Grades 8–9) and PSAT/NMSQT (Grades 10–11) — built on the same Reva AI
            engine that powers our SAT prep, with a state-by-state National Merit cutoff calculator
            no other AI platform offers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <span className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl shadow-indigo-900/40">
              <Sparkles className="w-5 h-5" />
              Coming Soon
            </span>
            <a
              href="#products"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium px-8 py-4 rounded-full text-lg transition-all"
            >
              See Plans
            </a>
          </div>

          <p className="text-white/40 text-xs mb-10">
            Already on a Grade 8–9 annual plan?{" "}
            <Link href="/reva">
              <span className="text-cyan-300 hover:text-cyan-200 underline cursor-pointer">PSAT 8/9 is included →</span>
            </Link>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "$49", label: "PSAT 8/9 per year" },
              { value: "2", label: "Full practice tests" },
              { value: "50+", label: "State cutoffs tracked" },
              { value: "Reva", label: "AI tutor on every Q" },
            ].map((s) => (
              <div key={s.label} className="border border-white/10 rounded-2xl py-4 px-3 bg-white/3">
                <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO PRODUCTS ─────────────────────────────────── */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Two PSAT plans, one prep engine</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Built for both stages of high school</h2>
            <p className="text-white/50 max-w-xl mx-auto">PSAT 8/9 is the low-stakes intro. PSAT/NMSQT is the scholarship test. Both share the same digital-SAT format — Reva covers both.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className={`relative border rounded-3xl p-7 ${p.border} ${p.bg}`}
              >
                <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${p.accent} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                  {p.badge}
                </span>
                <h3 className="text-2xl font-black text-white mb-1">{p.title}</h3>
                <p className="text-white/60 text-sm mb-5">{p.subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-white/70 text-sm">
                      <Target className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-4 text-white/50 text-xs">
                  {p.bundling}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NATIONAL MERIT SCHOLARSHIP ───────────────────── */}
      <section id="nm-scholarship" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">National Merit Scholarship</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Your state's cutoff isn't the national one</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              National Merit Selectivity Index cutoffs vary by ~14 points across states. A 219 in West Virginia gets you Semifinalist; the same score in California falls short.
              Most prep platforms quote one national number — Reva tells you the one that matters for YOUR state.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {stateCutoffs.map((s) => (
              <div key={s.state} className="border border-white/10 rounded-xl p-4 bg-white/3 flex flex-col items-center text-center">
                <MapPin className="w-4 h-4 text-amber-400 mb-2" />
                <span className="text-white text-sm font-semibold">{s.state}</span>
                <span className="text-amber-300 text-2xl font-black mt-1">{s.cutoff}</span>
                <span className="text-white/40 text-xs uppercase tracking-wide">Semifinalist</span>
              </div>
            ))}
          </div>

          <div className="border border-amber-500/30 bg-amber-500/5 rounded-2xl p-6 text-center">
            <p className="text-white/70 text-sm leading-relaxed max-w-2xl mx-auto">
              <Award className="w-4 h-4 text-amber-400 inline -mt-0.5 mr-1" />
              Reva's calculator takes your state, current practice scores, and target percentile (Commended · Semifinalist · Finalist) and tells you exactly how many points you need to add.
              State data is refreshed annually from College Board public releases.
            </p>
            <p className="text-white/50 text-sm mt-4">
              <Link href="/national-merit-calculator">
                <span className="text-amber-300 hover:text-amber-200 underline font-semibold cursor-pointer">
                  Try the free National Merit calculator →
                </span>
              </Link>
            </p>
            <p className="text-white/40 text-xs mt-2">Indicative cutoffs above. Enter your Selection Index and state in the calculator for a state-specific projection.</p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED IN REVA PSAT ─────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">What every PSAT plan includes</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Same Reva AI engine. PSAT-tuned.</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: BookOpen, title: "Full digital simulation", desc: "Two 35-minute Reading & Writing modules + two 35-minute Math modules — adaptive, just like the real PSAT." },
              { icon: Brain, title: "Reva AI tutor on every Q", desc: "Stuck on an answer? Reva walks you through the steps on a live whiteboard — same tutor that powers our SAT prep." },
              { icon: BarChart3, title: "Per-skill weakness map", desc: "Score broken down by skill (Algebra · Advanced Math · Information & Ideas · Standard English Conventions) so practice is targeted." },
              { icon: Clock, title: "Score predictor", desc: "After 2 practice tests, Reva projects your likely PSAT/NMSQT band with ±30 point accuracy." },
              { icon: Trophy, title: "Upgrade path to SAT", desc: "Every PSAT skill is mapped to its SAT counterpart. Reva picks up where PSAT prep ends — no relearning the platform." },
              { icon: GraduationCap, title: "No Bluebook scrapes", desc: "Original AI-generated items modelled on College Board's published spec. Public-domain passages only. Copyright-safe." },
            ].map((f, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-5 bg-white/3 hover:bg-white/6 transition-colors">
                <f.icon className="w-5 h-5 text-amber-400 mb-3" />
                <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* ── BOTTOM CTA ────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(245,158,11,0.2) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-amber-500/10 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-amber-600 flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                PSAT prep is coming soon
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
                Both PSAT 8/9 and PSAT/NMSQT (with the National Merit calculator) are on the way, built on the same Reva AI engine as our SAT prep. Check back soon.
              </p>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-amber-600 text-white font-bold px-10 py-4 rounded-full text-lg shadow-2xl shadow-indigo-900/50">
                <Sparkles className="w-5 h-5" /> Coming Soon
              </span>
              <p className="text-white/30 text-sm mt-4">Launching shortly · check back soon</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 text-center">
        <div className="text-white/30 text-sm space-y-2">
          <p>
            PSAT Prep is part of{" "}
            <Link href="/">
              <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">EduVerseJr.com</span>
            </Link>
            {" · "}
            <Link href="/reva">
              <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">Reva AI Teacher</span>
            </Link>
          </p>
          <p>© {new Date().getFullYear()} EduVerseJr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
