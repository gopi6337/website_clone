import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-10">Effective: January 2026 · Last updated: May 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <p>
            Welcome to EduVerseJr. By accessing or using our platform, website, or services (collectively,
            the "Service"), you agree to be bound by these Terms of Use. Please read them carefully.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p>
              By registering, accessing, or using EduVerseJr, you confirm that you are at least 13 years
              of age (or have parental consent if under 13), and that you agree to these Terms and our
              Privacy Policy. If you do not agree, you must not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Description of Service</h2>
            <p>
              EduVerseJr provides AI-powered educational content and teaching services through Reva AI,
              combined with human educator review. Our platform offers personalised maths lessons,
              practice questions, and interactive teaching sessions aligned to multiple national curricula.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must provide accurate and complete information during registration.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>Notify us immediately at support@eduversejr.com if you suspect unauthorised access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Free Trial &amp; Subscriptions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>New accounts receive a 7-day free trial with access to selected content.</li>
              <li>After the trial period, continued access requires a paid subscription.</li>
              <li>Subscription fees are billed in advance and are non-refundable unless required by law.</li>
              <li>We reserve the right to modify pricing with 30 days' notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Permitted Use</h2>
            <p>You may use the Service only for lawful, personal, non-commercial educational purposes. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Copy, reproduce, distribute, or sell any content from the platform.</li>
              <li>Use automated tools, bots, or scrapers to access the Service.</li>
              <li>Attempt to reverse-engineer or bypass any security measures.</li>
              <li>Share your account credentials with others.</li>
              <li>Use the Service in any way that violates applicable laws or regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Intellectual Property</h2>
            <p>
              All content on EduVerseJr — including slides, questions, explanations, and AI-generated
              material reviewed by human educators — is the intellectual property of EduVerseJr.
              You are granted a limited, non-exclusive, non-transferable licence to access and use
              the content for personal educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. AI-Generated Content</h2>
            <p>
              Our platform uses artificial intelligence (Reva AI) to generate educational content,
              which is reviewed by qualified human educators. While we strive for accuracy, AI-generated
              content may occasionally contain errors. We recommend students verify important concepts
              with a qualified teacher.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Privacy</h2>
            <p>
              Your use of the Service is also governed by our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>,
              which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Limitation of Liability</h2>
            <p>
              EduVerseJr is provided "as is" without warranties of any kind. To the fullest extent
              permitted by law, EduVerseJr shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violation of
              these Terms. You may cancel your account at any time by contacting support@eduversejr.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Service after changes
              constitutes acceptance of the updated Terms. We will notify registered users of material changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:legal@eduversejr.com" className="text-blue-600 hover:underline">
                legal@eduversejr.com
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
