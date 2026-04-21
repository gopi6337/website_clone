import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { CheckCircle, Globe, Brain, Users, BookOpen, Sparkles, Target, Clock } from "lucide-react";

const stats = [
  { value: "6", label: "Countries Served", detail: "US, UK, Canada, Australia, Singapore, UAE" },
  { value: "8", label: "Grade Levels", detail: "Grades 5 through 12" },
  { value: "3", label: "Core Subjects", detail: "Mathematics, Science & Coding" },
  { value: "24/7", label: "AI Availability", detail: "Reva AI Teacher, always on" },
  { value: "87+", label: "Topics Covered", detail: "Across Algebra 1 & Algebra 2" },
  { value: "6", label: "Curricula Aligned", detail: "US Common Core, UK, Singapore, ACARA, Canadian, UAE" },
];

const whatWeOffer = [
  {
    icon: Brain,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Reva AI Teacher",
    description: "Reva is EduVerseJr's AI-powered teacher available 24/7. Powered by Claude (Anthropic), Reva teaches through conversational AI, an interactive whiteboard, voice mode, and personalised smart practice — all adapted to each student's curriculum and pace.",
  },
  {
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Expert Human Teachers",
    description: "EduVerseJr's human teachers deliver live 1-to-1 online classes of 60 minutes, aligned with international curricula. Teachers are selected for deep subject mastery and proven expertise in teaching students aged 10–16.",
  },
  {
    icon: Globe,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    title: "International Curriculum Alignment",
    description: "EduVerseJr is aligned with US Common Core, UK National Curriculum, Singapore MOE, ACARA (Australia), Canadian Provincial Standards, and UAE Ministry of Education standards — ensuring every lesson matches what students are taught in school.",
  },
  {
    icon: Target,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "Personalised Learning",
    description: "No two students follow the same path. Reva tracks every student's weak areas across sessions and builds a personalised revision and practice plan. Human teachers adapt their approach session by session based on student progress.",
  },
];

const curricula = [
  { country: "🇺🇸 United States", standard: "US Common Core State Standards (CCSS)" },
  { country: "🇬🇧 United Kingdom", standard: "UK National Curriculum (Key Stage 3–4)" },
  { country: "🇸🇬 Singapore", standard: "Singapore MOE Mathematics & Science Syllabus" },
  { country: "🇦🇺 Australia", standard: "ACARA Australian Curriculum" },
  { country: "🇨🇦 Canada", standard: "Canadian Provincial Curriculum Standards" },
  { country: "🇦🇪 UAE", standard: "UAE Ministry of Education Standards" },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": "https://eduversejr.com",
    "name": "EduVerseJr",
    "alternateName": ["EduVerse Junior", "EduVerseJr.com"],
    "url": "https://eduversejr.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://eduversejr.com/logo.jpg"
    },
    "description": "EduVerseJr is an online educational platform offering AI-powered teaching through Reva AI Teacher and live 1-to-1 human teacher classes in Mathematics, Science, and Coding for students in Grades 5–12 across the United States, United Kingdom, Canada, Australia, Singapore, and the United Arab Emirates.",
    "foundingDate": "2024",
    "slogan": "AI Teacher + Human Teacher, Always There",
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "Singapore" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "knowsAbout": [
      "AI-Powered Mathematics Education",
      "Online 1-to-1 Teaching for Grades 5-12",
      "Science Education for Children",
      "Coding Education for Kids",
      "US Common Core Mathematics",
      "UK National Curriculum Mathematics",
      "Singapore MOE Syllabus",
      "Australian Curriculum ACARA",
      "Personalised Learning Technology",
      "STEM Education",
      "Reva AI Teacher"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "EduVerseJr Learning Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Reva AI Mathematics Teaching — Free Tier",
            "description": "Free AI-powered mathematics teaching by Reva for Grades 5–12. Includes 10 AI sessions per day, curriculum-aligned content, and interactive whiteboard.",
            "educationalLevel": "Grades 5–12",
            "teaches": "Mathematics",
            "provider": { "@type": "Organization", "name": "EduVerseJr" }
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Reva AI Teacher — Paid Plan",
            "description": "Unlimited AI teaching by Reva with voice mode, whiteboard, file upload, smart practice, and full curriculum access for Grades 5–12.",
            "educationalLevel": "Grades 5–12",
            "teaches": "Mathematics, Science, Coding",
            "provider": { "@type": "Organization", "name": "EduVerseJr" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Live 1-to-1 Human Teacher Classes",
            "description": "Personalised live online classes with expert human teachers for Maths, Science, and Coding. 60-minute sessions, Grades 5–12.",
            "educationalLevel": "Grades 5–12",
            "teaches": "Mathematics, Science, Coding",
            "provider": { "@type": "Organization", "name": "EduVerseJr" }
          }
        }
      ]
    },
    "sameAs": []
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://revaai.eduversejr.com",
    "name": "Reva AI Teacher",
    "alternateName": "Reva by EduVerseJr",
    "url": "https://revaai.eduversejr.com",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier available. Paid plans unlock unlimited sessions, voice mode, and whiteboard."
    },
    "description": "Reva is EduVerseJr's AI-powered teacher for Grades 5–12. Available 24/7, Reva teaches Mathematics, Science, and Coding through conversational AI, an interactive whiteboard, voice interaction, and personalised practice sessions. Powered by Claude (Anthropic).",
    "featureList": [
      "24/7 AI teaching availability",
      "Interactive whiteboard with step-by-step solutions",
      "Voice mode — speak to Reva like a real teacher",
      "Smart practice with weakness tracking",
      "Teaching slides auto-generated per topic",
      "Photo and PDF upload for homework help",
      "Personalised session memory",
      "Curriculum-aligned for US, UK, Australia, Singapore, Canada, UAE"
    ],
    "educationalLevel": "Grades 5–12 (Ages 10–18)",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Students aged 10–18, Grades 5–12"
    },
    "provider": {
      "@type": "Organization",
      "name": "EduVerseJr",
      "url": "https://eduversejr.com"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About EduVerseJr — AI Teacher + Expert Human Teachers | Online EdTech Platform</title>
        <meta name="description" content="EduVerseJr is an online educational platform combining Reva AI Teacher (24/7, powered by Claude) with expert human teachers for live 1-to-1 classes in Maths, Science and Coding. Grades 5–12 across US, UK, Canada, Australia, Singapore and UAE." />
        <link rel="canonical" href="https://eduversejr.com/about" />
        <meta property="og:title" content="About EduVerseJr — AI Teacher + Human Teachers" />
        <meta property="og:description" content="EduVerseJr combines Reva AI Teacher (24/7) with expert human teachers for Maths, Science and Coding. Grades 5–12, 6 countries." />
        <meta property="og:url" content="https://eduversejr.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduversejr.com/" },
            { "@type": "ListItem", "position": 2, "name": "About EduVerseJr", "item": "https://eduversejr.com/about" }
          ]
        })}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            About EduVerseJr
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            EduVerseJr is an online educational platform that combines Reva — an AI teacher available 24/7 — with expert human teachers for live 1-to-1 classes in Mathematics, Science, and Coding for students in Grades 5–12.
          </p>
        </div>
      </section>

      {/* What is EduVerseJr — AI-quotable definition */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            What is EduVerseJr?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            <p>
              <strong>EduVerseJr</strong> is an online EdTech platform founded in 2024 to deliver personalised, high-quality education in Mathematics, Science, and Coding to students aged 10–18 (Grades 5–12) across six countries: the United States, United Kingdom, Canada, Australia, Singapore, and the United Arab Emirates.
            </p>
            <p>
              EduVerseJr's flagship product is <strong>Reva AI Teacher</strong> — an AI-powered teacher available 24 hours a day, 7 days a week, powered by Claude (Anthropic). Reva teaches through natural conversation, an interactive live whiteboard, voice interaction, and smart practice sessions that adapt to each student's weaknesses and curriculum.
            </p>
            <p>
              Alongside Reva, EduVerseJr offers <strong>live 1-to-1 classes with expert human teachers</strong> for students who benefit from structured, personalised human instruction. Human teachers deliver 60-minute sessions aligned to the same international curricula Reva follows.
            </p>
            <p>
              What sets EduVerseJr apart is the <strong>combination of AI and human teaching in a single platform</strong>: students use Reva AI Teacher for daily practice, instant homework help, and revision — and attend scheduled human teacher sessions for deeper, guided learning. Together, these provide a complete learning experience that neither AI nor a human teacher can achieve alone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">EduVerseJr at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">What EduVerseJr Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeOffer.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bg} mb-4`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Alignment */}
      <section className="py-14 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            International Curriculum Alignment
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            EduVerseJr teaches to the exact curriculum standards your child is assessed on at school — no generic content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {curricula.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3 border border-blue-100">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900">{c.country}</div>
                  <div className="text-sm text-gray-500">{c.standard}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            EduVerseJr's mission is to make excellent, personalised education accessible to every student in Grades 5–12, regardless of where they live. By combining the consistency and availability of AI with the warmth and depth of expert human teachers, EduVerseJr gives every student the support they need to build confidence, master their curriculum, and develop a genuine love for learning.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="text-purple-100 mb-8">Try Reva AI Teacher free — no credit card needed. Or book a free trial class with a human teacher.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://revaai.eduversejr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors"
            >
              <Sparkles className="w-5 h-5" /> Try Reva AI Free
            </a>
            <a
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <Users className="w-5 h-5" /> Book Free Human Teacher Trial
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
