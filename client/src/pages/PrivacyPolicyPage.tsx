import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Effective: January 2026 · Last updated: May 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <p>
            EduVerseJr ("we", "our", or "us") is an MSME-registered educational platform based in
            Coimbatore, Tamil Nadu, India, serving students globally. We are committed to protecting
            your privacy. This Privacy Policy explains what information we collect, how we use it,
            who we share it with, and the rights you have over your personal data when you use our
            platform, website, or services (collectively, the "Service").
          </p>

          <p>
            Our Service includes (a) <strong>Human Teacher Sessions</strong> — live 1-on-1 instruction
            in Maths, Science, Coding, SAT preparation and SSAT preparation for students in Grades 5–10,
            and (b) <strong>Reva AI Teacher</strong> — an AI-powered Maths teacher for students in
            Grades 5–12. This Policy applies to both.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
            <p className="mb-2"><strong>Account information:</strong> Parent/guardian name, student first name and grade, email address, mobile number, country and (optionally) school name provided during registration.</p>
            <p className="mb-2"><strong>Learning data:</strong> Topics studied, session history, practice scores, mistakes, time-on-task, and progress signals — used to personalise teaching and track improvement.</p>
            <p className="mb-2"><strong>Chat &amp; voice data:</strong> Text messages, voice recordings (if voice mode is used), and whiteboard interactions exchanged with Reva AI during a session. Stored to maintain conversation memory and to improve teaching quality.</p>
            <p className="mb-2"><strong>Live session data:</strong> Records of bookings, attendance and feedback for 1-on-1 sessions with human teachers. We may record live sessions for quality and safety purposes; you will always be informed at the start of any recorded session.</p>
            <p className="mb-2"><strong>Device &amp; technical data:</strong> IP address, browser type, operating system, device identifiers and timestamps — used for security, fraud prevention and performance monitoring.</p>
            <p className="mb-2"><strong>Payment metadata:</strong> Transaction ID, plan, amount and status. <strong>We never see or store your card number, CVV or bank credentials</strong> — these are handled directly by our PCI-DSS-compliant payment processor (Razorpay).</p>
            <p><strong>Communications:</strong> Messages you send to our support team or through any contact form.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To deliver and personalise teaching (both human-led and AI-led).</li>
              <li>To track learning progress, identify weak areas and recommend revision.</li>
              <li>To enable booking, attendance and rescheduling of live sessions.</li>
              <li>To send service updates, session reminders and account notifications.</li>
              <li>To process payments, prevent fraud and comply with tax and accounting law.</li>
              <li>To improve our platform, curriculum quality and the safety of our AI systems.</li>
              <li>To respond to support requests and legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. AI Providers &amp; Training</h2>
            <p>
              Reva AI is powered by leading large language models supplied by third-party AI
              providers — currently Google, Moonshot AI and Anthropic. When your chat or voice input
              is processed, it is sent to these providers solely to generate a response. The set of
              providers may change over time as the underlying technology evolves.
            </p>
            <p className="mt-2">
              <strong>Your data is not used to train any third-party AI model.</strong> We have
              configured our integrations with these providers under enterprise / API terms that
              prohibit training on customer data. We also do not use your personal data to train
              public AI models.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Document Uploads</h2>
            <p>
              Curriculum documents uploaded by educators (e.g. PDF textbooks) are used solely to
              configure topic sequences. These documents are <strong>permanently deleted from our
              servers within 24 hours</strong> of processing and are never shared with students or
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Sharing</h2>
            <p>We do not sell your personal data. We share data only with the following categories of
              processors, and only to the extent needed to deliver the Service:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Cloud infrastructure:</strong> Amazon Web Services (AWS) and Vercel — for hosting and content delivery.</li>
              <li><strong>AI providers:</strong> Google, Moonshot AI and Anthropic — for generating Reva AI responses, under enterprise contracts that prohibit training on our users' data. This set may change as the technology evolves.</li>
              <li><strong>Payment processor:</strong> Razorpay — for processing subscription payments. Razorpay stores card data; we do not.</li>
              <li><strong>Email &amp; communications:</strong> Transactional email providers for service notifications.</li>
              <li><strong>Legal requirements:</strong> Authorities, when required by valid legal process, or to protect the rights, property or safety of EduVerseJr, our users or the public.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Children's Privacy</h2>
            <p>
              EduVerseJr is designed for students aged 10–18, including students under 13. We take
              children's privacy very seriously and follow the principles of the US Children's Online
              Privacy Protection Act (<strong>COPPA</strong>), the UK Age Appropriate Design Code,
              the EU General Data Protection Regulation children's provisions (<strong>GDPR-K</strong>),
              and equivalent laws in Australia, Singapore and the UAE.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>All accounts for students under 18 must be created and held by a parent or legal guardian.</strong> The student uses the account under parental supervision.</li>
              <li>By registering, the parent/guardian provides verifiable consent to our collection and use of the student's data as described in this Policy.</li>
              <li>We collect only the minimum information necessary to deliver education (first name, grade, country, learning data).</li>
              <li>We do <strong>not</strong> show advertising of any kind to students.</li>
              <li>We do <strong>not</strong> sell, rent or share children's data with marketers.</li>
              <li>Parents may review, correct or request deletion of their child's data at any time by emailing <a href="mailto:privacy@eduversejr.com" className="text-blue-600 hover:underline">privacy@eduversejr.com</a>.</li>
              <li>Parents may also revoke consent at any time, after which the child's account will be deactivated.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Data Security</h2>
            <p>
              We use industry-standard security measures including HTTPS/TLS encryption in transit,
              encryption at rest for databases, role-based access controls, audit logging and regular
              security reviews. No system is 100% secure, but we work continuously to reduce risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Active accounts:</strong> Personal and learning data retained while the account is active.</li>
              <li><strong>Account deletion:</strong> On request, personal data is removed within 30 days, except where retention is required by law (e.g. tax invoices: 8 years in India).</li>
              <li><strong>Chat &amp; session transcripts:</strong> Retained for up to 24 months to support memory and personalised teaching, after which they are anonymised or deleted.</li>
              <li><strong>Anonymised analytics:</strong> Aggregated, non-identifying data (e.g. "X% of Grade 6 students mastered topic Y") may be kept indefinitely.</li>
              <li><strong>Uploaded documents:</strong> Permanently deleted within 24 hours of processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. International Data Transfers</h2>
            <p>
              EduVerseJr is operated from India and our servers are hosted in the United States (AWS
              and Vercel). If you access the Service from outside these countries, your data will be
              transferred to and processed in India and the United States. We rely on appropriate
              safeguards — including Standard Contractual Clauses (SCCs) where required — to protect
              international transfers, in line with GDPR (EU/UK), Singapore PDPA, Australian Privacy
              Principles, and UAE PDPL requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Your Rights</h2>
            <p>Subject to your local law, you (or, for under-18s, the parent/guardian on the
              account) have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your data ("right to be forgotten").</li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Receive a portable copy of your data in a structured, machine-readable format.</li>
              <li>Withdraw consent at any time (where processing is based on consent).</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>California residents (CCPA/CPRA):</strong> You have additional rights to know
              what categories of personal information we collect, to opt out of "sale" or "sharing"
              of personal information (we do not sell or share for cross-context behavioural
              advertising), and to limit the use of sensitive personal information.
            </p>
            <p className="mt-2">To exercise any of these rights, email <a href="mailto:privacy@eduversejr.com" className="text-blue-600 hover:underline">privacy@eduversejr.com</a>. We respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Cookies &amp; Similar Technologies</h2>
            <p>We use essential, functional, and a small set of analytics cookies. We do <strong>not</strong> use third-party advertising cookies and we do <strong>not</strong> sell personal information.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Session cookies:</strong> Keep you signed in during a session.</li>
              <li><strong>Preference cookies:</strong> Remember your country, language and UI choices.</li>
              <li><strong>Security cookies:</strong> Protect against cross-site request forgery and abuse.</li>
              <li>
                <strong>Analytics (Google Analytics 4):</strong> We use Google Analytics 4
                (measurement ID <code>G-XXM05K7NCN</code>) to understand which pages parents
                find useful so we can improve the site. Google Signals and advertising
                personalisation are <strong>disabled</strong>; IP addresses are anonymised by
                the GA4 default; we do not link analytics to advertising networks.
              </li>
            </ul>
            <p className="mt-2">You can disable cookies in your browser settings, but core features (sign-in, sessions) may stop working. To opt out of Google Analytics specifically, install the <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Marketing Communications</h2>
            <p>
              With your consent, we may send you product updates, new feature announcements and
              educational tips by email. You can unsubscribe at any time using the link in any
              marketing email or by emailing <a href="mailto:privacy@eduversejr.com" className="text-blue-600 hover:underline">privacy@eduversejr.com</a>. Transactional emails (session reminders, billing receipts,
              security alerts) will continue regardless of marketing preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify registered users
              of material changes by email and update the "Last updated" date at the top of this
              page. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">14. Contact Us</h2>
            <p>
              For privacy-related questions, requests or complaints, contact us at{" "}
              <a href="mailto:privacy@eduversejr.com" className="text-blue-600 hover:underline">
                privacy@eduversejr.com
              </a>
              .
            </p>
            <p className="mt-2 text-sm">
              <strong>Data controller:</strong> EduVerseJr (MSME), Coimbatore, Tamil Nadu, India.
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
