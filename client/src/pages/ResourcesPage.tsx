import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useEffect } from "react";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { ARTICLES } from "@/data/resourceArticles";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduversejr.com/" },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://eduversejr.com/resources" },
      ],
    },
    {
      "@type": "CollectionPage",
      "name": "EduVerseJr Resources & Guides",
      "description": "Free evergreen guides on the digital SAT, PSAT/NMSQT and National Merit, and helping your child with maths at home.",
      "url": "https://eduversejr.com/resources",
      "isPartOf": { "@type": "WebSite", "name": "EduVerseJr", "url": "https://eduversejr.com" },
      "hasPart": ARTICLES.map((a) => ({
        "@type": "Article",
        "headline": a.title,
        "url": `https://eduversejr.com/resources/${a.slug}`,
      })),
    },
  ],
};

export default function ResourcesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Resources & Guides — SAT, PSAT, National Merit & Maths | EduVerseJr</title>
        <meta name="description" content="Free EduVerseJr guides: how the digital SAT works, PSAT/NMSQT & National Merit explained, SAT vs PSAT, and how to help your child with maths at home." />
        <link rel="canonical" href="https://eduversejr.com/resources" />
        <meta name="keywords" content="SAT guide, PSAT guide, National Merit explained, digital SAT format, SAT vs PSAT, help child with maths, EduVerseJr resources" />
        <meta property="og:title" content="Resources & Guides — SAT, PSAT, National Merit & Maths | EduVerseJr" />
        <meta property="og:description" content="Free, evergreen guides on the digital SAT, PSAT/NMSQT & National Merit, and supporting maths at home." />
        <meta property="og:url" content="https://eduversejr.com/resources" />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resources & Guides — EduVerseJr" />
        <meta name="twitter:description" content="Free guides on the digital SAT, PSAT/NMSQT, National Merit and maths at home." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" /> Resources &amp; Guides
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Guides for students &amp; parents
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Clear, factual, free guides on the digital SAT and PSAT, the National Merit Scholarship,
            and helping your child with maths at home — written by our founder, an experienced teacher.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/resources/${a.slug}`}>
              <article className="group h-full border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer flex flex-col">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="bg-gray-100 text-gray-700 font-semibold px-2.5 py-1 rounded-full">{a.category}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {a.readMins} min read</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {a.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{a.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center border-t border-gray-100 pt-10">
          <p className="text-gray-600 mb-4">
            Want a tutor who teaches, not just tests? Meet Reva — the 24/7 AI maths &amp; SAT tutor.
          </p>
          <a
            href="https://revaai.eduversejr.com/register"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Start free trial with Reva <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
