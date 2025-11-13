import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Terms of Service</h1>
          <p className="text-gray-900 mb-8">Last updated: November 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-900 leading-relaxed">
                By accessing or using Medshood's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Eligibility</h2>
              <p className="text-gray-900 leading-relaxed mb-4">To use our services, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Be at least 18 years of age</li>
                <li>Reside in India where our services are available</li>
                <li>Provide accurate and complete medical information</li>
                <li>Have a valid payment method</li>
                <li>Not have conditions that contraindicate GLP-1 treatment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Medical Services</h2>
              <p className="text-gray-900 leading-relaxed mb-4">
                Medshood provides telehealth services connecting you with licensed physicians who may prescribe medications. Key points:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Prescription decisions are made by independent physicians</li>
                <li>Not all patients will qualify for treatment</li>
                <li>You must follow all prescribed instructions</li>
                <li>Regular follow-ups are required for continued treatment</li>
                <li>Emergency medical issues should be handled through appropriate channels (emergency services)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Subscription and Payment</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Subscription Terms:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Plans are billed upfront for the selected period</li>
                <li>Automatic renewal unless cancelled</li>
                <li>Prices may change with 30 days notice</li>
                <li>All fees are in Indian Rupees (INR)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Cancellation:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Cancel anytime through your account dashboard</li>
                <li>Cancellation effective at end of current billing period</li>
                <li>No refunds for partial months</li>
                <li>Medication costs are non-refundable once shipped</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. User Responsibilities</h2>
              <p className="text-gray-900 leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Provide accurate medical and personal information</li>
                <li>Update information when it changes</li>
                <li>Follow all treatment instructions</li>
                <li>Attend scheduled consultations</li>
                <li>Report side effects or concerns promptly</li>
                <li>Not share your medication with others</li>
                <li>Maintain confidentiality of your account credentials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Prohibited Uses</h2>
              <p className="text-gray-900 leading-relaxed mb-4">You may not:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Provide false or misleading information</li>
                <li>Use services for anyone other than yourself</li>
                <li>Resell or distribute medications</li>
                <li>Violate any laws or regulations</li>
                <li>Interfere with our systems or security</li>
                <li>Use automated systems to access our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-900 leading-relaxed">
                Medshood and its physicians are not liable for any indirect, incidental, or consequential damages arising from use of our services. Our total liability is limited to the amount you paid for services in the past 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Governing Law</h2>
              <p className="text-gray-900 leading-relaxed">
                These Terms are governed by the laws of India. Any disputes will be resolved in courts located in Bangalore, Karnataka.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Contact</h2>
              <div className="bg-novo-gray p-4 rounded-lg mt-4">
                <p className="text-gray-900">
                  For questions about these Terms:<br />
                  Email: legal@medshood.com<br />
                  Phone: +91 1800 123 456
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
