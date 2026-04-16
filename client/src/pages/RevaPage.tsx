import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useState } from "react";
import {
  Sparkles, MessageSquare, Mic, Target, GalleryHorizontal,
  Dumbbell, TrendingDown, Upload, Award, BarChart3, Brain,
  BookOpen, Clock, ArrowRight, CheckCircle, Zap, Globe,
  FlaskConical, Code2, Lock, ChevronDown, ChevronUp, Menu, X
} from "lucide-react";

/* ─── Feature data ─────────────────────────────────────── */
const features = [
  {
    icon: MessageSquare, color: "text-purple-400", bg: "bg-purple-500/10",
    title: "AI Chat Tutor",
    description: "Ask anything in plain English. Reva explains like a patient human teacher — step by step, no judgment.",
    size: "lg",
  },
  {
    icon: Target, color: "text-cyan-400", bg: "bg-cyan-500/10",
    title: "Interactive Whiteboard",
    description: "See problems solved visually, step by step. Reva draws on a live board just like a teacher at a blackboard.",
    size: "md",
  },
  {
    icon: Mic, color: "text-green-400", bg: "bg-green-500/10",
    title: "Voice Mode",
    description: "Speak naturally — Reva listens, understands, and talks back. Hands-free learning.",
    size: "sm",
  },
  {
    icon: Clock, color: "text-yellow-400", bg: "bg-yellow-500/10",
    title: "Available 24 / 7",
    description: "No scheduling, no waiting. Instant help at midnight before an exam.",
    size: "sm",
  },
  {
    icon: GalleryHorizontal, color: "text-pink-400", bg: "bg-pink-500/10",
    title: "Teaching Slides",
    description: "Reva generates structured, curriculum-aligned lesson slides for any topic — perfect for revision.",
    size: "md",
  },
  {
    icon: Dumbbell, color: "text-orange-400", bg: "bg-orange-500/10",
    title: "Smart Practice",
    description: "AI-generated questions targeting your child's exact weak spots. Gets smarter with every session.",
    size: "md",
  },
  {
    icon: TrendingDown, color: "text-red-400", bg: "bg-red-500/10",
    title: "Weakness Tracking",
    description: "Automatically detects struggling topics across every session and builds a targeted revision plan.",
    size: "lg",
  },
  {
    icon: Upload, color: "text-teal-400", bg: "bg-teal-500/10",
    title: "Question Paper Upload",
    description: "Photo of homework? PDF textbook page? Reva reads it and explains it instantly.",
    size: "sm",
  },
  {
    icon: Award, color: "text-violet-400", bg: "bg-violet-500/10",
    title: "Quizzes & Grading",
    description: "Instant AI grading. Every wrong answer gets a full explanation — not just a red cross.",
    size: "sm",
  },
  {
    icon: BarChart3, color: "text-blue-400", bg: "bg-blue-500/10",
    title: "Progress Dashboard",
    description: "Clear view of every topic attempted, scores, and improvement over time.",
    size: "md",
  },
  {
    icon: Brain, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10",
    title: "Personalised Path",
    description: "No two students get the same lesson. Reva adapts to each child's pace, style, and curriculum.",
    size: "md",
  },
  {
    icon: BookOpen, color: "text-sky-400", bg: "bg-sky-500/10",
    title: "Curriculum-Aligned",
    description: "Mapped to US Common Core, UK, Australia, Singapore, Canada, and UAE curricula.",
    size: "sm",
  },
];

const steps = [
  {
    number: "01",
    title: "Register in 30 seconds",
    description: "Sign up with name + email. No credit card. No downloads. Works in any browser.",
  },
  {
    number: "02",
    title: "Tell Reva what to teach",
    description: "Type a question, upload a photo of homework, or just say 'teach me quadratics'.",
  },
  {
    number: "03",
    title: "Learn, practise, improve",
    description: "Chat, use the whiteboard, do smart practice, track weakness — all in one session.",
  },
];

const faqs = [
  { q: "Is Reva really free?", a: "Yes — Reva has a free tier with 10 AI replies per day, no credit card required. Paid plans unlock unlimited chat, voice, whiteboard, and file uploads." },
  { q: "What grades does Reva cover?", a: "Reva currently covers Mathematics for Grades 5–12 (US curriculum). Science and Coding are coming soon." },
  { q: "Can Reva help with homework?", a: "Absolutely. Upload a photo or PDF of any homework — Reva reads it, explains it, and walks through solutions step by step." },
  { q: "Is Reva safe for kids?", a: "Yes. Reva is focused solely on academic subjects. All sessions are logged and accessible to parents." },
  { q: "Does it work on mobile?", a: "Yes — Reva is fully responsive. Voice mode, whiteboard, and uploads all work on phones and tablets." },
  { q: "What AI powers Reva?", a: "Reva is powered by Claude (Anthropic) — one of the world's leading AI models, known for its accuracy and safe, educational responses." },
];

/* ─── Minimal custom nav ─────────────────────────────────── */
function RevaNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: brand */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="text-white/50 hover:text-white/80 text-sm transition-colors cursor-pointer">
              ← EduVerseJr
            </span>
          </Link>
          <span className="text-white/20 hidden sm:block">|</span>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-white font-bold text-base tracking-tight">Reva AI</span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://revaai.eduversejr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-lg shadow-purple-900/30"
          >
            Launch Reva AI <ArrowRight className="w-4 h-4" />
          </a>
          <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3 bg-[#0a0a0f]">
          <a href="#features" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>Features</a>
          <a href="#how-it-works" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#faq" className="block text-white/70 hover:text-white py-1" onClick={() => setOpen(false)}>FAQ</a>
          <a
            href="https://revaai.eduversejr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold px-5 py-3 rounded-full"
            onClick={() => setOpen(false)}
          >
            Launch Reva AI →
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── FAQ accordion ────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Common questions</h2>
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

/* ─── Main page ─────────────────────────────────────────── */
export default function RevaPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f", color: "#fff" }}>
      <Helmet>
        <title>Reva AI Maths Tutor — EduVerseJr | 24/7 AI-Powered Learning</title>
        <meta name="description" content="Meet Reva, EduVerseJr's AI maths tutor. Chat, voice, whiteboard, smart practice, weakness tracking and question paper upload — free to start." />
        <link rel="canonical" href="https://eduversejr.com/reva" />
        <meta property="og:title" content="Reva AI Maths Tutor — EduVerseJr" />
        <meta property="og:description" content="AI-powered maths tutor available 24/7. Chat, voice, whiteboard, slides, smart practice, weakness tracking and more." />
        <meta property="og:url" content="https://eduversejr.com/reva" />
        <meta property="og:image" content="https://eduversejr.com/logo.jpg" />
      </Helmet>

      <RevaNav />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center px-4 py-24">
        {/* Background glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-violet-500/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Powered by Claude AI · Available 24/7 · Free to Start
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
            Your child's{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #a855f7 0%, #22d3ee 50%, #a855f7 100%)",
                backgroundSize: "200%",
              }}
            >
              AI maths teacher
            </span>
            <br />
            that never stops.
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Reva teaches, practises, tracks weaknesses, and adapts — all in one session.
            Not just a chatbot. A real AI teacher for Grades 5–12.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="https://revaai.eduversejr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-xl shadow-purple-900/40"
            >
              Start Free — No Sign-up Needed
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium px-8 py-4 rounded-full text-lg transition-all"
            >
              See All Features
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "12", label: "AI Features" },
              { value: "87", label: "Topics Covered" },
              { value: "24/7", label: "Always Available" },
              { value: "Free", label: "To Start" },
            ].map((s) => (
              <div key={s.label} className="border border-white/10 rounded-2xl py-4 px-3 bg-white/3">
                <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES BENTO GRID ──────────────────────────── */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">What Reva Can Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything a great tutor does — and more</h2>
            <p className="text-white/50 max-w-xl mx-auto">Every feature works together. Reva doesn't just answer questions — she teaches, tracks, and adapts.</p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Large feature 1 — spans 2 cols */}
            <BentoCard feature={features[0]} span="col-span-2" />
            {/* Medium */}
            <BentoCard feature={features[1]} span="col-span-1" />
            {/* Small stack */}
            <div className="col-span-1 flex flex-col gap-3">
              <BentoCard feature={features[2]} span="" compact />
              <BentoCard feature={features[3]} span="" compact />
            </div>

            {/* Row 2 */}
            <BentoCard feature={features[4]} span="col-span-1" />
            <BentoCard feature={features[5]} span="col-span-1" />
            {/* Large feature 2 — spans 2 cols */}
            <BentoCard feature={features[6]} span="col-span-2" />

            {/* Row 3 */}
            <div className="col-span-1 flex flex-col gap-3">
              <BentoCard feature={features[7]} span="" compact />
              <BentoCard feature={features[8]} span="" compact />
            </div>
            <BentoCard feature={features[9]} span="col-span-1" />
            <BentoCard feature={features[10]} span="col-span-1" />
            <BentoCard feature={features[11]} span="col-span-1" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Getting Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Up and learning in 60 seconds</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50" />
            {steps.map((step, i) => (
              <div key={i} className="relative border border-white/10 rounded-3xl p-7 bg-white/3 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-black text-sm mb-5">
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ──────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Subject Coverage</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Start with Maths. More coming.</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Brain, label: "Mathematics", sub: "Grades 5–12 · US Curriculum", live: true, gradient: "from-purple-600 to-violet-600" },
              { icon: FlaskConical, label: "Science", sub: "Coming Soon", live: false, gradient: "from-slate-700 to-slate-700" },
              { icon: Code2, label: "Coding", sub: "Coming Soon", live: false, gradient: "from-slate-700 to-slate-700" },
            ].map((s) => (
              <div
                key={s.label}
                className={`relative border rounded-2xl p-5 flex flex-col items-center text-center gap-2 ${s.live ? "border-purple-500/30 bg-purple-500/10" : "border-white/10 bg-white/3 opacity-60"}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-sm">{s.label}</span>
                <span className="text-white/50 text-xs">{s.sub}</span>
                {s.live
                  ? <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Live</span>
                  : <span className="absolute top-2 right-2"><Lock className="w-3.5 h-3.5 text-white/30" /></span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST PILLS ───────────────────────────────────── */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
          {[
            { icon: Zap, text: "Instant responses — no waiting" },
            { icon: Globe, text: "Works on mobile & desktop" },
            { icon: Sparkles, text: "Powered by Claude AI" },
            { icon: CheckCircle, text: "Free to start — no credit card" },
          ].map((p, i) => (
            <div key={i} className="flex items-center gap-2 border border-white/10 bg-white/5 text-white/70 text-sm px-4 py-2 rounded-full">
              <p.icon className="w-4 h-4 text-purple-400" />
              {p.text}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <FAQ />

      {/* ── BOTTOM CTA ────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(14,165,233,0.2) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-500/10 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Let your child try Reva — free
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
                Sign up in seconds. No credit card. No downloads.
                Just an AI teacher that never runs out of patience.
              </p>
              <a
                href="https://revaai.eduversejr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-2xl shadow-purple-900/50"
              >
                Launch Reva AI <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-white/30 text-sm mt-4">Free · No credit card · Works in any browser</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIMPLE FOOTER ─────────────────────────────────── */}
      <footer className="border-t border-white/10 py-8 px-4 text-center">
        <div className="text-white/30 text-sm space-y-2">
          <p>
            Reva AI is part of{" "}
            <Link href="/">
              <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">EduVerseJr.com</span>
            </Link>
          </p>
          <p>© {new Date().getFullYear()} EduVerseJr · Vetrix Digital Technologies Pvt Ltd</p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Bento card component ───────────────────────────────── */
function BentoCard({
  feature,
  span,
  compact = false,
}: {
  feature: (typeof features)[0];
  span: string;
  compact?: boolean;
}) {
  const Icon = feature.icon;
  return (
    <div
      className={`${span} group border border-white/10 rounded-2xl ${compact ? "p-4" : "p-6"} bg-white/3 hover:bg-white/6 hover:border-white/20 transition-all cursor-default`}
    >
      <div className={`${feature.bg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
        <Icon className={`${feature.color} ${compact ? "w-4 h-4" : "w-5 h-5"}`} />
      </div>
      <h3 className={`text-white font-bold mb-1.5 ${compact ? "text-sm" : "text-base"}`}>{feature.title}</h3>
      {!compact && (
        <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
      )}
      {compact && (
        <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{feature.description}</p>
      )}
    </div>
  );
}
