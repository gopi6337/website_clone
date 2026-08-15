import { useRoute, Link } from "wouter";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const curriculumMap: { [key: string]: { name: string; mdFile: string } } = {
  "united-states": {
    name: "United States Math Curriculum (Grade 5-10)",
    mdFile: "/content/maths/US Math Curriculum Grades 5-10 Parent Guide.md"
  },
  "united-kingdom": {
    name: "United Kingdom Math Curriculum (Grade 5-10)",
    mdFile: "/content/maths/UK Math Curriculum Grades 5-10 Parent Guide.md"
  },
  "canada": {
    name: "Canadian Math Curriculum (Grade 5-10)",
    mdFile: "/content/maths/Canadian Math Curriculum Grades 5-10 Parent Guide.md"
  },
  "australia": {
    name: "Australian Math Curriculum (Grade 5-10)",
    mdFile: "/content/maths/Australian Math Curriculum Grades 5-10 Parent Guide.md"
  },
  "singapore": {
    name: "Singapore Math Curriculum (Grade 5-10)",
    mdFile: "/content/maths/Singapore Math Curriculum Grades 5-10 Parent Guide.md"
  },
  "uae": {
    name: "UAE Math Curriculum (Grade 5-10)",
    mdFile: "/content/maths/UAE Math Curriculum Grades 5-10 Parent Guide.md"
  },
  // Legacy alias — old "uae-(dubai)" URL is 301-redirected by Vercel; this stays
  // as a safety net for any cached SPA load that already has the old slug.
  "uae-(dubai)": {
    name: "UAE Math Curriculum (Grade 5-10)",
    mdFile: "/content/maths/UAE Math Curriculum Grades 5-10 Parent Guide.md"
  }
};

// Simple Markdown to HTML converter for basic formatting
function parseMarkdown(md: string): string {
  let html = md;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-semibold mt-6 mb-3 text-gray-900">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4 text-blue-600">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-4 text-gray-900">$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-gray-900">$1</strong>');

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr class="my-8 border-gray-300" />');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 text-gray-700">$1</li>');

  // Wrap list items
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="my-4 list-disc">$1</ul>');

  // Paragraphs
  html = html.replace(/^(?!<[h|u|l|s])(.*$)/gim, '<p class="text-gray-700 leading-relaxed mb-4">$1</p>');

  // Checkmarks
  html = html.replace(/✓/g, '<span class="text-green-600">✓</span>');

  return html;
}

export default function CurriculumViewer() {
  const [match, params] = useRoute("/curriculum/:country");
  const country = params?.country || "";
  const curriculum = curriculumMap[country];
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (curriculum?.mdFile) {
      setLoading(true);
      setError(false);

      fetch(curriculum.mdFile)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to load");
          return response.text();
        })
        .then((text) => {
          setContent(parseMarkdown(text));
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [curriculum]);

  if (!curriculum) {
    return (
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Curriculum Not Found - EduVerseJr</title>
          <meta name="description" content="The curriculum you're looking for doesn't exist. Return to EduVerseJr homepage to explore our math and coding programs." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Not Found</h1>
          <p className="text-gray-600 mb-8">The curriculum you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{curriculum.name.replace(" Curriculum", " Curriculum & Syllabus")} | EduVerseJr</title>
        <meta
          name="description"
          content={`Explore EduVerseJr's ${curriculum.name} & syllabus guide. Grade-by-grade Algebra, Geometry, Statistics and more aligned with ${country.replace(/-/g, ' ')} educational standards. Expert 1-on-1 online Math teaching for Grade 5-10 (incl. 10th grade).`}
        />
        <link rel="canonical" href={`https://eduversejr.com/curriculum/${country}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${curriculum.name} - EduVerseJr`} />
        <meta property="og:description" content={`Comprehensive ${curriculum.name} parent information guide. Explore our detailed math curriculum for grades 5-10.`} />
        <meta property="og:url" content={`https://eduversejr.com/curriculum/${country}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        <meta property="og:image:alt" content="EduVerseJr Math Curriculum" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${curriculum.name} - EduVerseJr`} />
        <meta name="twitter:description" content={`Grade-by-grade Math curriculum for ${country.replace(/-/g, ' ')}. Algebra, Geometry, Statistics and more for Grade 5-10 by EduVerseJr.`} />
        <meta name="twitter:image" content="https://eduversejr.com/og-image.jpg?v=2" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": curriculum.name,
          "description": `Online Math teaching for Grade 5-10 aligned with ${country.replace(/-/g, ' ')} curriculum. Covers Algebra, Geometry, Statistics, Trigonometry and more.`,
          "provider": {
            "@type": "Organization",
            "name": "EduVerseJr",
            "url": "https://eduversejr.com"
          },
          "educationalLevel": "Grade 5-10",
          "url": `https://eduversejr.com/curriculum/${country}`,
          "teaches": ["Algebra", "Geometry", "Trigonometry", "Statistics", "Number Systems", "Data Analysis"]
        })}</script>
      </Helmet>
      <Header />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="text-white hover:bg-white/20 mb-4" onClick={() => { window.location.href = '/#curriculum'; }}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Curriculum
            </Button>
          <h1 className="text-3xl md:text-4xl font-bold">{curriculum.name}</h1>
          <p className="text-lg text-white/90 mt-2">Parent Information Guide</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading curriculum...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">Failed to load curriculum content.</p>
              <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
                Try Again
              </Button>
            </div>
          )}

          {!loading && !error && (
            <div
              className="curriculum-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => { window.location.href = '/#curriculum'; }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Main Page
          </Button>
        </div>
      </div>
    </div>
  );
}
