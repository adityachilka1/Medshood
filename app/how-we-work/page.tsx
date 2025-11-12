import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HowWeWork() {
  const steps = [
    {
      number: "1",
      title: "Complete Medical Assessment",
      duration: "5 minutes",
      description: "Answer our comprehensive medical questionnaire to help us understand your health history, weight loss goals, and lifestyle. This information helps our doctors determine if GLP-1 treatment is right for you.",
      details: [
        "Personal health history",
        "Current medications and conditions",
        "Weight loss goals and timeline",
        "Lifestyle and dietary habits",
        "Previous weight loss attempts"
      ]
    },
    {
      number: "2",
      title: "Doctor Consultation",
      duration: "15-30 minutes",
      description: "Connect with a licensed physician via video or phone consultation. Your doctor will review your assessment, discuss treatment options, and create a personalized weight loss plan tailored to your needs.",
      details: [
        "Review medical history and goals",
        "Discuss GLP-1 medication options",
        "Address questions and concerns",
        "Create personalized treatment plan",
        "Receive prescription if eligible"
      ]
    },
    {
      number: "3",
      title: "Prescription & Order Processing",
      duration: "24-48 hours",
      description: "Once approved, your doctor will send your prescription to our pharmacy partners. We'll process your order and prepare your medication for shipment with detailed usage instructions.",
      details: [
        "Prescription sent to pharmacy",
        "Medication prepared and packaged",
        "Dosage instructions included",
        "Injection supplies provided",
        "Educational materials sent"
      ]
    },
    {
      number: "4",
      title: "Medication Delivery",
      duration: "3-5 business days",
      description: "Your medication arrives at your doorstep in temperature-controlled packaging. Each shipment includes everything you need: medication, injection supplies, and clear step-by-step instructions.",
      details: [
        "Temperature-controlled shipping",
        "Discreet packaging",
        "All supplies included",
        "Usage instructions provided",
        "Storage guidelines included"
      ]
    },
    {
      number: "5",
      title: "Start Your Treatment",
      duration: "Ongoing",
      description: "Begin your weight loss journey with confidence. Follow your prescribed dosing schedule, track your progress in the member portal, and reach out to our support team anytime you need help.",
      details: [
        "Self-administer weekly injections",
        "Follow dosing schedule",
        "Track weight and progress",
        "Monitor side effects",
        "Stay in touch with support team"
      ]
    },
    {
      number: "6",
      title: "Continuous Support & Monitoring",
      duration: "Throughout your journey",
      description: "Your health team monitors your progress monthly. Access nutrition coaching, fitness guidance, and 24/7 support. Regular check-ins ensure your treatment is safe and effective.",
      details: [
        "Monthly doctor check-ins",
        "Nutrition and fitness coaching",
        "Progress tracking tools",
        "Medication adjustments as needed",
        "24/7 support access"
      ]
    }
  ];

  const features = [
    {
      title: "Licensed Medical Team",
      description: "All prescriptions are issued by board-certified physicians",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Secure Telehealth",
      description: "HIPAA-compliant consultations from the comfort of your home",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Fast Processing",
      description: "Most prescriptions processed within 24-48 hours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Convenient Delivery",
      description: "Monthly shipments delivered directly to your door",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
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
              How Medshood works
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              From your first assessment to ongoing support, we make medical weight loss simple, safe, and effective. Here's exactly what to expect.
            </p>
            <Link 
              href="/quiz" 
              className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Your journey, step by step</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our streamlined process makes it easy to get started and stay on track
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-novo-gray-dark/20 -z-10"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-novo-gray p-8 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-primary mb-2 md:mb-0">{step.title}</h3>
                      <span className="inline-flex items-center text-sm font-semibold text-secondary bg-white px-4 py-2 rounded-full">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-6">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, dIndex) => (
                        <div key={dIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why our process works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We've designed every step to ensure your safety, convenience, and success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Common questions about our process</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-novo-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does the initial approval take?</h3>
              <p className="text-gray-700">Most patients complete the assessment in 5 minutes and hear back from a doctor within 24 hours. If approved, your first shipment typically arrives within 3-5 business days.</p>
            </div>
            <div className="bg-novo-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need to visit a clinic?</h3>
              <p className="text-gray-700">No. Everything is done online through our secure telehealth platform. Your consultation with the doctor is via video or phone call from wherever you're comfortable.</p>
            </div>
            <div className="bg-novo-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if I'm not approved?</h3>
              <p className="text-gray-700">If GLP-1 treatment isn't right for you, your doctor will explain why and may suggest alternative weight loss approaches. You won't be charged if you're not approved.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/faqs" 
              className="text-primary font-semibold hover:text-secondary transition"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards your weight loss goals. Complete our quick assessment to see if you qualify.
          </p>
          <Link 
            href="/quiz" 
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
          >
            Check Your Eligibility
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
