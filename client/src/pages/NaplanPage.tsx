import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  Target, BookOpen, TrendingUp, Menu, X, Calculator,
  Ruler, BarChart3, GraduationCap, ChevronDown, ChevronUp,
} from "lucide-react";

const APP_REGISTER = "https://au.eduversejr.com/register";
const APP_LOGIN = "https://au.eduversejr.com/login";

const steps = [
  {
    icon: Target,
    title: "Take a diagnostic mock",
    body: "A short timed mock across all three strands — Part A (calculator) and Part B (non-calculator), just like NAPLAN.",
  },
  {
    icon: BookOpen,
    title: "Reva teaches your gaps",
    body: "See exactly which ACARA strands are weak, then Reva works through each one with step-by-step explanations — not just the answer.",
  },
  {
    icon: TrendingUp,
    title: "Re-test and improve",
    body: "Practise the skills you missed, then take another mock and watch your indicative proficiency climb.",
  },
];

const strands = [
  {
    icon: Calculator,
    name: "Number & Algebra",
    blurb: "Fractions, ratios, percentages, indices, and linear & non-linear relationships.",
  },
  {
    icon: Ruler,
    name: "Measurement & Geometry",
    blurb: "Area, volume, angles, Pythagoras, trigonometry, scale & transformations.",
  },
  {
    icon: BarChart3,
    name: "Statistics & Probability",
    blurb: "Data displays, summarising data, probability and relative frequency.",
  },
];

const faqs = [
  { q: "Which year levels is this NAPLAN prep for?", a: "Reva's NAPLAN numeracy prep is built for Years 7 and 9 — the secondary NAPLAN year levels — and is aligned to the Australian Curriculum (ACARA v9)." },
  { q: "Does it cover both the calculator and non-calculator sections?", a: "Yes. The mock exam mirrors NAPLAN with a calculator-allowed Part A and a non-calculator Part B, across all three numeracy strands." },
  { q: "Is it really free?", a: "Yes — you can create an account and start a diagnostic mock with no payment required. Reva's NAPLAN numeracy practice is free to Australian students." },
  { q: "Is this an official NAPLAN test?", a: "No. Reva provides original practice questions and an indicative proficiency result to help your child prepare. It is not an official NAPLAN test or score, and is not affiliated with or endorsed by ACARA." },
  { q: "How is this different from a practice-test booklet?", a: "A booklet marks your child and stops there. Reva teaches every missed question step-by-step, finds the weak ACARA strands, and re-tests to show improvement — the diagnostic-teach-retest loop a tutor uses." },
  { q: "What does the proficiency report show?", a: "After each timed mock, your child gets an indicative proficiency level plus a per-part (calculator / non-calculator) and per-strand breakdown, with a direct link to practise their weakest strands next." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "EduVerseJr", item: "https://eduversejr.com/" },
        { "@type": "ListItem", position: 2, name: "NAPLAN Numeracy Prep", item: "https://eduversejr.com/naplan-prep" },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": "https://eduversejr.com/naplan-prep",
      name: "NAPLAN Numeracy Prep by Reva AI (Years 7 & 9)",
      url: "https://eduversejr.com/naplan-prep",
      description:
        "Free AI-tutored NAPLAN numeracy preparation for Years 7 and 9, aligned to the Australian Curriculum (ACARA v9): a diagnostic mock, step-by-step teaching on weak strands, and an indicative proficiency report.",
      provider: { "@type": "Organization", "@id": "https://eduversejr.com", name: "EduVerseJr" },
      educationalProgramMode: "online",
      occupationalCategory: "NAPLAN numeracy preparation",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function NaplanNav() {
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
            <GraduationCap className="w-5 h-5 text-violet-400" />
            <span className="text-white font-bold text-sm sm:text-base tracking-tight">NAPLAN Numeracy Prep</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#strands" className="hover:text-white transition-colors">Coverage</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <Link href="/reva"><span className="hover:text-white transition-colors cursor-pointer">Reva AI</span></Link>
        </div>
        <div className="flex items-center gap-3">
          <a href={APP_LOGIN} className="hidden md:inline text-white/60 hover:text-white text-sm">Log in</a>
          <a href={APP_REGISTER} className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            Start free
          </a>
          <button className="md:hidden text-white/70" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3 bg-[#0a0a0f]">
          <a href="#how" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>How it works</a>
          <a href="#strands" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>Coverage</a>
          <a href="#faq" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>FAQ</a>
          <a href={APP_LOGIN} className="block text-white/70 hover:text-white py-1">Log in</a>
        </div>
      )}
    </nav>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl bg-white/[0.02]">
      <button
        className="w-full flex items-center justify-between text-left px-5 py-4 text-white/90 font-medium"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 flex-none text-white/50" /> : <ChevronDown className="w-5 h-5 flex-none text-white/50" />}
      </button>
      {open && <p className="px-5 pb-5 text-white/60 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function NaplanPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f", color: "#fff" }}>
      <Helmet>
        <title>NAPLAN Numeracy Prep (Years 7 & 9) — AI That Teaches | EduVerseJr</title>
        <meta name="description" content="Free NAPLAN numeracy practice for Years 7 & 9 by Reva AI: a diagnostic mock, step-by-step teaching on your weak ACARA strands, and an indicative proficiency report. Aligned to the Australian Curriculum (ACARA v9)." />
        <link rel="canonical" href="https://eduversejr.com/naplan-prep" />
        <meta name="keywords" content="NAPLAN numeracy prep, NAPLAN practice Year 7, NAPLAN practice Year 9, NAPLAN numeracy practice test, ACARA numeracy, NAPLAN maths prep, free NAPLAN practice, Reva AI NAPLAN, EduVerseJr NAPLAN" />
        <meta property="og:title" content="NAPLAN Numeracy Prep that Actually Teaches — Reva AI" />
        <meta property="og:description" content="Free Years 7 & 9 NAPLAN numeracy prep: diagnostic mock → Reva teaches your weak strands step-by-step → re-test. Aligned to ACARA v9. No payment required." />
        <meta property="og:url" content="https://eduversejr.com/naplan-prep" />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAPLAN Numeracy Prep — Reva AI by EduVerseJr" />
        <meta name="twitter:description" content="Free Years 7 & 9 NAPLAN numeracy prep that teaches your weak strands, not just marks them. Aligned to ACARA v9." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <NaplanNav />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 to-transparent" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-1.5 mb-6">
            For Australian Students · Years 7 & 9
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            NAPLAN numeracy prep that actually <span className="text-violet-400">teaches</span>.
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Most prep just tests your child. Reva is an AI tutor that finds the weak ACARA strands, teaches each one step by step, and helps them improve — free to start.
          </p>
          <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
            <a href={APP_REGISTER} className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
              Start free
            </a>
            <a href={APP_LOGIN} className="text-violet-300 hover:text-white font-medium px-5 py-3.5 transition-colors">
              I already have an account →
            </a>
          </div>
          <p className="mt-4 text-sm text-white/40">No payment required · aligned to the Australian Curriculum (ACARA v9)</p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold">How it works</h2>
        <p className="text-center text-white/50 mt-2 mb-12">The diagnostic → teach → re-test loop that tutoring is built on — at AI scale.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="border border-white/10 rounded-2xl bg-white/[0.02] p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                <s.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STRANDS ── */}
      <section id="strands" className="border-y border-white/10 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-center text-3xl font-bold">Full numeracy coverage</h2>
          <p className="text-center text-white/50 mt-2 mb-12">Hundreds of questions across every ACARA strand, for Year 7 and Year 9.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strands.map((s) => (
              <div key={s.name} className="border border-white/10 rounded-2xl bg-white/[0.02] p-6">
                <s.icon className="w-8 h-8 text-violet-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{s.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ── */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-violet-800 px-8 py-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Not another practice bank.</h2>
          <p className="text-violet-100 max-w-2xl mx-auto leading-relaxed">
            Static practice tests tell your child <em>what</em> they got wrong. Reva shows them <em>why</em> — with worked solutions, a timed mock exam, and an indicative proficiency report that points straight to what to practise next.
          </p>
          <a href={APP_REGISTER} className="inline-block mt-8 bg-white text-violet-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-colors">
            Start free today
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold mb-10">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-10 text-sm text-white/40 leading-relaxed">
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
            <a href={APP_REGISTER} className="text-violet-300 hover:text-white">Create a free account</a>
            <a href={APP_LOGIN} className="text-violet-300 hover:text-white">Log in</a>
            <Link href="/curriculum/australia"><span className="text-violet-300 hover:text-white cursor-pointer">Australian ACARA Maths curriculum</span></Link>
            <Link href="/courses"><span className="text-violet-300 hover:text-white cursor-pointer">All courses</span></Link>
          </div>
          <p>
            Practice questions and indicative feedback only — not an official NAPLAN test or score. NAPLAN is a trademark of the Australian Curriculum, Assessment and Reporting Authority (ACARA), which does not endorse and is not affiliated with Reva AI / EduVerseJr. Curriculum content is derived from the Australian Curriculum V9.0 © ACARA.
          </p>
        </div>
      </footer>
    </div>
  );
}
