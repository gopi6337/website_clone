import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, FlaskConical, Code2, ArrowRight, Users, GraduationCap } from "lucide-react";

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
        <meta property="og:image" content="https://eduversejr.com/logo.jpg" />
        <meta property="og:image:alt" content="EduVerseJr - AI + Human Teaching Platform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EduVerseJr — Reva AI Teacher + Expert Human Teachers" />
        <meta name="twitter:description" content="Reva AI Teacher + expert human teachers for Maths, Science and Coding. Grades 5–12, 6 countries." />
        <meta name="twitter:image" content="https://eduversejr.com/logo.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "EduVerseJr",
          "url": "https://eduversejr.com",
          "logo": "https://eduversejr.com/logo.jpg",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "7",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Vikram Sha" },
              "reviewBody": "An excellent teaching environment with supportive teachers. They helped clear doubts that were once difficult to grasp and my daughter has a very good rapport with her teacher.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Kevin Green" },
              "reviewBody": "EduVerseJr is a great platform to learn math. My daughter enjoys the math sessions and the teacher is amazing. She is patient and explains concepts well. Very supportive and there is a visible improvement in her performance in school.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Priya Ahuja" },
              "reviewBody": "Yug has been taking coding classes with EduVerseJr and he enjoys it. He is always keen to join classes and loves coding. The teacher has built a warm, trusting relationship with him.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Saira Saggar" },
              "reviewBody": "My experience with EduVerseJr has been excellent. The teacher explains everything clearly and provides personalised support. The lessons are well structured and engaging. Highly recommended.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            }
          ]
        })}</script>
      </Helmet>

      <Header />
      <HeroSection />

      <div id="about">
        <AboutUsSection />
      </div>

      <div id="why-choose">
        <WhyChooseSection />
      </div>

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

          {/* SAT / PSAT Coming Soon — inside Reva section */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-4 bg-white border border-amber-200 rounded-2xl px-5 py-4 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-gray-900 text-sm">SAT &amp; PSAT Math Preparation</span>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-300 shrink-0">🚀 Coming Soon</span>
                </div>
                <p className="text-xs text-gray-500">Adaptive exam simulation · Score 200–800 · Reva explains every wrong answer</p>
              </div>
            </div>
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
              { icon: <Brain className="w-8 h-8 text-blue-600" />, subject: "Mathematics", badge: "🤖 Reva AI Live", desc: "US Mathematics · Grades 5–12 · Aligned with 6 curricula", color: "border-blue-200 bg-blue-50" },
              { icon: <FlaskConical className="w-8 h-8 text-green-600" />, subject: "Science", badge: "👨‍🏫 Human Teachers", desc: "Biology, Chemistry, Physics, Earth & Space · Grades 5–12", color: "border-green-200 bg-green-50" },
              { icon: <Code2 className="w-8 h-8 text-orange-600" />, subject: "Coding", badge: "👨‍🏫 Human Teachers", desc: "Python, JavaScript, HTML/CSS, Web & App Dev · Grades 5–12", color: "border-orange-200 bg-orange-50" },
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

      {/* Human Tutors Teaser */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Users className="w-4 h-4" /> Expert Human Teachers
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Prefer a Live Human Teacher?
              </h2>
              <p className="text-gray-600 mb-4">
                Our certified teachers offer live 1-to-1 online classes in Maths, Science and Coding. 60-minute sessions, flexible scheduling, free trial available.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {["Expert certified teachers", "Personalised 1-to-1 sessions", "Grades 5–12, all subjects", "US, UK, Canada, Australia, Singapore, UAE"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full font-semibold"
                  onClick={() => window.location.hash = '#booking'}>
                  Book a FREE Trial
                </Button>
                <Link href="/tutors">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-6 py-4 rounded-full flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-72">
              <img src="/edu_pic1.jpg" alt="Human teacher session" className="w-full h-full object-cover" />
            </div>
          </div>
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
