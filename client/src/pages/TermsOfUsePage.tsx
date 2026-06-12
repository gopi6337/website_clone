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
            Welcome to EduVerseJr. These Terms of Use ("Terms") form a binding agreement between
            you and EduVerseJr (an MSME-registered business based in Coimbatore, Tamil Nadu, India)
            governing your access to and use of our platform, website, mobile applications and
            services (collectively, the "Service"). By creating an account or using the Service,
            you agree to these Terms and our{" "}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            If you do not agree, you must not use the Service.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Eligibility &amp; Acceptance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Service is intended for students aged 10 and above and the parents/guardians of such students.</li>
              <li><strong>All accounts for students under 18 must be created and held by a parent or legal guardian.</strong> The parent/guardian is the account holder and is legally responsible for the account. The student uses the account under parental supervision.</li>
              <li>By registering, the parent/guardian represents that they have read, understood and accepted these Terms on behalf of themselves and the student.</li>
              <li>If you are 18 or older, you may register on your own behalf.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Description of the Service</h2>
            <p>EduVerseJr provides two distinct teaching services:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Human Teacher Sessions</strong> — live 1-on-1 instruction in Maths, Science, Coding, SAT preparation and PSAT preparation for students in <strong>Grades 5–10</strong>, delivered by qualified human teachers via video call.</li>
              <li><strong>Reva AI Teacher</strong> — an AI-powered Maths teacher available 24/7 for students in <strong>Grades 5–12</strong>, with interactive whiteboard, voice and chat. Science and Coding for Reva AI are planned for a future release.</li>
            </ul>
            <p className="mt-2">
              Both services align teaching to the curricula of the United States, United Kingdom,
              Canada, Australia, Singapore and the United Arab Emirates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate, current and complete information during registration and keep it updated.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials. Do not share your password.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>Each account is for one parent/student family unit; accounts may not be resold or shared between unrelated households.</li>
              <li>Notify us immediately at <a href="mailto:support@eduversejr.com" className="text-blue-600 hover:underline">support@eduversejr.com</a> if you suspect unauthorised access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Free Trial, Subscriptions &amp; Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>New accounts may be offered a free trial period; the duration and scope are stated at sign-up.</li>
              <li>After the trial, continued access to paid features requires an active subscription.</li>
              <li><strong>Pricing, billing cycle, currency, applicable taxes and the refund policy that applies to each plan are disclosed on the checkout page at the time of purchase.</strong> By subscribing, you accept the pricing and refund terms displayed there.</li>
              <li>Paid subscriptions may renew automatically at the end of each billing cycle, on the payment method on file. You will be notified before renewal where required by law.</li>
              <li>You may cancel a subscription at any time from your account settings or by emailing <a href="mailto:support@eduversejr.com" className="text-blue-600 hover:underline">support@eduversejr.com</a>. Cancellation stops future billing; refunds (if any) follow the policy disclosed at checkout.</li>
              <li>We reserve the right to change pricing for future billing cycles with at least 30 days' prior notice.</li>
              <li>Payments are processed by our PCI-DSS-compliant payment processor (Razorpay). We do not store your card number, CVV or bank credentials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Live 1-on-1 Session Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Live sessions are booked through the platform at scheduled times in your local time zone.</li>
              <li><strong>Cancellation:</strong> You may cancel or reschedule a session free of charge if you do so at least 24 hours before the start time.</li>
              <li><strong>Late cancellation / no-show:</strong> Cancellations within 24 hours of the session, or non-attendance, may result in the session being treated as delivered and the credit forfeited.</li>
              <li><strong>Teacher cancellation:</strong> If a teacher cancels, you will be offered a replacement slot at no cost.</li>
              <li>Sessions may be recorded for quality, safety and training purposes. You will be informed at the start of any recorded session, as set out in our Privacy Policy.</li>
              <li>You agree to treat teachers with respect. Harassment, abuse or threatening behaviour toward teachers will result in immediate account termination without refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Permitted Use</h2>
            <p>You may use the Service only for lawful, personal, non-commercial educational purposes. You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Copy, reproduce, distribute, publish, sell or commercially exploit any content from the platform.</li>
              <li>Use automated tools, bots, scrapers or AI agents to access or extract content from the Service.</li>
              <li>Attempt to reverse-engineer, decompile, or bypass any security or technical measures.</li>
              <li>Share your account credentials, or allow anyone outside your immediate family to use your account.</li>
              <li>Use the Service to harass, defame, harm or violate the rights of any other person.</li>
              <li>Use the Service in any way that violates applicable laws, regulations or third-party rights.</li>
              <li>Submit, type, draw, upload or transmit any profanity, sexual content, hate speech, violent content, drug references, or any other content unsuitable for a school learning environment — whether through chat messages, the whiteboard, voice input, or uploaded images and PDFs.</li>
              <li>Attempt to engage Reva AI in discussions unrelated to your assigned curriculum subject (mathematics, science or coding).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Academic Integrity</h2>
            <p>
              The Service is a teaching aid. <strong>You must not submit content generated by Reva
              AI (or copied from any EduVerseJr lesson) as your own original work in any school
              assignment, graded test, examination or admissions process</strong> where doing so
              would violate the academic integrity rules of your school, board or examining body.
              EduVerseJr is not responsible for any academic consequences arising from such misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Intellectual Property</h2>
            <p>
              All content on EduVerseJr — including curriculum slides, questions, explanations,
              worked examples, lesson plans, the Reva AI system and all AI-generated material
              reviewed by our educators — is the intellectual property of EduVerseJr and/or its
              licensors. You are granted a limited, non-exclusive, non-transferable, revocable
              licence to access and use the content for personal, non-commercial educational
              purposes only.
            </p>
            <p className="mt-2">
              <strong>Your content:</strong> You retain ownership of any questions, answers,
              homework images or other material you submit through the Service ("Your Content").
              You grant EduVerseJr a worldwide, royalty-free, non-exclusive licence to host,
              process and display Your Content solely to operate and improve the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. AI-Generated Content &amp; Disclaimers</h2>
            <p>
              Reva AI generates educational explanations using large language models. While we work
              hard to keep quality high, <strong>AI may produce incorrect, incomplete, biased or
              outdated answers ("hallucinations")</strong>.
            </p>
            <p className="mt-2">
              The Service is provided for educational support only. It is <strong>not</strong> a
              substitute for a qualified teacher, examiner, doctor, lawyer, financial adviser or
              other licensed professional. Do not rely on Reva AI for any high-stakes academic,
              medical, legal, financial or personal decision. Where accuracy is critical, verify
              with a qualified human teacher.
            </p>
            <p className="mt-2">
              EduVerseJr makes <strong>no guarantee of grade improvement, exam score or admission
              outcome</strong>. Educational results depend on many factors outside our control.
            </p>
            <p className="mt-2">
              You acknowledge that Reva AI generates teaching content using leading AI models from
              Google, Moonshot AI and Anthropic, operating under their respective enterprise terms.
              EduVerseJr is the user of these APIs and owns the curated, approved output delivered
              to you through the Service. For details of how Reva AI lessons are created, see our{" "}
              <a href="/disclaimer" className="text-blue-600 hover:underline">
                Content &amp; Copyright Disclaimer
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Privacy</h2>
            <p>
              Your use of the Service is also governed by our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>,
              which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Limitation of Liability</h2>
            <p>
              The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong>{" "}
              without warranties of any kind, express or implied, including warranties of
              merchantability, fitness for a particular purpose, accuracy or non-infringement. To
              the maximum extent permitted by applicable law, EduVerseJr, its officers, employees,
              teachers and licensors shall not be liable for any indirect, incidental, special,
              consequential, exemplary or punitive damages, or for any loss of profits, revenue,
              data, goodwill or opportunity, arising from or related to your use of the Service.
            </p>
            <p className="mt-2">
              Our aggregate liability for any claim arising from or relating to these Terms or the
              Service shall not exceed the amount you paid to EduVerseJr in the twelve (12) months
              preceding the event giving rise to the claim, or INR 5,000 (whichever is greater).
            </p>
            <p className="mt-2 text-sm">
              Nothing in these Terms limits any rights you have under mandatory consumer protection
              laws in your country of residence that cannot be excluded by contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless EduVerseJr, its directors, employees and
              teachers from any claims, damages, losses or expenses (including reasonable legal
              fees) arising from (a) your breach of these Terms, (b) your misuse of the Service,
              (c) Your Content, or (d) your violation of any law or third-party right.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">13. Suspension &amp; Termination</h2>
            <p>
              We may suspend or terminate your account at any time, with or without notice, for
              violation of these Terms, fraudulent activity, abuse of teachers or other students,
              or for any conduct we determine to be harmful to the Service or other users.
            </p>
            <p className="mt-2">
              <strong>Content moderation — three-strike policy.</strong> The Service automatically
              screens all student input (chat messages, whiteboard writing, voice transcripts and
              uploaded images or PDFs) for inappropriate content. If your input is flagged:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>First strike:</strong> the message is rejected and you receive a warning.</li>
              <li><strong>Second strike:</strong> your current learning session is ended immediately.</li>
              <li><strong>Third strike:</strong> your account is flagged and access to the Service is suspended pending review. For students under 18, we will contact the parent or guardian on record.</li>
            </ul>
            <p className="mt-2">
              Repeated or severe violations may result in permanent account termination without refund. We log all flagged events for safety review.
            </p>
            <p className="mt-2">
              You may close your account at any time by emailing <a href="mailto:support@eduversejr.com" className="text-blue-600 hover:underline">support@eduversejr.com</a>.
              On closure, your personal data is handled in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">14. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of <strong>India</strong>, without regard to
              conflict-of-law principles. Subject to Section 15 (Dispute Resolution), the courts
              of <strong>Coimbatore, Tamil Nadu, India</strong> shall have exclusive jurisdiction
              over any dispute that is not resolved by arbitration.
            </p>
            <p className="mt-2 text-sm">
              Nothing in this section deprives you of any mandatory protection of the consumer
              law of your country of residence (for example, COPPA in the United States, GDPR in
              the European Union and United Kingdom, the Australian Consumer Law, Singapore's
              Consumer Protection (Fair Trading) Act, or the UAE Consumer Protection Law) where
              such law applies to you and cannot be excluded by contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">15. Dispute Resolution</h2>
            <p>
              Before starting any formal proceeding, the parties shall first try in good faith to
              resolve any dispute by written notice and discussion for at least 30 days. If the
              dispute is not resolved, it shall be referred to <strong>arbitration in Coimbatore,
              Tamil Nadu, India</strong>, conducted in English by a single arbitrator under the
              Arbitration and Conciliation Act, 1996 (India). The arbitral award shall be final
              and binding.
            </p>
            <p className="mt-2 text-sm">
              Where local consumer law gives you a non-waivable right to bring small claims in
              your local courts, this section does not remove that right.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">16. Force Majeure</h2>
            <p>
              Neither party shall be liable for any failure or delay caused by events beyond its
              reasonable control, including natural disasters, war, civil unrest, pandemic, power
              or internet outages, or actions of governments or third-party service providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">17. General</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Severability:</strong> If any provision of these Terms is held unenforceable, the remaining provisions remain in full force.</li>
              <li><strong>No waiver:</strong> Our failure to enforce a right is not a waiver of that right.</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition or sale of assets.</li>
              <li><strong>Entire agreement:</strong> These Terms, together with the Privacy Policy and the Content &amp; Copyright Disclaimer, are the entire agreement between you and EduVerseJr regarding the Service.</li>
              <li><strong>Notices:</strong> We may give notices by email to the address on your account, or by posting on the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">18. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify registered users of
              material changes by email and update the "Last updated" date at the top of this
              page. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">19. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:legal@eduversejr.com" className="text-blue-600 hover:underline">
                legal@eduversejr.com
              </a>
              .
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
