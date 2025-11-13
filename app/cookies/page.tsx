import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-900">
            Last Updated: November 12, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-900 leading-relaxed mb-6">
            This Cookie Policy explains how Medshood ("we," "us," or "our") uses cookies and similar technologies on our website and mobile applications. By using our services, you consent to the use of cookies as described in this policy.
          </p>
        </section>

        {/* What Are Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
          <p className="text-gray-900 leading-relaxed">
            Cookies help us understand how you use our website, remember your preferences, and improve your overall experience with our specialty pharmacy services.
          </p>
        </section>

        {/* Types of Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Essential Cookies</h3>
              <p className="text-gray-900 leading-relaxed mb-3">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <p className="text-gray-900 leading-relaxed">
                <strong>Examples:</strong> Session management, authentication, security features, prescription upload functionality.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Performance Cookies</h3>
              <p className="text-gray-900 leading-relaxed mb-3">
                These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve website performance.
              </p>
              <p className="text-gray-900 leading-relaxed">
                <strong>Examples:</strong> Google Analytics, page load times, error tracking, user navigation patterns.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Functional Cookies</h3>
              <p className="text-gray-900 leading-relaxed mb-3">
                These cookies allow the website to remember choices you make and provide enhanced features and personalization.
              </p>
              <p className="text-gray-900 leading-relaxed">
                <strong>Examples:</strong> Language preferences, region selection, medication search history, saved addresses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Targeting/Advertising Cookies</h3>
              <p className="text-gray-900 leading-relaxed mb-3">
                These cookies are used to deliver advertisements relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
              </p>
              <p className="text-gray-900 leading-relaxed">
                <strong>Examples:</strong> Facebook Pixel, Google Ads remarketing, therapeutic area targeting (only non-HIPAA data).
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            We may use third-party service providers who set cookies on our website to perform services on our behalf. These include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-900 ml-4">
            <li><strong>Google Analytics:</strong> To analyze website traffic and usage patterns</li>
            <li><strong>Payment Processors:</strong> To securely process transactions</li>
            <li><strong>Customer Support Tools:</strong> To provide live chat and support services</li>
            <li><strong>Content Delivery Networks (CDNs):</strong> To improve website performance</li>
          </ul>
          <p className="text-gray-900 leading-relaxed mt-4">
            These third parties may use cookies in accordance with their own privacy policies.
          </p>
        </section>

        {/* HIPAA Compliance */}
        <section className="mb-12 bg-blue-50 p-8 rounded-xl border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">HIPAA Compliance & Healthcare Data</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            <strong>Important:</strong> We do NOT use cookies to track or store Protected Health Information (PHI) as defined by HIPAA. Your medical information, prescription details, and health conditions are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-900 ml-4 mb-4">
            <li>Never stored in cookies</li>
            <li>Never shared with advertising networks</li>
            <li>Only stored securely on our HIPAA-compliant servers</li>
            <li>Encrypted both in transit and at rest</li>
          </ul>
          <p className="text-gray-900 leading-relaxed">
            Cookies only collect non-PHI data such as general website usage, navigation patterns, and anonymized analytics.
          </p>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
          </p>

          <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200 mb-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">⚠️ Note About Essential Cookies</h3>
            <p className="text-gray-900 leading-relaxed">
              If you choose to disable essential cookies, some parts of our website may not function properly, including prescription upload, order processing, and account management features.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Manage Cookies in Your Browser:</h3>
          <ul className="space-y-3 text-gray-900">
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[120px]">Chrome:</span>
              <span>Settings → Privacy and security → Cookies and other site data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[120px]">Firefox:</span>
              <span>Options → Privacy & Security → Cookies and Site Data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[120px]">Safari:</span>
              <span>Preferences → Privacy → Cookies and website data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[120px]">Edge:</span>
              <span>Settings → Privacy, search, and services → Cookies</span>
            </li>
          </ul>
        </section>

        {/* Cookie Consent */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Consent Banner</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            When you first visit our website, you'll see a cookie consent banner allowing you to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-900 ml-4 mb-4">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize your cookie preferences by category</li>
          </ul>
          <p className="text-gray-900 leading-relaxed">
            You can change your cookie preferences at any time by accessing the cookie settings in our website footer.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Duration</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            Different cookies have different lifespans:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-900 ml-4">
            <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years)</li>
            <li><strong>Essential Cookies:</strong> May persist for the duration necessary for functionality</li>
          </ul>
        </section>

        {/* Updates to Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
          <p className="text-gray-900 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of significant changes by posting the updated policy on this page with a new "Last Updated" date.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12 bg-primary/5 p-8 rounded-xl border-2 border-primary/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
          <p className="text-gray-900 leading-relaxed mb-6">
            If you have questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="space-y-3 text-gray-900">
            <p><strong>Email:</strong> <a href="mailto:privacy@medshood.com" className="text-primary hover:underline">privacy@medshood.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+91XXXXXXXXXX" className="text-primary hover:underline">+91-XXXX-XXXXXX</a></p>
            <p><strong>Address:</strong> Medshood Specialty Pharmacy, [Address], India</p>
          </div>
        </section>

        {/* Related Policies */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Policies</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/privacy" className="text-primary hover:underline flex items-center gap-2">
              <span>→</span>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary hover:underline flex items-center gap-2">
              <span>→</span>
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-primary hover:underline flex items-center gap-2">
              <span>→</span>
              Medical Disclaimer
            </Link>
            <Link href="/support" className="text-primary hover:underline flex items-center gap-2">
              <span>→</span>
              Help Center
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
