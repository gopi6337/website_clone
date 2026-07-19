import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
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
  "waitlist-reva":     { label: "Start Free →", href: SIGNUP_URL },
  "waitlist-hybrid":   { label: "Get Started →", href: SIGNUP_URL },
  "waitlist-sat":      { label: "Request access →", href: "/reva?waitlist=1&interest=sat" },
  "waitlist-sat-only": { label: "Request access →", href: "/reva?waitlist=1&interest=sat-only" },
  "waitlist-psat":     { label: "Request access →", href: "/psat?waitlist=1&interest=psat" },
};

export default function Home() {
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
        <title>EduVerseJr — Reva AI Teacher + Expert Human Teachers | Maths, Science & Coding</title>
        <meta name="description" content="EduVerseJr combines Reva AI Teacher (24/7) with expert human teachers for Maths, Science and Coding. Grades 5–12 across US, UK, Canada, Australia and UAE." />
        <link rel="canonical" href="https://eduversejr.com/" />
        <meta property="og:title" content="EduVerseJr — Reva AI Teacher + Expert Human Teachers" />
        <meta property="og:description" content="Reva AI Teacher (24/7) + expert human teachers for Maths, Science and Coding. Grades 5–12, 6 countries." />
        <meta property="og:url" content="https://eduversejr.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg" />
        <meta property="og:image:alt" content="EduVerseJr - AI + Human Teaching Platform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EduVerseJr — Reva AI Teacher + Expert Human Teachers" />
        <meta name="twitter:description" content="Reva AI Teacher + expert human teachers for Maths, Science and Coding. Grades 5–12, 6 countries." />
        <meta name="twitter:image" content="https://eduversejr.com/og-image.jpg" />
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

      {/* See Reva in action — real screenshots of the live product (visible without login) */}
      <section id="see-reva" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
              ● Live product
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">See Reva in action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch a real walkthrough of the live app — Reva teaches step-by-step on an interactive whiteboard and gives instant, graded practice feedback. Open now at{" "}
              <a href="https://revaai.eduversejr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">revaai.eduversejr.com</a>.
            </p>
          </div>
          {/* Product walkthrough video */}
          <div className="max-w-4xl mx-auto mb-8">
            <video
              controls
              playsInline
              preload="none"
              poster="/reva-demo-poster.jpg"
              className="w-full h-auto rounded-2xl border border-gray-200 shadow-xl bg-black"
            >
              <source src="/reva-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center text-sm text-gray-500 mt-3">Full product walkthrough — curriculum aligned Grades 5–12 · PSAT &amp; SAT prep · now live in the US</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
              <img src="/screenshots/reva-whiteboard.jpg" alt="Reva AI teaching trigonometry step-by-step on the interactive whiteboard in the live EduVerseJr app" width="1280" height="720" loading="lazy" className="w-full h-auto" />
              <figcaption className="text-sm text-gray-600 px-4 py-3 border-t border-gray-100">Step-by-step whiteboard teaching with voice</figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
              <img src="/screenshots/reva-practice.jpg" alt="Reva AI giving instant graded feedback and a worked solution in the live EduVerseJr practice mode" width="1280" height="720" loading="lazy" className="w-full h-auto" />
              <figcaption className="text-sm text-gray-600 px-4 py-3 border-t border-gray-100">Smart practice with instant feedback</figcaption>
            </figure>
          </div>
          <div className="text-center mt-8">
            <a href="https://revaai.eduversejr.com/register" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-blue-600/30">
              Start learning free →
            </a>
          </div>
        </div>
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
              <Sparkles className="w-4 h-4" /> AI-Powered · Free to Start
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

      {/* Courses Teaser */}
      <section id="courses" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Courses</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Three subjects, six country curricula, Grades 5–12. Available with both human teachers and Reva AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-8">
            {[
              { icon: <Brain className="w-8 h-8 text-blue-600" />, subject: "Mathematics", badge: "🤖 Reva AI + 👨‍🏫 Human", desc: "Human Teachers: Grades 5–10 · Reva AI: Grades 5–12 · Aligned with 6 curricula", color: "border-blue-200 bg-blue-50" },
              { icon: <FlaskConical className="w-8 h-8 text-green-600" />, subject: "Science", badge: "👨‍🏫 Human Teachers", desc: "Biology, Chemistry, Physics, Earth & Space · Grades 5–10", color: "border-green-200 bg-green-50" },
              { icon: <Code2 className="w-8 h-8 text-orange-600" />, subject: "Coding", badge: "👨‍🏫 Human Teachers", desc: "Python, JavaScript, HTML/CSS, Web & App Dev · Grades 5–10", color: "border-orange-200 bg-orange-50" },
            ].map((c, i) => (
              <div key={i} className={`rounded-2xl p-5 border ${c.color}`}>
                <div className="mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{c.subject}</h3>
                <span className="text-xs bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-600 mb-2 inline-block">{c.badge}</span>
                <p className="text-xs text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/courses">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto">
                View Full Curriculum <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
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
              ✨ Now Open · Start Free
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the right plan for your child. Sign up free and start today. PSAT prep is bundled into Grades 8-10. SAT Prep is its own bundle for any grade.
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
                    <h4 className="text-lg font-bold text-gray-900 mb-2">SAT Prep Tier</h4>
                    <p className="text-sm text-gray-600 mb-5">
                      We're finalising the Grades 11-12 SAT-prep plans. Drop your email to be notified first.
                    </p>
                    <a href="/reva?waitlist=1" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                      Notify Me →
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
