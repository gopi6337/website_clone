import { useRoute } from "wouter";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const curriculumMap: { [key: string]: { name: string; pdf: string } } = {
  "united-states": {
    name: "United States Math Curriculum (Grades 5-10)",
    pdf: "/content/maths/US Math Curriculum Grades 5-10 Parent Guide.pdf"
  },
  "united-kingdom": {
    name: "United Kingdom Math Curriculum (Grades 5-10)",
    pdf: "/content/maths/UK Math Curriculum Grades 5-10 Parent Guide.pdf"
  },
  "canada": {
    name: "Canadian Math Curriculum (Grades 5-10)",
    pdf: "/content/maths/Canadian Math Curriculum Grades 5-10 Parent Guide.pdf"
  },
  "australia": {
    name: "Australian Math Curriculum (Grades 5-10)",
    pdf: "/content/maths/Australian Math Curriculum Grades 5-10 Parent Guide.pdf"
  },
  "singapore": {
    name: "Singapore Math Curriculum (Grades 5-10)",
    pdf: "/content/maths/Singapore Math Curriculum Grades 5-10 Parent Guide.pdf"
  },
  "uae-(dubai)": {
    name: "UAE Math Curriculum (Grades 5-10)",
    pdf: "/content/maths/UAE Math Curriculum Grades 5-10 Parent Guide.pdf"
  }
};

export default function CurriculumViewer() {
  const [match, params] = useRoute("/curriculum/:country");
  const country = params?.country || "";
  const curriculum = curriculumMap[country];

  if (!curriculum) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Not Found</h1>
          <p className="text-gray-600 mb-8">The curriculum you're looking for doesn't exist.</p>
          <Button onClick={() => window.location.href = "/"} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-8">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => window.location.href = "/#curriculum"}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Curriculum
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold">{curriculum.name}</h1>
          <p className="text-lg text-white/90 mt-2">Parent Information Guide</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: "calc(100vh - 300px)", minHeight: "600px" }}>
          <iframe
            src={curriculum.pdf}
            className="w-full h-full"
            title={curriculum.name}
            style={{ border: "none" }}
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Having trouble viewing the curriculum? Try refreshing the page or using a different browser.
          </p>
          <Button
            onClick={() => window.location.href = "/#curriculum"}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Main Page
          </Button>
        </div>
      </div>
    </div>
  );
}
