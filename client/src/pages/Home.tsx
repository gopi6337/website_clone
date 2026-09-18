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
