import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import RevaAISection from "@/components/RevaAISection";
import RevaDemo from "@/components/RevaDemo";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function RevaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Reva AI Maths Tutor — EduVerseJr | 24/7 AI-Powered Learning</title>
        <meta name="description" content="Meet Reva, EduVerseJr's AI-powered maths tutor. Available 24/7, Reva teaches through chat, voice, interactive whiteboard, slides, smart practice, and question paper uploads. Free to start." />
        <link rel="canonical" href="https://eduversejr.com/reva" />
        <meta property="og:title" content="Reva AI Maths Tutor — EduVerseJr" />
        <meta property="og:description" content="AI-powered maths tutor available 24/7. Chat, voice, whiteboard, slides, smart practice, weakness tracking and more." />
        <meta property="og:url" content="https://eduversejr.com/reva" />
        <meta property="og:image" content="https://eduversejr.com/logo.jpg" />
      </Helmet>
      <Header />

      {/* Hero banner for Reva page */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-12 mx-4 md:mx-8 my-8 rounded-3xl text-white text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" /> AI-Powered · Available 24/7 · Free to Start
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Reva — Your Child's AI Maths Teacher
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Reva is not just a chatbot. She teaches, tracks progress, identifies weak areas,
            and adapts to every student — just like a personal tutor, available any time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-6 rounded-full text-lg font-bold"
              onClick={() => window.open('http://agenticaifirst.in', '_blank')}>
              Try Reva Free — No Sign-up Needed
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-6 rounded-full text-lg"
              onClick={() => { const el = document.getElementById('reva-demo'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      <div id="reva-features">
        <RevaAISection />
      </div>
      <div id="reva-demo">
        <RevaDemo />
      </div>
      <div id="faq">
        <FAQSection defaultTab="reva" />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </div>
  );
}
