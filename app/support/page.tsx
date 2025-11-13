import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SupportPage() {
  const supportCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      links: [
        { text: 'How to Order Medicines', href: '/how-we-work' },
        { text: 'Upload Prescription Guide', href: '/upload-prescription' },
        { text: 'Creating an Account', href: '#account' },
        { text: 'Payment Methods', href: '#payment' },
      ]
    },
    {
      title: 'Orders & Delivery',
      icon: '📦',
      links: [
        { text: 'Track Your Order', href: '#tracking' },
        { text: 'Delivery Times & Areas', href: '#delivery' },
        { text: 'Cold Chain Delivery', href: '#cold-chain' },
        { text: 'Order Cancellation', href: '#cancellation' },
      ]
    },
    {
      title: 'Medicines & Prescriptions',
      icon: '💊',
      links: [
        { text: 'Browse by Condition', href: '/categories' },
        { text: 'Specialty Medications', href: '/specialty-biologics' },
        { text: 'Imported Medicines', href: '#imported' },
        { text: 'Prescription Requirements', href: '#prescriptions' },
      ]
    },
    {
      title: 'Patient Assistance',
      icon: '🤝',
      links: [
        { text: 'Patient Assistance Program', href: '/patient-assistance' },
        { text: 'Financial Help', href: '/patient-assistance#eligibility' },
        { text: 'Insurance & Prior Auth', href: '#insurance' },
        { text: 'Copay Assistance', href: '#copay' },
      ]
    },
    {
      title: 'Account & Billing',
      icon: '💳',
      links: [
        { text: 'Payment Issues', href: '#payment-issues' },
        { text: 'Refunds & Returns', href: '#refunds' },
        { text: 'Invoice & Receipts', href: '#invoice' },
        { text: 'Update Account Info', href: '#update-account' },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: '🔒',
      links: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Cookie Policy', href: '/cookies' },
        { text: 'Data Security', href: '#security' },
        { text: 'HIPAA Compliance', href: '#hipaa' },
      ]
    }
  ];

  const faqs = [
    {
      q: 'What are your customer support hours?',
      a: 'Our clinical pharmacist support team is available 24/7 to assist you with medication questions and concerns.'
    },
    {
      q: 'How quickly can I get help?',
      a: 'For urgent medication queries, call our hotline. For general inquiries, expect email responses within 4-6 hours during business hours.'
    },
    {
      q: 'Do you offer phone support?',
      a: 'Yes, call +91-XXXX-XXXXXX for 24/7 clinical pharmacist support. Our team can help with medication guidance, order tracking, and urgent concerns.'
    },
    {
      q: 'Can I chat with a pharmacist?',
      a: 'Yes, use our live chat feature to connect instantly with a specialty-trained clinical pharmacist during business hours.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Help Center
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8">
            Get the support you need for specialty medications, prescriptions, and patient assistance programs
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for help..."
                className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:outline-none text-lg"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Phone Support</h3>
              <p className="text-gray-900 mb-4">Talk to a clinical pharmacist anytime</p>
              <a href="tel:+91XXXXXXXXXX" className="text-primary font-semibold hover:underline">
                +91-XXXX-XXXXXX
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-900 mb-4">Instant messaging with our team</p>
              <button className="text-primary font-semibold hover:underline">
                Start Chat
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-900 mb-4">Response within 4-6 hours</p>
              <a href="mailto:support@medshood.com" className="text-primary font-semibold hover:underline">
                support@medshood.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Browse Help Topics
            </h2>
            <p className="text-xl text-gray-900">
              Find answers to common questions organized by category
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-primary hover:underline flex items-center gap-2"
                      >
                        <span>→</span>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-900">
              Quick answers to common support questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-900 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faqs"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-t border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🚨</div>
          <h2 className="text-3xl font-bold text-red-900 mb-4">
            Medical Emergency?
          </h2>
          <p className="text-lg text-red-700 mb-6">
            If you're experiencing a medical emergency, please call emergency services immediately or visit your nearest hospital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:102"
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition text-lg"
            >
              Call 102 (Ambulance)
            </a>
            <a
              href="tel:108"
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition text-lg"
            >
              Call 108 (Emergency)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
