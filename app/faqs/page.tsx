import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQs() {
  const faqCategories = [
    {
      category: "About Medshood",
      questions: [
        {
          q: "What is Medshood?",
          a: "Medshood is India's leading super specialty pharmacy providing biologic therapies, rare disease medications, and imported specialty drugs. We focus on complex conditions including oncology, rheumatology, rare diseases, and chronic conditions requiring specialized medications and clinical support."
        },
        {
          q: "What types of medications do you provide?",
          a: "We specialize in high-value, temperature-sensitive medications including biologics, biosimilars, immunosuppressants, targeted cancer therapies, rare disease treatments, and imported specialty medications. We maintain cold chain facilities (2-8°C) and provide 500+ specialty medications across 8 therapeutic areas."
        },
        {
          q: "How is Medshood different from regular pharmacies?",
          a: "Unlike regular pharmacies, we specialize in complex specialty medications that require expert handling, cold chain storage, prior authorization support, clinical coordination, and patient assistance programs. Our pharmacists are specially trained in biologic therapies and rare disease management."
        },
        {
          q: "Where do you operate?",
          a: "We serve metros, tier-2, and tier-3 cities across India with nationwide cold chain delivery. Our 24/7 customer support and clinical team are available pan-India to assist patients with specialty medication needs."
        }
      ]
    },
    {
      category: "Ordering & Prescriptions",
      questions: [
        {
          q: "Do I need a prescription to order?",
          a: "Yes, all specialty medications require a valid prescription from a licensed physician. You can upload your prescription through our website, WhatsApp, or email. Our licensed pharmacists verify every prescription before dispensing."
        },
        {
          q: "What if I don't have a prescription?",
          a: "Browse our therapeutic areas to find medications for your condition, then consult your doctor for a prescription. We can also help connect you with specialist physicians for consultation if needed."
        },
        {
          q: "How do I upload my prescription?",
          a: "Upload your prescription via our website (Upload Prescription page), WhatsApp (+91-XXXX-XXXXXX), or email (prescriptions@medshood.com). Accepted formats include JPG, PNG, and PDF. Our pharmacists verify prescriptions within 2 hours."
        },
        {
          q: "Can I order imported medications?",
          a: "Yes, we source and supply imported specialty medications that may not be readily available in India. We handle import documentation, customs clearance, and ensure proper cold chain throughout the process."
        }
      ]
    },
    {
      category: "Delivery & Storage",
      questions: [
        {
          q: "How fast is delivery?",
          a: "Metro cities: 24 hours delivery. Tier-2 cities: 24-48 hours. Tier-3 cities: 2-3 days. All cold chain medications are shipped with temperature monitoring devices and insulated packaging to maintain 2-8°C throughout transit."
        },
        {
          q: "How do you maintain cold chain?",
          a: "We use WHO-GDP certified cold chain logistics with temperature-controlled vehicles, insulated packaging, ice gel packs, and real-time temperature monitoring. Every shipment includes a temperature log to verify proper storage conditions."
        },
        {
          q: "What if my medication arrives damaged?",
          a: "Contact us immediately at +91-XXXX-XXXXXX. We'll replace damaged medications at no cost. Every shipment includes temperature monitoring - if the cold chain was compromised, we'll send a replacement immediately."
        },
        {
          q: "Can I track my order?",
          a: "Yes, you'll receive SMS/WhatsApp tracking updates at every stage: prescription verification, order processing, dispatch, in-transit, and delivery. Call our 24/7 helpline for real-time status updates."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "Are specialty medications expensive?",
          a: "Specialty medications are often high-cost due to their complexity and manufacturing requirements. However, Medshood offers up to 85% savings compared to retail prices through our partnerships, bulk procurement, and patient assistance programs."
        },
        {
          q: "Do you accept insurance?",
          a: "Yes, we accept most health insurance policies and provide all necessary documentation for reimbursement claims. Our team assists with pre-authorization, claim filing, and insurance coordination."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept Cash on Delivery (COD), credit/debit cards, UPI, net banking, and digital wallets. For high-value medications, we also offer EMI options and payment plans through our financial partners."
        },
        {
          q: "Do you offer patient assistance programs?",
          a: "Yes, we help patients access manufacturer patient assistance programs (PAPs) that can provide free or discounted medications for eligible patients. Our team guides you through the application process and documentation."
        }
      ]
    },
    {
      category: "Clinical Support",
      questions: [
        {
          q: "Do you provide clinical support?",
          a: "Yes, our clinical team includes specialized pharmacists trained in biologic therapies, oncology, and rare diseases. We provide medication counseling, side effect management guidance, injection training, and adherence support."
        },
        {
          q: "Can you help with prior authorization?",
          a: "Absolutely. Prior authorization for specialty medications can be complex. Our dedicated team manages the entire process including documentation submission, insurance coordination, and follow-up with physicians and insurers."
        },
        {
          q: "Do you offer home injection training?",
          a: "Yes, for self-injectable biologics, we provide home training by qualified nurses. We demonstrate proper injection technique, storage handling, sharps disposal, and side effect monitoring. Training is free with your first order."
        },
        {
          q: "What if I experience side effects?",
          a: "Contact our 24/7 clinical helpline immediately. Our pharmacists can provide guidance on managing common side effects. For serious adverse events, we'll coordinate with your physician and help you access emergency care if needed."
        }
      ]
    },
    {
      category: "Therapeutic Areas",
      questions: [
        {
          q: "What therapeutic areas do you cover?",
          a: "We specialize in 8 therapeutic areas: Rheumatology (arthritis, lupus), Rare Diseases (Gaucher, Fabry), Cancer Care (targeted therapies, biologics), Neurology (MS, epilepsy), Gastroenterology (IBD, Crohn's), Cardiology (pulmonary hypertension), Respiratory (severe asthma), and Endocrinology (growth disorders)."
        },
        {
          q: "Do you have oncology medications?",
          a: "Yes, we stock targeted cancer therapies, immunotherapies, supportive care medications, and chemotherapy agents. Our oncology pharmacists provide counseling on administration, side effects, drug interactions, and supportive care measures."
        },
        {
          q: "Can you supply rare disease medications?",
          a: "Yes, rare disease medications are our specialty. We source orphan drugs and enzyme replacement therapies that are often difficult to obtain. We handle import documentation and ensure uninterrupted supply for chronic rare disease patients."
        },
        {
          q: "Do you stock biologic medications?",
          a: "Yes, we maintain extensive inventory of biologics including monoclonal antibodies, fusion proteins, biosimilars, and immunomodulators. All biologics are stored in validated cold chain facilities with 24/7 temperature monitoring."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm text-primary border border-white/30 shadow-lg">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Questions About Specialty Pharmacy?
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
            Find answers to common questions about ordering specialty medications, cold chain delivery, patient assistance programs, and clinical support
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  {categoryIndex + 1}
                </span>
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group border-b border-gray-200 pb-6 last:border-0"
                  >
                    <summary className="flex items-start justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-bold text-gray-900 pr-4 group-open:text-primary">
                        {faq.q}
                      </h3>
                      <svg
                        className="w-6 h-6 text-gray-900 group-open:rotate-180 transition-transform flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-900 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-white/95 mb-8">
            Our specialty pharmacy experts are available 24/7 to help you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Help Center
            </Link>
          </div>
          <p className="mt-8 text-white/90">
            Call us 24/7:{" "}
            <a href="tel:+918800000000" className="font-bold hover:underline">
              +91 88000 00000
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
