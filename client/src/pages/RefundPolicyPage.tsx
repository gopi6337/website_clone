import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund &amp; Cancellation Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Effective: January 2026 · Last updated: July 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <p>
            This Refund &amp; Cancellation Policy applies to all purchases made through EduVerseJr —
            both <strong>Reva AI Teacher</strong> subscriptions and <strong>Human Teacher live 1-on-1
            sessions</strong>. EduVerseJr is an MSME-registered business based in Coimbatore, Tamil
            Nadu, India. Payments are processed by our PCI-DSS-compliant payment processor, Razorpay.
            This Policy forms part of, and should be read with, our{" "}
            <a href="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</a>.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Try before you pay — free trial</h2>
            <p>
              New Reva AI Teacher accounts start with a <strong>7-day free trial</strong> (up to 10 AI
              actions per day, Chapter 1 of each course, no credit card required). We encourage you to
              use the trial to decide whether the Service is right for your student before subscribing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Reva AI Teacher subscriptions — 7-day money-back guarantee</h2>
            <p>
              If you are not satisfied, you may request a <strong>full refund of your first paid
              subscription within 7 calendar days</strong> of that first payment. This applies to your
              first paid invoice only (monthly, quarterly or yearly), subject to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>The request must be received within 7 calendar days of the first charge.</li>
              <li>It does not apply to renewals, or to any payment after the first.</li>
              <li>We may decline refunds where we detect abuse of this policy (e.g. repeatedly subscribing and refunding).</li>
            </ul>
            <p className="mt-3">
              <strong>After the first 7 days</strong>, subscription payments are generally
              non-refundable, including renewals and partially used billing periods. Instead, you may{" "}
              <strong>cancel at any time</strong> from your account settings or by emailing{" "}
              <a href="mailto:support@eduversejr.com" className="text-blue-600 hover:underline">support@eduversejr.com</a>.
              Cancellation stops all future billing, and you keep full access until the end of the
              billing period you have already paid for.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Renewals</h2>
            <p>
              Subscriptions renew automatically until cancelled. To avoid a renewal charge, cancel{" "}
              <strong>before</strong> the renewal date. If you are charged for a renewal you did not
              intend and contact us within <strong>48 hours</strong> of that renewal, before
              significant use of the new period, we will review the charge and may, at our discretion,
              offer a refund or credit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Human Teacher live 1-on-1 sessions</h2>
            <p>
              Live sessions (and session packs / credits) are subject to the following, consistent with
              our <a href="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</a>:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Free cancellation / reschedule:</strong> cancel or reschedule a session at no charge if you do so at least <strong>24 hours</strong> before the start time — the credit is returned to your account.</li>
              <li><strong>Late cancellation / no-show:</strong> cancellations within 24 hours of the session, or non-attendance, are treated as delivered and the credit is forfeited.</li>
              <li><strong>Teacher cancellation:</strong> if a teacher cancels, you are offered a replacement slot at no cost, or a refund of that session credit.</li>
              <li><strong>Unused session packs:</strong> unused, non-expired session credits may be refunded on request, less any sessions already delivered, within 30 days of purchase.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Exceptions — when we will always refund</h2>
            <p>Regardless of the timeframes above, we will refund you where:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You were charged in error (e.g. a duplicate or incorrect charge).</li>
              <li>You were charged after a valid cancellation took effect.</li>
              <li>A prolonged service failure attributable to us prevented you from using the Service, and we could not restore it within a reasonable time.</li>
              <li>A refund is required by the mandatory consumer-protection law of your country of residence.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. How to request a refund</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email <a href="mailto:support@eduversejr.com" className="text-blue-600 hover:underline">support@eduversejr.com</a> from the email address on your account.</li>
              <li>Include your account email, the approximate payment date and the reason for the request.</li>
              <li>We aim to acknowledge within 2 business days and to decide within 7 business days.</li>
              <li>Approved refunds are processed to your original payment method via Razorpay. Your bank or card issuer typically posts the refund within <strong>5–10 business days</strong>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Taxes &amp; currency</h2>
            <p>
              Refunds are made in the original currency and amount charged. Applicable taxes collected
              are refunded together with the base amount where required by law. Currency-conversion or
              bank fees charged by your card issuer are outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contact</h2>
            <p>
              For all billing, cancellation and refund questions, email{" "}
              <a href="mailto:support@eduversejr.com" className="text-blue-600 hover:underline">support@eduversejr.com</a>.
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
