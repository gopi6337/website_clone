import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import MathCurriculumSection from "@/components/MathCurriculumSection";
import ScienceCurriculumSection from "@/components/ScienceCurriculumSection";
import CodingCurriculumSection from "@/components/CodingCurriculumSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ComparisonBlock from "@/components/ComparisonBlock";
import HumanTeachersSection from "@/components/HumanTeachersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, FlaskConical, Code2, ArrowRight } from "lucide-react";

type PricingTier = {
  name: string;
  icon: string;
  tagline: string;
  monthly: number;
  quarterly: number;
  qSave: number;
  yearly: number;
  ySave: number;
  yPct: number;
  accent: "purple" | "blue" | "green";
  needsHumanOnboard?: boolean;
  cta: "trial" | "waitlist-reva" | "waitlist-hybrid" | "waitlist-sat" | "waitlist-sat-only" | "waitlist-psat";
  yearlyOnly?: boolean;  // hides monthly/quarterly toggles for SKUs that only sell yearly (e.g. PSAT 8/9)
};
type PricingGroup = {
  group: string;
  subtitle: string;
  featured?: boolean;
  comingSoon?: boolean;
  tiers?: PricingTier[];
};

const pricingData: PricingGroup[] = [
  {
    group: "Grades 5-7",
    subtitle: "Math foundations",
    tiers: [
      { name: "Human Teacher",  icon: "👩‍🏫", tagline: "8 hrs/month · 2 hrs/week",   monthly: 160, quarterly: 430, qSave: 50, yearly: 1499,  ySave: 421, yPct: 22, accent: "green",  cta: "trial" },
      { name: "Reva AI",        icon: "🤖", tagline: "Unlimited 24/7 AI tutor",      monthly: 15,  quarterly: 39,  qSave: 6,  yearly: 119,   ySave: 61,  yPct: 34, accent: "purple", cta: "waitlist-reva" },
      { name: "Hybrid",         icon: "🤝", tagline: "AI + 2 hrs human/month",       monthly: 79,  quarterly: 199, qSave: 38, yearly: 699,   ySave: 249, yPct: 26, accent: "blue",   cta: "waitlist-hybrid" },
    ],
  },
  {
    group: "Grades 8-10",
    subtitle: "Algebra & Geometry",
    featured: true,
    tiers: [
      { name: "Human Teacher",  icon: "👩‍🏫", tagline: "8 hrs/month + PSAT prep",       monthly: 200, quarterly: 549, qSave: 51, yearly: 1899, ySave: 501, yPct: 21, accent: "green",  cta: "trial" },
      { name: "Reva AI",        icon: "🤖", tagline: "Unlimited 24/7 AI tutor + PSAT",  monthly: 30,  quarterly: 79,  qSave: 11, yearly: 239,  ySave: 121, yPct: 34, accent: "purple", cta: "waitlist-reva" },
      { name: "Hybrid",         icon: "🤝", tagline: "AI + 2 hrs human/month + PSAT",  monthly: 109, quarterly: 289, qSave: 38, yearly: 999,  ySave: 309, yPct: 24, accent: "blue",   cta: "waitlist-hybrid" },
    ],
  },
  {
    group: "Grades 11-12",
    subtitle: "Pre-Calc & Advanced Math",
    tiers: [
      { name: "Human Teacher",  icon: "👩‍🏫", tagline: "8 hrs/month · 2 hrs/week",   monthly: 280, quarterly: 769, qSave: 71, yearly: 2699, ySave: 661, yPct: 20, accent: "green",  needsHumanOnboard: true, cta: "trial" },
      { name: "Reva AI",        icon: "🤖", tagline: "Unlimited 24/7 AI tutor",     monthly: 50,  quarterly: 129, qSave: 21, yearly: 399,  ySave: 201, yPct: 34, accent: "purple", cta: "waitlist-reva" },
      { name: "Hybrid",         icon: "🤝", tagline: "AI + 2 hrs human/month",      monthly: 150, quarterly: 399, qSave: 51, yearly: 1399, ySave: 401, yPct: 22, accent: "blue",   needsHumanOnboard: true, cta: "waitlist-hybrid" },
    ],
  },
  {
    group: "SAT Prep",
    subtitle: "Any grade · Digital SAT practice",
    tiers: [
      { name: "Reva + SAT + Human", icon: "👩‍🏫", tagline: "Human SAT coach + AI + SAT mode", monthly: 345, quarterly: 929, qSave: 106, yearly: 3299, ySave: 841, yPct: 21, accent: "green",  needsHumanOnboard: true, cta: "trial" },
      { name: "Reva + SAT Prep",    icon: "🤖", tagline: "Full Reva G5-12 + SAT mode",       monthly: 65,  quarterly: 169, qSave: 26,  yearly: 499,  ySave: 281, yPct: 36, accent: "purple", cta: "waitlist-sat" },
    ],
  },
];

const SIGNUP_URL = "https://revaai.eduversejr.com/register";
const CTA_CONFIG: Record<PricingTier["cta"], { label: string; href: string }> = {
  "trial":             { label: "Book Free Trial →", href: "#booking" },
  "waitlist-reva":     { label: "Start Free Trial →", href: SIGNUP_URL },
  "waitlist-hybrid":   { label: "Get Started →", href: SIGNUP_URL },
  "waitlist-sat":      { label: "Start Free Trial →", href: SIGNUP_URL },
  "waitlist-sat-only": { label: "Start Free Trial →", href: SIGNUP_URL },
  "waitlist-psat":     { label: "Start Free Trial →", href: SIGNUP_URL },
};

export default function Home() {
  const [activeSubject, setActiveSubject] = useState<"maths" | "science" | "coding">("maths");
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Expert Online Maths, Science & Coding Tutors + Reva AI | EduVerseJr</title>
        <meta name="description" content="Live 1-to-1 online classes with expert human teachers for Maths, Science & Coding, Grades 5–12 — plus Reva, a 24/7 AI teacher. Curriculum-aligned for US, UK, Canada, Australia, Singapore & UAE." />
        <link rel="canonical" href="https://eduversejr.com/" />
        <meta property="og:title" content="EduVerseJr — Expert Human Teachers + Reva AI | Maths, Science & Coding" />
        <meta property="og:description" content="Live 1-to-1 online classes with expert human teachers for Maths, Science & Coding, Grades 5–12 — plus Reva, a 24/7 AI teacher. US, UK, Canada, Australia, Singapore & UAE." />
        <meta property="og:url" content="https://eduversejr.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        <meta property="og:image:alt" content="EduVerseJr - AI + Human Teaching Platform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EduVerseJr — Expert Human Teachers + Reva AI | Maths, Science & Coding" />
        <meta name="twitter:description" content="Live 1-to-1 online Maths, Science & Coding classes with expert human teachers, plus Reva — a 24/7 AI teacher. Grades 5–12, 6 countries." />
        <meta name="twitter:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        {/*
          Self-serving review schema removed 2026-06-11 (Fable 5 finding M2).
          Google has ignored review markup on first-party orgs since 2019;
          visible testimonials live on the page itself.
        */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "EduVerseJr",
          "url": "https://eduversejr.com",
          "logo": "https://eduversejr.com/logo.jpg"
        })}</script>
      </Helmet>

      <Header />
      <HeroSection />
      <TrustStrip />

      {/* Region-based curriculum — full sections, subject-tabbed (Maths / Science / Coding).
          Reuses the exact /courses sections + copy; promoted to top priority. */}
      <section id="courses" className="pt-10 md:pt-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Courses</h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto mb-6">
              Expert human teachers for one-to-one classes, and Reva AI live for
              Mathematics (Grades 5–12) with SAT &amp; PSAT Math prep included.
            </p>
            {/* Subject Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {([
                { id: "maths", label: "Mathematics", icon: <Brain className="w-4 h-4" /> },
                { id: "science", label: "Science", icon: <FlaskConical className="w-4 h-4" /> },
                { id: "coding", label: "Coding", icon: <Code2 className="w-4 h-4" /> },
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubject(tab.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                    activeSubject === tab.id
                      ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                      : "bg-white hover:bg-gray-50 border-gray-300 text-gray-700"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Content — only active subject shown */}
        {activeSubject === "maths" && <MathCurriculumSection />}
        {activeSubject === "science" && <ScienceCurriculumSection />}
        {activeSubject === "coding" && <CodingCurriculumSection />}
      </section>

      <div id="about">
        <AboutUsSection />
      </div>

      <div id="why-choose">
        <WhyChooseSection />
      </div>

      <ComparisonBlock />

      {/* Reva AI Teaser */}
      <section id="reva-ai" className="py-10 md:py-14 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" /> AI-Powered · Free Trial
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Meet Reva — Your Child's AI Teacher
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Not just a chatbot. Reva is a full AI teacher — she teaches, tracks weaknesses,
              and adapts to every student across Maths, Science and Coding.
            </p>
          </div>

          {/* 3 power highlights */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: "🧑‍🏫",
                title: "Teaches, doesn't just answer",
                desc: "Chat, whiteboard, slides, voice — Reva explains step by step like a patient human teacher.",
              },
              {
                icon: "🎯",
                title: "Finds & fixes weak spots",
                desc: "Reva automatically detects the topics your child struggles with and builds a personalised revision plan.",
              },
              {
                icon: "⚡",
                title: "Available any time, any device",
                desc: "24/7 AI help — homework at midnight, exam revision on mobile, no scheduling needed.",
              },
            ].map((h, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-wrap justify-center gap-4">
            <Link href="/reva">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-5 rounded-full font-bold flex items-center gap-2">
                Explore Reva AI Teacher <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-5 rounded-full font-semibold"
              onClick={() => window.open('https://revaai.eduversejr.com', '_blank')}>
              Try Reva Free
            </Button>
          </div>
        </div>
      </section>

      {/* Human Teachers — full section (replaces previous 2-col teaser) */}
      <HumanTeachersSection />

      {/* Pricing — G1 + G2 + G3 locked · SAT Prep card added */}
      <section id="pricing" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Now Open · Start Free Trial
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the right plan for your child. Start your 7-day free trial today. PSAT prep is bundled into Grades 8-10. SAT Prep is its own bundle for any grade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pricingData.map((group, gi) => (
              <div key={gi} className={`bg-white rounded-3xl border-2 ${group.featured ? 'border-purple-300 shadow-lg shadow-purple-100' : 'border-gray-200 shadow-sm'} p-6 relative`}>
                {group.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-5 pb-5 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900">{group.group}</h3>
                  <p className="text-sm text-gray-500 mt-1">{group.subtitle}</p>
                </div>

                {group.comingSoon ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">🚀</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">SAT &amp; PSAT Math Prep</h4>
                    <p className="text-sm text-gray-600 mb-5">
                      Digital SAT &amp; PSAT Math practice is live and included with Grade 8–12 plans. Start your free trial today.
                    </p>
                    <a href={SIGNUP_URL} className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                      Start Free Trial →
                    </a>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {group.tiers!.map((tier, ti) => {
                      const accentBg = tier.accent === "purple" ? "bg-purple-50 border-purple-200"
                        : tier.accent === "blue" ? "bg-blue-50 border-blue-200"
                        : "bg-green-50 border-green-200";
                      const accentText = tier.accent === "purple" ? "text-purple-700"
                        : tier.accent === "blue" ? "text-blue-700"
                        : "text-green-700";
                      return (
                        <div key={ti} className={`rounded-2xl border ${accentBg} p-4`}>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">{tier.icon}</span>
                            <div>
                              <h4 className={`font-bold ${accentText}`}>{tier.name}</h4>
                              <p className="text-xs text-gray-600">{tier.tagline}</p>
                            </div>
                          </div>
                          <div className="space-y-1.5 text-sm">
                            {!tier.yearlyOnly && (
                              <>
                                <div className="flex justify-between items-baseline">
                                  <span className="text-gray-700">Monthly</span>
                                  <span className="font-bold text-gray-900">${tier.monthly}</span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                  <span className="text-gray-700">Quarterly</span>
                                  <span className="text-right">
                                    <span className="font-bold text-gray-900">${tier.quarterly}</span>
                                    <span className="block text-[10px] text-green-700">save ${tier.qSave}</span>
                                  </span>
                                </div>
                              </>
                            )}
                            <div className="flex justify-between items-baseline">
                              <span className="text-gray-700">{tier.yearlyOnly ? "Yearly (only)" : "Yearly"}</span>
                              <span className="text-right">
                                <span className="font-bold text-gray-900">${tier.yearly.toLocaleString()}</span>
                                {tier.ySave > 0 && (
                                  <span className="block text-[10px] text-green-700">save ${tier.ySave} · {tier.yPct}% off</span>
                                )}
                              </span>
                            </div>
                          </div>
                          {tier.needsHumanOnboard && (
                            <p className="mt-3 text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5 text-center">
                              🤝 Limited slots — teacher matched within 1 week
                            </p>
                          )}
                          <a
                            href={CTA_CONFIG[tier.cta].href}
                            className={`block text-center mt-3 py-2.5 rounded-full text-xs font-semibold transition-colors ${
                              tier.cta === "trial"
                                ? "bg-gray-900 text-white hover:bg-gray-800"
                                : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50"
                            }`}
                          >
                            {CTA_CONFIG[tier.cta].label}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-8 max-w-2xl mx-auto">
            All prices in USD. Family plans and inaugural launch offer details will follow soon. PSAT 8/9 standalone includes a 90-day upgrade credit toward G8/G9 annual plans.
          </p>
        </div>
      </section>

      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="booking">
        <BookingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </div>
  );
}
