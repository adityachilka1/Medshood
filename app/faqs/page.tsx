import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQs() {
  const faqCategories = [
    {
      category: "About Treatment",
      questions: [
        {
          q: "What is Medshood?",
          a: "Medshood is a comprehensive medical weight loss programme that combines FDA-approved GLP-1 medications with doctor supervision, nutrition coaching, and fitness guidance. We provide everything you need for sustainable weight loss in one convenient online platform."
        },
        {
          q: "How does GLP-1 medication work for weight loss?",
          a: "GLP-1 medications mimic a natural hormone in your body that regulates appetite and blood sugar. They work by reducing hunger, increasing feelings of fullness, slowing digestion, and improving blood sugar control. This combination helps you eat less naturally and lose weight sustainably."
        },
        {
          q: "How much weight can I expect to lose?",
          a: "Clinical studies show an average weight loss of 15-20% of body weight over 12 months with GLP-1 medications. For example, someone weighing 100 kg could expect to lose 15-20 kg. Individual results vary based on adherence, lifestyle factors, and metabolism."
        },
        {
          q: "How long does it take to see results?",
          a: "Most people notice reduced appetite within the first week. Visible weight loss typically begins in the first month (3-5%), with significant results appearing by month 3 (5-10%). Maximum weight loss is usually achieved by 12-16 months of continuous treatment."
        }
      ]
    },
    {
      category: "Eligibility",
      questions: [
        {
          q: "Am I eligible for GLP-1 treatment?",
          a: "You may be eligible if you: (1) Have a BMI of 27+ with weight-related health conditions (diabetes, high blood pressure, etc.), or (2) Have a BMI of 30+, and (3) Are 18 years or older. Complete our quiz to check your eligibility - a doctor will make the final determination."
        },
        {
          q: "What medical conditions make me ineligible?",
          a: "GLP-1 medications may not be suitable if you have: personal or family history of medullary thyroid cancer, multiple endocrine neoplasia syndrome type 2, pancreatitis, severe kidney disease, or if you're pregnant or breastfeeding. Your doctor will review your full medical history."
        },
        {
          q: "Can I use Medshood if I have diabetes?",
          a: "Yes! GLP-1 medications were originally developed for type 2 diabetes. They can help with both blood sugar control and weight loss. However, you'll need to inform your doctor about all diabetes medications you're taking to avoid interactions."
        },
        {
          q: "Do I need a referral from my primary doctor?",
          a: "No referral is needed. Our licensed physicians can evaluate you independently. However, we recommend informing your primary care doctor about starting any new treatment to ensure coordinated care."
        }
      ]
    },
    {
      category: "Medication",
      questions: [
        {
          q: "What medications do you offer?",
          a: "We offer two FDA-approved GLP-1 medications: Semaglutide (Wegovy/Ozempic) and Tirzepatide (Mounjaro/Zepbound). Your doctor will recommend the best option based on your medical history, goals, and insurance coverage."
        },
        {
          q: "How do I take the medication?",
          a: "Both medications are self-administered via a small injection once weekly. The injection uses a tiny needle (similar to insulin pens) and goes into the fatty tissue of your abdomen, thigh, or upper arm. Most patients find it quick and painless after the first few times."
        },
        {
          q: "What are the side effects?",
          a: "Common side effects include nausea, diarrhea, constipation, and reduced appetite, especially when starting or increasing dosage. These typically improve within 2-4 weeks. Rare but serious side effects include pancreatitis and gallbladder problems. Your doctor will monitor you closely."
        },
        {
          q: "Can I take GLP-1 with other medications?",
          a: "Generally yes, but some medications require special consideration. Be sure to tell your doctor about ALL medications and supplements you take. GLP-1 can slow digestion, which may affect absorption of other medications."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "How much does Medshood cost?",
          a: "Plans start from ₹12,000/month and include: GLP-1 medication, doctor consultations, nutrition coaching, fitness guidance, progress tracking tools, and 24/7 support. Pricing varies based on medication type and dosage. We offer monthly, quarterly, and annual plans."
        },
        {
          q: "Does insurance cover the cost?",
          a: "Some insurance plans cover GLP-1 medications for weight loss, especially if you have related health conditions. We provide all necessary documentation for insurance claims, but coverage varies by provider. Check with your insurance company about your specific benefits."
        },
        {
          q: "Can I cancel my subscription?",
          a: "Yes, you can cancel anytime without penalties or fees. We recommend consulting with your doctor before stopping treatment to ensure a safe transition and discuss options for maintaining your weight loss."
        },
        {
          q: "Do you offer refunds?",
          a: "We offer a 90-day money-back guarantee. If you don't see results after following the programme for 90 days, we'll refund your medication costs. Consultation fees are non-refundable as they cover actual medical services provided."
        }
      ]
    },
    {
      category: "Delivery & Logistics",
      questions: [
        {
          q: "Where do you deliver?",
          a: "We currently deliver across India to all major cities and most tier-2 and tier-3 cities. Enter your PIN code during checkout to confirm delivery availability in your area. Delivery typically takes 3-5 business days."
        },
        {
          q: "How is the medication packaged?",
          a: "Medications are shipped in temperature-controlled, insulated packaging to maintain proper storage conditions. Packages are discreet with no indication of medical contents. Each shipment includes ice packs and temperature monitors to ensure medication integrity."
        },
        {
          q: "What if I'm not home for delivery?",
          a: "Delivery partners will attempt delivery 2-3 times. We'll send you tracking information so you can coordinate. If you'll be away, you can reschedule your shipment through your member dashboard or contact support."
        },
        {
          q: "How do I store the medication?",
          a: "Unopened pens should be refrigerated at 2-8°C (36-46°F). Once in use, pens can be kept at room temperature (up to 30°C/86°F) for up to 4 weeks. Never freeze. Detailed storage instructions come with each shipment."
        }
      ]
    },
    {
      category: "Support & Monitoring",
      questions: [
        {
          q: "How often will I see a doctor?",
          a: "You'll have an initial consultation, then follow-up check-ins every 4 weeks for the first 3 months, then every 8-12 weeks thereafter. Additional consultations are available anytime if you have concerns or need dosage adjustments."
        },
        {
          q: "What kind of support do I get?",
          a: "Your programme includes: monthly doctor check-ins, personalized meal plans, fitness coaching, progress tracking tools, educational resources, and 24/7 support team access via messaging, phone, or email."
        },
        {
          q: "Can I contact support outside business hours?",
          a: "Yes! Our support team is available 24/7 via the member portal messaging system. For urgent medical concerns, we have on-call medical staff available around the clock."
        },
        {
          q: "What if the medication isn't working for me?",
          a: "If you're not seeing results after 4-8 weeks, your doctor can adjust your dosage or switch medications. Some patients need higher doses or a different medication to achieve optimal results. Regular monitoring helps us optimize your treatment."
        }
      ]
    },
    {
      category: "Lifestyle & Diet",
      questions: [
        {
          q: "Do I need to follow a specific diet?",
          a: "While there's no mandatory diet, we provide personalized meal plans to optimize your results. GLP-1 works best combined with a balanced, nutrient-dense diet. Our nutrition coaches help you make sustainable changes that fit your lifestyle and preferences."
        },
        {
          q: "Do I need to exercise?",
          a: "Exercise isn't required but is highly recommended for optimal results and overall health. Physical activity helps preserve muscle mass during weight loss, improves cardiovascular health, and enhances mood. We provide customized workout plans based on your fitness level."
        },
        {
          q: "Can I drink alcohol on GLP-1?",
          a: "Moderate alcohol consumption is generally acceptable, but be aware that alcohol can worsen side effects like nausea. Additionally, alcoholic drinks contain calories that can slow weight loss. Discuss your alcohol consumption with your doctor."
        },
        {
          q: "What happens after I reach my goal weight?",
          a: "Most patients need to continue treatment at a maintenance dose to prevent weight regain. Your doctor will create a long-term plan, which may include reduced dosing, transitioning to lifestyle maintenance, or continuing full treatment based on your individual needs."
        }
      ]
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Find answers to common questions about Medshood's medical weight loss programme, GLP-1 medications, and how we support your journey.
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

      {/* Quick Links */}
      <section className="py-12 bg-novo-gray border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-primary mb-4">Jump to section:</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat, index) => (
              <a 
                key={index}
                href={`#${cat.category.toLowerCase().replace(/ /g, '-')}`}
                className="bg-white text-primary px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary hover:text-white transition"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} id={category.category.toLowerCase().replace(/ /g, '-')} className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-novo-gray pb-4">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, qIndex) => (
                  <div key={qIndex} className="bg-novo-gray p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Still have questions?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Our support team is here to help. Reach out anytime and we'll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-secondary transition text-lg"
            >
              Contact Support
            </Link>
            <Link 
              href="/quiz" 
              className="border-2 border-primary text-primary px-8 py-4 rounded-md font-semibold hover:bg-primary hover:text-white transition text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
