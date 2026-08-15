import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";

interface FAQSectionProps {
  defaultTab?: "all" | "human" | "reva";
}

// Reva AI FAQs removed from eduversejr.com — Reva content lives on revaaiteacher.com.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FAQSection(_props: FAQSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const displayFaqs = humanFaqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": humanFaqs.map(faq => ({
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
            Questions about our expert human teachers — we've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {displayFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center px-5 py-4 text-left gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
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
