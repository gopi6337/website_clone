import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function DpaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Processing Agreement</h1>
        <p className="text-gray-500 text-sm mb-8">For institutional customers · Version 1.0 · Last updated: July 2026</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-10 text-gray-700 text-sm leading-relaxed">
          <strong>Who this is for.</strong> This Data Processing Agreement ("DPA") is offered to{" "}
          <strong>institutions</strong> — schools, colleges, districts, tuition centres and other
          organisations — that enrol their own students on EduVerseJr and therefore act as the{" "}
          <em>data controller</em> for those students' personal data. If you are a{" "}
          <strong>parent or individual learner</strong> subscribing for your own family, you do not
          need this DPA; your relationship with us is governed by our{" "}
          <a href="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</a> and{" "}
          <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <p>
            This DPA supplements the agreement between the institution ("Customer", the data
            controller) and EduVerseJr ("Processor") and governs the Processor's processing of personal
            data on the Customer's behalf. To put it into effect for your institution, contact{" "}
            <a href="mailto:legal@eduversejr.com" className="text-blue-600 hover:underline">legal@eduversejr.com</a>{" "}
            for a countersigned copy.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Definitions</h2>
            <p>
              "Data Protection Laws" means all laws applicable to the processing of personal data under
              this DPA, including the EU/UK GDPR, the Indian Digital Personal Data Protection Act 2023,
              the US COPPA and FERPA (where applicable), CCPA/CPRA, the Singapore PDPA, the Australian
              Privacy Principles and the UAE PDPL. "Personal Data", "Data Controller", "Data Processor",
              "Sub-processor", "Processing" and "Data Subject" have the meanings given in those laws.
              "Services" means the EduVerseJr platform as described in the Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Roles of the Parties</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The <strong>Customer is the Data Controller</strong> of the personal data of its students and staff processed through the Services.</li>
              <li><strong>EduVerseJr is the Data Processor</strong>, processing that personal data only on the Customer's documented instructions to provide the Services.</li>
              <li>Where the Customer is itself a processor for a third party (e.g. a school acting for a parent), EduVerseJr acts as a sub-processor and this DPA applies accordingly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Processor Obligations</h2>
            <p>EduVerseJr shall:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Process personal data <strong>only on the documented instructions</strong> of the Customer, unless required by law (in which case we will inform the Customer where legally permitted).</li>
              <li>Ensure personnel authorised to process personal data are bound by <strong>confidentiality</strong>.</li>
              <li>Implement appropriate <strong>technical and organisational security measures</strong> (Section 8).</li>
              <li>Respect the conditions in Section 4 for engaging <strong>sub-processors</strong>.</li>
              <li>Assist the Customer in responding to <strong>Data Subject requests</strong> (access, correction, deletion, portability, objection).</li>
              <li>Assist the Customer with data-protection impact assessments, breach notifications and consultations with supervisory authorities.</li>
              <li>At the Customer's choice, <strong>delete or return</strong> all personal data at the end of the Services, unless retention is required by law (Section 9).</li>
              <li>Make available information necessary to demonstrate compliance and allow for and contribute to <strong>audits</strong> (Section 7).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Sub-processors</h2>
            <p>
              The Customer provides general authorisation for EduVerseJr to engage the sub-processors
              listed below. We impose data-protection obligations on each that are no less protective
              than those in this DPA, and we remain responsible for their performance. We will give
              prior notice of any intended addition or replacement and a reasonable opportunity to
              object on legitimate grounds.
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-3 py-2 text-left">Sub-processor</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">Purpose</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-3 py-2">Amazon Web Services (AWS)</td><td className="border border-gray-200 px-3 py-2">Application hosting &amp; database</td><td className="border border-gray-200 px-3 py-2">United States</td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2">Vercel</td><td className="border border-gray-200 px-3 py-2">Website hosting &amp; content delivery</td><td className="border border-gray-200 px-3 py-2">United States</td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2">Google (Vertex AI / Gemini)</td><td className="border border-gray-200 px-3 py-2">AI model inference</td><td className="border border-gray-200 px-3 py-2">United States</td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2">Anthropic</td><td className="border border-gray-200 px-3 py-2">AI model inference</td><td className="border border-gray-200 px-3 py-2">United States</td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2">Moonshot AI</td><td className="border border-gray-200 px-3 py-2">AI model inference</td><td className="border border-gray-200 px-3 py-2">—</td></tr>
                  <tr><td className="border border-gray-200 px-3 py-2">Razorpay</td><td className="border border-gray-200 px-3 py-2">Payment processing</td><td className="border border-gray-200 px-3 py-2">India</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Each AI sub-processor operates under enterprise / API terms that{" "}
              <strong>prohibit training on Customer data</strong>. A current sub-processor list is
              available on request from{" "}
              <a href="mailto:legal@eduversejr.com" className="text-blue-600 hover:underline">legal@eduversejr.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. International Data Transfers</h2>
            <p>
              Personal data may be transferred to and processed in India and the United States. Where
              personal data originating in the EEA, UK or another restricted region is transferred, the
              parties rely on an appropriate transfer mechanism — including the EU Standard Contractual
              Clauses and the UK International Data Transfer Addendum — which are incorporated by
              reference and completed by Annex I where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Breach Notification</h2>
            <p>
              EduVerseJr will notify the Customer <strong>without undue delay, and in any event within
              72 hours</strong>, after becoming aware of a personal-data breach affecting the Customer's
              data, and will provide information reasonably required to allow the Customer to meet its
              own notification obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Audit</h2>
            <p>
              On reasonable prior written notice (at least 30 days), and no more than once per year
              unless required by a supervisory authority or following a breach, the Customer may audit
              EduVerseJr's compliance with this DPA. Audits are conducted during business hours, subject
              to confidentiality, and without disrupting the Services. We may satisfy audit requests by
              providing relevant certifications, reports or summaries of our security measures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Security Measures</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of personal data in transit (HTTPS/TLS) and at rest for databases.</li>
              <li>Role-based access controls, least-privilege access and unique credentials.</li>
              <li>Audit logging of access and administrative actions.</li>
              <li>Network isolation and firewalling of backend services.</li>
              <li>Rate limiting, abuse detection and content-safety moderation of student input.</li>
              <li>Regular security reviews, dependency patching and backups.</li>
              <li>Vendor due diligence on sub-processors.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Return &amp; Deletion of Data</h2>
            <p>
              On termination of the Services, and at the Customer's choice, EduVerseJr will return or
              delete the Customer's personal data within <strong>30 days</strong>, and delete existing
              copies, except where retention is required by law (for example, tax records retained for 8
              years in India). Backups are overwritten on our normal backup cycle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Details of Processing</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <tbody>
                  <tr><th className="border border-gray-200 px-3 py-2 text-left bg-gray-50 w-1/3">Subject matter</th><td className="border border-gray-200 px-3 py-2">Provision of the EduVerseJr tutoring Services (Reva AI Teacher and, where purchased, Human Teacher sessions) to the Customer's students.</td></tr>
                  <tr><th className="border border-gray-200 px-3 py-2 text-left bg-gray-50">Duration</th><td className="border border-gray-200 px-3 py-2">For the term of the Customer's subscription, plus any legally required retention.</td></tr>
                  <tr><th className="border border-gray-200 px-3 py-2 text-left bg-gray-50">Nature &amp; purpose</th><td className="border border-gray-200 px-3 py-2">Delivering AI-led and (where applicable) human-led teaching, tracking learning progress, and providing account and support services.</td></tr>
                  <tr><th className="border border-gray-200 px-3 py-2 text-left bg-gray-50">Categories of data subjects</th><td className="border border-gray-200 px-3 py-2">The Customer's students (including minors) and authorised staff/administrators.</td></tr>
                  <tr><th className="border border-gray-200 px-3 py-2 text-left bg-gray-50">Types of personal data</th><td className="border border-gray-200 px-3 py-2">Name, grade, email, country, learning data, chat/voice/whiteboard interactions, live-session records, device/technical data, and payment metadata (no card numbers).</td></tr>
                  <tr><th className="border border-gray-200 px-3 py-2 text-left bg-gray-50">Special categories</th><td className="border border-gray-200 px-3 py-2">None intentionally collected. Free-text input may incidentally contain such data; students are instructed not to submit it.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Liability &amp; Order of Precedence</h2>
            <p>
              Each party's liability under this DPA is subject to the limitations of liability in the
              principal agreement /{" "}
              <a href="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</a>. In the
              event of a conflict between this DPA and the Terms of Use regarding the processing of
              personal data, this DPA prevails.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">12. How to Execute This DPA</h2>
            <p>
              Institutions wishing to put this DPA in place should contact{" "}
              <a href="mailto:legal@eduversejr.com" className="text-blue-600 hover:underline">legal@eduversejr.com</a>{" "}
              with the institution's legal name, address and signatory. We will provide a countersigned
              copy, complete Annex I for your jurisdiction, and attach the applicable transfer clauses.
              This published version is a template and becomes binding only once signed by both parties
              or accepted as part of an institutional order.
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
