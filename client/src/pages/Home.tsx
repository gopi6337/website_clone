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
import { Sparkles, Brain, FlaskConical, Code2, ArrowRight, Users } from "lucide-react";

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
        <title>EduVerseJr — AI Maths Tutor + Expert Human Teachers | Grades 5–10</title>
        <meta name="description" content="EduVerseJr combines Reva, our AI-powered maths tutor available 24/7, with expert human teachers for live 1-to-1 classes. Mathematics, Science and Coding for Grades 5–10 across US, UK, Canada, Australia, Singapore and UAE." />
        <link rel="canonical" href="https://eduversejr.com/" />
        <meta property="og:title" content="EduVerseJr — AI Maths Tutor + Expert Human Teachers" />
        <meta property="og:description" content="Reva AI tutor (24/7) + expert human teachers for Maths, Science and Coding. Grades 5–10, 6 countries." />
        <meta property="og:url" content="https://eduversejr.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://eduversejr.com/logo.jpg" />
        <meta property="og:image:alt" content="EduVerseJr - AI + Human Tutoring Platform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EduVerseJr — AI Maths Tutor + Expert Human Teachers" />
        <meta name="twitter:description" content="Reva AI tutor + expert human teachers for Maths, Science and Coding. Grades 5–10." />
        <meta name="twitter:image" content="https://eduversejr.com/logo.jpg" />
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" /> AI-Powered · Free to Start
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Introducing Reva — Your Child's AI Maths Teacher
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Reva teaches through conversation, interactive whiteboard, slides, voice, smart practice and more — available any time, on any device.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {[
              { icon: "💬", label: "AI Chat" },
              { icon: "✏️", label: "Whiteboard" },
              { icon: "📑", label: "Slides" },
              { icon: "🎤", label: "Voice" },
              { icon: "🧠", label: "Smart Practice" },
              { icon: "📤", label: "Upload Papers" },
              { icon: "📉", label: "Weakness Tracking" },
              { icon: "📊", label: "Progress" },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl px-4 py-3 text-center border border-purple-100 shadow-sm">
                <div className="text-2xl mb-1">{f.icon}</div>
                <div className="text-xs font-medium text-gray-700">{f.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-wrap justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-5 rounded-full font-bold"
              onClick={() => window.open('https://revaai.eduversejr.com', '_blank')}>
              Try Reva Free
            </Button>
            <Link href="/reva">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-5 rounded-full font-semibold flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Teaser */}
      <section id="courses" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Courses</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Three subjects, six country curricula, Grades 5–10. Available with both human tutors and Reva AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-8">
            {[
              { icon: <Brain className="w-8 h-8 text-blue-600" />, subject: "Mathematics", badge: "🤖 Reva AI Live", desc: "US Mathematics · Grades 5–10 · Aligned with 6 curricula", color: "border-blue-200 bg-blue-50" },
              { icon: <FlaskConical className="w-8 h-8 text-green-600" />, subject: "Science", badge: "👨‍🏫 Human Tutors", desc: "Biology, Chemistry, Physics, Earth & Space · Grades 5–10", color: "border-green-200 bg-green-50" },
              { icon: <Code2 className="w-8 h-8 text-orange-600" />, subject: "Coding", badge: "👨‍🏫 Human Tutors", desc: "Python, JavaScript, HTML/CSS, Web & App Dev · Grades 5–10", color: "border-orange-200 bg-orange-50" },
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
                <Users className="w-4 h-4" /> Expert Human Tutors
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Prefer a Live Human Teacher?
              </h2>
              <p className="text-gray-600 mb-4">
                Our certified tutors offer live 1-to-1 online classes in Maths, Science and Coding. 60-minute sessions, flexible scheduling, free trial available.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {["Expert certified teachers", "Personalised 1-to-1 sessions", "Grades 5–10, all subjects", "US, UK, Canada, Australia, Singapore, UAE"].map((item, i) => (
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
              <img src="/edu_pic1.jpg" alt="Human tutor session" className="w-full h-full object-cover" />
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
