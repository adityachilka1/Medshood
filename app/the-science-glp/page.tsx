import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ScienceGLP() {
  const studies = [
    {
      title: "STEP Clinical Trials (Semaglutide)",
      results: "15.3% average weight loss",
      participants: "4,500+ participants",
      duration: "68 weeks",
      findings: "Participants on semaglutide lost an average of 15.3% of their body weight compared to 2.6% with placebo. 86% of participants lost at least 5% of body weight."
    },
    {
      title: "SURMOUNT Studies (Tirzepatide)",
      results: "22.5% average weight loss",
      participants: "2,500+ participants",
      duration: "72 weeks",
      findings: "Tirzepatide demonstrated superior efficacy with up to 22.5% weight loss at the highest dose. 91% of participants achieved at least 5% weight loss."
    },
    {
      title: "SELECT Cardiovascular Study",
      results: "20% reduction in major adverse cardiovascular events",
      participants: "17,600+ participants",
      duration: "3.5 years",
      findings: "Semaglutide reduced risk of heart attack, stroke, and cardiovascular death by 20% in people with obesity and established cardiovascular disease."
    }
  ];

  const mechanisms = [
    {
      title: "Appetite Regulation",
      description: "GLP-1 receptors in the brain's appetite centers reduce hunger signals and increase feelings of fullness (satiety)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Slowed Gastric Emptying",
      description: "Delays food movement from stomach to intestines, prolonging feelings of fullness and reducing meal frequency",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Blood Sugar Control",
      description: "Enhances insulin secretion when blood sugar is elevated and reduces excessive glucagon production",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Reduced Food Cravings",
      description: "Affects reward pathways in the brain, decreasing cravings for high-calorie and high-fat foods",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      metric: "Weight Loss",
      value: "15-22%",
      description: "Average body weight reduction in 12 months"
    },
    {
      metric: "HbA1c Reduction",
      value: "1.5-2.0%",
      description: "Improvement in blood sugar control"
    },
    {
      metric: "Blood Pressure",
      value: "3-5 mmHg",
      description: "Average systolic BP reduction"
    },
    {
      metric: "Cardiovascular Risk",
      value: "20%",
      description: "Reduction in major adverse events"
    },
    {
      metric: "Cholesterol",
      value: "10-15%",
      description: "Improvement in lipid profile"
    },
    {
      metric: "Liver Health",
      value: "30-40%",
      description: "Reduction in fatty liver disease markers"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The science behind GLP-1 medications
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover how GLP-1 receptor agonists work to help you achieve sustainable weight loss, backed by extensive clinical research and real-world results.
            </p>
            <Link 
              href="/quiz" 
              className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
            >
              Check Your Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* What is GLP-1 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What is GLP-1?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  GLP-1 (Glucagon-Like Peptide-1) is a natural hormone produced in your intestines after eating. It plays a crucial role in regulating appetite, blood sugar, and digestion.
                </p>
                <p>
                  GLP-1 medications are synthetic versions that mimic this hormone but last much longer in your body. While natural GLP-1 breaks down within minutes, these medications can work for up to a week, providing sustained appetite control and metabolic benefits.
                </p>
                <p>
                  Originally developed for type 2 diabetes in the early 2000s, researchers discovered that GLP-1 medications also caused significant weight loss. This led to FDA approval specifically for obesity treatment.
                </p>
              </div>
            </div>
            <div className="bg-novo-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Key Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">FDA Approved</div>
                    <div className="text-sm text-gray-600">Approved for weight management since 2021</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Extensively Studied</div>
                    <div className="text-sm text-gray-600">Over 25,000 participants in clinical trials</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Multiple Benefits</div>
                    <div className="text-sm text-gray-600">Weight loss plus improved cardiovascular and metabolic health</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Safe & Well-Tolerated</div>
                    <div className="text-sm text-gray-600">Most side effects are mild and temporary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How GLP-1 medications work</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              GLP-1 medications work through multiple pathways to help you lose weight naturally
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mechanisms.map((mechanism, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center">
                <div className="text-primary mb-6 flex justify-center">
                  {mechanism.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{mechanism.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{mechanism.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Clinical evidence</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Backed by robust clinical trials demonstrating safety and efficacy
            </p>
          </div>
          <div className="space-y-8">
            {studies.map((study, index) => (
              <div key={index} className="bg-novo-gray p-8 rounded-lg">
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{study.title}</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{study.results}</div>
                    <div className="text-sm text-gray-600 mt-1">Primary Outcome</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{study.participants}</div>
                    <div className="text-sm text-gray-600 mt-1">Study Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{study.duration}</div>
                    <div className="text-sm text-gray-600 mt-1">Duration</div>
                  </div>
                </div>
                <p className="text-gray-700">{study.findings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Beyond weight loss</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              GLP-1 medications provide multiple health benefits backed by clinical data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-3">{benefit.value}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.metric}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Safety & side effects</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding what to expect during treatment
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Common (Usually Mild)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Nausea</span> - Most common, usually improves within 2-4 weeks
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Digestive changes</span> - Diarrhea or constipation, typically temporary
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Injection site reactions</span> - Mild redness or irritation
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Reduced appetite</span> - Expected effect, not usually problematic
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Rare but Serious</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Pancreatitis</span> - Severe abdominal pain (seek immediate care)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Gallbladder problems</span> - Risk increases with rapid weight loss
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Hypoglycemia</span> - Low blood sugar (especially with diabetes medications)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Thyroid tumors</span> - Boxed warning (theoretical risk, not confirmed in humans)
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-700 text-center">
              <strong>Medical Supervision:</strong> Your doctor will monitor you throughout treatment and adjust your plan as needed to minimize side effects while maximizing benefits.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the science-backed solution</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands who have transformed their lives with GLP-1 medications and medical support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quiz" 
              className="bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
            >
              Check Your Eligibility
            </Link>
            <Link 
              href="/how-we-work" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-primary transition text-lg"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
