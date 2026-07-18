import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Users, Sparkles } from "lucide-react";

interface FAQSectionProps {
  defaultTab?: "all" | "human" | "reva";
}

export default function FAQSection({ defaultTab = "all" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "human" | "reva">(defaultTab);

  const humanFaqs = [
    {
      type: "human",
      question: "What age group is EduVerseJr designed for?",
      answer: "EduVerseJr's human teachers cover Grades 5–10 (ages 10–16) — including SAT and PSAT preparation for high-school students. Reva AI Teacher extends to Grades 5–12 (ages 10–18). Programmes are tailored to each child's level, curriculum and goals.",
    },
    {
      type: "human",
      question: "Can I try EduVerseJr before committing to a package?",
      answer: "Yes! We offer a FREE trial class so you can experience our teaching methodology and meet your child's teacher before making any commitment.",
    },
    {
      type: "human",
      question: "What subjects do your human teachers teach?",
      answer: "Our experienced teachers teach Mathematics, Science, and Coding/Programming for Grades 5–10, plus dedicated SAT and PSAT preparation. All programmes are aligned with international curricula across US, UK, Canada, Australia, Singapore, and UAE.",
    },
    {
      type: "human",
      question: "What is the frequency and duration of EduVerseJr teaching classes?",
      answer: "Classes run for 60 minutes per session, with a recommended frequency of 2 or more classes per week for consistent progress.",
    },
    {
      type: "human",
      question: "What curriculum does EduVerseJr follow?",
      answer: "Our human teachers are aligned with US Common Core, UK National Curriculum, Canadian Provincial Standards, Australian Curriculum (ACARA), Singapore MOE Syllabus, and UAE Ministry of Education standards.",
    },
    {
      type: "human",
      question: "How can I track my child's progress?",
      answer: "We maintain open communication with parents through regular progress updates, session reports, and direct access to your child's teacher for feedback.",
    },
    {
      type: "human",
      question: "Can your teachers cover topics from my child's school curriculum?",
      answer: "Absolutely. Our teachers can focus on school curriculum topics, advanced content, exam preparation, or areas where your child needs extra support.",
    },
    {
      type: "human",
      question: "Can my child join EduVerseJr anytime during the year?",
      answer: "Yes — we offer flexible enrolment. Your child can start any time, and we'll match them with the right teacher and curriculum level from day one.",
    },
    {
      type: "human",
      question: "What if I am not satisfied after enrolling?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the classes, we'll work with you to adjust the plan, change the teacher, or find the right solution.",
    },
    {
      type: "human",
      question: "Does EduVerseJr offer Science classes?",
      answer: "Yes! Our Science programme covers Biology, Chemistry, Physics, and Earth & Space Science for Grades 5–10, aligned with international standards including NGSS (US), UK National Curriculum, ACARA (Australia), Singapore MOE, and UAE standards.",
    },
  ];

  const revaFaqs = [
    {
      type: "reva",
      question: "What is Reva AI Teacher by EduVerseJr?",
      answer: "Reva AI Teacher is EduVerseJr's AI-powered teaching platform for students in Grades 5–12. Powered by AI, Reva is available 24/7 and teaches Mathematics, Science, and Coding through conversational AI, an interactive whiteboard, voice mode, smart practice sessions, and personalised weakness tracking. Unlike a general AI chatbot, Reva is purpose-built for curriculum-aligned teaching — it knows your child's grade, curriculum, and past sessions.",
    },
    {
      type: "reva",
      question: "What is Reva and how is it different from a regular AI chatbot?",
      answer: "Reva is EduVerseJr's AI-powered teacher — not just a chatbot. Reva understands your child's curriculum, tracks their progress session by session, identifies weak areas, teaches through conversation and a live whiteboard, and adapts to each student's pace. It's designed to teach, not just answer.",
    },
    {
      type: "reva",
      question: "What subjects can Reva teach?",
      answer: "Reva currently teaches Mathematics (US curriculum, Grades 5–10). Science and Coding programmes are in development and will be available soon.",
    },
    {
      type: "reva",
      question: "Is Reva available 24/7?",
      answer: "Yes — Reva is available any time of day or night. Whether your child needs help with homework at 10pm or wants to revise before a morning exam, Reva is ready instantly.",
    },
    {
      type: "reva",
      question: "How does Reva's interactive whiteboard work?",
      answer: "When solving a problem, Reva uses a live whiteboard to show each step visually — drawing graphs, writing equations, and annotating diagrams — just like a human teacher would at a physical whiteboard.",
    },
    {
      type: "reva",
      question: "Can my child speak to Reva instead of typing?",
      answer: "Yes! Reva supports voice interaction. Students can speak their questions aloud and Reva will listen, understand, and respond — making it feel more like a natural teaching session.",
    },
    {
      type: "reva",
      question: "How does Reva track my child's progress?",
      answer: "Reva automatically tracks performance across every topic and chapter, identifies weak areas, recommends targeted revision, and gives parents and students a clear view of where improvement is needed.",
    },
    {
      type: "reva",
      question: "Does Reva give quizzes and tests?",
      answer: "Yes. Reva generates practice quizzes tailored to your child's level, grades them instantly, and explains every incorrect answer in detail — turning mistakes into learning moments.",
    },
    {
      type: "reva",
      question: "Is Reva free to use?",
      answer: "Yes — you can start using Reva for free with no credit card required. Simply sign up at revaai.eduversejr.com to get started with AI-powered maths teaching.",
    },
    {
      type: "reva",
      question: "What technology powers Reva?",
      answer: "Reva is powered by advanced AI — one of the most advanced AI models available — combined with EduVerseJr's proprietary curriculum content and progress tracking system.",
    },
    {
      type: "reva",
      question: "Can Reva replace a human teacher?",
      answer: "Reva is a powerful complement to human teaching, not a replacement. For students who need structured live classes and personal accountability, our human teachers are still the best choice. Many families use both — Reva for daily practice and a human teacher for weekly deep-dive sessions.",
    },
    {
      type: "reva",
      question: "Does Reva AI Teacher work with US Common Core Math curriculum?",
      answer: "Yes. Reva AI Teacher is fully aligned with the US Common Core State Standards (CCSS) for Mathematics, Grades 5–12. Reva knows the exact topics, units, and learning objectives in the US Common Core curriculum and teaches them in the correct sequence. Students can reference their grade level and Reva will teach to that standard.",
    },
    {
      type: "reva",
      question: "How is EduVerseJr different from Khan Academy or other AI teachers?",
      answer: "EduVerseJr's Reva AI Teacher differs from Khan Academy and other AI tools in three key ways: (1) Reva combines AI teaching with live human teacher sessions in a single platform; (2) Reva uses a live interactive whiteboard to show step-by-step solutions visually, just like a real teacher; (3) Reva remembers each student's weaknesses across sessions and builds a personalised revision plan. Most AI teachers provide one-off answers — Reva builds a continuous, personalised teaching relationship.",
    },
    {
      type: "reva",
      question: "What grades does Reva AI Teacher support?",
      answer: "Reva AI Teacher supports students from Grade 5 through Grade 12 (ages 10–18). Content is curriculum-aligned for each grade level across US, UK, Canada, Australia, Singapore, and UAE standards.",
    },
    {
      type: "reva",
      question: "What's the difference between PSAT 8/9 and PSAT/NMSQT?",
      answer: "PSAT 8/9 is the low-stakes introductory test for Grades 8–9 — it familiarises students with the digital SAT format before high school. PSAT/NMSQT is the Grade 10–11 test that also qualifies students for the National Merit Scholarship. Both are digital, adaptive, and structured exactly like the SAT (two modules each for Reading & Writing and Math). See eduversejr.com/psat for full details.",
    },
    {
      type: "reva",
      question: "Is PSAT prep included with my Reva subscription?",
      answer: "PSAT 8/9 prep is included for students on the Grade 8 or Grade 9 annual plan. PSAT/NMSQT prep is bundled with every SAT Prep plan (Grades 10–11). Standalone PSAT 8/9 is also available at $49/year for parents who want a low-commitment intro before a full G8–G9 subscription.",
    },
    {
      type: "reva",
      question: "When does PSAT prep launch?",
      answer: "PSAT 8/9 and PSAT/NMSQT (with the National Merit Scholarship state cutoff calculator) are on the roadmap. Visit eduversejr.com/psat for updates — no specific date is being promised in advance. Reva AI for Maths is open now, so you can sign up free today and add PSAT prep when it launches.",
    },
  ];

  const allFaqs = [...humanFaqs, ...revaFaqs];

  const displayFaqs =
    activeTab === "all" ? allFaqs :
    activeTab === "human" ? humanFaqs :
    revaFaqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-10 md:py-14 bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Questions about our human teachers, Reva AI teacher, or both — we've got answers.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={() => { setActiveTab("all"); setOpenIndex(null); }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === "all" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            All Questions
          </button>
          <button
            onClick={() => { setActiveTab("human"); setOpenIndex(null); }}
            className={`px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === "human" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}
          >
            <Users className="w-4 h-4" /> Human Teachers
          </button>
          <button
            onClick={() => { setActiveTab("reva"); setOpenIndex(null); }}
            className={`px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === "reva" ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-700 hover:bg-purple-100"}`}
          >
            <Sparkles className="w-4 h-4" /> Reva AI
          </button>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {displayFaqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-lg overflow-hidden ${faq.type === "reva" ? "border-purple-200" : "border-gray-200"}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center px-5 py-4 text-left gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {faq.type === "reva" && <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />}
                  <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-gray-400 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
