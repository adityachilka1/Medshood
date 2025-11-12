import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WeightLoss() {
  const medications = [
    {
      name: "Semaglutide",
      description: "Weekly injection that mimics GLP-1 hormone to regulate appetite and blood sugar",
      benefits: ["15-20% weight loss", "Once-weekly dosing", "Proven cardiovascular benefits"]
    },
    {
      name: "Tirzepatide",
      description: "Dual GIP and GLP-1 receptor agonist for enhanced weight loss results",
      benefits: ["Up to 22% weight loss", "Superior efficacy", "Improved metabolic markers"]
    }
  ];

  const programIncludes = [
    {
      title: "GLP-1 Medication",
      description: "FDA-approved prescription medication delivered monthly to your door",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Doctor Supervision",
      description: "Regular consultations with licensed physicians who monitor your progress",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Personalized Meal Plans",
      description: "Custom nutrition guidance tailored to your preferences and dietary needs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Fitness Coaching",
      description: "Workout plans and exercise guidance from certified fitness professionals",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Progress Tracking",
      description: "Digital tools to track weight, measurements, and health metrics",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock access to our support team for any questions or concerns",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ];

  const expectedResults = [
    { month: "Month 1", weight: "3-5%", description: "Initial weight loss, reduced appetite" },
    { month: "Month 3", weight: "5-10%", description: "Significant progress, improved energy" },
    { month: "Month 6", weight: "10-15%", description: "Substantial transformation, better health markers" },
    { month: "Month 12", weight: "15-20%", description: "Target achieved, lifestyle habits established" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Medical weight loss programme with GLP-1 treatments
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Achieve lasting weight loss with FDA-approved medications, expert medical guidance, and comprehensive lifestyle support.
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

      {/* GLP-1 Medications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Available GLP-1 medications</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer the most effective FDA-approved weight loss medications based on your medical needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {medications.map((med, index) => (
              <div key={index} className="bg-novo-gray p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">{med.name}</h3>
                <p className="text-gray-700 mb-6">{med.description}</p>
                <div className="space-y-3">
                  {med.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center">
                      <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What's included in your programme</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need for successful, sustainable weight loss in one comprehensive package
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programIncludes.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Expected results timeline</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Track your progress with these typical weight loss milestones
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectedResults.map((result, index) => (
              <div key={index} className="bg-novo-gray p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">{result.weight}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{result.month}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-sm text-gray-700 text-center">
              <strong>Note:</strong> Individual results may vary. These are average results from clinical trials. Your actual results depend on adherence to the programme, lifestyle factors, and individual response to medication.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How GLP-1 medications work</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding the science behind your weight loss
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduces Appetite</h3>
              <p className="text-gray-600">
                Activates GLP-1 receptors in the brain to increase feelings of fullness and reduce hunger signals
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Slows Digestion</h3>
              <p className="text-gray-600">
                Delays gastric emptying, helping you feel satisfied longer after meals and reducing overall calorie intake
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulates Blood Sugar</h3>
              <p className="text-gray-600">
                Improves insulin sensitivity and regulates blood glucose levels, reducing cravings and energy crashes
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/the-science-glp" 
              className="inline-flex items-center text-primary font-semibold hover:text-secondary transition"
            >
              Learn more about the science
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your life?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands who have successfully lost weight with Medshood's medical weight loss programme
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quiz" 
              className="bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
            >
              Check Your Eligibility
            </Link>
            <Link 
              href="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-primary transition text-lg"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
