import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Monthly Plan",
      price: "₹15,000",
      period: "/month",
      description: "Perfect for trying out the programme with flexibility",
      features: [
        "GLP-1 medication (monthly supply)",
        "Initial doctor consultation",
        "Monthly follow-up consultations",
        "Personalized meal plans",
        "Fitness coaching",
        "Progress tracking tools",
        "24/7 support access",
        "Educational resources",
        "Cancel anytime"
      ],
      popular: false,
      cta: "Get Started",
      savings: null
    },
    {
      name: "Quarterly Plan",
      price: "₹39,000",
      period: "/3 months",
      description: "Best value for committed weight loss journey",
      features: [
        "Everything in Monthly Plan",
        "3-month medication supply",
        "Priority doctor scheduling",
        "Advanced nutrition coaching",
        "Personalized workout videos",
        "Weekly check-in calls",
        "Exclusive member community",
        "Recipe library access",
        "Save ₹6,000"
      ],
      popular: true,
      cta: "Most Popular",
      savings: "Save ₹6,000"
    },
    {
      name: "Annual Plan",
      price: "₹1,44,000",
      period: "/year",
      description: "Maximum savings for long-term transformation",
      features: [
        "Everything in Quarterly Plan",
        "12-month medication supply",
        "VIP doctor access",
        "One-on-one coaching sessions",
        "Body composition analysis",
        "Genetic testing (optional)",
        "Home visit option (select cities)",
        "Lifetime resources access",
        "Save ₹36,000"
      ],
      popular: false,
      cta: "Best Value",
      savings: "Save ₹36,000"
    }
  ];

  const whatsIncluded = [
    {
      category: "Medical Care",
      items: [
        "Licensed physician consultations",
        "Prescription GLP-1 medication",
        "Ongoing medical supervision",
        "Dosage adjustments as needed",
        "Side effect management",
        "Lab work coordination"
      ]
    },
    {
      category: "Nutrition Support",
      items: [
        "Personalized meal plans",
        "Calorie and macro tracking",
        "Recipe suggestions",
        "Dining out guidance",
        "Supplement recommendations",
        "Nutritionist consultations"
      ]
    },
    {
      category: "Fitness Guidance",
      items: [
        "Custom workout plans",
        "Exercise videos library",
        "Activity tracking",
        "Form correction guidance",
        "Progress adjustments",
        "Fitness coach access"
      ]
    },
    {
      category: "Support & Tools",
      items: [
        "Member dashboard",
        "Weight tracking",
        "Progress photos",
        "Measurements logging",
        "24/7 chat support",
        "Educational content"
      ]
    }
  ];

  const faqs = [
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. Payment is securely processed through our encrypted payment gateway."
    },
    {
      q: "Is there a setup or consultation fee?",
      a: "No! Your initial consultation with a doctor is included in your plan price. There are no hidden fees or setup charges."
    },
    {
      q: "Does insurance cover this?",
      a: "Some insurance plans may cover GLP-1 medications, especially if you have related health conditions. We provide all necessary documentation for insurance claims. Check with your provider about coverage."
    },
    {
      q: "Can I switch plans later?",
      a: "Yes! You can upgrade to a longer plan at any time and receive a prorated credit. Downgrades take effect at the next billing cycle."
    },
    {
      q: "What if the medication doesn't work for me?",
      a: "We offer a 90-day money-back guarantee. If you follow the programme and don't see results after 90 days, we'll refund your medication costs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Choose the plan that works best for your weight loss journey. All plans include medication, doctor care, and comprehensive support.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden ${
                  plan.popular 
                    ? 'ring-4 ring-primary shadow-2xl transform scale-105' 
                    : 'border-2 border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {plan.savings}
                    </div>
                  )}
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <Link 
                    href="/quiz"
                    className={`block w-full text-center py-3 rounded-md font-semibold transition mb-6 ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-secondary'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              All plans are billed upfront. Medication costs may vary based on dosage requirements.
            </p>
            <Link href="/quiz" className="text-primary font-semibold hover:text-secondary">
              Not sure which plan? Take our quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What's included in every plan</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive support for your weight loss journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatsIncluded.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">90-Day Money-Back Guarantee</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're confident you'll see results. If you follow the programme for 90 days and don't lose weight, we'll refund your medication costs. No questions asked.
            </p>
            <p className="text-sm text-gray-600">
              *Consultation fees are non-refundable as they cover medical services already provided.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Pricing FAQs</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards sustainable weight loss with medical support
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
