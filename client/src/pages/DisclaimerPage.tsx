import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Content &amp; Copyright Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-10">Effective: 2026 · Last updated: May 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <p className="text-gray-700 leading-relaxed">
            EduVerseJr is an independent AI-powered educational platform. All learning content is created
            through a combination of <strong>Reva AI</strong> (artificial intelligence) and qualified human
            educator review. Content is original and is not copied, reproduced, or derived from any
            copyrighted textbook or publisher material.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Original Content</h2>
            <p className="text-gray-700 leading-relaxed">
              All slides, explanations, worked examples, and practice questions are independently created
              by Reva AI and reviewed by human educators. No content is extracted or reproduced from any
              commercial textbook.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Curriculum Alignment</h2>
            <p className="text-gray-700 leading-relaxed">
              Our content is aligned to publicly available curriculum standards including Common Core (USA),
              Singapore MOE Syllabus, Australian Curriculum (ACARA), UK National Curriculum, and Cambridge
              IGCSE. Alignment to a curriculum standard does not imply any affiliation with, endorsement
              by, or reproduction of any commercial textbook.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Document Upload Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Curriculum documents uploaded by educators are used solely to identify topic sequences and
              learning objectives. Uploaded documents are permanently deleted from our servers within
              24 hours of processing. They are never stored, displayed, or distributed to students.
              No content is extracted or reproduced from uploaded documents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. No Publisher Affiliation</h2>
            <p className="text-gray-700 leading-relaxed">
              EduVerseJr is not affiliated with, endorsed by, or sponsored by any textbook publisher.
              No publisher names, book titles, or proprietary materials are displayed to students or
              stored on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Permitted Use</h2>
            <p className="text-gray-700 leading-relaxed">
              Content on this platform is provided for personal educational use only. Students and users
              may not download, copy, reproduce, or redistribute any content for commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. AI + Human Authorship</h2>
            <p className="text-gray-700 leading-relaxed">
              Content is generated with the assistance of artificial intelligence (Reva AI) and reviewed
              by qualified human educators. This human-in-the-loop approach ensures originality, accuracy,
              and quality. EduVerseJr retains copyright over all original content produced on this platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. DMCA Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              If you believe any content on EduVerseJr infringes your copyright, please contact us at{" "}
              <a href="mailto:legal@eduversejr.com" className="text-blue-600 hover:underline">
                legal@eduversejr.com
              </a>
              . We will investigate and remove any infringing content promptly in accordance with the
              Digital Millennium Copyright Act (DMCA).
            </p>
          </section>

          <div className="border-t pt-6 text-gray-500 text-sm">
            © 2026 EduVerseJr. All rights reserved.
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
