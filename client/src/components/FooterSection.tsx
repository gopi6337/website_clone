import { Linkedin, Instagram, Youtube, Facebook, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FooterSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What age group is EduVerseJr designed for?",
      answer:
        "EduVerseJr is designed for children from Pre-K to Grade 10, with specialized programs tailored to different age groups and learning levels.",
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
        "EduVerseJr aligns with US Common Core, British, and CBSE standards, ensuring global curriculum compatibility.",
    },
    {
      question: "How can I track my child's progress?",
      answer:
        "Our Parent Peek feature allows you to monitor your child's progress in real-time through our dedicated parent dashboard.",
    },
    {
      question: "What is the frequency and duration of EduVerseJr tutoring classes?",
      answer:
        "Class frequency and duration vary based on your selected plan, ranging from 2 to unlimited classes per week.",
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Best kept secrets</h3>
          <p className="text-gray-300 mb-6">
            Be the first to get the updates on newest programs, articles, and
            special reports. All delivered to your inbox!
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Subscribe to Email ID"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Math Programs */}
          <div>
            <h4 className="font-bold mb-4">Math Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">KG</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 1</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 3</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 4</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 5</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 6</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 7</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 8</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 9</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade 10</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IB Curriculum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IGCSE Curriculum</a></li>
            </ul>
          </div>

          {/* Coding Programs */}
          <div>
            <h4 className="font-bold mb-4">Coding Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Game Development with Scratch</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Foundational Python</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advanced Python</a></li>
            </ul>
          </div>

          {/* Countries We Serve */}
          <div>
            <h4 className="font-bold mb-4">Countries We Serve</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">United States</a></li>
              <li><a href="#" className="hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Singapore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UAE</a></li>
            </ul>
          </div>

          {/* Free Resources */}
          <div>
            <h4 className="font-bold mb-4">Free Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Worksheets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Math Calculators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Articles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Schools and Teachers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Become a Teacher</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About EduVerseJr</a></li>
              <li><a href="#" className="hover:text-white transition-colors">In the News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 border-t border-gray-700 pt-12" id="faq">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-700 rounded-lg bg-gray-800">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-750 transition-colors"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-4 pb-4 text-gray-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="mb-4">© 2025 EduVerseJr. All rights reserved.</p>
          <p className="mb-4">
            By using this site you agree to our Terms Of Use & Privacy Policy
          </p>
          <p className="text-sm">
            USA : EduVerseJr Inc, 131 Continental Dr, Suite 305, Newark 19713.
          </p>
          <p className="text-sm">
            India : ClayWorks Create, 11KM, Arakere Bannerghatta Rd, Omkar
            Nagar, Arekere, Bengaluru, Karnataka - 560076
          </p>
        </div>
      </div>
    </footer>
  );
}
