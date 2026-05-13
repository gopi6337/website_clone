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
            EduVerseJr ("we", "our", or "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and safeguard your information when you use our
            platform and services.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
            <p className="mb-2"><strong>Account information:</strong> Name, email address, country, grade level, and school name provided during registration.</p>
            <p className="mb-2"><strong>Usage data:</strong> Topics studied, session history, practice scores, and learning progress to personalise your experience.</p>
            <p className="mb-2"><strong>Device &amp; technical data:</strong> IP address, browser type, and device information for security and performance purposes.</p>
            <p><strong>Communications:</strong> Messages or queries you send to Reva AI during teaching sessions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and personalise our educational services.</li>
              <li>To track your learning progress and recommend relevant content.</li>
              <li>To send important service updates and account notifications.</li>
              <li>To improve our platform, content quality, and AI models.</li>
              <li>To comply with legal obligations and prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Document Uploads</h2>
            <p>
              Curriculum documents uploaded by educators (e.g. PDF textbooks) are used solely to
              configure topic sequences. These documents are <strong>permanently deleted from our
              servers within 24 hours</strong> of processing and are never shared with students or
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Service providers:</strong> Cloud hosting (AWS), AI providers (Anthropic, Google), and payment processors — only as needed to deliver our services.</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect the rights and safety of our users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Children's Privacy</h2>
            <p>
              EduVerseJr serves students including those under 13. We collect only the minimum
              information necessary for educational purposes. We do not display advertising to
              students. Parents may request deletion of their child's data at any time by
              contacting privacy@eduversejr.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Security</h2>
            <p>
              We use industry-standard security measures including HTTPS encryption, secure databases,
              and access controls to protect your data. However, no system is 100% secure and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Data Retention</h2>
            <p>
              We retain your account data for as long as your account is active. If you delete your
              account, we will remove your personal data within 30 days, except where retention is
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data ("right to be forgotten").</li>
              <li>Object to or restrict certain processing of your data.</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at privacy@eduversejr.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Cookies</h2>
            <p>
              We use essential cookies to maintain your session and preferences. We do not use
              third-party advertising cookies. You can disable cookies in your browser settings,
              though this may affect platform functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify registered users
              of significant changes by email. Continued use of the Service after changes indicates
              your acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Contact Us</h2>
            <p>
              For privacy-related questions or requests, contact us at{" "}
              <a href="mailto:privacy@eduversejr.com" className="text-blue-600 hover:underline">
                privacy@eduversejr.com
              </a>
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
