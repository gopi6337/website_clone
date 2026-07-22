import { Helmet } from "react-helmet-async";
import { Link, useRoute } from "wouter";
import { useEffect } from "react";
import { Clock, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { getArticleBySlug, ARTICLE_AUTHOR } from "@/data/resourceArticles";

export default function ResourceArticlePage() {
  const [, params] = useRoute("/resources/:slug");
  const slug = params?.slug ?? "";
  const article = getArticleBySlug(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Guide not found — EduVerseJr Resources</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <Header />
        <main className="container mx-auto px-4 py-24 text-center max-w-xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">We couldn&apos;t find that guide</h1>
          <p className="text-gray-600 mb-6">The link may be outdated. Browse all of our guides instead.</p>
          <Link href="/resources">
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> All resources
            </span>
          </Link>
        </main>
        <FooterSection />
      </div>
    );
  }

  const url = `https://eduversejr.com/resources/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduversejr.com/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://eduversejr.com/resources" },
          { "@type": "ListItem", "position": 3, "name": article.title, "item": url },
        ],
      },
      {
        "@type": "Article",
        "headline": article.title,
        "description": article.metaDescription,
        "url": url,
        "mainEntityOfPage": url,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "author": {
          "@type": "Person",
          "name": ARTICLE_AUTHOR.name,
          "url": ARTICLE_AUTHOR.url,
          "jobTitle": "Founder & CEO",
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://eduversejr.com",
          "name": "EduVerseJr",
          "logo": { "@type": "ImageObject", "url": "https://eduversejr.com/logo.jpg" },
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": article.faqs.map((f) => ({
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
        <title>{article.title} | EduVerseJr</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={article.ogTitle} />
        <meta property="og:description" content={article.ogDesc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.ogTitle} />
        <meta name="twitter:description" content={article.ogDesc} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-10 md:py-14 max-w-3xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link href="/"><span className="hover:text-blue-600 cursor-pointer">Home</span></Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/resources"><span className="hover:text-blue-600 cursor-pointer">Resources</span></Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 truncate">{article.title}</span>
        </nav>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
          <span className="bg-blue-50 text-blue-600 font-semibold px-2.5 py-1 rounded-full">{article.category}</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readMins} min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-100 pb-6">
          By <span className="text-gray-700 font-medium">{ARTICLE_AUTHOR.name}</span> · {ARTICLE_AUTHOR.credential}
        </p>

        <article className="prose-custom text-gray-700 leading-relaxed space-y-5">
          {article.intro.map((p, i) => (
            <p key={i} className="text-lg text-gray-800">{p}</p>
          ))}

          {article.sections.map((s, i) => (
            <section key={i} className="pt-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">{s.h2}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="mb-3">{p}</p>
              ))}
              {s.bullets && (
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  {s.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {/* FAQ */}
        <section className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently asked questions</h2>
          <div className="space-y-4">
            {article.faqs.map((f, i) => (
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
          <ul className="space-y-2">
            {article.related.map((l, i) => (
              <li key={i}>
                {l.href.startsWith("/") ? (
                  <Link href={l.href}>
                    <span className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                      {l.label} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ) : (
                  <a href={l.href} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium">
                    {l.label} <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">A tutor on every question</h2>
          <p className="text-white/90 mb-5 max-w-lg mx-auto">
            Reva teaches the method step-by-step — maths, SAT and PSAT — and adapts to your child&apos;s level. Start your free trial, no credit card.
          </p>
          <a
            href="https://revaai.eduversejr.com/register"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Start free trial with Reva <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 text-center">
          <Link href="/resources">
            <span className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 cursor-pointer text-sm">
              <ArrowLeft className="w-4 h-4" /> All resources
            </span>
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
