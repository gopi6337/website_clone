import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What age group is EduVerseJr designed for?",
      answer:
        "EduVerseJr is designed for children from Grade 5 to Grade 10, with specialized programs tailored to different age groups and learning levels.",
    },
    {
      question: "Can I try EduVerseJr before committing to a package?",
      answer:
        "Yes! We offer a FREE trial so you can experience our platform and teaching methodology before making any commitment.",
    },
    {
      question:
        "What is the difference between self-paced and live class options in EduVerseJr?",
      answer:
        "Self-paced learning allows students to progress at their own speed with recorded lessons, while live classes provide real-time interaction with expert tutors for personalized guidance.",
    },
    {
      question: "How can EduVerseJr support homeschooling parents?",
      answer:
        "We provide comprehensive curriculum coverage, progress tracking, and flexible scheduling to support homeschooling families with structured learning paths.",
    },
    {
      question: "What curriculum does EduVerseJr follow?",
      answer:
        "Aligned with US, UK, Canadian, Australian, Singapore, and UAE curricula.",
    },
    {
      question: "How can I track my child's progress?",
      answer:
        "We partner with parents through open communication and regular progress updates, ensuring your child receives the best support in a safe, nurturing online environment.",
    },
    {
      question: "What is the frequency and duration of EduVerseJr tutoring classes?",
      answer:
        "Class frequency and duration vary based on your selected plan, ranging from 2 or more classes per week, each with a duration of 1hr (60min).",
    },
    {
      question:
        "Can EduVerseJr's program be customized for my child's specific learning requirements?",
      answer:
        "Yes, our personalized learning paths are tailored to each child's unique pace, learning style, and specific needs.",
    },
    {
      question:
        "Can your teachers teach topics covered in my child's school curriculum?",
      answer:
        "Absolutely! Our tutors can focus on school curriculum topics or advanced content based on your preferences.",
    },
    {
      question: "Can my child join EduVerseJr anytime during the year?",
      answer:
        "Yes, you can enroll your child anytime during the year. Our flexible enrollment allows you to start whenever it's convenient.",
    },
    {
      question:
        "What if I am not satisfied with EduVerseJr's classes after enrolling?",
      answer:
        "We offer a satisfaction guarantee. If you're not satisfied, we provide options to adjust your plan or discuss alternative solutions.",
    },
    {
      question: "How do I enroll for EduVerseJr's classes?",
      answer:
        "Simply click the 'Start FREE Trial' button, fill in your details, and our team will guide you through the enrollment process.",
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="accordion-trigger w-full flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 pb-4 text-gray-600">
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
