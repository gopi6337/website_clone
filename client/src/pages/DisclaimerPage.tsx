import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Content &amp; Copyright Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-10">Effective: January 2026 · Last updated: May 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <p className="text-gray-700 leading-relaxed">
            EduVerseJr is an independent education platform offering (a) live 1-on-1 instruction by
            qualified human teachers in Maths, Science, Coding, SAT preparation and PSAT preparation
            for Grades 5–10, and (b) <strong>Reva AI</strong>, an AI-powered Maths teacher for
            Grades 5–12. All learning content is created through a combination of Reva AI and
            qualified human educator review. Content is original and is not copied, reproduced or
            derived from any copyrighted textbook or publisher material.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Original Content</h2>
            <p className="text-gray-700 leading-relaxed">
              All slides, explanations, worked examples, practice questions, SAT/PSAT prep material
              and assessments are independently created by Reva AI and reviewed by human educators.
              No content is extracted or reproduced from any commercial textbook, past examination
              paper or proprietary test-prep material.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How Reva AI Lessons Are Created</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The Reva AI teaching content shown to students is produced through the following pipeline,
              using leading AI models from Google, Moonshot AI and Anthropic:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li><strong>Syllabus mapping.</strong> Our curriculum team aligns each grade and subject to (a) publicly available curriculum standards (Common Core, UK National Curriculum, ACARA, Singapore MOE, UAE MOE, etc.) and (b) commercially available textbooks — <strong>solely to identify which topics and learning objectives apply at each grade level</strong>. Textbooks are referenced for topic structure only; no textbook text, images, diagrams, exercise sets or worked examples are copied, scanned for storage, or distributed.</li>
              <li><strong>Admin upload (internal only).</strong> Authorised administrators may upload curriculum reference documents (e.g. textbook PDFs) into our internal system solely to support the syllabus mapping above. These documents are permanently deleted from our servers within 24 hours of processing and are never shown to students or third parties.</li>
              <li><strong>AI generation.</strong> Reva AI independently generates fresh teaching slides, explanations, worked examples and practice questions for each topic.</li>
              <li><strong>AI quality review — first pass.</strong> Every generated lesson is reviewed by a second AI model acting as an automated quality reviewer. It checks accuracy, age-appropriateness, curriculum fit and clarity, and either approves the lesson or flags it for further review.</li>
              <li><strong>AI quality review — escalation.</strong> Lessons that are flagged or rejected at the first pass are escalated to a third AI model for a second-pass review, which approves, edits or rejects the lesson.</li>
              <li><strong>Approval gating.</strong> <strong>No lesson is delivered to students until it carries an "approved" status in our system.</strong> Pending or rejected content remains internal until resolved.</li>
              <li><strong>Human oversight.</strong> Our curriculum team oversees the approval workflow and may edit or remove any Reva AI lesson at any time.</li>
              <li><strong>Ownership.</strong> Approved Reva AI content is the original work of EduVerseJr, and EduVerseJr owns the copyright.</li>
              <li><strong>No copied source material.</strong> We do not use any third-party textbook chapter content, past examination paper, or proprietary test-prep material as source content for Reva AI lessons.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-3 text-sm">
              The set of AI providers used to power Reva AI may change over time as the underlying
              technology evolves. We will continue to use providers operating under enterprise terms
              that prohibit training on customer data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Curriculum Alignment</h2>
            <p className="text-gray-700 leading-relaxed">
              Our content is aligned to publicly available curriculum standards including Common Core
              (USA), UK National Curriculum, Canadian provincial curricula, Australian Curriculum
              (ACARA), Singapore MOE Syllabus and the UAE Ministry of Education framework. Alignment
              to a curriculum standard does not imply any affiliation with, endorsement by, or
              reproduction of any commercial textbook.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Trademarks &amp; Test-Prep Notice</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>SAT®</strong> and <strong>PSAT/NMSQT®</strong> are registered trademarks of the
              College Board. All other trademarks, service marks and trade names referenced on this
              site are the property of their respective owners.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              EduVerseJr is <strong>not affiliated with, endorsed by, sponsored by, or in any way
              officially connected with</strong> the College Board or any other testing
              organisation. Our SAT and PSAT preparation programmes are independent test-prep
              services and do not use copyrighted past papers or proprietary materials of any
              testing body.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Document Upload Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Curriculum documents uploaded by educators are used solely to identify topic sequences
              and learning objectives. Uploaded documents are <strong>permanently deleted from our
              servers within 24 hours</strong> of processing. They are never stored, displayed or
              distributed to students. No content is extracted or reproduced from uploaded documents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. No Publisher Affiliation</h2>
            <p className="text-gray-700 leading-relaxed">
              EduVerseJr is not affiliated with, endorsed by, or sponsored by any textbook publisher
              or testing organisation. No publisher names, book titles or proprietary materials are
              displayed to students or stored on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Permitted Use</h2>
            <p className="text-gray-700 leading-relaxed">
              Content on this platform is provided for personal, non-commercial educational use only.
              Students and users may not download, copy, reproduce, redistribute, screen-record or
              re-publish any content. Commercial use of any kind is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. AI + Human Authorship &amp; Hallucination Warning</h2>
            <p className="text-gray-700 leading-relaxed">
              Content is generated with the assistance of artificial intelligence (Reva AI) and
              reviewed by qualified human educators. This human-in-the-loop approach is designed to
              maximise originality, accuracy and quality. EduVerseJr retains copyright over all
              original content produced on this platform.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Important:</strong> AI systems can produce incorrect, incomplete, biased or
              outdated answers ("hallucinations"). Reva AI is a teaching aid and is not a substitute
              for a qualified teacher or examiner. Students and parents must verify any information
              that will be used for a graded assessment, a board examination, an admissions
              decision, or any high-stakes outcome.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Educational Outcomes</h2>
            <p className="text-gray-700 leading-relaxed">
              EduVerseJr is an educational support service. <strong>We do not guarantee any specific
              grade improvement, exam score, percentile, ranking, school placement or admission
              outcome.</strong> Educational results depend on many factors outside our control,
              including the student's effort, prior knowledge, school environment and test
              conditions. Any testimonials shown on our site reflect individual experiences and
              should not be taken as a guarantee of similar results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Not a Mental Health, Medical or Legal Service</h2>
            <p className="text-gray-700 leading-relaxed">
              Reva AI and EduVerseJr teachers are educators, not counsellors, doctors, lawyers or
              other licensed professionals. The Service does not provide medical, psychological,
              legal or financial advice. If a student is showing signs of distress, mental health
              concerns or any safety issue, the parent/guardian should contact a qualified
              professional or local emergency services. Reva AI may suggest helpful general
              information but must never be relied upon for any urgent or personal-safety matter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">11. External Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website or content may include links to third-party websites for convenience or
              context (e.g. official curriculum bodies, encyclopedia entries). EduVerseJr does not
              control, endorse or take responsibility for the content, accuracy, privacy practices
              or availability of those external sites. Access them at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Copyright Complaints (DMCA &amp; Indian IT Rules)</h2>
            <p className="text-gray-700 leading-relaxed">
              If you believe any content on EduVerseJr infringes your copyright, please send a
              written notice to{" "}
              <a href="mailto:legal@eduversejr.com" className="text-blue-600 hover:underline">
                legal@eduversejr.com
              </a>{" "}
              including: (a) identification of the copyrighted work, (b) the specific URL of the
              allegedly infringing material, (c) your contact information, (d) a statement of
              good-faith belief that the use is unauthorised, and (e) a statement, under penalty of
              perjury, that the information is accurate and that you are the rights holder or
              authorised to act on their behalf. We will investigate and act promptly in accordance
              with the US Digital Millennium Copyright Act (DMCA) and the Indian Information
              Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
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
