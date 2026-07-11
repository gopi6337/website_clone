import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  Sparkles, Target, BookOpen, Trophy, ArrowRight,
  ChevronDown, ChevronUp, Menu, X, GraduationCap, PenLine,
  Award, Clock, BarChart3, Brain, Mic, Calculator,
} from "lucide-react";

const SIGNUP_URL = "https://revaai.eduversejr.com/register";

const sections = [
  {
    badge: "Section 1",
    title: "Reading & Writing",
    subtitle: "Two adaptive modules · 54 questions · 64 minutes",
    bullets: [
      "All four domains: Information & Ideas, Craft & Structure, Expression of Ideas, Standard English Conventions",
      "Boundaries, transitions, form & structure and rhetorical synthesis drilled skill-by-skill",
      "Public-domain passages modelled on the digital SAT",
      "Reva explains every wrong answer on a live whiteboard",
    ],
    accent: "from-indigo-600 to-cyan-600",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/5",
    icon: PenLine,
  },
  {
    badge: "Section 2",
    title: "Math",
    subtitle: "Two adaptive modules · 44 questions · 70 minutes",
    bullets: [
      "All four domains: Algebra, Advanced Math, Problem-Solving & Data Analysis, Geometry & Trigonometry",
      "Step-by-step working shown on the whiteboard, not just the final answer",
      "Calculator-allowed throughout, exactly like the real digital SAT",
      "Per-skill weakness map so practice targets what's weak",
    ],
    accent: "from-cyan-600 to-emerald-600",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    icon: Calculator,
  },
];

const faqs = [
  {
    q: "Is this built for the digital SAT?",
    a: "Yes. EduVerseJr's SAT prep is built entirely for the digital SAT (the Bluebook-era format). Both sections — Reading & Writing and Math — run as two adaptive modules each, where the difficulty of your second module depends on how you did in the first, and the test is scored out of 1600. Practising in the real format is the point.",
  },
  {
    q: "Does Reva cover Reading & Writing, or just Math?",
    a: "Both, in full. Reva covers all four Math domains (Algebra, Advanced Math, Problem-Solving & Data Analysis, Geometry & Trigonometry) and all four Reading & Writing domains (Information & Ideas, Craft & Structure, Expression of Ideas, Standard English Conventions) — down to individual skills like boundaries, transitions and rhetorical synthesis.",
  },
  {
    q: "How is this different from Khan Academy or Photomath?",
    a: "Reva is a tutor, not a question bank. When you get a question wrong, Reva doesn't just reveal the answer — it teaches the step-by-step method on a live whiteboard with voice, adapts your next practice to the skills you're weakest at, and remembers your progress across sessions. A free question bank can't teach you the way a tutor sitting next to you does.",
  },
  {
    q: "Do I get PSAT/NMSQT and National Merit prep too?",
    a: "Yes — every SAT plan bundles PSAT/NMSQT preparation and the state-by-state National Merit Scholarship cutoff calculator at no extra cost. PSAT skills map directly onto SAT skills, so nothing is wasted: Reva carries your weakness data and tutor history straight from PSAT into SAT prep.",
  },
  {
    q: "Are these real College Board questions?",
    a: "No — and that's deliberate. Reva uses original, AI-generated practice items modelled on College Board's published SAT specification, difficulty bands and skill taxonomy, plus curated public-domain reading passages. We do not scrape Bluebook or use any copyrighted College Board content, so the prep is copyright-safe.",
  },
  {
    q: "Is there a free way to try it?",
    a: "Yes. You can start free with no credit card — the free tier gives you daily AI actions to experience Reva's SAT tutoring, whiteboard explanations and practice. Paid plans unlock full-length practice tests, unlimited tutoring and the complete question pool.",
  },
];

function SatNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-bold text-sm sm:text-base tracking-tight">SAT Prep</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <a href="#sections" className="hover:text-white transition-colors">The test</a>
          <a href="#how" className="hover:text-white transition-colors">How Reva teaches</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <Link href="/psat">
            <span className="hover:text-white transition-colors cursor-pointer">PSAT / National Merit</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={SIGNUP_URL}
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-lg shadow-indigo-900/30"
          >
            Start Free <ArrowRight className="w-4 h-4" />
          </a>
          <button className="md:hidden text-white/70" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3 bg-[#0a0a0f]">
          <a href="#sections" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>The test</a>
          <a href="#how" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>How Reva teaches</a>
          <a href="#faq" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>FAQ</a>
          <Link href="/psat">
            <span className="block text-white/70 hover:text-white py-1 cursor-pointer" onClick={() => setOpen(false)}>PSAT / National Merit</span>
          </Link>
          <a
            href={SIGNUP_URL}
            className="block w-full mt-2 text-center bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold px-5 py-3 rounded-full"
          >
            Start Free →
          </a>
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
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">SAT prep — common questions</h2>
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
        { "@type": "ListItem", "position": 2, "name": "SAT Prep", "item": "https://eduversejr.com/sat" },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": "https://eduversejr.com/sat",
      "name": "SAT Prep by Reva AI",
      "description": "Digital SAT preparation by EduVerseJr's Reva AI Teacher. Adaptive Reading & Writing and Math practice in the real two-module digital SAT format, an AI tutor on every question with live whiteboard explanations, per-skill weakness tracking, and bundled PSAT/NMSQT prep with a state-by-state National Merit Scholarship cutoff calculator.",
      "url": "https://eduversejr.com/sat",
      "provider": {
        "@type": "Organization",
        "@id": "https://eduversejr.com",
        "name": "EduVerseJr",
      },
      "educationalProgramMode": "online",
      "educationalLevel": "Grades 10–12 (Ages 15–18)",
      "occupationalCategory": "Test Preparation",
      "programType": "test_prep",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Start free with no credit card. Paid plans unlock full-length practice tests and unlimited AI tutoring; PSAT/NMSQT and the National Merit calculator are included.",
      },
    },
    {
      "@type": "SoftwareApplication",
      "name": "Reva AI Teacher — SAT Prep",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "url": "https://eduversejr.com/sat",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "featureList": [
        "Adaptive digital SAT Reading & Writing practice",
        "Adaptive digital SAT Math practice",
        "Step-by-step whiteboard explanations with voice",
        "Per-skill weakness tracking",
        "Bundled PSAT/NMSQT and National Merit cutoff calculator",
      ],
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

export default function SatPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f", color: "#fff" }}>
      <Helmet>
        <title>SAT Prep — AI Tutor for the Digital SAT (Math & Reading) | EduVerseJr</title>
        <meta name="description" content="Digital SAT prep by Reva AI: an AI tutor on every question, adaptive Math + Reading & Writing practice, weakness maps, PSAT/NMSQT included. Start free." />
        <link rel="canonical" href="https://eduversejr.com/sat" />
        <meta name="keywords" content="SAT prep, digital SAT prep, AI SAT tutor, SAT Math prep, SAT Reading and Writing prep, adaptive SAT practice, SAT practice test, Reva AI SAT, EduVerseJr SAT, Khan Academy SAT alternative" />
        <meta property="og:title" content="SAT Prep — Reva AI Tutor for the Digital SAT | EduVerseJr" />
        <meta property="og:description" content="AI-tutored digital SAT prep — adaptive Math and Reading & Writing, step-by-step whiteboard explanations, PSAT/NMSQT and National Merit included. Start free." />
        <meta property="og:url" content="https://eduversejr.com/sat" />
        <meta property="og:image" content="https://eduversejr.com/logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SAT Prep — Reva AI Tutor for the Digital SAT" />
        <meta name="twitter:description" content="Adaptive digital SAT Math + Reading & Writing with an AI tutor on every question. PSAT/NMSQT included. Start free." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <SatNav />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center px-4 py-24">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              Digital SAT · Math + Reading &amp; Writing · Live now
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
            An AI tutor on{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8 0%, #22d3ee 50%, #818cf8 100%)",
                backgroundSize: "200%",
              }}
            >
              every SAT question
            </span>
            .
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Digital SAT prep that teaches, not just tests. Reva runs adaptive Math and Reading &amp;
            Writing practice in the real two-module format and walks you through every question on a
            live whiteboard — with PSAT/NMSQT and the National Merit calculator included.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={SIGNUP_URL}
              className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-xl shadow-indigo-900/40"
            >
              Start Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sections"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium px-8 py-4 rounded-full text-lg transition-all"
            >
              See what's inside
            </a>
          </div>

          <p className="text-white/40 text-xs mb-10">
            No credit card ·{" "}
            <Link href="/psat">
              <span className="text-cyan-300 hover:text-cyan-200 underline cursor-pointer">Prepping for the PSAT/NMSQT? →</span>
            </Link>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "1600", label: "Full digital SAT scale" },
              { value: "2+2", label: "Adaptive modules R&W + Math" },
              { value: "Reva", label: "AI tutor on every Q" },
              { value: "Free", label: "To start · no card" },
            ].map((s) => (
              <div key={s.label} className="border border-white/10 rounded-2xl py-4 px-3 bg-white/3">
                <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO SECTIONS OF THE DIGITAL SAT ──────────────── */}
      <section id="sections" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Both sections, in the real format</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">The whole digital SAT — tutored</h2>
            <p className="text-white/50 max-w-xl mx-auto">Reading &amp; Writing and Math, each delivered as two adaptive modules exactly like test day. Reva teaches every skill inside them.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((p) => (
              <div key={p.title} className={`relative border rounded-3xl p-7 ${p.border} ${p.bg}`}>
                <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${p.accent} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                  <p.icon className="w-3.5 h-3.5" /> {p.badge}
                </span>
                <h3 className="text-2xl font-black text-white mb-1">{p.title}</h3>
                <p className="text-white/60 text-sm mb-5">{p.subtitle}</p>
                <ul className="space-y-2">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-white/70 text-sm">
                      <Target className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW REVA TEACHES THE SAT ─────────────────────── */}
      <section id="how" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Why it works</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">A tutor, not a question bank</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: PenLine, title: "Whiteboard explanations", desc: "Get a question wrong and Reva teaches the method step-by-step on a live whiteboard — the same tutor engine that powers our Maths app." },
              { icon: Mic, title: "Ask out loud", desc: "Talk to Reva. Ask why an answer is wrong or how to approach a passage, and Reva walks you through it in plain English." },
              { icon: Brain, title: "Adaptive practice", desc: "Two-module adaptive delivery mirrors the real digital SAT, and Reva steers your practice toward the skills you're weakest at." },
              { icon: BarChart3, title: "Per-skill weakness map", desc: "Scores broken down by domain and skill — Algebra, Advanced Math, Craft & Structure, Standard English Conventions and more." },
              { icon: Award, title: "PSAT/NMSQT included", desc: "Every SAT plan bundles PSAT/NMSQT prep and the state-by-state National Merit cutoff calculator at no extra cost." },
              { icon: GraduationCap, title: "No Bluebook scrapes", desc: "Original AI-generated items modelled on College Board's published spec. Public-domain passages only. Copyright-safe." },
            ].map((f, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-5 bg-white/3 hover:bg-white/6 transition-colors">
                <f.icon className="w-5 h-5 text-cyan-400 mb-3" />
                <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PSAT / NATIONAL MERIT CALLOUT ────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border border-amber-500/30 bg-amber-500/5 rounded-3xl p-8 md:p-10 text-center">
            <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Chasing National Merit? It's built in.</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-6 leading-relaxed">
              Every SAT plan includes PSAT/NMSQT prep and a state-by-state National Merit Scholarship cutoff
              calculator. Selectivity Index cutoffs vary by roughly 14 points across states — Reva tells you the
              one that matters for yours, and carries your PSAT weakness data straight into SAT prep.
            </p>
            <Link href="/psat">
              <span className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold cursor-pointer">
                Explore PSAT &amp; National Merit prep <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
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
              background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(34,211,238,0.2) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Start your SAT prep with a tutor tonight
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
                Reva is live now for Math and Reading &amp; Writing. Try it free — no credit card — and let an
                AI tutor teach you every question you miss.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-2xl shadow-indigo-900/50"
              >
                Start Free <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-white/30 text-sm mt-4">
                <Clock className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
                Free tier · daily AI actions · no card required
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 text-center">
        <div className="text-white/30 text-sm space-y-2">
          <p>
            SAT Prep is part of{" "}
            <Link href="/">
              <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">EduVerseJr.com</span>
            </Link>
            {" · "}
            <Link href="/reva">
              <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">Reva AI Teacher</span>
            </Link>
            {" · "}
            <Link href="/psat">
              <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">PSAT Prep</span>
            </Link>
          </p>
          <p>© {new Date().getFullYear()} EduVerseJr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
