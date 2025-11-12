import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Medical Disclaimer</h1>
          <p className="text-gray-600 mb-8">Important information about our services</p>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-gray-700 font-semibold">
                Please read this disclaimer carefully before using Medshood's services. This information is crucial for your safety and understanding of our services.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Not a Substitute for Professional Medical Advice</h2>
              <p className="text-gray-700 leading-relaxed">
                The information provided through Medshood's website, consultations, and services is for informational purposes and does not constitute medical advice. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Not for Emergencies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medshood is not designed for medical emergencies. If you are experiencing a medical emergency, immediately:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Call emergency services (112 in India)</li>
                <li>Go to the nearest emergency room</li>
                <li>Contact your primary care physician</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Do not rely on Medshood for urgent medical situations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Individual Results May Vary</h2>
              <p className="text-gray-700 leading-relaxed">
                Weight loss results vary significantly between individuals based on factors including but not limited to: genetics, metabolism, adherence to the programme, lifestyle factors, underlying health conditions, and starting weight. The results shared on our website are from clinical studies and real members but should not be interpreted as typical or guaranteed results.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Medication Risks and Side Effects</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GLP-1 medications carry potential risks and side effects, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Nausea, vomiting, diarrhea, constipation</li>
                <li>Pancreatitis (inflammation of the pancreas)</li>
                <li>Gallbladder problems</li>
                <li>Hypoglycemia (low blood sugar)</li>
                <li>Kidney problems</li>
                <li>Allergic reactions</li>
                <li>Changes in vision</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your prescribing physician will discuss these risks with you during your consultation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Not Suitable for Everyone</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GLP-1 medications are not appropriate for individuals with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal or family history of medullary thyroid cancer</li>
                <li>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                <li>History of pancreatitis</li>
                <li>Severe kidney disease</li>
                <li>Pregnancy or breastfeeding</li>
                <li>Certain other medical conditions</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your doctor will determine if this treatment is appropriate for you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Doctor-Patient Relationship</h2>
              <p className="text-gray-700 leading-relaxed">
                Medshood facilitates telehealth consultations with independent, licensed physicians. The physician-patient relationship is between you and your prescribing doctor, not Medshood. Medical decisions, including whether to prescribe medication, are made solely by the physician based on their professional judgment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Insurance and Reimbursement</h2>
              <p className="text-gray-700 leading-relaxed">
                Insurance coverage for GLP-1 medications and weight loss treatment varies widely. Medshood does not guarantee insurance coverage or reimbursement. You are responsible for understanding your insurance benefits and any out-of-pocket costs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">8. FDA Approval Status</h2>
              <p className="text-gray-700 leading-relaxed">
                The medications prescribed through Medshood are FDA-approved for weight management in adults with obesity (BMI ≥ 30) or overweight (BMI ≥ 27) with at least one weight-related condition. However, regulatory approval status may vary, and off-label use may occur at physician discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Accuracy of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide accurate and up-to-date information, medical science is constantly evolving. Information on our website may not reflect the most current research or medical guidelines. Always consult with your healthcare provider about the most current treatment options.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Third-Party Content</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites or reference third-party research. We are not responsible for the content, accuracy, or practices of external sites or studies.
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-red-900 mb-3">Important Safety Information</h3>
              <p className="text-gray-700 mb-4">
                If you experience any of the following while taking GLP-1 medications, stop taking the medication and seek immediate medical attention:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Severe abdominal pain that doesn't go away</li>
                <li>Signs of allergic reaction (swelling, difficulty breathing)</li>
                <li>Vision changes</li>
                <li>Rapid heartbeat or chest pain</li>
                <li>Signs of kidney problems (decreased urination, swelling)</li>
                <li>Severe nausea, vomiting, or diarrhea</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Questions or Concerns?</h2>
              <div className="bg-novo-gray p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have questions about this disclaimer or concerns about your treatment:
                </p>
                <p className="text-gray-700">
                  Email: medical@medshood.com<br />
                  Phone: +91 1800 123 456<br />
                  Available 24/7 for urgent medical concerns
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
