import { Helmet } from "react-helmet-async";
import { Link, useRoute } from "wouter";
import { useEffect } from "react";
import { Check, ArrowRight, ArrowLeft, ChevronRight, Code2 } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { getCodingCourseBySlug, CODING_REVA_NOTE } from "@/data/codingCourses";

const SIGNUP_URL = "https://revaai.eduversejr.com/register";

export default function CodingCoursePage() {
  const [, params] = useRoute("/coding/:slug");
  const slug = params?.slug ?? "";
  const c = getCodingCourseBySlug(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!c) {
    return (
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Course not found — EduVerseJr</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <Header />
        <main className="container mx-auto px-4 py-24 text-center max-w-xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">We couldn&apos;t find that course</h1>
          <p className="text-gray-600 mb-6">Browse all of our coding courses instead.</p>
          <Link href="/courses">
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> All courses
            </span>
          </Link>
        </main>
        <FooterSection />
      </div>
    );
  }

  const url = `https://eduversejr.com/coding/${c.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduversejr.com/" },
          { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://eduversejr.com/courses" },
          { "@type": "ListItem", "position": 3, "name": c.title, "item": url },
        ],
      },
      {
        "@type": "Course",
        "name": c.title,
        "description": c.metaDescription,
        "url": url,
        "provider": { "@type": "EducationalOrganization", "@id": "https://eduversejr.com", "name": "EduVerseJr" },
        "educationalLevel": c.grade,
        "teaches": c.topics.join("; "),
        "availableLanguage": "English",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "Live 1-to-1 online classes with an expert teacher; Reva AI Teacher for practice between sessions",
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free trial class — no commitment. Regular pricing confirmed at signup.",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": c.faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{c.title} | EduVerseJr</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={c.ogTitle} />
        <meta property="og:description" content={c.ogDesc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.ogTitle} />
        <meta name="twitter:description" content={c.ogDesc} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-10 md:py-14 max-w-3xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link href="/"><span className="hover:text-blue-600 cursor-pointer">Home</span></Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/courses"><span className="hover:text-blue-600 cursor-pointer">Courses</span></Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700">Coding</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          <Code2 className="w-4 h-4" /> {c.grade} · Coding
          {c.lessons ? <span className="text-blue-400">· {c.lessons} lessons</span> : null}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{c.h1}</h1>

        {c.intro.map((p, i) => (
          <p key={i} className="text-lg text-gray-800 mb-4 leading-relaxed">{p}</p>
        ))}

        {/* Topics */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What this course covers</h2>
          <ul className="space-y-3">
            {c.topics.map((t, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How EduVerseJr helps */}
        <section className="mt-10 rounded-2xl border border-gray-200 p-6 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-900 mb-3">How EduVerseJr teaches coding</h2>
          <p className="text-gray-700 leading-relaxed">{c.teachingNote || CODING_REVA_NOTE}</p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 mt-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Start free trial <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* FAQ */}
        <section className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently asked questions</h2>
          <div className="space-y-4">
            {c.faqs.map((f, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-900 mb-1">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Explore more</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {c.related.map((l, i) => (
              <li key={i}>
                <Link href={l.href}>
                  <span className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                    {l.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/courses">
            <span className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 cursor-pointer text-sm">
              <ArrowLeft className="w-4 h-4" /> All courses
            </span>
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
