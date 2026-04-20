import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import LearningStyleSection from "@/components/LearningStyleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Users, Globe, Award, Clock, CheckCircle } from "lucide-react";

export default function TutorsPage() {
  const features = [
    { icon: <Users className="w-6 h-6 text-blue-600" />, title: "Expert Certified Teachers", desc: "All teachers are degree-qualified, background-checked, and trained in online teaching." },
    { icon: <Globe className="w-6 h-6 text-blue-600" />, title: "6 Country Curricula", desc: "US, UK, Canada, Australia, Singapore, UAE — your child's local curriculum covered." },
    { icon: <Clock className="w-6 h-6 text-blue-600" />, title: "Flexible Scheduling", desc: "Book classes at times that suit your family. Sessions are 60 minutes, 2+ per week." },
    { icon: <Award className="w-6 h-6 text-blue-600" />, title: "Personalised 1-to-1", desc: "Every class is focused entirely on your child — no group sessions, no distractions." },
  ];

  const subjects = [
    { name: "Mathematics", grades: "Grades 5–10", detail: "Algebra, Geometry, Trigonometry, Statistics and more" },
    { name: "Science", grades: "Grades 5–10", detail: "Biology, Chemistry, Physics, Earth & Space Science" },
    { name: "Coding", grades: "Grades 5–10", detail: "Python, JavaScript, HTML/CSS, Block-based, Web/App development" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Human Teachers — EduVerseJr | Live 1-to-1 Online Classes</title>
        <meta name="description" content="EduVerseJr's expert human teachers offer live 1-to-1 online classes in Maths, Science and Coding for Grades 5–10. Aligned with US, UK, Canada, Australia, Singapore and UAE curricula. Book a free trial today." />
        <link rel="canonical" href="https://eduversejr.com/tutors" />
        <meta property="og:title" content="Human Teachers — EduVerseJr | Live 1-to-1 Online Classes" />
        <meta property="og:description" content="Expert online teachers for Maths, Science and Coding. Live 1-to-1 classes for Grades 5–10 across 6 countries. Book a free trial today." />
        <meta property="og:url" content="https://eduversejr.com/tutors" />
        <meta property="og:image" content="https://eduversejr.com/logo.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "EduVerseJr", "item": "https://eduversejr.com/" },
            { "@type": "ListItem", "position": 2, "name": "Human Teachers", "item": "https://eduversejr.com/tutors" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Expert Human Teachers — Live 1-to-1 Online Classes",
          "description": "EduVerseJr's expert human teachers offer personalised 1-to-1 online classes in Maths, Science and Coding for Grades 5–10. Aligned with US, UK, Canada, Australia, Singapore and UAE curricula.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "EduVerseJr",
            "url": "https://eduversejr.com"
          },
          "serviceType": "Online Private Teaching",
          "areaServed": ["United States", "United Kingdom", "Canada", "Australia", "Singapore", "UAE"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Subjects",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mathematics Teaching — Grades 5–10", "description": "Algebra, Geometry, Trigonometry, Statistics and more. Aligned with 6 international curricula." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Science Teaching — Grades 5–10", "description": "Biology, Chemistry, Physics, Earth & Space Science." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coding & Programming — Grades 5–10", "description": "Python, JavaScript, HTML/CSS, web and app development." } }
            ]
          },
          "offers": {
            "@type": "Offer",
            "name": "Free Trial Class",
            "description": "Book a FREE 1-to-1 trial class with an expert teacher — no commitment required.",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://eduversejr.com/tutors"
        })}</script>
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="hero-gradient py-10 md:py-14 mx-4 md:mx-8 my-8 rounded-3xl text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" /> Live · 1-to-1 · Expert Teachers
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Learn with an Expert Human Teacher
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Live, personalised 1-to-1 online classes with certified teachers in Mathematics,
            Science and Coding — tailored to your child's school curriculum and pace.
          </p>
          <Button className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-6 rounded-full text-lg font-bold"
            onClick={() => window.location.hash = '#booking'}>
            Book a FREE Trial Class
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Our Teachers Stand Out</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Every teacher is carefully selected, trained, and matched to your child's learning style.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {features.map((f, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-sm">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Subjects */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subjects We Teach</h2>
            <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {subjects.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200 text-left">
                  <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                  <p className="text-xs text-blue-600 font-medium mb-2">{s.grades}</p>
                  <p className="text-xs text-gray-600">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { step: "1", title: "Book a Free Trial", desc: "Fill in the form below. Our team will contact you within 24 hours to schedule your free class." },
                { step: "2", title: "Meet Your Teacher", desc: "We match your child with the right teacher for their subject, grade and curriculum." },
                { step: "3", title: "Start Learning", desc: "Live 60-minute sessions, 2+ per week. Watch confidence and grades improve." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LearningStyleSection />

      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="booking">
        <BookingSection />
      </div>
      <div id="faq">
        <FAQSection defaultTab="human" />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </div>
  );
}
