"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ClipboardIcon,
  DoctorIcon,
  PackageIcon,
  SupportIcon,
  CheckmarkBadgeIcon,
  MedicalCrossIcon,
  HomeDeliveryIcon,
  TargetIcon,
  UnlockIcon,
  MoneyBackIcon,
  SearchIcon,
  UploadIcon,
} from "@/components/icons/CheckIcon";
import { MEDICAL_CATEGORIES, PLATFORM_STATS } from "@/constants/categories";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = PLATFORM_STATS;

  const howItWorks = [
    {
      step: "01",
      title: "Search or Upload",
      description: "Find your specialty medicine by name or therapeutic area, or upload your prescription",
      Icon: ClipboardIcon
    },
    {
      step: "02",
      title: "Pharmacist Verification",
      description: "Our clinical pharmacists verify your prescription and handle prior authorization requirements",
      Icon: DoctorIcon
    },
    {
      step: "03",
      title: "Fast Delivery",
      description: "Get authentic specialty medications with temperature-controlled cold chain delivery within 24 hours in metros, next-day for tier-2/tier-3 cities",
      Icon: PackageIcon
    },
    {
      step: "04",
      title: "Expert Support",
      description: "Access 24/7 clinical support from our team of specialty-trained pharmacists",
      Icon: SupportIcon
    }
  ];

  const benefits = [
    {
      title: "Specialty & Imported Medications",
      description: "Rare disease biologics, oncology drugs, and complex therapies sourced from licensed manufacturers worldwide. Including imported medicines and GLP-1 therapies.",
      Icon: CheckmarkBadgeIcon,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Clinical Pharmacist Team",
      description: "Specialty-trained clinical pharmacists providing expert therapy management and patient support",
      Icon: MedicalCrossIcon,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cold Chain Delivery",
      description: "Temperature-controlled logistics (2-8°C) ensuring medication integrity from warehouse to doorstep",
      Icon: HomeDeliveryIcon,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Prior Authorization",
      description: "Complete insurance and prior authorization assistance for specialty medication coverage",
      Icon: TargetIcon,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Secure & Private",
      description: "HIPAA-compliant data encryption and complete confidentiality for all health information",
      Icon: UnlockIcon,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Patient Support Programs",
      description: "Financial assistance, adherence monitoring, and comprehensive disease state management programs",
      Icon: MoneyBackIcon,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Premium Hero Section */}
      <section id="main-content" className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-20 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-40 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm text-primary border border-white/30 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Super Specialty Pharmacy
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                India's Leading Super Specialty Pharmacy
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed max-w-3xl">
                Specialized and imported medications for rare diseases, oncology, rheumatology, and complex conditions. Serving metros, tier-2 & tier-3 cities with expert clinical support, cold chain delivery, and prior authorization assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#categories"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  <SearchIcon className="w-5 h-5" />
                  Browse Medicines
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/upload-prescription"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
                >
                  <UploadIcon className="w-5 h-5" />
                  Upload Prescription
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cold Chain Delivery
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Prior Authorization Support
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Clinical Pharmacist Team
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className={`hidden lg:block ${mounted ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              <div className="relative">
                {/* Main Card - Liquid Glass Effect */}
                <div className="glass-card p-8 rounded-3xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-7xl font-bold mb-4 animate-pulse-subtle text-white">500+</div>
                    <div className="text-2xl font-semibold mb-2 text-white">Specialty Medications</div>
                    <div className="text-white/90">Rare Disease & Complex Therapies</div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="glass-card p-4 rounded-xl transition-all duration-300">
                        <div className="text-3xl font-bold text-white">24/7</div>
                        <div className="text-sm text-white/90">Clinical Support</div>
                      </div>
                      <div className="glass-card p-4 rounded-xl transition-all duration-300">
                        <div className="text-3xl font-bold text-white">2-8°C</div>
                        <div className="text-sm text-white/90">Cold Chain</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-yellow-400 text-primary px-4 py-2 rounded-full font-bold shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                  Specialty Pharmacy ✓
                </div>
                <div className="absolute -bottom-6 -left-6 bg-green-400 text-primary px-4 py-2 rounded-full font-bold shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  Clinical Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-16 bg-white relative -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl card-shadow-lg hover:card-shadow-xl transition-all duration-300 hover:-translate-y-1 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-900 font-semibold text-base">{stat.label}</div>
                <div className="text-sm text-gray-700 leading-relaxed">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Medical Condition */}
      <section id="categories" className="py-24 bg-gradient-to-b from-white to-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SPECIALTY THERAPEUTIC AREAS
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Browse by Therapeutic Area</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Access specialty medications for oncology, rheumatology, rare diseases, and complex chronic conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDICAL_CATEGORIES.map((category, index) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className={`group relative bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} p-8 rounded-2xl text-white overflow-hidden hover:scale-105 transition-all duration-300 card-shadow-lg hover:card-shadow-xl ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  <category.Icon className="w-40 h-40" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <category.Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="text-white leading-relaxed mb-4 text-base">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{category.medicineCount}+ Medicines</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
            >
              <span>View all medicine categories</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Premium Design */}
      <section className="py-24 bg-gradient-to-b from-white to-novo-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #0F3F77 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SIMPLE PROCESS
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">How Medshood Works</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get your medicines delivered in 4 simple steps with expert pharmacist support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className={`relative ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.15}s`}}>
                <div className="bg-white p-8 rounded-2xl card-shadow hover:card-shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors" aria-hidden="true">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                    <step.Icon className="w-16 h-16" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{step.description}</p>
                  
                  {/* Arrow for non-last items */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-[45%] -right-4 transform -translate-y-1/2 text-primary/30">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/how-we-work" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
            >
              <span>Learn more about our process</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits - Modern Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Everything you need to succeed</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive clinical support for rare diseases, biologics, and complex chronic conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br ${benefit.color} p-8 rounded-2xl text-white overflow-hidden hover:scale-105 transition-all duration-300 card-shadow-lg hover:card-shadow-xl ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  <benefit.Icon className="w-40 h-40" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <benefit.Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white leading-relaxed text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-yellow-400 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
            GET STARTED TODAY
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Need medicines delivered?
          </h2>

          <p className="text-2xl mb-10 text-white leading-relaxed max-w-3xl mx-auto">
            Upload your prescription or search for medicines - delivered to your doorstep within 24-48 hours
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/upload-prescription"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <UploadIcon className="w-5 h-5" />
              Upload Prescription
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#categories"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              <SearchIcon className="w-5 h-5" />
              Browse Medicines
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-sm text-white/90">Medicines Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-white/90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24-48hr</div>
              <div className="text-sm text-white/90">Fast Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Trust & Compliance */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Trusted & Certified Healthcare Partner
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your safety and privacy are our top priorities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🏥</div>
              <div className="font-semibold text-gray-900 mb-1">Licensed Pharmacy</div>
              <div className="text-sm text-gray-900">Govt. of India Approved</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🔒</div>
              <div className="font-semibold text-gray-900 mb-1">HIPAA Compliant</div>
              <div className="text-sm text-gray-900">Patient Data Protected</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">✓</div>
              <div className="font-semibold text-gray-900 mb-1">Certified Pharmacists</div>
              <div className="text-sm text-gray-900">Clinical Expertise</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🌡️</div>
              <div className="font-semibold text-gray-900 mb-1">Cold Chain Certified</div>
              <div className="text-sm text-gray-900">WHO GDP Standards</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
