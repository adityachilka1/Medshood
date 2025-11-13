import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-gray-900 mb-8">Last updated: November 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-gray-900 leading-relaxed">
                Medshood Health Pvt. Ltd. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our telehealth weight loss services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Name, email address, phone number, date of birth</li>
                <li>Physical address for medication delivery</li>
                <li>Payment information (processed securely by third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Health Information:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Medical history, current medications, and health conditions</li>
                <li>Weight, height, BMI, and other body measurements</li>
                <li>Lab results and diagnostic information</li>
                <li>Treatment progress and outcomes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Provide medical consultations and prescribe appropriate treatments</li>
                <li>Process and deliver medication orders</li>
                <li>Monitor treatment progress and adjust care plans</li>
                <li>Communicate about appointments, prescriptions, and programme updates</li>
                <li>Process payments and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services through aggregated, de-identified data analysis</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Information Sharing</h2>
              <p className="text-gray-900 leading-relaxed mb-4">
                We do not sell your personal or health information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li><strong>Healthcare Providers:</strong> Licensed physicians and medical staff providing your care</li>
                <li><strong>Service Providers:</strong> Pharmacy partners, payment processors, and delivery services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
              <p className="text-gray-900 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p className="text-gray-900 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Access and review your personal and health information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your health records</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-900 leading-relaxed">
                We use cookies and similar technologies to improve your experience, analyze usage, and deliver personalized content. You can control cookie settings through your browser.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
              <p className="text-gray-900 leading-relaxed">
                For questions about this Privacy Policy or to exercise your rights, contact us at:
              </p>
              <div className="bg-novo-gray p-4 rounded-lg mt-4">
                <p className="text-gray-900">
                  Email: privacy@medshood.com<br />
                  Phone: +91 1800 123 456<br />
                  Address: 123 MG Road, Bangalore, Karnataka 560001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
