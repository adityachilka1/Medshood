'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckIcon,
  ClipboardIcon,
  DoctorIcon,
  PackageIcon,
  HeartIcon,
} from '@/components/icons/CheckIcon';

export default function PatientAssistanceProgram() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    annualIncome: '',
    medicineNeeded: '',
    medicalCondition: '',
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, this would submit to backend
    alert('Application submitted! Our team will contact you within 24 hours.');
  };

  const benefits = [
    {
      title: 'Up to 100% Off',
      description: 'Get life-saving medicines at no cost or significantly reduced prices',
      icon: '💰',
    },
    {
      title: 'Fast Approval',
      description: 'Most applications processed within 24-48 hours',
      icon: '⚡',
    },
    {
      title: 'Simple Process',
      description: 'Easy 3-step application with minimal documentation',
      icon: '📝',
    },
    {
      title: 'Dedicated Support',
      description: 'Personal assistance team to guide you through the entire process',
      icon: '🤝',
    },
  ];

  const eligibilityCriteria = [
    {
      category: 'Financial Eligibility',
      criteria: [
        'Annual household income below ₹3,00,000',
        'No health insurance coverage for specific medication',
        'Unable to afford prescribed medications',
        'Indian resident with valid identity proof',
      ],
    },
    {
      category: 'Medical Eligibility',
      criteria: [
        'Valid prescription from licensed physician',
        'Chronic or life-threatening condition requiring ongoing treatment',
        'Medicine is part of manufacturer\'s PAP',
        'No alternative affordable generic available',
      ],
    },
    {
      category: 'Documentation Required',
      criteria: [
        'Income certificate or salary slip',
        'Aadhaar card and address proof',
        'Doctor\'s prescription (dated within 6 months)',
        'Medical reports confirming diagnosis',
      ],
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Check Eligibility',
      description: 'Complete our quick eligibility form to see if you qualify for assistance',
      icon: <ClipboardIcon className="w-8 h-8" />,
    },
    {
      step: '2',
      title: 'Submit Documents',
      description: 'Upload required documents including prescription, income proof, and ID',
      icon: <CheckIcon className="w-8 h-8" />,
    },
    {
      step: '3',
      title: 'Application Review',
      description: 'Our team reviews your application and coordinates with manufacturer',
      icon: <DoctorIcon className="w-8 h-8" />,
    },
    {
      step: '4',
      title: 'Receive Medicines',
      description: 'Once approved, medicines are delivered to your doorstep at no or reduced cost',
      icon: <PackageIcon className="w-8 h-8" />,
    },
  ];

  const supportedCategories = [
    { name: 'Cancer Care', medicines: '120+', icon: '🎗️' },
    { name: 'Heart Disease', medicines: '85+', icon: '❤️' },
    { name: 'Diabetes', medicines: '95+', icon: '💉' },
    { name: 'HIV/AIDS', medicines: '60+', icon: '🛡️' },
    { name: 'Kidney Disease', medicines: '70+', icon: '🫘' },
    { name: 'Respiratory', medicines: '55+', icon: '🫁' },
  ];

  const faqs = [
    {
      q: 'Who is eligible for the Patient Assistance Program?',
      a: 'Patients with annual household income below ₹3,00,000, valid medical prescriptions, and no insurance coverage for their specific medication may qualify. Indian residents with chronic or life-threatening conditions are prioritized.',
    },
    {
      q: 'How long does the approval process take?',
      a: 'Most applications are reviewed within 24-48 hours. Once approved by the manufacturer, medicines are typically dispatched within 3-5 business days. Complex cases may take up to 7 days.',
    },
    {
      q: 'Do I need to reapply for each refill?',
      a: 'No. Once approved, you\'re enrolled for 6-12 months depending on the program. We\'ll remind you before renewal is needed. You may need to update income documentation annually.',
    },
    {
      q: 'What if my application is rejected?',
      a: 'We\'ll provide clear reasons for rejection and suggest alternatives, including generic medicines, other PAP options, or payment assistance plans. Our team will work with you to find a solution.',
    },
    {
      q: 'Is there any cost for applying?',
      a: 'No. The application process is completely free. There are no hidden charges or processing fees. We only help you access manufacturer-funded assistance programs.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Medshood
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <HeartIcon className="w-96 h-96 transform translate-x-24 -translate-y-24" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 glass px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              100% Free Assistance
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Patient Assistance{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Program</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/30 -rotate-1"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Can't afford your life-saving medicines? We help eligible patients access expensive medications at{' '}
              <span className="font-bold text-white">no cost or significantly reduced prices</span> through manufacturer assistance programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="group relative bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Check Your Eligibility
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a
                href="#how-it-works"
                className="group border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
              >
                How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-sm text-blue-200">Patients Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₹50Cr+</div>
                <div className="text-sm text-blue-200">Savings Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-blue-200">Medicines Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Why Choose Our PAP?</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              We simplify the complex process of accessing manufacturer assistance programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/20 ${
                  mounted ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-800">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Simple 4-step process to access life-saving medicines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary/20 -ml-4"></div>
                )}
                <div className="bg-white p-8 rounded-2xl text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-800">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Medicines We Cover</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Access assistance for 500+ medicines across major health conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-primary transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-gray-800">{category.medicines} medicines</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-800 mb-4">
              Don't see your condition? Contact us to check eligibility
            </p>
            <Link href="/contact" className="text-primary font-bold hover:underline">
              Contact Support →
            </Link>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Eligibility Criteria</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Check if you qualify for our Patient Assistance Program
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eligibilityCriteria.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-6">{section.category}</h3>
                <ul className="space-y-4">
                  {section.criteria.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Apply for Assistance</span>
            </h2>
            <p className="text-xl text-gray-800">
              Start your application in 2 minutes. Our team will contact you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold text-gray-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-900 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900"
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-gray-900 mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-gray-900 mb-2">Annual Household Income *</label>
              <select
                required
                value={formData.annualIncome}
                onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900"
              >
                <option value="">Select income range</option>
                <option value="below-100k">Below ₹1,00,000</option>
                <option value="100k-200k">₹1,00,000 - ₹2,00,000</option>
                <option value="200k-300k">₹2,00,000 - ₹3,00,000</option>
                <option value="above-300k">Above ₹3,00,000 (may not qualify)</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-gray-900 mb-2">Medicine You Need Assistance For *</label>
              <input
                type="text"
                required
                value={formData.medicineNeeded}
                onChange={(e) => handleInputChange('medicineNeeded', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900"
                placeholder="e.g., Keytruda, Opdivo, Revlimid"
              />
            </div>

            <div className="mb-8">
              <label className="block font-semibold text-gray-900 mb-2">Medical Condition *</label>
              <textarea
                required
                value={formData.medicalCondition}
                onChange={(e) => handleInputChange('medicalCondition', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900"
                placeholder="Briefly describe your condition and why you need this medication"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit Application
            </button>

            <p className="text-sm text-gray-800 mt-4 text-center">
              By submitting, you agree to our{' '}
              <Link href="/privacy" className="text-primary font-semibold">
                Privacy Policy
              </Link>
              . We'll never share your information without consent.
            </p>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-800 mb-4">
              Have more questions?
            </p>
            <Link href="/contact" className="text-primary font-bold text-lg hover:underline">
              Contact Our Support Team →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 border-2 border-green-100">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Your Privacy is Protected</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                All information is encrypted and shared only with relevant manufacturer programs. We never sell your data.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-bold">256-bit Encryption</div>
              </div>
              <div>
                <div className="text-3xl mb-2">✅</div>
                <div className="font-bold">HIPAA Compliant</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🛡️</div>
                <div className="font-bold">Secure Data Storage</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🤝</div>
                <div className="font-bold">No Data Sharing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Let Cost Stop Your Treatment
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
            Join 15,000+ patients who have accessed life-saving medicines through our assistance program
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <CheckIcon className="w-6 h-6" />
            Apply Now - It's Free
          </a>
          <p className="text-sm mt-6 text-blue-200">
            Average approval time: 24-48 hours | 95% approval rate for eligible patients
          </p>
        </div>
      </section>
    </div>
  );
}
